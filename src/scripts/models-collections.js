
const Backbone = require('backbone')
const $ = require('jquery')

const EtsyModel = Backbone.Model.extend ({

})


const EtsyCollection = Backbone.Collection.extend({
   model: EtsyModel,

   url: "",

   parse: function (rawJSONes){
      return rawJSONes.results
   },


   initialize: function(){

      if (window.location.hash === 0){
         return this.url= "https://openapi.etsy.com/v2/listings/active.js?includes=Images,listing_id&api_key=c1sxkb0seoqco4yttq900i3r&callback=?"
      } else {
         return this.url= "https://openapi.etsy.com/v2/listings/active.js?includes=Images,listing/${itemObj.get('listing_id')}&api_key=c1sxkb0seoqco4yttq900i3r&callback=?"

      }
   }

})

module.exports = EtsyCollection
