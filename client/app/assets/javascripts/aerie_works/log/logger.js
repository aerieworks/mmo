'use strict';
(function ($) {
  function Logger(ns /* optional */, name) {
    if (arguments.length === 1) {
      this.name = ns;
    } else {
      this.name = name;
      while (ns !== window) {
        this.name = ns._name + '.' + this.name;
        ns = ns._parent;
      }
    }
  }

  function log(level /* optional */, message) {
    var minLevel = window.__AerieWorks_LogLevel || LogLevel.info;

    if (arguments.length === 1) {
      level = LogLevel.info;
      message = arguments[0];
    } else if (typeof LogLevel[level] === 'undefined') {
      level = LogLevel.info;
    }

    if (typeof window.console != null && typeof window.console.log === 'function' && level >= minLevel) {
      var date = new Date();
      window.console.log((new Date().toISOString()) + ': ' + this.name + ': ' + message);
    }
  }

  Logger.prototype.log = log;
  Logger.prototype.debug = function debug(message) { this.log(LogLevel.debug, message); };
  Logger.prototype.info = function info(message) { this.log(LogLevel.info, message); };
  Logger.prototype.warn = function warn(message) { this.log(LogLevel.warn, message); };
  Logger.prototype.error = function error(message) { this.log(LogLevel.error, message); };
  var LogLevel = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };

  var ns = AerieWorks.getNs('Log');
  ns.Logger = Logger;
  ns.LogLevel = LogLevel;
})(jQuery);
