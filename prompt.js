console.log('prompt connected');
// alert('whats up man!')
const showAlert = () =>{

const num = Math.random()*10;
console.log(num);
if(num < 5){
    alert('whats up man!');
}
}

const askSomething = () =>{
    const decision = confirm('Are you coming today?');
    console.log(decision);
    if(decision === true){
        alert('please sent $400');
    }
    else{
        console.log('okk have a nice day');
    }
}

const getUserInfo = () =>{
    const name = prompt('Tell us your name.');
    console.log(name);
    if(!!name){
        console.log('Welcome here', name);
    }
}