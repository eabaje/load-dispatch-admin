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
  //alert(referenceId);
  formData.append("RefId", referenceId);
  formData.append("file", file);

  return axios.post("/upload/uploadImageWithData", formData, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    onUploadProgress,
  });
};

export const UpdateDriverFile = (
  file,
  referenceId,
  fileType,
  companyId,
  email,
  onUploadProgress
) => {
  let formData = new FormData();
  //alert(referenceId);
  formData.append("DriverId", referenceId);
  formData.append("FileType", fileType);
  formData.append("CompanyId", companyId);
  formData.append("Email", email);
  formData.append("file", file);

  return axios.post("/driver/updateFile", formData, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    onUploadProgress,
  });
};

export const getFiles = (referenceId) => {
  return axios.get(`/upload/getFiles/${referenceId}`);
};

export const getDriverImg = (driverId) => {
  return axios.get(`/driver/findOne/${driverId}`);
};
