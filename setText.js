const localTextStyles = await figma.getLocalTextStylesAsync()

const pages = [
    { label: "EmailIsChanged", text: "Looks like you've changed your account email address \nfrom another signed in device.\n\nPlease, Sign in again.", style: 3 }, 
    { label: "SignUpUsernameExists", text: "There is already an account associated \nwith this email address.\n", style: 3 }, 
    { label: "SignUpConfirmation", text: "Your account is now active.\nLet's jump in with Peppa and friends!\n", style: 3 }, 
    { label: "SignUpVerificationLimitError", text: "You have tried verify your email too many times!\nPlease, try again later.\n", style: 3 }, 
    { label: "SignInInvalid", text: "You might want to double check your email address and password,\nand then try again.", style: 3 }, 
    { label: "SignInLimitError", text: "You have tried sign in too many times!\n<style=\"Copy Small (Custom_DPS)\">\n + SignInInvalid + </style>", style: 3 }, 
    { label: "SignInRequired", text: "Something went wrong.\n Please, Sign-in again.", style: 3 }, 
    { label: "SignIn", text: "<style=\"Link_Bold (Custom_DPS)\">Sign in</style>", style: 3 }, 
    { label: "Instead", text: "instead", style: 3 }, 
    { label: "SignInTitle", text: "Please sign in to successfully\nrestore your purchase", style: 3 }, 
    { label: "CodeVerificationMismatch", text: "You entered the wrong activation code.\nPlease, double check the code in your email and try again.", style: 3 }, 
    { label: "CodeVerificationExpired", text: "Unfortunately, your code has expired.\nPlease, request a new code.", style: 3 }, 
    { label: "CodeVerificationMultipleInvalid", text: "You have entered an invalid activation code multiple times.", style: 3 }, 
    { label: "CodeVerificationRequestCode", text: "request a new code.", style: 3 }, 
    { label: "CodeVerificationUserIsAlreadyConfirmed", text: "Looks like you've already activated your account.\nPlease, continue your journey.", style: 3 }, 
    { label: "CodeVerificationLimitError", text: "You have tried requesting verification code too many times!\nPlease, try again later.\n + CheckCodeInEmail;", style: 3 }, 
    { label: "CheckCodeInEmail", text: "<style=\"Copy Small (Custom_DPS)\">\nDid you get an activation code email in your inbox?"
    + "\n(Don't forget to check your junk mail.)\n\nIf you have not received the email,\nplease try again after a few minutes.</style>", style: 3 }, 
    { label: "ForgotPasswordUpdatedSuccess", text: "Your password has been reset", style: 3 }, 
    { label: "ForgotPasswordLimitError", text: "Something went wrong.\nYou have attempted too many password changes.\n + CheckCodeInEmail", style: 3 }, 
    { label: "ChangePasswordSuccess", text: "Your password is updated.", style: 3 }, 
    { label: "ChangePasswordLimitError", text: "Something went wrong.\nYou have attempted too many password changes.\n<style=\"Copy Small (Custom_DPS)\">\nPlease, try again after a few minutes.\n</style>", style: 3 }, 
    { label: "UpdateEmailSuccess", text: "Your email address is updated.", style: 3 }, 
    { label: "UpdateEmailError", text: "Something went wrong.\nYou might want to double check your email address and try again.", style: 3 }, 
    { label: "UpdateEmailLimitError", text: "Something went wrong.\nYou have attempted too many email address changes.\nPlease, try again later.", style: 3 }, 
    { label: "UserNotConfirmed", text: "You have not activated your account.\n\nDid you get our activation email in your inbox?\nIf not, don't forget to check your junk mail.", style: 3 }, 
    { label: "UserNotFound", text: "Your email address does not match any accounts registered.\nDid you happen to sign up with another email address?", style: 3 }, 
    { label: "UsernameExists", text: "An account with the given email already exists.\nPlease, try another email address.", style: 3 }, 
    { label: "InputFieldEmailInValid", text: "Looks like your email address was not entered correctly. \nPlease, try again.", style: 3 }, 
    { label: "InputFieldEmpty", text: "Looks like you didn't fill in all the fields.\nPlease, try again.", style: 3 }, 
    { label: "InvalidPassword", text: "Your password is too short. It must be at least 8 characters long.\nPlease, try again.", style: 3 }, 
    { label: "DefaultRefreshSessionError", text: "", style: 3 }, 
    { label: "SignUpUsernameExists", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "DefaultGetUserDetailsError", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "DefaultSignUpError", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "DefaultConfirmSignUpError", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "DefaultResendConfirmSignUpError", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "DefaultSignInError", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "DefaultForgotPasswordRequestError", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "DefaultConfirmForgotPasswordError", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "DefaultChangePasswordError", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "DefaultUpdateAttributeRequestError", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "DefaultUpdateAttributeVerificationError", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "DefaultGetUserAttributeVerificationError", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "DefaultStorageConsentNotAllowedError", text: "You must allow storage permission to continue.", style: 3 }, 
    { label: "DefaultCustomerSupportError", text: "Something went wrong.\nPlease, try again later.", style: 3 }, 
    { label: "Oops", text: "Oops!", style: 3 }, 
    { label: "Sorry", text: "Sorry!", style: 3 }, 
    { label: "OhNo", text: "Oh no!", style: 3 }, 
    { label: "Welcome", text: "Welcome!", style: 3 }, 
    { label: "Success", text: "Success!", style: 3 }, 
    { label: "ThankYou", text: "Thank you!", style: 3 }, 
    { label: "YouDidIt", text: "You did it!", style: 3 }, 
    { label: "Please", text: "Please,", style: 3 }, 
    { label: "UserAccountDeleteSuccess", text: "We've sent your request to our Support Team.\nOur team will respond shortly via email.", style: 3 }, 
    { label: "CustomerSupportSuccess", text: "We've send your request to our Support Team.\nWe will reach out to you via email.", style: 3 }, 
    { label: "Contact", text: "<style=\"Copy Small (Custom_DPS)\"><#0275B9>contact</color></style>", style: 3 }, 
    { label: "Or", text: "<style=\"Copy Small (Custom_DPS)\">Or,</style>", style: 3 }, 
    { label: "UsDirectly", text: "<style=\"Copy Small (Custom_DPS)\">us directly.</style>", style: 3 }, 
    { label: "InternetError", text: "Looks like you are offline.\nPlease, connect to the internet to continue.", style: 3 }
];


let ypos = 0;
let xpos = 0;
let xcount = 0;



const collection = figma.variables.createVariableCollection("example-collection")
const styleVariable = figma.variables.createVariable("style-variable", collection, "FLOAT")



pages.forEach(item => {

    //----------------------------------------
    let label = figma.createText();
    label.characters = item.label
    label.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]
    label.fontSize = 42;

    let text = figma.createText();

    text.characters = item.text
    text.fontName = { family: 'Avenir Next World', style: 'Medium' }
    text.fontSize = 42;

    let innerFrame = figma.createFrame();
    innerFrame.appendChild(text)

    innerFrame.layoutMode = 'VERTICAL'
    innerFrame.fills = [{ type: 'SOLID', color: { r: 0.94, g: 0.96, b: 1 } }]
    innerFrame.layoutAlign = 'CENTER'
    innerFrame.layoutSizingHorizontal = 'HUG'
    innerFrame.cornerRadius = 15
    innerFrame.layoutPositioning = 'AUTO'


    let outerFrame = figma.createFrame();

    outerFrame.appendChild(label)
    outerFrame.appendChild(innerFrame)

    outerFrame.layoutMode = 'VERTICAL'
    outerFrame.fills = [{ type: 'SOLID', color: { r: 0.83, g: 0.89, b: 0.99 } }]
    outerFrame.layoutSizingHorizontal = 'HUG'
    outerFrame.layoutAlign = 'STRETCH';
    //outerFrame.layoutAlign = 'CENTER'
    outerFrame.counterAxisSizingMode = 'FIXED';
    outerFrame.primaryAxisSizingMode = 'FIXED' ;
    outerFrame.layoutGrow = 1
    outerFrame.resize(1920, 1080)
    outerFrame.x = xpos
    outerFrame.y = ypos

    if (xcount === 10) {
        ypos = 0;
        xcount = 0;
        xpos += 2120;

    } else {
        ypos += 1280;
        xcount++;
    }

})


figma.notify(`My styles ${localTextStyles[5].name}`)