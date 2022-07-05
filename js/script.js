let btn = document.querySelector(".button-share");
let iconBtnShare = btn.querySelector("img");
let dataProfile = document.querySelector(".profile__data");
let optionShare = document.querySelector(".option-share-hidden");
let profile = document.querySelector(".profile");
let coordsBtnShare = btn.getBoundingClientRect();

function positionTooltipShare(positionX, positionY) {
    console.log("positionX: " + positionX + " positionY: " + positionY);
    let y = positionY - optionShare.offsetHeight - 25;
    let x = optionShare.offsetWidth / 2;
    console.log("x: " + x + "/y: " + y);
    console.log(btn.clientWidth / 2);
    //TODO: centralizar o tooltip em relação ao button
    optionShare.style.left = positionX - x  + "px";
    optionShare.style.top = y + "px";
}

btn.addEventListener("click", (event) => {
    //width and height not scroll
    let contentWidth = document.documentElement.clientWidth;
    //mobile first e breakpoint 375px
    if(contentWidth < 1000) { 
        if(!dataProfile.classList.contains("profile-data_hidden") && optionShare.classList.contains("option-share-hidden")) {
            dataProfile.classList.add("profile-data_hidden");
            profile.classList.add("profile_desct");
            optionShare.classList.remove("option-share-hidden");
            optionShare.classList.add("option-share-view");
            btn.classList.add("button-share_click-modifier");
            iconBtnShare.src = "./images/icon-share-white.svg";    
        }else{
            dataProfile.classList.remove("profile-data_hidden");
            optionShare.classList.remove("option-share-view");
            optionShare.classList.add("option-share-hidden");
            profile.classList.remove("profile_desct");
            btn.classList.remove("button-share_click-modifier");
            iconBtnShare.src = "./images/icon-share.svg";
        } 
    //breakpoint 1000px ou superior
    }else if(contentWidth >= 1000){
        if(optionShare.classList.contains("option-share-hidden")) {
            optionShare.classList.remove("option-share-hidden");
            optionShare.classList.add("option-share-view");
            //TODO: encontrar uma forma correta de como posiconar o tooltip em relação ao btn, a cada resize da janela permanecer no mesmo lugar
            positionTooltipShare(elemAninhadoBtn, event.pageY);
            btn.classList.add("button-share_click-modifier");
            iconBtnShare.src = "./images/icon-share-white.svg";
        }else{
            optionShare.classList.remove("option-share-view");
            optionShare.classList.add("option-share-hidden");
            btn.classList.remove("button-share_click-modifier");
            iconBtnShare.src = "./images/icon-share.svg";
        }
    }

    window.addEventListener("resize", (event) => {
        dataProfile.classList.remove("profile-data_hidden");
        optionShare.classList.remove("option-share-view");
        optionShare.classList.add("option-share-hidden");
        btn.classList.remove("button-share_click-modifier");
        iconBtnShare.src = "./images/icon-share.svg";
        if(contentWidth < 1000) {
            profile.classList.remove("profile_desct");
        }
    });

});

