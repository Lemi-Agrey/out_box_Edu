var logincontainer=document.querySelector('#logincontainer');
var registercontainer=document.querySelector('#registercontainer');
var registertab=document.querySelector('#register-tab');
var logintab=document.querySelector('#login-tab');
var loginlink=document.querySelector('.loginlink');
var registerlink=document.querySelector('.registerlink');

loginlink.addEventListener('click', ()=>{
    loginActive();
});
registerlink.addEventListener('click', ()=>{
    registerActive();
})
registertab.addEventListener('click', ()=>{
    registerActive()
}); 
logintab.addEventListener('click', ()=>{
    loginActive();
});

function loginActive(){
    logincontainer.style.display='block';
    registercontainer.style.display='none';
    logintab.classList.add('active');
    registertab.classList.remove('active');
}
function registerActive(){
    logincontainer.style.display='none';
    registercontainer.style.display='block';
    registertab.classList.add('active');
    logintab.classList.remove('active');
}