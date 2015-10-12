
$('.tab-list').on( 'click', '.tab', function(){

  $('.tab-list .tab').removeClass('active');
  $( '.editor-' + $(this).addClass('active').attr('data-id') ).show();
  
});

module.exports = function( id ){
  var tab = $('<li class="tab" data-id="' + id + '">Pestaña</li>').appendTo( $('.tab-list') ).click();
};
