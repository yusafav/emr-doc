---
id: userManagement
title: User Management
sidebar_label: User Management
# slug: /
---

## Listing the roles

User Management section displays the list of users in a table and these users can be filtered based on <code>User role</code> , <code>Name</code> , <code>Status</code> , <code>Email</code>.

![List of Users](assets/userManagement/userManagementList.png)

## User Details

User details include:

- `Name` : It is the name of the user.
- `User Type` : It is the role of the user.
- `Department` : It denotes the department to which the user belongs.
- `Email` : It is the registered email of the user.
- `Mobile Number` : It is the phone number of the user.
- `Status` : It is to indicate whether the user is active or not.
- `Updated By` : It is the name of the user who updated the user details recently.
- `Last Updated` : It is the date when the user details are recently updated.
- `Actions` : It includes two actions:

  - ##### Edit

  - It allows the admin to edit the user details.The admin can edit the following fields of the user:

  ###### Fields

  - `User Type` , `Department` , `First Name` , `Last Name` , `Gender` , `Date of Birth` , `Primary Contact No` , `Secondary Contact Number` , `Consultation Time (Minutes)` , `Start Time` , `End Time` , `Consultation Fee` , `Privileges` , `Active Status`.
  - On editing the selected user the admin can assign a special user permission by selecting the particular permission under the privileges section

![edit user](assets/userManagement/editUser.png)

- ##### Delete
  It deletes the user permanently.
  - On Clicking the delete icon a confirmation modal will be displayed before deleting the user permanently.
  - After confirming the delete action the deleted user will not be displayed no longer in the user table.

![delete user](assets/userManagement/deleteUser.png)

## Create New User

New user can be added by clicking the <code>Create User</code>.

Create User modal have same [fields](#fields) as in edit modal.

- On creating a new user the admin can assign a special user permission by selecting the particular permission under the privileges section

![Create new user](assets/userManagement/createNewUserRole.png)
