import React, { Component } from "react";
import { connect } from "react-redux";
import LayoutWrapper from "../../components/utility/layoutWrapper.js";
import actions from "../../redux/paperlist/actions";
//import axios from "axios";
import PageHeader from "../../components/utility/pageHeader";
import IntlMessages from "../../components/utility/intlMessages";
import { List, Icon } from "antd";
import { Comment, Tooltip, Rate } from "antd";
import moment from "moment";

// import { PaperUploader } from "../PaperUploader";
import Button from "../../components/uielements/button";

import { Link } from "react-router-dom";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Papers extends Component {
  constructor(props) {
    super(props);
    const { initData } = this.props;
    initData();
    const data = [
      {
        actions: [<span>Reply to</span>],
        author: "Han Solo",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: (
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        ),
        datetime: (
          <Tooltip
            title={moment()
              .subtract(1, "days")
              .format("YYYY-MM-DD HH:mm:ss")}
          >
            <span>
              {moment()
                .subtract(1, "days")
                .fromNow()}
            </span>
          </Tooltip>
        )
      },
      {
        actions: [<span>Reply to</span>],
        author: "Han Solo",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: (
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        ),
        datetime: (
          <Tooltip
            title={moment()
              .subtract(2, "days")
              .format("YYYY-MM-DD HH:mm:ss")}
          >
            <span>
              {moment()
                .subtract(2, "days")
                .fromNow()}
            </span>
          </Tooltip>
        )
      }
    ];

    //console.log(this.state.contactOptions)
  }

  componentDidMount() {
    const { initData } = this.props;
    initData();
  }

  render() {
    // profileItems = papers.map(paper => (
    //   <ProfileItem key={paper._id} paper={paper} />
    // ));

    return (
      <LayoutWrapper>
        <PageHeader>
          {<IntlMessages id="forms.formsWithValidation.header_paperlist" />}
        </PageHeader>
        <List
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3
          }}
          dataSource={this.props.paperList}
          renderItem={item => (
            <List.Item
              key={item._id}
              actions={[
                <IconText type="star-o" text="0" />,
                <IconText type="like-o" text="0" />,
                <IconText type="message" text="2" />,
                <Rate allowHalf defaultValue={2.5} />,
                <Button type="primary" htmlType="submit">
                  <Link to={"/dashboard/paperUploader"}> Add Comment</Link>
                </Button>
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                // title={<a>{item.title}</a>}
                title={
                  <a href={"http://localhost:3000/pdf/" + item.fileName}>
                    {item.title} See full text
                  </a>
                }
                // author={item.author}
                description={<p>{item.author}</p>}
                // description={<a>{item.abstract}</a>}
              />
              <p>Abstract: {item.abstract} </p>
              {/* convert create time to number */}
              <p>Paper Numeber: {Number(new Date(item.createdAt))} </p>
            </List.Item>
          )}
        />
        <List
          className="comment-list"
          header={`${data.length} replies`}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          )}
        />
      </LayoutWrapper>
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
