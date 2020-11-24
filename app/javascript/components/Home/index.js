import React, { Component } from 'react'

const Home = () => {
  return(
    <div>
      <section className="home-section">       
        <div className="landing-row">
          <div className="head-container">
            <div className="heading">
              <p> Resume Generator - Build a Perfect Resume (5min)</p>                                
              <a href="/new-resume" className="landing-btn">
                  Create My Resume
              </a>
              <p className="offer">100% free | Easy To Use</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;