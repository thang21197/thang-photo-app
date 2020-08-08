import {createSlice} from '@reduxjs/toolkit';

const initialPhotos=[];

const photo = createSlice({
    name:'photos',
    initialState:initialPhotos,
    reducers:{
        getData:(state,action)=>{
        //   console.log(action.payload);
          return action.payload;
        },
        addPhoto: (state, action) =>{
            state.push(action.payload)
        },
        removePhoto:(state, action) =>{
            const removePhotoId = action.payload;
            return state.filter(photo => photo.id !== removePhotoId);
        },
        updatePhoto:(state,action)=>{
            const newPhoto=action.payload;
            console.log(newPhoto.id);
            const photoIndex=state.findIndex(photo => photo.id === newPhoto.id);

            if(photoIndex >=0){
                state[photoIndex]=newPhoto;
            }
        }
    }
})



const {reducer, actions} = photo;
export const {addPhoto,removePhoto,updatePhoto,getData} = actions;
export default reducer;