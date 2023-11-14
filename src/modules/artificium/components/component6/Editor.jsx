import React from 'react'
import distortion from './../../assets/EditImage/distortion.svg'
import rotate from './../../assets/EditImage/rotate.svg'
import crop from './../../assets/EditImage/crop.svg'
import sun from './../../assets/EditImage/sun.svg'
import magic from './../../assets/EditImage/magic-wand.svg'
import chevrondown from './../../assets/EditImage/chevron-down.svg'
import eye from './../../assets/EditImage/eye.svg'
import sliders from './../../assets/EditImage/sliders.svg'
import eyecross from './../../assets/EditImage/eye-cross.svg'

const Editor = () => {
  return (
    <div className="editor">

      <div className="tools">
        <button><img src={distortion} alt="" /></button>
        <button><img src={rotate} alt="" /> </button>
        <button><img src={crop} alt="" /> </button>
        <button><img src={sun} alt="" /> </button>
        <button><img src={magic} alt="" /> </button>
      </div>

      <div className="color">
        <div className="header">
          <button><img src={chevrondown} alt="" /></button>
          <p>Color</p>
        </div>
        <div className="inputrange">
          <div className="text">
            <p>Hue</p>
            <p>147</p>
          </div>
          <input type="range" className="range blue"/>
        </div>
        <div className="inputrange">
          <div className="text">
            <p>Saturation</p>
          </div>
          <input  type="range"  className="range blue saturation"/>
        </div>
        

      </div>

      <div className="effects">
        <div className="header">
          <button><img src={chevrondown} alt="" /></button>
          <p>Effects</p>
        </div>
        <div className="options">
          <div className="text">
            <p>Flare bokeh</p>
          </div>
          <div className="iconeffect">
            <p>0.25, 0.75, H255</p>
            <button><img src={sliders} alt="" /></button>
            <button><img src={eye} alt="" /></button>
          </div>
        </div>
        <div className="options">
          <div className="text">
            <p>Gaussian blur</p>
          </div>
          <div className="iconeffect">
            <p>0.33</p>
            <button><img src={sliders} alt="" /></button>
            <button><img src={eyecross} alt="" /></button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Editor