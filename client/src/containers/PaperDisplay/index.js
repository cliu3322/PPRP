import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';


export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    //console.log(this.state.contactOptions)
  }


  render() {

    return (
      <LayoutContentWrapper >
          <div>
            <object data="http://localhost:3000/pdf/aaa.pdf" type="application/pdf" width="800" height="800">
              <p>Alternative text - include a link <a href="http://localhost:3000/pdf/aaa.pdf">to the PDF!</a></p>
            </object>
          </div>
      </LayoutContentWrapper>
    );
  }
}
