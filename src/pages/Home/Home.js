import React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'components/Grid/Grid.js';
import Nav from 'components/Nav/Nav.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import sharedStyles from 'sharedStyles/index.css';
import projects from 'projects';
import ProjectCard from 'components/ProjectCard/ProjectCard.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: true,
      isLoaded: false
    };
  }

  componentWillMount() {
    if (window.sessionStorage.getItem('hasViewedIntro')) {
      this.setState({
        showLoader: false
      });
    }
  }

  componentDidMount = () => {

    if (this.state.showLoader) {
      document.body.classList.toggle(styles.loaderBody);
      document.body.classList.toggle(styles.isLoading);

      window.setTimeout(() => {
        document.body.classList.toggle(styles.isLoading);
        this.setState({
          isLoaded: true
          });
      }, 1500);

      window.sessionStorage.setItem('hasViewedIntro', true);
    }
  }

  render() {

    const header = (<header className={styles.intro}>
      <h1 className={styles.introText}>I’m Neil, a digital product  designer & frontend developer.</h1>
      <Link className={[sharedStyles.arrowLink, styles.introLink].join(' ')} to='/about'>Learn More</Link>
    </header>);

    return (
      <div>

        <Nav />
        <Grid>

          {header}

          { this.state.showLoader &&
            // Only render intro if it hasn't been viewed
            <div className={this.state.isLoaded ? styles.loader : [styles.loader, styles.isLoading].join(' ')}>
              <Grid>
                {header}
              </Grid>
            </div>
          }

          <section className={styles.projects}>
            <div className={styles.leftCol}>
              {projects.map((project, i) => {
                if (i % 2 !== 0) {
                  return (
                    <ProjectCard
                      path={project.data.path}
                      image={project.data.card}
                      altText={project.data.title}
                      title={project.data.title}
                      subTitle={project.data.subTitle}
                    />
                  );
                }
              })}
            </div>

            <div className={styles.rightCol}>
              {projects.map((project, i) => {
                if (i % 2 === 0) {
                  return (
                    <ProjectCard
                      path={project.data.path}
                      image={project.data.card}
                      altText={project.data.title}
                      title={project.data.title}
                      subTitle={project.data.subTitle}
                    />
                  );
                }
              })}
            </div>

          </section>
        </Grid>
        <Footer />
      </div>
    );
  }
};

export default Home;
