const Backbone = require('backbone')
const $ = require('jquery')
const EtsyCollection = require('./models-collections.js')
const homePageBuilder = require('./home-view.js')
var ViewTemplate = require('./view-constructor.js')
const productPageBuilder = require('./prodcut-view.js')



// console.log(Backbone)
document.querySelector('#app-container').innerHTML = `<h1>YOLO</h1>`

var ProfileMultiView = Backbone.View.extend({
  el: '#container',

  coll: null,

  events: {
    "click #listing" : "handleProfileSelect"
  },

  handleProfileSelect: function(e){
    window.location.hash = "#listing/"+e.currentTarget.id
  },

  initialize: function(collectionPls){
    this.coll = collectionPls
    console.log(this.coll)
    this.coll.on("sync", this.render.bind(this) )
  },
 })

const AppRouter = Backbone.Router.extend({
   routes: {
      "listing/:id" : "showDetailsPage",
      "" : "showHomePage"

   },


   showDetailsPage: function (itemArg){
      var singItemColl = new EtsyCollection(itemArg)
      var singleItemview = new ViewTemplate ('#app-container', productPageBuilder )
      //  var itemId = window.location.hash
      //  console.log(itemId);

      // singleItemview.fetch().then(function(){
      //    var singItemDispaly = singleItemview.models
      //    singleItemview.render(singItemColl)

      // })
   },



   showHomePage: function (){
      var etsyColl = new EtsyCollection()
      var mutithumbview = new ViewTemplate ('#app-container', homePageBuilder)

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
