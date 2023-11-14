import React from 'react'
import './CanvasHeaderTaps.css'

const CanvasHeaderTaps = ({ icon, text, tjo_pic_light }) => {
    return (
        <>
            <div className="tjo_sidebar_tap_content">
                <img src={icon} alt="tap_icon" className={(tjo_pic_light) ? "tjo_sidebar_tap_icon" : "tjo_sidebar_tap_icon tjo_sidebar_tap_lighticon"} />
                <span className={(tjo_pic_light) ? "tjo_sidebar_tap_text" : "tjo_sidebar_tap_text tjo_text_light"}>{text}</span>
                <div className={(tjo_pic_light) ? "hidden" : "tjo_lighticon_underline"} />
            </div>
        </>
    )
}

export default CanvasHeaderTaps