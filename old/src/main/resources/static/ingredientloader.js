$('input').on('click', function addElement() {
	var table = document.getElementById("ingredients");
	var row = table.insertRow(table.rows.length);

	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	cell1.innerHTML = "NEW CELL1";
	cell2.innerHTML = "NEW CELL2";
});