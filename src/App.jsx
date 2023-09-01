import { useState } from "react";
import "./App.css";
import questionBank from "../questionBank";

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
}

function App() {
  const [question, setQuestion] = useState(0);

  return (
    <>
      <div className="bg-slate-700">
        <h1 className="bg-orange-500"> Welcome to Code Bytes!</h1>
        <h2>{questionBank[question]}</h2>
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <textarea
                name="user_code"
                id="userCode"
                placeholder="Type your code here"
              ></textarea>
              <button type="submit">Run</button>
            </form>
          </div>
          <div id="print">I'm the output div</div>
        </div>
        // Assess output to create passedBoolean // update html based on
        passedBoolean
      </div>
    </>
  );
}

export default App;
