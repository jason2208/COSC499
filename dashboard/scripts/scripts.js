window.onload = function() {

    //get elements from html form
    var table = document.getElementById("table-results");
    var btnClear = document.getElementById("btn-clear");
    var btnEnable = document.getElementById("btn-enable");
    var btnDisable = document.getElementById("btn-disable");
    var btnRemove = document.getElementById("btn-remove");
    var selectVisibilityFilter = document.getElementById("select-visibility-filter");

    btnClear.addEventListener("click", clear, false);
    btnEnable.addEventListener("click", putCheckedIDsInEnableForm, false);
    btnDisable.addEventListener("click", putCheckedIDsInDisableForm, false);
    btnRemove.addEventListener("click", putCheckedIDsInRemoveForm, false);
    selectVisibilityFilter.addEventListener("change", filter, false);

    handleFooter(); //change footer depending on number of outputted rows


    function clear() {
        for (var i = 1, row; row = table.rows[i]; i++) {
            var checkbox = row.cells[0].childNodes[0];
            checkbox.checked = false; 
        }
    }

    function putCheckedIDsInEnableForm() {
        var hidden = document.getElementById("hiddenEnable");
        var checkedIDs = getCheckedIDs();
        var result = "";
        for (var i = 0; i < checkedIDs.length; i++) {
            result += checkedIDs[i];
            if (i != checkedIDs.length - 1) {
                result += ",";
            }
        }
        hidden.value = result;
    }

    function putCheckedIDsInDisableForm() {
        var hidden = document.getElementById("hiddenDisable");
        var checkedIDs = getCheckedIDs();
        var result = "";
        for (var i = 0; i < checkedIDs.length; i++) {
            result += checkedIDs[i];
            if (i != checkedIDs.length - 1) {
                result += ",";
            }
        }
        hidden.value = result;
    }

    function putCheckedIDsInRemoveForm() {
        var hidden = document.getElementById("hiddenRemove");
        var checkedIDs = getCheckedIDs();
        var result = "";
        for (var i = 0; i < checkedIDs.length; i++) {
            result += checkedIDs[i];
            if (i != checkedIDs.length - 1) {
                result += ",";
            }
        }
        if (result != "") {
            var txt;
            var r = confirm("Are you sure you want to remove the rows with the following IDs?\n" + result);
            if (r == true) {
                txt = "true";
                hidden.value = result;
            } else {
                txt = "false";
                hidden.value = "";
            }
        } else {
            alert("You must select rows before deletion");
        }
    }

    function getCheckedIDs() {
        var checked = [];
        for (var i = 1, row; row = table.rows[i]; i++) {
            var checkbox = row.cells[0].childNodes[0];
            if (checkbox.checked) {
                var id = row.cells[1].innerHTML;
                checked.push(id);
            }
        }
        return checked;
    }

    function filter() {
        var text = selectVisibilityFilter.options[selectVisibilityFilter.selectedIndex].text;
        if (text == "Show All") {
            for (var i = 1, row; row = table.rows[i]; i++) {
                row.style.display = "";
            }
        } else {
            for (var i = 1, row; row = table.rows[i]; i++) {
                var status = row.cells[6];
                if (status.innerHTML != text) {
                    row.style.display = "none";
                } else {
                    row.style.display = "";
                }
            }
        }
    }

    function handleFooter() {
        var footer = document.getElementById("footer");
        if (table.rows.length == 101) {
            footer.style.display = "";
        } else {
            footer.style.display = "none";
        }
    }
}