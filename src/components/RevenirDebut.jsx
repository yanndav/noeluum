import React from "react";

const RevenirDebut = ({ onRestart }) => {
  return (
    <div className="revenir-debut" onClick={onRestart}>
      Revenir au début
    </div>
  );
};

export default RevenirDebut;
