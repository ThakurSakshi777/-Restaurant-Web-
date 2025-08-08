import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <>
      <section className='notFound'>
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1> LOOKS LIKE YOU'RE </h1>
          {/* <P> we can't seem to find you the page you're looking for</P> */}
          <Link to ={"/"}>
          Back to Home
          <span>
            <HiOutlineArrowCircleRight/>
          </span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound