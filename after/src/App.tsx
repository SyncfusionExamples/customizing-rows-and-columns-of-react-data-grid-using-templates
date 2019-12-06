import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective
} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
import './App.css';

const App: React.FC = () => {

  const queryCellInfoEvent = (args: any) => {
    if (args.data.OrderID == 10254 && args.column.field === 'CustomerID')
      args.rowSpan = 2;

    if (args.data.ShipCountry == 'France' && args.column.field === 'ShipCountry')
      args.colSpan = 2;
  }

  const rowDataBound = (args: any) => {
    if (args.data.Freight > 50) {
      args.row.classList.add('above-50');
    }
  }

  const template = (props: any): any => {
    return <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/50/50`} alt={props.EmployeeID} />;
  }
  const conditionalTemplate = (props: any): any => {
    if (props.Freight > 100) {
      return (<span>Platinum</span>);
    } else if (props.Freight > 75) {
      return (<span>Gold</span>);
    } else if (props.Freight > 50) {
      return (<span>Silver</span>);
    }
  }
  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <GridComponent dataSource={data}
        queryCellInfo={queryCellInfoEvent}
        rowDataBound={rowDataBound}
      >
        <ColumnsDirective>
          <ColumnDirective headerText='Image' width='180' textAlign='Center' template={template} />
          <ColumnDirective field='OrderID' headerText='Invoice ID' textAlign='Right' width='100' isPrimaryKey={true} />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' />
          <ColumnDirective field='ShipName' headerText='Ship Name' />
          <ColumnDirective field='Freight' textAlign='Right' format='C2' width='100' />
          <ColumnDirective headerText='Subscription' width='180' template={conditionalTemplate} textAlign='Center' />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
}

export default App;