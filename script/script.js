let select=document.querySelectorAll('.option');
let fromCurrency=document.getElementById('userEntryCourrency');
let toCurrency=document.getElementById('outputCourrency');
let button=document.getElementById('button');
let alertMessage=document.getElementById('alertMessages');
fetch('https://api.frankfurter.app/currencies')
.then(result=>result.json())
.then(res=>display(res))
function display(res){
   let arr=Object.entries(res);
   for(let i=0;i<arr.length;i++){
      for(let j=1;j<2;j++){    
      let k=arr[i][0]+` (${arr[i][j]})`
      let option=`<option value="${arr[i][0]}">${k}</option>`
      select[0].innerHTML+=option;
      select[1].innerHTML+=option;
      
   }
}
}
button.addEventListener('click',()=>{
 let fromSelection=select[0].value;
 let toSelection=select[1].value;
 let converValue=fromCurrency.value
 if(fromSelection==toSelection){
   alertMessages.innerHTML="SAME SELECTION"
   toCurrency.value=""
 }
 else{
    finalresponse(fromSelection,toSelection,converValue)
    alertMessages.innerHTML=""
 }
})
function finalresponse(fromSelection,toSelection,converValue){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${converValue}&from=${fromSelection}&to=${toSelection}`)
  .then(resp => resp.json())
  .then((data) => {
    let output=Object.entries(data.rates)
    toCurrency.value=output[0][1]
  });
}