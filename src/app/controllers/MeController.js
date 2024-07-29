const Course = require('../models/Course');

class CourseController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .lean()
            .then((course) => {
                res.render('me/stored-courses', { course });
            })
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .lean()
            .then((course) => {
                res.render('me/trash-courses', { course });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
