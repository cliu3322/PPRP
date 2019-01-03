import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProfileItem from "./ProfileItem";
import { getPapers } from "../../redux/paperlist/actions";
import axios from "axios";
import { Link } from "react-router-dom";

class Papers extends Component {
  state = {
    papers: []
  };
  componentDidMount() {
    this.props.getPapers();

    // axios.get("/api/getFileDetails").then(res => {
    //   this.setState({ papers: res.data });
    //   console.log(this.state.papers);
    // });
  }

  render() {
    // let profileItems;
    const { papers } = this.state;

    // profileItems = papers.map(paper => (
    //   <ProfileItem key={paper._id} paper={paper} />
    // ));

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            <h1 className="display-4 text-center"> Papers</h1>
            {papers.author}
            <p>{papers.abstract}</p>

            <Link to={"/paperDisplay"} className="btn btn-info">
              aaa
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Papers.propTypes = {
  getPapers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  papers: state.papers
});

export default connect(
  mapStateToProps,
  { getPapers }
)(Papers);
