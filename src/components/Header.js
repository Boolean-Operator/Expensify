import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'

// Header Component
export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify Header</h1>
    <h2>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard-*-</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      <button onClick={startLogout}>Log Out</button>
    </h2>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);