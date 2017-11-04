import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home.js';
import projects from 'projects';
import NotFound from 'pages/NotFound/NotFound.js';

const Routes = (props) => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />

      {projects.map((project, i) => {
        return <Route exact path={project.data.path} component={project.component} key={i} />;
      })}

      <Route component={NotFound} />

    </Switch>
  </div>
);

export default Routes;