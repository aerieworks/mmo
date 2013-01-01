'use strict';
(function ($) {
  var GCUI = AerieWorks.getNs('Mmo.GameClient.Ui');
  var logger = AerieWorks.Log.Logger(GCUI, 'WorldView');

  function WorldView(client) {
    this.client = client;
    this.canvas = $('#worldView');
    this.context = this.canvas[0].getContext('2d');
    this.update();
  }

  function update(){
    this.context.fillStyle = 'rgb(200, 0 0)';
    this.context.fillRect(347, 260, 266, 200);
  }

  WorldView.prototype.update = update;

  GCUI.WorldView = WorldView;
})(jQuery);
