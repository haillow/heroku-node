var brand = 'Q4 Scrape';

exports.index = function(req, res){
    res.redirect('/home');
}

exports.home = function(req, res){
    res.render('home', { title: 'Home', content: "Some Home page content"})
};

exports.about = function(req, res){
    res.render('about', { title: 'About', content: "Some About page content" })
};