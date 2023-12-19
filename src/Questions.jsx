import SingleQuestion from "./SingleQuestion";

function Questions({ questions }) {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} question={question} />;
      })}
    </section>
  );
}
export default Questions;
