import React from "react";
import { Spinner } from "reactstrap";
import "./style.css";


const SpinnerComp = () => {
  return (
    <div className='spinner'>
      <Spinner type="grow" color="secondary" />
    </div>
  );
};

export default SpinnerComp;
