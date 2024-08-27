import { Section, Button } from "../../components";
import "./Form.css";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
  };

  return (
    <Section>
      <h2 className="form-title">New entry</h2>
      <form action="#" className="form" noValidate onSubmit={handleSubmit}>
        <label className="label">
          <span className="label__text">Motto</span>
          <input type="text" name="motto" className="input" required />
          <span className="input__error">
            <b>❌</b> Some error
          </span>
        </label>

        <label className="label">
          <span className="label__text">Notes</span>
          <textarea name="notes" className="input" required></textarea>
          <span className="input__error">
            <b>❌</b> Some error
          </span>
        </label>

        <Button type="submit">Create</Button>
      </form>
    </Section>
  );
};

export default Form;
