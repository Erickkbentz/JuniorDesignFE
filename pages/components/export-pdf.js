import React from 'react';
import ReactToPrint from 'react-to-print';
import Job_View_Page from '../job-view-page';
 
class ExportPdfComponent extends React.Component {
     
    render() {
      return (
        <div>

           {/* <h1>Export HTMl Table in PDF File</h1>  */}

          <Job_View_Page ref={(response) => (this.componentRef = response)} />
          
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
          />
        </div>
      );
    }
}
 
export default ExportPdfComponent;