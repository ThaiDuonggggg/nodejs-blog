const Course = require('../models/Course');

class SiteController {
    // [GET] /
    index(req, res, next) {
        // Use promise get value from mongoDB
        Course.find({})
            .lean()
            .then((course) =>
                res.render('home', {
                    course,
                }),
            )
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('Search');
    }
}

module.exports = new SiteController();
