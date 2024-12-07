import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import '../assets/Styles/aos.css';
import '../assets/Styles/Home.css';
import Hero from '../Components/Hero';

function Home() {
  const [email, setEmail] = useState('');

  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init();
  }, []);

  // Handle form submission for the newsletter
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here, e.g., sending email to backend
    console.log("Form submitted with email:", email);
  };

  return (
    <div>
       <Hero />
      {/* Store Info Section */}
      <section id="storeInfo" data-aos="fade-up">
        <div className="container">
          <div className="storeInfo__wrapper">
            <div className="storeInfo__item">
              <div className="storeInfo__icon">
                <img src="\src\assets\Images\wall-clock-icon.svg" alt="clock icon" />
              </div>
              <h3 className="storeInfo__title">10 AM - 7 PM</h3>
              <p className="storeInfo__text">Opening Hour</p>
            </div>
            <div className="storeInfo__item">
              <div className="storeInfo__icon">
                <img src="\src\assets\Images\address-icon.svg" alt="address icon" />
              </div>
              <h3 className="storeInfo__title">GEC, Chittagong</h3>
              <p className="storeInfo__text">Address</p>
            </div>
            <div className="storeInfo__item">
              <div className="storeInfo__icon">
                <img src="\src\assets\Images\phone-icon.svg" alt="phone icon" />
              </div>
              <h3 className="storeInfo__title">+880123443</h3>
              <p className="storeInfo__text">Call Now</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specials Section */}
      <section id="ourSpecials" data-aos="fade-up">
        <div className="container">
          <div className="ourSpecials__wrapper">
            <div className="ourSpecials__left">
              <div className="ourSpecials__item">
                <div className="ourSpecials__item__img">
                  <img src="\src\assets\Images\food-3.png" alt="Sweet Potato Fries Bowl" />
                </div>
                <h2 className="ourSpecials__item__title">Sweet Potato Fries Bowl</h2>
                <h3 className="ourSpecials__item__price">$18</h3>
                <div className="ourSpecials__item__stars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
                <p className="ourSpecials__item__text">
                  These Sweet Potato Fries bowl are a glorious, messy plate of goodness. Crispy sweet potato fries loaded with lots of fresh summer vegetables and a lime ranch. By adding a seasoning blend with chipotle powder, garlic, and onion, these spicy sweet potato fries are full of flavor.
                </p>
              </div>
              <div className="ourSpecials__item">
                <div className="ourSpecials__item__img">
                  <img src="\src\assets\Images\food-1.png" alt="Vegan Salad Bowl" />
                </div>
                <h2 className="ourSpecials__item__title">Vegan Salad Bowl</h2>
                <h3 className="ourSpecials__item__price">$18</h3>
                <div className="ourSpecials__item__stars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
                <p className="ourSpecials__item__text">
                  Vegan salad bowls are immensely satisfying with any combination of whole grains, pulses, noodles, raw or cooked fruits, and veggies all topped off with a delicious sauce or dressing – each bite is an explosion of flavors and textures.
                </p>
              </div>
            </div>
            <div className="ourSpecials__right">
              <h2 className="ourSpecials__title">Our Specials</h2>
              <p className="ourSpecials__text">
                All of our food is prepared daily at our restaurants to ensure the highest quality, freshest meals are delivered to our customers.
              </p>
              <Link to="/booking" className="btn primary-btn">Book Table</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Dishes Section */}
      <section id="dishGrid" data-aos="fade-up">
        <div className="container">
          <h2 className="dishGrid__title">Top Dishes</h2>
          <div className="dishGrid__wrapper">
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src="\src\assets\Images\food-1.png" alt="Vegan Salad Bowl" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Vegan Salad Bowl</h3>
                <h3 className="dishGrid__item__price">$12</h3>
                <div className="dishGrid__item__stars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
            </div>
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src="\src\assets\Images\food-2.png" alt="Vegan Pesto Zoodles" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Vegan Pesto Zoodles</h3>
                <h3 className="dishGrid__item__price">$12</h3>
                <div className="dishGrid__item__stars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
            </div>
            <div className="dishGrid__item">
              <div className="dishGrid__item__img">
                <img src="\src\assets\Images\food-7.png" alt="Hot Green Bowl" />
              </div>
              <div className="dishGrid__item__info">
                <h3 className="dishGrid__item__title">Hot Green Bowl</h3>
                <h3 className="dishGrid__item__price">$12</h3>
                <div className="dishGrid__item__stars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Section */}
      <section id="discount" data-aos="fade-up">
        <div className="container">
          <div className="discount__wrapper">
            <div className="discount__images">
            <div className="discount__img2">
                <img src="\src\assets\Images\food-4.png" alt="Discount Dish 2" />
              </div>
              
              <div className="discount__img1">
                <img src="\src\assets\Images\food-5.png" alt="Discount Dish 1" />
              </div>
              
              <div className="discount__img2">
                <img src="\src\assets\Images\food-4.png" alt="Discount Dish 2" />
              </div>
              
              {/* <div className="discount__img3">
                <img src="\src\assets\Images\food-3.png" alt="Discount Dish 3" />
              </div> */}
            </div>
            <div className="discount__info">
              <h3 className="discount__text">20% OFF</h3>
              <h3 className="discount__title">Demo Dish For Discount</h3>
              <h3 className="discount__price">
                <span className="discount__oldPrice">$45</span>
                <span className="discount__newPrice">$35</span>
              </h3>
              <div className="discount__stars">
                <img src="\src\assets\Images\3star.png" alt="3 stars" />
              </div>
              <div className='ab'>
              <Link to="/Booktable" className="btn primary-btn">Book Table</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Media Section */}
      <section id="eventsMedia" data-aos="fade-up">
        <div className="container">
          <div className="eventsMedia__wrapper">
            <div className="eventsMedia__1">
              <img src="\src\assets\Images\eventsMedia1.png" alt="Event 1" />
              <a href="#" className="eventsMedia__1__playButton">
                <img src="\src\assets\Images\playIcon.svg" alt="Play Button" />
              </a>
            </div>
            <div className="eventMedia__2">
              <img src="\src\assets\Images\eventsMedia2.png" alt="Event 2" />
            </div>
          </div>
        </div>
      </section>

      <div className="inf">
  <section id="eventsInfo" data-aos="fade-up">
    <div className="container">
      <div className="eventsInfo__wrapper">
        <div className="eventsInfo__left">
          <div className="eventsInfo__item">
            <div className="eventsInfo__item__img">
              <img src="/src/assets/Images/event-corporate (2).png" alt="corporate events" />
            </div>
            <div className="eventsInfo__item__info">
              <h2 className="eventsInfo__item__title">Corporate Events</h2>
              <p className="eventsInfo__item__text">
                Shaif's Cuisine is the perfect venue for your corporate events. We specialize in private parties.
              </p>
            </div>
          </div>
          <div className="eventsInfo__item">
            <div className="eventsInfo__item__img">
              <img src="/src/assets/Images/event-weedings (2).png" alt="wedding events" />
            </div>
            <div className="eventsInfo__item__info">
              <h2 className="eventsInfo__item__title">Weddings</h2>
              <p className="eventsInfo__item__text">
                Shaif's Cuisine offers an intimately unique wedding experience set in a spectacular setting that is
                sophisticated and comfortable.
              </p>
            </div>
          </div>
        </div>
        <div className="eventsInfo__right">
          <h2 className="eventsInfo__title">Book For Events</h2>
          <p className="eventsInfo__text">Book your private event or corporate function at Shaif's Cuisine to experience a
            truly unique experience.</p>
          <a href="./contact.html" className="btn primary-btn">Contact Now</a>
        </div>
      </div>
    </div>
  </section>
</div>
     

<section id="whyUs">
  <div className="container">
    <div className="whyUs__wrapper">
      {/* Left Section (Text) */}
      <div className="whyUs__left" data-aos="fade-right">
        <h2 className="whyUs__title">Why Choose Our Food</h2>
        <p className="whyUs__text">
          Quality of Service, Food, Ambiance, and Value of Money are the primary elements for choosing a restaurant.
          Shaif's Cuisine is one of the most exquisite fine-dining restaurants in Chittagong, offering a captivating view of GEC Hills, perfect ambiance, and scrumptious food.
        </p>
      </div>

      {/* Right Section (Icons) */}
      <div className="whyUs__right" data-aos="fade-left">
        <div className="whyUs__items__wrapper">
          {/* Why Choose Item 1 */}
          <div className="whyUs__item">
            <div className="whyUs__item__icon">
              <img src="\src\assets\Images\whyus-icon1.svg" alt="Quality Food" />
            </div>
            <p className="whyUs__item__text">Quality Food</p>
          </div>
          {/* Why Choose Item 2 */}
          <div className="whyUs__item">
            <div className="whyUs__item__icon">
              <img src="\src\assets\Images\whyus-icon2.svg" alt="Classical Taste" />
            </div>
            <p className="whyUs__item__text">Classical Taste</p>
          </div>
          {/* Why Choose Item 3 */}
          <div className="whyUs__item">
            <div className="whyUs__item__icon">
              <img src="\src\assets\Images\whyus-icon3.svg" alt="Skilled Chef" />
            </div>
            <p className="whyUs__item__text">Skilled Chef</p>
          </div>
          {/* Why Choose Item 4 */}
          <div className="whyUs__item">
            <div className="whyUs__item__icon">
              <img src="\src\assets\Images\whyus-icon4.svg" alt="Best Service" />
            </div>
            <p className="whyUs__item__text">Best Service</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="testimonial">
  <div className="container">
    <div className="testimonial__wrapper" data-aos="fade-up">
      <h2 className="testimonial__title">What Our Customers Say</h2>
      <div className="testimonial__items__wrapper">
        {/* Testimonial Item 1 */}
        <div className="testimonial__item">
          <div className="testimonial__item__img">
            <img src="\src\assets\Images\testimonial_img1.png" alt="Sayed Ahmed" />
          </div>
          <div className="testimonial__item__info">
            <h3 className="testimonial__item__name">Sayed Ahmed</h3>
            <div className="testimonial__item__stars">
              <img src="\src\assets\Images\3star.png" alt="3 star" />
            </div>
            <p className="testimonial__item__text">
              “Visited Shaif’s Cuisine with friends last Sunday. Really lovely meal and very warm welcome – we would
              recommend this lovely restaurant and will try to go back again.”
            </p>
          </div>
        </div>

        {/* Testimonial Item 2 */}
        <div className="testimonial__item">
          <div className="testimonial__item__img">
            <img src="\src\assets\Images\testimonial_img1.png" alt="Sayed Ahmed" />
          </div>
          <div className="testimonial__item__info">
            <h3 className="testimonial__item__name">Arfan</h3>
            <div className="testimonial__item__stars">
              <img src="\src\assets\Images\3star.png" alt="3 star" />
            </div>
            <p className="testimonial__item__text">
              "From start to finish, lovely experience. Hostess very pleasant, wait staff John was wonderful and
              attentive, food plentiful and delicious, desserts out of this world."
            </p>
          </div>
        </div>

        {/* Testimonial Item 3 */}
        <div className="testimonial__item">
          <div className="testimonial__item__img">
            <img src="\src\assets\Images\testimonial_img1.png" alt="Sayed Ahmed" />
          </div>
          <div className="testimonial__item__info">
            <h3 className="testimonial__item__name">Fahim & Nishat</h3>
            <div className="testimonial__item__stars">
              <img src=".\src\assets\Images\3star.png" alt="3 star" />
            </div>
            <p className="testimonial__item__text">
              “A warm and friendly welcome with fantastic customer service. Always great, tasty food served piping
              hot—just the way we love it. Would definitely recommend. We have been repeatedly and it's consistently
              exceeded our expectations."
            </p>
          </div>
        </div>

        {/* Testimonial Item 4 */}
        <div className="testimonial__item">
          <div className="testimonial__item__img">
            <img src="\src\assets\Images\testimonial_img1.png" alt="Sayed Ahmed" />
          </div>
          <div className="testimonial__item__info">
            <h3 className="testimonial__item__name">Hussain</h3>
            <div className="testimonial__item__stars">
              <img src="\src\assets\Images\3star.png" alt="3 star" />
            </div>
            <p className="testimonial__item__text">
              “I would just like to say thank you for the excellent service we received in your restaurant last night.
              Although the place was very busy, we still had an excellent time and really appreciated the live
              entertainment too!”
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* 
<section id="newsletter" data-aos="fade-up">
  <div className="container">
    <div className="newsletter__wrapper">
      <div className="newsletter__info">
        <h3 className="newsletter__title">Join Newsletter</h3>
        <p className="newsletter__text">
          Get notified with the latest news and recent offers from the “Shaif’s Cuisine”
        </p>
      </div>
      <div className="newsletter__form">
        <form action="">
          <label htmlFor="email">
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email Address" 
            />
          </label>
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  </div>
</section> */}


    </div>
  );
}

export default Home;
