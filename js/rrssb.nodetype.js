(function ($) {

Backdrop.behaviors.rrssbSettingsSummary = {
  attach: function (context) {
    $('fieldset#edit-rrssb', context).backdropSetSummary(function (context) {
      var vals = [];

      // Inclusion select field.
      if ($('#edit-show', context).is(':checked')) {
        vals.push(Backdrop.t('Enabled'));
      }
      else {
        vals.push(Backdrop.t('Disabled'));
      }
        
      return vals.join(', ');
    });
  }
};

})(jQuery);
