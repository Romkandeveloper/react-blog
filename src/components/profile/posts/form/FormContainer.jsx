import React from 'react';

import {addPostToStateCreator, updateFormInputCreator, updateFormTextAreaCreator} from "../../../../redux/reducers/profile-reducer";
import Form from "./Form";
import {connect} from "react-redux";

const mapStateToProps = (state) => {

    return {
        inputValueState: state.profilePage.form.inputValue,
        inputAreaValueState: state.profilePage.form.textAreaValue,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (inputValue, descriptionValue) => {
            dispatch(addPostToStateCreator(inputValue, descriptionValue));
        },
        inputChange: (value) => {
            dispatch(updateFormInputCreator(value));
        },
        textAreaChange: (value) => {
            dispatch(updateFormTextAreaCreator(value));
        }
    }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;