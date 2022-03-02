import React, { Component } from "react";
import { getFiles, uploadMedia } from "../../helpers/uploadImage";

export default class UploadImages extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      currentFile: undefined,
      previewImage: undefined,
      progress: 0,
      message: "",
      referenceId: props.refId ? props.refId : "",

      imageInfos: [],
    };
  }

  componentDidMount() {
    getFiles(this.state.referenceId).then((response) => {
      this.setState({
        imageInfos: response.data.data,
      });
    });
  }

  selectFile(event) {
    this.setState({
      currentFile: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0]),
      progress: 0,
      message: "",
    });
  }

  upload() {
    this.setState({
      progress: 0,
    });

    uploadMedia(this.state.currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return getFiles(this.state.referenceId);
      })
      .then((files) => {
        this.setState({
          imageInfos: files.data.data,
        });
      })
      .catch((err) => {
        this.setState({
          progress: 0,
          message: "Could not upload the image!",
          currentFile: undefined,
        });
      });
  }

  render() {
    const { currentFile, previewImage, progress, message, imageInfos } =
      this.state;

    return (
      <div>
        <div className="row">
          <div className="col-8">
            <input
              type="file"
              name="file-5[]"
              id="file-5"
              className="inputfile inputfile-4"
              onChange={this.handleFileChange}
            />
            <label htmlFor="file-5">
              <figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                >
                  <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
                </svg>
              </figure>
              <span>
                {this.state.uploading
                  ? this.state.loaded + "%"
                  : this.state.message}
              </span>
            </label>

            <button className="submit" onClick={this.handleUpload}>
              Upload
            </button>

            <label className="btn btn-default p-0">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={this.selectFile}
              />
            </label>

            <label htmlFor="file-5">
              <figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                >
                  <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
                </svg>
              </figure>
            </label>
          </div>

          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              disabled={!currentFile}
              onClick={this.upload}
            >
              Upload
            </button>
          </div>
        </div>

        {currentFile && (
          <div className="progress my-3">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        {previewImage && (
          <div>
            <img className="preview" src={previewImage} alt="" />
          </div>
        )}

        {message && (
          <div className="alert alert-secondary mt-3" role="alert">
            {message}
          </div>
        )}

        <div className="card mt-3">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {imageInfos &&
              imageInfos.map((img, index) => (
                <li className="list-group-item" key={index}>
                  <a href={img.url}>{img.FileName}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
