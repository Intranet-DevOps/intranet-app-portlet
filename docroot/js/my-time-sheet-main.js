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
	
	$('#addTimeDialog').on('shown.bs.modal', function (e) { 
	 	$('#timeType').val('Regular');
	 	$('#fulldayOrTimeBased').val('fullday');
	 	$('#startTime').val('');
	 	$('#finishTime').val('');
	 	$("#timeSpaceSection").css({"display":"none"});
	 	$("#timeSection").css({"display":"none"});
	 	$('#timeRemarks').val('');
	})
	
	$('#editDialog').on('hidden.bs.modal', function (e) {
		$("body").css({"padding-right":"0px"});
	})  

	
	$('#editDialog').on('shown.bs.modal', function (e) { 
	 	$('#regular').val(MYTIMESHEET.timesheet.regular);
	 	$('#overtime').val(MYTIMESHEET.timesheet.overtime);
	 	$('#sick').val(MYTIMESHEET.timesheet.sick);
	 	$('#vacation').val(MYTIMESHEET.timesheet.vacation);
	 	$('#holiday').val(MYTIMESHEET.timesheet.holiday);
	 	$('#unpaid').val(MYTIMESHEET.timesheet.unpaid);
	 	$('#other').val(MYTIMESHEET.timesheet.other); 
	 	$('#remarks').val(MYTIMESHEET.timesheet.remarks); 
	 	
	 	if (MYTIMESHEET.timesheet.isEditable) {
	 		$("#remarks").prop( "disabled", false ); 
	 		$('#saveButton').css("display", "");
	 		$('#deleteButton').css("display", "");
	 	} else {
	 		$("#remarks").prop( "disabled", true ); 
	 		$('#saveButton').css("display", "none");
	 		$('#deleteButton').css("display", "none");
	 	}
	 	
	 	MYTIMESHEET.getTimeSheetDetails(function(obj) {
	 		
	 		
	 		
	 		$("#timeDetails > table").remove();
	 		console.log("in gettimedetails: ", obj); 
	 		if (obj != null) {
	 			
	 			$("#timeDetails").append("<table id='timeDetailsTable'>");
	 			$("#timeDetailsTable").append("<tbody>");
	 			 
		 		obj.forEach(function(item) {
		 			var fulldayOrTimeBased = item.fulldayOrTimeBased; 
		 			var clockInTime = INTRANETLIB.formatDisplayTime(item.clockInTime);
		 			var clockOutTime = INTRANETLIB.formatDisplayTime(item.clockOutTime);
		 			var row = $(
							"<tr>" +
							"<td>" + item.type + ", from " + clockInTime + " to " + clockOutTime + " (" + fulldayOrTimeBased.toUpperCase() + ")</td>" +
							"</tr>");
			 		$("#timeDetailsTable").append(row);
		 		})
		 		
	 			$("#timeDetailsTable").append("</tbody>");
		 		$("#timeDetails").append("<table>");
		 		
	 		} 
	 	})
	})
 
	$('#editDialog').on('hidden.bs.modal', function (e) {
		$("body").css({"padding-right":"0px"});
	})  
	
	$('#deleteButton').on('click', function (e) {   
		MYTIMESHEET.deleteRow();
	})  
	
	MYTIMESHEET.viewButton();
});



// Controller ------------

function MyTimeSheet() {
	timesheetId = -1;
	timesheets = [];
	timesheet = {};
}

var MYTIMESHEET = new MyTimeSheet();

MyTimeSheet.prototype.deleteRow = function() {
	console.log("deleting " + MYTIMESHEET.timesheetId);
	//MYTIMESHEET.timesheetId = timesheetId;
	INTRANETLIB.showDialog('Delete Confirmation', 'Are you sure you want to remove this timesheet entry?', function() {
		console.log("delete confirm...");
		MYTIMESHEET.deleteTimesheet();
	}, function() {
		console.log("delete not confirm...");
	});
};

MyTimeSheet.prototype.saveButton = function() {
	INTRANETLIB.showDialog('Submit Confirmation', 'Are you sure you want to save this timesheet?', function() {
		console.log("save confirm...");
		MYTIMESHEET.saveTimesheet();
	}, function() {
		console.log("save not confirm...");
	});  
};

MyTimeSheet.prototype.viewButton = function() {
	   
	MYTIMESHEET.getTimeSheetMonth(function(timesheetMonth) {
		var isEditable = true;
		console.log("isEditable: " + isEditable);
		if (timesheetMonth != null && timesheetMonth.length > 0) {
			isEditable = false;
		}
		MYTIMESHEET.getTimeSheets(isEditable);
		if (isEditable) {
			$("#submitButton").css("display", "");
		} else {
			$("#submitButton").css("display", "none");
		}
	})
	
};

MyTimeSheet.prototype.timeSaveButton = function() {
	INTRANETLIB.showDialog('Submit Confirmation', 'Are you sure you want to submit this time-clock?', function() {
		console.log("save confirm...");
		MYTIMESHEET.saveTimeClock();
	}, function() {
		console.log("save not confirm...");
	});  
};

MyTimeSheet.prototype.submitButton = function() {
	INTRANETLIB.showDialog('Submit Confirmation', 'Are you sure you want to submit this month timesheet?', function() {
		console.log("submit confirm...");
		MYTIMESHEET.submitTimesheet();
	}, function() {
		console.log("submit not confirm...");
	});  
};

MyTimeSheet.prototype.deleteButton = function() {
	MYTIMESHEET.deleteRow();
}; 

MyTimeSheet.prototype.viewRow = function(timesheetId) { 
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

MyTimeSheet.prototype.addTime = function(timesheetId) {
	console.log("addTime " + timesheetId);
	MYTIMESHEET.timesheetId = timesheetId; 
	var timesheets = MYTIMESHEET.timesheets;
	timesheets.forEach(function(item) {
		if (item.timesheetId == timesheetId) {
			MYTIMESHEET.timesheet = item; 
			return;
		}
	});
	$('#addTimeDialog').modal('show');
};

MyTimeSheet.prototype.fulldayOrTimebasedChanged = function(e) { 
	var fulldayOrTimeBased = $('#fulldayOrTimeBased').val(); 
	if (fulldayOrTimeBased == 'fullday') {
		$('#timeSpaceSection').hide();
		$('#timeSection').hide();
	} else {
		$('#timeSpaceSection').show();  
		$('#timeSection').show();
	}
} 

// Service ------------

MyTimeSheet.prototype.deleteTimesheet = function() {
	try {
		
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/delete-time-sheet',
		  {
		    timesheetId: MYTIMESHEET.timesheetId,
		    actor: INTRANETLIB.getUserId()
		  },
		  function(obj, err) {;
		    $('#deleteConfirmation').modal('hide');
		    $('#editDialog').modal('hide');
		    var isError = INTRANETLIB.checkServiceError(err); 
			  if (!isError) {
				  INTRANETLIB.showMessage("Delete Confirmation", "Your timesheet has been successfully removed");
			  }
		    MYTIMESHEET.getTimeSheets();
		  }
		);
		
		
	} catch (e) {
		alert("Error - " + e);
		MYTIMESHEET.getTimeSheets();
	}
};


MyTimeSheet.prototype.submitTimesheet = function() {
	try {
		INTRANETLIB.showLoading();
		var month = $('#months').val();
		var year = $('#years').val();
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/submit-month',
		  {
			year: year,
		    month: month,
		    userId: INTRANETLIB.getUserId(),
		    actor: INTRANETLIB.getUserId()
		  },
		  function(obj, err) {
		    INTRANETLIB.hideLoading();  
		    var isError = INTRANETLIB.checkServiceError(err); 
		    if (!isError) {
		    	  INTRANETLIB.showMessage("Submit Confirmation", "Your timesheet has been successfully submitted");   	
		    }
		 
		    MYTIMESHEET.getTimeSheets();
		  }
		);
	
	} catch (e) {
		alert("Error - " + e);
		MYTIMESHEET.getTimeSheets();
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
		MYTIMESHEET.timesheet.remarks = $('#remarks').val();
		$('#editDialog').modal('hide');
		INTRANETLIB.showLoading();
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/update-time-sheet',
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
		    status: 'NEW',
		    projectCode: 'TEST',
		    logDate: MYTIMESHEET.timesheet.logDate,
		    actor: INTRANETLIB.getUserId()
		  },
		  function(obj, err) {
			INTRANETLIB.hideLoading();
		    var isError = INTRANETLIB.checkServiceError(obj, err); 
		    if (!isError) {
		    	INTRANETLIB.showMessage("Update Confirmation", "Your timesheet has been successfully saved");
		    }
		    
		    MYTIMESHEET.getTimeSheets();
		  }
		);
	
	} catch (e) {
		alert("Error - " + e);
		MYTIMESHEET.getTimeSheets();
	}
};


MyTimeSheet.prototype.saveTimeClock = function() {
	try {
		var clockInTime = $('#startTime').val();
		var clockOutTime = $('#finishTime').val();
		console.log("clockInTime: " + clockInTime + ", clockOutTime: " + clockOutTime); 
		var fulldayOrTimeBased = $('#fulldayOrTimeBased').val(); 
		console.log('fulldayOrTimeBased: ' + fulldayOrTimeBased);
		if (fulldayOrTimeBased == 'fullday') {
			clockInTime = '09:00';
			clockOutTime = '18:00';
		}  
		console.log("clockInTime: " + clockInTime + ", clockOutTime: " + clockOutTime + ", fulldayOrTimeBased: " + fulldayOrTimeBased);
		var type = $('#timeType').val();
		var remarks = $('#timeRemarks').val();
		INTRANETLIB.showLoading();
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/add-timesheet-details',
		  {
		    timesheetId: MYTIMESHEET.timesheet.timesheetId,
		    logDate: MYTIMESHEET.timesheet.logDate,
		    clockInTime: clockInTime,
		    clockOutTime: clockOutTime,
		    type: type,
		    remarks: remarks,
		    fulldayOrTimeBased: fulldayOrTimeBased,
		    actor: INTRANETLIB.getUserId()
		  },
		  function(obj, err) { 
			  INTRANETLIB.hideLoading();
			  $('#editDialog').modal('hide');
			  $('#addTimeDialog').modal('hide');
			  var isError = INTRANETLIB.checkServiceError(err); 
			  if (!isError) {
		    	INTRANETLIB.showMessage("Update Confirmation", "Your time-clock has been successfully saved");
			  }
			  MYTIMESHEET.getTimeSheets();
		  }
		);
		
		
	} catch (e) {
		console.log(e);
		alert("Error - " + e);
		MYTIMESHEET.getTimeSheets();
	}
};

MyTimeSheet.prototype.getTimeSheetMonth = function(getTimeSheetMonthCallBackFn) {
	
	var userId = INTRANETLIB.getUserId();
	console.log("Get timesheet month, userId: " + userId);
	var month = $('#months').val();
	var year = $('#years').val();
	Liferay.Service(
	  '/intranet-timesheet-service-portlet.timesheet/get-timesheet-month',
	  {
		  year: year,
		  month: month,
		  userId: INTRANETLIB.getUserId(),
		  actor: INTRANETLIB.getUserId()
	  },
	  function(obj, err) {
		  getTimeSheetMonthCallBackFn(obj);
	  }
	);
}


MyTimeSheet.prototype.getTimeSheetDetails = function(getTimeSheetDetailsCallbackFn) {
	
	var userId = INTRANETLIB.getUserId();
	console.log("Get timesheet details, userId: " + userId);
	
	Liferay.Service(
	  '/intranet-timesheet-service-portlet.timesheet/get-timesheet-details',
	  {
		timesheetId: MYTIMESHEET.timesheetId, 
	    actor: userId
	  },
	  function(obj) {
		  getTimeSheetDetailsCallbackFn(obj);
	  }
	);
}


MyTimeSheet.prototype.getTimeSheets = function(isEditable) {
	
	var userId = INTRANETLIB.getUserId();
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
		  MYTIMESHEET.timesheets = [];
		  obj.forEach(function(item) {
			 item.isEditable = isEditable;
			 MYTIMESHEET.timesheets.push(item);
			 var logDate = INTRANETLIB.formatDisplayDate(item.logDate);
			 var dayName = INTRANETLIB.getDayStringOfWeek(item.logDate);
			 var total = item.regular + item.overtime + item.sick + item.vacation + item.holiday + item.unpaid + item.other;
			 var rowString =  
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
						"<td>" + item.status + "</td>" +
						"<td>" +
						'	<button type="button" title="View Summary" class="btn btn-default" data-toggle="modal" onclick="MYTIMESHEET.viewRow(\'' + item.timesheetId + '\')"><i class="fa fa-eye"></i></button>'
						 
						
			 if (isEditable) {
				 rowString = rowString + 
						 '	<button type="button" title="Add timesheet" class="btn btn-default" data-toggle="modal" onclick="MYTIMESHEET.addTime(\'' + item.timesheetId + '\')"><i class="fa fa-plus"></i></button>'
	
			 }  
			 rowString = rowString +
					"</td>" +
					"</tr>"
			 
			 var row = $(rowString);
			 
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