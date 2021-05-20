import React, { useState } from 'react';
import DataGrid, {
  Grouping,
  GroupPanel,
  Sorting,
  Scrolling,
  LoadPanel,
  Column,
  Summary,
  TotalItem,
  Selection
} from 'devextreme-react/data-grid';


export const DataGridContext = ({ ...rest }) => {

  const [loadPanelEnabled, setLoadPanelEnable] = useState(true);

  function onContentReady() {
    setLoadPanelEnable(false)
  }

  return (
    <>
      <DataGrid
        id='datagrid'
        allowColumnReordering={true}
        allowColumnResizing={true}
        showBorders={true}
        columnAutoWidth={true}
        onContextMenuPreparing={addMenuItems}
        showColumnLines={true}
        height={600}
        keyExpr="ID"
        {...rest}>
        <Selection mode="single" />
        <Sorting mode="single" />
        <Scrolling mode="infinite" />
        <LoadPanel enabled={loadPanelEnabled} />
        <Grouping contextMenuEnabled={true} />
        <GroupPanel visible={false} />

        <Column dataField="ID" />
        <Column dataField="CompanyName" />
        <Column dataField="Address" />
        <Column dataField="City" />
        <Column dataField="State" />
        <Column dataField="Zipcode" dataType="number" />
        <Column dataField="Phone" />
        <Column dataField="Fax" />
        <Column
          dataField="Website"
          visible={false} />

        <Summary>
          <TotalItem
            column="ID"
            summaryType="count"
            showInColumn="storeCity" />
        </Summary>

      </DataGrid>
    </>
  )
}

//Footer context menu
function addMenuItems(e) {

  
  if (e.target == 'header') {
    //....
  }
  if (e.target == "footer" && e.column.dataField != null) {
    if (!e.items) e.items = [];
    let totalItems = e.component.option("summary.totalItems");
    e.items.push({
      text: "Sum",
      onItemClick: function () {
        totalItems.push({ column: e.column.dataField, summaryType: "sum" });
        e.component.option("summary.totalItems", totalItems);
        console.log(totalItems)
      }
    });
    e.items.push({
      text: "Avg",
      onItemClick: function () {
        totalItems.push({ column: e.column.dataField, summaryType: "avg" });
        e.component.option("summary.totalItems", totalItems);
      }
    });
  };
}

