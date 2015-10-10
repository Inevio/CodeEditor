
// Libs
var CodeMirror = require('./bower_components/codemirror/lib/codemirror.js');
var Sidebar = require('./modules/sidebar.js');

// Enable addons
require('./bower_components/codemirror/addon/scroll/simplescrollbars.js');

// Enable modes
require('./bower_components/codemirror/mode/javascript/javascript.js');

var editor = CodeMirror.fromTextArea( $('#code')[ 0 ], {
  lineNumbers: true,
  theme: 'monokai',
  scrollbarStyle: "simple"
});
var sidebar = Sidebar('aside');
