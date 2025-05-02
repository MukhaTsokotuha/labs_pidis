count=1
document.querySelector('.arrow_right').addEventListener('click',function(){
   
    if (count==1){
        document.getElementById('block_pictures').setAttribute('style', 'right:70vw')
        count+=1
    }else if (count==2){
        document.getElementById('block_pictures').setAttribute('style', 'right:140vw')
        count+=1
    }else if (count==3){
        document.getElementById('block_pictures').setAttribute('style', 'right:0vw')
        count = 1
    }
   
})
document.querySelector('.arrow_left').addEventListener('click', function(){
    if (getComputedStyle(document.getElementById('block_pictures')).right == '0px'){
        document.getElementById('block_pictures').setAttribute('style', 'right:140vw')
    }else if(count == 2){
        document.getElementById('block_pictures').setAttribute('style', 'right:0vw')
        count = 1
    }else if(count  == 3){
        document.getElementById('block_pictures').setAttribute('style', 'right:70vw')
        count = 2
    }
})

let el = document.querySelector('.animation_numbers')

window.addEventListener('scroll', function(){
    const elPosB = el.getBoundingClientRect().bottom
    const elPosT = el.getBoundingClientRect().top
    if  (elPosT < window.innerHeight && elPosB > window.innerHeight){
        step = 30
        num = 700
        t = 0
        var timer = setInterval(function(){
            t+=5
            num+=1
            if (num>=1000){
                n = num.toString()
                ost = n.substr(1,4)
                document.querySelector('.animation_numbers').textContent = `1,${ost}`
            }else{
                document.querySelector('.animation_numbers').textContent = num
            }
          
            if (t > 3000){
                clearInterval(timer)
            }
        }, step)
    }
})

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