
var ITEM_HTML = '<article class="sidebar-item"><span class="sidebar-name"></span><section class="sidebar-children"></section></article>';

var generateTree = function( tree ){

};

module.exports = function( selector ){

  var sidebar = $( selector );
  var item = $(ITEM_HTML);
  var item2 = $(ITEM_HTML);
  var item3 = $(ITEM_HTML);

  item.find('span').text('Texto');
  item2.find('span').text('Texto 2');
  item3.find('span').text('Texto 3');
  sidebar.append(item);
  sidebar.find('section').append( item2 )
  sidebar.find('section').first().append( item3 )

};
