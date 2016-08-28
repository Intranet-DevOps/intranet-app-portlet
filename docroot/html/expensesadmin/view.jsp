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

.datepicker{z-index:1151 !important;}

</style>

<div class="row">
	 <div class="col-xs-12">  
	   <div class="box">
	     <div class="box-header">
	       <h3 class="box-title">Expenses Management</h3>
	 
	 		
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
	           		<option >July</option>
	           		<option selected="selected">August</option>
	           		<option>September</option>
	           		<option>October</option>
	           		<option>November</option>
	           		<option>December</option>
	           </select>
	           
	           
	           <button type="button" class="btn btn-default" data-toggle="modal" data-target="#addDialog"><i class="fa fa-plus-circle"></i></button>
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
	           <th>ID</th>
	           <th>Expense Date</th>
	           <th>Category</th>
	           <th>Remarks</th>
	           <th>Submission Date</th>
	           <th>Amount</th>
	           <th></th>
	         </tr>
	         
	         <tr>
	           <td><input type="checkbox"></td>
	           <td>AHK/2016/08/001</td>
	           <td>18 August 2016</td>
	           <td>Medical</td>
	           <td>Sembawang Clinic Outpatient</td>
	           <td>24 August 2016</td> 
	           <td>$26.00</td>
	           <td>
	            <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         <tr>
	           <td><input type="checkbox"></td>
	           <td>AHK/2016/08/002</td>
	           <td>19 August 2016</td>
	           <td>Transport</td>
	           <td>Comfort Taxi - Night duty</td>
	           <td>25 August 2016</td> 
	           <td>$36.00</td>
	           <td>
	            <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	          <tr>
	           <td><input type="checkbox"></td>
	           <td>AHK/2016/08/003</td>
	           <td>19 August 2016</td>
	           <td>Transport</td>
	           <td>Comfort Taxi - Day duty</td>
	           <td>25 August 2016</td> 
	           <td>$16.00</td>
	           <td>
	            <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         
	          <tr>
	           <td><input type="checkbox"></td>
	           <td>AHK/2016/08/004</td>
	           <td>19 August 2016</td>
	           <td>Phone</td>
	           <td>Singtel August Bill</td>
	           <td>25 August 2016</td> 
	           <td>$104.00</td>
	           <td>
	            <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         
	          <tr>
	           <td><input type="checkbox"></td>
	           <td>AHK/2016/08/005</td>  
	           <td>22 August 2016</td>
	           <td>Medical</td>
	           <td>Eye Clinic</td>
	           <td>23 August 2016</td> 
	           <td>$236.00</td>
	           <td>
	            <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         
	          <tr>
	           <td><input type="checkbox"></td>
	           <td>AHK/2016/08/006</td>
	           <td>15 August 2016</td>
	           <td>Transport</td>
	           <td>Mercedes Taxi - Customer Meeting</td>
	           <td>25 August 2016</td> 
	           <td>$32.42</td>
	           <td>
	            <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-up"></i></button>
                <button type="button" class="btn btn-default btn-sm"><i class="fa fa-thumbs-o-down"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#deleteConfirmation"><i class="fa fa-trash"></i></button>
	           	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#editDialog"><i class="fa fa-edit"></i></button>
	           </td>
	         </tr>
	         
	         
	          <tr>
	           <td><input type="checkbox"></td>
	           <td>AHK/2016/08/007</td>
	           <td>16 August 2016</td>
	           <td>Transport</td>
	           <td>Comfort Taxi - Office Early Meeting</td>
	           <td>25 August 2016</td> 
	           <td>$15.67</td>
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


<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#approveConfirmation"><i class="fa fa-send"></i> Approve</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#returnConfirmation"><i class="fa fa-send"></i> Return</button>


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
        <p>Are you sure you want to remove this expense claim entry?</p>
      </div>
      <div class="modal-footer">
      	<button type="button" class="btn btn-default" data-dismiss="modal">Yes</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
      </div>
    </div>

  </div>
</div>

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
        <p>Are you sure you want to approve July 2016 expenses?</p>
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
        <p>Are you sure you want to return July 2016 expenses?</p>
      </div>
      <div class="modal-footer">
      	<button type="button" class="btn btn-default" data-dismiss="modal">Yes</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
      </div>
    </div>

  </div>
</div>


<!-- Edit Dialog -->
<div id="editDialog" class="modal fade paraModal" style="bottom: auto; width: 600px" role="dialog">
  <div class="modal-dialog paraModalDialog" style="margin-top: 0px; margin-bottom: 0px;">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Edit Expense Claim</h4>
      </div>
      <div class="modal-body">
      	<b>Please provide your expense claim details below<br/><br/></b>
        <table>
        	<tr>
        		<td colspan="2">AHK/2016/08/001</td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td width="100px">Expense Date</td>
        		<td>
        		<div class="input-group date">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" class="form-control pull-right" style="margin-bottom: 0px; height: 30px;" id="datepicker" value="18 August 2018">
                </div>
                
        		
        		</td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Category</td>
        		<td>
        			<select class="form-control select2" style="width: 100%;">
        				<option selected="selected">Medical</option>
        				<option>Transport</option>
        				<option>Phone</option>
        				<option>Other</option>
        			</select>
        		</td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Remarks</td>
        		<td><textarea>Sembawang Clinic Outpatient</textarea></td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Amount</td>
        		<td><input style="height: 30px;" value="26"/></td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr> 
        	<tr>
        		<td>Attachment </td>
        		<td><input type="file" style="height: 30px;"/></td>
        	</tr>
        	<tr>
        		<td colspan="2">
        			 (please zip if you have multiple files)
        		</td>
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



<!-- Edit Dialog -->
<div id="addDialog" class="modal fade paraModal" style="bottom: auto; width: 600px" role="dialog">
  <div class="modal-dialog paraModalDialog" style="margin-top: 0px; margin-bottom: 0px;">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">New Expense Claim</h4>
      </div>
      <div class="modal-body">
      	<b>Please provide your expense claim details below<br/><br/></b>
        <table>
        	<tr>
        		<td width="100px">Expense Date</td>
        		<td>
        		<div class="input-group date">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" class="form-control pull-right" style="margin-bottom: 0px; height: 30px;" id="datepicker">
                </div>
                
        		
        		</td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Category</td>
        		<td>
        			<select class="form-control select2" style="width: 100%;">
        				<option>Medical</option>
        				<option>Transport</option>
        				<option>Phone</option>
        				<option>Other</option>
        			</select>
        		</td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Remarks</td>
        		<td><textarea></textarea></td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Amount</td>
        		<td><input style="height: 30px;"/></td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr> 
        	<tr>
        		<td>Attachment </td>
        		<td><input type="file" style="height: 30px;"/></td>
        	</tr>
        	<tr>
        		<td colspan="2">
        			 (please zip if you have multiple files)
        		</td>
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
    
    $('#datepicker').datepicker({
	      autoclose: true
	   });
  });
  
  
</script>