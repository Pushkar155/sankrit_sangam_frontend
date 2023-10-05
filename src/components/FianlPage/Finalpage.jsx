import React from 'react'
import image from "../Quiz/image.png";
import "./finalpage.scss";
import image1 from "./back1.mp4";
import { useAuth } from '../../AuthContext';
import {useNavigate} from "react-router-dom"
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
// import image from "./back.png";

const Finalpage = () => {
    const navigate = useNavigate();
    const {page,refresh,minutes,seconds,correct}=useAuth();
    const handelclick =()=>{
        refresh();
        navigate("/")

    }
    // usenavigator to home page or at unit page
  return (
    <div className='final'>
        <div className="final_navbar">
            <div className="name">
                <img src={image} alt="" />
                <h4>संस्कृत Sangam</h4>
            </div>
      </div>
      <div className="final_body">
        <h3>{page}</h3>
        <div className="final_page">
            <div className="final_pageved">
                <video  loop autoPlay muted >
                    <source src={image1} type="video/mp4"/>
                </video>

            </div>
            <h4>Congratulations &#128079;</h4>

            <div className="final_stats">
                <h5>Time Taken</h5>
                <div className="icons">
                    <AccessTimeRoundedIcon className='icon time'/>
                    <h5>{minutes}:{seconds} min</h5>  
                </div>
                
            </div>
            <div className="final_stats">
                <h5>Total Score</h5>
                <div className="icons">
                    <EmojiEventsRoundedIcon className='icon win'/>
                    <h5>{correct}</h5>  
                </div>
            </div>
            <div className="final_stats">
                <h5>Time Wright</h5>
                <div className="icons">
                    <CheckCircleOutlineRoundedIcon className='icon loose'/>
                    <h5>{correct}/5</h5>  
                </div>
            </div>


        </div>
        <button onClick={handelclick}>Home</button>
      </div>

    </div>
  )
}

export default Finalpage