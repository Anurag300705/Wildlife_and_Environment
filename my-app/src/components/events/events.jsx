// src/components/EventCard.jsx
import Profilepic from './pic.jpg'
import './events.css'


function EventCard() {
  return (
    <>
        <div className="event-card">
          <h3>Event Name</h3>
          <img className="event-image" src={Profilepic} alt="Event" />
          <div className="event-details">
            <p>From 26.05.2024 to 28.05.2024</p>
            <p>Every day: 9 am to 12 noon</p>
            <button className="register-btn">Register</button>
          </div>
        </div>
    </>
  )
};


export default EventCard;
