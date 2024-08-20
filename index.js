let menuTog = document.querySelector('.menu-toggle')
let nav = document.querySelector('.nav')
let navLeft = document.querySelector('.nav-left')
let navRight = document.querySelector('.nav-right')
let navLinks = Array.from(document.querySelectorAll('.nav-link'))
let contact = document.querySelector('.contact')
let logo = document.querySelector('.logo')

menuTog.addEventListener('click', () => {
    menuTog.classList.toggle('active')
    navRight.classList.toggle('active')
    navLeft.classList.toggle('active')
    logo.classList.toggle('active')
    nav.classList.toggle('active')
    // menuTog.classList.toggle('active')

    // remove active class to restart delayed effect
    contact.classList.remove('active')
    navRight.classList.remove('active') // navRight 은 보이지 않음

    if(menuTog.classList.contains('active')){
        setTimeout(() => { // navLeft 가 active 되고 100ms 뒤에 navRight 이 active 됨 (즉, nav-left, nav-rigth 에 애니메이션 줄때 디레이 적용)
            navRight.classList.add('active') 
        }, 100); 
        // nav-left 이 완전히 화면에 보이는데 500ms 가 걸리고, 이때 메뉴에 애니메이션 적용
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active') // 애니메이션 초기화
            setTimeout(() => {
                navLinks[i].classList.add('active') // 페이드인 
            }, i * 100);
        }
        // navRight, navLinks 가 완전히 화면에 보이는데 100 + 6 * 100 가 소요되므로 700ms 후에 contact 애니메이션 적용
        setTimeout(() => {
            contact.classList.add('active')
        }, 700);

    }
})