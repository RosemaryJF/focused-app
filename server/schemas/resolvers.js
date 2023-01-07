const { AuthenticationError } = require('apollo-server-express');
const { User, Climb, Crag, Day } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    crags: async () => {
      return await Crag.find();
    },
    climbs: async (parent, { crag, name }) => {
      const params = {};

      if (crag) {
        params.crag = crag;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Climb.find(params).populate('crag');
    },
    // crag: async (parent, { _id }) => {
    //   return await Crag.findById(_id).populate('climb');
    // },
    climb: async (parent, { _id }) => {
      return await Climb.findById(_id).populate('crag');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'days.climbs',
          populate: 'crag'
        });

        user.days.sort((a, b) => b.dayDate - a.dayDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    day: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'days.climbs',
          populate: 'crag'
        });

        return user.days.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    // STRIPE
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const day = new Day({ climbs: args.climbs });
    //   const line_items = [];

    //   const { climbs } = await day.populate('climbs');

    //   for (let i = 0; i < climbs.length; i++) {
    //     const climb = await stripe.climbs.create({
    //       name: climbs[i].name,
    //       description: climbs[i].description,
    //       images: [`${url}/images/${climbs[i].image}`]
    //     });

    //     const price = await stripe.prices.create({
    //       climb: climb.id,
    //       unit_amount: climbs[i].price * 100,
    //       currency: 'aud',
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });

    //   return { session: session.id };
    // }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addDay: async (parent, { climbs }, context) => {
      console.log(context);
      if (context.user) {
        const day = new Day({ climbs });

        await User.findByIdAndUpdate(context.user._id, { $push: { days: day } });

        return day;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    // UPDATE DAY FUNCTION TO FIX
    // updateDay: async (parent, { _id, quantity }) => {
    //   const decrement = Math.abs(quantity) * -1;

    //   return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    // },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;


