/**
 * Initialize options
 * @method external:jQuery.myPlugin.prototype._initOption
 * @private
 */
/*global $*/
export default function _initOption(option) {
  return $.extend({
    url: './dist/php/ajax.php',
    q: 'a'
  }, option);
}