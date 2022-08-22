let dates = {
    myDate,
    today,
    month,
    year,
    displayDate
}

function myDate(req, __res, next) {
    req.date = new Date();
    next();
}

function today(req, __res, next) {
    let today = req.date;
    req.today = today.getDay();
    console.log(req.today.toLocaleString())
    next();
}

function month(req, __res, next) {
    let today = req.date;
    req.month = today.getMonth();
    console.log(req.month.toLocaleString());
    next();
}

function year(req, __res, next) {
    let today = req.date;
    req.year = today.getYear();
    console.log(req.year.toLocaleString());
    next();
}

function displayDate(req, __res, next) {
    console.log(`Today is ${req.today} at ${req.month} of ${req.year}`)
    next()
}

module.exports = dates;

