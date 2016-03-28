var vikingStore = angular.module( 'vikingStore',['ui.router', 'fakerModule'] );

vikingStore.config( function( $stateProvider, $urlRouterProvider ){

  // Set our root / default path
  $urlRouterProvider.otherwise("/products");

  $stateProvider

    .state('products', {
      url: '/products',
      templateUrl: 'javascripts/templates/products.html',
      controller: 'productCtrl'
    })
    .state('products.index', {
      url: '/index',
      templateUrl: 'javascripts/templates/products_index.html'
    })
});


// ADDING ERROR HANDLING
vikingStore.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
