class Registration{
    constructor(username, email, password, conpassword){
        this.username=username;
        this.email=email;
        this.password=password;
        this.conpassword=conpassword;
    }
}
class UI{
    static displayUsers(){

    }
    static addUserToList(user){
        const list=document.querySelector('#user-list');
        const row=document.createElement('tr');
        row.innerHTML=`
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.conpassword}</td>
        <td><a href="#" class='btn-danger'>X</td>

        `;
        list.appendChild(row);
    }
}
//Even
document.addEventListener('DOMContentLoaded', UI.displayUsers)


// const form=document.getElementById('form');
// const username=document.getElementById('username');
// const email=document.getElementById('email');
// const password=document.getElementById('password');
// const conpassword=document.getElementById('conpassword');

document.querySelector('#form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const username=document.querySelector('#username').value;
const email=document.querySelector('#email').value;
const password=document.querySelector('#password').value;
const conpassword=document.querySelector('#conpassword').value;
    checkValue();
    const use=new Registration(username, email, password, conpassword);
    UI.addUserToList(use);
});
function checkValue(){
    const userValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const conpassValue=conpassword.value.trim();
    if(userValue===""){
        setErrorFor(username, 'username can not be blank');
    } else{
        setSuccessFor(username);
    }
    if(emailValue===""){
        setErrorFor(email, 'email can not be blank');
    } else {
        setSuccessFor(email);
    }
    if(passwordValue===""){
        setErrorFor(password, 'password can not be blank');
    } else{
        setSuccessFor(password);
    }
    if(conpassValue===""){
        setErrorFor(conpassword, 'confirmed password can not be blank');
    } else if(passwordValue!==conpassValue){
        setErrorFor(conpassword, 'password does not match');
    }
    else {
        setSuccessFor(conpassword);
    }


}
function setErrorFor(input, message){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    //add error message inside small
    small.innerText=message;
    //add error class
    formControl.className='form-control error';

}
function setSuccessFor(input){
    const formControl=input.parentElement;
    // const small=formControl.querySelector('small');
    // small.innerText=message;
    formControl.className="form-control success";
}