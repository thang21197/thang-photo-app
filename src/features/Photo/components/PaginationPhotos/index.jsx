import React, { useEffect } from 'react';
import {Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

PaginationPhotos.propTypes = {
  totalPhotos:PropTypes.number,
  limit:PropTypes.number,
  current:PropTypes.number,
  pageChange:PropTypes.func
};

PaginationPhotos.defaultProps = {
  totalPhotos: null,
  limit: null,
  current: null,
  pageChange:null,
}


function PaginationPhotos(props) {
    const {totalPhotos,limit,current,pageChange}=props;
    const pageNumber=[];
    for (let index = 1; index <= Math.ceil(totalPhotos/limit); index++) {
      pageNumber.push(index);
    }
   
    const handlePageChange  = (e,value) =>{
      e.preventDefault();
      pageChange(value);
    }
    return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem >
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      {
        pageNumber.map(value => {
          if(value==current){
            return(
              <PaginationItem  active >
              <PaginationLink href="#">
                {value}
              </PaginationLink>
            </PaginationItem>
            )
          }
          return (
            <PaginationItem >
              <PaginationLink href="#"  onClick={(e)=>handlePageChange(e,value)}>
                {value}
              </PaginationLink>
            </PaginationItem>
          )
        })
      }
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
    );
}

export default PaginationPhotos;