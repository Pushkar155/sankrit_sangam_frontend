import React from 'react'
import "./unit.scss"
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import image from "../Quiz/image.png"
import { useAuth } from '../../AuthContext';
import {useNavigate} from "react-router-dom"

const Unit = () => {
    const {setUnit} =useAuth();
    const navigate = useNavigate();
    const handleButtonClick = (event) => {
        const apiName = event.target.getAttribute('data-api-name');
        setUnit(apiName);
        navigate("/questions")
      };
  return (
    <div className='unit'>
        <div className="unit_navbar">
        <div className="but" ><ArrowBackRoundedIcon className='icon'/></div>
            <div className="name">
                <img src={image} alt="" />
                <h4>संस्कृत Sangam</h4>
            </div>
        </div>
        <div className="unit_body">
            <div className="block"></div>
                <div className="data_testdata">
                    <div className="data_buttons">
                        <button className='buton_hover' data-api-name="unit1" onClick={handleButtonClick} >Unit 1 <SkipNextRoundedIcon className='icon'/> </button>
                        <button className='buton_hover' data-api-name="unit2" onClick={handleButtonClick} >Unit 2 <SkipNextRoundedIcon className='icon'/> </button>
                        <button className='buton_hover' data-api-name="unit3" onClick={handleButtonClick} >Unit 3 <SkipNextRoundedIcon className='icon'/> </button>
                        <button className='buton_hover' data-api-name="unit4" onClick={handleButtonClick} >Unit 4 <SkipNextRoundedIcon className='icon'/> </button>
                        <button className='buton_hover' data-api-name="unit5" onClick={handleButtonClick} >Unit 5 <SkipNextRoundedIcon className='icon'/> </button>
                        <button className='buton_hover' data-api-name="unit6" onClick={handleButtonClick} >Unit 6 <SkipNextRoundedIcon className='icon'/> </button>
                        <button className='buton_hover' data-api-name="unit7" onClick={handleButtonClick} >Unit 7 <SkipNextRoundedIcon className='icon'/> </button>
                        <button className='buton_hover' data-api-name="unit8" onClick={handleButtonClick} >Unit 8 <SkipNextRoundedIcon className='icon'/> </button>
                        <button className='buton_hover' data-api-name="unit9" onClick={handleButtonClick} >Unit 9 <SkipNextRoundedIcon className='icon'/> </button>
                        <button className='buton_hover' data-api-name="unit10" onClick={handleButtonClick} >Unit 10 <SkipNextRoundedIcon className='icon'/> </button>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Unit