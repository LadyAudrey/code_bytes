import { useState } from "react";
import "./App.css";
import questionBank from "../questionBank";
import { miniWords } from "../questionBank";
import Output from "./components/Output";
import Feedback from "./components/feedback";

function App() {
  const [question, setQuestion] = useState(0);
  const [output, setOutput] = useState("Your return values will appear here");
  const [hasPassed, setHasPassed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const runUserFunction = new Function(("array", formJson.user_code));
    const userReturn = runUserFunction(miniWords);
    setOutput(userReturn);
    console.log(questionBank[question]);
    setHasPassed(questionBank[question].testFunction(userReturn));
  }

  return (
    <>
      <div className="bg-slate-700 text-3xl overflow-scroll">
        <div className="container">
          <h1 className="text-amber-100 text-8xl h1">Welcome to Code Bytes!</h1>
          <h2 className="text-6xl text-amber-200">
            {questionBank[question].description}
          </h2>
          <div>
            <div className="interaction">
              <div className="code-block bg-cyan-300">
                <img src="/topFunction.svg" />
                <form onSubmit={handleSubmit}>
                  <textarea
                    className="bg-slate-700 text-amber-100 border-4 rounded-md border-amber-900 "
                    name="user_code"
                    id="userCode"
                    placeholder="// Your code goes here; please return an array with your solution
                    return [anArray]"
                  ></textarea>
                  <img src="/bottomFunction.svg" />
                  <button className="bg-orange-200" id="submit" type="submit">
                    Run
                  </button>
                </form>
              </div>
              <div className="bg-cyan-300 text-amber-950 code-block">
                <Output output={output} />
              </div>
            </div>
            <Feedback
              output={output}
              hasPassed={hasPassed}
              callback={setQuestion}
              callback2={setOutput}
              index={question}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
