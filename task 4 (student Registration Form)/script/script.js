
const container = document.querySelector('.container')
const form = document.querySelector('.form');

const check = document.getElementById('check');
const submit = document.querySelector('button');

const inputs = document.querySelectorAll('input');


check.addEventListener('click',() =>{
    container.classList.toggle('active');
})

submit.addEventListener('click',() =>{

   let empty = false;

   inputs.forEach(input => {

        if (input.value.trim()!=="") {
            empty=true;
        } else {
            
        }
   });

   if (empty) {
        // console.log("no data")
    form.classList.add('active');

   } else {
    console.log(" data Available")
   }
})




