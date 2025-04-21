"use client"
import gsap from "gsap";
import {useGSAP} from '@gsap/react';
import { useEffect, useRef, useState } from "react";



gsap.registerPlugin(useGSAP)






export default function Home() {
  const pathref = useRef<SVGPathElement>(null);

  useGSAP(
    ()=>{
      if(!pathref.current) return;
      const length = pathref.current.getTotalLength();


      const t1 = gsap.timeline()
  
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
        ease:"power1.inOut",
       webkitTextStroke:1,
       webkitTextStrokeColor:"black"
      })
      t1.to("#name",{
        webkitTextStrokeColor:"white"
      })
    

     
     
    },[]
  )
  const [count,setCount] = useState(0)
  useEffect(()=>{
const timeout = setTimeout(()=>{
  count<100?setCount(count+1):clearTimeout(timeout)

  
},15)
  })
  return (
  
    <div id="body" className="min-h-screen min-w-screen bg-black">
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

    <div id="name" className="invisible absolute  text-white font-orbitron text-2xl "  style={{display:"block" ,top:70+"%",left:40+"%"}}>Mavius-Caption It!!</div>
   
   
   </div>
   
   
   
  );
}
