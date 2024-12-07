import React, { useEffect } from 'react';
import '../assets/Styles/Menu.css';  // Assuming the CSS file exists for styles
import AOS from 'aos';               // Import AOS library
import 'aos/dist/aos.css';          // Import AOS styles

function Menu() {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <div>
      {/* Page Title */}
      <section id="menuPageTitle" data-aos="fade-up">
        <div className="container">
          <h2 className="menuPageTitleText">Explore Our Menu</h2>
        </div>
      </section>

      {/* Our Specials */}
      <section id="menuSpecials" data-aos="fade-up">
        <div className="container">
          <h3 className="menuSpecialsTitle">Our Specials</h3>
          <div className="menuSpecialsWrapper">
            <div className="menuSpecialsItem">
              <div className="menuSpecialsItemImg">
                <img src="\src\assets\Images\food-3.png" alt="Sweet Potato Fries Bowl" />
              </div>
              <div className="menuSpecialsItemInfo">
                <h3 className="menuSpecialsItemTitle">Sweet Potato Fries Bowl</h3>
                <h4 className="menuSpecialsItemPrice">$12</h4>
                <div className="menuSpecialsItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
            </div>
            <div className="menuSpecialsItem">
              <div className="menuSpecialsItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Vegan Salad Bowl" />
              </div>
              <div className="menuSpecialsItemInfo">
                <h3 className="menuSpecialsItemTitle">Vegan Salad Bowl</h3>
                <h4 className="menuSpecialsItemPrice">$12</h4>
                <div className="menuSpecialsItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Dishes */}
      <section id="menuDishGrid" data-aos="fade-down">
        <div className="container">
          <h2 className="menuDishGridTitle">Top Dishes</h2>
          <div className="menuDishGridWrapper">
            {/* Dishes loop example, use this structure for each dish */}
            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>

            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            {/* Repeat similar structure for more dishes */}
          </div>
        </div>
      </section>

      {/* Breakfast Dishes */}
      <section id="menuDishGrid" data-aos="fade-up">
        <div className="container">
          <h2 className="menuDishGridTitle">Breakfast</h2>
          <div className="menuDishGridWrapper">
          <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            
              
            </div>
            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            </div>
            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            {/* Repeat structure for breakfast dishes */}
          </div>
        </div>
      </section>

      {/* Lunch Dishes */}
      <section id="menuDishGrid" data-aos="fade-up">
        <div className="container">
          <h2 className="menuDishGridTitle">Lunch</h2>
          <div className="menuDishGridWrapper">
          <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            {/* Repeat structure for lunch dishes */}
          </div>
        </div>
      </section>

      {/* Dinner Dishes */}
      <section id="menuDishGrid" data-aos="fade-up">
        <div className="container">
          <h2 className="menuDishGridTitle">Dinner</h2>
          <div className="menuDishGridWrapper">
          <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            <div className="menuDishGridItem">
              <div className="menuDishGridItemImg">
                <img src="\src\assets\Images\food-1.png" alt="Hot Green Bowl" />
              </div>
              <div className="menuDishGridItemInfo">
                <h3 className="menuDishGridItemTitle">Hot Green Bowl</h3>
                <h3 className="menuDishGridItemPrice">$12</h3>
                <div className="menuDishGridItemStars">
                  <img src="\src\assets\Images\3star.png" alt="3 stars" />
                </div>
              </div>
              
            </div>
            {/* Repeat structure for dinner dishes */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
