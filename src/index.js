/*global $*/
/** @external jQuery */
import fn_myPlugin from './fn_myPlugin';
import myPlugin    from './myPlugin';
import method      from './method';

$.fn.myPlugin = fn_myPlugin;
$.myPlugin    = myPlugin;
$.extend($.myPlugin.prototype, method);