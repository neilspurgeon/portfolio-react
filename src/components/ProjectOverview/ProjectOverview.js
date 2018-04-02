import React from 'react';
import styles from './style.css';
import Container from 'components/Container/Container.js';
import Link from 'components/Link/Link.js';

const ProjectOverview = (props) => {
  return (
    <Container type="inset" className={styles.wrapper}>

      <div className={styles.main}>
        <p className={styles.intro}>{props.intro}</p>

      </div>

      <div>

        { props.roles &&
          <div>
            <h2 className={styles.sectionHeader}>Role</h2>
            <ul className={styles.ul}>
              { props.roles.map( (role, i) => <li key={role}>{role}</li>) }
            </ul>
          </div>
        }


        { props.tech &&
          <div>
            <h2 className={styles.sectionHeader}>Technology</h2>
            <ul className={styles.ul}>
              {props.tech.map((tech, i) => <li key={tech}>{tech}</li>) }
            </ul>
          </div>
        }


        { props.credits &&
          <div>
            <h2 className={styles.sectionHeader}>Credits</h2>
            <ul className={styles.ul}>
              { props.credits.map( (credit, i) => <li key={credit}>{credit}</li>) }
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