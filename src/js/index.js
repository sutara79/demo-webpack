/**
 * @file jquery.my-plugin
 * @version 0.0.1
 * @author Yuusaku Miyazaki <toumin.m7@gmail.com>
 * @license MIT
 */
import fn_myPlugin from './jQuery.fn/myPlugin';
import myPlugin    from './jQuery/myPlugin';
import _initOption from './jQuery/_initOption';
import getInfo     from './jQuery/getInfo';

/*global $*/
/** @external jQuery */
$.fn.myPlugin = fn_myPlugin;
$.myPlugin    = myPlugin;
$.extend($.myPlugin.prototype, {
  _initOption: _initOption,
  getInfo:     getInfo
});