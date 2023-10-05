import React from 'react';
import "./quiz.scss";
// import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import image from "./image.png"
import {useAuth} from "../../AuthContext";
import {useNavigate} from "react-router-dom"

const Quiz = () => {
    const {setPage} =useAuth();
    const navigate = useNavigate();

    const handleButtonClick = (event) => {
        const apiName = event.target.getAttribute('data-api-name');
        setPage(apiName)
        navigate('/unit')
        
      };


  return (
    <div className='quiz'>
        <div className="quiz_navbar">
            <div className="but" ><ArrowBackRoundedIcon className='icon'/></div>
            <div className="name">
                <img src={image} alt="" />
                <h3>संस्कृत Sangam</h3>
            </div>

        </div>
        <div className="quiz_data">
            <div className="block"></div>
            <div className="data_testdata">
                <h4>Quiz</h4>
                <div className="data_buttons">
                    <button className='buton_hover' data-api-name="ugcquiz" onClick={handleButtonClick} >UCG Quiz <SkipNextRoundedIcon className='icon'/> </button>
                    <button className='buton_hover' data-api-name="pgtquiz" onClick={handleButtonClick} >PGT Quiz <SkipNextRoundedIcon className='icon'/> </button>
                    <button className='buton_hover' data-api-name="tgtquiz" onClick={handleButtonClick} >TGT Quiz <SkipNextRoundedIcon className='icon'/> </button>
                </div>
            </div>
            <div className="data_testdata">
                <h4>Previous Year Papers</h4>
                <div className="data_buttons">
                    <button className='buton_hover' data-api-name="ugcpaper" onClick={handleButtonClick} >UCG Papers <SkipNextRoundedIcon className='icon'/> </button>
                    <button className='buton_hover' data-api-name="pgtpaper" onClick={handleButtonClick} >PGT Papers <SkipNextRoundedIcon className='icon'/> </button>
                    <button className='buton_hover' data-api-name="tgtpaper" onClick={handleButtonClick} >TGT Papers <SkipNextRoundedIcon className='icon'/> </button>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quiz