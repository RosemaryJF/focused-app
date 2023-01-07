const db = require('./connection');
const { User, Climb, Crag, Day } = require('../models');

db.once('open', async () => {
  await Crag.deleteMany();

  const crags = await Crag.insertMany([
    { name: 'Bell Supercrag' },
    { name: 'Centennial Glen' },
    { name: 'Cosmic County' },
    { name: 'Sublime Point' },
    { name: 'Shipley' },
    { name: 'Pierces Pass' },
  ]);

  console.log('crags seeded');

  await Climb.deleteMany();

  const climbs = await Climb.insertMany([
    {
      name: 'Pluck-a-duck',
      description:
        "Superb wall and steep headwall, the last mantle move could be a heart breaker. One of the best 24's at Bell !!",
      grade: 24,
      crag: crags[0]._id,
      stars: 3,
      meters: 22,
      style: 'Sport',
    },
    {
      name: 'Rubber Lover',
      description:
        'One of the popular classics of the grade. Ringbolts and chalk show the way. All good fun.',
      grade: 25,
      crag: crags[1]._id,
      stars: 3,
      meters: 20,
      style: 'Sport',
    },
    {
      name: 'Supercal',
      description:
        'A very popular route, and one that seems to be a good introduction to the grade - probably due to the plethora of bolts at the crux.',
      grade: 26,
      crag: crags[4]._id,
      stars: 3,
      meters: 25,
      style: 'Sport',
    },
    {
      name: 'Gentlemens Drag',
      description:
        'Steep, thin and strenuous. The best thin crack in the mountains, maybe?',
      grade: 23,
      crag: crags[2]._id,
      stars: 3,
      meters: 28,
      style: 'Trad',
    },
    {
      name: 'Kizashi',
      description:
        "Roughly translates as 'something great is coming'. Thin seam crack that gets harder the higher you go. Never fear, there are no jams - it's all face moves and chicken wing gastons",
      grade: 25,
      crag: crags[3]._id,
      stars: 3,
      meters: 2,
      style: 'Sport',
    },
    {
      name: 'Reigning Steel Extension',
      description:
        'A great mix of crimps and sidepulls with an ever increasing pump to the very end. Hard 25 or easy 26.',
      grade: 25,
      crag: crags[3]._id,
      stars: 3,
      meters: 27,
      style: 'Sport',
    },
    {
      name: 'The Reality Dysfunction',
      description:
        "Ultra classic. Mostly superb jugs to a rest just before the redpoint crux right at the end. Take a ticket!",
      grade: 25,
      crag: crags[0]._id,
      stars: 3,
      meters: 20,
      style: 'Sport',
    },
    {
      name: 'Tsunami',
      description:
        "Was once one of the hardest routes in the Blue Mountains, and one of Mark's finest hours. Now a popular testpiece.",
      grade: 29,
      crag: crags[1]._id,
      stars: 3,
      meters: 25,
      style: 'Sport',
    },
    {
      name: 'Madge McDonald',
      description:
        'Absolute classic 25 and for many, their first. Centennial Glen climbing at its best.',
      grade: 25,
      crag: crags[1]._id,
      stars: 3,
      meters: 12,
      style: 'Sport',
    },
    {
      name: 'Language of Desire',
      description:
        'The original classic of Hot Flyer Wall.',
      grade: 24,
      crag: crags[4]._id,
      stars: 3,
      meters: 28,
      style: 'Sport',
    },
    {
      name: 'Hotel California',
      description:
        '10 pitch sport route.',
      grade: 22,
      crag: crags[5]._id,
      stars: 3,
      meters: 330,
      style: 'Sport Multi'
    },
    {
      name: 'Let Freedom Ring',
      description:
        'Very exposed route up a clean overhung wall - with zero vegetation or choss. Lots of bolts and air.',
      grade: 25,
      crag: crags[5]._id,
      stars: 2,
      meters: 130,
      style: 'Sport Multi'
    }
  ]);

  console.log('climbs seeded');

  await Day.deleteMany();

  const days = await Day.insertMany([
    {
      climber: users[0]._id,
      dayDate: 130123,
      crag: crags[0]._id,
      climb: climbs[0]._id,
      focus: 'Redpoint',
      attempts: 2,
      rests: 2,
      beta: 'Heel hook side flake 4th-5th draw',
      notes: null,
    },
    {
      climber: users[0]._id,
      dayDate: 140123,
      crag: crags[5]._id,
      climb: climbs[11]._id,
      focus: 'Send',
      attempts: 1,
      rests: 0,
      beta: null,
      notes: 'Enjoyed the rests, took in the view',
    },
    {
      climber: users[1]._id,
      dayDate: 010123,
      crag: crags[1]._id,
      climb: climbs[7]._id,
      focus: 'Beta puzzle',
      attempts: 4,
      rests: 6,
      beta: 'Go for the dyno, rest is not as good as you think',
      notes: 'Extended draw 7th bolt',
    },
    {
      climber: users[1]._id,
      dayDate: 030123,
      crag: crags[5]._id,
      climb: climbs[10]._id,
      focus: 'Send',
      attempts: 1,
      rests: 0,
      beta: 'Move fast on the first move',
      notes: 'skin raw by 4th pitch, should have had more rest days',
    },
  ]);

  console.log('days seeded');

  await User.deleteMany();

  const users = await User.createMany([
    {
      firstName: 'Hazel',
      lastName: 'Findlay',
      email: 'hazel.findlay@testmail.com',
      password: 'password12345',
      days: [
        {
          days: [days[0]._id, days[1]._id]
        }
      ]
    },
    {
      firstName: 'Wolfgang',
      lastName: 'Gullich',
      email: 'wolfgang.g@testmail.com',
      password: 'password12345',
      days: [
        {
          days: [days[2]._id, days[3]._id]
        }
      ]
    }
  ]);

  console.log('users seeded');

  process.exit();
});
