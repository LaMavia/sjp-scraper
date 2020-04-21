// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

var re_id_of_url = /\d+/;

function id_of_url(url) {
  var match = re_id_of_url.exec(url);
  if (match !== null) {
    return Caml_array.caml_array_get(Belt_Array.keepMap(match, (function (r) {
                      if (r == null) {
                        return ;
                      } else {
                        return Caml_option.some(r);
                      }
                    })), 0);
  } else {
    throw Js_exn.raiseError("Encountered an unknown type of url " + (String(url) + ""));
  }
}

exports.re_id_of_url = re_id_of_url;
exports.id_of_url = id_of_url;
/* No side effect */