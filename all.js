
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
Playing()




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
function removeBackGroundColor(){}

function getDisplayValue(id){
    const DisplayValue=document.getElementById(id).innerText;
    return DisplayValue;
}

function Playing(){


let DisplayValue=getDisplayValue('Display');
DisplayValue=DisplayValue.toLowerCase();


document.addEventListener('keyup',(event)=>{
const key=event.key;

if(key===DisplayValue){
    continueGame();

}



})

}