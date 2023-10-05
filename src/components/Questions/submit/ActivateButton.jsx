import React from 'react';
import './ActivateButton.scss'; // Import your SCSS file
import { useAuth } from '../../../AuthContext';
import {useNavigate} from "react-router-dom"

const ActivateButton = () => {

  const {handleButtonClick}=useAuth();
  const navigate = useNavigate();

  const handleClick = (e) => {
    const self = e.currentTarget;
    if (!self.classList.contains('loading')) {
      self.classList.add('loading');
      setTimeout(function () {
        self.classList.add('done');
        setTimeout(function () {
          self.classList.remove('loading', 'done');
        }, 1600);
        navigate("/final")
        // usenavigator to congratulations page
      }, 3200);
    }
    handleButtonClick();
  };

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="activate" onClick={handleClick}>
      <ul>
        <li>Submit &#9989;</li>
        <li>Saving...&#8987;</li>
        <li>Done &#128640;</li>
      </ul>
    </a>
  );
};

export default ActivateButton;
