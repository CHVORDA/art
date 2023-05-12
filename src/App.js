// App.js
import React, { useState } from 'react';
import './App.css';
import image0 from './vermeer.jpg';
import image1 from './botticelli.jpg';
import image2 from './vanGogh.jpg';
import image3 from './whistler.jpg';
import image4 from './vanEyck.jpg';
import image5 from './bosch.jpg';
import image6 from './picasso.jpg';
import image7 from './seurat.jpg';
import image8 from './klimt.jpg';
import image9 from './rembrandt.jpg';

function App() {
  const [page, setPage] = useState('index');

  const navigateTo = (newPage) => {
    setPage(newPage);
  };

  let content = null;

  switch (page) {
    case 'index':
      content = <IndexPage navigateTo={navigateTo} />;
      break;
    case 'gallery':
      content = <GalleryPage />;
      break;
    case 'contact':
      content = <ContactPage />;
      break;
    default:
      content = <div>Page not found.</div>;
  }

  return (
    <div>
      <Navbar navigateTo={navigateTo} />
      {content}
    </div>
  );
}

function Navbar({ navigateTo }) {
  return (
    <nav>
        <button onClick={() => navigateTo('index')}>Home</button>
        <button onClick={() => navigateTo('gallery')}>Gallery</button>
        <button onClick={() => navigateTo('contact')}>Contact</button>
    </nav>
  );
}

function IndexPage({ navigateTo }) {
  return (
    <div className="home">
      <h1>Welcome to the captivating world of art!</h1>
      <p>
      Art has the power to inspire, provoke, and touch our souls. It is a universal language that 
      transcends boundaries and communicates emotions and ideas like no other. Whether it's a stunning 
      painting, a breathtaking sculpture, or a mesmerizing photograph, art has the ability to transport 
      us to different realms and evoke a myriad of emotions.
      </p>
      <p>
        Check out <a onClick={() => navigateTo('gallery')}>gallery</a> to see our collection.
      </p>
    </div>
  );
}

function GalleryPage() {
  const images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  return (
    <div className="gallery_container">
      <h1>Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions, inquiries, or feedback, we'd love to hear from you. Please feel 
        free to reach out to us using the contact information provided below:</p>
        <ul>
          <li><a href="#">Email: info@examplegallery.com</a></li>
          <li>Phone: +1-123-456-789</li>
        </ul>
    </div>
  );
}

export default App;
