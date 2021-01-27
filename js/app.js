const dropDownBtn = document.querySelectorAll('[data-dropDown]');
const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.getElementById("body");
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');
const catalog = document.getElementById("catalog");
const catalogBtn = document.getElementById("catalogBtn");
const search = document.getElementById("search");
const searchDropDown = document.querySelector(".search__dropdown");
const burgerBtn = document.getElementById('burger');
const burgerMenu = document.getElementById('burgerMenu');
let burgerOpen = false;
let catalogOpen = false;



dropDownBtn.forEach(item => {
    item.addEventListener("click", event => {
        let $this = event.currentTarget;
        let dropDownId = $this.getAttribute('data-dropDown');
        let dropDown = document.getElementById(dropDownId);
        let modalContent = dropDown.querySelectorAll('.modal__content');


        dropDown.classList.add('show');
    })
});


modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');

        closeModal(currentModal);
    });
});



function closeModal(modal) {
    modal.classList.remove('show');
    body.classList.remove('no-scroll');
}


modalBtn.forEach(item => {
    item.addEventListener("click", event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);


        modal.classList.add('show');
        body.classList.add('no-scroll');
    })
});


catalogBtn.addEventListener("click", () => {
    if (!catalogOpen) {
        catalog.classList.add('show');
        catalogOpen = true;
    } else {
        catalog.classList.remove('show');
        catalogOpen = false;
    }
});

burgerBtn.addEventListener("click", () =>{
    if (!burgerOpen) {
        burgerMenu.classList.add('open');
        burgerOpen = true;
    } else {
        burgerMenu.classList.remove('open');
        burgerOpen = false;
    }
});

