import React from "react";
import { Button, Form } from "semantic-ui-react";

const CreateForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Abbreviation</label>
        <input placeholder="ABB" />
      </Form.Field>
      <Form.Field>
        <label>Definition</label>
        <input placeholder="Definition" />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <input placeholder="Definition" />
      </Form.Field>
      <Button> Add Tag</Button>
      <a className="ui red label">AWS</a>
      <br />
      <br />

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CreateForm;
