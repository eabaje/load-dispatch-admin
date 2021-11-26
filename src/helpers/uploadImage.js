//import storage from '@react-native-firebase/storage';
//import { uploadFiles, DocumentDirectoryPath } from "react-native-fs";

// export default (file) => (onSuccess) => (onError) => {
//   const path = 'contact-pictures/user/777/' + file.creationDate || file.path;
//   const ref = storage().ref(path);

//   const task = ref.putFile(file.path);

//   task
//     .then(async () => {
//       const url = await ref.getDownloadURL();
//       onSuccess(url);
//       console.log('url', url);
//     })
//     .then((error) => {
//       onError(error);
//     });
// };

// var files = [
//   {
//     name: "file",
//     filename: "file.jpg",
//     filepath: DocumentDirectoryPath + "/file.jpg",
//     filetype: "image/jpeg",
//   },
// ];

// uploadFiles({
//   toUrl: "https://upload-service-url",
//   files: files,
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//   },
//   //invoked when the uploading starts.
//   begin: () => {},
//   // You can use this callback to show a progress indicator.
//   progress: ({ totalBytesSent, totalBytesExpectedToSend }) => {},
// });
