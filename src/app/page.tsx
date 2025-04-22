"use client"
import gsap from "gsap";
import {useGSAP} from '@gsap/react';
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";



gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)






export default function Home() {
  const pathref = useRef<SVGPathElement>(null);
  

  useGSAP(

    
    ()=>{
      if(!pathref.current) return;
      const length = pathref.current.getTotalLength();


      const t1 = gsap.timeline()
      const scrollsets = {
        trigger:".main",
        start: "top 25%",
        toggleActions:"play reverse play reverse"
      }
  
      t1.to(".loader",{
        duration:2,
        opacity:"none",
        ease:"expo.inOut"
      }) 
      t1.to("#line",{
  
        
        backgroundColor: "red",
        width:100+"%",
        duration:0.5
      })
      t1.to(".loader",{
        display:"none",
        ease:"expo.inOut"
      })
      t1.to("#line",{
        backgroundColor:"white",
        top:0,
        duration:1,
        height:100+"%",
        minHeight:100+"vh",
        position:"fixed",
        inset:0,
        overflow:"auto",
        
        
        delay:0.5
      })
      t1.to("#line",{
        right:0,
        duration:0.5,
        height:100+"%",
        width:0,
        display:"none"

      })
      
      t1.set("#path",{
        strokeDashoffset:length,
        strokeDasharray:length,
        stroke:"white",
        strokeWidth:1,
        fill:"none",
        visibility:"visible"

      })
      t1.to("#path",{
        strokeDashoffset:0,
        duration:1,
        ease:"power2.inOut"

      })
      t1.to("#path",{
        fill:"red",
        fillOpacity:1
      })
      t1.to("#name",{
        color:"red",
        duration:2,
        visibility:"visible",
        ease:"power2.inOut",
       webkitTextStroke:1,
       webkitTextStrokeColor:"black"
      })
      t1.to("#name",{
        webkitTextStrokeColor:"white",
        display:"none",
        duration:0.7
      })
      t1.to("#boxx",{
        visibility:"visible",
        ease:"power1.inOut",
        duration:0.5,
        
      })
      t1.to("#svg",{
        width:37,
        height:37,
        position:"absolute",
        top:1,
        left:10,
        duration:0.3

      })
      t1.to("#path",{
        fill:"black",
        duration:0.2

      })
      
      t1.fromTo(".imgs",{
        visibility:"visible",
        y:100,
        opacity:0

      }  ,{
        y:0,
        opacity:1,
        duration:0.5,
        

        ease:"power3.inOut"
      }
      )
      
      ,[]
    

     
     
    }
  )
  const [count,setCount] = useState(0)
  useEffect(()=>{
const timeout = setTimeout(()=>{
  count<100?setCount(count+1):clearTimeout(timeout)

  
},15)
  })
  return (
  
    <div id="body"  className=" min-h-screen min-w-screen w-full h-full fixed inset-0 bg-black overflow-auto">
    <div  style={{width:count+"%" ,top:51.5+"%"}} className="loader inline-block absolute bg-white h-0.5  max-w-screen"></div>
   
  
  

   <div id="counter" className="loader inline-block absolute text-white top-2/4 left-2/4">
    {count}%
   </div>
   <div id="line" style={{width:0+"%" ,top:51.5+"%"}} className=" inline-block absolute bg-white h-0.5  max-w-screen"></div>
   
   <div>
   <svg id='svg'  style={{visibility:"hidden",top:30+"%",left:40+"%",position:"absolute"}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="250" height="250" viewBox="0 0 50 50">
<path ref={pathref} id="path" d="M 11.984375 4 A 1.0001 1.0001 0 0 0 11.292969 4.2929688 L 3.2929688 12.292969 A 1.0001 1.0001 0 0 0 3 13 L 3 36 A 1.0001 1.0001 0 0 0 3.2929688 36.707031 L 13.292969 46.707031 A 1.0001 1.0001 0 0 0 15 46 L 15 25.414062 L 24.292969 34.707031 A 1.0001 1.0001 0 0 0 25.707031 34.707031 L 35 25.414062 L 35 46 A 1.0001 1.0001 0 0 0 36.707031 46.707031 L 46.707031 36.707031 A 1.0001 1.0001 0 0 0 47 36 L 47 13 A 1.0001 1.0001 0 0 0 46.707031 12.292969 L 38.707031 4.2929688 A 1.0001 1.0001 0 0 0 37.292969 4.2929688 L 25 16.585938 L 12.707031 4.2929688 A 1.0001 1.0001 0 0 0 11.984375 4 z M 12 6.4140625 L 24 18.414062 L 24 31.585938 L 5.4140625 13 L 12 6.4140625 z M 38 6.4140625 L 44.585938 13 L 26 31.585938 L 26 18.414062 L 38 6.4140625 z M 5 15.414062 L 13 23.414062 L 13 43.585938 L 5 35.585938 L 5 15.414062 z M 45 15.414062 L 45 35.585938 L 37 43.585938 L 37 23.414062 L 45 15.414062 z"
 ></path>
</svg>
    </div>

    <div  id="name" className="invisible absolute  text-white font-orbitron text-2xl "  style={{display:"block" ,top:70+"%",left:40+"%"}}>Mavius-Caption It!!</div>
   
    <div id="boxx" className=" invisible flex text-white min-w-screen h-10 shadow-sm shadow-white">
<div className="box flex-auto absolute top-2 left-16 font-orbitron">
Mavius
</div>
<div className="box flex-auto absoute text-xl pt-1 text-center font-playfair text-shadow-lg ">
  Generate A Caption For Your Image In A Matter Of Seconds
</div>



    </div>

    <div style={{textShadow:"4px 4px red"}} id="Head"className="imgs invisible absolute top-24 text-7xl text-white font-orbitron ">Generate Cool Captions With The Help Of Machine Learning</div>

<div className="flex gap-8 absolute top-72 left-30 min-w-full h-80
   ">
  <img src="/img1.jpg" alt="" className="invisible flex-1 imgs border-2 border-gray-100 shadow-xl shadow-slate-600" />
  
  <img src="/img2.jpg" alt="" className="invisible flex-1 imgs border-2 border-gray-100 shadow-xl shadow-slate-600" />

  <img src="/img3.jpg" alt="" className="invisible flex-1 imgs border-2 border-white shadow-xl shadow-slate-600" />

</div>

<div style={{top:102+"%", }} className="font-playfair absolute text-6xl h-80 left-44  text-white min-w-screen">Generate Captions For Images In Just A Click</div>
<div  style={{top:120+"%",width:97+"%" }}  className="flex flex-col  absolute left-6 h-64  border-2 border-white shadow-xl shadow-gray-100" >
  <div className="flex flex-none flex-row pl-5 pt-10 m-0 h-24 text-white text-5xl font-winky">
    How Does it Work <div className="flex-1 pl-4 text-red-600">
      ?
    </div>
    </div>
    <div className="flex-none text-white pl-4 h-16">
      We Use A VIT Encoder to encode the images with positional encodings into vectors which after going through multiple self attention layers
      and linear and dropout layers returns the feature rich output which then goes through transformer decoder which again uses masked self-attention
      layers to generate a caption appropriate for the photo. 
    </div>
    <div className="flex-1 text-white pl-4"> The model that we have created is a custom model which incorporates the vision image transformer
      encoder and transformer decoder to train on a sample dataset and then the final weights are used to generate perfect captions for your images
    </div>

 


</div>

   </div>


   
   
   
   
  );
}
