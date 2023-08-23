import { LightningElement, wire } from 'lwc';
import getObjectList from '@salesforce/apex/ObjectController.getObjectList';
import updateContactDetails from '@salesforce/apex/ObjectController.updateContactDetails';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { updateRecord } from 'lightning/uiRecordApi';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import STATUS_FIELD from "@salesforce/schema/Contact.Status__C";

const columns = [
    { label: 'First Name', fieldName: 'FirstName', editable: 'true' },
    { label: 'Last Name', fieldName: 'LastName', editable: 'true' },
    { label: 'Title', fieldName: 'Title', editable: 'true' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone', editable: 'true' },
    { label: 'Email', fieldName: 'Email', type: 'email', editable: 'true' },
    {
        label: 'Status', fieldName: 'Status__c', type: 'Picklist', wrapText: true,
        typeAttributes: {
            options: [
                { label: 'Active', value: 'Active' },
                { label: 'Available', value: 'Available' },
                { label: 'Busy', value: 'Busy' },
                { label: 'Appear away', value: 'Appear away' },
                { label: 'Offline', value: 'Offline' }
            ],
            value: { fieldName: 'Status__c' },
            picklistid: 'status-picklist-Id',
            context: { fieldName: 'Id' },
            placeholder: 'Choose Status',
        }
    },
    {
        label: 'Gender', fieldName: 'Gender', type: 'Picklist', wrapText: true,
        typeAttributes: {
            options: [
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
            ],
            picklistid: 'gender-picklist-Id',
            context: { fieldName: 'Id' },
        }
    }
]

export default class Client extends LightningElement {
    data = [];
    columns = columns;
    draftValues = [];
    wiredResult;

    @wire(getObjectList)
    wiredData(result) {
        this.wiredResult = result;
        if (result.data) {
            this.data = result.data;
        } else if (result.error) {
            console.log('Error in fetch data ! ');
        }
    }
    handleSave(event) {
        const updatefield = event.detail.draftValues;
        console.log('Updatefield: ' + JSON.stringify(updatefield))
        updateContactDetails({ contactData: updatefield })
            .then(data => {
                console.log("Apex data : " + JSON.stringify(data))
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Records Updated Successfully !',
                        variant: 'success'
                    })
                )
                this.draftValues = [];
                this.refreshData();
            })
            .catch(error => {
                console.log("Error: " + JSON.stringify(error))
            })
    }

    async refreshData() {
        await refreshApex(this.wiredResult);
    }

    handlePicklistChange(event) {
        const { context, value, picklistid } = event.detail.data;
        console.log(`Context: ${context}, Value: ${value}, Picklist ID: ${picklistid}`);
    }

}
