// document.querySelector('#triangle-btn').addEventListener('click', function(){
//    const x = getValue('triangle-input-01');

//    const y = getValue('triangle-input-02');

//    const output = (0.5 * x * y);
  
//    const setValue = document.getElementById('li-container');
//    const li = document.createElement('li');
//    li.innerText= output;
//    setValue.appendChild(li);
// })

function toClick(){
const fstInput = getValue('rectangle-input-01');
const lstInput = getValue('rectangle-input-02');

const area = (fstInput * lstInput);

setValue('rectangle-area', area, 'rectangle-input-01', 'rectangle-input-02');


}

//
function ellipseArea(){
   const majorRadius = getValue('ellipse-input-area-01');
   const minorRadius = getValue('ellipse-input-area-02');

   const ellipseArea = Math.PI * majorRadius * minorRadius ;

   setValue('ellipse-area', ellipseArea, 'ellipse-input-area-01', 'ellipse-input-area-02')
}