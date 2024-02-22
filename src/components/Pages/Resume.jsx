// import React from "react";
// import { MdFileDownload } from "react-icons/md";
// import { Document, Page, pdfjs } from "react-pdf";
// import Resume from "../../assets/MyResume.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// export default function ResumeComponent() {
//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = Resume;
//     link.download = "MyResume.pdf";
//     link.click();
//   };

//   return (
//     <div className="custom-resume">
//       <h2>Resume</h2>
//       <Document file={Resume}>
//         <Page pageNumber={1} />
//       </Document>
//       <button className="custom-download-btn" onClick={handleDownload}>
//         <MdFileDownload className="custom-download-icon" />
//         Download Resume
//       </button>
//     </div>
//   );
// }
