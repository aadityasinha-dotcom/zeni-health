import React from 'react';
import {FaqsDiv, FaqsWrapper, FaqsH1, FaqsH2} from "./FaqsElements.js";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import FaqsDropdown from "./FaqsDropdown.js"


const faqData = [
  {
    question: "What is healthcare staffing?",
    answer: "It's the placement of healthcare professionals in various roles at healthcare facilities."
  },
  {
    question: "How does it work?",
    answer: "Staffing agencies match healthcare professionals with job openings based on skills and experience."
  },
  // Add more questions and answers here
];

const Faqs = () => {

  return (
    <div>
      <FaqsDropdown faqs={faqData}/>
    </div>
  )
}

export default Faqs;
