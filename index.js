document.querySelector('body').addEventListener('mousemove',function(e){
    document.body.style.backgroundColor=`rgba(${e.offsetX},${e.offsetY},${e.offsetX+e.offsetY+e.offsetX})`;
    console.log('You mouse curosor is moving everywhere.');
})

// let change1=document.getElementById('btn1');
// let change2 =document.getElementById('btn2');

// function changes1(){

//     document.getElementById("root1").style.display="flex";
//     document.getElementById("root1").style.justifyContent="center";
//     let count=0;
//     for(let i=0;i<2;i++){

//         // MAIN CONTAINER WHICH CONTAIN 3 DIV ELEMENT
//         let mynewH1=document.createElement("div");
        
//         mynewH1.className="'main'+i";
//         for(let j=0;j<2;j++){

//             // TO CREATE THE BLOCK IN ROW AND COLOMN
//             var myNewH2=document.createElement("div");
//             myNewH2.className='div_boss';
//             document.getElementById("root1").appendChild(mynewH1);
//         myNewH2.style.width="100px";
//         myNewH2.style.height="100px";
//         myNewH2.style.border="5px solid red";
//         console.log(myNewH2);
//         myNewH2.style.flexDirection="column"
//         mynewH1.append(myNewH2);

//         // GENERATE RANDOM NUMBER AND PUT THEM
//         const randomIndex = getRndInteger(0,9);
//             let text=document.createTextNode(randomIndex);

//             myNewH2.append(text);

//       myNewH2.style.fontSize="30px";
//       myNewH2.style.alignItems="center";
//     }
    
//     console.log(myNewH2);
//     }

//     function getRndInteger(min,max){
//             return Math.floor(Math.random()*(max-min+1));
//         }
// }



// function changes2(){
//     document.getElementById("root2").style.display="flex";
//     document.getElementById("root2").style.justifyContent="center";
//     // const arr=new arr();
//     let count=0;
//     for(let i=0;i<3;i++){
//         let mynewH1=document.createElement("div");
        
//         mynewH1.className="'main'+i";
//         for(let j=0;j<3;j++){

//             // TO CREATE THE BLOCK IN ROW AND COLOMN
//             var myNewH2=document.createElement("div");
//             myNewH2.className='div_boss';
//             document.getElementById("root2").appendChild(mynewH1);
//         myNewH2.style.width="100px";
//         myNewH2.style.height="100px";
//         myNewH2.style.border="5px solid red";
//         console.log(myNewH2);
//         myNewH2.style.flexDirection="column"
//         mynewH1.append(myNewH2);

//         // GENERATE RANDOM NUMBER AND PUT THEM
//         const randomIndex = getRndInteger(0,9);
//             let text=document.createTextNode(randomIndex);

//             myNewH2.append(text);

//       myNewH2.style.fontSize="30px";
//       myNewH2.style.alignItems="center";
//     }
    
//     console.log(myNewH2);
//     }

    // function getRndInteger(min,max){
    //         return Math.floor(Math.random()*(max-min+1));
    //     }
// }


function ResetElement(){
    for(let i=1;i<=13;i++){
        document.getElementById('child'+i).style.backgroundColor='chocolate';
    }
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "none";
}


// FOR 2X2

// document.getElementById('child1').innerHTML=Rnd1();

function getRndInteger(min,max){
    return  Math.floor((Math.random() * 10) + 1);
}

let a=new Array(4);
let b=new Array(9);
// GENERATE RANDOM NO FOR 2X2 MATRIX

function Rnd1(){
    
    for(let i=1;i<=4;i++){
        const rand=getRndInteger(1,9);
        if(a.includes(rand)==false){
            a[i]=rand;
            console.log(a[i]);
        document.getElementById('child'+i).innerText=rand;  
        }else{
            i--;
        }
       
        
    }
    const btn=document.getElementsByClassName('box2');
//    IT IS USE OF HIDE THE NUMBER AFTER 1 SEC
    setTimeout(()=>{
     for(let i=0;i<4;i++){
         console.log(btn[i]);
         btn[i].innerHTML="";
     }
    },1000);

    // TO RESET THE VALUR OF SUM BECAUSE IT IS GLOBALLY INITALIZE
    sum1=0;
    sum2=0;
    sum3=0;
    sum4=0;

    
    setTimeout(()=>{
        for(let i=1;i<=4;i++){
            document.getElementById('child'+i).style.backgroundColor='chocolate';
        }
     })
}

// // GENERATE RANDOM NO FOR 3X3 MATRIX
function Rnd2(){
    
    for(let i=5;i<=13;i++){
        const rand=getRndInteger(1,9);
        if(b.includes(rand)==false){
            b[i]=rand;
            console.log(b[i]);
        document.getElementById('child'+i).innerText=rand; 
        }else{
            i--;
        }
         
    }
    const btn=document.getElementsByClassName('box3');
//    IT IS USE OF HIDE THE NUMBER AFTER 1 SEC
    setTimeout(()=>{
        for(let i=0;i<9;i++){
            console.log(btn[i]);
            btn[i].innerHTML="";
        }
       },1000)

        // TO RESET THE VALUR OF SUM BECAUSE IT IS GLOBALLY INITALIZE
    sum5=0;
     sum6=0;
     sum7=0;
     sum8=0;
     sum9=0;
     sum10=0;
     sum11=0;
     sum12=0;
     sum13=0;
     setTimeout(()=>{
        for(let i=5;i<=13;i++){
            document.getElementById('child'+i).style.backgroundColor='chocolate';
        }
     })
    
}

// TO INCREMENT THE NUMBER IN EVERY DIV
let sum1=0;
let sum2=0;
let sum3=0;
let sum4=0;
document.getElementById('child1').addEventListener('click',function(e){
    let count=0;
    count++;
    sum1=sum1+count;
   
    document.getElementById('child1').innerHTML=`<b>${sum1}</b>`
})
document.getElementById('child2').addEventListener('click',function(e){
    let count=0;
    count++;
    sum2=sum2+count;
    document.getElementById('child2').innerHTML=`<b>${sum2}</b>`
})
document.getElementById('child3').addEventListener('click',function(e){
    let count=0;
    count++;
    sum3=sum3+count;
    document.getElementById('child3').innerHTML=`<b>${sum3}</b>`
})
document.getElementById('child4').addEventListener('click',function(e){
    let count=0;
    count++;
    sum4=sum4+count;
    document.getElementById('child4').innerHTML=`<b>${sum4}</b>`
})





// TO MATCH THE ELEMENT OF THE 3X3 MATRIX
let sum5=0;
let sum6=0;
let sum7=0;
let sum8=0;
let sum9=0;
let sum10=0;
let sum11=0;
let sum12=0;
let sum13=0;
document.getElementById('child5').addEventListener('click',function(e){
    let count=0;
    count++;
    sum5=sum5+count;
    document.getElementById('child5').innerHTML=`<b>${sum5}</b>`
})
document.getElementById('child6').addEventListener('click',function(e){
    let count=0;
    count++;
    sum6=sum6+count;
    document.getElementById('child6').innerHTML=`<b>${sum6}</b>`
})
document.getElementById('child7').addEventListener('click',function(e){
    let count=0;
    count++;
    sum7=sum7+count;
    document.getElementById('child7').innerHTML=`<b>${sum7}</b>`
})
document.getElementById('child8').addEventListener('click',function(e){
    let count=0;
    count++;
    sum8=sum8+count;
    document.getElementById('child8').innerHTML=`<b>${sum8}</b>`
})
document.getElementById('child9').addEventListener('click',function(e){
    let count=0;
    count++;
    sum9=sum9+count;
    document.getElementById('child9').innerHTML=`<b>${sum9}</b>`
})
document.getElementById('child10').addEventListener('click',function(e){
    let count=0;
    count++;
    sum10=sum10+count;
    document.getElementById('child10').innerHTML=`<b>${sum10}</b>`
})
document.getElementById('child11').addEventListener('click',function(e){
    let count=0;
    count++;
    sum11=sum11+count;
    document.getElementById('child11').innerHTML=`<b>${sum11}</b>`
})
document.getElementById('child12').addEventListener('click',function(e){
    let count=0;
    count++;
    sum12=sum12+count;
    document.getElementById('child12').innerHTML=`<b>${sum12}</b>`
})
document.getElementById('child13').addEventListener('click',function(e){
    let count=0;
    count++;
    sum13=sum13+count;
    document.getElementById('child13').innerHTML=`<b>${sum13}</b>`
})






// TO CHECK INPUT NUMBER IS CORRECT OR NOT

// FOR 2X2

function Run_to_check1(){
    let col1_row1=sum1;
    let col1_row2=sum2;
    let col2_row1=sum3;
    let col2_row2=sum4;
    if(col1_row1==a[1]){
        document.getElementById('child1').style.backgroundColor='green';
    }else{
        document.getElementById('child1').style.backgroundColor='red';
    }

    if(col1_row2==a[2]){
        document.getElementById('child2').style.backgroundColor='green';
    }else{
        document.getElementById('child2').style.backgroundColor='red';
    }
    if(col2_row1==a[3]){
        document.getElementById('child3').style.backgroundColor='green';
    }else{
        document.getElementById('child3').style.backgroundColor='red';
    }
    if(col2_row2==a[4]){
        document.getElementById('child4').style.backgroundColor='green';
    }else{
        document.getElementById('child4').style.backgroundColor='red';
    } 
}

// FOR 3x3

function Run_to_check2(){
    let col1_row1=sum5;
    let col1_row2=sum6;
    let col1_row3=sum7;
    let col2_row1=sum8;
    let col2_row2=sum9;
    let col2_row3=sum10;
    let col3_row1=sum11;
    let col3_row2=sum12;
    let col3_row3=sum13;
    
    if(col1_row1==b[5]){
        document.getElementById('child5').style.backgroundColor='green';
    }else{
        document.getElementById('child5').style.backgroundColor='red';
    }

    if(col1_row2==b[6]){
        document.getElementById('child6').style.backgroundColor='green';
    }else{
        document.getElementById('child6').style.backgroundColor='red';
    }
    if(col1_row3==b[7]){
        document.getElementById('child7').style.backgroundColor='green';
    }else{
        document.getElementById('child7').style.backgroundColor='red';
    }
    if(col2_row1==b[8]){
        document.getElementById('child8').style.backgroundColor='green';
    }else{
        document.getElementById('child8').style.backgroundColor='red';
    }
    if(col2_row2==b[9]){
        document.getElementById('child9').style.backgroundColor='green';
    }else{
        document.getElementById('child9').style.backgroundColor='red';
    } 
    if(col2_row3==b[10]){
        document.getElementById('child10').style.backgroundColor='green';
    }else{
        document.getElementById('child10').style.backgroundColor='red';
    } 
    if(col3_row1==b[11]){
        document.getElementById('child11').style.backgroundColor='green';
    }else{
        document.getElementById('child11').style.backgroundColor='red';
    } 
    if(col3_row2==b[12]){
        document.getElementById('child12').style.backgroundColor='green';
    }else{
        document.getElementById('child12').style.backgroundColor='red';
    } 
    if(col3_row3==b[13]){
        document.getElementById('child13').style.backgroundColor='green';
    }else{
        document.getElementById('child13').style.backgroundColor='red';
    } 
}







