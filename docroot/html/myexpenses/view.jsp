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
	       <h3 class="box-title">My expenses</h3>
	 
	 		
	       <div class="box-tools" style="left: 150px">
	       
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
	     <!-- /.box-header -->  
	     <div class="box-body table-responsive no-padding">
	       <table class="table table-hover">
	         <tr>	
	           <th>ID</th>
	           <th>Expense Date</th>
	           <th>Category</th>
	           <th>Remarks</th>
	           <th>Submission Date</th>
	           <th>Amount</th>
	           <th></th>
	         </tr>
	         
	         <tr>
	           <td>FK/2016/08/001</td>
	           <td>18 August 2016</td>
	           <td>Medical</td>
	           <td>Sembawang Clinic Outpatient</td>
	           <td>24 August 2016</td> 
	           <td>$26.00</td>
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

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#submitConfirmation"><i class="fa fa-send"></i> Submit</button>


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
<div id="submitConfirmation" class="modal fade paraModal" style="bottom: auto; width: 600px" role="dialog">
  <div class="modal-dialog paraModalDialog" style="margin-top: 0px; margin-bottom: 0px;">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Submit Confirmation</h4>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to submit August 2016 expense claim?</p>
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
        		<td colspan="2">FK/2016/08/001</td>
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