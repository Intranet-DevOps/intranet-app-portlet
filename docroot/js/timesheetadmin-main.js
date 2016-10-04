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
	
	$('#editDialog').on('shown.bs.modal', function (e) {
	 	console.log("editDialog on-show");
	 	$('#regular').val(TIMESHEETADMIN.timesheet.regular);
	 	$('#overtime').val(TIMESHEETADMIN.timesheet.overtime);
	 	$('#sick').val(TIMESHEETADMIN.timesheet.sick);
	 	$('#vacation').val(TIMESHEETADMIN.timesheet.vacation);
	 	$('#holiday').val(TIMESHEETADMIN.timesheet.holiday);
	 	$('#unpaid').val(TIMESHEETADMIN.timesheet.unpaid);
	 	$('#other').val(TIMESHEETADMIN.timesheet.other); 
	 	$('#remarks').val(TIMESHEETADMIN.timesheet.remarks); 
	})

	$('#viewButton').on('click', function (e) {   
		TIMESHEETADMIN.view();
	}) 
	$('#saveButton').on('click', function (e) {
		INTRANETLIB.showDialog('Submit Confirmation', 'Are you sure you want to save this timesheet?', function() {
			console.log("save confirm...");
			TIMESHEETADMIN.saveTimesheet();
		}, function() {
			console.log("save not confirm...");
		});  
	}) 
	
	$('#approveButton').on('click', function (e) {
		TIMESHEETADMIN.approveRow();
	}) 
	
	$('#returnButton').on('click', function (e) {
		TIMESHEETADMIN.returnRow();
	}) 
	
	$('#deleteButton').on('click', function (e) {
		TIMESHEETADMIN.deleteRow();
	}) 
	TIMESHEETADMIN.view();
});



// ------------

function TimesheetAdmin() {
	timesheetId = -1;
	timesheets = [];
	timesheet = {};
}

var TIMESHEETADMIN = new TimesheetAdmin();

TimesheetAdmin.prototype.deleteRow = function() {
	console.log("deleting " + TIMESHEETADMIN.timesheetId); 
	INTRANETLIB.showDialog('Delete Confirmation', 'Are you sure you want to remove this timesheet entry?', function() {
		console.log("delete confirm...");
		TIMESHEETADMIN.deleteTimesheet();
	}, function() {
		console.log("delete not confirm...");
	});
};

TimesheetAdmin.prototype.approveRow = function(timesheetId) {
	console.log("approving " + TIMESHEETADMIN.timesheetId); 
	INTRANETLIB.showDialog('Approve Confirmation', 'Are you sure you want to approve this timesheet entry?', function() {
		console.log("approve confirm...");
		TIMESHEETADMIN.approveTimesheet();
	}, function() {
		console.log("approve not confirm...");
	});
};

TimesheetAdmin.prototype.returnRow = function(timesheetId) {
	console.log("rejecting " + TIMESHEETADMIN.timesheetId);
	INTRANETLIB.showDialog('Return Confirmation', 'Are you sure you want to return this timesheet entry?', function() {
		console.log("return confirm...");
		TIMESHEETADMIN.returnTimesheet();
	}, function() {
		console.log("return not confirm...");
	});
	$('#returnConfirmation').modal('show');
};

TimesheetAdmin.prototype.deleteTimesheet = function() {
	try {
		
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/delete-time-sheet',
		  {
		    timesheetId: TIMESHEETADMIN.timesheetId,
		    actor: INTRANETLIB.getUserId()
		  },
		  function(obj) {
		    console.log(obj);
		    $('#deleteConfirmation').modal('hide');
		    $('#editDialog').modal('hide');
		    INTRANETLIB.showMessage("Delete Confirmation", "This timesheet has been successfully removed");
		    TIMESHEETADMIN.view();
		  }
		);
		
		
	} catch (e) {
		alert("Error - " + e);
		TIMESHEETADMIN.view();
	}
};


TimesheetAdmin.prototype.approveTimesheet = function() {
	try {
		
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/approve-time-sheet',
		  {
		    timesheetId: TIMESHEETADMIN.timesheetId,
		    actor: INTRANETLIB.getUserId()
		  },
		  function(obj) {
		    console.log(obj);
		    $('#deleteConfirmation').modal('hide');
		    $('#editDialog').modal('hide');
		    INTRANETLIB.showMessage("Approve Confirmation", "This timesheet has been successfully approved");
		    TIMESHEETADMIN.view();
		  }
		);
		
		
	} catch (e) {
		alert("Error - " + e);
		TIMESHEETADMIN.view();
	}
};


TimesheetAdmin.prototype.returnTimesheet = function() {
	try {
		
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/reject-time-sheet',
		  {
		    timesheetId: TIMESHEETADMIN.timesheetId,
		    comment: '-',
		    actor: INTRANETLIB.getUserId()
		  },
		  function(obj) {
		    console.log(obj);
		    $('#deleteConfirmation').modal('hide');
		    $('#editDialog').modal('hide');
		    INTRANETLIB.showMessage("Return Confirmation", "This timesheet has been successfully returned");
		    TIMESHEETADMIN.view();
		  }
		);
		
		
	} catch (e) {
		alert("Error - " + e);
		TIMESHEETADMIN.view();
	}
};

TimesheetAdmin.prototype.saveTimesheet = function() {
	try {
		TIMESHEETADMIN.timesheet.employeeScreenName = $('#staffs').val();
		TIMESHEETADMIN.timesheet.regular = parseInt($('#regular').val());
		TIMESHEETADMIN.timesheet.overtime = parseInt($('#overtime').val());
		TIMESHEETADMIN.timesheet.sick = parseInt($('#sick').val());
		TIMESHEETADMIN.timesheet.vacation = parseInt($('#vacation').val());
		TIMESHEETADMIN.timesheet.holiday = parseInt($('#holiday').val());
		TIMESHEETADMIN.timesheet.unpaid = parseInt($('#unpaid').val());
		TIMESHEETADMIN.timesheet.other = parseInt($('#other').val());
		TIMESHEETADMIN.timesheet.remarks = $('#remarks').val();
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/update-time-sheet',
		  {
		    timesheetId: TIMESHEETADMIN.timesheet.timesheetId,
		    employeeScreenName: TIMESHEETADMIN.timesheet.employeeScreenName,
		    regular: TIMESHEETADMIN.timesheet.regular,
		    overtime: TIMESHEETADMIN.timesheet.overtime,
		    sick: TIMESHEETADMIN.timesheet.sick,
		    vacation: TIMESHEETADMIN.timesheet.vacation,
		    holiday: TIMESHEETADMIN.timesheet.holiday,
		    unpaid: TIMESHEETADMIN.timesheet.unpaid,
		    other: TIMESHEETADMIN.timesheet.other,
		    remarks: TIMESHEETADMIN.timesheet.remarks,
		    status: 'NEW',
		    projectCode: 'TEST',
		    logDate: TIMESHEETADMIN.timesheet.logDate,
		    actor: INTRANETLIB.getUserId()
		  },
		  function(obj) {
		    console.log(obj);
		    $('#editDialog').modal('hide');
		    INTRANETLIB.showMessage("Update Confirmation", "Your timesheet has been successfully saved");
		    TIMESHEETADMIN.view();
		  }
		);
		
		
	} catch (e) {
		alert("Error - " + e);
		TIMESHEETADMIN.view();
	}
	
	
};

TimesheetAdmin.prototype.editRow = function(timesheetId) {
	console.log("editRow " + timesheetId);
	TIMESHEETADMIN.timesheetId = timesheetId; 
	var timesheets = TIMESHEETADMIN.timesheets;
	timesheets.forEach(function(item) {
		if (item.timesheetId == timesheetId) {
			TIMESHEETADMIN.timesheet = item; 
			return;
		}
	});
	$('#editDialog').modal('show');
};


TimesheetAdmin.prototype.view = function() {
	
	var actor = INTRANETLIB.getUserId();
	var userId = $('#staffs').val();
	var month = $('#months').val();
	var year = $('#years').val();
	var begin = INTRANETLIB.getBeginningOfMonthTimestamp(year, month);
	var end = INTRANETLIB.getEndingOfMonthTimestamp(year, month); 
	console.log("View timesheet, userId: " + userId + ", month: " + month + ", year: " + year);
	
	INTRANETLIB.showLoading();
	Liferay.Service(
	  '/intranet-timesheet-service-portlet.timesheet/find-timesheets-by-user',
	  {
	    startDate: begin,
	    endDate: end,
	    userId: userId,
	    actor: userId
	  },
	  function(obj) {  
		  $("#dataTable > tbody > tr").remove();
		  TIMESHEETADMIN.timesheets = [];
		  obj.forEach(function(item) {
			 TIMESHEETADMIN.timesheets.push(item);
			 var logDate = INTRANETLIB.formatDisplayDate(item.logDate);
			 var dayName = INTRANETLIB.getDayStringOfWeek(item.logDate);
			 var total = item.regular + item.overtime + item.sick + item.vacation + item.holiday + item.unpaid + item.other;
			 var row = $(
						"<tr>" +
						'<td><input type="checkbox"></td>' +
						"<td>" + dayName + "</td><td>" + logDate + "</td>" +
						"<td>" + item.regular + "</td>" +
						"<td>" + item.overtime + "</td>" +
						"<td>" + item.sick + "</td>" +
						"<td>" + item.vacation + "</td>" +
						"<td>" + item.holiday + "</td>" +
						"<td>" + item.unpaid + "</td>" +
						"<td>" + item.other + "</td>" +
						"<td>" + total + "</td>" +
						"<td>" + item.status + "</td>" +
						"<td>" +  
						'	<button type="button" class="btn btn-default" data-toggle="modal" onclick="TIMESHEETADMIN.editRow(\'' + item.timesheetId + '\')"><i class="fa fa-edit"></i></button>' +
						'	<button type="button" class="btn btn-default" data-toggle="modal" onclick="TIMESHEETADMIN.viewTime(\'' + item.timesheetId + '\')"><i class="fa fa-hourglass-half"></i></button>' +
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