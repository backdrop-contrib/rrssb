<?php

/**
 * @file
 * Custom Views handler to output the RRSSB list.
 */

/**
 * Field handler to return the RRSSB list.
 */
class rrssb_handler_field_list extends views_handler_field {

  function construct() {
    parent::construct();
    $this->additional_fields = array();
    if (!empty($this->definition['rrssb_list'])) {
      $this->additional_fields = $this->definition['rrssb_list'];
    }
  }

  function render() {
    // Get the html of the buttons.
    return rrssb_get_buttons();
  }

}
