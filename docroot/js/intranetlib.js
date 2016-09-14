function IntranetLib() {
}

IntranetLib.prototype.getYears = function() {
	var years = [];
	years.push({'label':'2015', 'value' : '2015' });
	years.push({'label':'2016', 'value' : '2016' });
	years.push({'label':'2017', 'value' : '2017' });
	years.push({'label':'2018', 'value' : '2018' });
	return years;
}

IntranetLib.prototype.getMonths = function() {
	var months = [];
	months.push({'label':'January', 'value' : 0 });
	months.push({'label':'February', 'value' : 1 });
	months.push({'label':'March', 'value' : 2 });
	months.push({'label':'April', 'value' : 3 });    
	months.push({'label':'May', 'value' : 4 });
	months.push({'label':'June', 'value' : 5 });
	months.push({'label':'July', 'value' : 6 });
	months.push({'label':'August', 'value' : 7 });
	months.push({'label':'September', 'value' : 8 });
	months.push({'label':'October', 'value' : 9 });
	months.push({'label':'November', 'value' : 10 });
	months.push({'label':'December', 'value' : 11 });   
	return months;
}

IntranetLib.prototype.getDayStringOfWeek = function(timestamp) {
	var date = new Date(timestamp);
	var day = date.getDay();
	var name = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][day];
	return name;
}

IntranetLib.prototype.formatDisplayDate = function(timestamp) { 
	var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var date = new Date(timestamp);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
} 

IntranetLib.prototype.getBeginningOfMonthTimestamp = function(year, month) { 
	var d = new Date(year, month, 1);
	return d.getTime();
} 


function getDaysInMonth(aDate){
   // returns the last day of a given month
    var m = new Number(aDate.getMonth());
    var y = new Number(aDate.getYear());

    var tmpDate = new Date(y, m, 28);
    var checkMonth = tmpDate.getMonth();
    var lastDay = 27;

    while(lastDay <= 31){
        temp = tmpDate.setDate(lastDay + 1);
        if(checkMonth != tmpDate.getMonth())
            break;
        lastDay++
    }
    return lastDay;
}


IntranetLib.prototype.getEndingOfMonthTimestamp = function(year, month) {
	var d = new Date(year, month, 1);
	var lastDay = getDaysInMonth(d) + 1;
	return new Date(year, month, lastDay).getTime();
} 

IntranetLib.prototype.getCurrentYear = function() {
	var d = new Date();
	var n = d.getFullYear();  
	return n;
} 

IntranetLib.prototype.getCurrentMonth = function() {
	var d = new Date();
	var n = d.getMonth();  
	return n;
} 

IntranetLib.prototype.getUserId= function() {
	return Liferay.ThemeDisplay.getUserId();
}

IntranetLib.prototype.getFullName = function() {
	return Liferay.ThemeDisplay.getUserName();
}

IntranetLib.prototype.showLoading = function() {
	pleaseWaitDiv.modal();
}
IntranetLib.prototype.hideLoading = function() {
	pleaseWaitDiv.modal('hide');
}
var pleaseWaitDiv = $('<div class="modal hide" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false"><div class="modal-header"><h1>Processing...</h1></div><div class="modal-body"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>');

var INTRANETLIB = new IntranetLib();

var INTRANETLIB = new IntranetLib();