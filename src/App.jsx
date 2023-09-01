import { useState } from "react";
import "./App.css";
import questionBank from "../questionBank";

function App() {
  const [question, setQuestion] = useState(0);

  return (
    <>
      <div className="bg-slate-700">
        <h1 className="bg-orange-500"> Welcome to Code Bytes!</h1>
        <h2>{questionBank[question]}</h2>
        <div>
          <div>
            <form>
              <textarea
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
