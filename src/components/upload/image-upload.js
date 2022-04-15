import React, { useState, useCallback, useEffect, Component } from "react";
import { getFiles, uploadMedia } from "../../helpers/uploadImage";
import Gallery from "react-grid-gallery";
import { IMG_URL } from "../../constants";

export default function UploadImages(props) {
  const [width, setWidth] = useState(-1);
  const [currentFile, setCurrentFile] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [imageInfos, setImageInfos] = useState([]);
  const [imageGallery, setImageGallery] = useState([
    {
      src: null,
    },
  ]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const measureRef = React.useRef();

  const selectFile = async (e) => {
    setCurrentFile(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setProgress(0);
    setMessage("");
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    //  alert(props.refId);
    getFiles(props.refId).then((files) => {
      const photos = files.data.data;
      let newMarkers = photos.map((el) => ({
        src: IMG_URL + el.url,
        thumbnail: IMG_URL + el.ThumbUrl,
      }));
      //  alert(newMarkers);
      setImageInfos(files.data.data);
      setImageGallery(newMarkers);
      //  alert(imageGallery);
       console.log("imageInfos", imageGallery);
    });
  }, []);

  function upload() {
    setProgress(0);

    uploadMedia(currentFile, props.refId, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);

        //  return getFiles(props.refId);
      })
      .then((files) => {
        setImageInfos(files.data.data);
        return getFiles(props.refId);

        //  console.log("imageInfos", this.state.imageInfos);
      })
      .catch((err) => {
        setProgress(0);
        setMessage("Could not upload the image!");
        setCurrentFile(undefined);
        console.log('err', err)
      });
  }
  // {({ measureRef }) => {
  //   if (width < 1) {
  //     return <div ref={measureRef} />;
  //   }
  //   let columns = 1;
  //   if (width >= 480) {
  //     columns = 2;
  //   }
  //   if (width >= 1024) {
  //     columns = 3;
  //   }
  //   if (width >= 1824) {
  //     columns = 4;
  //   }
  // }

  return (
    <>
      {/* <Measure
        bounds
        onResize={(contentRect) =>
          setWidth({ width: contentRect.bounds.width })
        }
      >
        {({ measureRef }) => {
          if (width < 1) {
            return <div ref={measureRef} />;
          }
          let columns = 1;
          if (width >= 480) {
            columns = 2;
          }
          if (width >= 1024) {
            columns = 3;
          }
          if (width >= 1824) {
            columns = 4;
          } */}
      <div>
        <div className="row">
          <div className="col-12">
           <span style={{display:'inline-block'}}> <h5>{props.title ? props.title : `Upload pictures or images`}</h5></span> 
           {props.backArrow && (

            <span style={{display:'inline-block',float:'right'}}> <i class="fa fa-arrow-left" aria-hidden="true" title="Go back" onClick={props.SetFormStep}></i></span>

           )}
          
            <hr />
            {(props.role !=='shipper') &&(
                  <>

                      <input
                      type="file"
                      name="file-5[]"
                      id="file-5"
                      className="inputfile inputfile-4"
                      onChange={selectFile}
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
                      {/* <span>
                      {this.state.uploading
                        ? this.state.loaded + "%"
                        : this.state.message}
                      </span> */}
                      </label>
                      <br />
                      <div style={{ "padding-left": "40px" }}>
                      <button
                        className="btn btn-success btn-sm "
                        disabled={!currentFile}
                        onClick={upload}
                      >
                        Upload
                      </button>
                      </div>
                    </>

            )}
           
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
          {/* <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {imageInfos &&
              imageInfos.map((img, index) => (
                <li className="list-group-item" key={index}>
                  <a href={img.url}>{img.FileName}</a>
                </li>
              ))}
          </ul> */}
          <div ref={measureRef} style={{ height: 500, overflow: "scroll" }}>
            <Gallery
              images={imageGallery}
              enableLightbox={true}
              // maxRows={3}
              backdropClosesModal
              // currentImage={3}
              // isOpen={ true}
            />
            {/*  <Gallery photos={imageGallery} onClick={openLightbox} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={imageGallery.map((x) => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title,
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
                 <Lightbox
            onClick={this.openLightbox}
            images={imageInfos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        */}
          </div>
        </div>
      </div>
      ;
      {/* }}
      </Measure> */}
    </>
  );
}
