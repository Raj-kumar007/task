import React from 'react'
import img_1 from "../../Assets/Image/sign.jpeg"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "./Recover.css"
import { useNavigate } from 'react-router-dom';

const Recover = () => {

  const mail = useNavigate()
  function next(params) {
    mail('/signIn')

  }
  function back(params) {
    mail('/')
  }
  return (
    <>
      <div className='recover-password'>
        <img src={img_1} alt="" />
        <h1 className='rec-pass1'>FORM X</h1>
        <div className='recover'>
          <MdOutlineKeyboardArrowLeft className='left-Arrow' onClick={back} />
          <div className="recover-input">
            <div className="recover-1">
              <h1 className='rec-1'>Recover Password</h1>
              <p>Please enter your register Email ID</p>
              <div className='email'>
                <p>Email</p>
                <input type="Email" placeholder='                                        Enter Your Registered Email' />
              </div>
              <button className='submit-btn recover-btn' onClick={next}>CONTINUE</button>

            </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default Recover
