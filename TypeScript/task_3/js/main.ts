/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';


// Create an object called row with the type RowElement
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Insert the row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

const updatedRow: RowElement = { ...row, age: 23 };

// Update the row
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row ID: ${newRowID}`);

// Delete the row
CRUD.deleteRow(newRowID, row);
console.log(`Deleted row ID: ${newRowID}`);
