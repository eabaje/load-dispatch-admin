import React from "react";
import { IMG_URL } from "../../constants";
//import ReactDOM from "react-dom";
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl:"" ,imgUrl: props.url? props.url: ""};
    
  }
 
  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    this.props.onChangePicHandler(e);
    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let { imgUrl } = this.state;
   alert(IMG_URL+imgUrl)
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {

     if(imgUrl){
      $imagePreview = <img src={IMG_URL+imgUrl} />;

     }else{
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    
    }
    }

    return (
      <div className="previewComponent" style={{ float: "right" }}>
        <div className="imgPreview">{$imagePreview}</div>
        <input
          className="form-control-file"
          type="file"
          id="filePicUrl"
          name="filePicUrl"
          onChange={(e) => this._handleImageChange(e)}
        />
      </div>
    );
  }
}

export default ImageUpload;
//ReactDOM.render(<ImageUpload />, document.getElementById("mainApp"));
//module.exports = ImageUpload;
