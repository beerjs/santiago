(function () { 
  'use strict'

  var createApp = function () {
    return new Vue({
      template: '<div id="app">{{ message }}</div>',
      data: {
        message: 'BeerJS Santiago'
      },
      created: function () {
        console.log('👍 running');
      }
    })
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = createApp
  } else {
    this.app = createApp()
  }

}).call(this)