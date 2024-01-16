import React from 'react'
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';

function About() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div className='container d-flex align-items-center justify-content-center flex-column ' style={{height:'80vh'}}>
      <h1 style={{color:'#033c73'}} className='text-center  fw-bold m-3'  >Our Mission</h1>
      <p style={{textAlign:'justify'}} className='m-3'>
        
Welcome to our Doctor Appointment Website, a cutting-edge platform designed to revolutionize your healthcare experience. Established in 2021, our website was created with the vision of providing a seamless and user-friendly solution for scheduling medical appointments. Committed to enhancing accessibility to healthcare services, our platform allows users to easily connect with a diverse range of healthcare specialists. Whether you're seeking a primary care physician, a specialist, or any other healthcare professional, our website streamlines the appointment booking process, ensuring that you have timely access to the care you need. We pride ourselves on offering a secure and intuitive platform that provides detailed information about each doctor, including reviews and ratings, empowering you to make informed decisions about your healthcare. At the core of our mission is a dedication to facilitating a transparent and efficient healthcare journey for every user. Experience the future of healthcare management with our Doctor Appointment Website.
Welcome to our Doctor Appointment Website, a cutting-edge platform designed to revolutionize your healthcare experience. Established in 2021, our website was created with the vision of providing a seamless and user-friendly solution for scheduling medical appointments. Committed to enhancing accessibility to healthcare services, our platform allows users to easily connect with a diverse range of healthcare specialists. Whether you're seeking a primary care physician, a specialist, or any other healthcare professional, our website streamlines the appointment booking process, ensuring that you have timely access to the care you need. We pride ourselves on offering a secure and intuitive platform that provides detailed information about each doctor, including reviews and ratings, empowering you to make informed decisions about your healthcare. At the core of our mission is a dedication to facilitating a transparent and efficient healthcare journey for every user. Experience the future of healthcare management with our Doctor Appointment Website.
      </p>
   
      <MDBBtn className='m-3 text-center text-white border-0'style={{backgroundColor:'#033c73'}} onClick={toggleOpen}>Services we Offer</MDBBtn>
      <MDBCollapse open={isOpen}>
       <ul  className='m-3'>
        <li>Easy appointment scheduling with a variety of healthcare specialists.</li>
        <li>Access to detailed information about doctors, including reviews and ratings.</li>
        <li>Secure and user-friendly platform for managing your medical appointments.</li>
      </ul>
       
      </MDBCollapse>

      
    </div>
  )
}

export default About
