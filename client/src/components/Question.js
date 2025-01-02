import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Question = ({ type, description }) => {
  return (
    <div>
      <Form.Label>"Question title"</Form.Label>
      <Form.Control type={"number"} />
      <Form.Check type="switch" label="Show question?" />
    </div>
  );
};

export default Question;
