To implement the registration and login functionality before navigating to the data page, you'll need to integrate user authentication logic into your React application. Here's a general outline of the steps you can follow:

Registration Page: Create a registration form where users can enter their details such as name, email, and password. When the user submits the form, you should validate the input fields and then store the user's information, possibly in the local storage or a database.

Login Page: Create a login form where users can enter their email and password. On submission, validate the entered credentials against the stored user data (from local storage or database). If the credentials are valid, allow the user to proceed to the data page.

Data Page: Display the data as you've implemented in your Fetching component. However, before rendering this page, ensure that the user is authenticated. If the user is not authenticated, redirect them to the login page.


in the data page i provide basic crud operations like add,delete,search and logout.

if i choose add option it will display one form like title and status.if i click add item the data will added at end.

if i choose delete based id it was deleted.

if i choose edit option it will edit the id and title in the way of alert box.

if choose search option it will search based on title names it was giving result.

if i choose logout it was redirected to login page based on routing.
