'use strict';
(function ($) {
  var GC = AerieWorks.getNs('Mmo.GameClient');
  var logger = new AerieWorks.Log.Logger(GC, 'Client');

  function Client(server) {
    this.server = server;
    logger.debug('New game client instantiated.');
  }

  function buildElements(definitions) {
    var elements = [];
    definitions.forEach(function (def) {
      if (GC.Elements[def.type] === 'function') {
        elements.push(new GC.Elements[def.type](def));
      } 
    });

    return elements;
  }

  function start() {
    logger.debug('Game client starting.  Entering world...');
    //this.server.world.enter(function onWorldEnter(worldState) {
    // logger.debug('World entered.');
      //this.contents = buildElements(worldState.contents);
    //});
  }

  Client.prototype.start = start;

  GC.Client = Client;
})(jQuery);
