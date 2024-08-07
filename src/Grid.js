import React, {useState} from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import * as formula from '@formulajs/formulajs';

export default function Grid() {

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "Department", editable: true },
    { field: "Headcount", editable: true },
    { field: "Base Salary", editable: true },
    { field: "Bonus", editable: true },
    { field: "Tax", editable: true },
    { field: "Total Comp", editable: true,
      valueGetter: (obj) => {
        return obj.data["Base Salary"] + (obj.data["Bonus"] * obj.data["Tax"]);
      },
      valueSetter: (obj) => {
        return obj.data["Base Salary"] + (obj.data["Bonus"] * obj.data["Tax"]);
    } },
  ]);

  const [rowData, setRowData] = useState([
    { Department: "Engineering", Headcount: 5, "Base Salary": 5000, Bonus: 1000, Tax: 0.2 },
    { Department: "Sales", Headcount: 5, "Base Salary": 5000, Bonus: 1000, Tax: 0.2 },
    { Department: "Marketing", Headcount: 5, "Base Salary": 5000, Bonus: 1000, Tax: 0.2 },
  ]);
  
  return (
    // wrapping container with theme & size
    <div
     className="ag-theme-quartz" // applying the Data Grid theme
     style={{ height: 500 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          enableCellExpressions={true}
      />
    </div>
   );
}