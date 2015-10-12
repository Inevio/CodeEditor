
// Modules
var async = require('../bower_components/async/dist/async.js');
var CodeMirror = require('./codemirror.js');

// Variables
var documentCounter = 0;

// Main module
module.exports = function( id, callback ){

  async.waterfall([

    // Get default value
    function( callback ){

      if( !id ){
        return callback( null, 'Paco' );
      }

    },

    // Create document and append default value
    function( value, callback ){

      var editorId = documentCounter++;
      var editor   = CodeMirror( $('.code-container')[ 0 ], {

        lineNumbers    : true,
        theme          : 'monokai',
        scrollbarStyle : "simple"

      });

      var editorItem = $( editor.getWrapperElement() ).addClass( 'editor-' + editorId );

      editor.setValue( value );

      callback( null, {

        id      : editorId,
        editor  : editor,
        element : editorItem.hide()

      });

    }

  ], function( error, document ){
    callback( error, document );
  });

};
