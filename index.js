alert("Welcome to Prince' portal")


const menu = document.querySelector(".menu");
const showUl = document.querySelector(".custom-ul");
const dis = document.querySelector(".none");


// const hideContent = document.querySelector('.hide')

menu.addEventListener('click',  ()=>{
showUl.classList.toggle('show');



});



document.querySelectorAll(".none").forEach(n => n.
    addEventListener('click', () =>{
        menu.classList.remove('show');
        showUl.classList.remove('show')
    })
    )



