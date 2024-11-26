"use client"
import './globals.css'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '../assets/css/main.css'
import {sendmail} from './mail'

// <!-- {/* Vendor CSS Files */} -->
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"

import "../assets/vendor/aos/aos.css"
import "../assets/vendor/glightbox/css/glightbox.min.css"
import "../assets/vendor/swiper/swiper-bundle.min.css"


import image4 from '../assets/img/hero-img.png'
import image5 from '../assets/img/logo.png'
import image6 from '../assets/img/about.jpg'

import aos from 'aos';
import Card from '../components/Card';
import { deliveryModels,engagementModels,coreServices,specializedServices } from '../components/dataItems.js';

import {
  ArrowRight,
 
} from 'lucide-react';

function TechPivotLanding() {



  useEffect(()=>{

    aos.init();
  },[])

  const[errormsg,seterrormsg]=useState("");
  const[successmsg,setsuccessmsg]=useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  const handleSubmit=(e)=>{

    e.preventDefault();
    let error=false;
    if(e.target.name.value.trim() < 4)
    {
      error=true;
      seterrormsg("Enter Valid Name!");
    }
    else if(!validateEmail(e.target.email.value.trim()))
    {
      error=true;
      seterrormsg("Enter Valid Email!");
    }
    else if(e.target.number.value.trim().length !== 10)
    {
      error=true;
      seterrormsg("Enter Valid Number!");
    }
    else if(e.target.message.value.trim().length  < 4)
    {
      error=true;
      seterrormsg("Enter Valid Message!");
    }
    
    if(error===false)
    {
      setsuccessmsg(true);
      setTimeout(() => {

        setsuccessmsg(false);
        
      }, 3000);

      const name=e.target.name.value.trim();
      const email=e.target.email.value.trim();
      const message=e.target.message.value.trim()
      
      sendmail(name,email,message);

    }
    else{
      setTimeout(() => {

        seterrormsg("");
        
      }, 3000);
    }
    
    
  }

 

  

  return (

    <div>

      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="/" className="logo d-flex align-items-center me-auto" >
            {/* Uncomment the line below if you also wish to use an image logo */}
            <Image src={image5} alt="/"/> 
            <h1 className="sitename">Tech Pivot</h1>
          </a>
          <nav id="navmenu" className="navmenu" >
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                  <br />
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#delivery">Delivery</a>
              </li>

              <li>
                <a href="#engagement">Engagement</a>
              </li>
              
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <a className="btn-getstarted flex-md-shrink-0" href="/">
          +1 5589 55488 55
          </a>
        </div>
      </header>
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1 >
                Transform Your Technology Vision
                </h1>
                <p >
                Expert Fractional CTO services combining Enterprise Architecture, Gen AI, and modern delivery practices
                </p>
                <a href='https://calendly.com/saurabh-tech-pivot/30min' target='_blank'>Schedule Strategy Session <ArrowRight className="ml-2 h-5 w-5" /></a>
                
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-out"
              >
                <Image
                  src={image4}
                  className="img-fluid animated"
                  alt="error"
                  
                /> 
              </div>
            </div>
          </div>
        </section>
        {/* /Hero Section */}
        {/* About Section */}
        <section id="about" className="about section">
          <div className="container" >
            <div className="row gx-0">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
               
              >
                <div className="content">
                  <h3>Who We Are</h3>
                  <h2>
                    Expedita voluptas omnis cupiditate totam eveniet nobis sint
                    iste. Dolores est repellat corrupti reprehenderit.
                  </h2>
                  <p>
                    Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                    et. Inventore et et dolor consequatur itaque ut voluptate sed
                    et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                    corrupti.
                  </p>
                  <div className="text-center text-lg-start">
                    <a
                      href="#contact"
                      className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Contact Us</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 d-flex align-items-center"
                
              >
                <Image src={image6} className="img-fluid" alt="/" /> 
              </div>
            </div>
          </div>
        </section>
        {/* /About Section */}
        {/* Values Section */}
        
        {/* /Stats Section */}
        {/* Features Section */}
       
        {/* /Alt Features Section */}
        {/* Services Section */}
        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>
            Core Services
              <br />
            </p>
            <h4>Strategic technology leadership for modern enterprises</h4>
          </div>
          {/* End Section Title */}
          <div className="container" >
            <div className="row gy-4" style={{display:'flex',justifyContent:'center',gap:'2rem'}}>

                {
                   coreServices.map((item,i)=><Card service={item} key={i}/>)
                }
              
              {/* End Service Item */}
            </div>
          </div>

          <div className="container section-title" data-aos="fade-up">
            
            <p>
            Specialized Services
              <br />
            </p>
            <h4>Advanced capabilities in AI and Analytics</h4>
          </div>
          {/* End Section Title */}
          <div className="container" >
            <div className="row gy-4" style={{display:'flex',justifyContent:'center',gap:'2rem'}}>

                {
                   specializedServices.map((item,i)=><Card service={item} key={i}/>)
                }
              
              {/* End Service Item */}
            </div>
          </div>
        </section>

        <section id="delivery" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Delivery Excellence</h2>
           
            <h4>
            Modern delivery approaches ensuring successful outcomes
              <br />
            </h4>

            </div>

            <div className="container">

            <div className="row gy-4">

             {
                 deliveryModels.map((item,i)=> <Card service={item} key={i}/>)
             }

            </div>

            </div>
           
          </section>

          <section id="engagement" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Engagement Models</h2>
            <h4>
            Flexible partnership options tailored to your needs
              <br/>
            </h4>

            </div>

            <div className="container">

            <div className="row gy-4">

             {
                 engagementModels.map((item,i)=> <Card service={item} key={i}/>)
             }

            </div>

            </div>
           
          </section>
        {/* /Services Section */}
        {/* Pricing Section */}
        
        {/* /Pricing Section */}
        {/* Faq Section */}
       
        {/* /Portfolio Section */}
        {/* Testimonials Section */}
       
        {/* /Testimonials Section */}
        {/* Team Section */}
        
        {/* /Team Section */}
        {/* Clients Section */}
        
        {/* /Recent Posts Section */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                 
                  {/* End Info Item */}
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay={300}>
                      <i className="bi bi-telephone" />
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                      <p>+1 6678 254445 41</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay={400}>
                      <i className="bi bi-envelope" />
                      <h3>Email Us</h3>
                      <a href='mailto:saurabh@tech-pivot.com'>saurabh@tech-pivot.com</a>
                      
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay={500}>
                      <i className="bi bi-clock" />
                      <h3><a href='https://calendly.com/saurabh-tech-pivot/30min' target='_blank'>Schedule 30-Minute Consultation</a></h3>
                      
                    </div>
                  </div>
                  {/* End Info Item */}
                </div>
              </div>
              <div className="col-lg-6">
                <form
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  onSubmit={handleSubmit}
                  
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        
                      />
                    </div>
                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                       
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="Number"
                        className="form-control"
                        name="number"
                        placeholder="Your Mobile Number"
                       
                      />
                    </div>
                    
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12 text-center">
                    
                      {
                         successmsg?<div id="message" style={{color:'green',height:'30px'}}>Your message has been sent. Thank you!</div>:<div id="message" style={{color:'red',height:'30px'}}>{errormsg}</div>
                      }
                      
                      <button type="submit" >Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </main>
      <footer id="footer" className="footer">
        
       
        <div className="container copyright text-center mt-4">
          <p>
            © <span>2024</span>{" "}
            <strong className="px-1 sitename">Tech Pivot.</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
         
        </div>
      </footer>
      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>


    </div>



  );


}

export default TechPivotLanding;

