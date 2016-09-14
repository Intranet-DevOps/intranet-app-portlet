AUI().use('aui-module', 'array-extras', function(A){ 
 
	var userId = INTRANETLIB.getUserId() + '';
	var fullName = INTRANETLIB.getFullName();
	console.log("Rendering My timesheet module [userId: " + userId + ", fullName: " + fullName + "]");
	
	var yearsValue = INTRANETLIB.getYears(); 
	var currentYear = INTRANETLIB.getCurrentYear();
	for( index in yearsValue ) {
		if (currentYear == yearsValue[index].label) {
			$('#years').append('<option selected="selected" value="' + yearsValue[index].value + '">' + yearsValue[index].label + '</option>');	
		} else {  
			$('#years').append('<option value="' + yearsValue[index].value + '">' + yearsValue[index].label + '</option>');
		}
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
	
	$('#viewButton').on('click', function (e) { 
		var userId = INTRANETLIB.getUserId();
		var month = $('#months').val();
		var year = $('#years').val();
		var begin = INTRANETLIB.getBeginningOfMonthTimestamp(year, month);
		var end = INTRANETLIB.getEndingOfMonthTimestamp(year, month);
		
		console.log("View timesheet, userId: " + userId + ", month: " + month + ", year: " + year);
		MYTIMESHEET.view(begin, end, userId);
	})
	
});


// ------------

function MyTimeSheet() {
}

var MYTIMESHEET = new MyTimeSheet();

MyTimeSheet.prototype.deleteRow = function(timesheetId) {
	console.log("deleting " + timesheetId);
	$('#deleteConfirmation').modal('show');
};

MyTimeSheet.prototype.editRow = function(timesheetId) {
	console.log("editRow " + timesheetId);
	$('#editDialog').modal('show');
};

MyTimeSheet.prototype.view = function(begin, end, userId) {
	INTRANETLIB.showLoading();
	Liferay.Service(
	  '/intranet-app-services-portlet.timesheet/find-timesheets-by-user',
	  {
	    startDate: begin,
	    endDate: end,
	    userId: userId,
	    actor: userId
	  },
	  function(obj) {  
		  $("#dataTable > tbody > tr").remove();
		  obj.forEach(function(item) {
			 var logDate = INTRANETLIB.formatDisplayDate(item.logDate);
			 var dayName = INTRANETLIB.getDayStringOfWeek(item.logDate);
			 var total = item.regular + item.overtime + item.sick + item.vacation + item.holiday + item.unpaid + item.other;
			 var row = $(
						"<tr>" +
						"<td>" + dayName + "</td><td>" + logDate + "</td>" +
						"<td>" + item.regular + "</td>" +
						"<td>" + item.overtime + "</td>" +
						"<td>" + item.sick + "</td>" +
						"<td>" + item.vacation + "</td>" +
						"<td>" + item.holiday + "</td>" +
						"<td>" + item.unpaid + "</td>" +
						"<td>" + item.other + "</td>" +
						"<td>" + total + "</td>" +
						"<td>" +
						'	<button type="button" class="btn btn-default" data-toggle="modal" onclick="MYTIMESHEET.deleteRow(\'' + item.timesheetId + '\')"><i class="fa fa-trash"></i></button>' +
						'	<button type="button" class="btn btn-default" data-toggle="modal" onclick="MYTIMESHEET.editRow(\'' + item.timesheetId + '\')"><i class="fa fa-edit"></i></button>' +
						"</td>" +
						"</tr>");
			$("#dataTable > tbody").append(row);
		 });
		  
		  INTRANETLIB.hideLoading();
		
	  }
	);
}



$(function () {
    //Initialize Select2 Elements
    $(".select2").select2();

    //Date picker
    $('#datepicker').datepicker({
      autoclose: true
    });
  });   