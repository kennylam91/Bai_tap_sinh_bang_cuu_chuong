let row = "";
let table = "";
let table_Initial='<table border="1" cellpadding="10px" cellspacing="0px">';
for (i = 2; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
        row += "<td width='80px' align='center'>" + i + " x " + j + " = " + i * j + "</td>";
    }
    table += "<tr>" + row + "</tr>";
    row = "";
}
console.log(table);
document.write( table_Initial +table +'</table>');