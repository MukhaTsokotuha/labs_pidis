//.block_cards_anim{
//     position: absolute;
//     display: flex;
//     right: 20px;
// }



window.addEventListener('scroll', function(){
    let el = document.querySelector('.section__animation_cards')
    let topPos = el.getBoundingClientRect().top;
    let bottomPos = el.getBoundingClientRect().bottom;
    if (topPos < window.innerHeight && bottomPos > window.innerHeight){
        step = 3000
        interval = 0;
        count=0;
        let timer = setInterval(function(){
            interval+=step
            count+=1
           // count+=1
            if (count % 100 == 0){
                 document.querySelector('.block_cards_anim').style.right = '-70vw'
               
                //console.log('1', count)
            }else if (count%50 == 0){
                 document.querySelector('.block_cards_anim').style.right = '20px'
                //console.log('2', count)
            }
           // console.log(interval, timer)


            if (document.querySelector('.card_help_yellow').getBoundingClientRect().top < window.innerHeight || document.querySelector('.content__our_team').getBoundingClientRect().bottom > window.innerHeight){
                console.log('stop')
                clearInterval(timer)
            }
        }, step)
    }
})
document.querySelector('.arrow__right').addEventListener('click', function(){
    console.log(1)
    document.querySelector('.block_cards_anim').style.right = '20px'
})
document.querySelector('.arrow__left').addEventListener('click', function(){
    console.log(1)
    document.querySelector('.block_cards_anim').style.right = '-70vw'
})


// window.addEventListener('scroll', function(){
//     let el = document.querySelector('.block_about_numb')
//     let topPos = el.getBoundingClientRect().top;
//     let bottomPos = el.getBoundingClientRect().bottom;
//     if (bottomPos > window.innerHeight  ){
//         step = 100
//         interval = 0;
//         counter=0;
//         let timer2 = setInterval(function(){
//             interval+=step
//             counter+=1
           
//            // count+=1
//             document.querySelector('.animated_num').textContent = counter
               
//                 //console.log('1', count)
          
//            // console.log(interval, timer)


//             if (document.querySelector('.animated_num').textContent == 90){
           
//                 console.log('stop')
//                 clearInterval(timer2)
//             }
//         }, step)
//     }
// })

scrollElement = document.querySelector('.block_about_numb')
window.addEventListener('scroll', function(){
    const elementPositionTop = scrollElement.getBoundingClientRect().top;
    const elementPositionBottom = scrollElement.getBoundingClientRect().bottom
    // console.log(elementPosition, window.innerHeight)
    if ((elementPositionTop < window.innerHeight) && (elementPositionBottom  > window.innerHeight)){

        
        counter1 = 0
        
        interval = 0;
        const interval_step = 150;
        const max_interval = 12000;

        count=0;


        var timer = setInterval( function(){
            interval += interval_step
            count +=1
         

            counter1+=1
            document.querySelector('.animated_num').textContent = counter1
            console.log('1', interval)
            
            
            if (interval > max_interval) {
                console.log('stop')
                clearInterval(timer)
            }
        }, interval_step)
    }
})
