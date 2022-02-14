"use strict"


const menuButton = document.body.querySelector('.menu-button');
const menuPanel = document.body.querySelector('.nav-panel_right');


menuButton.onclick = () => {
    menuButton.classList.toggle('close');
    menuPanel.classList.toggle('actice-nav');
}