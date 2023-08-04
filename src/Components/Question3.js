import React, { useState } from "react";
import { useDrop } from "react-dnd";
import "./Question3.css";
import "./commonStyles.css";

const Question3 = () => {
  const [instructions, setInstructions] = useState("");
  const [passage, setPassage] = useState("");
  const [media, setMedia] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "question",
    drop: (item) => addQuestion(item.text),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addQuestion = (questionText) => {
    setQuestions((prevQuestions) => [...prevQuestions, questionText]);
    setNewQuestion("");
  };

  const handleQuestionChange = (event) => {
    setNewQuestion(event.target.value);
  };

  return (
    <div className="Question3">
      <h2>Question3 - Comprehension</h2>
      <div className="InputWrapper">
        <div className="InstructionsWrapper">
          <p>Instructions:</p>
          <textarea
            className="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        <div className="PassageWrapper">
          <p>Passage:</p>
          <textarea
            className="Passage"
            value={passage}
            onChange={(e) => setPassage(e.target.value)}
          />
        </div>

        <div className="MediaWrapper">
          <p>Media:</p>
          <input
            className="Media"
            type="text"
            value={media}
            onChange={(e) => setMedia(e.target.value)}
          />
        </div>
      </div>

      <div className="QuestionsWrapper">
        <p>MCQ Questions:</p>
        <div className="Questions" ref={drop}>
          {questions.map((question, index) => (
            <div key={index} className="Question">
              {question}
            </div>
          ))}
        </div>
        <div className="NewQuestion">
          <input
            type="text"
            value={newQuestion}
            onChange={handleQuestionChange}
            placeholder="Enter a new MCQ question"
          />
          <button onClick={() => addQuestion(newQuestion)}>Add</button>
        </div>
      </div>

      <div className="PreviewWrapper">
        <p>Preview:</p>
        <div className="Preview">
          <div className="Comprehension">
            <p>
              <strong>Instructions:</strong> {instructions}
            </p>
            <p>
              <strong>Passage:</strong> {passage}
            </p>
            <p>
              <strong>Media:</strong> {media}
            </p>
          </div>
          {questions.length > 0 && (
            <div className="MCQQuestions">
              <p>
                <strong>MCQ Questions:</strong>
              </p>
              {questions.map((question, index) => (
                <div key={index} className="Question">
                  {question}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question3;
