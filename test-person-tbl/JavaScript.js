var rowId;
$(document).ready(function () {

    var data = [
  { "person_id": "1", "first_name": "Stan", "last_name": "Shaw", "state_code": "AA", "gender": "M", "dob": "01/01/1984" },
  { "person_id": "2", "first_name": "Hoang", "last_name": "Pitsch", "state_code": "CC", "gender": "M", "dob": "07/07/1982" },
  { "person_id": "3", "first_name": "Al", "last_name": "Uga", "state_code": "BB", "gender": "M", "dob": "01/01/1975" },
  { "person_id": "4", "first_name": "Joe", "last_name": "Print", "state_code": "AA", "gender": "F", "dob": "05/08/1975" },
  { "person_id": "5", "first_name": "Edward", "last_name": "Averson", "state_code": "FF", "gender": "F", "dob": "05/08/1975" },
  { "person_id": "6", "first_name": "Emmy", "last_name": "Ruckdaschel", "state_code": "DD", "gender": "M", "dob": "01/01/1990" },
  { "person_id": "7", "first_name": "Long", "last_name": "Adision", "state_code": "KK", "gender": "M", "dob": "01/01/1988" },
  { "person_id": "8", "first_name": "Connie", "last_name": "Chang", "state_code": "BB", "gender": "M", "dob": "01/01/1995" },
  { "person_id": "9", "first_name": "Alvin", "last_name": "Listerine", "state_code": "CC", "gender": "M", "dob": "01/01/1993" },
  { "person_id": "10", "first_name": "Ho", "last_name": "Page", "state_code": "XX", "gender": "M", "dob": "07/07/1982" },
  { "person_id": "11", "first_name": "Al", "last_name": "Uga", "state_code": "AA", "gender": "M", "dob": "01/01/1995" },
  { "person_id": "14", "first_name": "Joe", "last_name": "Print", "state_code": "ZZ", "gender": "F", "dob": "05/08/1975" },
  { "person_id": "15", "first_name": "Edward", "last_name": "Averson", "state_code": "LL", "gender": "F", "dob": "05/08/1978" },
  { "person_id": "16", "first_name": "Emmy", "last_name": "Ruckdaschel", "state_code": "AA", "gender": "M", "dob": "01/01/1991" },
  { "person_id": "17", "first_name": "Long", "last_name": "Short", "state_code": "WW", "gender": "M", "dob": "01/01/1994" },
  { "person_id": "18", "first_name": "Connie", "last_name": "Chang", "state_code": "BB", "gender": "M", "dob": "01/01/1995" },
  { "person_id": "12", "first_name": "Mike", "last_name": "Low", "state_code": "HH", "gender": "M", "dob": "01/01/1998" },
  { "person_id": "13", "first_name": "Don", "last_name": "Doe", "state_code": "CC", "gender": "M", "dob": "01/01/1996" }

    ];

    // Data Table section
    var table = $('.datatables').DataTable({
        // Column definitions
        columns: [
          {
              className: 'details-control',
              defaultContent: '',
              data: null,
              orderable: false
          },
          { data: 'person_id' },
          { data: 'first_name' },
          { data: 'last_name' },
          { data: 'state_code' },
          { data: 'gender' },
          { data: 'dob' }
        ],

        data: data,

        pagingType: 'full_numbers',
        columnDefs: [
                {
                    targets: 0,
                    render: function (data, type, row, meta) {
                        if (type === 'display') {

                        }
                        return data;
                    }
                },
                {
                    className: 'font-weight-bold', targets: [1]

                },
                {
                    className: 'text-prinary', targets: [4],

                }
        ],

        // Localization
        language: {
            emptyTable: 'No data available in table.',
            zeroRecords: 'No records to display.',
            thousands: ',',
            processing: 'Prosessing...',
            loadingRecords: 'Loading...',
            info: 'Showing _PAGE_ / _PAGES_',
            infoEmpty: 'Showing 0 / 0',
            infoFiltered: '(- filtered from _MAX_ records)',
            infoPostFix: '',
            lengthMenu: 'Show _MENU_',
            search: 'Search:',
            paginate: {
                first: 'First',
                last: 'Last',
                next: 'Next',
                previous: 'Prev'
            },
            aria: {
                sortAscending: ' - click/return to sort ascending',
                sortDescending: '  - click/return to sort descending'
            }
        }
    });
    $('#example tbody').on('click', 'tr', function () {
       // alert('Row index: ' + table.row($(this)).index());
    });
    $('.datatables tbody').on('click', 'td.details-control', function () {

        $('#editModal').modal('show');
        var tr = $(this).closest('tr'), row = table.row(tr);
       
        rowId = tr.index();
        
        var tds = $(this).closest('tr').find("td:nth-child(2)");
        $('#edit-id').val(tds.text());
        $('#edit-firstname').val($(this).closest('tr').find("td:nth-child(3)").text());
        $('#edit-lastname').val($(this).closest('tr').find("td:nth-child(4)").text());
        $('#edit-code').val($(this).closest('tr').find("td:nth-child(5)").text());
        $('#edit-gender').val($(this).closest('tr').find("td:nth-child(6)").text());

        $('#edit-dob').val($(this).closest('tr').find("td:nth-child(7)").text());
        tr.find('td').each(function () {
            var textval = $(this).text(); // this will be the text of each <td>
           
        });

    });
    // modal events    
    // edit submit button click
    $('[id^=edit-btn]').on('click', function (e) {
       
        var editFname = $("#edit-firstname").val();
        var editLname = $("#edit-lastname").val();
        var editDob = $("#edit-dob").val();
        var editGender = $("#edit-gender").val();
        var editCode = $("#edit-code").val();

        //
      
        table.rows().every(function (rowIdx, tableLoop, rowLoop) {
            if (rowIdx == rowId) {
               
                table.cell(rowIdx, 2).data(editFname).draw();
                table.cell(rowIdx, 3).data(editLname).draw();
                table.cell(rowIdx, 6).data(editDob).draw();
                table.cell(rowIdx, 5).data(editGender).draw();
                table.cell(rowIdx, 4).data(editCode).draw();
              
            }
            
        });
    });
    // new submit button click
    $('[id^=new-btn]').on('click', function (e) {
       
        var newFname = $("#new-firstname").val();
        var newLname = $("#new-lastname").val();
        var newDob = $("#new-dob").val();
        var newGender = $("#new-gender").val();
        var newCode = $("#new-code").val();
        table.rows().every(function (rowIdx, tableLoop, rowLoop) {
            rowId = rowIdx;
        });
        table.row.add({
            "person_id": rowId,
            "first_name": newFname,
            "last_name": newLname,
            "state_code": newCode,
            "gender": newGender,
            "dob": newDob
        }).draw();
    });

})
//

