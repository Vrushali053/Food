import React from 'react'
import '../assets/Styles/Booktable.css'
import '../assets/Styles/aos.css'

function Booktable() {
  return (
    <section id="form" data-aos="fade-up">
    <div className="container">
      <h3 className="form__title">Book Table</h3>
      <div className="form__wrapper">
        <form name="booking" method="POST" netlify>
          <div className="form__group--half">
            <div className="form__group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="First Name" required />
            </div>
            <div className="form__group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="Last Name" required />
            </div>
          </div>
  
          <div className="form__group--half">
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="Email" required />
            </div>
            <div className="form__group">
              <label htmlFor="tableType">Table Type</label>
              <select name="Table Type" id="tableType" required>
                <option selected disabled>Choose</option>
                <option value="small">Small (2 persons)</option>
                <option value="medium">Medium (4 persons)</option>
                <option value="large">Large (6 persons)</option>
              </select>
            </div>
          </div>
  
          <div className="form__group--half">
            <div className="form__group">
              <label htmlFor="guestNumber">Guest Number</label>
              <input type="number" id="guestNumber" name="Guest Number" min="1" max="10" required />
            </div>
            <div className="form__group">
              <label htmlFor="placement">Placement</label>
              <select name="Placement" id="placement" required>
                <option selected disabled>Choose</option>
                <option value="outdoor">Outdoor</option>
                <option value="indoor">Indoor</option>
                <option value="rooftop">Rooftop</option>
              </select>
            </div>
          </div>
  
          <div className="form__group--half">
            <div className="form__group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="Date" required />
            </div>
            <div className="form__group">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" name="Time" required />
            </div>
          </div>
  
          <div className="form__group form__group__full">
            <label htmlFor="note">Note</label>
            <textarea name="Note" id="note" rows="4"></textarea>
          </div>
  
          <button type="submit" className="btn primary-btn">Book Table</button>
        </form>
      </div>
    </div>
  </section>
  
  )
}

export default Booktable;
