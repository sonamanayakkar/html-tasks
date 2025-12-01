
const head = document.querySelector('header');

const football = document.querySelector('.football');


const default_count =130;
window.addEventListener(('scroll'),()=>{

    const scroll_count = window.pageYOffset;

    if (scroll_count>default_count) {

        head.classList.add('head');
      
    } 
    
    else {
          head.classList.remove('head');
          
    }
    //  football.style.transform=`translate(${scroll_count}%,${scroll_count*2}px)`;
    console.log(football.style.transform)
     console.log(scroll_count);
});