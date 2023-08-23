import LightningDatatable from 'lightning/datatable';
import template from './customDatatable.html';
export default class CustomDatatable extends LightningDatatable {
    static customTypes = {
        Picklist: {
            template: template,
            standardCellLayout: true,
            typeAttributes: ['label', 'placeholder', 'options', 'value', 'context', 'variant', 'picklistid', 'name']
        }
    }
}

