/**
 * Get information from DB via PHP
 * @method external:jQuery.myPlugin.prototype.getInfo
 * @public
 */
/*global $*/
export default function getInfo() {
  var self = this;
  $.get(this.option.url, {q: this.option.q}, function(res) {
    $(self.elem).text(res);
  });
}