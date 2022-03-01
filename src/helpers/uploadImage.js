import axios from "./axiosInstance";

export const uploadImage = (file) => (onSuccess) => (onError) => {
  const data = new FormData();
  data.append("filePicUrl", file);
  console.log(`object`, data);
  axios
    .post("/upload/uploadImage", data, {
      // receive two parameter endpoint url ,form data
    })
    .then((res) => {
      // then print response status

      onSuccess(res.data.filename);
    })
    .catch((error) => {
      onError(error.message);
    });
};

export const uploadDocuments = (file) => (onSuccess) => (onError) => {
  const data = new FormData();
  data.append("fileLicenseUrl", file);
  axios
    .post("/upload/uploadDocument", data, {
      // receive two parameter endpoint url ,form data
    })
    .then((res) => {
      // then print response status

      onSuccess(res.data.filename);
    })
    .catch((error) => {
      onError(error.message);
    });
};

export const uploadMedia = (file, referenceId, onUploadProgress) => {
  let formData = new FormData();
  formData.append("RefId", referenceId);
  formData.append("file", file);

  return axios.post("/upload/uploadImage", formData, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    onUploadProgress,
  });
};

export const getFiles = () => {
  return axios.get("/files");
};
