import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Container,Pagination } from 'reactstrap';
import Banner from 'components/Banner';
import Images from 'constants/images';
import { useSelector, useDispatch } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto, getData } from 'features/Photo/photoSlice';
import { useEffect } from 'react';
import axiosClient from 'api/axiosClient';
import photosApi from 'api/api-photos';
import PaginationPhotos from 'features/Photo/components/PaginationPhotos';
import { setCurrent } from 'features/paginationSlice';
// import axios from 'axios';
// import queryString from 'query-string';

MainPage.propTypes = {};

function MainPage(props) {
  const photos=useSelector(state=>state.photos);
  const pagination=useSelector(state=>state.pagination);
  const {_current,_limit}=pagination;
  const dispatch=useDispatch();
  const history = useHistory();
  
  const startPhoto=(_current-1)*_limit;
  const endPhoto=_current*_limit;
  const currentPhotos=photos.slice(startPhoto,endPhoto);


  const handlePhotoEditClick = (photo) => {
    // console.log('Edit: ', photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  }

  const handlePageChange  = (newPage) =>{
    const action = setCurrent(newPage);
    dispatch(action);
  }

  const handlePhotoRemoveClick = (photo) => {
    console.log('Remove: ', photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  }

  useEffect( () => {
    const getPhotos =  async  () => {
      try {
        const response= await photosApi.getAll();
        const action = getData(response.data);
        dispatch(action);
      } catch (error) {
        console.error(error);
      }
    }
    getPhotos();
  },[]);
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
      
      <Container className="text-center">
        
        <div className="py-5">
            <Link to="/photos/add">Add new photo</Link>
        </div>
        <PaginationPhotos totalPhotos={photos.length} limit={_limit} current={_current} pageChange={handlePageChange}/>
        <PhotoList
          photoList={currentPhotos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
        
      </Container>
    </div>
  );
}

export default MainPage;