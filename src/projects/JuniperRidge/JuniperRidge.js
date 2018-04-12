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
        intro="Juniper Ridge is the world's only wildcrafted fragrance company. They distill perfume products from plants and tree trimmings found while backcountry hiking. Their products are sold mainly in small boutiques, but certain lines are also available in larger stores such as Whole Foods."
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
            <h3 className={shared.sectionHeader}>Approach</h3>
            <p>We started the process by trying to really get to know Juniper Ridge. Through casual meetings and workshops, we began to fully understand their process. We became fascinated and quickly identified many unique traits and rich details that to them had seemed standard. One of the most interesting discoveries we made came from reading Juniper Ridge's Chief Storyteller’s notebooks. On nearly every harvest, he had recorded the journey through watercolor paintings and poems. We immediately knew we needed to incorporate this into their brand.</p>
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
            <h3 className={shared.sectionHeader}>Uniquely High End</h3>
            <p>Another important part of this project was conciseness of materials. We needed to convey a high end feel to match the price while also being eco-friendly. Where possible we used glass bottles wrapped in protective craft tubes for shipping and transport. For certain items such as soaps, we opted for squeezable plastic flasks that could withstand drops. The bottles were topped off with custom caps made from fallen tree branches found on the trail.</p>
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
          <h3 className={shared.sectionHeader}>Field Lab</h3>
            <p>Juniper Ridge also has a much more experimental limited product line called Field Lab. These are one-off batches distilled by the Juniper Ridge while on the trail. Dues to limited supplies and remote locations these can only be produced on a much smaller scale. Because of the limited quantity and constantly changing scents, custom printed bottles and tubes were not an option. We instead used a single Field Lab printed bottle across the full line and incorporated custom hang tags and stickers to identify the scents. </p>
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