import React from 'react';
import styles from './styles.css';
import shared from 'sharedStyles/index.css';
import Image from 'components/Image/Image.js';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectSection from 'components/ProjectSection/ProjectSection.js';
import Container from 'components/Container/Container.js';
import ProjectOverview from 'components/ProjectOverview/ProjectOverview.js';

// images
import clients from './images/clients.jpg';
import orderFlow from './images/order-flow.jpg';
import orderUserJourney from './images/order-user-journey.jpg';
import uiScreens from './images/ui-screens.jpg';


const NomNom = () => {

  return (
    <div>

      <ProjectOverview
        intro="Nom Nom is an order ahead and loyalty platform that Hathway created to license to clients. It is meant to be used as a starting point to jump-start both design and development, while also allowing complete customizations specific to each client."
        roles={["UX/UI Design", "Product Design"]}
        credits={["Agency: Hathway", "Year: 2017-2018"]}
      />

      <Container>
        <ProjectSection>
          <Image image={clients} />
        </ProjectSection>
      </Container>

      <ProjectText>
        <h3 className={shared.sectionHeader}>Problem</h3>

        <p>In 2017 Hathway was planning to build a handful of functionally similar apps in the fast casual and quick service restaurant space. Having recently launched apps for both Jamba Juice and The Coffee Bean & Tea Leaf, we knew there were a lot of inefficiencies and repetitive problem solving that could be reduced. By addressing these issues we hoped to create a better value for the client and increase the agency’s margins.</p>

        <p>Our goal was to create a base app with proven UX that could be easily themed and demoed to potential clients. From there we could take the themed base app and decide on specific areas of customization.</p>

        <h3 className={shared.sectionHeader}>Core Features</h3>

        <p>After client working sessions and competitive analysis, we decided on four primary sections of the app and identififed common features that we deemed should be standard. </p>
      </ProjectText>


      {/* App Features */}
      <div className={styles.featuresSection}>

        <div className={styles.featureCard}>
          <h4 className={styles.featureTitle}>1/Order Ahead</h4>
          <ul className={styles.featureList}>
            <li>Order for pickup, drive through, or delivery.</li>
            <li>Modifiy and customize order items.</li>
            <li>Quickly re-order from recent and favorite orders.</li>
            <li>Easily edit selected order options while maintaing basket items.</li>
          </ul>
        </div>

        <div className={styles.featureCard}>
          <h4 className={styles.featureTitle}>2/Payments</h4>
          <ul className={styles.featureList}>
            <li>Import and store gift cards for both in-store and in-app payments.</li>
            <li>Process credit/debit cards for in-app payments.</li>
            <li>Accept Apple Pay for in-app purchases.</li>
            <li>Securely store credit/debit cards for quicker quicker checkouts.</li>
          </ul>
        </div>

        <div className={styles.featureCard}>
          <h4 className={styles.featureTitle}>3/Points & Rewards</h4>
          <ul className={styles.featureList}>
            <li>Earn loyalty points for payment made in-app.</li>
            <li>Scan your phone to earn points for non-app payments.</li>
            <li>Receive rewards at certain point increments.</li>
            <li>Redeem rewards both in-app and in-store.</li>
          </ul>
        </div>

        <div className={styles.featureCard}>
          <h4 className={styles.featureTitle}>4/Locations</h4>
          <ul className={styles.featureList}>
            <li>Search filter nearby locations by available amenities.</li>
            <li>Save a location as a favorite for quicker ordering.</li>
            <li>Quickly re-order from recent and favorite orders</li>
          </ul>
        </div>

      </div>

      <ProjectText>
        <h3 className={shared.sectionHeader}>Start Order Flow</h3>
        <p>Throughout the design of the app, there were many whiteboarding sessions to decide on possible user flows. One particularly important and challenging flow was the start order flow.  A limitation we had from the OLO API was that there was no concept of a global menu across stores. This meant that a store, and order type, had to be selected before a basket could be created. This didn't present a technical issue, but from the user’s perspective was a barrier to starting an order.  Not only would the user have to select a store but they would first have to select an order type.</p>

        <p>This was a lot to ask from a user every time they wanted to browse the menu. We explored different ways around this and ultimately decided it was best to only go through the store and order selection steps for first-time users and to default them for returning users. This would allow us to expose options early on to new users while also streamlining for returning user. Knowing this could prove challenging in design, we then moved to wireframing and testing.</p>
      </ProjectText>

      <ProjectSection>
        <Image image={orderFlow} />
      </ProjectSection>

      <ProjectText>
        <h3 className={shared.sectionHeader}>Wireframes</h3>
        <p>Keeping with the proposed user flows, we then began designing wireframes. These designs started out as rough whiteboard sketches, as we figured out what information was important, and then evolved into much higher fidelity designs. This allowed us to accurately design for the content and also provide much more valuable user testing.</p>
      </ProjectText>


      <ProjectSection>
        <Image image={orderUserJourney} />
      </ProjectSection>


      <ProjectText>
        <h3 className={shared.sectionHeader}>Visual Design</h3>

        <p>While the visual design would most likely be completely redone for each client, we still needed something that could be presented to clients and had realistic demo content. This demo version of the app was never going to be in the App Store, but we were still very much developing it and treating it as if it was a real client app. Various versions were designed and tested. Below are a collection of screens I completed outside of Hathway to showcase the work.</p>
      </ProjectText>

      <ProjectSection>
        <Image image={uiScreens} />
      </ProjectSection>

    </div>
  );
};

export default NomNom;