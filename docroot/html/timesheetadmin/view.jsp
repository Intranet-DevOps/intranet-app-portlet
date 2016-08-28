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
	       <h3 class="box-title">Timesheet Management</h3>
	 
	 		 
	       <div class="box-tools" style="left: 250px">
	       	  Staff <select style="width: 200px" class="form-control select2"> 
	           		<option selected="selected">Andrew H. Keyes</option>
	           		<option>Kim F. Kelley</option>
	           		<option>Tammy I. Jackson</option>
	           		
	           </select>
	           
	       	  Year <select style="width: 75px" class="form-control select2"> 
	           		<option>2015</option>
	           		<option selected="selected">2016</option>
	           </select>
	           Month <select style="width: 120px" class="form-control select2"> 
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
	       </div>
	     </div>
	     <div class="mailbox-controls">
                <!-- Check all button -->
                <button type="button" class="btn btn-default btn-sm checkbox-toggle"><i class="fa fa-square-o"></i>
                </button>
                <div class="btn-group">
                  <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                  <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button> 
                </div>
                <div class="pull-right">
                  1-7/5
                  <div class="btn-group">
                    <button type="button" class="btn btn-default btn-sm"><i class="fa fa-chevron-left"></i></button>
                    <button type="button" class="btn btn-default btn-sm"><i class="fa fa-chevron-right"></i></button>
                  </div>
                  <!-- /.btn-group -->
                </div>
                <!-- /.pull-right -->
              </div>
	     <!-- /.box-header -->    
	     <div class="box-body table-responsive no-padding mailbox-messages">
	       <table class="table table-hover table-striped">
	         <tr>	
	           <td></td>
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
	           <td><input type="checkbox"></td>
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
	           	<button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                  <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button> 
                  <button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td><input type="checkbox"></td>
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
	           	<button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                  <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button> 
                  <button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td><input type="checkbox"></td>
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
	           	<button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                  <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button> 
                  <button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td><input type="checkbox"></td>
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
	           	<button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                  <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button> 
                  <button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td><input type="checkbox"></td>
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
	           	<button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                  <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button> 
                  <button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td><input type="checkbox"></td>
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
	           	<button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                  <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button> 
                  <button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	        
	         <tr>
	           <td><input type="checkbox"></td>
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
	           	<button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                  <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button> 
                  <button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td><input type="checkbox"></td>
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
	           	<button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                  <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button> 
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

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#approveConfirmation"><i class="fa fa-send"></i> Approve</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#returnConfirmation"><i class="fa fa-send"></i> Return</button>

<!-- Modal -->
<div id="approveConfirmation" class="modal fade paraModal" style="bottom: auto; width: 600px" role="dialog">
  <div class="modal-dialog paraModalDialog" style="margin-top: 0px; margin-bottom: 0px;">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Approve Confirmation</h4>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to approve July 2016 timesheet?</p>
      </div>
      <div class="modal-footer">
      	<button type="button" class="btn btn-default" data-dismiss="modal">Yes</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
      </div>
    </div>

  </div>  
</div>


<!-- Modal -->
<div id="returnConfirmation" class="modal fade paraModal" style="bottom: auto; width: 600px" role="dialog">
  <div class="modal-dialog paraModalDialog" style="margin-top: 0px; margin-bottom: 0px;">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Return Confirmation</h4>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to return July 2016 timesheet?</p>
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
        		<td><input style="height: 30px;"/></td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Overtime</td>
        		<td><input style="height: 30px;" /></td>
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


<script>  
  $(function () {
    //Initialize Select2 Elements
    $(".select2").select2();

    //Date picker
    $('#datepicker').datepicker({
      autoclose: true
    });
    
  //Enable iCheck plugin for checkboxes
    //iCheck for checkbox and radio inputs
    $('.mailbox-messages input[type="checkbox"]').iCheck({
      checkboxClass: 'icheckbox_flat-blue',
      radioClass: 'iradio_flat-blue'
    });
  
    //Enable check and uncheck all functionality
    $(".checkbox-toggle").click(function () {
      var clicks = $(this).data('clicks');
      if (clicks) {
        //Uncheck all checkboxes
        $(".mailbox-messages input[type='checkbox']").iCheck("uncheck");
        $(".fa", this).removeClass("fa-check-square-o").addClass('fa-square-o');
      } else {
        //Check all checkboxes
        $(".mailbox-messages input[type='checkbox']").iCheck("check");
        $(".fa", this).removeClass("fa-square-o").addClass('fa-check-square-o');
      }
      $(this).data("clicks", !clicks);
    });
  });
</script>