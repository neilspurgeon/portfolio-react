import React from 'react';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';
import RevealImage from 'components/RevealImage/RevealImage.js';
import transitions from 'sharedStyles/transitions.css';
import sharedStyles from 'sharedStyles/index.css';
import Container from 'components/Container/Container.js';
import Link from 'components/Link/Link.js';

const ProjectOverview = (props) => {
  return (
    <Container type="inset" className={styles.wrapper}>

      <div className={styles.main}>
        <p className={styles.intro}>{props.intro}</p>

      </div>

      <div>

        { props.role &&
          <div>
            <h2 className={styles.sectionHeader}>Role</h2>
            <ul className={styles.ul}>
              { props.role.map( (role, i) => <li>{role}</li>) }
            </ul>
          </div>
        }


        { props.tech &&
          <div>
            <h2 className={styles.sectionHeader}>Technology</h2>
            <ul className={styles.ul}>
              { props.tech.map( (tech, i) => <li>{tech}</li>) }
            </ul>
          </div>
        }


        { props.credits &&
          <div>
            <h2 className={styles.sectionHeader}>Credits</h2>
            <ul className={styles.ul}>
              { props.credits.map( (credit, i) => <li>{credit}</li>) }
            </ul>
          </div>
        }

        { props.linkUrl &&
          <Link text={props.linkText} to={props.linkUrl} />
        }

        {props.children}

      </div>


    </Container>
  );
};

export default ProjectOverview;