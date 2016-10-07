/**
 * @file
 * The RRSSB Drupal Behavior to configure settings.
 */

(function ($) {
    Drupal.behaviors.rrssb = {
      attach: function(context, settings) {
        rrssbConfig(settings.rrssb);
      }
    };
})(jQuery);