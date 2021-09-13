exports.get404Page = (req, res, next) => {
  console.log('=> Page Not Found Response ', req.url);
  res.status(404).render('404_error', {
    title: '404 | Page Not Found',
    path: null,
  });
};
