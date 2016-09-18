AUI().ready('aui-module', 'array-extras', function(A){ 
 
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
	
	$('#editDialog').on('shown.bs.modal', function (e) {
	 	console.log("editDialog on-show");
	 	$('#regular').val(MYTIMESHEET.timesheet.regular);
	 	$('#overtime').val(MYTIMESHEET.timesheet.overtime);
	 	$('#sick').val(MYTIMESHEET.timesheet.sick);
	 	$('#vacation').val(MYTIMESHEET.timesheet.vacation);
	 	$('#holiday').val(MYTIMESHEET.timesheet.holiday);
	 	$('#unpaid').val(MYTIMESHEET.timesheet.unpaid);
	 	$('#other').val(MYTIMESHEET.timesheet.other); 
	})

	$('#viewButton').on('click', function (e) {   
		MYTIMESHEET.view();
	}) 
	$('#saveButton').on('click', function (e) {   
	 	MYTIMESHEET.saveTimesheet();
	}) 
	$('#deleteConfirmationButton').on('click', function (e) {   
	 	MYTIMESHEET.deleteTimesheet();
	}) 
	
	
	MYTIMESHEET.view();
});



// ------------

function MyTimeSheet() {
	timesheetId = -1;
	timesheets = [];
	timesheet = {};
}

var MYTIMESHEET = new MyTimeSheet();

MyTimeSheet.prototype.deleteRow = function(timesheetId) {
	console.log("deleting " + timesheetId);
	MYTIMESHEET.timesheetId = timesheetId;
	$('#deleteConfirmation').modal('show');
};

MyTimeSheet.prototype.deleteTimesheet = function() {
	try {
		
		Liferay.Service(
		  '/intranet-app-services-portlet.timesheet/delete-time-sheet',
		  {
		    timesheetId: MYTIMESHEET.timesheetId,
		    actor: INTRANETLIB.getUserId()
		  },
		  function(obj) {
		    console.log(obj);
		    $('#deleteConfirmation').modal('hide');
		    INTRANETLIB.showMessage("Delete Confirmation", "Your timesheet has been successfully removed");
		    MYTIMESHEET.view();
		  }
		);
		
		
	} catch (e) {
		alert("Error - " + e);
		MYTIMESHEET.view();
	}
	
	
};


MyTimeSheet.prototype.saveTimesheet = function() {
	try {
		MYTIMESHEET.timesheet.regular = parseInt($('#regular').val());
		MYTIMESHEET.timesheet.overtime = parseInt($('#overtime').val());
		MYTIMESHEET.timesheet.sick = parseInt($('#sick').val());
		MYTIMESHEET.timesheet.vacation = parseInt($('#vacation').val());
		MYTIMESHEET.timesheet.holiday = parseInt($('#holiday').val());
		MYTIMESHEET.timesheet.unpaid = parseInt($('#unpaid').val());
		MYTIMESHEET.timesheet.other = parseInt($('#other').val());
		Liferay.Service(
		  '/intranet-app-services-portlet.timesheet/update-time-sheet',
		  {
		    timesheetId: MYTIMESHEET.timesheet.timesheetId,
		    employeeScreenName: INTRANETLIB.getUserId(),
		    regular: MYTIMESHEET.timesheet.regular,
		    overtime: MYTIMESHEET.timesheet.overtime,
		    sick: MYTIMESHEET.timesheet.sick,
		    vacation: MYTIMESHEET.timesheet.vacation,
		    holiday: MYTIMESHEET.timesheet.holiday,
		    unpaid: MYTIMESHEET.timesheet.unpaid,
		    other: MYTIMESHEET.timesheet.other,
		    remarks: MYTIMESHEET.timesheet.remarks,
		    status: MYTIMESHEET.timesheet.status,
		    projectCode: 'TEST',
		    logDate: MYTIMESHEET.timesheet.logDate,
		    actor: INTRANETLIB.getUserId()
		  },
		  function(obj) {
		    console.log(obj);
		    $('#editDialog').modal('hide');
		    INTRANETLIB.showMessage("Update Confirmation", "Your timesheet has been successfully saved");
		    MYTIMESHEET.view();
		  }
		);
		
		
	} catch (e) {
		alert("Error - " + e);
		MYTIMESHEET.view();
	}
	
	
};

MyTimeSheet.prototype.editRow = function(timesheetId) {
	console.log("editRow " + timesheetId);
	MYTIMESHEET.timesheetId = timesheetId; 
	var timesheets = MYTIMESHEET.timesheets;
	timesheets.forEach(function(item) {
		if (item.timesheetId == timesheetId) {
			MYTIMESHEET.timesheet = item; 
			return;
		}
	});
	$('#editDialog').modal('show');
};


MyTimeSheet.prototype.view = function() {
	
	var userId = INTRANETLIB.getUserId();
	var month = $('#months').val();
	var year = $('#years').val();
	var begin = INTRANETLIB.getBeginningOfMonthTimestamp(year, month);
	var end = INTRANETLIB.getEndingOfMonthTimestamp(year, month); 
	console.log("View timesheet, userId: " + userId + ", month: " + month + ", year: " + year);
	
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
		  MYTIMESHEET.timesheets = [];
		  obj.forEach(function(item) {
			 MYTIMESHEET.timesheets.push(item);
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