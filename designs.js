let color, width, height;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function(event){
event.preventDefault();
color= $('#colorPicker').val();
width= $('#inputWeight').val();
height= $('#inputHeight').val();
makeGrid(height, width);
});


function makeGrid(a,b) {

// Your code goes here!
$('tr').remove();
for (n=1;n<=a; n++){
   $('#pixelCanvas').append('<tr id=table'+n+'></tr>');
   for(m=1;m<=b;m++){
       $('tr:last').append('<td></td>');
   }
}

$('td').click(function addColor(){
   color = $('#colorPicker').val();
 	if ($(this).attr('style')) {
       $(this).removeAttr('style')
   	} else {
       $(this).css('background-color',color);
   }
})

$('colorPicker').change(function (event) {
    color = $(this).val();
});
}

