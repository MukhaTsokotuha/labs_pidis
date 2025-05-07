function _elem(sel){
    return document.querySelector(sel)
}
// window.addEventListener('scroll', function(){
//     let scEL = _elem('.block__margin_how_work')
//     const elPosT = scEL.getBoundingClientRect().top 
//     const elPosB = scEL.getBoundingClientRect().bottom
//     let int =0, step=200,count=0;
//     let counter1 = 200, counter2 = 150, counter3 = 90, counter4 =28;
//     if (elPosT < window.innerHeight && elPosB > window.innerHeight){
       
//         var T = setInterval(function(){
//             int += step
//             count+=1
//             counter1+=1
//             counter2+=1
//             counter3+=1
//             counter4+=1
//             _elem('.margin_card_1 h1').textContent = counter1

//             if (count%2==0){
//                 counter2+=1
//                 _elem('.margin_card_2 h1').textContent = counter2
//             }
//             if (count%3==0){
//                 counter2+=1
//                 _elem('.margin_card_3 .anim_thousand').textContent = counter3
//             }
//             if (count%4==0){
//                 counter2+=1
//                 _elem('.margin_card_4 h1').textContent = counter4
//             }
//             if (int>2000){
//                 //_elem('.block_numbers_1 h1').textContent = first_value
//                 clearInterval(T)
//                 console.log('stop')
//             }

//         }, step)
//     }
// })





scrollElement = document.querySelector('.block__margin_how_work')
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
            document.querySelector('.margin_card_1 h1 ').textContent = counter3
            console.log('3',interval)
           
            if (count%2==0){
                counter1+=1
                document.querySelector('.margin_card_2 h1').textContent = counter1
                console.log('1', interval)
            }else if(count%3==0){
                
                counter4+=1
                document.querySelector('.margin_card_4 h1').textContent = counter4
                console.log('4',interval)
            }else{
              
                counter2+=1
                document.querySelector('.margin_card_3 .anim_thousand').textContent = counter2
                console.log('2',interval)
            }
            
            if (interval > max_interval) {
                clearInterval(timer)
            }
        }, interval_step)
    }
})