// Controller ------------

function TimesheetController() {
	timesheetId = -1;
	timesheets = [];
	timesheet = {};
}

var TIMESHEETCONTROLLER = new TimesheetController();

TimesheetController.prototype.initTimesheetAdmin = function() {
	$('#editDialog').on('shown.bs.modal', function (e) {
	 	console.log("editDialog on-show");
	 	$('#regular').val(TIMESHEETCONTROLLER.timesheet.regular);
	 	$('#overtime').val(TIMESHEETCONTROLLER.timesheet.overtime);
	 	$('#sick').val(TIMESHEETCONTROLLER.timesheet.sick);
	 	$('#vacation').val(TIMESHEETCONTROLLER.timesheet.vacation);
	 	$('#holiday').val(TIMESHEETCONTROLLER.timesheet.holiday);
	 	$('#unpaid').val(TIMESHEETCONTROLLER.timesheet.unpaid);
	 	$('#other').val(TIMESHEETCONTROLLER.timesheet.other); 
	 	$('#remarks').val(TIMESHEETCONTROLLER.timesheet.remarks); 
	})
	 
	$('#editDialog').on('shown.bs.modal', function (e) { 
	 	$('#regular').val(TIMESHEETCONTROLLER.timesheet.regular);
	 	$('#overtime').val(TIMESHEETCONTROLLER.timesheet.overtime);
	 	$('#sick').val(TIMESHEETCONTROLLER.timesheet.sick);
	 	$('#vacation').val(TIMESHEETCONTROLLER.timesheet.vacation);
	 	$('#holiday').val(TIMESHEETCONTROLLER.timesheet.holiday);
	 	$('#unpaid').val(TIMESHEETCONTROLLER.timesheet.unpaid);
	 	$('#other').val(TIMESHEETCONTROLLER.timesheet.other); 
	 	$('#remarks').val(TIMESHEETCONTROLLER.timesheet.remarks); 
	 	
	 	console.log("TIMESHEETCONTROLLER.timesheet.isEditable: " + TIMESHEETCONTROLLER.timesheet.isEditable);
	 	if (TIMESHEETCONTROLLER.timesheet.isEditable) {
	 		$("#remarks").prop( "disabled", false ); 
	 		$('#saveButton').css("display", "");
	 		$('#deleteButton').css("display", "");
	 	} else {
	 		$("#remarks").prop( "disabled", true ); 
	 		$('#saveButton').css("display", "none");
	 		$('#deleteButton').css("display", "none");
	 	}
	 	
	 	TIMESHEETSERVICE.getTimeSheetDetails(function(obj) {
	 		 
	 		$("#timeDetails > table").remove(); 
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
	
	TIMESHEETCONTROLLER.viewAdminButton();
}

TimesheetController.prototype.initMyTimesheet = function() {
	$('#addTimeDialog').on('shown.bs.modal', function (e) { 
	 	$('#timeType').val('Regular');
	 	$('#fulldayOrTimeBased').val('fullday');
	 	$('#startTime').val('');
	 	$('#finishTime').val('');
	 	$("#timeSpaceSection").css({"display":"none"});
	 	$("#timeSection").css({"display":"none"});
	 	$('#timeRemarks').val('');
	})
	
	$('#addTimeDialog').on('hidden.bs.modal', function (e) {
		$("body").css({"padding-right":"0px"});
	})  

	
	$('#editDialog').on('shown.bs.modal', function (e) { 
	 	$('#regular').val(TIMESHEETCONTROLLER.timesheet.regular);
	 	$('#overtime').val(TIMESHEETCONTROLLER.timesheet.overtime);
	 	$('#sick').val(TIMESHEETCONTROLLER.timesheet.sick);
	 	$('#vacation').val(TIMESHEETCONTROLLER.timesheet.vacation);
	 	$('#holiday').val(TIMESHEETCONTROLLER.timesheet.holiday);
	 	$('#unpaid').val(TIMESHEETCONTROLLER.timesheet.unpaid);
	 	$('#other').val(TIMESHEETCONTROLLER.timesheet.other); 
	 	$('#remarks').val(TIMESHEETCONTROLLER.timesheet.remarks); 
	 	
	 	console.log("TIMESHEETCONTROLLER.timesheet.isEditable: " + TIMESHEETCONTROLLER.timesheet.isEditable);
	 	if (TIMESHEETCONTROLLER.timesheet.isEditable) {
	 		$("#remarks").prop( "disabled", false ); 
	 		$('#saveButton').css("display", "");
	 		$('#deleteButton').css("display", "");
	 	} else {
	 		$("#remarks").prop( "disabled", true ); 
	 		$('#saveButton').css("display", "none");
	 		$('#deleteButton').css("display", "none");
	 	}
	 	
	 	TIMESHEETSERVICE.getTimeSheetDetails(function(obj) {
	 		 
	 		$("#timeDetails > table").remove(); 
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
		TIMESHEETCONTROLLER.deleteRow();
	})  
	
	TIMESHEETCONTROLLER.viewButton();
};

TimesheetController.prototype.approveButton = function(timesheetId) { 
	INTRANETLIB.showDialog('Approve Confirmation', 'Are you sure you want to approve this timesheet entry?', function() {
		console.log("approve confirm...");
		var dialogsToHide = [];
		TIMESHEETSERVICE.approveTimesheet($('#years').val(), $('#months').val(), $('#staffs').val(), INTRANETLIB.getUserId(), dialogsToHide, function(obj) {
			TIMESHEETCONTROLLER.viewAdminButton();
		});
	}, function() {
		console.log("approve not confirm...");
	});
};

TimesheetController.prototype.rejectButton = function(timesheetId) { 
	INTRANETLIB.showDialog('Return Confirmation', 'Are you sure you want to return this timesheet entry?', function() {
		console.log("return confirm..."); 
		var dialogsToHide = [];	
		var comment = "-";
		TIMESHEETSERVICE.returnTimesheet($('#years').val(), $('#months').val(), $('#staffs').val(), comment, INTRANETLIB.getUserId(), dialogsToHide, function() {
			TIMESHEETCONTROLLER.viewAdminButton();
		});
	}, function() {
		console.log("return not confirm...");
	});
};

TimesheetController.prototype.deleteRow = function() {
	console.log("deleting " + TIMESHEETCONTROLLER.timesheetId);
	//MYTIMESHEET.timesheetId = timesheetId; 
	INTRANETLIB.showDialog('Delete Confirmation', 'Are you sure you want to remove this timesheet entry?', function() { 
		var dialogsToHide = ['deleteConfirmation', 'editDialog'];
		TIMESHEETSERVICE.deleteTimesheet(TIMESHEETCONTROLLER.timesheetId, INTRANETLIB.getUserId(), dialogsToHide, function() {
			TIMESHEETCONTROLLER.viewButton();
		});
	}, function() { 
	});
};

TimesheetController.prototype.saveButton = function() {
	INTRANETLIB.showDialog('Submit Confirmation', 'Are you sure you want to save this timesheet?', function() {
		console.log("save confirm...");
		var dialogsToHide = ['editDialog'];
		TIMESHEETCONTROLLER.timesheet.remarks = $('#remarks').val();
		TIMESHEETSERVICE.saveTimesheet(TIMESHEETCONTROLLER.timesheet, INTRANETLIB.getUserId(), INTRANETLIB.getUserId(), dialogsToHide, function() {
			TIMESHEETCONTROLLER.viewButton();
		});
	}, function() {
		console.log("save not confirm...");
	});  
};

TimesheetController.prototype.viewButton = function() {
	   
	TIMESHEETSERVICE.getTimeSheetMonth(function(timesheetMonth) {
		var isEditable = true; 
		if (timesheetMonth != null && timesheetMonth.length > 0) {
			isEditable = false;  
			$('#timesheetStatus').html("Status: " + timesheetMonth[0].status);
			if (timesheetMonth[0].status == 'RETURNED') {
				isEditable = true;  
			} 
		} else {
			isEditable = true;
			$('#timesheetStatus').html("Status: NOT SUBMITTED");
		}
		TIMESHEETSERVICE.getTimeSheets(INTRANETLIB.getUserId(), INTRANETLIB.getUserId(), $('#months').val(), $('#years').val(), function(obj) {
			  $("#dataTable > tbody > tr").remove();
			  TIMESHEETCONTROLLER.timesheets = [];
			  obj.forEach(function(item) {
				 item.isEditable = isEditable;
				 TIMESHEETCONTROLLER.timesheets.push(item);
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
							'	<button type="button" title="View Summary" class="btn btn-default" data-toggle="modal" onclick="TIMESHEETCONTROLLER.viewRow(\'' + item.timesheetId + '\')"><i class="fa fa-eye"></i></button>'
							 
							
				 if (isEditable) {
					 rowString = rowString + 
							 '	<button type="button" title="Add timesheet" class="btn btn-default" data-toggle="modal" onclick="TIMESHEETCONTROLLER.addTime(\'' + item.timesheetId + '\')"><i class="fa fa-plus"></i></button>'
		
				 }  
				 rowString = rowString +
						"</td>" +
						"</tr>"
				 
				 var row = $(rowString);
				 
				$("#dataTable > tbody").append(row);
			  });
			  
		});
		if (isEditable) {
			$("#submitButton").css("display", "");
		} else {
			$("#submitButton").css("display", "none");
		}
	})
	
};


TimesheetController.prototype.viewAdminButton = function() {
	   
	TIMESHEETSERVICE.getTimeSheetMonth(function(timesheetMonth) { 
		var isEditable = false; 
		if (timesheetMonth != null && timesheetMonth.length > 0) {
			isEditable = true;  
			$('#timesheetStatus').html("Status: " + timesheetMonth[0].status);
			if (timesheetMonth[0].status != 'SUBMITTED') {
				isEditable = false;  
			} 
		} else {
			isEditable = false;
			$('#timesheetStatus').html("Status: NOT SUBMITTED");
		}
		TIMESHEETSERVICE.getTimeSheets($('#staffs').val(), INTRANETLIB.getUserId(), $('#months').val(), $('#years').val(), function(obj) {
			  $("#dataTable > tbody > tr").remove();
			  TIMESHEETCONTROLLER.timesheets = [];
			  obj.forEach(function(item) {
				 item.isEditable = false;
				 TIMESHEETCONTROLLER.timesheets.push(item);
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
							"<td>" +
							'	<button type="button" title="View Summary" class="btn btn-default" data-toggle="modal" onclick="TIMESHEETCONTROLLER.viewRow(\'' + item.timesheetId + '\')"><i class="fa fa-eye"></i></button>'
							 
						
				 rowString = rowString +
						"</td>" +
						"</tr>"
				 
				 var row = $(rowString);
				 
				$("#dataTable > tbody").append(row);
			  });
			  
		});
		if (isEditable) {
			$("#approveButton").css("display", "");
			$("#rejectButton").css("display", "");
		} else {  
			$("#approveButton").css("display", "none");
			$("#rejectButton").css("display", "none");
		}
	})
	
};

TimesheetController.prototype.timeSaveButton = function() {
	INTRANETLIB.showDialog('Submit Confirmation', 'Are you sure you want to submit this time-clock?', function() {
		console.log("save confirm...");
		var dialogsToHide = ['editDialog', 'addTimeDialog'];
		TIMESHEETSERVICE.saveTimeClock($('#startTime').val(), $('#finishTime').val(), TIMESHEETCONTROLLER.timesheet, $('#timeType').val(), 
				$('#timeRemarks').val(), INTRANETLIB.getUserId(), dialogsToHide, function() {
			TIMESHEETCONTROLLER.viewButton();
		});
	}, function() {
		console.log("save not confirm...");
	});  
};

TimesheetController.prototype.submitButton = function() {
	INTRANETLIB.showDialog('Submit Confirmation', 'Are you sure you want to submit this month timesheet?', function() {
		console.log("submit confirm...");
		TIMESHEETSERVICE.submitTimesheet($('#months').val(), $('#years').val(), INTRANETLIB.getUserId(), INTRANETLIB.getUserId(), function() {
			TIMESHEETCONTROLLER.viewButton();
		});
	}, function() {
		console.log("submit not confirm...");
	});  
};

TimesheetController.prototype.deleteButton = function() {
	TIMESHEETCONTROLLER.deleteRow();
}; 

TimesheetController.prototype.viewRow = function(timesheetId) { 
	TIMESHEETCONTROLLER.timesheetId = timesheetId; 
	var timesheets = TIMESHEETCONTROLLER.timesheets;
	timesheets.forEach(function(item) {
		if (item.timesheetId == timesheetId) {
			TIMESHEETCONTROLLER.timesheet = item; 
			return;
		}
	});
	$('#editDialog').modal('show');
};

TimesheetController.prototype.addTime = function(timesheetId) {
	console.log("addTime " + timesheetId);
	TIMESHEETCONTROLLER.timesheetId = timesheetId; 
	var timesheets = TIMESHEETCONTROLLER.timesheets;
	timesheets.forEach(function(item) {
		if (item.timesheetId == timesheetId) {
			TIMESHEETCONTROLLER.timesheet = item; 
			return;
		}
	});
	$('#addTimeDialog').modal('show');
};

TimesheetController.prototype.fulldayOrTimebasedChanged = function(e) { 
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
function TimesheetService() {
	timesheetId = -1;
	timesheets = [];
	timesheet = {};
}

var TIMESHEETSERVICE = new TimesheetService();

TimesheetService.prototype.deleteTimesheet = function(timesheetId, actor, dialogsToHide, callbacFn) {
	try {
		
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/delete-time-sheet',
		  {
		    timesheetId: timesheetId,
		    actor: actor
		  },
		  function(obj, err) {;
		  	if (dialogsToHide != null) {
		  		for (var i = 0; i < dialogsToHide.length; i++) {
		  			 $('#' + dialogsToHide[i]).modal('hide');
		  		}
		  	} 
		    var isError = INTRANETLIB.checkServiceError(err); 
			  if (!isError) {
				  INTRANETLIB.showMessage("Delete Confirmation", "Your timesheet has been successfully removed");
			  }
			  callbacFn();
		  }
		);
		
		
	} catch (e) {
		alert("Error - " + e); 
	}
};


TimesheetService.prototype.submitTimesheet = function(month, year, userId, actor, callbackFn) {
	try {
		INTRANETLIB.showLoading();
		var month = month;
		var year = year;
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/submit-month',
		  {
			year: year,
		    month: month,
		    userId: userId,
		    actor: actor
		  },
		  function(obj, err) {
		    INTRANETLIB.hideLoading();  
		    var isError = INTRANETLIB.checkServiceError(err); 
		    if (!isError) {
		    	  INTRANETLIB.showMessage("Submit Confirmation", "Your timesheet has been successfully submitted");   	
		    }
		    callbackFn(); 
		  }
		);
	
	} catch (e) {
		alert("Error - " + e); 
	}
};

TimesheetService.prototype.saveTimesheet = function(timesheet, userId, actor, dialogsToHide, callbackFn) {
	try { 
		if (dialogsToHide != null) {
	  		for (var i = 0; i < dialogsToHide.length; i++) {
	  			 $('#' + dialogsToHide[i]).modal('hide');
	  		}
	  	}  
		INTRANETLIB.showLoading();
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/update-time-sheet',
		  {
		    timesheetId: timesheet.timesheetId,
		    employeeScreenName: userId,
		    regular: timesheet.regular,
		    overtime: timesheet.overtime,
		    sick: timesheet.sick,
		    vacation: timesheet.vacation,
		    holiday: timesheet.holiday,
		    unpaid: timesheet.unpaid,
		    other: timesheet.other,
		    remarks: timesheet.remarks,
		    status: 'NEW',
		    projectCode: 'TEST',
		    logDate: timesheet.logDate,
		    actor: actor
		  },
		  function(obj, err) {
			INTRANETLIB.hideLoading();
		    var isError = INTRANETLIB.checkServiceError(obj, err); 
		    if (!isError) {
		    	INTRANETLIB.showMessage("Update Confirmation", "Your timesheet has been successfully saved");
		    }
		    
		    callbackFn();
		  }
		);
	
	} catch (e) {
		alert("Error - " + e); 
	}
};


TimesheetService.prototype.saveTimeClock = function(clockInTime, clockOutTime, timesheet, type, remarks, actor, dialogsToHide, callbackFn) {
	try { 
		console.log("clockInTime: " + clockInTime + ", clockOutTime: " + clockOutTime); 
		var fulldayOrTimeBased = $('#fulldayOrTimeBased').val(); 
		console.log('fulldayOrTimeBased: ' + fulldayOrTimeBased);
		if (fulldayOrTimeBased == 'fullday') {
			clockInTime = '09:00';
			clockOutTime = '18:00';
		}  
		console.log("clockInTime: " + clockInTime + ", clockOutTime: " + clockOutTime + ", fulldayOrTimeBased: " + fulldayOrTimeBased); 
		INTRANETLIB.showLoading();
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/add-timesheet-details',
		  {
		    timesheetId: timesheet.timesheetId,
		    logDate: timesheet.logDate,
		    clockInTime: clockInTime,
		    clockOutTime: clockOutTime,
		    type: type,
		    remarks: remarks,
		    fulldayOrTimeBased: fulldayOrTimeBased,
		    actor: actor
		  },
		  function(obj, err) { 
			  INTRANETLIB.hideLoading();
			  if (dialogsToHide != null) {
			  		for (var i = 0; i < dialogsToHide.length; i++) {
			  			 $('#' + dialogsToHide[i]).modal('hide');
			  		}
			  	}  
			  var isError = INTRANETLIB.checkServiceError(err); 
			  if (!isError) {
		    	INTRANETLIB.showMessage("Update Confirmation", "Your time-clock has been successfully saved");
			  }
			  callbackFn();
		  }
		);
		
		
	} catch (e) {
		console.log(e);
		alert("Error - " + e); 
	}
};

TimesheetService.prototype.getTimeSheetMonth = function(getTimeSheetMonthCallBackFn) {
	
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


TimesheetService.prototype.getTimeSheetDetails = function(getTimeSheetDetailsCallbackFn) {
	
	var userId = INTRANETLIB.getUserId();
	console.log("Get timesheet details, userId: " + userId);
	
	Liferay.Service(
	  '/intranet-timesheet-service-portlet.timesheet/get-timesheet-details',
	  {
		timesheetId: TIMESHEETCONTROLLER.timesheetId, 
	    actor: userId
	  },
	  function(obj) {
		  getTimeSheetDetailsCallbackFn(obj);
	  }
	);
}


TimesheetService.prototype.getTimeSheets = function(userId, actor, month, year, callbackFn) {
	 
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
	    actor: actor
	  },
	  function(obj) {
		  INTRANETLIB.hideLoading();
		  callbackFn(obj);
	  }
	);
}


TimesheetService.prototype.approveTimesheet = function(year, month, staffId, actor, dialogsToHide, callbackFn) {
	try {
		
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/approve-month',
		  {
			  year: year,
			  month: month,
			  staffId: staffId,
			  actor: actor
		  },
		  function(obj, err) {   
			  if (dialogsToHide != null) {
			  		for (var i = 0; i < dialogsToHide.length; i++) {
			  			 $('#' + dialogsToHide[i]).modal('hide');
			  		}
			  	}  
			  var isError = INTRANETLIB.checkServiceError(err); 
			  if (!isError) {
		    	INTRANETLIB.showMessage("Approve Confirmation", "This timesheet has been successfully approved");
			  }
			  callbackFn(); 
		  }
		);
		
		
	} catch (e) {
		alert("Error - " + e); 
	}
};


TimesheetService.prototype.returnTimesheet = function(year, month, staffId, comment, actor, dialogsToHide, callbackFn) {
	try {
		
		Liferay.Service(
		  '/intranet-timesheet-service-portlet.timesheet/reject-month',
		  {
			  year: year,
			  month: month,
			  staffId: staffId,
			  comment: comment,
			  actor: actor
		  },
		  function(obj, err) {
			  if (dialogsToHide != null) {
			  		for (var i = 0; i < dialogsToHide.length; i++) {
			  			 $('#' + dialogsToHide[i]).modal('hide');
			  		}
			  	}  
			  var isError = INTRANETLIB.checkServiceError(err); 
			  if (!isError) {
		    	INTRANETLIB.showMessage("Return Confirmation", "This timesheet has been successfully returned");
			  }
			  callbackFn();  
		  }
		);
		
		
	} catch (e) {
		alert("Error - " + e); 
	}
}; 