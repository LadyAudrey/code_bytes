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
      <div className="h-screen bg-slate-700 text-3xl overflow-scroll max-w-screen-2xl mx-auto p-8">
        <h1 className="text-8xl object-center">Welcome to Code Bytes!</h1>
        <h2 className="text-6xl">{questionBank[question]}</h2>
        <div>
          <div className="columns-2">
            <div>
              <form onSubmit={handleSubmit}>
                <textarea
                  className="bg-cyan-300 m-36"
                  name="user_code"
                  id="userCode"
                  placeholder="Type your code here"
                ></textarea>
                <button className="bg-orange-200 p-5" type="submit">
                  Run
                </button>
              </form>
            </div>
            <div className="bg-cyan-300" id="print">
              I'm the output div
            </div>
          </div>
        </div>
        {/* // Assess output to create passedBoolean // update html based on
        passedBoolean */}
      </div>
    </>
  );
}

export default App;
