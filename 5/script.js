let arrow_gal_left = document.querySelector('.arrow--gallery--left')
let arrow_gal_right = document.querySelector('.arrow--gallery--right')
let a = 1;

arrow_gal_right.addEventListener('click', function(){
    a*=(-1);
    if (a<0){
        document.querySelector('.abs_cards_gallery').setAttribute('style',`left:0vw` )
    }else{
        document.querySelector('.abs_cards_gallery').setAttribute('style',`left:-27vw` )
    }
    console.log(a)
})

// .abs_cards_gallery{
//     position: absolute;
//     left: -10vw;

let b=1;

arrow_gal_left.addEventListener('click', function(){
    b*=(-1);
    if (b<0){
        document.querySelector('.abs_cards_gallery').setAttribute('style',`left:-27vw` )
    }else{
        document.querySelector('.abs_cards_gallery').setAttribute('style',`left:0vw` )
    }
    console.log(b)
})


let quest_1 = document.querySelector('.quest_1')
let quest_2 = document.querySelector('.quest_2')
let quest_3 = document.querySelector('.quest_3')
let quest_4 = document.querySelector('.quest_4')

let ans1 = document.querySelector('.ans_1')
let ans2 = document.querySelector('.ans_2')
let ans3 = document.querySelector('.ans_3')
let ans4 = document.querySelector('.ans_4')

quest_1.addEventListener('click', function(){
    if (ans1.style.display=='block'){
        ans1.style.display = 'none'
    }else{
        ans1.style.display = 'block'
    }

})
quest_2.addEventListener('click', function(){
 
    if (ans2.style.display=='block'){
        ans2.style.display = 'none'
    }else{
        ans2.style.display = 'block'
    }
})
quest_3.addEventListener('click', function(){
   
    if (ans3.style.display=='block'){
        ans3.style.display = 'none'
    }else{
        ans3.style.display = 'block'
    }
})
quest_4.addEventListener('click', function(){

    if (ans4.style.display=='block'){
        ans4.style.display = 'none'
    }else{
        ans4.style.display = 'block'
    }
})


// let team_block = document.querySelector('.cards--our_team')
// let ar_right_team = document.querySelector('.arrow--our_team--right')
// ar_right_team.addEventListener('click', function(){
//     team_block.setAttribute('style', 'justify-content: flex-end')
// })

let abs_team_block = document.querySelector('.absolute_block')
let ar_right_team = document.querySelector('.arrow--our_team--right')
let ar_left_team = document.querySelector('.arrow--our_team--left')
ar_right_team.addEventListener('click', function(){
    abs_team_block.style.left = '-32vw'
})
ar_left_team.addEventListener('click', function(){
    abs_team_block.style.left = '0'
})
//let scrollElement = document.querySelector('.scale_animated')
// window.addEventListener('scroll', function(){
//     const elementPosition = scrollElement.getBoundingClientRect().top;
//     console.log(elementPosition, window.innerHeight)
//     if (elementPosition < window.innerHeight){
//         document.querySelector('.scale_animated').setAttribute('style','scale:1')
//     }
// })
document.querySelectorAll('.scale_animated').forEach(function(scrollElement){
    window.addEventListener('scroll', function(){
        const elementPosition = scrollElement.getBoundingClientRect().top;
       // console.log(elementPosition, window.innerHeight)
        if (elementPosition < window.innerHeight){
            scrollElement.setAttribute('style','scale:1')
        }else{
            scrollElement.setAttribute('style','scale:0')
        }
    })
})

document.querySelectorAll('.bottom_animated').forEach(function(scrollElement){
    window.addEventListener('scroll', function(){
        const elementPosition = scrollElement.getBoundingClientRect().top;
       // console.log(elementPosition, window.innerHeight)
        if (elementPosition < window.innerHeight){
            scrollElement.setAttribute('style','transform: translate(0,0); opacity:1')
        }else{
            scrollElement.setAttribute('style','transform: translate(0,28vh); opacity:0')
        }
    })
})

document.querySelectorAll('.left_animated').forEach(function(scrollElement){
    window.addEventListener('scroll', function(){
        const elementPosition = scrollElement.getBoundingClientRect().top;
       // console.log(elementPosition, window.innerHeight)
        if (elementPosition < window.innerHeight){
            scrollElement.setAttribute('style','transform: translate(0,0); opacity:1')
        }else{
            scrollElement.setAttribute('style','transform: translate(-22vw,0); opacity:0')
        }
    })
})

document.querySelectorAll('.right_animated').forEach(function(scrollElement){
    window.addEventListener('scroll', function(){
        const elementPosition = scrollElement.getBoundingClientRect().top;
       // console.log(elementPosition, window.innerHeight)
        if (elementPosition < window.innerHeight){
            scrollElement.setAttribute('style','transform: translate(0,0); opacity:1')
        }else{
            scrollElement.setAttribute('style','transform: translate(22vw,0); opacity:0')
        }
    })
})


document.querySelectorAll('.rotate_left_animated').forEach(function(scrollElement){
    window.addEventListener('scroll', function(){
        const elementPosition = scrollElement.getBoundingClientRect().top;
       // console.log(elementPosition, window.innerHeight)
        if (elementPosition < window.innerHeight){
            scrollElement.setAttribute('style','transform: translate(0, 0) rotate(0deg);')
        }else{
            scrollElement.setAttribute('style','transform: translate(-30vw, 0) rotate(200deg);')
        }
    })
})
document.querySelectorAll('.rotate_right_animated').forEach(function(scrollElement){
    window.addEventListener('scroll', function(){
        const elementPosition = scrollElement.getBoundingClientRect().top;
       // console.log(elementPosition, window.innerHeight)
        if (elementPosition < window.innerHeight){
            scrollElement.setAttribute('style','transform: translate(0, 0) rotate(0deg);')
        }else{
            scrollElement.setAttribute('style','transform: translate(30vw, 0) rotate(-200deg);')
        }
    })
})

document.querySelectorAll('.rot_block_animated').forEach(function(scrollElement){
    window.addEventListener('scroll', function(){
        const elementPosition = scrollElement.getBoundingClientRect().top;
       // console.log(elementPosition, window.innerHeight)
        if (elementPosition < window.innerHeight){
            scrollElement.classList.add('rot_anim')
            //console.log(scrollElement)
        }else{
            scrollElement.setAttribute('style','transform: rotateX(0deg)')
            //scrollElement.setAttribute('style','transform: rotateX(-40deg);')
            scrollElement.classList.remove('rot_anim')
            //console.log(2)
        }
    })
})

document.querySelectorAll('.opacity_animated').forEach(function(scrollElement){
    window.addEventListener('scroll', function(){
        const elementPosition = scrollElement.getBoundingClientRect().top;
       // console.log(elementPosition, window.innerHeight)
        if (elementPosition < window.innerHeight){
            scrollElement.setAttribute('style','opacity: 1')
        }else{
            scrollElement.setAttribute('style','opacity: 0')
        }
    })
})




scrollElement = document.querySelector('.card_anim_1')
window.addEventListener('scroll', function(){
    const elementPositionTop = scrollElement.getBoundingClientRect().top;
    const elementPositionBottom = scrollElement.getBoundingClientRect().bottom
    // console.log(elementPosition, window.innerHeight)
    if ((elementPositionTop < window.innerHeight) && (elementPositionBottom  > window.innerHeight)){

        
        counter1 = 18
        counter2 = 12
        counter3 = 108
        counter4 = 150
        
        interval = 0;
        const interval_step = 100;
        const max_interval = 2000;

        count=0;


        var timer = setInterval( function(){
            interval += interval_step
            count +=1
         
            counter3+=1
            document.querySelector('.card_anim_3 .huge_num ').textContent = counter3
            console.log('3',interval)
           
            if (count%2==0){
                counter1+=1
                document.querySelector('.card_anim_1 .huge_num').textContent = counter1
                console.log('1', interval)
            }else if(count%3==0){
                
                counter4+=1
                document.querySelector('.card_anim_4 .huge_num').textContent = counter4
                console.log('4',interval)
            }else{
              
                counter2+=1
                document.querySelector('.card_anim_2 .huge_num .huge_num--animation').textContent = counter2
                console.log('2',interval)
            }
            // document.querySelector('.card_amin_2 .huge_num').textContent = counter2
            // document.querySelector('.card_amin_3 .huge_num').textContent = counter3
            // document.querySelector('.card_amin_4 .huge_num').textContent = counter4
            
            if (interval > max_interval) {
                clearInterval(timer)
            }
        }, interval_step)
    }
})
