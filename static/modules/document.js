
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
        return callback( null, '' );
      }else{

        wz.fs( id, function( error, fsnode ){

          // To Do -> error
          fsnode.read( function( error, data ){
            // To Do -> error
            callback( null, data );
          });

        });

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
