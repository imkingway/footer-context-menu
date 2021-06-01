import React from 'react';

import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Paging,
  SearchPanel
} from 'devextreme-react/data-grid';
import Button from 'devextreme-react/button';
import { customers } from './data.js';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import  * as FONTS  from './NotoSerifSC-Regular-normal'

import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';

const dataGridRef = React.createRef();

export default function PdfButton() {
  function exportGrid() {
    const doc = new jsPDF();
    const dataGrid = dataGridRef.current.instance;
    const font = FONTS.FONT.NOTO;
    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: dataGrid
    }).then(() => {
      doc.addFileToVFS('NotoSerifSC-Regular-normal.ttf', font);
      doc.addFont('NotoSerifSC-Regular-normal.ttf', 'NotoSerifSC-Regular', 'normal');
      doc.save('Customers.pdf');
    });
  }

  return (
    <React.Fragment>
      <div>
        <Button
          id='exportButton'
          icon='exportpdf'
          text='Export to PDF'
          onClick={exportGrid}
        />
        <DataGrid
          ref={dataGridRef}
          dataSource={customers}
          allowColumnReordering={true}
          showBorders={true}
        >
          <GroupPanel visible={true} />
          <SearchPanel visible={true} />
          <Grouping autoExpandAll={true} />
          <Paging defaultPageSize={10} />

          <Column dataField='CompanyName' dataType='string' />
          <Column dataField='Phone' dataType='string' />
          <Column dataField='Fax' dataType='string' />
          <Column dataField='City' dataType='string' />
          <Column dataField='State' dataType='string' groupIndex={0} />
        </DataGrid>
      </div>
    </React.Fragment>
  );
}