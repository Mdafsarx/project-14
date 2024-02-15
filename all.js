
function getElementId(id){
    const element=document.getElementById(id);
    return element;
}

function hideElementByID(id){

const element=getElementId(id);
element.classList.add('hidden');



};

const ShowElementById=(id)=>{
const element=getElementId(id);
element.classList.remove('hidden')


}



function continueGame(){

const alphabet=randomAlphabet();
SetValueById('Display',alphabet);
setBackgroundColor(alphabet);




}



function randomAlphabet(){

let alphabet='abcdefghijklmnopqrstuvwxyz';
alphabet=alphabet.split('')


    const random=Math.round(Math.random()*25);
const RandomAlp=alphabet[random];
return RandomAlp;


}

const SetValueById=(id,value)=>{

const element=getElementId(id);
element.innerText=value


}

function setBackgroundColor(id){

    const element=getElementId(id);
    element.style.background='orange'


}
function removeBackGroundColor(id){
    const element=getElementId(id);
    element.style.background='';
}

function getDisplayValue(id){
    const DisplayValue=document.getElementById(id).innerText;
    return DisplayValue;
}






document.addEventListener('keyup',(event)=>{

 let DisplayValue=getDisplayValue('Display');
DisplayValue=DisplayValue.toLowerCase();
const key=event.key;

if(key==='Escape'){
    hideElementByID('playground');
    ShowElementById('end');
    const score=getDisplayValue('score');
    SetValueById('LastScore',score)
}

if(key===DisplayValue){
    continueGame();
    removeBackGroundColor(DisplayValue);
    let score=getDisplayValue('score');
    score=parseInt(score)
    const UpdateScore=score+1;
    SetValueById('score',UpdateScore);
}

else{

   let life=getDisplayValue('life');
life=parseInt(life);
const UpdateLife=life-1;
if(UpdateLife===0){
    hideElementByID('playground');
    ShowElementById('end');
  const score=getDisplayValue('score');
  SetValueById('LastScore',score)

}
SetValueById('life',UpdateLife);
}
})



