import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tag = () => {
  const [stackedDivs, setStackedDivs] = useState([
    {
      tag: "Others",
      height: 250,
      width: 220,
      transform: "translateY(20px) translateX(60px)",
      content: `OTHER SOLUTIONS FOR THE SAME TUTORIAL`,
    },
    {
      tag: "Solution",
      height: 250,
      width: 220,
      transform: "translateY(40px) translateX(40px)",
      content: `BEST SOLUTION CHOOSEN`,
    },
    {
      tag: "Question",
      height: 250,
      width: 220,
      transform: "translateY(60px) translateX(20px)",
      content: `QUESTION`,
    },
  ]);

  const [enlargedIndex, setEnlargedIndex] = useState(-1); // -1 indicates no div is enlarged

  const handleDivClick = (index) => {
    if (enlargedIndex === index) {
      // If the clicked div is already enlarged, close it
      setEnlargedIndex(-1);
    } else {
      // Otherwise, open the clicked div in an enlarged state
      setEnlargedIndex(index);
    }
  };

  const handleCloseClick = () => {
    // Reset the enlarged state when the "X" icon is clicked
    setEnlargedIndex(-1);
  };

  const tagBackgroundColor = "#f1f1f1"; // Light grey background color for all tags

  return (
    <div>
      {stackedDivs.map((div, index) => (
        <div
          // className="card"
          key={index}
          style={{
            position: "absolute",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            height:
              enlargedIndex === index ? window.innerHeight * 0.8 : div.height,
            width:
              enlargedIndex === index ? window.innerWidth * 0.8 : div.width,
            top: enlargedIndex === index ? window.innerHeight * 0.05 : div.top,
            left: enlargedIndex === index ? window.innerWidth * 0.01 : div.left,
            // position: enlargedIndex === index ? window.position : absolute,
            backgroundColor:
              index === 0
                ? "#FFD700" // Yellow for the first div (question)
                : index === 1
                ? "#00BFFF" // Blue for the second div (solution)
                : "#32CD32", // Green for the third div (others)
            border: "1px solid black",
            borderRadius: "4px",
            transform: div.transform, // Add border radius of 4px
            textAlign: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",

            zIndex: enlargedIndex === index ? 9999 : index + 1,
          }}
          onClick={() => handleDivClick(index)}
        >
          <div
            style={{
              backgroundColor: tagBackgroundColor,
              padding: "3px",
              borderRadius: "4px", // Add border radius of 4px for the tag text background
            }}
          >
            {div.tag}
          </div>

          {enlargedIndex === index ? (
            // Show the whole content when the div is enlarged
            <div>
              {div.content}
              <AiOutlineCloseCircle
                onClick={handleCloseClick}
                style={{
                  position: "absolute",
                  top: "3px",
                  right: "5px",
                  fontSize: "20px",
                  marginBottom: "13px",
                  color: "red",
                  cursor: "pointer",
                }}
              />
            </div>
          ) : (
            // Show a truncated version of the content when the div is not enlarged
            <div>{div.content.split(" ").splice(0, 10).join(" ")}...</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tag;
