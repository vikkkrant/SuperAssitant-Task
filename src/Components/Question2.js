import React, { useState } from "react";
import { useDrop } from "react-dnd";
import "./Question2.css";
import "./commonStyles.css";

const Question2 = () => {
  const [sentence, setSentence] = useState("");
  const [options, setOptions] = useState([]);
  const [underlinedWord, setUnderlinedWord] = useState("");

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "option",
    drop: (item) => addOption(item.text),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addOption = (optionText) => {
    setOptions((prevOptions) => [...prevOptions, optionText]);
  };

  const handleSentenceChange = (event) => {
    const sentenceValue = event.target.innerText;
    setSentence(sentenceValue);
    const underlinedWordValue = sentenceValue.match(/<u>(.*?)<\/u>/);
    if (underlinedWordValue) {
      setUnderlinedWord(underlinedWordValue[1]);
    } else {
      setUnderlinedWord("");
    }
  };

  return (
    <div className="Question2">
      <h2>Question2 - Cloze</h2>
      <div className="SentenceWrapper">
        <div
          className="Sentence"
          contentEditable
          onBlur={handleSentenceChange}
          dangerouslySetInnerHTML={{ __html: sentence }}
        />
      </div>

      <div className="OptionsWrapper">
        <p>Options:</p>
        <div className="Options" ref={drop}>
          {options.map((option, index) => (
            <div key={index} className="Option">
              {option}
            </div>
          ))}
        </div>
      </div>

      <div className="PreviewWrapper">
        <p>Preview:</p>
        <div className="Preview">
          <p
            dangerouslySetInnerHTML={{
              __html: sentence.replace(/<u>.*?<\/u>/g, "<u>_____</u>"),
            }}
          />
          {underlinedWord && (
            <div className="UnderlinedWord">
              <p>
                {sentence.replace(/<u>.*?<\/u>/g, "_____")}
                {options.map((option, index) => (
                  <span key={index}> ( {option} )</span>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question2;
