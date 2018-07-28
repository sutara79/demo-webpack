/*global $*/
/** @lends external:jQuery.myPlugin.prototype */
export default {
  /**
   * Initialize options
   *
   * @private
   * @param  {object} option - Options
   * @return {object} Initialized options
   */
  _initOption: function (option) {
    return $.extend({
      url: './dist/php/ajax.php',
      q: 'a'
    }, option);
  },

  /**
   * Get information from DB via PHP
   *
   * @public
   */
  getInfo: function () {
    var self = this;
    $.get(this.option.url, {q: this.option.q}, function(res) {
      $(self.elem).text(res);
    });
  }
}