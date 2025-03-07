import React from "react";

import { Link } from "react-router-dom";

import Navbar from "../components/nav";

import Footer from "../components/footer";

import "../navfoot.css";
import "../home.css";

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <header className="App-header">
        <h1> TESTING CONECTION Revolutionising long-term healthcare, helping you care. </h1>
        <div className="header-section"> 
          <p> Join us in suppporting independence, enhancing connectivity, and optimising energy use! </p>
          <Link className="button-link" to="/SignUp">
          Sign up
          </Link>
        </div>
      </header>

      <main className="mainH">
        <section className="main-left">
          <div className="USP-unseen"> 
            <img
              src="/images/heartHome.png"
              alt="Line drawing home with lightbulb and heart inside"
              className="middleMain"
            />
            <h4> Ignore </h4>
            <h1> I need to fix it </h1>
            <p> But I keep breaking it</p>
            <p> This is my fix at this point xox </p>
            </div>
            <div className="USP-intro"> 
            <img
              src="/images/heartHome.PNG"
              alt="Line drawing home with lightbulb and heart inside"
              className="middleMain"
            />
            <h4> We are different </h4>
            <h1> Driven by innovation </h1>
            <p> Aiming to introduce tech that supports, not overwhelms</p>
            <p> Client centred - we have built our technology around real needs and people, ensuring inclusive support </p>
            <p> Trusted by many, see what others say! </p>
            <Link className="button-link" to="/reviews">
            Reviews
            </Link>
            </div>
            <div className="USP-usability"> 
            <img
              src="/images/helpingHands.PNG"
              alt="line drawing hands shaking"
              className="littleMain"
            />
            <h4> Aiding independence </h4>
            <h1> Simple to use </h1>
            <p> With a functional and straightforward interface to allow a seamless and simple transition into smart care for both staff and residents </p>
            <h4> You know your residents best </h4>
            <p>  The manager of your smart home can alter permissions for each user to ensure the best experience for all</p>
            <p> Users can also customise their own layout, supporting individuality and independence in all aspects </p>
            </div>
            <div className="USP-connectivity"> 
            <img
              src="/images/connectedCogs.PNG"
              alt="Line drawing of cogs working together"
              className="littleMain"
            />
            <h4> Keeping everyone in the loop </h4>
            <h1> Weekly reports </h1>
            <p> Staff, residents and now families too, can all stay informed with our weekly energy reports, customisable to show as much or as little information as you wish! </p>
            <p> Now with the ability to add family members onto residents' profiles- loved ones can stay involved, no matter the distance  </p>
            <p> 'Before this I felt helpless. I love my mum, but I live so far away. Now, if she needs help, I can adjust her lights, heating, and more - without disrupting the staff!' </p>
            <p> - Lauren McIpsum </p>
            </div>
            <div className="USP-game"> 
            <img
              src="/images/bloomingBulb.PNG"
              alt="line drawing lightbulb with plant growing inside"
              className="littleMain"
            />
            <h4> Smart energy - smarter care </h4>
            <h1> Game features </h1>
            <p> Fun, non competitive game features to incentivise optimal energy usage and reduce waste </p>
            <p> Encoraging everyone to make deliberate decisions towards a climate-friendly lifestyle </p>
            <p> Engaging and simple, making energy savings effortless and fun! </p>
            </div>
        </section>
        <section className="main-right">
        <img
          src="/images/clappingCarers.png"
          alt="NHS carers clapping"
          className="imageMain"
        />
        </section>
      </main>
      <section className="parallax-section">
        <div className="parallax-content">
          <h4>Our Team</h4>
          <h1>Together, we can make a difference.</h1>
          <Link className="button-link" to="/AboutUs">
            About us
          </Link>
        </div>
      </section>
      <Footer>
      </Footer>
    </div>
  );
};

export default HomeScreen;