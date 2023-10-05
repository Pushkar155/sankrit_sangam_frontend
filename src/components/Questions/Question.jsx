import React,{useState} from "react";
import "./question.scss";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import image from "../Quiz/image.png";
// import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ActivateButton from "./submit/ActivateButton";
import Timer from "./Timer";
// import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import AvTimerRoundedIcon from '@mui/icons-material/AvTimerRounded';
import { useAuth } from "../../AuthContext";

const questions = [
    {
      id: 1,
      questionText: "केन्द्रीयविद्यालय-संगठनस्य ध्येयवाक्यं किम् ?",
      options: ["सत्यमेव जयते", "तत् त्वं पूषन् अपावृणु", "सत्यं शिवं सुन्दरम्", "विद्ययाऽमृतमश्नुते"],
      correctOption: "विद्ययाऽमृतमश्नुते",
    },
    {
      id: 2,
      questionText: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctOption: "4",
    },
    {
        id: 3,
        questionText: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctOption: "Paris",
      },
      {
        id: 4,
        questionText: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctOption: "4",
      },
      {
        id: 5,
        questionText: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctOption: "Paris",
      },
      {
        id: 6,
        questionText: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctOption: "4",
      },
    // Add more questions here
  ];
const Question = () => {

    const {handelcorrect}=useAuth()
  
    const [selectedOptions, setSelectedOptions] = useState({});
    
    const handleOptionSelect = (questionId, option) => {
        if (!selectedOptions[questionId]) {
          if(questions[questionId-1].correctOption===option){
            handelcorrect()
          }
            setSelectedOptions((prevState) => ({
              ...prevState,
              [questionId]: option,
            }));
          }
    };
  


  return (
    <div className="ques">
      <div className="ques_navbar">
        <div className="but">
          <ArrowBackRoundedIcon className="icon" />
        </div>
        <div className="name">
          <img src={image} alt="" />
          <h4>संस्कृत Sangam</h4>
        </div>
        <div className="but1">
          <AvTimerRoundedIcon className="icon"/>
          <h6><Timer/></h6>
        </div>
      </div>

      <div className="ques_data">
        <div className="block"></div>
        {questions.map((question) => (
            <div key={question.id} className="question">
            <div className="presentques"><h5>Question {question.id}</h5></div>
            <p className="question-text">{question.questionText}</p>
            <div className="options">
                {question.options.map((option, index) => (
                <div
                    key={index}
                    className={`option ${selectedOptions[question.id] === option ? (option === question.correctOption ? 'correct' : 'wrong') : ''}`}
                    onClick={() => handleOptionSelect(question.id, option)}
                >
                    {option}
                </div>
                ))}
            </div>
            </div>
        ))}
        <div className="submit_button">
          <ActivateButton/>
        </div>
         
        
      </div>
    </div>
  );
};

export default Question;
