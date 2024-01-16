import React, { useEffect } from 'react'
import { Button,Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';


function Review({reviews}) {
    console.log(reviews);
    const[review,setReview]=useState([])
    useEffect(()=>{
        setReview(reviews)
    })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
         <Button variant="primary" onClick={handleShow} className="me-2">
            Check Reviews
        
      </Button>
      <Offcanvas placement='end' show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-warning fw-bold fs-4 ms-5 d-grid'>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {
                review?
                review.map((ele)=>{
                    return(
                        <MDBCard className='my-5' alignment='center'>
      <MDBCardHeader>{ele.patient_name}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{ele.rating} <i class=' fa fa-star text-warning'></i> </MDBCardTitle>
        <MDBCardText>{ele.comments}</MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>{ele.date}</MDBCardFooter>
    </MDBCard>

                    )
                }) : <p>nothing</p>

            }
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Review
