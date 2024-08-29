import { useState, Suspense } from "react"

import './App.css'

import { Canvas , useFrame} from '@react-three/fiber'
import { Environment, OrbitControls ,PerspectiveCamera} from "@react-three/drei"

// Assume Scene and Z are components you have already defined to render your 3D models
import Scene from '../docs/Scene'
import D from '../docs/D'

function App() {
    const [count, setCount] = useState(0);
  
    return (
        
       <div className="app-container">
            <nav className="app-nav">
            <ul>
                <li><a href="#About the Architect">About Me</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            </nav>
  
        <div id="About the Architect" className="about-architect">
          <h2>About the Architect</h2>
          <div className="about-architect-content">
            <img src="react-3d-model/docs/i.jpeg" alt="Architect" className="architect-photo" />
            <div className="architect-bio">
              <p><strong>Name:</strong> Your Name</p>
              <p><strong>Experience:</strong> 10+ years in architectural design and project management</p>
              <p><strong>Specialization:</strong> Sustainable architecture, urban planning, and modern residential design</p>
              <p><strong>Biography:</strong> Brief biography describing your background, education, notable projects, and any awards or recognitions you have received. Highlight your philosophy and approach to architectural design.</p>
            </div>
          </div>
        </div>
  
        <div id ="portfolio" className="portfolio">
          <h2>Portfolio</h2>
  
          <div className="portfolio-item">
            <h3 id ="projects">Project 1: Modern House</h3>
            <div  className="f">
                <div className="model-info">
                <p><strong>Description:</strong> This model showcases a modern house designed with sustainability and minimalism in mind. It features open spaces, large windows, and a blend of natural and industrial materials.</p>
                
                <video controls className="project-video">
                    <source src="path_to_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
                
                <div className="model-viewer">
                <Canvas>
                    <ambientLight />
                    <OrbitControls />
                    <Suspense fallback={null}>
                    <Scene />
                    </Suspense>
                </Canvas>
                </div>
            </div>
          </div>
  
          <div className="portfolio-item">
            <h3>Project 2: Futuristic Skyscraper</h3>
                <div className="f">
                    <div className="model-info">
                    <p><strong>Description:</strong> The Z Model represents a futuristic skyscraper with intricate details and textures. It is designed to showcase modern design capabilities and rendering techniques.</p>
                    
                    <video controls className="project-video">
                        <source src="path_to_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    <div className="model-viewer">
                    <Canvas>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <pointLight position={[-5, -5, -5]} intensity={0.5} />
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                        <OrbitControls />
                        <Suspense fallback={null}>
                        <D />
                        </Suspense>
                        <Environment preset='sunset' />
                    </Canvas>
                    </div>
                </div>
          </div>
  
          {/* Add more portfolio items as needed */}
        </div>
  
       
  
        <div id="Contact" className="contact">
          <h2>Contact</h2>
          <p><strong>Email:</strong> your.email@example.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Address:</strong> 1234 Main St, Anytown, Country</p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
            {/* Add more social media links as needed */}
          </div>
        </div>
  
        <footer className="app-footer">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  export default App;