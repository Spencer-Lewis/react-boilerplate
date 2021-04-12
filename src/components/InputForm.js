import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"

export default function InputForm(props) {

    const handleInputChange = (event, func) => {
        return func(event.target.value);
    };

    return (
      <div>
        <TextField
          id="text-input-1"
          label="Form Input 1"
          value={props.input1}
          onChange={(event) => handleInputChange(event, props.handleInput1Change)}
          margin="normal"
        />
        <TextField
          id="text-input-2"
          label="Form Input 2"
          value={props.input2}
          onChange={(event) => handleInputChange(event, props.handleInput2Change)}
          margin="normal"
        /> 
        <TextField
          id="text-input-3"
          label="Form Input 3"
          value={props.input3}
          onChange={(event) => handleInputChange(event, props.handleInput3Change)}
          margin="normal"
        /> 
        <Button 
          variant="contained" 
          color="primary"
          onClick={props.handleFormSubmit}>
            Submit Form
        </Button> 
      </div>
    );
}
