$(document).ready(function() {

    startRangeDatePicker();
    startRangeDatePicker2();

    $('.js-date-range-input').on('change', function() {
        $('.js-date-range-toggler').html(this.value); 
    })

    $('.js-date-range-input-check-out-date').on('change', function() {
      $('.js-date-range-toggler-2').html(this.value); 
  })

    function startRangeDatePicker() {

      var options = {};

      options.singleDatePicker = true;
      options.timePicker = true;
      options.showDropdowns = false;
      options.timePicker24Hour = false;
      options.showWeekNumbers = true;
      options.timePickerSeconds = false;
      options.showISOWeekNumbers = false;
      options.timePickerIncrement = false;
      options.autoApply = true;
      options.alwaysShowCalendars = true;
      options.parentEl = '#date-range-col';
      

      const date = new Date();
      options.minDate = new Date(`${date.getFullYear()}, ${Number(date.getMonth()) + 1}, ${Number(date.getDate()) - 1}`);

      options.locale = {
          // direction: $('#rtl').is(':checked') ? 'rtl' : 'ltr',
          // format: 'MM/DD/YYYY HH:mm',
          format: 'MM/DD/YYYY',
          separator: ' - ',
          applyLabel: 'Apply',
          cancelLabel: 'Cancel',
          fromLabel: 'From',
          toLabel: 'To',
          customRangeLabel: 'Custom',
          daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
          monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          firstDay: 1
        };

      $('.js-date-range-input').daterangepicker(options, function(start, end, label) { console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')'); }).click();
      
    }

    function startRangeDatePicker2() {

      var options = {};

      options.singleDatePicker = true;
      options.timePicker = true;
      options.showDropdowns = false;
      options.timePicker24Hour = false;
      options.showWeekNumbers = true;
      options.timePickerSeconds = false;
      options.showISOWeekNumbers = false;
      options.timePickerIncrement = false;
      options.autoApply = true;
      options.alwaysShowCalendars = true;
      options.parentEl = '#date-range-col-2';
      

      const date = new Date();
      options.minDate = new Date(`${date.getFullYear()}, ${Number(date.getMonth()) + 1}, ${Number(date.getDate()) - 1}`);

      options.locale = {
          // direction: $('#rtl').is(':checked') ? 'rtl' : 'ltr',
          // format: 'MM/DD/YYYY HH:mm',
          format: 'MM/DD/YYYY',
          separator: ' - ',
          applyLabel: 'Apply',
          cancelLabel: 'Cancel',
          fromLabel: 'From',
          toLabel: 'To',
          customRangeLabel: 'Custom',
          daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
          monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          firstDay: 1
        };

      $('.js-date-range-input-check-out-date').daterangepicker(options, function(start, end, label) { console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')'); }).click();
      
    }

  });





  $(document).ready(function() {

    startRangeDatePicker();

    $('.js-date-range-input-3').on('change', function() {
        $('.js-date-range-toggler-3').html(this.value); 
    })

    function startRangeDatePicker() {

      var options = {};

      options.singleDatePicker = false;
      options.timePicker = true;
      options.showDropdowns = false;
      options.timePicker24Hour = false;
      options.showWeekNumbers = true;
      options.timePickerSeconds = false;
      options.showISOWeekNumbers = false;
      options.timePickerIncrement = false;
      options.autoApply = true;
      options.alwaysShowCalendars = true;
      options.parentEl = '#date-range-col-3';
      

      const date = new Date();
      options.minDate = new Date(`${date.getFullYear()}, ${Number(date.getMonth()) + 1}, ${Number(date.getDate()) - 1}`);

      options.locale = {
          // direction: $('#rtl').is(':checked') ? 'rtl' : 'ltr',
          // format: 'MM/DD/YYYY HH:mm',
          format: 'MM/DD/YYYY',
          separator: ' - ',
          applyLabel: 'Apply',
          cancelLabel: 'Cancel',
          fromLabel: 'From',
          toLabel: 'To',
          customRangeLabel: 'Custom',
          daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
          monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          firstDay: 1
        };

      $('.js-date-range-input-3').daterangepicker(options, function(start, end, label) { console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')'); }).click();
      
    }

  });