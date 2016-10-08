<%@page import="java.util.Date"%>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@include file="/html/inc/commonlib.jsp"%> 
<%@include file="/html/inc/commontimesheetdialog.jsp"%> 

<portlet:defineObjects />

<style>
.aui .portlet-borderless-container {
    background: #ECF0F5;
    margin-bottom: 10px;
    padding: 0;
}
.aui .row {
    margin-left: 0px;
}
.col-xs-12 {
	padding-left: 0px; 
}

</style>

<div class="row">
	 <div class="col-xs-12">
	   <div class="box">
	     <div class="box-header"> 
	       <h3 class="box-title">My timesheet</h3>
	 
	 		 
	       <div class="box-tools" style="left: 150px">
	   
	       	 	Year <select style="width: 75px" id="years" class="form-control select2"> 
	           </select>
	           Month <select style="width: 120px" id="months" class="form-control select2"> 
	           </select> 
	           
	           <button onclick="TIMESHEETCONTROLLER.viewButton()" type="button" id="viewButton" class="btn btn-primary"><i class="fa fa-search"></i>&nbsp;View</button>
	          
	          	<span id="timesheetStatus" style="font-weight: bold;"> 
	     		</span>
	       </div>
	     </div>
	     <!-- /.box-header -->  
	     <div class="box-body table-responsive no-padding">
	       <table id="dataTable" class="table table-hover">
	      	<thead>
	         <tr>	
	           <th>Day</th>  
	           <th>Date</th>
	           <th>Regular</th>
	           <th>Overtime</th>
	           <th>Sick</th>
	           <th>Vacation</th>
	           <th>Holiday</th>
	           <th>Unpaid</th>
	           <th>Other</th>
	           <th>Total</th>
	           <th>Status</th>
	           <th></th>
	         </tr>
	       	</thead>
	       	
	       	<tbody>  
	       
	         </tbody>
	         
	       </table>
	     </div>
	     <!-- /.box-body -->
	   </div>
	   <!-- /.box --> 
	  </div>
</div>

<button type="button" class="btn btn-primary" id="submitButton" data-toggle="modal" onclick="TIMESHEETCONTROLLER.submitButton()"><i class="fa fa-send"></i> Submit</button>


<script src="<%=request.getContextPath()%>/js/intranetlib.js?<%=new Date().getTime()%>" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/js/my-time-sheet-main.js?<%=new Date().getTime()%>" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/js/common-time-sheet-main.js?<%=new Date().getTime()%>" type="text/javascript"></script>
