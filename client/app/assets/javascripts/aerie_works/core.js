'use strict';
(function ($) {
  function Namespace(parent, name) {
    this._name = name;
    this._parent = parent;
    parent[name] = this;
  }

  function getNs(nsName) {
    var parts = nsName.split('.');

    var root = this;
    parts.forEach(function (part) {
      if (typeof root[part] === 'undefined') {
        root[part] = new Namespace(root, part);
      }
      root = root[part];
    });

    return root;
  }

  Namespace.prototype.getNs = getNs;

  var Aw = new Namespace(window, 'AerieWorks');
  Aw.getNs('Core').Namespace = Namespace;
})(jQuery);
