const Backbone = require('backbone')
const $ = require('jquery')

// console.log('Hi');
var ProfileMultiView = Backbone.View.extend({
  el: '#app-container',


  events: {
    "click #item_listing" : "handleProfileSelect"
},

  handleProfileSelect: function(e){
    window.location.hash = `listing/${e.currentTarget.id}`
  },


homePageBuilder: function (collectionData){

   var bigStr = collectionData.models.map(function(itemObj){

      // var imgLocation = itemObj.get('Images')

         return `
                       <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" id="item_listing">
                        <a href="#listing/${itemObj.get('listing_id')}">
                         <div class="thumbnail">
                           <img src=${itemObj.get('Images')[0].url_170x135} alt="...">
                           <div class="caption">
                             <h3>${itemObj.get('title').substring(0, 30)}...</h3>
                             <p>${itemObj.get('user_id')} ${itemObj.get('price')}</p>
                           </div>
                        </div>
                        </a>
                     </div>

         `
      }).join('')

      return bigStr
      // console.log(bigStr);

},

   render:function(data){
      this.el.innerHTML = this.homePageBuilder(data)
   }
})

module.exports = ProfileMultiView
