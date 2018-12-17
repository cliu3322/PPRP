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
import axios from 'axios';

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
    this.updateFile= this.updateFile.bind(this);
    this.updateAuthor= this.updateAuthor.bind(this)
    //console.log(this.props.idToken);
  }

  componentWillReceiveProps(nextProps){

  }

  updateFile(e){
    //this.props.Paper.paper= {file:e.target.files[0]}
    const data = new FormData()
    data.append('file', e.target.files[0])
    axios.post(`http://localhost:3000/api/uploadFile`, data)
  }
  updateAuthor(e){
    this.props.Paper.author= e.target.value;
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData()
    data.append('file', this.props.Paper.paper);
    data.append('author', this.props.Paper.author);
    console.log(data);
    //this.props.addPaper(data)
    //axios.post(`http://localhost:3000/api/uploadFile`, data)
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
              <Input placeholder="Author" id="author" onChange={this.updateAuthor}/>
            </FormItem>
            <FormItem
              {...formItemLayout}
            >
              <input type="file" name="file" onChange={this.updateFile} />
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
  //console.log(state);
  return {
    Paper: state.Paper,
    // todos,
    // colors
  };
}
export default connect(mapStateToProps, {addPaper})(PaperUploader);
