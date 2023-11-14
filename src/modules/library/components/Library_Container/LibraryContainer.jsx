import React, { useState } from 'react'
import './LibraryContainer.css'
import LibraryCard from './../Library_Card/LibraryCard'
import CanvasHeaderTaps from '../Canvas_Header_Taps/CanvasHeaderTaps'
import CanvasBody from '../Canvas_Body/CanvasBody'
import 'bootstrap/dist/css/bootstrap.min.css'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import astro1 from './../../assets/library-card-images/astro.png'
import astro2 from './../../assets/library-card-images/astronaut.png'
import astro3 from './../../assets/library-card-images/control.png'
import alian1 from './../../assets/library-card-images/alian_1.png'
import alian2 from './../../assets/library-card-images/alian_2.png'
import alian3 from './../../assets/library-card-images/alian_3.png'
import user1 from './../../assets/library-users/user_1.png'
import user2 from './../../assets/library-users/user2.png'
import user3 from './../../assets/library-users/user3.png'
import user4 from './../../assets/library-users/user_4.png'
import tap_icon from './../../assets/card-icons/dots.svg'
import botton_icon from './../../assets/card-icons/plus.svg'
import tjo_canvas_resize_icon from './../../assets/offcanvas_icons/full-screen.svg'
import tjo_canvas_x_icon from './../../assets/offcanvas_icons/cross.svg'
import tjo_canvas_gallery_icon from './../../assets/offcanvas_icons/image.svg'
import tjo_canvas_masseg_icon from './../../assets/offcanvas_icons/comment.svg'
import tjo_canvas_chat_icon from './../../assets/offcanvas_icons/comment-circle.svg'


const LibraryContainer = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };
    return (
        <>
            <div className='tjo_container'>
                {/* Container of columes */}
                <div className="tjo_colums_container">
                    {/* first column */}
                    <div className="tjo_column">
                        {/* Tap header */}
                        <div className="tjo_tap_header">
                            <span className="tjo_tap_text">Images</span>
                            <div className="tjo_icon_container">
                                <img src={tap_icon} alt="tap_icon" className="tjo_tap_icon" />
                            </div>
                        </div>
                        <LibraryCard header_title="Captain Drake" header_sub_title="Natural born leader with years of experience in space exploration." tjo_pic_visible={false} first_img={astro1} sec_img={astro2} th_img={astro3} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_users_imag3={user3} tjo_users_imag4={user4} tjo_visible={false} number="12" />
                        <LibraryCard header_title="Cosmic Voyager" header_sub_title="Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds." tjo_pic_visible={false} first_img={alian1} sec_img={alian2} th_img={alian3} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_visible={true} number="27" />
                    </div>
                    {/* container line between columns */}
                    < div className="tjo_container_line" />
                    {/* secound column */}
                    <div className="tjo_column">
                        {/* Tap header */}
                        <div className="tjo_tap_header">
                            <span className="tjo_tap_text">Documents</span>
                            <div className="tjo_icon_container">
                                <img src={tap_icon} alt="tap_icon" className="tjo_tap_icon" />
                            </div>
                        </div>
                        <LibraryCard header_title="Character bios" header_sub_title=" 3 documents, 43832 words" tjo_pic_visible={true} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_users_imag3={user3} tjo_users_imag4={user4} tjo_visible={false} number="0" />
                        <LibraryCard header_title="Plot outline" header_sub_title="1 document, 18745 words" tjo_pic_visible={true} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_users_imag3={user3} tjo_users_imag4={user4} tjo_visible={false} number="0" />
                        <LibraryCard header_title="Scene descriptions" header_sub_title="5 documents, 23992 words" tjo_pic_visible={true} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_users_imag3={user3} tjo_users_imag4={user4} tjo_visible={false} number="0" />
                        <LibraryCard header_title="Dialogue snippets" header_sub_title="2 documents, 10384 words" tjo_pic_visible={true} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_users_imag3={user3} tjo_users_imag4={user4} tjo_visible={false} number="0" />
                    </div>
                    {/* container line between columns */}
                    < div className="tjo_container_line" />
                    {/* theerd column */}
                    <div className="tjo_column">
                        {/* Tap header */}
                        <div className="tjo_tap_header">
                            <span className="tjo_tap_text">Ideas</span>
                            <div className="tjo_icon_container">
                                <img src={tap_icon} alt="tap_icon" className="tjo_tap_icon" />
                            </div>
                        </div>
                        <LibraryCard header_title="Concept art for potential new characters or locations." tjo_pic_visible={true} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_users_imag3={user3} tjo_users_imag4={user4} tjo_visible={false} number="0" />
                        <LibraryCard header_title="A list of potential plot points or story arcs." tjo_pic_visible={true} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_users_imag3={user3} tjo_users_imag4={user4} tjo_visible={false} number="0" />
                        <LibraryCard header_title="Ideas for potential spin-offs or other related media." tjo_pic_visible={true} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_users_imag3={user3} tjo_users_imag4={user4} tjo_visible={false} number="0" />
                        <LibraryCard header_title="Potential partnerships or collaborations with other artists or creators." tjo_pic_visible={true} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_users_imag3={user3} tjo_users_imag4={user4} tjo_visible={false} number="0" />
                    </div>

                    {/* Botton of SideBar */}
                    <Button className="tjo_sidebar_btn" onClick={handleShow} >
                        <img src={botton_icon} alt="btn_icon" className="tjo_btn_icon" />
                    </Button>

                    {/* sidebar offcanvas */}
                    <Offcanvas show={show} className="tjo_offcanvas" placement="end" scroll onHide={handleClose} >
                        <Offcanvas.Header className="tjo_canvas_header">
                            <div className="tjo_canvasheader_content">
                                <span className="tjo_canvasheader_title">Captain Drake</span>
                                <div className="tjo_canvasheader_icons">
                                    <img src={tjo_canvas_resize_icon} alt="tap_fullscreem_icon" className="tjo_canvasheader_icon" />
                                </div>
                                <div className="tjo_canvasheader_icons" onClick={handleClose}>
                                    <img src={tjo_canvas_x_icon} alt="tap_x_icon" className="tjo_canvasheader_icon" />
                                </div>
                            </div>
                            <p className="tjo_canvasheader_subtitle">
                                Natural born leader with years of experience in space exploration.
                            </p>
                            <div className="tjo_canvas_container_of_taps">
                                <CanvasHeaderTaps icon={tjo_canvas_chat_icon} text="Chat" tjo_pic_light={true} />
                                <CanvasHeaderTaps icon={tjo_canvas_gallery_icon} text="Images" tjo_pic_light={false} />
                                <CanvasHeaderTaps icon={tjo_canvas_masseg_icon} text="Comments" tjo_pic_light={true} />
                            </div>
                            <div className="tjo_canvas_divider" />
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <CanvasBody />
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
        </>
    )
}

export default LibraryContainer