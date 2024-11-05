import React, { useState } from 'react'
import { CiBellOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { RiExpandUpDownLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './Dash.css'
const Dash = () => {
    const[create, closeCreate]=useState(false)
    function  createuser(params) {
        closeCreate(true)
        
    }
    function  create_Close(params) {
        closeCreate(false)
        
    }
const [Input,setInput]= useState({
    lastName:"",
    firstName:"",
    mobile:"",
    email:"",
    id:"",
    company:"",
    password:"",
    user:""
})
function inputchange(params) {
    
}
    return (
        <div className='dashboard'>
            <div className="head">
                <div className="admin">
                    <div className="admin-name">
                        <h4>Jhon Doe</h4>
                        <p>(Admin)</p>
                    </div>
                    <CiBellOn className='admin-icn' />
                    <CiSettings className='admin-icn' />
                </div>
                <div className="create-form">
                    <CiCirclePlus className='admin-icn' onClick={createuser} />
                    <p>Create User</p>
                </div>
                <div className="search">
                    <p>
                        Search Client ,User ,Form etc
                        <CiSearch className='admin-icn' />
                    </p>
                    <CiCirclePlus />
                </div>
                <div className="logo">
                    <p> Your <span>Logo</span></p>
                </div>
            </div>
            <div className="dash-content">
                <h5>Dashboard</h5>
                <div className="dash-features">
                    <div className="dash-fea1">
                        <p>Create form <CiCirclePlus className='fea-icn ' /></p>
                        <p>Download< MdOutlineFileDownload className='fea-icn' /></p>
                    </div>
                    <div className="dash-fea1">
                        <p><FaAngleDown className='fea-icn' /> All</p>
                        <p>Filtrer< CiFilter className='fea-icn' /></p>
                        <p>A-Z Short: <RiExpandUpDownLine /> </p>
                    </div>
                </div>
            </div>
            <div className="dash-data">
                <table>
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Last Edited</th>
                            <th>Place</th>
                            <th>Date Created</th>
                            <th>Form Name</th>
                            <th>User Name</th>
                        </tr>

                    </thead>

                    <thead>

                        <tr className='dash-row'>
                            <th className='icon'><MdOutlineRemoveRedEye className='dash-icn' /><MdOutlineEdit className='dash-icn' />< MdDeleteOutline className='dash-icn' /> </th>
                            <th>19/09/2022</th>
                            <th>Lorem ipsum </th>
                            <th>19/09/2022</th>
                            <th>Lorem ipsum </th>
                            <th>Raj kumar</th>

                        </tr>

                    </thead>
                </table>








            </div>
          {create && ( <div className="create-user">
   <div className="create-interface">
   <div className="create-id">
    <p><IoIosCloseCircleOutline className='close' onClick={create_Close}/></p>
    <p>Create User</p>
    </div>
      <div className="create-int">
    <div className="int-id">
        <p>Last Name</p>
        <input type="text" placeholder='Last Name' name ="lastName" value={Input.name} 
        onChange={inputchange}/>
        </div>                
    <div className="int-id">
        <p>First Name</p>
        <input type="text" placeholder='First Name' name='Firstname' />
        </div>                
    <div className="int-id">
        <p>Mobile No</p>
        <input type="number" placeholder='Mobile number' name='mobile' />
        </div>                
    <div className="int-id">
        <p>Email Id </p>
        <input type="email" placeholder='Enter your E mail' name='email'
         />
        </div>                
    <div className="int-id">
        <p>Id</p>
        <input type="number" placeholder='Enter your Id' name='id' />
        </div>                
    <div className="int-id">
        <p>Company</p>
        <input type="text" placeholder='Enter Company' name='company' />
        </div>                
    <div className="int-id">
        <p>Password</p>
        <input type="Password" placeholder='Enter your Password' name= 'password' />
        </div>                
    <div className="int-id">
        <p>Type of User</p>
        <input type="text" placeholder='Select User Type' name='users'/>
        </div>                
                
                </div>
                
             <div className="create-button">
             <button>Add USER</button>
             <button className='close-btn'>CANCEL</button>
             </div>
   </div>
            </div>)}
        </div>
    )
}

export default Dash
