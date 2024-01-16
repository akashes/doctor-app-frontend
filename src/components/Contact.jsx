import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'

function Contact() {
  return (
    <div className='container'>
    <h1 className='text-center fw-bold m-5'>Contact Us</h1>

    <p className='text-center'>
      If you have any questions, feedback, or need assistance, please feel free to reach out to our support team. We are here to help you!
    </p>

    <ul style={{listStyle:'none'}} className='text-center'>
      <li>Email: <span className='text-secondary fw-bold fs-5'>support@doctorappointmentwebsite.com</span></li>
      <li > Phone:  <span  className='text-secondary fw-bold fs-5'> +1 (123) 456-7890 </span></li>
    </ul>

    <p className='text-center'>
      Our office is located at 123 Health Street, Medicatown, USA. Feel free to drop by during our office hours for in-person assistance.
    </p>

   
<div className="container rounded border m-5 shadow p-5">
    
<h4 className='text-center' >Get latest updates from us</h4>
  <div>
  <p className='text-center'>
  Subscribe to get latest updates via Email
      
    </p>
    <form  className='d-flex input-group w-50 mx-auto'>
            <input  type='search' className='form-control border-secondary ' style={{outline:'none'}} placeholder='Enter your Email' aria-label='Search' />
            <MDBBtn className='bg-warning' style={{backgroundColor:'lightSeaGreen',color:'black',border:'none',boxShadow:'none'}}>Subscribe</MDBBtn>
          </form>
  </div>
    

    <p className='text-center mt-2'>
      We appreciate your interest and look forward to assisting you with your healthcare needs.
    </p>
</div>
  </div>
  )
}

export default Contact
