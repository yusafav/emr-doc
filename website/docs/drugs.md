---
id: drugs
title: Drugs
sidebar_label: Drugs
# slug: /
---

Drugs are the medicines prescribed by the doctor.

## Export

- The default drugs list can be exported by clicking on the `Export` button on the top.
- Downloaded file can be [imported](#Import) to get a default drugs list.

## Import

- On clicking the `Import` button import modal will be opened.
- If the user wants to import a new drugs list:
  - The admin can download the sample excel sheet by clicking the `Download the sample excelsheet` button.
  - Then prepare the new drugs list similar to the sample excel sheet .
- Select the downloaded file from the device and click on `import` button in the modal.
<!-- After exporting the default dictionary file `dictionary.xlsx` click on the `Import` button and select the downloaded file and -->

## Create New Drug

User can create a new drugs by adding the details

###### Fields

- `Drug Type` : It is the type of application meta data.
- `Code` : It is the code of the meta datas ie the values which comes in the dropdowns in various screens.
- `Text` : While adding new drug the admin can add a text for the new drug.
- `Description` : Admin can add the description for the drug
- `Actions` : Two types of actions are available for each drug.

## Searching

Drugs can be searched based on the drug code.

## Listing

Drugs section displays the list of drugs with each drug having information about [fields](#fields):

- #### Edit:

  - On clicking the edit icon the edit modal will be opened.
  - The admin can either edit the drug details and save it .
  - The edit modal contains the same [fields](#fields) displayed in the table.

- #### Delete:

  It deletes the user permanently.

  - On Clicking the delete icon a confirmation modal will be displayed before deleting the drug permanently.
  - After confirming the delete action the deleted drug will no longer be displayed in the user table.
