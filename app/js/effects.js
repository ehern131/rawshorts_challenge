// COLUMN A SORTABLE
$( function() {
  $( ".columnAImg" ).sortable({
    items: "li:not(.ui-state-disabled)"
  });

  $( ".columnAImg li" ).disableSelection();
} );
// END COLUMN A SORTABLE



// COLUMN B TO STAGE DROP & DRAG
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
// COLUMN B TO STAGE DROP & DRAG END



// STAGE TO COLUMN B DROP & DRAG
  $('.columnB').droppable({
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
  // STAGE TO COLUMN B DROP & DRAG END



// DRAG AND DROP SNAP GRID
  $( function() {
      $( "#drag, #drag2, #drag3" ).draggable({ grid: [ 25, 25 ] });
    } );
    // DRAG AND DROP SNAP GRID END
