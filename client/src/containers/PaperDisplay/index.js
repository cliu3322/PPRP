import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import PDF from 'react-pdf-js';


export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    //console.log(this.state.contactOptions)
  }

  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
      );
  }


  render() {

    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <LayoutContentWrapper style={{ height: '1000vh' }}>
        <LayoutContent>
          <h1>Blank Page</h1>
          <div>
            <PDF
              width = {1000}
              file="http://localhost:3000/pdf/aaa.pdf"
              onDocumentComplete={this.onDocumentComplete}
              page={this.state.page}
            />
            {pagination}
          </div>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
