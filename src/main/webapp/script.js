//sidebar
const menuItems=document.querySelectorAll('.menu-item');
//messages
const messagesNotification =document.querySelector('#messages-notificatons');

const messages= document.querySelector('.messages');
const message=messages.querySelectorAll('.message');
const messageSearch =document.querySelector('#message-search');
//theme
const themeModel = document.querySelector('.customize-theme');
const theme =document.querySelector('#theme');
const fontSizes = document.querySelectorAll(".choose-size span");

var root =document.querySelector(':root');
const colorPalatte=document.querySelectorAll('.choose-color span');

const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');

///////////////////////////////////////////

//-----------------------------------video---------------------------------
///////////////////////////////////////
let videoList = document.querySelectorAll(".list");

videoList.forEach((vid) => {
  vid.onclick = () => {
    videoList.forEach((remove) => {
      remove.classList.remove("active");
    });
    vid.classList.add("active");
    let src = vid.querySelector(".list-video").src;
    let title = vid.querySelector(".list-title").innerHTML;
    document.querySelector(".main-video").src = src;
    document.querySelector(".head .main-vid-title").innerHTML = title;
  };
});

//-----------------------------------sideBar---------------------------------
//--------------------------------------------------------------------

//remove avtive menu items
const changeActiveItem = () =>
{
    menuItems.forEach(item =>{item.classList.remove('active')});
}
var active=false;
menuItems.forEach(item =>{item.addEventListener('click',()=>{ changeActiveItem() ;item.classList.add('active');
if (item.id == 'notifications' && active ==false){
    document.querySelector(".notification-popup").style.display = "block";
    document.querySelector("#notifications .notifications-count").style.display = "none";
    active=true;
}else{
    document.querySelector(".notification-popup").style.display = "none";
    active=false;
   
}
})});

//messages -----------------------------------
//search Chat
const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat=>{
            let name =chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display ='flex';

        }else{
           chat.style.display ='none';
        }
    })
}
//message Search
messageSearch.addEventListener('keyup',searchMessage);


//hightlight messages carc when messages menu item clivck

messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow ='0 0 1rem var(--primary-color)';
    messagesNotification.querySelector('.notifications-count').style.display ='none';

    setTimeout(() => {
         messages.style.boxShadow='none';
    }, 2000);

})

const openthemeModel = () =>{
    themeModel.style.display='grid';
}
const closethemeModel =(e)=>{
    if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display='none';
    }
}
//color pallete
theme.addEventListener('click',openthemeModel);
themeModel.addEventListener('click',closethemeModel);
//fonts

//
const removeSizeSelector =()=>{
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}

//
    let fontSize = localStorage.getItem("fontSize");
        document.querySelector("html").style.fontSize =
          localStorage.getItem("fontSize");

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {

    removeSizeSelector();
    size.classList.toggle("active");

    if (size.classList.contains('font-size-1')) {
      localStorage.setItem("fontSize", "10px");

      root.style.setProperty("--stekey-topleft", "5.4rem");
      root.style.setProperty("--stikey-toprightt", "5.4rem");

    } else if (size.classList.contains('font-size-2')) {
      localStorage.setItem("fontSize", "13px");

      root.style.setProperty("--stekey-topleft", "5.4rem");
      root.style.setProperty("--stikey-toprightt", "-7rem");

    } else if (size.classList.contains('font-size-3')) {
            localStorage.setItem("fontSize", "15px");

      root.style.setProperty("--stekey-topleft", "-2rem");
      root.style.setProperty("--stikey-toprightt", "-17rem");

    } else if (size.classList.contains('font-size-4')) {
            localStorage.setItem("fontSize", "16px");

      root.style.setProperty("--stekey-topleft","-5rem");
      root.style.setProperty("--stikey-toprightt","-25rem");

    } else if (size.classList.contains('font-size-5')) {
      localStorage.setItem("fontSize","18px");
      root.style.setProperty("--stekey-topleft","-12rem");
      root.style.setProperty("--stikey-toprightt","-35rem");
    }
    //change font of the root
    document.querySelector("html").style.fontSize = localStorage.getItem("fontSize");
  });
});
const changeActiveColorClass=() =>{
    colorPalatte.forEach(colorPicker =>{
        colorPicker.classList.remove('active');
    })
}


//change color
let primaryHue = localStorage.getItem("primaryHue");
 root.style.setProperty("--primary-color-h", primaryHue);


colorPalatte.forEach(color =>{
    color.addEventListener('click',()=>{
        changeActiveColorClass();
        if (color.classList.contains('color-1')) {
          primaryHue=252;
          localStorage.setItem("primaryHue", primaryHue);
        }else if (color.classList.contains('color-2')) {
          primaryHue=52;   
          localStorage.setItem("primaryHue", primaryHue);

        }else if (color.classList.contains('color-3')) {
          primaryHue=352;   
          localStorage.setItem("primaryHue", primaryHue);
        }else if (color.classList.contains('color-4')) {
          primaryHue=152;  
          localStorage.setItem("primaryHue", primaryHue);
        }else if (color.classList.contains('color-5')) {
          primaryHue=202; 
          localStorage.setItem("primaryHue", primaryHue);
  
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-h',primaryHue);
    })
})

let lightColorLightness = localStorage.getItem("lightColorLightness"); 
let whiteColorLightness = localStorage.getItem("whiteColorLightness");
let darkColorLightness = localStorage.getItem("darkColorLightness");




const changeBg =() =>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

changeBg();
Bg1.addEventListener('click',()=>{
    darkColorLightness = "17%";
    whiteColorLightness = "100%";
    lightColorLightness = "95%";

    localStorage.setItem("lightColorLightness", lightColorLightness);
    localStorage.setItem("whiteColorLightness", whiteColorLightness);
    localStorage.setItem("darkColorLightness", darkColorLightness);


    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
   changeBg();
});

Bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    localStorage.setItem("lightColorLightness", lightColorLightness);
    localStorage.setItem("whiteColorLightness", whiteColorLightness);
    localStorage.setItem("darkColorLightness", darkColorLightness);

    Bg1.classList.remove('active');
    Bg2.classList.add('active');
    Bg3.classList.remove('active');
    changeBg();
});

Bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    localStorage.setItem("lightColorLightness", lightColorLightness);
    localStorage.setItem("whiteColorLightness", whiteColorLightness);
    localStorage.setItem("darkColorLightness", darkColorLightness);

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    Bg3.classList.add('active');
    changeBg();
});





/////////////////////////////////////////////////////////////////
  const loginText = document.querySelector(".title-text .login");
  const loginForm = document.querySelector("form.login");
  const loginBtn = document.querySelector("label.login");
  const signupBtn = document.querySelector("label.signup");
  const signupLink = document.querySelector("form .signup-link a");
  const loginmodel =document.getElementById("loginform");
  signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  };
  loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  };
  signupLink.onclick = () => {
    signupBtn.click();
    return false;
  };

function openForm() {
  loginmodel.style.display = "grid";
}


loginmodel.addEventListener("click", (e) => {
  if (e.target.classList.contains("customize-theme")) {
    loginmodel.style.display = "none";
  }
});
///////////////////////////////////////////
const profilemodel = document.getElementById("profileform");
function openFormprofile() {
  profilemodel.style.display = "grid";
}
var messageBox = document.querySelector(".js-message");
var btn = document.querySelector(".js-message-btn");
var card = document.querySelector(".js-profile-card");
var closeBtn = document.querySelectorAll(".message-close");

profilemodel.addEventListener("click", (e) => {
  if (e.target.classList.contains("customize-theme")) {
    profilemodel.style.display = "none";
  }
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  card.classList.add("active");
});

closeBtn.forEach(function (element, index) {
  console.log(element);
  element.addEventListener("click", function (e) {
    e.preventDefault();
    card.classList.remove("active");
  });
});

//////////////////////////////////////////
const container = document.querySelector(".container"),
  privacy = container.querySelector(".post .privacy"),
  arrowBack = container.querySelector(".audience .arrow-back");

privacy.addEventListener("click", () => {
  container.classList.add("active");
});

arrowBack.addEventListener("click", () => {
  container.classList.remove("active");
});

