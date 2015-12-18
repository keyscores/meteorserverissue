Router.configure({
//what to do if no page is found
  notFoundTemplate: 'hello',
  loadingTemplate: 'hello'
});

Router.route('/.*/', function () {
  this.render('hello')
});
