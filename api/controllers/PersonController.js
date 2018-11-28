/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // action - create
    create: async function (req, res) {

        if (req.method == "GET")
            return res.view('person/create');

        if (typeof req.body.Person === "undefined")
            return res.badRequest("Nothing Input");

        await Person.create(req.body.Person);

        var age = req.body.Person.age;
        var smoking = req.body.Person.smoking;
        var asthma= req.body.Person.Asthma;
        var pad = req.body.Person.PAD;
        var size = req.body.Person.sizeOfTheOriginalTumour;
        var deathRate1 = 0;
        var deathRate2 = 0;
        var deathRate3 = 0;
        var deathRate4 = 0;


        if(smoking) deathRate1 = 0.9;
        else if(!smoking) deathRate1 = 0.8;

        if(asthma) deathRate2 = 0.9;
        else if(!asthma) deathRate2 = 0.8;

        if(pad) deathRate3 = 0.9;
        else if(!pad) deathRate3 = 0.8;

        if(size) deathRate4 = 0.9;
        else if(!size) deathRate4 = 0.8;

        var deathRate = deathRate1*deathRate2*deathRate3*deathRate4*100;

        return res.ok("i can "+ deathRate +"% guarantee you will die in 1 year");
    },

    // action - index
    index: async function (req, res) {

        var models = await Person.find();
        return res.view('person/index', { persons: models });

    },

    // action - detail
    detail: async function (req, res) {

        var message = Person.getInvalidIdMsg(req.params);

        if (message) return res.badRequest(message);

        var model = await Person.findOne(req.params.id);

        if (!model) return res.notFound();

        return res.view('person/detail', { person: model });

    },

    // action - admin
    admin: async function (req, res) {

        var models = await Person.find();
        return res.view('person/admin', { persons: models });

    },

    // action - delete
    delete: async function (req, res) {

        //if (req.method == "GET") return res.forbidden();

        var message = Person.getInvalidIdMsg(req.params);

        if (message) return res.badRequest(message);

        var models = await Person.destroy(req.params.id).fetch();//fetch();yonglaishanchude

        if (models.length == 0) return res.notFound();

        return res.ok("Person Deleted.");

    },
    // action - update
    update: async function (req, res) {

        var message = Person.getInvalidIdMsg(req.params);

        if (message) return res.badRequest(message);

        if (req.method == "GET") {

            var model = await Person.findOne(req.params.id);

            if (!model) return res.notFound();

            return res.view('person/update', { person: model });

        } else {

            if (typeof req.body.Person === "undefined")
                return res.badRequest("Form-data not received.");

            var models = await Person.update(req.params.id).set({
                name: req.body.Person.name,
                age: req.body.Person.age,
                eventName: req.body.Person.eventName,
                shortDescription: req.body.Person.shortDescription,
                fullDescription: req.body.Person.fullDescription,
                imageURL: req.body.Person.imageURL,
                organizer: req.body.Person.organizer,
                eventDate: req.body.Person.eventDate,
                time: req.body.Person.time,
            }).fetch();

            if (models.length == 0) return res.notFound();

            return res.ok("Record updated");

        }
    },

    // action - paginate
    paginate: async function (req, res) {

        const qPage = Math.max(req.query.page - 1, 0) || 0;
        const numOfItemsPerPage = 2;

        const qName = req.query.patientName || "";
       
        var models = await Person.find({
            limit: numOfItemsPerPage,
            skip: numOfItemsPerPage * qPage,

            where: {
                patientName: { contains: qName },
            },
            sort: 'patientName'
        });
        console.log("length:%s", models.length);

        var search = await Person.find({

            where: {
                patientName: { contains: qName },
            },
        });

        var numOfPage = Math.ceil(await search.length / numOfItemsPerPage);
        return res.view('person/paginate', { persons: models, count: numOfPage });
    },

};

