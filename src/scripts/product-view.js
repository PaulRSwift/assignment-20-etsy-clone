const Backbone = require('backbone')
const $ = require('jquery')

module.exports =  Backbone.View.extend({

   el: '#app-container',

   render: function(){

      this.el.innerHTML = '<h2>stuff to buy. please spend ur money</h2>'

   }

})
