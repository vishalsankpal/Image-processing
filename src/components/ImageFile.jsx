import React, { useRef, useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
const ImageFile = ({ filterVal }) => {
  const resultRef = useRef(null);
  const [file, setFile] = useState(null);
  const changeHandler = (e) => {
    console.log(e);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const saveImage = () => {
    console.log(resultRef);
    domtoimage
      .toBlob(resultRef.current)
      .then(function (blob) {
        saveAs(blob, "my-node.png");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      Images
      <input type="file" accept="image/*" onChange={changeHandler} />
      {file && (
        <div>
          <figure style={{ width: "100%" }}>
            <img src={file} className={filterVal} ref={resultRef} />
          </figure>
          <button onClick={saveImage}>Save</button>
        </div>
      )}
    </div>
  );
};

export default ImageFile;
