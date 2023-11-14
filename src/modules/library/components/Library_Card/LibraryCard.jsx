import React from 'react'
import './LibraryCard.css'
import comment_icon from './../../assets/card-icons/chat-bubble-02.svg'

const LibraryCard = ({ header_title, header_sub_title, tjo_pic_visible , first_img, sec_img, th_img, tjo_users_imag1, tjo_users_imag2, tjo_users_imag3, tjo_users_imag4, tjo_visible, number }) => {
    return (
        <>
            {/* Card */}
            < div className="tjo_card" >

                {/* card header */}
                <div div className="tjo_card_header" >
                    <p className="tjo_header_title">{header_title}</p>
                    <p className="tjo_header_subtitle">{header_sub_title}</p>
                </div>

                {/* card images */}
                <div div className={(tjo_pic_visible) ? "span_hidden" : "tjo_card_images"} >
                    <img src={first_img} alt="astronaut_pic" className={(tjo_pic_visible) ? "span_hidden" : "tjo_first_img"} />
                    <img src={sec_img} alt="astronaut_pic" className={(tjo_pic_visible) ? "span_hidden" : "tjo_sec_img"} />
                    <img src={th_img} alt="astronaut_pic" className={(tjo_pic_visible) ? "span_hidden" : "tjo_th_img"} />
                </div>

                {/* card line */}
                < div className="tjo_card_line" />

                {/* card footer */}
                < div className="tjo_card_footer" >
                    {/*  users */}
                    <div div className="tjo_container_of_users" >
                        <img src={tjo_users_imag1} alt="" className="tjo_users_imag1" />
                        <img src={tjo_users_imag2} alt="" className="tjo_users_imag2" />
                        <img src={tjo_users_imag3} alt="" className={(tjo_visible) ? "span_hidden tjo_users_imag4" : "tjo_users_imag3"} />
                        <img src={tjo_users_imag4} alt="" className={(tjo_visible) ? "span_hidden tjo_users_imag4" : "tjo_users_imag4"} />
                        <span className={(tjo_visible) ? "span_hidden" : "tjo_showen"}>+4</span>
                    </div>
                    {/* footer comments */}
                    < div className="tjo_card_chat" >
                        <span className="tjo_footer_number">{number}</span>
                        <img src={comment_icon} alt="comments_icon" className="tjo_comment_icon" />
                    </div >
                </div >
            </div>
        </>
    )
}

export default LibraryCard