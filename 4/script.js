let btn_qst1 = document.querySelector('.btn_img--1')
let btn_qst2 = document.querySelector('.btn_img--2')
let btn_qst3 = document.querySelector('.btn_img--3')
let btn_qst4 = document.querySelector('.btn_img--4')

btn_qst1.addEventListener('click', function(){
    let p1 = document.querySelector('.none_p--1')
    
    if (p1.style.display == 'block'){
        p1.setAttribute('style', 'display:none')
    }else{
        p1.setAttribute('style', 'display:block')
    }

})
btn_qst2.addEventListener('click', function(){
    let p1 = document.querySelector('.none_p--2')
    
    if (p1.style.display == 'block'){
        p1.setAttribute('style', 'display:none')
    }else{
        p1.setAttribute('style', 'display:block')
    }

})
btn_qst3.addEventListener('click', function(){
    let p1 = document.querySelector('.none_p--3')
    
    if (p1.style.display == 'block'){
        p1.setAttribute('style', 'display:none')
    }else{
        p1.setAttribute('style', 'display:block')
    }

})
btn_qst4.addEventListener('click', function(){
    let p1 = document.querySelector('.none_p--4')
    
    if (p1.style.display == 'block'){
        p1.setAttribute('style', 'display:none')
    }else{
        p1.setAttribute('style', 'display:block')
    }

})



// const icon = document.querySelector('.top_intro_block--2');

// document.addEventListener('scroll', () => {
//   if (window.scrollY > 100) {
//     icon.style.opacity = '0';
//     icon.style.marginRight = '-50px';
//     icon.style.transitionDuration = '.5s';
//   } else {
//     icon.style.opacity = '1';
//     icon.style.marginRight = '0';
//     icon.style.transitionDuration = '.5s';
//   }
// })
let card_future = document.querySelector('.card_block--future')
// document.addEventListener('scroll', function(){
//     if (card_future.style.opacity){
//         card_future.style.opacity = '1'
        
//     }else{
//         card_future.setAttribute('style', 'transform: translateX(200px)')
//         card_future.style.opacity = '0.1'
//     }
// })