import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
    field:PropTypes.object.isRequired,
    form:PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};
InputField.defaultProps ={
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {
    const {field,form,label,type,placeholder, disbaled}= props;
    const { name } = field;

    const {errors,touched} = form;
    const showError = errors[name] && touched[name];

    // console.log(errors);
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label> }
            
            <Input 
                id={name}
                {...field}

                type={type}
                placeholder={placeholder}
                disabled={disbaled}
                invalid={showError}
                 />
            <ErrorMessage name={name} component={FormFeedback} />    
        </FormGroup>
    );
}

export default InputField;