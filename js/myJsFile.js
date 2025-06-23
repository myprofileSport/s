var typed=new Typed(".input",{
    strings:["Fine Art Teacher","Visual Artist","Graphic Designer"],
    typespeed:70,
    backSpeed:60,
    loop:true
})
const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 0)
});


var __nevbar = document.getElementById("myNavBarId");  
var __menuIcon = document.getElementById("menu-icon");
var __nevbarBtn = document.getElementById('myNavBarId').getElementsByTagName('a');
var __menuDefaultPos = true;
var __downloadBtn = document.getElementById('downloadBtn');

function __toggleMenuContent(){   
   // console.log('__menuDefaultPos  ==  '+__menuDefaultPos); 
    if(__menuDefaultPos === true){
        __menuIcon.style.backgroundPosition = 'right';
        __nevbar.style.left = '0';
        __menuDefaultPos=false;
        //console.log('__menuDefaultPos  ==  '+__menuDefaultPos); 
    }else{
            if(__menuDefaultPos === false){
            __nevbar.style.left = '-100%'; 
            __menuIcon.style.backgroundPosition = 'left';
        } 
         __menuDefaultPos=true;       
    }    
}

function __nevbarListToggle(){
    for(let i=0; i<__nevbarBtn.length; i++){
        var __llistBtn = __nevbarBtn[i];
       __llistBtn.onclick = function(){
           __nevbar.style.left = '-100%'; 
           __menuIcon.style.backgroundPosition = 'left';   
           __menuDefaultPos=true;          
        }        
    }
       
}

function __DownloadPdfFile() {
   const __link = document.createElement('a');
   __link.href = 'images/Hitesh-art-res.pdf';i
   __link.click();    
};

 __nevbarListToggle();
 __menuIcon.onclick = function(){       
    __toggleMenuContent();
}
__downloadBtn.addEventListener('click',function(e){      
  __DownloadPdfFile();   
});



var __nevbarBtn = document.getElementById('myNavBarId').getElementsByTagName('a');
let __pictureSelected=document.querySelector(".popup-img img").getElementsByClassName('img'); 

/*------------------------[ Thumbnail ]----------------------------*/
let __thumbMum = document.getElementsByClassName('project');
let __LargeThum = document.getElementsByClassName   ('lThumb'); 
let __mySubjectListArr=["pencil","colorPencil","oilPastel","posterColor","Acrylic","OilPaint"]; 

/*document.querySelector('.project').onclick=__photoLoad;*/
document.querySelector(".popup-img span").onclick = __photoHide;

 
function __photoLoad(){       
    for(let index=0; index<__thumbMum.length; index++){      
        __thumbMum[index].onclick=function(){            
            __showLargePhoto(index);           
        }                   
    }
  
}      
       
function __showLargePhoto(n){    
  
    window.open(__mySubjectListArr[n]+".html", "_blank");
    console .log("__mySubjectListArr[n]   =   "+__mySubjectListArr[n])

         /*for (let i=0; i < __LargeThum.length; i++){  
             
             console.log("_popNum ============ "+ __LargeThum[n]);  
             __LargeThum[i].style.display='none';                        
         }   
         document.querySelector(".popup-img").style.display='block';  
         __LargeThum[n].style.display='block'; */
    }

function __photoHide(){               
        document.querySelector(".popup-img").style.display='none';  
}

__photoLoad()









     
