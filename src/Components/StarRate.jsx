import React from "react";

const StarRate = ({ rate }) => {
  const etoile = (rate) => {
    var tab = [];
    for (let index = 1; index <= 5; index++) {
      if (index <= rate) {
        tab.push(<span style={{ color: "gold", fontSize: "30px" }}>★</span>);
      } else {
        tab.push(<span style={{ color: "gray", fontSize: "30px" }}>★</span>);
      }
    }
    return tab;
  };
  return <div>{etoile(rate)}</div>;
};

export default StarRate;
