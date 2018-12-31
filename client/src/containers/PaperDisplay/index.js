// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import Form from '../../components/uielements/form';
// import Input from '../../components/uielements/input';
// import PageHeader from '../../components/utility/pageHeader';
// import Box from '../../components/utility/box';
// import LayoutWrapper from '../../components/utility/layoutWrapper.js';
// import IntlMessages from '../../components/utility/intlMessages';
// import Button from '../../components/uielements/button';
// import actions from '../../redux/paperuploader/actions.js';
// import axios from 'axios';

// const { addPaper } = actions;
// const FormItem = Form.Item;

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 5 }
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 12 }
//   }
// };

// class PaperUploader extends Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     let data = new FormData();
//     data.append('author', this.state.author);
//     data.append('file', this.state.file);

//     this.props.addPaper(data)
//     // axios.post('http://localhost:3000/api/uploadFile', data).then((response) => {
//     //   console.log(response)
//     // })
//   };
//   updateFile = (event) => {
//     this.setState({file:event.target.files[0]})
//     //data.append('file', event.target.files[0])

//   };

//   updateAuthor = (event) => {

//     this.props.author=event.target.value;
//   };

//   render() {
//     return (
//       <LayoutWrapper>
//         <PageHeader>
//           {<IntlMessages id="forms.formsWithValidation.header" />}
//         </PageHeader>
//         <Box>
//           <Form onSubmit={this.handleSubmit}>
//             <FormItem
//               {...formItemLayout}
//             >
//               <Input placeholder="Author" id="author" onChange={event => this.setState({ author: event.target.value })}/>
//             </FormItem>
//             <FormItem
//               {...formItemLayout}
//             >
//               <input type="file" name="file" onChange={this.updateFile} />
//             </FormItem>
//             <FormItem >
//               <Button type="primary" htmlType="submit">
//                 Upload your paper
//               </Button>
//             </FormItem>
//           </Form>
//         </Box>

//       </LayoutWrapper>
//     );
//   }
// }

// function mapStateToProps(state) {
//   //const { todos, colors } = state.Todos;
//   //console.log(state);
//   return {
//     Paper: state.Paper,
//     // todos,
//     // colors
//   };
// }
// export default connect(mapStateToProps, {addPaper})(PaperUploader);
