var img_index = 0
        var lis_1 = document.querySelectorAll("#imgs li")
        var lis_2 = document.querySelectorAll("#btns li")
        var left_btn = document.querySelector(".left_btn")
        var right_btn = document.querySelector('.right_btn')
        var carousel =  document.querySelector('.carousel')
        var timeId 

        function clear_img(){
            lis_1.forEach(function(ele){
                ele.className='unactive'  
            })
        }

        function clear_btn(){
            lis_2.forEach(function(ele){
                ele.className='btn_unat'
            })
        }

        function changePicture1(){
            img_index++
            if(img_index>2){
                img_index=0
            }
            clear_img()
            clear_btn()
            lis_1[img_index].className='active'
            lis_2[img_index].className='btn_at'
        }

        function changePicture2(){
            img_index--
            if(img_index<0){
                img_index=2
            }
            clear_img()
            clear_btn()
            lis_1[img_index].className='active'
            lis_2[img_index].className='btn_at'
        }

        timeId = setInterval(changePicture1,3000)
        function stop(){
            clearInterval(timeId)
        }

        function start(){
            timeId = setInterval(changePicture1,3000)
        }

        lis_2.forEach((ele,index)=>{
            ele.onclick=function(){
                stop()
                clear_btn()
                clear_img()
                lis_1[index].className='active'
                lis_2[index].className='btn_at'
                img_index = index
            }
        })

        left_btn.onclick=function(){
            stop()
            changePicture2()
        }

        right_btn.onclick=function(){
            stop()
            changePicture1()
        }
        
        carousel.addEventListener('mouseover',function(){
            left_btn.style.display='block'
            right_btn.style.display='block'
            this.style.opacity=0.5
        },false)

        carousel.addEventListener('mouseout',function(){
            left_btn.style.display='none'
            right_btn.style.display='none'
            this.style.opacity=1
        },false)

        window.addEventListener('blur',()=>{
            stop()
            console.log('Stop')
        },false)

        window.addEventListener('focus',()=>{
            start()
            console.log('Start')
        },false)