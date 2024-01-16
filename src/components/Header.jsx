import React from 'react'
import './header.css'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';
  import { useState } from 'react';
  import image from '../assets/unnamed.png'
  import { useNavigate } from 'react-router-dom';

function Header() {
    const [openBasic, setOpenBasic] = useState(false);
    const navigate=useNavigate()

  return (
    <div className='mb-2'  style={{backgroundColor:'#1eab95'}}>
           <MDBNavbar style={{height:'100px'}} expand='lg' light bgColor=''>
      <MDBContainer fluid>
        <MDBNavbarBrand className='ms-5' >
            <img src={image} alt="" height={90} width={90} />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink style={{color:'#033c73'}} onClick={()=>navigate('/')} className='fw-bold fs-5 m-2 nav' active aria-current='page' >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={()=>navigate('/about')}  style={{color:'#033c73'}} className='fw-bold fs-5 m-2 nav ' >About</MDBNavbarLink>
            </MDBNavbarItem>

           

            <MDBNavbarItem>
              <MDBNavbarLink  className='fw-bold fs-5 m-2 nav 'style={{color:'#033c73'}}  onClick={()=>navigate('/contact')}>
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form   className='d-flex input-group w-auto me-5'>
            <input  type='search' className='form-control' style={{outline:'none',border:'none'}} placeholder='Search Doctor' aria-label='Search' />
            <MDBBtn className='bg-warning' style={{backgroundColor:'lightSeaGreen',color:'black',border:'none',boxShadow:'none'}}>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

      
    </div>
  )
}

export default Header
