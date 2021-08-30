# Random Number

I made this project to practice:

* CSS flexbox
* Google icons
* Window.location.href
* Input type password

This webpage is a login. I made 2 HTML files: the login webpage and the home web page. Also I made a CSS file to style it, and a JS file to do the validation mostly.

## HTML File

In the HTML I made several element:
- The main box container and the ".childFlex" div to get everything succesfully centerd.
- A form with:
    - The div ".imgBox" for the person icon.
    - The div ".description" for the description.
    - 2 inputs, one for the name user and the other for the user password. 
    - 2 eye icons for the password input.
    - The div ".wrongPassword" that shows up when the user and the password don't match. 
    - A button that activates the password() function with the onclick event.
- The div ".changePassword" with fake option for changing the password.

## Javascript File

There are 3 different functions.

The password() function stablish the user ID and the password. It has a if... else where if you put the correct user and password you'll be lead to the home page "welcome". However, if neither your user nor password match, the .wrongPassword div gets visible.

The changeEye() function changes the type of the password input. If the onclick event is activated when the type of the input is password, then the eye close icon is hidden, the open eye icon is visible and the type is settle to text. Otherwice, it does the same thing but vice versa. 

The forgotPassword() function runs when the password link is onclick. It changes the opacity of the sadEmoji icon to 1 because is a tragic event D: .