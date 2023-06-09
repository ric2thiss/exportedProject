// First Name
const inputForName = document.getElementById('input-for-name');
inputForName.style.width = '260px';
const inputBorder_fName = document.querySelector('.submitform-frame13');

// Last Name
const inputForLastName = document.getElementById('input-for-lastName');
inputForLastName.style.width = '260px';
const inputBorder_lName = document.querySelector('.submitform-frame131');
// Age
const inputForAge = document.getElementById('input-for-age');
inputForAge.style.width = '260px';
const inputBorder_Age = document.querySelector('.submitform-frame132');
// Links
const inputForLinks = document.getElementById('input-for-links');
inputForLinks.style.width = '260px';
const inputBorder_Links = document.querySelector('.submitform-frame133');
// About Me
const inputForAboutMe = document.getElementById('input-for-aboutMe');
const inputBorder_aboutMe = document.querySelector('.submitform-frame134');



// Focus for First Name
inputForName.addEventListener('focus', function(){
    inputForName.style.outline = 'none';
    inputBorder_fName.style.borderColor = 'rgb(15,129,199)';
});

// Focus for Last Name
inputForLastName.addEventListener('focus',function(){
    inputForLastName.style.outline = 'none';
    inputBorder_lName.style.borderColor = 'rgb(15,129,199)';
})

// Focus for Age
inputForAge.addEventListener('focus',function(){
    inputForAge.style.outline = 'none';
    inputBorder_Age.style.borderColor = 'rgb(15,129,199)';
})

// Focus for Links
inputForLinks.addEventListener('focus', function(){
    inputForLinks.style.outline = 'none';
    inputBorder_Links.style.borderColor = 'rgb(15,129,199)';
})

// Focus for About Me 
inputForAboutMe.addEventListener('focus', function(){
    inputForAboutMe.style.outline = 'none';
    inputForAboutMe.style.height = '150px';
    inputForAboutMe.style.overflow = 'hidden';
    inputForAboutMe.style. resize= 'none';
    inputBorder_aboutMe.style.borderColor = 'rgb(15,129,199)';
})

// ------------------------------


// FocusOut for First Name
inputForName.addEventListener('focusout', function(){
    inputBorder_fName.style.borderColor = 'rgba(154, 170, 184, 1)';
})

// FocusOut for Last Name
inputBorder_lName.addEventListener('focusout', function(){
    inputBorder_lName.style.borderColor = 'rgba(154, 170, 184, 1)';
})

// FocusOut for Age
inputForAge.addEventListener('focusout',function(){
    inputBorder_Age.style.borderColor = 'rgba(154, 170, 184, 1)';
})

// FocusOut for Links
inputForLinks.addEventListener('focusout',function(){
    inputBorder_Links.style.borderColor = 'rgba(154, 170, 184, 1)';
})

// FocusOut for About me
inputForAboutMe.addEventListener('focusout', function(){
    inputBorder_aboutMe.style.borderColor = 'rgba(154, 170, 184, 1)';
})

const checkbox = document.getElementById('checkBox');
checkbox.style.zoom= '1.9';


function submit(){
    const name = inputForName.value;
    const lastName = inputForLastName.value;
    const Age = inputForAge.value
    const Links = inputForLinks.value
    const aboutMe = inputForAboutMe.value
    if (checkbox.checked) {
        alert(`Saved Data You are ${name} ${lastName}. You are ${Age}. Link : ${Links} \n About: ${aboutMe}`);
    } else if(name === '' || lastName === '' || Age === 0 || Age === '' || aboutMe === ''){
        alert('add details')
    }else {
        alert("Checkbox is not checked");
    }
}