export default function Feedback(props) {
  const { output, hasPassed, callback, index, handleSubmit } = props;
  if (output == "Your return values will appear here") {
    return (
      <p>Please submit code containing a return statement holding an array</p>
    );
  } else if (hasPassed == true) {
    handleSubmit("");
    return (
      <>
        <div className="flex flex-row justify-around">
          <p>Yay! you passed!</p>
          <button
            className="bg-amber-100 py-2 px-5 mx-3 border-cyan-400 border-4 border-md"
            onClick={() => {
              callback(index + 1);
            }}
          >
            Would you like to go to the next question?
          </button>
        </div>
      </>
    );
  } else {
    return (
      <p>
        Your code did not pass, try again, please make sure to use a return
        statement
      </p>
    );
  }
  return <div>feedback</div>;
}
