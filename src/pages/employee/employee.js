import React from "react";
import { customers } from './datasource';
import { DataGridContext } from "./contextmenu";

function EmployeePage() {

    return (
        <>
            <DataGridContext
                id="datagrid"
                dataSource={customers}
            />
        </>
    );
}

export default EmployeePage;
