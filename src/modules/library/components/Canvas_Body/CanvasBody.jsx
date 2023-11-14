import React from 'react'
import './CanvasBody.css'
import astro1 from './../../assets/library-card-images/astro1.png'
import astro2 from './../../assets/library-card-images/astro2.png'
import astro3 from './../../assets/library-card-images/astro3.png'
import astro4 from './../../assets/library-card-images/astro girle.png'
import astro5 from './../../assets/library-card-images/sute.png'
import astro6 from './../../assets/library-card-images/controler.png'

const CanvasBody = () => {
  return (
    <>
    {/* canvas body container */}
    <div className="tjo_body_container">
        {/* canvas body row */}
        <div className="tjo_canvas_row_container">
            {/* row text */}
            <span className="tjo_canvas_body_row_text">12 April</span>
            {/* row of images */}
            <div className="tjo_canvas_body_row">
                <img src={astro1} alt="canvas_body_image" className="tjo_canvasheader_image" />
                <img src={astro2} alt="canvas_body_image" className="tjo_canvasheader_image" />
                <img src={astro3} alt="canvas_body_image" className="tjo_canvasheader_image" />
            </div>
        </div>
        {/* canvas body row */}
        <div className="tjo_canvas_row_container">
            {/* row text */}
            <span className="tjo_canvas_body_row_text">3 April</span>
            {/* row of images */}
            <div className="tjo_canvas_body_row">
                <img src={astro4} alt="canvas_body_image" className="tjo_canvasheader_image" />
            </div>
        </div>
        {/* canvas body row */}
        <div className="tjo_canvas_row_container">
            {/* row text */}
            <span className="tjo_canvas_body_row_text">2 April</span>
            {/* row of images */}
            <div className="tjo_canvas_body_row">
                <img src={astro5} alt="canvas_body_image" className="tjo_canvasheader_image" />
                <img src={astro6} alt="canvas_body_image" className="tjo_canvasheader_image" />
            </div>
        </div>
    </div>
</>
  )
}

export default CanvasBody