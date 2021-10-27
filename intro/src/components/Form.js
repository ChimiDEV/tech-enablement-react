import { useState } from 'react';

const Input = (props) => {
  const onChange = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <>
      <div>Component Value: {props.state}</div>
      <label for={props.id}>{props.labelText}:</label>
      <input type="text" id={props.id} name={props.id} onChange={onChange} />
    </>
  );
};

const Form = () => {
  const title = 'Mein Formular';
  const response = 'Second Name';

  const [value, setValue] = useState('Default');

  return (
    <form>
      <div>{value}</div>
      <Input
        id="fname"
        state={value}
        labelText={response}
        setValue={setValue}
      />
      <br />
      <br />
      <Input id="lname" labelText="Last Name - A" />
    </form>
  );
};

export default Form;
