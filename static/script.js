
// Libs
var Document = require('./modules/document.js');
var Sidebar = require('./modules/sidebar.js');
var TabBar = require('./modules/tabBar.js')
var sidebar = Sidebar('aside');

Document( '', function( error, doc ){
  TabBar.appendDocument( doc );
});
