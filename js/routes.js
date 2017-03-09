 angular.module('app')

 .config(function($stateProvider, $urlRouterProvider) {

     var viewsPrefix = 'views/';

     $stateProvider

         .state('index', {
         url: '',
         abstract: true,
         views: {
             '': {
                 templateUrl: viewsPrefix + 'layout/layout.html'
             },
             'header@index': {
                 templateUrl: viewsPrefix + 'layout/header.html'
             },
             'menuLeft@index': {
                 templateUrl: viewsPrefix + 'layout/menuLeft.html'
             },
             'footer@index': {
                 templateUrl: viewsPrefix + 'layout/footer.html'
             }
         }
     })

     .state('index.home', {
         url: '/home',
         views: {
             'content': {
                 templateUrl: viewsPrefix + 'home.html',
             }
         }
     });

     //      .state('index.users', {
     //     url: '/users',
     //     views: {
     //         'content': {
     //             templateUrl: viewsPrefix + 'users.html',
     //             controller: 'UsersCtrl'
     //         }
     //     }
     // })


     // .state('index.users/:id', {
     //     cache: false,
     //     url: '/users/:id',
     //     views: {
     //         'content': {
     //             templateUrl: viewsPrefix + 'usersEdit.html',
     //             controller: 'UsersCtrlEdit'
     //         }
     //     }
     // })

     // .state('index.teste', {
     //     url: '/teste',
     //     views: {
     //         'content': {
     //             templateUrl: viewsPrefix + 'teste.html'
     //         }
     //     }
     // })


     // caminho inicial/
     $urlRouterProvider.otherwise("/home");


 });
