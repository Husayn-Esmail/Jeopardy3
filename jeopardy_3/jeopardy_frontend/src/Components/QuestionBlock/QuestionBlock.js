import './QuestionBlock.css';

export default function Question({ value }) {
  function handleClick() {
    alert('you clicked me');
  }
  return (
    <button className="question_button" onClick={handleClick}>
      {value}
    </button>
  );
}
