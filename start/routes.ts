import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/users', 'UsersController.create');
  Route.get('/users', 'UsersController.index');
}).prefix('/api');



