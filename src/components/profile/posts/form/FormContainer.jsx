import React from 'react';

import {addPostToStateCreator, updateFormInputCreator, updateFormTextAreaCreator} from "../../../../redux/reducers/profile-reducer";
import Form from "./Form";

const FormContainer = (props) => {

    let addPost = (inputValue, descriptionValue) => {
        props.dispatch(addPostToStateCreator(inputValue, descriptionValue));
    }

    let inputChange = (value) => {
        props.dispatch(updateFormInputCreator(value));
    }

    let textAreaChange = (value) => {
        props.dispatch(updateFormTextAreaCreator(value));
    }

    return (
        <Form addPostToState={addPost}
              inputChangeState={inputChange}
              textAreaChangeState={textAreaChange}
              inputValueState={props.state.inputValue}
              textAreaValueState={props.state.inputValue}
        />
    )
};

export default FormContainer;