require.config({

  deps: [ "main" ],

  paths: {
    // JavaScript libs
    lib: "../assets/js/lib",
    modules: "./modules",

    jquery: "../assets/js/lib/jquery",
    backbone: "../assets/js/lib/backbone",
    handlebars: "../assets/js/lib/handlebars",

    // External assets
    facebook: "https://connect.facebook.net/en_US/all"
  },

  shim: {
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },

    facebook: {
      exports: "FB"
    },

    handlebars: {
      exports: "Handlebars"
    }
  }
});
