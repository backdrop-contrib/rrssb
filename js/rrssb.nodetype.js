(function ($) {

Backdrop.behaviors.rrssbSettingsSummary = {
  // Provide the vertical tab summary.
  attach: function (context) {
    var $context = $(context);
    // RRSSB settings.
    $context.find('fieldset#edit-rrssb').backdropSetSummary(function() {
      var vals = [];
      if ($context.find('input[name="show_rrssb"]:checked').length) {
        vals.push(Backdrop.t('Show buttons'));
      }
      else {
        vals.push(Backdrop.t('Hide buttons'));
      }
      return vals.join(', ');
    });
  }
};

})(jQuery);
