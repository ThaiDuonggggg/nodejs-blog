const Course = require('../models/Course');

class CourseController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}).lean(), Course.countDocumentsWithDeleted({ deleted: true })])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses,
                }),
            )
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
