import React from "react";

import Navbar from "../components/nav";

import Footer from "../components/footer";

import "../navfoot.css";
import "../home.css";

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <header className="App-header">
        <h1> Revolutionising long-term healthcare, helping you care. </h1>
        <div className="header-section"> 
          <p> Something or other we are super cool and great </p>
          <a
          className="button-link"
          href="/sign-up"  
          >
          Sign up
          </a>

        </div>
      </header>

      <main className="main">
        <section className="main-left">
          <div className="USP-unseen"> 
            <img
              src="/images/heartHome.png"
              alt="Line drawing home with lightbulb and heart inside"
              className="middleMain"
            />
            <h4> Ignore this </h4>
            <h1> I need to fix it </h1>
            <p> But I keep breaking it</p>
            <p> This is helping fix it for now </p>
            <a
              className="button-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            Reviews
            </a>
            </div>
            <div className="USP-intro"> 
            <img
              src="/images/heartHome.png"
              alt="Line drawing home with lightbulb and heart inside"
              className="middleMain"
            />
            <h4> We are different </h4>
            <h1> Driven by innovation </h1>
            <p> Aiming to introduce tech that helps, not confuses</p>
            <p> Client centred </p>
            <a
              className="button-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            Reviews
            </a>
            </div>
            <div className="USP-usability"> 
            <img
              src="/images/helpingHands.png"
              alt="line drawing hands shaking"
              className="littleMain"
            />
            <h4> Aiding independence </h4>
            <h1> Simple to use </h1>
            <p> You know your residents best </p>
            <p> Alter permissions </p>
            <p> Residents can customise too </p>
            </div>
            <div className="USP-connectivity"> 
            <img
              src="/images/connectedCogs.png"
              alt="Line drawing of cogs working together"
              className="littleMain"
            />
            <h4> Keeping everyine in the loop </h4>
            <h1> Weekly reports </h1>
            <p> Families can join too </p>
            <p> 'Before this I felt helpless, I love my mum but I live sooo far away #sad, I love that now if she needs help I can turn her lights, heating, etc. on without having to contact and disrupt the staff' </p>
            <p> - debbie xox</p>
            </div>
            <div className="USP-game"> 
            <img
              src="/images/bloomingBulb.png"
              alt="line drawing lightbulb with plant growing inside"
              className="littleMain"
            />
            <h4> Incentivise independance </h4>
            <h1> Game features </h1>
            <p> Climate-friendly </p>
            <p> Simple </p>
            <p> More text ? </p>
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
          <h1>We are so cool and great</h1>
          <a
            className="button-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            About us
          </a>
        </div>
      </section>
      <Footer>
      </Footer>
    </div>
  );
};

export default HomeScreen;