let btn = document.querySelector(".button-share");
let iconBtnShare = btn.querySelector("img");
let dataProfile = document.querySelector(".profile__data");
let optionShare = document.querySelector(".option-share-hidden");
let profile = document.querySelector(".profile");

btn.addEventListener("click", (event) => {
    //width and height not scroll
    let contentWidth = document.documentElement.clientWidth;
    let contentHeight = document.documentElement.clientHeight;
    if(contentWidth <= 1000 && !dataProfile.classList.contains("profile-data_hidden") && optionShare.classList.contains("option-share-hidden")) { 
        dataProfile.classList.add("profile-data_hidden");
        profile.classList.add("profile_desct");
        optionShare.classList.remove("option-share-hidden");
        optionShare.classList.add("option-share-view");
        btn.classList.add("button-share_click-modifier");
        btn.classList.add("button-share_animation-click");
        iconBtnShare.src = "./images/icon-share-white.svg";
    }else{
        dataProfile.classList.remove("profile-data_hidden");
        optionShare.classList.remove("option-share-view");
        optionShare.classList.add("option-share-hidden");
        profile.classList.remove("profile_desct");
        btn.classList.remove("button-share_click-modifier");
        btn.classList.remove("button-share_animation-click");
        iconBtnShare.src = "./images/icon-share.svg";
    }
});