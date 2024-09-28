let message = document.getElementById('Message');
let fly = document.getElementById('fly');
let score_board =  document.getElementById('score');
let time_board = document.getElementById('time');
let score = 0;
let time = 0;
let secound =  0;
let min = 0;

let ground = document.getElementById('playground');
let insect_container = document.getElementById('insect_container');
let start = document.getElementById('start');
let container =  document.getElementById('container')
let inscet_button = document.getElementsByClassName('insect_btn');

inscet_button =  Array.from(inscet_button);
inscet_button.forEach(element => {
    element.addEventListener('click', ()=>{
        ground.style.display = "block";
        insect_container.style.display = "none";
    })
});

start.addEventListener('click', ()=>{
    insect_container.style.display = "flex";
    container.style.display = "none";
})



let insect_generation = (type)=>{

    let src;
    switch (type) {
        case "fly":
          src = "http://pngimg.com/uploads/fly/fly_PNG3946.png";
          break;
        case "mosquito":
          src = "http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png";
          break;
        case "Spider":
          src = "http://pngimg.com/uploads/spider/spider_PNG12.png";
          break;
        case "Roach":
          src = "http://pngimg.com/uploads/roach/roach_PNG12163.png";
          break;
        default:
          src = "";}
console.log(src);

    let box = document.createElement('div');
    let img =  document.createElement('img');
    img.setAttribute('src', src);
    box.setAttribute('class', 'game_insect');
    box.appendChild(img);
    ground.appendChild(box);


    let x_axis =  Math.random()* (ground.clientHeight - 50);
    let y_axis = Math.random()* (ground.clientWidth - 50);
    let transform = Math.random()*100;


    x_axis =  Number(x_axis.toFixed(3));
    y_axis = Number(y_axis.toFixed(3));

  
    box.style.transform  = `rotate(${transform}deg)`;
    box.style.top =  `${x_axis}px`;
    box.style.left = `${y_axis}px`;

    img.addEventListener('click', () => {
        box.style.display = "none"; // Hide the current insect
        score =  score + 1;
        score_board.innerText = `Score : ${score}`;
        console.log(score)
        // Generate 2 or 3 more insects randomly
        let randomCount = Math.floor(Math.random() * 2) + 2; // Either 2 or 3
    
        for (let i = 0; i < randomCount; i++) {
          insect_generation(type); // Generate new insects recursively
        }
      });
    
}



fly.addEventListener('click', insect_generation);

function timeupadation(){
   

    secound = secound + 1;

    if(secound >= 60){
        min = min + 1;
        secound = 0;
    }

    time_board.innerText = `${min} : ${secound}`
}


setInterval(timeupadation, 1000);
setTimeout(()=>{
    message.style.display = "block";
},30000)
