import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function Pdfviewer(props) {
    const { pdfLink} = props;
    const [numPages, setnumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);


  const	onDocumentLoadSuccess = ({ numPages }) => {
		setnumPages({ numPages });
	};

  const	goToPrevPage = () =>
    setPageNumber(() => ({ pageNumber: pageNumber - 1 }));
 const	goToNextPage = () =>
    setPageNumber(() => ({ pageNumber: pageNumber + 1 }));

	

		return (
			<div>
				<nav>
					<button onClick={this.goToPrevPage}>Prev</button>
					<button onClick={this.goToNextPage}>Next</button>
				</nav>

				<div style={{ width: 600 }}>
					<Document
						file={pdfLink}
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page pageNumber={pageNumber} width={600} />
					</Document>
				</div>

				<p>
					Page {pageNumber} of {numPages}
				</p>
			</div>
		);
}
