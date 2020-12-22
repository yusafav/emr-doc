---
id: manageSections
title: Manage Sections
sidebar_label: Manage Sections
# slug: /
---

These are the sections which will be displayed in the side bar of different screens based on the roles and permissions.

## Listing Sections

Manage section contains a table with each row having .

- `Name` :It is the name of the section which will appear in the user screen.
- `Manage Forms` button: It is used to add new sub sections in the section

#### Change the Section Order

- Click on the `Change Order` button.
- Change the order as per the requirement.
- click on `Save Order`.

## Create New Section

On clicking the `New Section` button a modal will be opened which contains:

- `Name`: It is the name of the new section.
- `Icon`: It is the icon for the new section which will appear at the left side of the section name in the user screen.
- `Status`: It is the status of the section to determine whether the section shoul be dispalyed in the user screen or not.

## Listing Sub sections

These are the list of sub sections availble for the selected section.It Contains:

- `Name` : It is the name of the sub section which will appear inside the section in user screen.
- `Manage Fields` button: It is used to add new fields in the selected section.

#### Change the Sub Section Order

- Click on the `Change Order` button.
- Change the order as per the requirement.
- click on `Save Order`.

## Create New Sub Section

On clicking the `Create New Form` button a modal will be opened which contains:

- `Name`: It is the name of the new sub section of the selected section.

## Listing Fields

These are the list of sub sections availble for the selected section.It Contains:

- `Fields` : It is the name of the sub section which will appear inside the section in user screen.
- `Type`: It is the type of the field like `input text`, `input number, `dropdown`, `radio button`, `text area`
- `Mandatory`: It is a checkbox to record whether the field is mandatory or not.
- `Input Box Size`:It allows the user to choose the size of the input box from the options.
  - Full Width: On selecting the full width the field occupies the full width of the form conatiner.
  - Half width: On selecting the half width the field occupies the half width of the form conatiner.
- Actions:Each field has two actions:

  - #### Edit:

    - On clicking the edit icon the edit modal will be opened.
    - The admin can edit the field details .
    - The edit modal contains :

    ###### fields

    - `Name`: It is the name of the new sub section of the selected section.

    - `Type`: It is the type of the field like `input text`, `input number, `dropdown`, `radio button`, `text area`
    - `Mandatory`: It is a checkbox to record whether the field is mandatory or not.
    - `Input Box Size`:It allows the user to choose the size of the input box from the options.

    - Full Width: On selecting the full width the field occupies the full width of the form conatiner.
    - Half width: On selecting the half width the field occupies the half width of the form conatiner.

  - #### Delete:

    - On Clicking the delete icon a confirmation modal will be displayed before deleting the field permanently.
    - After confirming the delete action the deleted field will no longer be displayed in the section.

#### Change the Field Order

- Click on the `Change Order` button.
- Change the order as per the requirement.
- click on `Save Order`.

## Create New Field

On clicking the `Create New Field` button a modal will be opened which contains [field](#fields) details.
