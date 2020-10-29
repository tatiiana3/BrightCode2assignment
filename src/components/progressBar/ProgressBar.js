import React from 'react';
import './Styles.scss';

const ProgressBar = (props) => {
    let percentage = props.questionId * 20
    return (
        <div className="progress">
        <div className="progress--meter" style={{opacity:1, width:`${percentage}%`}}>{percentage}%</div>
      </div>
    )
}

export default ProgressBar