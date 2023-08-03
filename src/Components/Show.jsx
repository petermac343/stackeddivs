import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import "./Show.css"; // Import the CSS file for styling

const Section = styled.div`
  height: 100%;
  /* background-color: #e8f1f1; */
  display: flex;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  margin: auto;
  flex-wrap: wrap;

  position: relative;
`;

const Show = () => {
  return (
    <Section>
      <div className="tag-container">
        {[...Array(3)].map((_, index) => (
          <Tag key={index} />
        ))}
      </div>
    </Section>
  );
};

export default Show;
