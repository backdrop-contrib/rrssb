/**
 * @file
 * The RRSSB Backdrop Behavior to configure settings.
 */

(function ($) {
    Backdrop.behaviors.rrssb = {
      attach: function(context, settings) {
        rrssbConfigAll(settings.rrssb);
      }
    };
})(jQuery);