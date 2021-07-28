//var budget2=localStorage.getItem("New_Budget")
//var budget=document.getElementById("Budget").textContent=budget2;
//var budget5=document.getElementById("Balance").textContent=budget2;
//localStorage.setItem("Balance",budget5);
function myFunction()
{

    var budget1=document.getElementById("New_Budget").value;
    console.log(budget1);
   var budget3 = 0.2 * budget1;
        budget1=budget1-budget3;
    console.log(budget1);
    localStorage.setItem("Budget",budget1);
    var budget2=localStorage.getItem("Budget")
    var budget=document.getElementById("Budget").textContent=budget2;
    localStorage.setItem("Saving",budget3);
    document.getElementById("Saving").innerHTML=budget3;



}
function addRow() {
    var Budget3=document.getElementById("Budget_Description").value;
    localStorage.setItem("Budget3",Budget3);
    var Categoty=document.getElementById("Categoty").value;
    localStorage.setItem("Categoty",Categoty);
    var Amount=document.getElementById("Amount").value;
    localStorage.setItem("Amount",Amount);
    var Date=document.getElementById("Date").value;
    localStorage.setItem("Date",Date);
    var tabs=document.getElementById("tabs");
    var table = document.getElementsByClassName('table2')[0];
    var rowCount = table.rows.length;
    var newrow = table.insertRow(1);

    var col1  = newrow.insertCell(0);
    var col2 = newrow.insertCell(1);
    var col3 = newrow.insertCell(2);
    var col4 = newrow.insertCell(3);
    var col5 = newrow.insertCell(4);
    var element1 = document.createElement("input");
    element1.type = "button";
    var btnName = "button"+(rowCount + 1);
    element1.name = btnName;
    element1.setAttribute('value','Delete'); // or element1.value = "button";
    element1.onclick=function(){removeRow(btnName);}
    col5.appendChild(element1);

    col1.innerHTML= Budget3;
    col2.innerHTML=Categoty;
    col3.innerHTML=Amount;
    col4.innerHTML=Date;
    console.log(col5);

    var budget2=localStorage.getItem("Amount");

    document.getElementById("expense1").textContent=budget2;
    localStorage.setItem("expense1",budget2);
    var expense=localStorage.getItem("expense1");
    var Budget5=localStorage.getItem("Budget");

    console.log(Budget5);
    console.log(budget2);
    //var New_Budget1=localStorage.getItem("Balance");

    var minus= parseInt(Budget5)-parseInt(expense);
    console.log(minus);
    localStorage.setItem("Balance",minus);
    var budget3=localStorage.getItem("Balance");
    var budget=document.getElementById("Balance").textContent=minus;

}


function removeRow( btnName )
{
    try
    {
        var table = document.getElementById('table1');
        var rowCount = table.rows.length;
        for(var i=0; i<rowCount; i++)
        {
            var row = table.rows[i];
            var rowObj = row.cells[4].childNodes[0];

            if( rowObj.name == btnName )
            {
                table.deleteRow(i);
                rowCount--;
            }
        }
    }
    catch( e )
    {
        alert(e);
    }
}
