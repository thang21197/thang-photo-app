import React from 'react';
import './styles.scss';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { randomNumber } from 'utils/common';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch=useDispatch();
  const history=useHistory();
  const {photoId}= useParams();
  const isAddMode = !photoId;

  const editedPhoto = useSelector(state =>{
    const foundPhoto = state.photos.find(x => x.id === photoId);
    // console.log({ photos: state.photos, photoId, foundPhoto });
    return foundPhoto;
  });
 
  // console.log(isAddMode);
  const initialValues = isAddMode ?{
  title: '',
  categoryId: null,
  photo: '',}: editedPhoto;

  const handleOnsubmit= (values) =>{
     return new Promise(resolve =>{
       setTimeout(()=>{
        //  const action = addPhoto(values);
        //  dispatch(action);

        //  history.push('/photos');
        if(isAddMode){
          const newPhoto = {
            ...values,
            id: randomNumber(10000, 99999),
          }
          const action = addPhoto(newPhoto);
          console.log({ action });
          dispatch(action);
        }else{
          const action = updatePhoto(values);
          dispatch(action);
        }
          history.push('/photos');
         resolve(true);
       },2000);
     });
  }
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm 
        isAddMode={isAddMode}
        initialValues={initialValues}
        onSubmit={handleOnsubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;