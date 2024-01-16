import React from 'react'
import './footer.css'

function Footer() {
  return (
   <div className='main-container p-3'>
    <div className=" footer-container d-flex justify-content-around  ">

<div className='first-container'>
    <h4 className='footer-header'> For Doctor             <i class="fa-solid fa-stethoscope"></i>
</h4>
    <p>a cutting-edge platform designed to revolutionize your healthcare experience. Established in 2021, our website was created with the vision of providing a seamless and user-friendly solution for scheduling medical appointments. Committed to enhancing accessibility to healthcare services, our platform allows users to easily connect with a diverse range of healthcare specialists.  </p>
</div>
<div>
    <h5 className='footer-header'>Patient Essentials</h5>
    <p>Checkups availabe</p>
    <p>MultiSpeciality</p>
    <p>Frequently asked Questions</p>
    
</div>
<div>
    <h5 className='footer-header'>MultiSpeciality</h5>
    <p>Doctor's Details</p>
    <p>Doctor availabilities</p>
    <p>Monthly checkup Plans</p>
</div>
<div>
    <h5 className='footer-header'>Contact</h5>
    <p>
        For Doctor . Kochi
        email:forDoctorKochi@gmail.com
        ph:+91 14234-4435-3245
        ph:+91 45234-3452-3424
    </p>
</div>
</div>
<p className='text-center text-dark fw-bold copyright'>© 2024 Copyright : ForDoctor.com </p>

   </div>
   
  )
}

export default Footer
