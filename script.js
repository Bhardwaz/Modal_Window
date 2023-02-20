'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal')

// working with classes

const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
for(let i = 0; i < btnsShowModal.length ; i=i+1){
    btnsShowModal[i].addEventListener('click', openModal)
}
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
       closeModal()
    }
})

