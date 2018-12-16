import React, { Component } from 'react';
import { connect } from "react-redux";
import Form from '../../components/uielements/form';
import Input from '../../components/uielements/input';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import IntlMessages from '../../components/utility/intlMessages';
import Button from '../../components/uielements/button';
import actions from '../../redux/paperuploader/actions.js';
import dateformat from 'dateformat';

const { addPaper } = actions;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};

class PaperUploader extends Component {
  constructor(props) {
    super(props);
    this.click= this.click.bind(this)

    //console.log(this.props.idToken);
  }

  componentWillReceiveProps(nextProps){
  // console.log("nextProps",nextProps.fileData.data.allFilesDetail); return false;
    let fileData = []
    console.log(nextProps.fileData.data);
    nextProps.fileData.data.allFilesDetail.forEach((element,index) => {
      //console.log("nextProps",element); return false;
      fileData[index] = [element.fileName,element.uploader,dateformat(element.updatedAt, "mmm dd, yyyy")]
    })
    this.setState({FileDetails: fileData})
  }

  updateFile(e){
    this.props.Paper.paper= {file:e.target.files[0]}
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.paper)
  };

  render() {
    return (
      <LayoutWrapper>
        <PageHeader>
          {<IntlMessages id="forms.formsWithValidation.header" />}
        </PageHeader>
        <Box>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
            >
              <Input placeholder="unavailable choice" id="error" />
            </FormItem>
            <FormItem
              {...formItemLayout}
            >
              <Input placeholder="unavailable choice" type="file" name="filePath" onChange={this.updateFile} />
            </FormItem>
            <FormItem >
              <Button type="primary" htmlType="submit">
                Upload your paper
              </Button>
            </FormItem>
          </Form>
        </Box>

      </LayoutWrapper>
    );
  }
}

function mapStateToProps(state) {
  //const { todos, colors } = state.Todos;
  console.log(state);
  return {
    Paper: state.Paper,
    // todos,
    // colors
  };
}
export default connect(mapStateToProps, {addPaper})(PaperUploader);
