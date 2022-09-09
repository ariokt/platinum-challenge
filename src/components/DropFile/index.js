import React from "react";
import DropZone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import './index.css'

const DropFile = () => {
    // untuk tempat uploud file yang di uploud ke api
    const getUploudParam = ({meta}) => {
        return {url: 'https/httpbin.org/post'}
    }

    const handleChangeStatus = ({meta, file}, status) => {
        console.log(status, meta, file)
    }

    const handleSubmit = (files, allFiles) => {
        console.log(files.map((f) => f.meta));
        allFiles.forEach((f) => f.remove());
    }
    return <div className="drop-area">
        <DropZone
            getUploadParams={getUploudParam}
            onChangeStatus = {handleChangeStatus}
            onSubmit = {handleSubmit}
            accept = 'pdf/*'
            inputContent ="AAAA"
        ><div>Drag aaas</div></DropZone>
    </div>
}

export default DropFile