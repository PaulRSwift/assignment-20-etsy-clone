const Backbone = require('backbone')
const $ = require('jquery')
const EtsyCollection = require('./models-collections.js')
const ProfileMultiView = require('./home-view.js')
var ViewTemplate = require('./view-constructor.js')
const ProductView = require('./product-view.js')



// console.log(Backbone)
document.querySelector('#app-container').innerHTML = `<h1>YOLO</h1>`



const AppRouter = Backbone.Router.extend({
   routes: {
      "listing/:id" : "showDetailsPage",
      "" : "showHomePage"

   },


   showDetailsPage: function (itemArg){
      var singItemColl = new EtsyCollection(itemArg)
      var singleItemview = new ProductView()
      singleItemview.render()
      //  var itemId = window.location.hash
      //  console.log(itemId);

      // singleItemview.fetch().then(function(){
      //    var singItemDispaly = singleItemview.models
      //    singleItemview.render(singItemColl)

      // })
   },



   showHomePage: function (){
      var etsyColl = new EtsyCollection()
      var mutithumbview = new ProfileMultiView()
      // var mutithumbview = new ViewTemplate('#app-container', ProfileMultiView)

      etsyColl.fetch().then(function(){
         var itemDisplay = etsyColl.models[0].get('title')
         console.log(etsyColl)
         console.log(itemDisplay);
         mutithumbview.render(etsyColl)

      })
   },

   initialize:function(){
      Backbone.history.start()
   },

})

var app = new AppRouter
