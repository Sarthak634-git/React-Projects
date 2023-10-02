import React from 'react'

export default function P2() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            <img src="logo192.png" width={30} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 className="">Reason I am Exited to learn raect</h1>
      <ol>
        <li>It is a popular library</li>
        <li>I'm more likely to get a job as a developer</li>
      </ol>
      <footer>
        <small className="">&copy; Copyright 2023 - SarthakThapa</small>
      </footer>
    </div>
  );
}
