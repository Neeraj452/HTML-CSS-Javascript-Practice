
function validation()
{


    var form1= document.querySelectorAll(".table1");
    document.write(form1);
    console.log(form1);
  /*  var uname=document.stud_form.Name.value;

    document.getElementById("demo").innerHTML=uname;


    var Email=document.stud_form.email.value;

    document.getElementById("demo1").innerHTML=Email;


    var url1=document.stud_form.url.value;

    document.getElementById("demo2").innerHTML=url1;

    var Image_link=document.stud_form.Image_link.value;

    document.getElementById("demo3").innerHTML=Image_link;

    var Gendar=document.stud_form.Gendar.value;

    document.getElementById("demo4").innerHTML=Gendar;
    return false;*/
}

var form1= document.querySelectorAll('.table1 tr').length;

console.log(form1);
var list=document.createElement('div');

for(let i=0; i<form1; i++)
{
    var listItem = document.createElement('li');
    list.appendChild(listItem);
    console.log(list);
}