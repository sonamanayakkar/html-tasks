

// const button = document.querySelector('#button');
// const text =document.querySelector('#text');
// const chat = document.querySelector('#chatting');

// button.addEventListener(('click'),()=>{
//     const box = chat.value;
//     text.textContent=box;
// })


const send = document.querySelector('#button');
const input = document.querySelector('#chatting');
const section = document.querySelector('.section');
const assist = document.querySelector('#assistant');
const menu = document.querySelector('.fa-ellipsis-vertical');
const tools = document.querySelector('.tools');

menu.addEventListener(('click'),()=>{
    tools.classList.toggle('visible');
})


send.addEventListener(('click'), () => {


            /*  from user side */
    const user = input.value.toLowerCase().trim();
    if (user === "") return;
    const content = user;
    const create = document.createElement('div');
    create.classList.add('chatt');
    create.innerHTML = `
     <div class="reply even">
                    <div class="content ">
                        <p id="text">${content}</p>
                    </div>

                    <div class="time">
                        <h3>${getTime()}</h3>
                    </div>
                </div>
                <div class="avatar"><img src="icons/man.png"></div>
            </div>
        `;

    setTimeout(() => {
        section.appendChild(create);
        input.value = "";
        section.scrollTop = section.scrollHeight;
    },200);



                    /*from Bot side*/


    const response = content;

    if(response ==="") return;


    const library= function replay(response){
        if (response == "hi") {
           const greet = "hi sonu  ...welcome";
           return greet;
        } 
        else if(response == "how are you"){
            const greet = "I'am fine..what about you?";
           return greet;
        }
         else if(response == "what is your name"){
            const greet = "My Name is LUCIA ,I am created by Mr.Sonu at 27-11-2025 at 9:20PM";
           return greet;
        }
         else if(response == "what is your age"){
            const greet = "exactle i am created at 27-11-2025 at 9:20PM";
           return greet;
        }
         else if(response == "good morning"){
            const greet = "A very good morning sir, Have a nice day ..!!";
           return greet;
        }
         else if(response == "good night"){
            const greet = "A very good night sir, Have a nice day ..!!";
           return greet;
        }
         else if(response == "good afternoon"){
            const greet = "A very good afternoon sir, Have a nice day ..!!";
           return greet;
        }

         else if(response == "good afternoon"){
            const greet = "A very good afternoon sir, Have a nice day ..!!";
           return greet;
        }

         else if(response == "bye" || response == "ok bye" || response == "see you"  ){
            const greet = "Bye sonu see you soon!!!";
           return greet;
        }

        else{
            const greet = "Ask me something sir!";
           return greet;
        }
        
    }

    const final = library(response);

    const botmsg = document.createElement('div');
    botmsg.classList.add('chatt');
    botmsg.innerHTML=`
         <div class="avatar"><img src="icons/girl.png"></div>
                <div class="reply">
                    <div class="content">
                        <p id="assistant">${final}</p>
                    </div>

                    <div class="time">
                        <h3>${getTime()}</h3>
                    </div>
        </div>
    
    `

    setTimeout(()=>{
        section.appendChild(botmsg);
        input.value = "";
        section.scrollTop = section.scrollHeight;
    },2000);

})

function getTime() {
    let now = new Date();
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    return `${h}:${m}`;
}
