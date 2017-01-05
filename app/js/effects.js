$( function() {
  $( ".columnAImg" ).sortable({
    items: "li:not(.ui-state-disabled)"
  });

  $( ".columnAImg li" ).disableSelection();
} );



$('.stage').droppable({
    tolerance: 'fit'
});

$('#drag, #drag2, #drag3').draggable({
    revert: 'invalid',
    stop: function(){
        $(this).draggable('option','revert','invalid');
    }
});

$('#drag, #drag2, #drag3').droppable({
    greedy: true,
    tolerance: 'touch',
    drop: function(event,ui){
        ui.draggable.draggable('option','revert',true);
    }
});

$( function() {
    $( "#drag, #drag2, #drag3" ).draggable({ grid: [ 50, 50 ] });
  } );
