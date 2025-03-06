const course=document.querySelector(".course");


const courseContent=()=>{
    setTimeout(()=>{
        course.textContent="Front-end Developer";
    },0);

    setTimeout(()=>{
        course.textContent="Web Developer";
    },4000);

    setTimeout(()=>{
        course.textContent="Back-end Developer";
    },8000);
}

courseContent();
setInterval(courseContent,12000);


const successRate=document.querySelector(".successRate");
const yearsCount=document.querySelector(".yearsCount");
const projectsCount=document.querySelector(".projectsCount");
const hoursCount=document.querySelector(".hoursCount");

let success=0,years=0,projects=0,hours=0;

const Success=setInterval(()=>{
    success++;
    successRate.textContent=success;
    if(successRate.textContent>=100){
           clearInterval(Success);
           successRate.textContent=success+"% ";
    }
},20);

const Years=setInterval(()=>{
    years++;
    yearsCount.textContent=years;
    if(yearsCount.textContent>=1){
        clearInterval(Years);
        yearsCount.textContent=years+"+ ";
    }
},10); 

const Projects=setInterval(()=>{
    projects++;
    projectsCount.textContent=projects;
    if(projectsCount.textContent>=5){
        clearInterval(Projects);
        projectsCount.textContent=projects+"+ ";
    }
},50); 

const Hours=setInterval(()=>{
    hours++;
    hoursCount.textContent=hours;
    if(hoursCount.textContent>=500){
        clearInterval(Hours);
        hoursCount.textContent=hours+"+ ";
    }
},5); 



$(document).ready(function(){

    $(".menuBar").mouseenter(function(){
        $(".fadeRowThree").hide();
    });
    $(".information").mouseover(function(){
        $(".timeline").hide();
    });
    $(".information").mouseleave(function(){
        $(".timeline").fadeIn(1000);
        $(".timeline").show();   
    });

    $(".timeline").mouseenter(function(){
        $(".fadeRowOne").hide();
        $(".fadeRowTwo").hide();
    });
    $(".timeline").mouseleave(function(){
        $(".fadeRowOne").fadeIn(2000);
        $(".fadeRowOne").show();
        $(".fadeRowTwo").fadeIn(4000);
        $(".fadeRowTwo").show();
    });

    
    $(".load").click(function(){
        $(".load").hide();
        $(".fadeRowThree").show();
        
    });
   
    $(".close1").click(function(){
        $(".popup1").hide();
    });
    $(".close2").click(function(){
        $(".popup2").hide();
    });
    $(".close3").click(function(){
        $(".popup3").hide();
    });
    $(".close4").click(function(){
        $(".popup4").hide();
    });
    $(".close5").click(function(){
        $(".popup5").hide();
    });
    $(".close6").click(function(){
        $(".popup6").hide();
    });

});


function live(){
    const pop=document.querySelector(".popup1");
    pop.style.display="block";
}
function live2(){
    const pop=document.querySelector(".popup2");
    pop.style.display="block";
}
function live3(){
    const pop=document.querySelector(".popup3");
    pop.style.display="block";
}
function live4(){
    const pop=document.querySelector(".popup4");
    pop.style.display="block";
}
function live5(){
    const pop=document.querySelector(".popup5");
    pop.style.display="block";
}
function live6(){
    const pop=document.querySelector(".popup6");
    pop.style.display="block";
}
function send(event){
    event.preventDefault();
    let x=document.forms["userDetails"];
    let storedValues="";
    let flag=true;
    for(let i=0;i<x.length;i++){
        if(x.elements[i].tagName==="INPUT" || x.elements[i].tagName==="TEXTAREA"){
            if(x.elements[i].value.trim()===""){
                flag=false;
                break;
            }
            else{
                storedValues+=x.elements[i].value+"<br>";
            }
        }
    }
    if(flag){
        alert("Message Sent Successfully !");
    }
    else{
        alert("Please Fill Out All Required field !");
    }
   // document.getElementById("demo").innerHTML=storedValues;
}

function load(event) {
    event.preventDefault();
    alert("Sorry for the inconvenience!");
    alert("The user is currently working on another project. Future updates will include new projects.");
}