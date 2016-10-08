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
	       <h3 class="box-title">Timesheet Approval</h3>
	 
	 		 
	       <div class="box-tools" style="left: 250px">
	   
	   		   Staff <select style="width: 200px" id="staffs" class="form-control select2"> 
	           </select>
	       	   Year <select style="width: 75px" id="years" class="form-control select2"> 
	           </select>
	           Month <select style="width: 120px" id="months" class="form-control select2"> 
	           </select> 
	           
	           <div class="btn-group"> 
	           	<button type="button" onclick="TIMESHEETCONTROLLER.viewAdminButton()" id="viewAdminButton" class="btn btn-primary"><i class="fa fa-search"></i>&nbsp;View</button>
	           </div>
	          	
	       </div>
	       
	     </div>
	     
	     <div class="mailbox-controls">
	     	<span id="timesheetStatus" style="font-weight: bold;"> 
	     		</span>
	     	<div class="btn-group"> 
				<button type="button" onclick="TIMESHEETCONTROLLER.approveButton()" id="approveButton" class="btn btn-primary" ><i class="fa fa-thumbs-o-up"></i>&nbsp;Approve</button>  
               </div>
               <div class="btn-group">   
				<button type="button" onclick="TIMESHEETCONTROLLER.rejectButton()" id="rejectButton" class="btn btn-primary" ><i class="fa fa-thumbs-o-down"></i>&nbsp;Return</button> 
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

<script src="<%=request.getContextPath()%>/js/intranetlib.js?<%=new Date().getTime()%>" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/js/timesheetadmin-main.js?<%=new Date().getTime()%>" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/js/common-time-sheet-main.js?<%=new Date().getTime()%>" type="text/javascript"></script>
