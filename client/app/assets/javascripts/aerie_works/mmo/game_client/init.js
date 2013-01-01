/*
 *= require ../../core
 *= require ../../log/logger
 *= require aerie_works/mmo/game_client/client
 *= require aerie_works/mmo/game_client/ui/world_view
*/
'use strict';

jQuery(function ($) {
  var GC = AerieWorks.Mmo.GameClient;
  var logger = new AerieWorks.Log.Logger(GC, 'init');

  logger.debug('Initializing game client...');
  var client = new GC.Client();
  var view = new GC.Ui.WorldView(client);
  logger.debug('Initialization complete.');

  logger.debug('Starting game client...');
  client.start();
  logger.debug('Game client started.');
});
