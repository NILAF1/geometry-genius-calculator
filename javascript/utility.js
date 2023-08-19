function getValue(x){
const firstValueX = document.getElementById(x);

const firstValueString = firstValueX.value;

const valueX = parseFloat(firstValueString);


return valueX;

}

//set result value
function   setValue(elementId, latestArea , emptyId1, emptyId2){
    const getValue = document.getElementById(elementId);
    getValue.innerText = latestArea;

    //for clear input field
    const inputField01 = document.getElementById(emptyId1);
    inputField01.value = '';
    const inputField02 = document.getElementById(emptyId2);
    inputField02.value = '';

   
}