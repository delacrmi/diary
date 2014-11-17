$(document).on('ready',function() {

  //js variables
    var dateFormat = {
        calendarWeeks: true,
        autoclose: true,
        todayHighlight: true
    };

    var arrayTask = [];

  //note variables
    var $titleNote = $('#title-note'); //save
    var $inputTitleNote = $('#input-title-note');
    var $dateNote = $('#date-note'); //save
    var $inputDateNote = $('#input-date-note');
    var $txtBodyNote = $('#txta-body-note'); //save
    var $btnSaveNote = $('#save-note');
    var $btnCancelNote = $('#cancel-note');

    var $panelTaskContainer = $('.task-container');
    var $btnNewTask = $('#new-task');

  //task date
   /* 
    var $panelTask = $('.panel-task');
    var $taskH3title = $('.title-task-row > h3'); //save
    var $taskInputTitle= $('.task-input-title');
    var $taskH3Date = $('.date-task-row > h3'); //save
    var $taskInputDate = $('.task-input-date');
    var $taskAreaBody = $('.task-area-body'); // save
    var $btnCloseTask = $('.btn-close-task');
    */

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
    /*$taskH3Date.each(function(index,elem) {

      var elem1 = $taskInputDate.eq(index);
      var body = $taskAreaBody.eq(index);

      $(elem1).datepicker(dateFormat).on('hide',function() {
        loseFocus(elem1,elem,'mm/dd/yyyy');
        $(body).focus();
      });

      $(elem).click(function () {
        change(elem,elem1);
      }); 
    });*/

  // Code for task title
    /*$taskH3title.each(function(index,elem) {

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
      });
    });*/

  //event assigned to create the task
    $btnNewTask.click(function() {
      newTask();
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

  //create the new task
    function newTask () {
      var $panelTask = $('<div class="panel panel-success"><div>');
      var $panelHeading = $('<div class="panel-heading"><div>');
      var $rowTitle = $('<div class="row"><div>');
      var $colTitle = $('<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 title-task-row"><div>');
      var $txtTitle = $('<h3 class="panel-title">Title:</h3>');
      var $titleInput = $('<input type="text" maxlength="50" placeholder="Title:" style="display: none; width: 200px" class="input-format-note task-input-title"/>');
      var $colClose = $('<div class="div-task-date col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"><div>');
      var $btnClose = $('<a data-toggle="toltip" title="close" class="btn btn-fa-task btn-close-task">'+
                          '<span class="fa fa-close fa-lg"></span>'+
                          '</a>');
      var $rowDate = $('<div style="padding: 5px" class="row"><div>');
      var $colDate = $('<div class="col-lg-offset-5 col-lg-7 date-task-row"><div>');
      var $txtDate = $('<h3 class="panel-title">Date: mm/dd/yyyy</h3>');
      var $dateInput = $('<input id="input-task-date" type="text" placeholder="Date: dd/mm/yy" style="display: none" class="input-format-note task-input-date"/>');
      var $panelBody = $('<div class="panel-body"><div>');
      var $txtBody = $('<textarea row="8" style="height: 100px" placeholder="Body task" class="form-control task-area-body"></textarea>');
      var $task =  $('<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 panel-task"><div>');

      //adding the components to the arrayTask
        var infTask = {title: $txtTitle,date: $txtDate, body: $txtBody};
        arrayTask.push(infTask);
        var index = arrayTask.length - 1;
      
      //event elements block
        $txtTitle.click(function() {
          change(this,$titleInput);
        });

        $titleInput.on({
          'focusout': function() {
            loseFocus(this,$txtTitle,'Title:');
          },
          'keyup': function() {
            maxtext(this);
          }
        });

        $btnClose.click(function (e) {
          e.preventDefault();

          delete arrayTask[index];

          $task.remove();
        });

        $txtDate.click(function() {
          change(this,$dateInput);
        });

        $dateInput.datepicker(dateFormat).on('hide',function() {
          loseFocus(this,$txtDate,'mm/dd/yyyy');
          $txtBody.focus();
        });

      //append elements block
        $colTitle.append($txtTitle);
        $colTitle.append($titleInput);
        $rowTitle.append($colTitle);

        $colClose.append($btnClose);
        $rowTitle.append($colClose);

        $colDate.append($txtDate);
        $colDate.append($dateInput);
        $rowDate.append($colDate);

        $panelHeading.append($rowTitle);
        $panelHeading.append($rowDate);

        $panelBody.append($txtBody);

        $panelTask.append($panelHeading);
        $panelTask.append($panelBody);

        $panelTask.append($panelHeading);
        $panelTask.append($panelBody);

        $task.append($panelTask);
        $panelTaskContainer.append($task);
    }

  //save note
    function save () {
      var note = {
        title: $titleNote.text(),
        date: $dateNote.text(),
        body: $txtBodyNote.text()
      };

      for(var index in arrayTask){
        if(arrayTask[index] !== undefined){
          
        }
      }

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


/*$('<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 panel-task">'+
                    '<div class="panel panel-success">'+
                      '<div class="panel-heading">'+
                        '<div class="row">'+
                          '<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 title-task-row">'+
                            '<h3 class="panel-title">Title:</h3>'+
                            '<input type="text" maxlength="50" placeholder="Title:" style="display: none; width: 200px" class="input-format-note task-input-title"/>'+
                          '</div>'+
                          '<div class="div-task-date col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
                            '<a data-toggle="toltip" title="close" class="btn btn-fa-task btn-close-task">'+
                              '<span class="fa fa-close fa-lg"></span>'+
                            '</a>'+
                          '</div>'+
                        '</div>'+
                        '<div style="padding: 5px" class="row">'+
                          '<div class="col-lg-offset-5 col-lg-7 date-task-row">'+
                            '<h3 class="panel-title">Date: mm/dd/yyyy</h3>'+
                            '<input id="input-task-date" type="text" placeholder="Date: dd/mm/yy" style="display: none" class="input-format-note task-input-date"/>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="panel-body">'+
                        '<textarea row="8" style="height: 100px" placeholder="Body task" class="form-control task-area-body"></textarea>'+
                      '</div>'+
                    '</div>'+
                  '</div>'
                )*/