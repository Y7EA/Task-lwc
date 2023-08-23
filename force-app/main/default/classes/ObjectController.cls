public with sharing class ObjectController {

    @AuraEnabled(cacheable=true)
    public static List<sObject> getObjectList(String objectName) {
        try{
            return [SELECT Id, FirstName, LastName, Title, Phone, Email, Status__c FROM Contact LIMIT 10];
        }
        catch (Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static string updateContactDetails(Object contactData){
            System.debug('contactData:' + contactData);
            List<Contact> contactList = (List<Contact>) JSON.deserialize(
                JSON.serialize(contactData),List<Contact>.class);
                if(!contactList.isEmpty()){
                    update contactList ;
                    return 'Success Update';
                }
                return 'Failed';
            
        }
        
    }

