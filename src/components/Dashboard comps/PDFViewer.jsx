import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import axios from 'axios';

const PdfViewer = ({email_prop}) => {
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);

  const fetchPdf = async () => {
    try {
      const emailId = email_prop; // Replace with the actual email ID
      const response = await axios.post('http://localhost:5002/api/get-pdf', { Email_ID: emailId }, {
        responseType: 'arraybuffer', // Important to receive binary data
      });

      // Convert the array buffer to a Blob
      const file = new Blob([response.data], { type: 'application/pdf' });
      setPdfData(URL.createObjectURL(file));

    } catch (err) {
      console.error('Error fetching PDF:', err);
      setError('Could not retrieve PDF');
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <button onClick={fetchPdf}>Load PDF</button>
      
      {error && <p>{error}</p>}
      
      {pdfData && (
        <div>
          <Document
            file={pdfData}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
