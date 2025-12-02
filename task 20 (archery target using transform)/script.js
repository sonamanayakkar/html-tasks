const button = document.querySelector('.button');
const reset = document.querySelector('.reset');
const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2');
const arrow3 = document.querySelector('.arrow3');
var count = 1;

button.addEventListener('click', () => {

    if (count == 1) {
        arrow1.classList.add('shoot1');
        console.log("arrow 1")
    }
    else if (count == 2) {
        arrow2.classList.add('shoot2');
        console.log("arrow 2")
    }

    else if (count == 3) {
        arrow3.classList.add('shoot3');
        console.log("arrow 2")
    }
    else if (count >= 4) {
        button.classList.add('blink');
        reset.classList.add('blink2');
    }
    // arrow1.classList.add('shoot2');
    count += 1;
    console.log(count)
})

reset.addEventListener('click', () => {
    count *= 0;
    console.log(count)
    arrow1.classList.remove('shoot1');
    arrow2.classList.remove('shoot2');
    arrow3.classList.remove('shoot3');
    button.classList.remove('blink');
     reset.classList.remove('blink2');
})



