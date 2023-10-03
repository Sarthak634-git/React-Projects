// import React from 'react'

// export default function P2() {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
//         <div class="container-fluid ">
//           <a class="navbar-brand" href="#">
//             <img src="logo192.png" width={30} />
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul class="navbar-nav">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">
//                   Pricing
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   About
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <h1 className="">Reason I am Exited to learn raect</h1>
//       <ol>
//         <li>It is a popular library</li>
//         <li>I'm more likely to get a job as a developer</li>
//       </ol>
//       <footer>
//         <small className="">&copy; Copyright 2023 - SarthakThapa</small>
//       </footer>
//     </div>
//   );
// }

// without the use of bootstrap==========================================================================

import React from 'react'
import './Project1.css'


export default function Project1() {
  return (
    <div>
      <nav>
        <img src="logo192.png" className="nav--icon" />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
      <main>
        <h1 className='main--title'>Fun facts about React</h1>
        <ul className='main--facts'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </div>
  );
}


