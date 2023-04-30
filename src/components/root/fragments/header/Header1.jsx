import React from "react";
import styles from "../../../../css/Header.module.css";
import Navbar from "./navbar/Navbar";
import Logo from "./logo/Logo";
// import "../../../../edubuzz/css/bootstrap.min.css"
// import "../../../../edubuzz/css/material-design-iconic-font.min.css"




const Header1 = () => {
  return (

      <header>
          <div className="header-top">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-7 col-md-6 col-12">
                          <span>Have any question? +968 547856 254</span>
                      </div>
                      <div className="col-lg-5 col-md-6 col-12">
                          <div className="header-top-right">
                              <span>Phone: +85 4856 5478</span>
                              <span>Email: info@example.com</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="header-logo-menu sticker">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3 col-12">
                          <div className="logo">
                              <a href="index.html"><img src="img/logo/logo.png" alt="EDUCAT"></img></a>
                          </div>
                      </div>
                      <div className="col-lg-9 col-12">
                          <div className="mainmenu-area pull-right">
                              <div className="mainmenu d-none d-lg-block">
                                  <nav>
                                      <ul id="nav">
                                          <li className="current"><a href="index.html">Home</a>
                                              <ul className="sub-menu">
                                                  <li><a href="index.html">Home Version 1</a></li>
                                                  <li><a href="index-2.html">Home Version 2</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="about.html">About</a></li>
                                          <li><a href="gallery.html">Gallery</a>
                                              <ul className="sub-menu">
                                                  <li><a href="gallery.html">Gallery</a></li>
                                                  <li><a href="gallery-2.html">Gallery Filtaring</a></li>
                                                  <li><a href="gallery-four-column.html">Gallery Four Column</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="course.html">Courses</a>
                                              <ul className="sub-menu">
                                                  <li><a href="courses-details.html">Courses Details</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="#">Features</a>
                                              <ul className="sub-menu">
                                                  <li><a href="#">Blog<i className="zmdi zmdi-chevron-right"></i></a>
                                                      <ul className="inside-menu">
                                                          <li><a href="blog.html">Blog</a></li>
                                                          <li><a href="blog-details.html">Blog Details</a></li>
                                                          <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                                                          </li>
                                                          <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                                                      </ul>
                                                  </li>
                                                  <li><a href="#">Shop<i className="zmdi zmdi-chevron-right"></i></a>
                                                      <ul className="inside-menu">
                                                          <li><a href="shop.html">Shop</a></li>
                                                          <li><a href="single-product.html">Single Product</a></li>
                                                          <li><a href="cart.html">Shopping Cart</a></li>
                                                          <li><a href="wishlist.html">Wishlist</a></li>
                                                          <li><a href="checkout.html">Checkout</a></li>
                                                          <li><a href="login-register.html">Login - Register</a></li>
                                                      </ul>
                                                  </li>
                                              </ul>
                                          </li>
                                          <li><a href="index.html">Pages</a>
                                              <ul className="sub-menu">
                                                  <li><a href="team-details.html">Team Details</a></li>
                                                  <li><a href="course.html">Courses Page</a></li>
                                                  <li><a href="courses-details.html">Course Details Page</a></li>
                                                  <li><a href="event.html">Event Page</a></li>
                                                  <li><a href="event-details.html">Event Details Page</a></li>
                                                  <li><a href="blog.html">Blog</a></li>
                                                  <li><a href="blog-details.html">Blog Details Page</a></li>
                                                  <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                  <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                                                  <li><a href="wishlist.html">Wishlist Page</a></li>
                                                  <li><a href="checkout.html">Checkout Page</a></li>
                                                  <li><a href="cart.html">Shopping Cart Page</a></li>
                                                  <li><a href="login-register.html">Login Page</a></li>
                                                  <li><a href="contact.html">Contact</a></li>
                                                  <li><a href="404.html">404 Error</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="shop.html">Shop</a>
                                              <ul className="sub-menu">
                                                  <li><a href="single-product.html">Single Product Page</a></li>
                                              </ul>
                                          </li>
                                          <li><a href="contact.html">Contact</a></li>
                                      </ul>
                                  </nav>
                              </div>
                              <ul className="header-search">
                                  <li className="search-menu">
                                      <i id="toggle-search" className="zmdi zmdi-search"></i>
                                  </li>
                              </ul>
                              <div className="search">
                                  <div className="search-form">
                                      <form id="search-form" action="#">
                                          <input type="search" placeholder="Search here..." name="search"/>
                                          <button type="submit">
                                              <span><i className="fa fa-search"></i></span>
                                          </button>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="mobile-menu-area">
              <div className="container clearfix">
                  <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="mobile-menu">
                              <nav id="dropdown">
                                  <ul>
                                      <li><a href="index.html">HOME</a>
                                          <ul>
                                              <li><a href="index.html">Home Version 1</a></li>
                                              <li><a href="index-2.html">Home Version 1</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="gallery.html">Gallery</a>
                                          <ul>
                                              <li><a href="gallery.html">Gallery</a></li>
                                              <li><a href="gallery-2.html">Gallery Filtaring</a></li>
                                              <li><a href="gallery-four-column.html">Gallery Four Column</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="team-details.html">Team Details</a></li>
                                      <li><a href="course.html">Courses</a>
                                          <ul className="sub-menu">
                                              <li><a href="courses-details.html">Courses Details</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="shop.html">Shop</a>
                                          <ul className="sub-menu">
                                              <li><a href="single-product.html">Single Product</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="event.html">Event</a>
                                          <ul className="sub-menu">
                                              <li><a href="event-details.html">Event Details</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="blog.html">Blog</a>
                                          <ul className="sub-menu">
                                              <li><a href="blog-details.html">Blog Details</a></li>
                                              <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                              <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="contact.html">Pages</a>
                                          <ul>
                                              <li><a href="team-details.html">Team Details</a></li>
                                              <li><a href="course.html">Courses Page</a></li>
                                              <li><a href="courses-details.html">Course Details Page</a></li>
                                              <li><a href="event.html">Event Page</a></li>
                                              <li><a href="event-details.html">Event Details Page</a></li>
                                              <li><a href="blog.html">Blog</a></li>
                                              <li><a href="blog-details.html">Blog Details Page</a></li>
                                              <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                              <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                                              <li><a href="wishlist.html">Wishlist Page</a></li>
                                              <li><a href="checkout.html">Checkout Page</a></li>
                                              <li><a href="cart.html">Shopping Cart Page</a></li>
                                              <li><a href="login-register.html">Login Page</a></li>
                                              <li><a href="contact.html">Contact</a></li>
                                              <li><a href="404.html">404 Error</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="contact.html">Contact us</a></li>
                                  </ul>
                              </nav>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
  );
};

export default Header1;
