
const PlayNow=getElementId('PlayNow')

PlayNow.addEventListener('click',()=>{
hideElementByID('Home');
ShowElementById('playground');

continueGame();

})

const PlayAgain=()=>{

ShowElementById('playground')
SetValueById('life',5);
SetValueById('score',0);

}