// Import RowID ans RowElement from the interface module
import { RowID, RowElement } from  './interface';

// Declare the function from crud.js
export function insertRow(row: RowElement): RowID;
export function updateRow(rowID: RowID): void;
export function deleteRow(rowID: RowID, row: RowElement): RowID;
