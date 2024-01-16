import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import image from '../assets/docImage.png'
import { Row,Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBPopover,
    MDBPopoverBody,
    MDBPopoverHeader
  } from 'mdb-react-ui-kit';
import Review from './Review';
function ViewCard() {
    const[cardData,setCardData]=useState()
    const base_url='https://doctorappbackend-l01w.onrender.com/doctors'
    const {id}=useParams()
    console.log(id);

    const fetchData=async()=>{
        const {data}=await axios.get(`${base_url}/${id}`)
        console.log(data);
        setCardData(data)
    }

    useEffect(()=>{
        fetchData()

    },[])
  return (
    <div>
        {
            cardData?(
            <Row className='mx-5 p-5 bg-light rounded shadow'>
            <Col sm={12} md={6} lg={6} xl={6} >
            <img style={{width:'100%',height:'700px'}} src={image} alt="" />
            </Col>
            <Col className='mt-5' sm={12} md={6} lg={4} xl={3}>
            <MDBCard style={{height:'500px',width:'500px'}} alignment='center'>
      <MDBCardHeader className='fs-3 fw-bold'>{cardData.name}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle className='text-danger fw-bold'>{cardData.specialty}</MDBCardTitle>
        <MDBCardText>
            <p>{cardData.hospital}</p>
            <p>{cardData.address}</p>
            <p className='mt-5 '> <MDBPopover size='sm' color='danger' btnChildren='Check Availability'>
      <MDBPopoverHeader>        <p> { cardData.available_days.map((day)=>( <p className='text-center'>{day}</p> ))}</p>
</MDBPopoverHeader>
      <MDBPopoverBody>
        <p className='fw-bold'> Timings : { cardData.available_hours}</p>
      </MDBPopoverBody>
    </MDBPopover></p>
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>
        <Review reviews={cardData.reviews} />
      </MDBCardFooter>
    </MDBCard>
          
            </Col>
          </Row>
          ) : <p>nothing</p>
        }
    </div>
  )
}

export default ViewCard
