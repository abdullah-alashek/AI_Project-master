import React from 'react'
import imgbadge from './../../../assets/Badge.png'
import './MainHeading.css'

const MainHeading = () => {
  return (
    <div className='ma-MainHeading'>
      {/* /////////////////The right/////////////////// */}
        <div className='ma-projectName'>
             <h2>Spacesship Crew</h2>
             <img src={imgbadge} alt="" />
        </div>
      {/* /////////////////The Left//////////////////// */}
        <div className='ma-button-icons'>
            <div className='ma-star'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.0808 4.64067C11.4208 3.78642 12.5792 3.78642 12.9192 4.64067L14.3998 8.3597C14.5432 8.71983 14.8674 8.96589 15.2395 8.99706L19.0826 9.31894C19.9653 9.39288 20.3232 10.5438 19.6507 11.1457L16.7227 13.766C16.4392 14.0198 16.3153 14.4179 16.402 14.7973L17.2965 18.7153C17.502 19.6152 16.5649 20.3265 15.8091 19.8443L12.519 17.7447C12.2003 17.5414 11.7997 17.5414 11.481 17.7447L8.19086 19.8443C7.43511 20.3265 6.49801 19.6152 6.70349 18.7153L7.59804 14.7973C7.68466 14.4179 7.56084 14.0198 7.27731 13.766L4.34931 11.1457C3.67676 10.5438 4.03469 9.39288 4.91743 9.31894L8.76049 8.99706C9.13263 8.96589 9.4568 8.71983 9.60017 8.3597L11.0808 4.64067Z" stroke="#686B6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
             </div>
            <div className='ma-dots'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.5 7.5C14.5 8.88071 13.3807 10 12 10C10.6193 10 9.5 8.88071 9.5 7.5C9.5 6.11929 10.6193 5 12 5C13.3807 5 14.5 6.11929 14.5 7.5Z" fill="#686B6E"/>
                  <path d="M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z" fill="#686B6E"/>
              </svg>
            </div>
        </div>
    </div>
  )
}

export default MainHeading