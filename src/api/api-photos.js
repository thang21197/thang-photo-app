import axiosClient from './axiosClient';

const photosApi= {
    getAll: (params) => {
        const url = '/photos';
        return axiosClient.get(url,{params});
    } 
}

export default photosApi;