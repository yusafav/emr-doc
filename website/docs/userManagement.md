---
id: userManagement
title: User Management
sidebar_label: User Management
# slug: /
---

#### Listing the roles

User Management section displays the list of users in a table and these users can be filtered based on <code>User role</code>,<code>Name</code>,<code>Status</code>,<code>Email</code>

#### User Details

User details include:

- name : It is the name of the user.
- User Type:It is the role of the user.
- Department:It denotes the department to which the user belongs.
- Email:It is the registered email of the user.
- Mobile Number: It is the phone number of the user.
- Status:It is to indicate whether the user is active or not.
- Updated By:It is the name of the user who updated the user details recently.
- Last Updated:It is the date when the user details are recently updated.
- Actions:It includes two actions
  - ##### Edit
    It allows the admin to edit the user details.The admin can edit the following fields of the user:
    - `user type`,`Department`,`First Name`,`Last Name`,`Gender`,`Date of Birth`,`Primary Contact No`,`Secondary Contact Number`,`Consultation Time (Minutes)`,`Start Time`,`End Time`,`Consultation Fee`,`Privileges`,`Active Status`
  - ##### Delete
    It deletes the user permanently.
    - On Clicking the delete icon a confirmation modal will be displayed before deleting the user permanently.
    - After confirming the delete action the deleted user will not be displayed no longer in the user table.

#### Create New User Role

New user can be added by clicking the <code>Create Role</code>.

Create User Role modal have basically three fields:

- <code> User role name</code> which is a text field to enter the the name of the user role.
- <code>Backoffice User </code> which is a radio button accepting yes or no values.It is to confirm whether the user is an admin or not..
- <code> Is Department Related</code> which is a checkbox to record whether the new user role is related to any department or not.
