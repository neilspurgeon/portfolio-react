import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home.js';
import About from 'pages/About/About.js';
import projects from 'projects';
import Contact from 'pages/Contact/Contact.js';
import Projects from 'pages/Projects/Projects.js';
import ProjectLayout from 'layouts/ProjectLayout/ProjectLayout';
import NotFound from 'pages/NotFound/NotFound.js';
import ReactGA from 'react-ga';
import Cursor from 'components/Cursor/Cursor.js';

ReactGA.initialize('UA-45097231-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
  return null;
};

const ProjectRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <ProjectLayout
      title={rest.title}
      subTitle={rest.subTitle}
      hero={rest.hero}
      nextProjectTitle={rest.nextProjectTitle}
      nextProjectImage={rest.nextProjectImage}
      nextProjectAltText={rest.nextProjectAltText}
      nextProjectPath={rest.nextProjectPath}
      >
      <Component {...props}/>
    </ProjectLayout>
  )}/>
);

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Routes = (props) => (
  <Cursor>
    <Route path="/" component={logPageView} />
    <Route path="/" component={ScrollToTop} />
    {/* <Route path="/" component={Cursor} /> */}

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />

      {projects.map((project, i, arr) => {
        // if last project, start back at the begining
        let nextProject = (i+1 < arr.length) ? arr[i+1] : arr[0];
        return (
          <ProjectRoute
            exact path={project.data.path}
            component={project.component}
            title={project.data.title}
            subTitle={project.data.subTitle}
            hero={project.data.hero}
            nextProjectTitle={nextProject.data.title}
            nextProjectImage={nextProject.data.card}
            nextProjectAltText={nextProject.data.altText}
            nextProjectPath={nextProject.data.path}
            key={i} />
        );
      })}

      <Route component={NotFound} />

    </Switch>
  </Cursor>
);

export default Routes;
