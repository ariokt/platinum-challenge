import React from "react";
import DropZone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import './index.css'

const DropFile = ({setImage}) => {

    const validate = ({file}) => {
        setImage(file.name);
    }
    return <div className="drop-area">
        <DropZone
            maxFiles={1}
            validate={validate}
            accept = "image/*">
                
        </DropZone>
    </div>
}

export default DropFile