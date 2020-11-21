import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header({ auth }) {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <div>
      {/* {auth.toString()} */}
      <Link to="/users">Users</Link>
      <Link to="/admins">Admins</Link>
      {authButton}
    </div>
  );
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Header);
