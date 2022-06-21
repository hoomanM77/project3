let $=document
let changeTypeTag=$.querySelector('.change_type')
let passwordTag=$.querySelector('.password')
let usernameTag=$.querySelector('.username')
let warningPasswordTag=$.querySelector('.warning-password')
let isPassword=true;
let warningUsernameTag=$.querySelector('.warning-username')
passwordTag.addEventListener('keydown',password_limitation)
usernameTag.addEventListener('keydown',username_limitation)
changeTypeTag.addEventListener('click',changetype)
function password_limitation() {
    // password limitation
    changeTypeTag.style.display='inline'
    if((passwordTag.value).length<=6){
        warningPasswordTag.style.display='inline-block'
        warningPasswordTag.style.color='red'
        warningPasswordTag.innerHTML='At least 8 characters!'
    }else{
        warningPasswordTag.style.color='green'
        warningPasswordTag.innerHTML='Correct Password Value!'
    }
}
function username_limitation() {
    // username limitation
    warningUsernameTag.style.display='inline'
    if((usernameTag.value).length<12){
        warningUsernameTag.style.display='inline-block'
        warningUsernameTag.style.color='red'
        warningUsernameTag.innerHTML='At least 12 characters!'
    }else{
        warningUsernameTag.style.color='green'
        warningUsernameTag.innerHTML='Correct Username Value!'
    }
}
function changetype() {
    if(isPassword){
        passwordTag.type='text'
        changeTypeTag.innerHTML='Hide'
        isPassword=false
    }else{
        passwordTag.type='password'
        changeTypeTag.innerHTML='Show'
        isPassword=true
    }
}