const name = document.getElementById('name');
const form = document.getElementById('form');
const email = document.getElementById('email');
const number = document.getElementById('number');
const memo = document.getElementById('memo');

form.addEventListener('submit', (e)=>{
    let letters = /^[a-zA-Z]+$/;
    let emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;




    if(name.value==='' || name.value==null ){
      e.preventDefault();
       alert("Name value is empty"); 
    }
   else if(!name.value.match(letters)){
        e.preventDefault();
        alert('name must in alphabert');
    }
    else if(number.value==="" || number.value==null){
        e.preventDefault();
        alert("Phone number must not be left empty");
    }
    else if(number.value.match(letters)){
        e.preventDefault();
        alert("Enter valid Phone number");

    }
    else if(email.value==="" || email.value==null){
        e.preventDefault();
        alert("Email is empty");
    }
    else if(!email.value.match(emailRegex)){
        e.preventDefault();
        alert("enter correct email");

    }
    else if(memo.value==="" || memo.value == null){
        e.preventDefault();
        alert("Inquiry message cannot not be left empty");
    }

})



