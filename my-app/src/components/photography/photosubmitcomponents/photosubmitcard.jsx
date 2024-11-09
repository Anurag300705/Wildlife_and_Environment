

import React, { useState } from 'react';
import './photosubmitcard.css';

const Card = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileNames = files.map(file => file.name).join(', ');
    alert(`
      Name: ${name}, 
      Email: ${email}, 
      Files: ${fileNames || 'None'}`);
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="card-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Upload Photos:</label>
          <input
            type="file"
            id="file"
            accept=".jpg"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Card;
