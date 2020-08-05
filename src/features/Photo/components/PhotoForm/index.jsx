import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Spinner } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { Formik, FastField, Form } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectedField from 'custom-fields/SelectedField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import * as Yup from 'yup';
// import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';




PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  // npm i --save react-select
  const { initialValues, isAddMode } = props;

  // const initialValues = {
  //   title: '',
  //   categoryId: null,
  //   photo: '',
  // };

  const validationSchema =Yup.object().shape({
    title:Yup.string().required('This field is required.'),
    categoryId:Yup.number().required('This field is required.').nullable(),
    photo:Yup.string().when('categoryId',{
      is:1,
      then:Yup.string().required('this field is required.'),
      otherwise:Yup.string().notRequired()
    })
  });
  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {formikProps=>{
         const {values,errors,touched, isSubmitting}=formikProps;

         return (
        <Form>
          <FastField
            name="title"
            component={InputField}

            label="Title"
            placeholder="Eg:Wow nature..."
          />
           

           <FastField
            name="categoryId"
            component={SelectedField}

            label="Category"
            placeholder="What's your photo category"
            options={PHOTO_CATEGORY_OPTIONS}
          />
          
          <FastField
            name="photo"
            component={RandomPhotoField}
            label="Photo"
          />
    
          <FormGroup>
            <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                  {isSubmitting && <Spinner size="sm" />}
                  {isAddMode ? 'Add to album' : 'Update your photo'}
            </Button>
          </FormGroup>
        </Form>
         )
      }}
    </Formik>
  );
}

export default PhotoForm;