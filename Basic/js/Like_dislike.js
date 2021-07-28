var temp1=parseInt( localStorage.getItem("thumb"));
document.getElementById("thumbs").innerHTML = temp1;

function onClick() 
{
    var temp=0;
     var data=document.getElementById("thumbs").innerHTML;
     if(data>0){
         temp=parseInt( localStorage.getItem("thumb"));
     }
     else{
     temp=0;
     }
    temp += 1;
    console.log(temp);
    localStorage.setItem("thumb",temp);
    document.getElementById("thumbs").innerHTML = temp;
};



var temp2=parseInt( localStorage.getItem("down"));
document.getElementById("down").innerHTML = temp2;
function ondown() 
{
    var temp=0;
    var data=document.getElementById("down").innerHTML;
    if(data>0){
        temp=parseInt( localStorage.getItem("down"));
    }
    else{
    temp=0;
    }
    temp += 1;
    console.log(temp);
    localStorage.setItem("down",temp);
    document.getElementById("down").innerHTML = temp;
};




var temp2=parseInt( localStorage.getItem("thumb1"));
if(temp2==NaN)
{
    localStorage.setItem("thumb1",0);
    temp2=0

}
document.getElementById("thumbs1").innerHTML = temp2;

function onClick1() 
{
    var temp=0;
     var data=document.getElementById("thumbs1").innerHTML;
     if(data>0){
         temp=parseInt( localStorage.getItem("thumb1"));
     }
     else{
     temp=0;
     }
    temp += 1;
    console.log(temp);
    localStorage.setItem("thumb1",temp);
    document.getElementById("thumbs1").innerHTML = temp;
};





var temp2=parseInt( localStorage.getItem("down1"));
if(temp2==NaN)
{
    localStorage.setItem("down1",0);
    temp2=0

}
document.getElementById("down1").innerHTML = temp2;
function ondown1() 
{
    var temp=0;
    var data=document.getElementById("down1").innerHTML;
    if(data>0){
        temp=parseInt( localStorage.getItem("down1"));
    }
    else{
    temp=0;
    }
    temp += 1;
    console.log(temp);
    localStorage.setItem("down1",temp);
    document.getElementById("down1").innerHTML = temp;
};








var temp2=parseInt( localStorage.getItem("thumb2"));
if(temp2==NaN)
{
    localStorage.setItem("thumb2",0);
    temp2=0

}
document.getElementById("thumbs2").innerHTML = temp2;

function onClick2() 
{
    var temp=0;
     var data=document.getElementById("thumbs2").innerHTML;
     if(data>0){
         temp=parseInt( localStorage.getItem("thumb2"));
     }
     else{
     temp=0;
     }
    temp += 1;
    console.log(temp);
    localStorage.setItem("thumb2",temp);
    document.getElementById("thumbs2").innerHTML = temp;
};







var temp2=parseInt( localStorage.getItem("down2"));
if(temp2==NaN)
{
    localStorage.setItem("down2",0);
    temp2=0

}
document.getElementById("down2").innerHTML = temp2;
function ondown2() 
{
    var temp=0;
    var data=document.getElementById("down2").innerHTML;
    if(data>0){
        temp=parseInt( localStorage.getItem("down2"));
    }
    else{
    temp=0;
    }
    temp += 1;
    console.log(temp);
    localStorage.setItem("down2",temp);
    document.getElementById("down2").innerHTML = temp;
};





var temp2=parseInt( localStorage.getItem("thumb3"));
if(temp2==NaN)
{
    localStorage.setItem("thumb3",0);
    temp2=0

}
document.getElementById("thumbs3").innerHTML = temp2;

function onClick3() 
{
    var temp=0;
     var data=document.getElementById("thumbs3").innerHTML;
     if(data>0){
         temp=parseInt( localStorage.getItem("thumb3"));
     }
     else{
     temp=0;
     }
    temp += 1;
    console.log(temp);
    localStorage.setItem("thumb3",temp);
    document.getElementById("thumbs3").innerHTML = temp;
};



var temp2=parseInt( localStorage.getItem("down3"));
if(temp2==NaN)
{
    localStorage.setItem("down3",0);
    temp2=0

}
document.getElementById("down3").innerHTML = temp2;
function ondown3() 
{
    var temp=0;
    var data=document.getElementById("down3").innerHTML;
    if(data>0){
        temp=parseInt( localStorage.getItem("down3"));
    }
    else{
    temp=0;
    }
    temp += 1;
    console.log(temp);
    localStorage.setItem("down3",temp);
    document.getElementById("down3").innerHTML = temp;
};








var temp2=parseInt( localStorage.getItem("thumb4"));
if(temp2==NaN)
{
    localStorage.setItem("thumb4",0);
    temp2=0

}
document.getElementById("thumbs4").innerHTML = temp2;

function onClick4() 
{
    var temp=0;
     var data=document.getElementById("thumbs4").innerHTML;
     if(data>0){
         temp=parseInt( localStorage.getItem("thumb4"));
     }
     else{
     temp=0;
     }
    temp += 1;
    console.log(temp);
    localStorage.setItem("thumb4",temp);
    document.getElementById("thumbs4").innerHTML = temp;
};






var temp2=parseInt( localStorage.getItem("down4"));
if(temp2==NaN)
{
    localStorage.setItem("down4",0);
    temp2=0

}
document.getElementById("down4").innerHTML = temp2;
function ondown4() 
{
    var temp=0;
    var data=document.getElementById("down4").innerHTML;
    if(data>0){
        temp=parseInt( localStorage.getItem("down4"));
    }
    else{
    temp=0;
    }
    temp += 1;
    console.log(temp);
    localStorage.setItem("down4",temp);
    document.getElementById("down4").innerHTML = temp;
};
