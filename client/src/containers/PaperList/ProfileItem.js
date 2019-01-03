import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ProfileItem extends Component {
  render() {
    const { paper } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{paper.author}</h3>
            <p>{paper.abstract}</p>

            <Link to={"/paperDisplay/"} className="btn btn-info">
              View Paper
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  paper: PropTypes.object.isRequired
};

export default ProfileItem;
