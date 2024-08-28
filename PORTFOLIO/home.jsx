import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
importA from './Project1';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="container">
            <nav className="navbar">
              <Link to="/">Home</Link>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project1" component={Project1} />
        </Switch>

        <footer>
          <div className="container">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <section id="home" className="hero">
        <h1>Welcome to My Portfolio</h1>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <p>I am a passionate architect with a love for designing innovative and sustainable structures. With years of experience in the field, I have worked on a variety of projects ranging from residential to commercial buildings.</p>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects">
            <div className="project">
              <img src="path/to/your/project1.jpg" alt="Project 1" />
              <h3>Project Title 1</h3>
              <p>Description of the project goes here.</p>
              <Link to="/project1"><button>View 3D Model</button></Link>
            </div>
            <div className="project">
              <img src="path/to/your/project2.jpg" alt="Project 2" />
              <h3>Project Title 2</h3>
              <p>Description of the project goes here.</p>
            </div>
            <div className="project">
              <img src="path/to/your/project3.jpg" alt="Project 3" />
              <h3>Project Title 3</h3>
              <p>Description of the project goes here.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2>Contact Me</h2>
          <div className="contact-form">
            <form action="submit_form.php" method="post">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
