export default function Output(props) {
  const { output } = props;
  console.log(output[0], " line3Output");
  return <div>{output}</div>;
}
