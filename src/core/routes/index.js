import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Templatr from '../templates';

const Routr = ({ routes }) => (
  <Switch>
    {routes.map(({ path }) => <Templatr key={path} path={path} />)}
    <Redirect to="/" />
  </Switch>
);

Routr.defaultProps = { routes: [] };
Routr.propTypes = { routes: PropTypes.arrayOf(PropTypes.shape({})) };
const mapStateToProps = state => ({ routes: state.core.routes });
export default withRouter(connect(mapStateToProps, {})(Routr));
