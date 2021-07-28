
function validation()
{

    var uname=document.stud_form.Name.value;

    document.getElementById("demo").innerHTML=uname;


    var Email=document.stud_form.email.value;

    document.getElementById("demo1").innerHTML=Email;


    var url1=document.stud_form.url.value;

    document.getElementById("demo2").innerHTML=url1;

    var Image_link=document.stud_form.Image_link.value;
   // var img = document.createElement('img');
    const img = new Image(130, 150);
    img.src="image/janmay6.jpg";
    var src=document.getElementById("image1");
    src.appendChild(img);
   // document.getElementsByClassName('image')[0].src = Image_link;
  /*  document.getElementById("demo3").innerHTML=Image_link;*/
    // createlementimg store in avariable
    // setattribuet src=atribuet
    // documet.getElen.append()
    //

    var Gendar=document.stud_form.Gendar.value;

    document.getElementById("demo4").innerHTML=Gendar;
    return false;
}
var table = document.getElementById("table3");
var rowCount = table.rows.length;
console.log(rowCount);


