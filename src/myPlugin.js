/**
 * @class external:jQuery.myPlugin
 * @arg {object} elem   - Target element to aplly this plugin
 * @arg {object} option - Options sent by user
 */
export default function myPlugin(elem, option) {
  this.elem = elem;
  this.option = this._initOption(option);
  this.getInfo();
}
