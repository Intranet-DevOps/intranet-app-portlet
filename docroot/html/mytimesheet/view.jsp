<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

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
	       
	       	 	Year <select style="width: 75px"> 
	           		<option>2015</option>
	           		<option selected="selected">2016</option>
	           </select>
	           Month <select style="width: 120px"> 
	           		<option>January</option>
	           		<option>February</option>
	           		<option>March</option>
	           		<option>April</option>
	           		<option>May</option>
	           		<option>June</option>
	           		<option selected="selected">July</option>
	           		<option>August</option>
	           		<option>September</option>
	           		<option>October</option>
	           		<option>November</option>
	           		<option>December</option>
	           </select>
	           Week <select> 
	           		<option>1-July-2016 - 8-July-2016</option>
	           		<option>9-July-2016 - 16-July-2016</option>
	           		<option>17-July-2016 - 24-July-2016</option>
	           		<option>25-July-2016 - 1-August-2016</option>
	           </select>
	       </div>
	     </div>
	     <!-- /.box-header -->  
	     <div class="box-body table-responsive no-padding">
	       <table class="table table-hover">
	         <tr>	
	           <th>Day</th>
	           <th>Date</th>
	           <th>Regular</th>
	           <th>Overtime</th>
	           <th>Sick</th>
	           <th>Vacation</th>
	           <th>Holiday</th>
	           <th>Unpaid Leave</th>
	           <th>Other</th>
	           <th>Total</th>
	           <th></th>
	         </tr>
	         
	         <tr>
	           <td>Saturday</td><td>01-Jul-2016</td>
	           <td>-</td>
	           <td>4.00</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>4.00</td>
	           <td>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td>Sunday</td><td>02-Jul-2016</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td>Monday</td><td>03-Jul-2016</td>
	           <td>8.00</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>8.00</td>
	           <td>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td>Tuesday</td><td>04-Jul-2016</td>
	           <td>8.00</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>8.00</td>
	           <td>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td>Wednesday</td><td>05-Jul-2016</td>
	           <td>8.00</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>8.00</td>
	           <td>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td>Thursday</td><td>06-Jul-2016</td>
	           <td>8.00</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>8.00</td>
	           <td>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	        
	         <tr>
	           <td>Friday</td><td>07-Jul-2016</td>
	           <td>8.00</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>8.00</td>
	           <td>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td>Saturday</td><td>08-Jul-2016</td>
	           <td>-</td>
	           <td>4.00</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>-</td>
	           <td>4.00</td>
	           <td>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr> 
	         
	       </table>
	     </div>
	     <!-- /.box-body -->
	   </div>
	   <!-- /.box --> 
	  </div>
</div>

<!-- Modal -->
<div id="deleteConfirmation" class="modal fade paraModal" style="bottom: auto; width: 600px" role="dialog">
  <div class="modal-dialog paraModalDialog" style="margin-top: 0px; margin-bottom: 0px;">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Delete Confirmation</h4>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to remove this timesheet entry?</p>
      </div>
      <div class="modal-footer">
      	<button type="button" class="btn btn-default" data-dismiss="modal">Yes</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
      </div>
    </div>

  </div>
</div>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#submitConfirmation"><i class="fa fa-send"></i> Submit</button>

<!-- Modal -->
<div id="submitConfirmation" class="modal fade paraModal" style="bottom: auto; width: 600px" role="dialog">
  <div class="modal-dialog paraModalDialog" style="margin-top: 0px; margin-bottom: 0px;">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Submit Confirmation</h4>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to submit July 2016 timesheet?</p>
      </div>
      <div class="modal-footer">
      	<button type="button" class="btn btn-default" data-dismiss="modal">Yes</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
      </div>
    </div>

  </div>
</div>


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
        		<td><input/></td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Overtime</td>
        		<td><input/></td>
        	</tr>
        </table>
      </div>
      <div class="modal-footer">
      	<button type="button" class="btn btn-default" data-dismiss="modal">Save</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
      </div>
    </div>

  </div>
</div> 