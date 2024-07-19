class SiteController {
    // [GET] /search
    search(req, res) {
        res.render('Search');
    }
    // [GET] /
    index(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController();
