AUI().ready('aui-module', 'array-extras', function(A){ 
 
	var userId = INTRANETLIB.getUserId() + '';
	var fullName = INTRANETLIB.getFullName();
	
	var yearsValue = INTRANETLIB.getYears();
	var staffsValue = INTRANETLIB.getStaffs();
	var currentYear = INTRANETLIB.getCurrentYear();
	for( index in yearsValue ) {
		if (currentYear == yearsValue[index].label) {
			$('#years').append('<option selected="selected" value="' + yearsValue[index].value + '">' + yearsValue[index].label + '</option>');	
		} else {  
			$('#years').append('<option value="' + yearsValue[index].value + '">' + yearsValue[index].label + '</option>');
		}
    }
	
	for( index in staffsValue ) {
		$('#staffs').append('<option value="' + staffsValue[index].value + '">' + staffsValue[index].label + '</option>');
    }
	
	
	var monthsValue = INTRANETLIB.getMonths();     
	var currentMonth = INTRANETLIB.getCurrentMonth();
	for( index in monthsValue ) {
		if (currentMonth == monthsValue[index].value) {
			$('#months').append('<option selected="selected" value="' + monthsValue[index].value + '">' + monthsValue[index].label + '</option>');
		} else {
			$('#months').append('<option value="' + monthsValue[index].value + '">' + monthsValue[index].label + '</option>');
		}
    } 
	
	TIMESHEETCONTROLLER.initTimesheetAdmin();
	
});

$(function () {
    //Initialize Select2 Elements
    $(".select2").select2();

    //Date picker
    $('#datepicker').datepicker({
      autoclose: true
    });
  });   