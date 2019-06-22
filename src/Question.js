import React from 'react';


function Question(props) {
console.log(props);
    return (
        <div>
        <h1>Questions: {props.data.ques}</h1>
          <h2>Answers: {props.data.ans}</h2>
          <h2>{props.data.price.toLocaleString("en-US",{style:"currency", currency:"USD"})}</h2>
          <hr />
        </div>
    );

}

export default Question;