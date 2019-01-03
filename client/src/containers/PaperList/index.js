import React, { Component } from "react";
import { connect } from "react-redux";

//import ProfileItem from "./ProfileItem";
import actions from "../../redux/paperlist/actions";
//import axios from "axios";

import {  List, Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Papers extends Component {
  constructor(props) {
    super(props);
    const {  initData } = this.props;
    initData();
    //console.log(this.state.contactOptions)
  }
  componentDidMount() {
    const {  initData } = this.props;
    initData();
  }



  render() {

    // profileItems = papers.map(paper => (
    //   <ProfileItem key={paper._id} paper={paper} />
    // ));

    return (
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={this.props.paperList}
        renderItem={item => (
          <List.Item
            key={item._id}
            actions={[<IconText type="star-o" text={item.reference_number} />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
          >
            <List.Item.Meta
              title={<a>{item.author}</a>}
            />
            {<a href={'http://localhost:3000/pdf/'+item.fileName}>{item.fileName}</a>}
          </List.Item>
        )}
      />
    );
  }
}




function mapStateToProps(state) {

  return {
    paperList: state.PaperList.paperlist
  };
}

export default connect(
  mapStateToProps,
  actions
)(Papers);
