const Course = require('../models/Course');

class CourseController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        console.log(req);
        Course.find({})
            .lean()
            .then((course) => {
                res.render('me/stored-courses', { course });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
