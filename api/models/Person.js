/**
 * Person.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name: {
      type: "string"
    },
    
    patientName: {
      type: "string"
    },

    diseaseName: {
      type: "string"
    },

    age: {
      type: "number"
    },

    eventName: {
      type: "text"
    },

    shortDescription: {
      type: "text"
    },

    fullDescription: {
      type: "text"
    },

    imageURL: {
      type: "text"
    },

    organizer: {
      type: "text"
    },

    eventDate: {
      type: 'string',
      columnType: 'date'
    },

    time: {
      type: "text"
    }, 

    startDate: {
      type: 'string',
      columnType: 'date'
    }, 

    endDate: {
      type: 'string',
      columnType: 'date'
    }


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

  getInvalidIdMsg: function (opts) {

    if (typeof opts.id === "undefined" || isNaN(parseInt(opts.id)))
      return "Event id incorrect.";

    return null;        // falsy

  },
};

