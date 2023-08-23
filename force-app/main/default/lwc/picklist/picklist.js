import { LightningElement, api } from 'lwc';

export default class Picklist extends LightningElement {
    @api selectedValue = ' ';
    @api picklistid = '';
    @api context = '';
    @api options;

    handlePicklistChange(event) {
        this.selectedValue = event.target.value;
        this.dispatchEvent(new CustomEvent('picklistchanged', {
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: {
                data: {
                    context: this.context,
                    value: this.selectedValue,
                    picklistid: this.picklistid,
                }
            }
        }));
    }
}
