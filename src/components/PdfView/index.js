import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css"

const PdfView = () => {
    return (
        <div
            style={{
                border: "1px solid rgba(0, 0, 0, 0.3)",
                height: "162px",
                weight: '557px',
            }}
        >
            <Viewer
            fileUrl="/Schedule_CH7_-_FER_1.pdf" 
            />
        </div>
    )
}

export default PdfView