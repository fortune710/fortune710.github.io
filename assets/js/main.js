//To activate the navbar
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


//To open the nav menu
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show_menu')
        console.log('working')
    })
}

//To close the menu
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show_menu') 
    })
}

//To take away the menu when scetion is selected
const Link = document.querySelectorAll('.nav_link')

const removeMenu = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show_menu')
}
Link.forEach(n => n.addEventListener('click', removeMenu))
