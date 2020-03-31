import React, { useContext } from "react";
import { Progress } from "reactstrap";
import { GameContext } from "../../Context/GameContext";

const ProgressBar = () => {
  const { progress } = useContext(GameContext);

  return (
    <div>
      <div className="text-center">{progress} of 15</div>
      <Progress striped color="success" value={progress} max={15} />
    </div>
  );
};

export default ProgressBar;
