<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
 <title>Person Search</title>
<link rel="stylesheet" href="css/bootstrap.min.css"/>
<link rel="stylesheet" type="text/css" href="css/jquery.dataTables.css"/>
<link rel="Stylesheet" href="StyleSheet.css" />
<script src="JQuery/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="JQuery/jquery.dataTables.min.js"></script>
<script src="JQuery/bootstrap-3.3.7.min.js"></script>
<script type="text/javascript" src="JavaScript.js"></script>

</head>

<body>
<form id="form1" runat="server">
<div class="container-fluid tablewrap">
    <div class="row rowdatatable ">
        <table id="example" class="display nowrap datatables">
        <thead class="bg bg-primary">
            <tr>
                <th></th>
                <th>Id</th>   
                <th>First Name</th>   
                <th>Last Name</th>                                          
                <th>State Code</th>
                <th>Gender</th>
                <th>Date of Birth</th>
              
            </tr>
        </thead>
         
        </table>
    </div>
</div>
 
<div class="container-fluid">
 
<!-- Button trigger modal -->
<div class="row">
    <div class="col-md-12 pull-left" style="padding-left:0px;">
         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#newModal">
         Add New Person
        </button>
    </div>
   
</div>
<!-- Modal -->
 
<div class="modal fade" id="newModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
 
    <div class="modal-dialog" role="document">
 
        <div class="modal-content">
 
            <div class="modal-header bg bg-info">
 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
 
                <h4 class="modal-title" id="myModalLabel">New Person</h4>
 
            </div>
 
            <div class="modal-body">
               
                <div class="form-group">
                   <label for="new-firstname" class="col-sm-4 controllabel">First Name</label>
                    <input type="text" class="form-control" id="new-firstname"/>
                </div>
                <div class="form-group">
                    <label for="new-lastname" class="col-sm-4 controllabel">Last Name</label>
                    <input type="text" class="form-control" id="new-lastname"/>
                </div>
                <div class="form-group">
                    <label for="new-dob" class="col-sm-4 controllabel">Date of Birth</label>
                    <input type="text" class="form-control" id="new-dob"/>
                </div>
                <div class="form-group">
                    <label for="new-gender" class="col-sm-4 controllabel">Gender</label>
                    <input type="text" class="form-control" id="new-gender"/>
                </div>
                <div class="form-group">
                    <label for="new-code" class="col-sm-4 controllabel">State Code</label>
                    <input type="text" class="form-control" id="new-code"/>
                </div>
                
            </div>
 
            <div class="modal-footer">
 
                <button type="button" class="btn btn btn-primary" data-dismiss="modal">OK</button>
 
                <button type="button" id="new-btn" class="btn btn btn-success" data-dismiss="modal">Save</button>
 
                <button type="button" class="btn btn-orange" data-dismiss="modal">Cancel</button>
 
            </div>
 
        </div>
 
    </div>
 
   </div>
</div>
<div class="container">
 
<!-- Modal -->
 
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
 
    <div class="modal-dialog" role="document">
 
        <div class="modal-content">
 
            <div class="modal-header bg bg-info">
 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
 
                <h4 class="modal-title" id="H1">Edit Person</h4>
 
            </div>
 
            <div class="modal-body">
                  <div class='form-group'>
                   <label for='edit-id' class='col-sm-4 controllabel'>Person Id</label>
                    <input type='text' class='form-control' id='edit-id' readonly/>
                  </div>
                  <div class='form-group'>
                   <label for='edit-firstname' class='col-sm-4 controllabel'>First Name</label>
                    <input type='text' class='form-control' id='edit-firstname'/>
                  </div>
                  <div class='form-group'>
                    <label for='edit-lastname' class='col-sm-4 controllabel'>Last Name</label>
                    <input type='text' class='form-control' id='edit-lastname'/>
                  </div>
                  <div class='form-group'>
                    <label for='edit-dob' class='col-sm-4 controllabel'>Date of Birth</label>
                    <input type='text' class='form-control' id='edit-dob'/>
                  </div>
                   <div class='form-group'>
                    <label for='edit-gender' class='col-sm-4 controllabel'>Gender</label>
                    <input type='text' class='form-control' id='edit-gender'/>
                  </div>
                  <div class='form-group'>
                    <label for='edit-code' class='col-sm-4 controllabel'>State Code</label>
                    <input type='text' class='form-control' id='edit-code'/>
                  </div>
                      

            </div>
 
            <div class="modal-footer">
 
                <button type="button" class="btn btn btn-primary" data-dismiss="modal">OK</button>
 
                <button type="button" id="edit-btn" class="btn btn btn-success" data-dismiss="modal">Save</button>
 
                <button type="button" class="btn btn-orange" data-dismiss="modal">Cancel</button>
 
            </div>
 
        </div>
 
      </div>
   </div>
</div>

</form>
</body>
</html>
