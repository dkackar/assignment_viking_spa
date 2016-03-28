var vikingStore = angular.module( 'vikingStore',['ui.router'] );

vikingStore.config( function( $stateProvider, $urlRouterProvider ){
  
  // Set our root / default path
  $urlRouterProvider.otherwise("");

  $stateProvider


    // The default '/listings/#/' state
    .state('listings', {
      url: '',
      // templateUrl: 'javascripts/templates/listings.html',
      // controller: function(){ 
      //   console.log("/# Controller!");
      // },
      views: {
        'title': {
          templateUrl: 'javascripts/templates/listings/_title.html',
          controller: function(){ 
            console.log("_titleController");
          }
        },
        'index': {
          templateUrl: 'javascripts/templates/listings/_index_panel.html',
          controller: function(){ 
            console.log("_indexPanelController");
          }
        },
        'show': {
          templateUrl: 'javascripts/templates/listings/_show.html',
          controller: function(){ 
            console.log("_showWrapperController");
          }
        },
      }
    })


    // '/listings/#/show/123'
    .state('listings.show', {
      url: '/show/:id/',
      templateUrl: 'javascripts/templates/listings/show.html',
      controller: function( $scope, $stateParams ){ 
        console.log("listing.show Controller!");
        $scope.listingId = $stateParams.id;
      },
    })


    // '/listings/#/show/123/photo'
    .state('listings.show.photo', {
      url: 'photo',
      templateUrl: 'javascripts/templates/listings/show/photo.html',
      controller: function( $scope, $stateParams ){ 
        console.log("listing.show.photo Controller!");
        $scope.listingId = $stateParams.id;
      },
    })


    // '/listings/#/show/123/details'
    .state('listings.show.details', {
      url: 'details',
      templateUrl: 'javascripts/templates/listings/show/details.html',
    })


    // '/listings/#/show/123/contact'
    .state('listings.show.contact', {
      url: 'contact',
      templateUrl: 'javascripts/templates/listings/show/contact.html',
    })
});


// ADDING ERROR HANDLING
routingDemo.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});