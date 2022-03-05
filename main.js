"use strict"


const menuButton = document.body.querySelector('.menu-button');
const menuPanel = document.body.querySelector('.nav-panel_right');
const links = document.getElementById('nav-panel');


menuButton.onclick = () => {
    menuButton.classList.toggle('close');
    menuPanel.classList.toggle('actice-nav');
}

links.onclick = () => {
    menuButton.classList.remove('close');
    menuPanel.classList.remove('actice-nav');
}