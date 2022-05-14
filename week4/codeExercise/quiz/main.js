// ----- Chapter 1 -----
// alert('Welcome to Quiz Ninja!');

// ----- Chapter 2 Week2 -----
// const question = "What is Superman's real name?"
// const answer = prompt(question);
// alert(`You answered ${answer}`);

// ----- Chapter 3 Week2 -----

// const quiz = [
//     ["What is Superman's real name?","Clark Kent"],
//     ["What is Wonder Woman's real name?","Diana Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
// ];

// initialize score
// let score = 0 

// for(const [question,answer] of quiz){
//     const response = prompt(question);
//     if(response === answer){
//         alert('Correct!');
//         score++;
//     } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//     }
// }

// At the end of the game, report the player's score
// alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);

// ----- Chapter 4 Week2 -----
// const quiz = [
//     ["What is Superman's real name?","Clark Kent"],
//     ["What is Wonder Woman's real name?","Diana Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
// ];

// function start(quiz){
//     let score = 0;

//     main game loop
//     for(const [question,answer] of quiz){
//         const response = ask(question);
//         check(response,answer);
//     }
//     end of main game loop

//     gameOver();

//     function declarations
//     function ask(question){
//         return prompt(question);
//     }

//     function check(response,answer){
//         if(response === answer){
//         alert('Correct!');
//         score++;
//         } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//         }
//     }

//     function gameOver(){
//         alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
//     }
// }
// start(quiz);

// ----- Chapter 5 Week3 -----
// const quiz = [
//     { name: "Superman",realName: "Clark Kent" },
//     { name: "Wonder Woman",realName: "Diana Prince" },
//     { name: "Batman",realName: "Bruce Wayne" },
// ];

// const game = {
//     start(quiz){
//         this.questions = [...quiz];
//         this.score = 0;
//         main game loop
//         for(const question of this.questions){
//         this.question = question;
//         this.ask();
//         }
//         end of main game loop
//         this.gameOver();
//     },
//     ask(){
//         const question = `What is ${this.question.name}'s real name?`;
//         const response =  prompt(question);
//         this.check(response);
//     },
//     check(response){
//         const answer = this.question.realName;
//         if(response === answer){
//         alert('Correct!');
//         this.score++;
//         } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//         }
//     },
//     gameOver(){
//         alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
//     }
// }
// game.start(quiz);

// ----- Chapter 6 Week3 -----
// const quiz = [
//     { name: "Superman",realName: "Clark Kent" },
//     { name: "Wonderwoman",realName: "Dianna Prince" },
//     { name: "Batman",realName: "Bruce Wayne" },
//   ];

// View Object
// const view = {
// score: document.querySelector('#score strong'),
// question: document.getElementById('question'),
// result: document.getElementById('result'),
// info: document.getElementById('info'),
// render(target,content,attributes) {
// for(const key in attributes) {
// target.setAttribute(key, attributes[key]);
// }
// target.innerHTML = content;
// }
// };

// Game Object
// const game = {
// start(quiz){
// this.score = 0;
// this.questions = [...quiz];
// main game loop
// for(const question of this.questions){
// this.question = question;
// this.ask();
// }
// end of main game loop
// this.gameOver();
// },
// ask(){
// const question = `What is ${this.question.name}'s real name?`;
// view.render(view.question,question);
// const response =  prompt(question);
// this.check(response);
// },
// check(response){
// const answer = this.question.realName;
// if(response === answer){
// view.render(view.result,'Correct!',{'class':'correct'});
// alert('Correct!');
// this.score++;
// view.render(view.score,this.score);
// } else {
// view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
// alert(`Wrong! The correct answer was ${answer}`);
// }
// },
// gameOver(){
// view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
// }
// }

// game.start(quiz);

// ----- Chapter 7 Week3 -----
/*
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonderwoman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
  ];

// View Object
const view = {
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    },
start: document.getElementById('start'),
score: document.querySelector('#score strong'),
question: document.getElementById('question'),
result: document.getElementById('result'),
info: document.getElementById('info'),
render(target,content,attributes) {
for(const key in attributes) {
target.setAttribute(key, attributes[key]);
}
target.innerHTML = content;
}
};

// Game Object
const game = {
start(quiz){
this.score = 0;
this.questions = [...quiz];
// main game loop
for(const question of this.questions){
this.question = question;
this.ask();
}
// end of main game loop
this.gameOver();
},
ask(){
const question = `What is ${this.question.name}'s real name?`;
view.render(view.question,question);
const response =  prompt(question);
this.check(response);
},
check(response){
const answer = this.question.realName;
if(response === answer){
view.render(view.result,'Correct!',{'class':'correct'});
alert('Correct!');
this.score++;
view.render(view.score,this.score);
} else {
view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
alert(`Wrong! The correct answer was ${answer}`);
}
},
gameOver(){
view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
}
}
view.start.addEventListener('click', () => game.start(quiz), false);
game.start(quiz);
*/


// ----- Chapter 8 Week4 -----
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonderwoman",realName: "Dianna Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
  ];
// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    start: document.getElementById('start'),
    response: document.querySelector('#response'),
    render(target,content,attributes) {
    for(const key in attributes) {
        target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
},
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none';
    },
    resetForm(){
        this.response.answer.value = '';
        this.response.answer.focus();
    },
    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
        this.resetForm();
    },
    teardown(){
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    }
};

const game = {
    start(quiz){
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
    },
    ask(name){
        if(this.questions.length > 0) {
        this.question = this.questions.pop();
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        }
        else {
        this.gameOver();
        }
    },
    check(event){
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.realName;
        if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        this.score++;
        view.render(view.score,this.score);
        } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        view.resetForm();
        this.ask();
    },
    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
    }
}

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);