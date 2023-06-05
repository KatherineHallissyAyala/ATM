# ATM
This ATM React app lets the user choose a deposit or withdrawal transaction and set the amount of the transaction.  It does not let the user overdraw their account.

# How To Run
Download the html and jsx file to a directory.  In Terminal, navigate to that directory.  Run HTTP-Server in that directory.  You should see a report on where the files in the directory are running.  Navigate to that address, and open "standalone.html."

# Usage
Click on the withdrawal or deposit button to choose the type of transaction you'd like to make.  (The default is deposit.)  Enter the amount of money you'd like to deposit/withdraw.  Click submit.  You should see your change reflected in the account total.  (Or if you are trying to withdraw more money than is in the account, you would see an alert box, and not change to the account sum.

# Support
You can email me at info@codebykatherine.com.

# Improvements I Made
I worked on the ATM app for a course.  Our instructor guided us through developing the functionality of rendering the transaction form, including deposit/withdrawal buttons, amount field, and submit button.  We also learned how to re-render the account total with each transaction.

I made the following imprvements to the ATM on my own: 
-1- I added validation to prevent the user from withdrawing more funds than available in the account.
-2- I added an alert box saying "Sorry, you are short on funds" if the user tries to overdraw the account.
-3- I tweaked the functionality so that when a user deposits more than $100, the bank adds an extra dollar to the account total.  
-4- I included a note in the interface to convey this "extra dollar" feature to the user.  
-5- I also added a welcome title and a customer assistance phone number.

# Roadmap for Future Improvements
This app could be improved by allowing the user to choose what type of bills they'd like to receive when they are withdrawing funds: $100, $50, $20, etc.

# License Information
Copyright 2023 Katherine Hallissy Ayala

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
