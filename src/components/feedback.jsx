export default function Feedback(props) {
  const { output, hasPassed, callback, callback2, index } = props;
  if (output == "Your return values will appear here") {
    return (
      <p>Please submit code containing a return statement holding an array</p>
    );
  } else if (hasPassed == true) {
    return (
      <>
        <div className="flex flex-row justify-around">
          <p>Yay! Your code passed!</p>
          <button
            className="bg-amber-100 py-2 px-5 mx-3 border-cyan-400 border-4 border-md"
            onClick={() => {
              callback(index + 1);
              callback2("Your return values will appear here");
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
