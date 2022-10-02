import React from "react";
import DropZone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import './index.css'

const DropFile = ({setImage}) => {

    const validate = ({file}) => {
        // console.log(file);
        setImage(file.name);
    }
    return <div className="drop-area">
        <DropZone
            // getUploadParams={getUploudParam}
            // onChangeStatus = {handleChangeStatus}
            // onSubmit = {handleSubmit}
            maxFiles={1}
            validate={validate}
            accept = "image/*">
                
        </DropZone>
    </div>
}

export default DropFile