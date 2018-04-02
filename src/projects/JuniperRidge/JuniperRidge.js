import React from 'react';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectOverview from 'components/ProjectOverview/ProjectOverview.js';
import Container from 'components/Container/Container.js';
import styles from './styles.css';
import shared from 'sharedStyles/index.css';
import Image from 'components/Image/Image.js';
import ProjectSection from 'components/ProjectSection/ProjectSection.js';

// import images
import washingHands from './images/washing-hands.jpg';
import valley from './images/valley.jpg';
import flBottle from './images/field-lab-bottle.jpg';
import harvesting from './images/harvesting.jpg';

import distilling from './images/distilling.jpg';

import notebook from './images/notebook.jpg';
import obiDrawing from './images/obi-drawing.jpg';

import boxSet from './images/box-set.jpg';
import bottles from './images/bottles.jpg';
import mojaveLine from './images/mojave-line.jpg';
import soaps from './images/soaps.jpg';

import desert from './images/desert.jpg';
import denimWash from './images/denim-wash.jpg';

import leafBottle from './images/field-lab-leaf.jpg';
import flBottles from './images/field-lab-bottles.jpg';

import timberline from './images/field-lab-timberline-trail.jpg';


const JuniperRidge = () => {
  return (
    <div>

      <ProjectOverview
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        roles={["Packaging Design", "Branding", "Print Design"]}
        credits={["Studio: Indicate Design Groupe", "Year: 2013-2014"]}
        />


        <Container>

          <ProjectSection >
            <Image className={styles.clusterAside1} image={washingHands} />
            <Image className={styles.clusterMain} image={valley} />
            <Image className={styles.clusterAside2} image={flBottle} />
            <Image className={styles.clusterAside3} image={harvesting} />
          </ProjectSection>


          <ProjectText>
            <h3 className={shared.sectionHeader}>Problem</h3>
            <p>Wild harvested on the trail, Juniper Ridge creates perfumes and fragrances by distilling and extracting natural scents from wildflowers, plants, and tree trimmings. With such unique process, Juniper Ridge felt their current brand didn’t represent them well enough. While our team worked on the full rebrand, I was heavily involved with the redesign of their fragrance packaging.</p>
          </ProjectText>

        </Container>

        <ProjectSection>
          <Image image={distilling} />
        </ProjectSection>


        <Container>

          <ProjectSection>
            <Image className={styles.cluster2img1} image={obiDrawing} />
            <Image className={styles.cluster2img2} image={notebook} />
          </ProjectSection>

          <ProjectText>
            <p>Wild harvested on the trail, Juniper Ridge creates perfumes and fragrances by distilling and extracting natural scents from wildflowers, plants, and tree trimmings. With such unique process, Juniper Ridge felt their current brand didn’t represent them well enough. While our team worked on the full rebrand, I was heavily involved with the redesign of their fragrance packaging.</p>
          </ProjectText>

        </Container>

        <ProjectSection>
          <Image image={boxSet} />
          <Image image={bottles} />
          <Image image={mojaveLine} />
          <Image image={soaps} />
        </ProjectSection>

        <Container>
          <ProjectSection>
            <Image className={styles.cluster3img1} image={desert} />
            <Image className={styles.cluster3img2} image={denimWash} />
          </ProjectSection>

          <ProjectText>
            <p>Wild harvested on the trail, Juniper Ridge creates perfumes and fragrances by distilling and extracting natural scents from wildflowers, plants, and tree trimmings. With such unique process, Juniper Ridge felt their current brand didn’t represent them well enough. While our team worked on the full rebrand, I was heavily involved with the redesign of their fragrance packaging.</p>
          </ProjectText>

        </Container>

        <ProjectSection>
          <Image image={timberline} />
        </ProjectSection>

        <Container>
          <ProjectSection>
            <Image className={styles.cluster4img1} image={leafBottle} />
            <Image className={styles.cluster4img2} image={flBottles} />
          </ProjectSection>
        </Container>

    </div>
  );
};

export default JuniperRidge;