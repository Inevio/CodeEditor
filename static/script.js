
// Libs
var CodeMirror = require('./modules/codemirror.js');
var Sidebar = require('./modules/sidebar.js');

var editor = CodeMirror.fromTextArea( $('#code')[ 0 ], {
  lineNumbers: true,
  theme: 'monokai',
  scrollbarStyle: "simple"
});
var sidebar = Sidebar('aside');
