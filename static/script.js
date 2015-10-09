
// Libs
var CodeMirror = require('./codemirror/lib/codemirror.js');

// Enable modes
require('./codemirror/mode/javascript/javascript.js');

var editor = CodeMirror.fromTextArea( $('#code')[ 0 ], {
  lineNumbers: true,
  theme: 'monokai'
});
