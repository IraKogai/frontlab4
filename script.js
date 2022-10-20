function changeColorById(){
    document.getElementById("ex1").style.background = 'blue';
    document.getElementById("ex1").style.color = 'green';
}
function changeColorByQS(){
    document.querySelector(".ex2").style.background = 'yellow';
    document.querySelector(".ex2").style.color = 'orange'
} 

function add(){
    document.getElementById("img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlN1bhx7EAXKJ1-U2xW9crWnBDGcQRBPyWODhrU4UB2b3UcBlmRabUM7Yqv0ShMrNSonA&usqp=CAU" 
    document.getElementById("img").style.display = "" 
}

function increase(){
    document.getElementById("img").width = '600';
}

function reduce(){
    document.getElementById("img").width = '100';
}

function delete1(){
    document.getElementById("img").style.display ="none";
}