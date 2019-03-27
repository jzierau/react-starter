import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';

const templateView = (path) => {
  switch (true) {
    default:
      return <noscript />;
  }
};

const Templatr = ({ computedMatch, location: { pathname }, path }) => (
  <Route
    exact
    path={path}
    render={() => (
      <div className="template">
        {templateView(path)}
      </div>
    )}
  />
);

Templatr.defaultProps = {
  computedMatch: {},
  form: {},
  location: {},
  path: '/',
};

Templatr.propTypes = {
  computedMatch: PropTypes.shape({}),
  form: PropTypes.shape({}),
  location: PropTypes.shape({}),
  path: PropTypes.string,
};

export default withRouter(Templatr);
