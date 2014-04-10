define([
  "facebook",
  "backbone"
],

function( FB, Backbone ) {

  var Views = {};

  Views.Login = Backbone.View.extend({

    initialize: function( options ) {
      FB.getLoginStatus( _.bind( function( response ) {
        this.handleLogin( response.status );
      }, this ) );
    },

    handleLogin: function( status ) {
      
    }
  });
});
