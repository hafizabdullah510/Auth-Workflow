### Register User

[x] 1-check for all name email and password
[x] 2-check if user already exists
[x] 3-make role of first user admin
[x] 4-Hash the password
[x] 5-Generate verification token
[x] 6-create user
[x] 7-sendVerification email{name,email,verificationToken , origin}
[x] 8-handle nodemailer in utils
[x] 9-send mail with to,subject and html containing verify link url

### Verify email (make new route)

[x] 1-get verification token and email from above verify link after clicking
[x] 2-send them as body from frontend as request
[x] 3-check if email exists
[x] 4-check if token matches with user token
[x] 5-if yes then update all the verification fields of user and send back verified response

### Login (Main One)

[x] 1-check email and password if both exists and wether they are correct or not
[x] 2-check is user is verified
[x] 3-create token user
[x] 4-create refreshToken (will have greater expiry time ) (By default no token)
[x] 5-Now we will add two cookies to response 1- will contain accessToken (short expiry)
2- will contain refreshToken (Longer expiry)

[x] 6- Now we will check for existing token of user so that it should not make a new instance in database (token) every time same user login. also we can make isValid false of any person we don't want to access the account. Every time a user login we generate refresh token so if user already exists we extract the existing one instead of creating new one.

[x] 7- Now we will change our authentication middleware as we were previously just checking for one cookie there. we also need to check for refreshToken cookie

[x] 8- First we will check for accessToken from signed cookies in Auth middleware if that is valid then we will just assign the payload.user to req.user

[x] 9- if accessToken expired then get the payload from refreshToken (isValidToken). Then check that for the token if there exists any existinf token with same value. if yes then if isValid is true for that existing token.

[x] 10- Again addCookiesToResponse and pass the res,user:payload.user , refreshToken : existingToken.refreshToken. Now even the accessToken Expires we generate both on authentication in middleware

### Logout

[x] 1-we want to authenticate user in authRoutes so that we can get the current user id through req.user.usedId

[x] 2-then we fill findOneAndDelete

[x] 3- After that expire both cookies

### Forgot Password

User Model
passwordToken {type:String}
passwordTokenExpirationDate {type:Date}
authRoutes
'/forgot-password' and '/reset-password'

### Forgot password

1- Email from frontend in req.body
2- check if email provided
3- check if user exists with email
4- if user exists create passwordToken and passwordTokenExpiration date as only want to give specific time to user to reset password and then save user
5- always want to send back success response

### SendResetPasswordEmail

make changes in sendResetPassword email to get the functionality

### Reset Password

1- email,password and token from frontend
2- check if all exists
3- find user with email
4- we want to send 200 response in every case
5- compare current date with expiration date and also compare user token with req.body token
6- then update password , token = null and exp dat = null
7- save user

### Hash Password Token

1- create hash function in utils (crypto)
2- import in authController
3- we want to send same token in email but only want to save hashed token in database and when comparing in reset password, make the incoming token from req.body hashed in if statement
