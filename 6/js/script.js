function _elem(sel){
    return document.querySelector(sel)
}
function _eventClick(sel, f){
    return _elem(sel).addEventListener('click', f)
}
function _addClass(el,sel){
    return el.classList.add(sel)
}
function _removeClass(el,sel){
    return el.classList.remove(sel)
}


for (let i = 1; i < 5; i++) {
    _eventClick(`.point_${i} img`, function(){
        document.querySelectorAll(`.point_${i}`).forEach(el => {

            if (_elem(`.point_${i} .answer_point`).classList.contains('change_display')){
                _removeClass(_elem(`.point_${i} .answer_point`), 'change_display')
            }

            else{
                for (let index = 0; index < 4; index++) {   
                    _removeClass(_elem(`.point_${index+1} .answer_point`), 'change_display')
                }
                _addClass(_elem(`.point_${i} .answer_point`),'change_display')
            }
        })
    })
}

window.addEventListener('scroll', function(){
    let scrollEL = _elem('.card_2')
    const elPosTop = scrollEL.getBoundingClientRect().top;
    const elPosBottom = scrollEL.getBoundingClientRect().bottom;
   
    document.querySelectorAll('.card').forEach(el => {
        if (elPosBottom < window.innerHeight){
            if (el.classList.contains('card_2')){
                el.setAttribute('style', 'transform: scale(1); opacity: 1;' )
            }else{
                el.setAttribute('style', 'transform: translateY(0); opacity: 1;')
            }
            
        }else{
            if (el.classList.contains('card_2')){
                el.setAttribute('style', 'transform: scale(0); opacity: 0;' )
            }else{
                el.setAttribute('style', 'transform: translateY(35vh); opacity: 0;')
            }
        }
    })

})

window.addEventListener('scroll', function(){
    let scEL = _elem('.block_numbers')
    const elPosT = scEL.getBoundingClientRect().top 
    const elPosB = scEL.getBoundingClientRect().bottom
    let int =0, step=200,count=0;
    let counter1 = 200, counter2 = 150, counter3 = 90, counter4 =28;
    if (elPosT < window.innerHeight && elPosB > window.innerHeight){
       
        var T = setInterval(function(){
            int += step
            count+=1
            counter1+=1
            counter2+=1
            counter3+=1
            counter4+=1
            _elem('.block_numbers_1 h1').textContent = counter1

            if (count%2==0){
                counter2+=1
                _elem('.block_numbers_2 h1').textContent = counter2
            }
            if (count%3==0){
                counter2+=1
                _elem('.block_numbers_3 h1').textContent = counter3
            }
            if (count%4==0){
                counter2+=1
                _elem('.block_numbers_4 h1').textContent = counter4
            }
            if (int>2000){
                //_elem('.block_numbers_1 h1').textContent = first_value
                clearInterval(T)
                console.log('stop')
            }

        }, step)
    }
})


// window.addEventListener('scroll', function(){
//     let scrollEL = _elem('.block_numbers')
//     const elPosTop = scrollEL.getBoundingClientRect().top;
//     const elPosBottom = scrollEL.getBoundingClientRect().bottom;
//     let arrayElems =  document.querySelectorAll('.block_numbers')

//     for (let i = 0; i < arrayElems.length; i++) {

//         if ((elPosTop < window.innerHeight) && (elPosBottom  > window.innerHeight)){

//             let startValue = _elem(`.block_numbers_${i+1} h1`).textContent;//НАЧ ЗНАЧЕНИЕ
//             console.log(startValue)
//             interval = 0
//             step = 100*i
            
//             var timer = setInterval( function(){
//                 interval += step

//                 if (interval>2000 ) {
                    
//                     clearInterval(timer)//ОЧИСТКА ТАЙМ
//                     timer = null
//                     console.log('очищено')
//                 }
//             })
//         }
        
//     }
// })


let btn_menu = document.querySelector('header img')
count = 1
btn_menu.addEventListener('click', function(){
   
    if (count!=1){
        document.querySelector('.section__intro').setAttribute('style', 'filter: none; ')
        document.querySelector('body').setAttribute('style', 'position:relative; background-color: none')
        document.querySelector('header').setAttribute('style', 'background-color: #fff')
        document.querySelector('.menu_abs').setAttribute('style', 'display:none; ')
        count-=1
        console.log(2)
    }else{
        console.log(1)
        
        count+=1
        document.querySelector('.section__intro').setAttribute('style', 'filter: brightness(0.5); z-index: 1')
        document.querySelector('body').setAttribute('style', 'position:fixed; background-color: linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5))')
        document.querySelector('header').setAttribute('style', 'background-color:rgba(54, 52, 52, 0.08)')
        document.querySelector('.menu_abs').setAttribute('style', 'display:block; z-index: 10000')

        document.querySelector('.crest img').addEventListener('click', function(){
            document.querySelector('.section__intro').setAttribute('style', 'filter: none; ')
            document.querySelector('body').setAttribute('style', 'position:relative; background-color: none')
            document.querySelector('header').setAttribute('style', 'background-color: #fff')
            document.querySelector('.menu_abs').setAttribute('style', 'display:none; ')
        
        })
    }
   // document.querySelector('body').setAttribute('style', 'position:fixed; background-color:rgba(197, 195, 195, 0.08);')
 
})