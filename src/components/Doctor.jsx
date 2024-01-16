import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './doctor.css'


function Doctor() {
    const base_url='https://doctorappbackend-l01w.onrender.com/doctors'
    const[docDetail,setDocDetail]=useState([])

    const getData=async()=>{
        const {data} = await axios.get(base_url)
        console.log(data);
        setDocDetail(data)
        

    }
    const navigate=useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    useEffect(()=>{
        getData()

    },[])
  return (
    <div>

<Row className='my-5 mx-3'>
{
            docDetail ? 
            docDetail.map((doc)=>{
                console.log(doc.id);
                return(
                   <Col sm={12} md={6} lg={4} xl={3} className='p-3'  >
                    <MDBCard className='doc-card'   alignment='center'>
                    <MDBCardHeader className='fw-bold fs-4' style={{color:'#033c73'}}>{doc.name}</MDBCardHeader>
                    <MDBCardBody>
                      <MDBCardTitle className='text-danger'>{doc.specialty}</MDBCardTitle>
                      <MDBCardText>
                        <p>{doc.hospital}</p>
                        <p>{doc.address}</p>
                      </MDBCardText>
                      <MDBBtn onClick={()=>navigate(`/view/${doc.id}`)} style={{color:'#033c73', backgroundColor:'white',boxShadow:'none' ,fontWeight:'bold' }} >Details</MDBBtn>
                    </MDBCardBody>
                    <MDBCardFooter className='d-flex flex-column'>

                       <p>
                       {
                            doc.available_days.map((ele)=>{
                                return(
                                    <span>{ele} | </span>
                                )
                            
                            })
                        }
                       </p>
                        <p>
                        <buttonn style={{color:'white', backgroundColor:'#033c73'}} className=' p-2 rounded   ' onClick={toggleOpen}>Available Hours</buttonn>
      <MDBCollapse className='mt-2' open={isOpen}>
        {doc.available_hours}
       
      </MDBCollapse>           
                   </p>
      <p>
        {doc.rating} <i class="fa fa-star" aria-hidden="true"></i>
 </p>
                        

                    </MDBCardFooter>
                  </MDBCard>
                   </Col>

                )
            }) : <p>noting</p>
        }
      
</Row>
    </div>
  )
}

export default Doctor
