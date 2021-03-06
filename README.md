# Sibi - A CV Service App

**by M. Bambalan**\
**Technologies Used:**

- ReactJS
- Material-UI
- Material-UI Icons instead of FontAwesome
- Auth0

## Dev's Reflection

## Features

## Commits

**03/03/2021 - Initial Commit**\
Finished writing the basic code. You can add and edit your information on the CV. All it needs right now is a proper UI.

I used Material UI for the familiar android-like UI/UX.

**03/04/2021**\
Styled the UI. Disabled the `menuIcon` and Login button (for future use).

Added desktop layout.

I've come across a limitation of the Grid layout in Material UI wherein margin becomes negative when using `spacing`. I fixed it using the padding and margin of their `Box` component.

**03/06/2021**\
Used the `<Card>` component to for education, work experience, etc.

Added authentication with Auth0. Users can now sign up, log in, and log out.
