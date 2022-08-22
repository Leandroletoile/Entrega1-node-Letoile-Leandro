const notFound = (__req, __res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    return next(err); 
  }

const errorHandler = {
    notFound
}

module.exports = errorHandler;