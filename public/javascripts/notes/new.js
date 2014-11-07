$(document).on('ready',function() {

  //js variables

//task date
  var $txtTaskDate = $('.task-date');
  var $divTaskDate = $('.date-task-row');
  var $taskH3Date = $('.date-task-row h3');
  var $taskInputDate= $('.task-input-date');

//task title
  //var $divTasktitle= $('.title-task-row');
  var $taskH3title = $('.title-task-row h3');
  var $taskInputTitle= $('.task-input-title');
  var $taskAreaBody = $('.task-area-body')

// Code for task Date
  $($taskH3Date).each(function(index,elem) {

    var $elem1 = $($taskInputDate).eq(index);
    var $body = $($taskAreaBody).eq(index);

    $($elem1).datepicker({
      calendarWeeks: true,
      autoclose: true,
      todayHighlight: true
    }).on('hide',function() {
      loseFocusDate($elem1,elem,'mm/dd/yyyy');
      $($body).focus();
    });

    $(elem).click(function () {
      taskDateChange(elem,$elem1);
    }); 
  });

// Code for task title
  $($taskH3title).each(function(index,elem) {

    var $elem1 = $($taskInputTitle).eq(index);

    $($elem1).on({
      'focusout': function() {
        loseFocusDate($elem1,elem,'Title:');
      }
    });

    $(elem).click(function () {
      taskDateChange(elem,$elem1);
    } );

  });

//Method to add a mask
  function dateMask(elem){
    $(elem).mask('99/99/99',{placeholder: '-'});
  };

//Change element and set the value
  function taskDateChange(elem,elem1) {
     
    var date= $(elem).text();

    /*console.log($taskH3Date.length);
    $(this).each(function(index,elem) {
      console.log($(elem).attr('id'))
    });*/

    $(elem).val(date);

    changeElement(elem,elem1);
    $(elem1).focus();
  };

//when the element lost the focuse chagen it
  function loseFocusDate(elem,elem1,valf) {
    
    var date =  $(elem1).attr('id') === 'h3-task-date' ? 'Date: ': ''
    
    date += $(elem).val();

    if(!date || date === 'Date: ')
      date += valf;

    $(elem1).text(date);
    changeElement(elem,elem1);
  };

//Change any elements
  function changeElement (elem,elem1) {
    if(elem)
      $(elem).css('display', 'none');
    if(elem1)
      $(elem1).css('display', 'block')
  }

//Date Time Picker
function setDateTimePicker () {
  /*var nowTemp = new Date();
  var now = new Date(nowTemp.getFullYear(), 
    nowTemp.getMonth(), nowTemp.getDate(),0,0,0,0);*/

  $(this).datepicker({
    calendarWeeks: true,
    autoclose: true,
    todayHighlight: true
  });
}
})