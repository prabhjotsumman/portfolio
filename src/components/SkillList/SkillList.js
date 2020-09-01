import React from "react";

const SkillList = (props) => {
  const { title, list } = props;
  const listItems = list.map((item, i) => <li key={i}>{item}</li>);
  return (
    <div className="Skill-Container">
      <h4>{title}</h4>
      <ul>{listItems}</ul>
    </div>
  );
};

export default SkillList;
