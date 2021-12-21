import axios from "./axiosInstance";

export const uploadImage= (file) => (onSuccess) => (onError) => {
  const data = new FormData()
  data.append('file', file)
  axios.post("/upload/uploadImage", data, { 
      // receive two parameter endpoint url ,form data 
})
.then(res => {
     // then print response status
  console.log(res.statusText);
  onSuccess(res.file);
})
.catch((error) => {
      onError(error.message);
    });
};


export const uploadDocuments= (file) => (onSuccess) => (onError) => {

  const data = new FormData()
  data.append('file', file)
    axios.post("/upload/uploadDocument", data, { 
        // receive two parameter endpoint url ,form data 
  })
  .then(res => {
       // then print response status
    console.log(res.statusText);
    onSuccess(res.file);
  })
  .catch((error) => {
        onError(error.message);
      });
  };
