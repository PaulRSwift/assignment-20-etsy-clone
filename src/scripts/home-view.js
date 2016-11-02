const Backbone = require('backbone')
const $ = require('jquery')

// console.log('Hi');


var length = 30;

// console.log(imgLocation);

var homePageBuilder = function (collectionData){

   var bigStr = collectionData.models.map(function(itemObj){

      // var imgLocation = itemObj.get('Images')

         return `
                     <a href="#listing${itemObj.get('listing_id')}">
                       <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                         <div class="thumbnail">
                           <img src=${itemObj.get('Images')[0].url_170x135} alt="...">
                           <div class="caption">
                             <h3>${itemObj.get('title').substring(0, length)}...</h3>
                             <p>${itemObj.get('user_id')} ${itemObj.get('price')}</p>
                           </div>
                        </div>
                     </a>
                    </div>
         `
      }).join('')

      return bigStr
      // console.log(bigStr);

}

module.exports = homePageBuilder
