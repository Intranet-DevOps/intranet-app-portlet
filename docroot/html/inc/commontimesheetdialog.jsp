<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<!-- Edit Timesheet Modal -->
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
        		<td width="125px"><input id="regular" readonly="readonly" style="height: 30px; width: 100px"/>&nbsp;&nbsp;</td>
        		<td width="100px">Vacation</td>
        		<td><input id="vacation" readonly="readonly" style="height: 30px; width: 100px"/></td>
        	</tr>
        	<tr>
        		<td colspan="4">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Overtime</td>
        		<td><input id="overtime" readonly="readonly" style="height: 30px; width: 100px" />&nbsp;&nbsp;</td>
        		<td>Holiday</td>
        		<td><input id="holiday" readonly="readonly" style="height: 30px; width: 100px"/></td>
        	</tr>
        	<tr>
        		<td colspan="4">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Sick</td>
        		<td><input id="sick" readonly="readonly" style="height: 30px; width: 100px" />&nbsp;&nbsp;</td>
        		<td>Unpaid Leave</td>
        		<td><input id="unpaid" readonly="readonly" style="height: 30px; width: 100px"/></td>
        	</tr>
        	<tr>
        		<td colspan="2">&nbsp;</td>
        	</tr>
        	<tr>
        		<td>Other</td>
        		<td><input id="other" readonly="readonly" style="height: 30px; width: 100px" />&nbsp;&nbsp;</td>
        		<td>&nbsp;</td>
        		<td>&nbsp;</td>
        	</tr>
        	<tr>
        		<td colspan="4">&nbsp;</td>
        	</tr>
        	<tr>
        		<td colspan="4">Remarks</td>
        	</tr>
        	<tr>
        		<td colspan="4"><textarea id="remarks" style="width: 450px" rows="2" cols="300"></textarea></td>
        	</tr>
        	<tr>
        		<td colspan="4">&nbsp;</td>
        	</tr>
        	<tr>
        		<td colspan="4">Details</td>
        	</tr>
        	<tr>
        		<td colspan="4" id="timeDetails"></td>
        	</tr>
        	
        </table>
      </div>
      <div class="modal-footer">
      	<button type="button" class="btn btn-default" onclick="TIMESHEETCONTROLLER.saveButton()" style="display: none" id="saveButton">Update Remarks</button>
      	<button type="button" class="btn btn-default" onclick="TIMESHEETCONTROLLER.deleteButton()" style="display: none"  id="deleteButton">Reset Timesheet</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div> 
 
<!-- Add Time Modal -->
<div id="addTimeDialog" class="modal fade paraModal" style="bottom: auto; width: 600px" role="dialog">
  <div class="modal-dialog paraModalDialog" style="margin-top: 0px; margin-bottom: 0px;">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Clock Time</h4>
      </div>
      <div class="modal-body">
      	<b>Please clock your time below<br/><br/></b>
        <table>
        	<tr>
        		<td width="100px" colspan="1">Please choose type of activity</td>
        		<td width="375px" colspan="3">
        			<select id="timeType">
        				<option value="Regular" selected="selected">Regular</option>
        				<option value="Overtime">Overtime</option>
        				<option value="Other">Other</option>
        				<option value="Vacation">Vacation</option>
        				<option value="Holiday">Holiday</option>
        				<option value="Sick">Sick</option>
        				<option value="Unpaid Leave">Unpaid Leave</option> 
        			</select>
        		</td> 
        	</tr>
        	<tr>
        		<td colspan="4">&nbsp;</td>
        	</tr>
        	<tr>
        		<td width="100px" colspan="1">Full-day or time-based?</td>
        		<td width="375px" colspan="3">
        			<select id="fulldayOrTimeBased" onchange="TIMESHEETCONTROLLER.fulldayOrTimebasedChanged()">
        				<option value="fullday" selected="selected">Full-day</option>
        				<option value="timebased">Time-based</option> 
        			</select>
        		</td> 
        	</tr>
        	<tr id="timeSpaceSection" style="display: none;">
        		<td colspan="4">&nbsp;</td>
        	</tr>
        	<tr id="timeSection" style="display: none;">
        		<td>Start Time (hh:mm)</td>
        		<td><input id="startTime" style="height: 30px; width: 100px" />&nbsp;&nbsp;</td>
        		<td>Finish Time (hh:mm)</td>
        		<td><input id="finishTime" style="height: 30px; width: 100px"/></td>
        	</tr>
        	<tr>
        		<td colspan="4">&nbsp;</td>
        	</tr>
        	<tr>
        		<td colspan="4">Remarks</td>  
        	</tr>
        	<tr>
        		<td colspan="4"><textarea id="timeRemarks" style="width: 450px" rows="2" cols="300"></textarea></td>
        	</tr>
        </table>
      </div>
      <div class="modal-footer">
      	<button type="button" class="btn btn-default" onclick="TIMESHEETCONTROLLER.timeSaveButton()" id="timeSaveButton">Save</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div> 