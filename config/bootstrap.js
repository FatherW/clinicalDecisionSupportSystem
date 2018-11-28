/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function (done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  await Person.createEach([
    {"patientName":"Hong Ge","age":33,"smoking":true,"Asthma":true,"PAD":true,"sixMonthsMI":"1","createdAt":1543372226520,"updatedAt":1543372226520,"id":60,"sizeOfTheOriginalTumour":"","_id":60},
    {"patientName":"Philippe","age":59,"smoking":true,"Asthma":true,"PAD":true,"sixMonthsMI":"4","createdAt":1543372364860,"updatedAt":1543372364860,"id":61,"sizeOfTheOriginalTumour":"","_id":61},
    {"patientName":"RickyHou","age":60,"smoking":true,"Asthma":true,"PAD":true,"sixMonthsMI":"4","createdAt":1543372375955,"updatedAt":1543372375955,"id":62,"sizeOfTheOriginalTumour":"","_id":62},
    {"patientName":"Asin","age":61,"smoking":false,"Asthma":false,"PAD":false,"sixMonthsMI":"3","createdAt":1543372437494,"updatedAt":1543372437494,"id":63,"sizeOfTheOriginalTumour":"","_id":63}

    //    { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
    //    { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
    // etc.
  ]);
  // ```

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
