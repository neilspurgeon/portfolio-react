import React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'components/Grid/Grid.js';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import sharedStyles from 'sharedStyles/index.css';
import projects from 'projects';
import ProjectCard from 'components/ProjectCard/ProjectCard.js';
import RevealText from 'components/RevealText/RevealText.js';
import { Helmet } from 'react-helmet';

const introDuration = 2000;
const introTransDuration = 2000;
const breakPoint = 560;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: true,
      isLoaded: false
    };
  }

  componentWillMount() {

    this.setState({ windowSize: window.innerWidth });

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

        this.removeLoader();

      }, introDuration);

      window.sessionStorage.setItem('hasViewedIntro', true);
    }

      window.addEventListener('resize', this.resize);
  }

  resize = (e) => {

    const lastSize = this.state.windowSize;
    const newSize = e.target.innerWidth;

    if (lastSize > breakPoint && newSize < breakPoint ) {
      this.forceUpdate();
      this.setState({ windowSize: newSize });
    }

    if (lastSize < breakPoint && newSize > breakPoint ) {
      this.forceUpdate();
      this.setState({ windowSize: newSize });
    }
  }

  removeLoader = () => {
    window.setTimeout(() => {
      this.refs.loader.remove();
      document.body.classList.remove(styles.loaderBody);
    }, introTransDuration);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {

    let header = (
      <header className={styles.intro}>
        <RevealText
          className={styles.introText}
          tag={'h1'}
          text={[
            'Hi. I’m Neil, a digital ',
            'product designer & ',
            'frontend developer.'
          ]}
        />
        <Link className={[sharedStyles.arrowLink, styles.introLink].join(' ')} to='/about'>Learn More</Link>
      </header>
    );

    if (window.innerWidth > breakPoint) {
      header = (
        <header className={styles.intro}>
          <RevealText
            className={styles.introText}
            tag={'h1'}
            text={[
              'Hi. I’m Neil, a digital product ',
              'designer & frontend developer.'
            ]}
          />
          <Link className={[sharedStyles.arrowLink, styles.introLink].join(' ')} to='/about'>Learn More</Link>
        </header>
      );
    }

    return (
      <div>

        <Helmet>
          <title>Home – Neil Spurgeon. Designer & Developer</title>
        </Helmet>

        <Header />
        <Grid>

          {header}

          { this.state.showLoader &&
            // Only render intro if it hasn't been viewed
            <div ref='loader' className={this.state.isLoaded ? styles.loader : [styles.loader, styles.isLoading].join(' ')}>
              <Grid>
                {header}
              </Grid>
            </div>
          }

          <section className={styles.projects}>

            {projects.map((project, i) => {
              return (
                <div className={styles.projectRow} key={project.data.title}>
                  <ProjectCard
                    className={styles.card}
                    path={project.data.path}
                    image={project.data.homeCard}
                    sizes="(max-width: 751px) 100vw, 40vw"
                    altText={project.data.title}
                    title={project.data.title}
                    subTitle={project.data.subTitle}
                  />
                </div>
              );
            })}

          </section>
        </Grid>
        <Footer />
      </div>
    );
  }
};

export default Home;
