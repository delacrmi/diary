$(document).on('ready',function() {

  //js variables
  var dateFormat = {
      calendarWeeks: true,
      autoclose: true,
      todayHighlight: true
    };

//note variables
  var $titleNote = $('#title-note'); //save
  var $inputTitleNote = $('#input-title-note');
  var $dateNote = $('#date-note'); //save
  var $inputDateNote = $('#input-date-note');
  var $txtBodyNote = $('#txta-body-note'); //save
  var $btnSaveNote = $('#save-note');
  var $btnCancelNote = $('#cancel-note');

//task date
  var $panelTask = $('.panel-task');
  var $taskH3title = $('.title-task-row > h3'); //save
  var $taskInputTitle= $('.task-input-title');
  var $taskH3Date = $('.date-task-row > h3'); //save
  var $taskInputDate = $('.task-input-date');
  var $taskAreaBody = $('.task-area-body'); // save
  var $btnCloseTask = $('.btn-close-task');

// Code for the Note
  
  $titleNote.click( function() {
    change(this,$inputTitleNote);
  });

  $inputTitleNote.on({
    'focusout': function () {
      loseFocus(this,$titleNote,'Title:');
    } ,
    'keyup': function() {
      maxtext(this);
    }
  });

  $dateNote.click( function() {
    change(this,$inputDateNote);
  });

  $inputDateNote.datepicker(dateFormat).on('hide',function() {
    loseFocus(this,$dateNote,'mm/dd/yyyy');
    $txtBodyNote.focus();
  });

// btn save or cancel
  
  $btnSaveNote.on('click',function(e) {
    e.preventDefault();
    save();
  });

// Code for task Date
  $taskH3Date.each(function(index,elem) {

    var elem1 = $taskInputDate.eq(index);
    var body = $taskAreaBody.eq(index);

    $(elem1).datepicker(dateFormat).on('hide',function() {
      loseFocus(elem1,elem,'mm/dd/yyyy');
      $(body).focus();
    });

    $(elem).click(function () {
      change(elem,elem1);
    }); 
  });

// Code for task title
  $taskH3title.each(function(index,elem) {

    var elem1 = $taskInputTitle.eq(index);
    var btnClose = $btnCloseTask.eq(index);
    var panelTask = $panelTask.eq(index);
    
    $(btnClose).click(function (e) {
      console.log($panelTask,index);
      e.preventDefault();
      $(panelTask).remove();
    });

    $(elem1).on({
      'focusout': function() {
        loseFocus(elem1,elem,'Title:');
      },
      'keyup': function() {
        maxtext(elem1);
      }
    });

    $(elem).click(function () {
      change(elem,elem1);
    } );

  });

//Method to add a mask
  function dateMask(elem){
    $(elem).mask('99/99/99',{placeholder: '-'});
  };

//Change element and set the value
  function change(elem,elem1) {
     
    var date = $(elem).text();

    /*console.log($taskH3Date.length);
    $(this).each(function(index,elem) {
      console.log($(elem).attr('id'))
    });*/

    $(elem).val(date);

    changeElement(elem,elem1);
    $(elem1).focus();
  };

//when the element lost the focuse chagen it
  function loseFocus(elem,elem1,val) {
    
    //var date =  val === 'mm/dd/yyyy' ? 'Date: ': ''
    //console.log(date+' '+val);
    var date = $(elem).val();
    
    if(!date)
      date += val;

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

//save note
function save () {
  var note = {
    title: $titleNote.text(),
    date: $dateNote.text()
  };
  console.log(note);
  $.ajax({
    url: '/notes/new',
    type: 'post',
    datatype: 'json',
    data: note,
    sucess: function(data) {
      console.log(note);
    }
  });
  //$.post('/notes/new',note);
}

})