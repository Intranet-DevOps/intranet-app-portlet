<%@page import="java.util.Date"%>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@include file="/html/inc/commonlib.jsp"%>

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
	           
	           <button type="button" id="viewButton" class="btn btn-primary"><i class="fa fa-search"></i>&nbsp;View</button>
	           
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

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#submitConfirmation"><i class="fa fa-send"></i> Submit</button>

<!-- Modal -->
<div id="editDialog" class="modal fade paraModal" style="bottom: auto; width: 600px" role="dialog">
  <div class="modal-dialog paraModalDialog" style="margin-top: 0px; margin-bottom: 0px;">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Timesheet Entry</h4>
      </div>
      <div class="modal-body">
      	<b>Please provide your timesheet below<br/><br/></b>
        <table>
        	<tr>
        		<td width="100px">Regular</td>
        		<td width="125px"><input id="regular" style="height: 30px; width: 100px"/>&nbsp;&nbsp;</td>
        		<td width="100px">Vacation</td>
        		<td><input id="vacation" style="height: 30px; width: 100px"/></td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Overtime</td>
        		<td><input id="overtime" style="height: 30px; width: 100px" />&nbsp;&nbsp;</td>
        		<td>Holiday</td>
        		<td><input id="holiday" style="height: 30px; width: 100px"/></td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Sick</td>
        		<td><input id="sick" style="height: 30px; width: 100px" />&nbsp;&nbsp;</td>
        		<td>Unpaid Leave</td>
        		<td><input id="unpaid" style="height: 30px; width: 100px"/></td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Other</td>
        		<td><input id="other" style="height: 30px; width: 100px" />&nbsp;&nbsp;</td>
        		<td>&nbsp;</td>
        		<td>&nbsp;</td>
        	</tr>
        </table>
      </div>
      <div class="modal-footer">
      	<button type="button" class="btn btn-default" id="saveButton">Save</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
      </div>
    </div>

  </div>
</div> 
 

<script src="<%=request.getContextPath()%>/js/intranetlib.js?<%=new Date().getTime()%>" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/js/my-time-sheet-main.js?<%=new Date().getTime()%>" type="text/javascript"></script>
