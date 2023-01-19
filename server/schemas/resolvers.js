const { AuthenticationError } = require('apollo-server-express');
const { User, Climb, Crag, Day } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  // Queries
  Query: {
    // All crags 
    crags: async () => {
      return await Crag.find({}).populate('climbs').populate({
        path: 'climbs',
        populate: 'name'
      });
    },

    // All Climbs
    climbs: async () => {
      return await Climb.find({}).populate('crag')
    },

    // All Days
    days: async () => {
      return await Day.find().sort({ dayDate: -1 });
    },

    // One crag
    crag: async (parent, { _id }) => {
      return await Crag.findById(_id).populate('climbs')
      //   .populate({
      //   path: 'climbs',
      //   populate: 'name'
      // });
    },

    // One Climb
    climb: async (parent, { _id }) => {
      return await Climb.findById(_id).populate('crag');
    },

    // One day
    day: async (parent, { _id }) => {
      return await Day.findById(_id).populate('climb')
    },

    // One user
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'days',
          populate: 'day'
        });
        return user;
      }
      throw new AuthenticationError('Not logged in');
    },

    day: async (parent, { _id }, context) => {
      if (context.climber) {
        const user = await User.findById(context.user._id).populate({
          path: 'user',
          populate: 'name'
        });

        return user.days.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
  },

  // Mutations
  Mutation: {

    // Adding a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // Adding a new day
    addDay: async (parent, { climbs }, context) => {
      console.log(context);
      if (context.user) {
        const day = new Day({ climbs });

        await User.findByIdAndUpdate(context.user._id, { $push: { days: day } });

        return day;
      }

      throw new AuthenticationError('Not logged in');
    },

    // Updating an existing user
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    // Updating an existing day
    updateDay: async (parent, args, context, info) => {
      const { id } = args;
      const { user, dayDate, crag, climb, focus, attempts, rests, beta, notes } = args.day;
      const day = await Day.findByIdAndUpdate(
        id,
        { user, dayDate, crag, climb, focus, attempts, rests, beta, notes },
        { new: true }
      );
      return day;
    },

    // Deleting an existing day
    deleteDay: async (parent, { _id }) => {
      return await Day.deleteOne({ _id });
    },

    // Log in a returning user
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
    },
  }
};

module.exports = resolvers;


