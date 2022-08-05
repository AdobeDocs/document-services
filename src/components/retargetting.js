import React from "react";

const ContactPixelRetargeting =()=>{
  return <img height="1" width="1" style="border-style:none;" alt="" src="https://insight.adsrvr.org/track/pxl/?adv=eazb7fe&ct=0:wmfl47d&fmt=3"/>
}


const APIPixelRetargeting=()=>{
  return <img height="1" width="1" style="border-style:none;" alt="" src="https://insight.adsrvr.org/track/pxl/?adv=eazb7fe&ct=0:u1a0ke9&fmt=3"/>
}

const GoogleTagManager=()=>{
  return   <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6F7DKT"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>

}
export {ContactPixelRetargeting,APIPixelRetargeting,GoogleTagManager}