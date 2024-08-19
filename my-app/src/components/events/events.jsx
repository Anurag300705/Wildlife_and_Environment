// src/components/EventCard.jsx
import Profilepic from './pic.jpg'
import './events.css'


function EventCard() {
  return (
    <>
        <div className="event-card">
          <h3 className="eventname">Event Name</h3>
          <img className="event-image" src={Profilepic} alt="Event" />
          <div className="event-details">
            <h4 className="date">From 26.05.24 to 28.05.24</h4>
            <h5 className="time">Every day: 9 am to 12 noon</h5>
            <button className="register-btn">Register</button>
          </div>
        </div>
    </>
  )
};


export default EventCard;
