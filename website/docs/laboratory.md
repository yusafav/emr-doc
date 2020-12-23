---
id: laboratory
title: Laboratory
sidebar_label: Laboratory
# slug: /
---

Laboratory section deals with the lab tests available for the patient.

## Listing The Specimens

- This section lists the specimens which the patient needs to be tested.

![specimen](assets/laboratory/lab_1.png)

- The table contains:

  - `Types` : It is the name of the specimen.
  - `Actions` : It includes generally three main functions :

    - #### Manage Test Type
      - It includes the list of chemical components of the specimen which needs to be tested.
      <!-- ![manage specimen](assets/laboratory/laborartory_manage_tests.png) -->
    - #### Edit

      - On clicking the edit icon the edit modal will be opened.
      - The admin can either edit the specimen name in the `Type` field and save it .
      ![edit specimen](assets/laboratory/laboratory_edit.png)

    - #### Delete
      - On Clicking the delete icon a confirmation modal will be displayed before deleting the specimen permanently.
      - After confirming the delete action the deleted specimen will no longer be availble for testing.
      ![delete specimen](assets/laboratory/laboratory_delete.png)


  

## Create New Specimen

- Click on the `New Type` button
- In the modal add the name of the new specimen in the `Type` field.
- Click on the `Save` button to add the new specimen.

![new specimen](assets/laboratory/laborartory_new_type.png)

## Listing The Chemical Components

- This section lists the chemical components of the specimen which needs to be tested.

![Chemical Component](assets/laboratory/laborartory_manage_tests.png)

- The table contains:

  - `Test Types` : It is the name of the chemical componnet of the selected specimen.
  - `Actions` : It includes generally three main functions :

    - #### Manage Tests
      - It includes the list of chemical components of the specimen which needs to be tested.
    - #### Edit

      - On clicking the edit icon the edit modal will be opened.
      - The admin can either edit the chemical component name in the `Type` field and save it .
      ![edit Chemical Component](assets/laboratory/edit_2.png)

    - #### Delete
      - On Clicking the delete icon a confirmation modal will be displayed before deleting the chemical component of the specimen permanently.
      - After confirming the delete action the deleted the chemical component of the specimen will no longer be availble for testing.
      ![delete Chemical Component](assets/laboratory/delete_2.png)
  
  

## Create New Chemical Component for the specimen

- Click on the `New Test Type` button
- In the modal add the name of the new chemical component of the specimen in the `Type` field.
- Click on the `Save` button to add the new specimen.

![new chemical component](assets/laboratory/new_test.png)

## Listing the Tests

- This section displays the list of currently available tests.
![test](assets/laboratory/lab_test_main.png)


- The table contains:

  - `Tests` : It is the name of the chemical componnet of the selected specimen.
  - `Actions` : It includes generally three main functions :

    - #### Edit

      - On clicking the edit icon the edit modal will be opened.
      - The admin can either edit the test name in the `Type` field and save it .
      ![edit test](assets/laboratory/lab_test_edit.png)

    - #### Delete
      - On Clicking the delete icon a confirmation modal will be displayed before deleting the test permanently.
      - After confirming the delete action the test will no longer be availble.
      ![delete test](assets/laboratory/lab_test_delete.png)



## Create New Test

- Click on the `Create New Test` button
- In the modal add the name of the new chemical component of the specimen in the `Type` field.
- Click on the `Save` button to add the new specimen.


![new test](assets/laboratory/new_test.png)

## UI Change

Steps to be followed in the Doctor screen are:

- Select Specimen from the `Type` field.
- Then select the Chemical Component from the `Test` field.


The resulting doctor screen is as follows:
![Changes in doctor page](assets/laboratory/doctor_screen.png)