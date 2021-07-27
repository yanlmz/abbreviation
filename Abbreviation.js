import React from "react";
import { data } from "./data";
import { Search, Grid, Header, Segment } from "semantic-ui-react";

const Abbreviation = () => {
  return (
    <div className="ui list">
      {data.map((eachRow) => (
        <div className="item">{eachRow}</div>
      ))}
    </div>
  );
};

export default Abbreviation;
