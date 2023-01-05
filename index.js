gsap.registerPlugin(ScrollTrigger);
let navoffset = $("#scoundNav").offset().top;
const canvas=document.getElementById('canvas');
const heads=document.querySelector('.heads-container')
const nav=document.querySelector('.wrapper-container')
const canvasImage=document.getElementById('canvasImage');
const scoundNav=document.getElementById('scoundNav');
const main=document.getElementById('main');
const aippodHead=document.querySelector('.big-head');
$(window).scroll(function () {
    let maxscroll=$(window).scrollTop();
    if (maxscroll > navoffset) {
        $("#scoundNav").css("width", "100%");
        $(".nav-background").css("width", "100%");
    } else {
        $("#scoundNav").css("width", "1024px");
        $(".nav-background").css("width", "990px");
        $(".nav-background").css("background-color", "transparent");
    }
});
const airPodsInfo={
    totalFrame:63,
    totalTime:6,
    image:[],
    currentFrame:0,
    currentImage:(index)=>`https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/${index.toString().padStart(4,'0')}.png`,
    }
const totalTime={
    totalFrame:30,
    totalTime:1,
    currentsize:1,
    scalesize:[],
    opacity:[],
    watch:[],

    }
    for(let i=1.11;i<=1.5;i=i+.006){
        totalTime.scalesize.push(i)
    }
    for(let i=1;i>=0;i=i-.015625){
        totalTime.opacity.push(i)
    }
    let arr = Array(20).fill(1)
    let arr2=[0.9,0.7,0.5,0.3,0]
    let arr3= Array(38).fill(0)
    arr2.push(...arr3)
    arr.push(...arr2)
    for(let i=0;i<=airPodsInfo.totalFrame;i++){
        let x =airPodsInfo.currentImage(i);
         airPodsInfo.image.push(x)
         }
         gsap.registerPlugin()
         gsap.to(airPodsInfo,{
            currentFrame:airPodsInfo.totalFrame,
            snap:'currentFrame',
            ease:'none',
            scrollTrigger:{
                 trigger:main,
                 start:'-50px',
                 end:'bottom',
                 scrub:6,
                 pin:true,
               
        
            },

            onUpdate:()=>{render()},
        })
        airPodsInfo.image[0].onload=()=>{
            canvasImage.setAttribute('src',`${airPodsInfo.image[0]}`) 
        }
        function render(){
            canvasImage.setAttribute('src',`${airPodsInfo.image[airPodsInfo.currentFrame]}`)
            $(aippodHead).css('transform',`scale(${totalTime.scalesize[airPodsInfo.currentFrame]})`);
            $(aippodHead).css('opacity',`${totalTime.opacity[airPodsInfo.currentFrame]}`);
            $('.willHide').css('opacity',`${arr[airPodsInfo.currentFrame]}`);
        }
       window.onload=()=>{
        canvasImage.animate({transform:'scale(1.1)'},{
            duration:1000,
            fill:"both",
        })
        heads.animate({opacity:'1'},{duration:1000,delay:500,fill:'both'})
       }
 






