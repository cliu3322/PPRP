import axios from 'axios';



export function uploadFile(file) {

  return function (dispatch) {

   const formData = new FormData();
    formData.append('image',file.file,file.file.name)
    console.log(formData);
    axios.post(`http://localhost:3000/api/uploadFile`, formData)
    .then((response)=>{
      if(response.status==201)
      {
        alert(response.data.message);

      }
      else
      {
        alert('File not uploaded, please try again');
      }

      dispatch({type: 'File_DETAIL', payload: response });
    })
  };
}
