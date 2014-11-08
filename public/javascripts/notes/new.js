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
      },
      'keyup': function() {
        maxtext($elem1);
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
    
    var date =  valf === 'mm/dd/yyyy' ? 'Date: ': ''
    console.log(date+' '+valf);
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

// limit the length
  function maxtext (elem) {
    var limit = parseInt($(elem).attr('maxlength'));
    var text = $(elem).val();
    var count = text.length;

    if(count > limit){
      text = text.substr(0,limit);
      $(elem).val(text);
    }
  }

})