import React from 'react'
import Hero from './Hero'
import './Home.css'
import {Row,Col} from 'react-bootstrap'
import image from '../assets/image4.jpg'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  return (
    <div>
      <Hero/>
      <div className="container p-5 w-100">
      <Row style={{width:'100vw'}} className='d-flex justify-between-around '>
      <Col className='d-flex flex-column justify-content-center align-items-center'  sm={12} md={6} lg={6} xl={6}>


      
      <h1 className='heading' >Making HealthCare Acessible</h1>
      <h2 className='heading '>To All</h2>
<p className='ms-5 ps-1 mt-3'>Effortlessly manage your health with our intuitive doctor appointment app, ensuring timely consultations and personalized care for your well-being.</p></Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <img height={400} width={400}  className=' main-img  rounded shadow ' src={image} alt="" />



          </Col>
        </Row>
      </div>
      <div className="container text-center mb-5">
      <MDBBtn onClick={()=>(navigate('/doctor'))}  className='mx-2 shadow ' color='warning '>
        Find Doctor
      </MDBBtn>

      </div>
    </div>
  )
}

export default Home
