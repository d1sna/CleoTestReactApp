import React from "react";

export default function Form(props) {
  return (
    <form className="form" onSubmit={props.submitHandler}>
      <p> Enter any GitHub login :</p>
      <input id="input" className="input" placeholder="example: gaearon" />
      <p>
        <button className="button">Show</button>
      </p>
    </form>
  );
}
