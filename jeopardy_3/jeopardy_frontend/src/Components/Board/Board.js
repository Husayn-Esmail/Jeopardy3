import './Board.css';
import Question from '../QuestionBlock/QuestionBlock';

export default function Board() {
  let content = [1, 2, 3, 4, 5];
  return (
    <div className="row">
      <div className="col">
        {content.map((i) => (
          <Question value={i * 100} />
        ))}
      </div>
      <div className="col">
        {content.map((i) => (
          <Question value={i * 100} />
        ))}
      </div>
      <div className="col">
        {content.map((i) => (
          <Question value={i * 100} />
        ))}
      </div>
      <div className="col">
        {content.map((i) => (
          <Question value={i * 100} />
        ))}
      </div>
      <div className="col">
        {content.map((i) => (
          <Question value={i * 100} />
        ))}
      </div>
    </div>
  );
}
