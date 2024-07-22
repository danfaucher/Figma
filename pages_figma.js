
//const collection = figma.variables.createVariableCollection("example-collection")
//const styleVariable = figma.variables.createVariable("style-variable", collection, "FLOAT")
//const localTextStyles = await figma.getLocalTextStylesAsync()
console.log("START");

// variable declarations //
const forwardButton = '<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M45.0001 84.6673C66.8945 84.6673 84.6433 66.9108 84.6433 45.007C84.6433 23.1032 66.8945 5.34668 45.0001 5.34668C23.1058 5.34668 5.35693 23.1032 5.35693 45.007C5.35693 66.9108 23.1058 84.6673 45.0001 84.6673Z" fill="white"/> <path d="M45.0001 87.222C68.3039 87.222 87.1955 68.3217 87.1955 45.007C87.1955 21.6923 68.3039 2.79199 45.0001 2.79199C21.6962 2.79199 2.80469 21.6923 2.80469 45.007C2.80469 68.3217 21.6962 87.222 45.0001 87.222Z" fill="white" stroke="#0275B9" stroke-width="5.2"/> <path d="M43.7701 26L61.5801 44.71L43.0601 64.16" stroke="#0275B9" stroke-width="11.45" stroke-linecap="round" stroke-linejoin="round"/> <path d="M60.01 45.0801H28" stroke="#0275B9" stroke-width="11.45" stroke-linecap="round"/> </svg>'


const wopp_ui_white = { r: 1, g: 1, b: 1 }
//#FFFFFF
const wopp_ui_blue_1 = { r: 0.9569, g: 0.9647, b: 0.9961 }
//#F0F6FE
const wopp_ui_blue_2 = { r: 0.8275, g: 0.8941, b: 0.9882 }
//#D3E4FC
const wopp_ui_blue_3 = { r: 0.0078, g: 0.4588, b: 0.7255 }
//#0275B9

const wopp_ui_lightest_grey = { r: 0.8784, g: 0.8784, b: 0.8784 }
// #e0e0e0
const wopp_ui_lighter_grey = { r: 0.5647, g: 0.5804, b: 0.5882 }
//#909496
const wopp_ui_darker_grey = { r: 0.2039, g: 0.2157, b: 0.2392 }
//#34373D

const wopp_stroke_light = 4

const wopp_ui_small_shadow = [{
    type: "DROP_SHADOW",
    color: { r: 0, g: 0, b: 0, a: 0.25 },
    offset: { x: 4, y: 4 },
    radius: 4,
    visible: true,
    blendMode: "NORMAL"
}]

const lightStroke = 4;
const mediumStroke = 8;
const heavyStroke = 16;




// paragraph styles //
const styles = [

    { name: 'headerPage', family: "Peppa", style: "Bold", fontSize: 90, lineHeight: { value: 70, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'HeaderPageHomeBanner', family: 'Avenir Next World', style: 'Demi', fontSize: 72, lineHeight: { value: 80, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'HeaderSmall', family: 'Avenir Next World', style: 'Demi', fontSize: 64, lineHeight: { value: 74, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'copyLarge', family: 'Avenir Next World', style: 'Medium', fontSize: 42, lineHeight: { value: 48, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'CopyLarge_parent', family: 'Avenir Next World', style: 'Medium', fontSize: 42, lineHeight: { value: 69, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'CopyLarge_parentBold', family: 'Avenir Next World', style: 'Medium', fontSize: 42, lineHeight: { value: 69, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'CopyLarge_parentDemi', family: 'Avenir Next World', style: 'Demi', fontSize: 42, lineHeight: { value: 69, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'CopyLarge_parentDemi_White', family: 'Avenir Next World', style: 'Demi', fontSize: 42, lineHeight: { value: 69, unit: 'PIXELS' }, color: wopp_ui_white, },
    { name: 'CopySmall_parentDemi_White', family: 'Avenir Next World', style: 'Demi', fontSize: 36, lineHeight: { value: 69, unit: 'PIXELS' }, color: wopp_ui_white, },
    { name: 'copySmall', family: 'Avenir Next World', style: 'Medium', fontSize: 32, lineHeight: { value: 37, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    //'link' color not defined in Unity
    { name: 'link', family: 'Avenir Next World', style: 'Medium', fontSize: 42, lineHeight: { value: 48, unit: 'PIXELS' }, color: wopp_ui_blue_3, textDecoration: 'UNDERLINE' },
    { name: 'Link_Bold', family: 'Avenir Next World', style: 'Demi', fontSize: 42, textDecoration: 'UNDERLINE' },
    //'linkSmall' color not defined in Unity
    { name: 'linkSmall', family: 'Avenir Next World', style: 'Medium', fontSize: 32, lineHeight: { value: 37, unit: 'PIXELS' }, color: wopp_ui_blue_3, textDecoration: 'UNDERLINE' },
    { name: 'NavText', family: 'Avenir Next World', style: 'Medium', fontSize: 56, lineHeight: { value: 58, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'inputBefore', family: 'Avenir Next World', style: 'Regular', fontSize: 42, lineHeight: { value: 48, unit: 'PIXELS' }, color: wopp_ui_lighter_grey, },
    { name: 'ButtonWhite', family: 'Avenir Next World', style: 'Medium', fontSize: 50, lineHeight: { value: 86.9, unit: 'PIXELS' }, color: wopp_ui_white, },
    { name: 'ButtonBlack', family: 'Avenir Next World', style: 'Medium', fontSize: 28, color: wopp_ui_darker_grey },
    { name: 'Numbers', family: 'Avenir Next World', style: 'Demi', fontSize: 56, lineHeight: { value: 68, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'NoLink', family: 'Avenir Next World', style: 'Regular', fontSize: 42, },
    { name: 'Copy_Legal_und', family: 'Avenir Next World', style: 'Medium', fontSize: 18, lineHeight: { value: 22, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'Cost_Medium_und+dummyFontSize', family: 'Avenir Next World', style: 'Demi', fontSize: 24, color: wopp_ui_darker_grey, },
    { name: 'Cost_Medium_Currency_und', family: 'Avenir Next World', style: 'Medium', fontSize: 55, lineHeight: { value: 66, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'Cost_Small_und', family: 'Avenir Next World', style: 'Regular', fontSize: 70, lineHeight: { value: 84, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'Cost_Small_forward_slash_und', family: 'Avenir Next World', style: 'Regular', fontSize: 70, lineHeight: { value: 84, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'Cost_Small_Year_und', family: 'Avenir Next World', style: 'Regular', fontSize: 40, lineHeight: { value: 48, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'CopySmall_Demi', family: 'Avenir Next World', style: 'Demi', fontSize: 24, color: wopp_ui_darker_grey, },
    { name: 'Paywall_UI_Link_und', family: 'Avenir Next World', style: 'Medium', fontSize: 42, textDecoration: 'UNDERLINE', color: wopp_ui_blue_3, color: wopp_ui_blue_3, lineHeight: { value: 48, unit: 'PIXELS' } },
    { name: 'Cost_Small_Demi_und', family: 'Avenir Next World', style: 'Demi', fontSize: 70, lineHeight: { value: 84, unit: 'PIXELS' }, color: wopp_ui_darker_grey, },
    { name: 'CancelSubscription_HelpCenter', family: 'Avenir Next World', style: 'Medium', fontSize: 36, color: wopp_ui_white, lineHeight: { value: 62, unit: 'PIXELS' }, },
    { name: 'GrownUps_CTA_dummyFontSize', family: "Peppa", style: "Bold", fontSize: 36, color: wopp_ui_white, }

]


const pages = [
    {
        "id": 1,
        "title": "get_started",
        "section_type": "start_page",
        "entries": [
            {
                "entry": "Let's start",
                "class": "headerPage",
                "type": "p",
                "target": "subscribe_options"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "subscribe_options"
            }, {
                "entry": "Already signed up? ",
                "class": "copyLarge",
                "type": "span"
            }, {
                "entry": "Login",
                "class": "link",
                "type": "span",
                "target": "form_signin"
            }
        ]
    },
    {
        "id": 1.1,
        "title": "returning_start_login",
        "section_type": "start_page",
        "entries": [
            {
                "entry": "Login",
                "class": "headerPage",
                "type": "p",
                "target": "subscribe_options"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "subscribe_options"
            }, {
                "entry": "Skip for now",
                "class": "link",
                "type": "p",
                "target": "form_signin"
            }
        ]
    }, {
        "id": 2,
        "title": "default_paywall",
        "section_type": "subscribe_container",
        "anchor_out": "form_create",
        "closetarget": "form_create",
        "entries": [
            {
                "entry": "Get instant access\n to all games",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Free 7 day trial",
                "class": "copyLarge subAnnual",
                "type": "p"
            }, {
                "entry": "$9.99",
                "class": "copyLarge subAnnual",
                "type": "p"
            }, {
                "entry": "Save 25% annually",
                "class": "copyLarge subAnnual",
                "type": "p"
            }, {
                "entry": "Monthly",
                "class": "copyLarge subMonthly",
                "type": "p"
            }, {
                "entry": "$0.99 per month",
                "class": "copyLarge subMonthly",
                "type": "p"
            }, {
                "entry": "billed monthly",
                "class": "copyLarge subMonthly",
                "type": "p"
            }, {
                "entry": "",
                "class": "closeButton",
                "type": "div",
                "target": "form_create"
            }
        ]
    }, {
        "id": 3,
        "title": "discount_paywall_returning_user",
        "section_type": "subscribe_container",
        "anchor_out": "form_create",
        "closetarget": "form_create",
        "entries": [
            {
                "entry": "Get instant access\n to all games",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Free 7 day trial",
                "class": "copyLarge subAnnual",
                "type": "p"
            }, {
                "entry": "$9.99",
                "class": "copyLarge subAnnual",
                "type": "p"
            }, {
                "entry": "Save 25% annually",
                "class": "copyLarge subAnnual",
                "type": "p"
            }, {
                "entry": "Monthly",
                "class": "copyLarge subMonthly",
                "type": "p"
            }, {
                "entry": "$0.99 per month",
                "class": "copyLarge subMonthly",
                "type": "p"
            }, {
                "entry": "billed monthly",
                "class": "copyLarge subMonthly",
                "type": "p"
            }, {
                "entry": "",
                "class": "closeButton",
                "type": "div",
                "target": "form_create"
            }
        ]
    }, {
        "id": 4,
        "title": "discount_paywall_new_user",
        "section_type": "subscribe_container",
        "anchor_out": "form_create",
        "closetarget": "form_create",
        "entries": [
            {
                "entry": "Get instant access\n to all games",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Free 7 day trial",
                "class": "copyLarge subAnnual",
                "type": "p"
            }, {
                "entry": "$9.99",
                "class": "copyLarge subAnnual",
                "type": "p"
            }, {
                "entry": "Save 25% annually",
                "class": "copyLarge subAnnual",
                "type": "p"
            }, {
                "entry": "Monthly",
                "class": "copyLarge subMonthly",
                "type": "p"
            }, {
                "entry": "$0.99 per month",
                "class": "copyLarge subMonthly",
                "type": "p"
            }, {
                "entry": "billed monthly",
                "class": "copyLarge subMonthly",
                "type": "p"
            }, {
                "entry": "",
                "class": "closeButton",
                "type": "div",
                "target": "form_create"
            }
        ]
    }, {
        "id": 5,
        "title": "full_price_returning_user",
        "section_type": "subscribe_container",
        "anchor_out": "form_create",
        "closetarget": "form_create",
        "entries": [
            {
                "entry": "Get instant access\n to all games",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Free 7 day trial",
                "class": "copyLarge subAnnual",
                "type": "p"
            }, {
                "entry": "$9.99",
                "class": "copyLarge subAnnual",
                "type": "p"
            }, {
                "entry": "Save 25% annually",
                "class": "copyLarge subAnnual",
                "type": "p"
            }, {
                "entry": "Monthly",
                "class": "copyLarge subMonthly",
                "type": "p"
            }, {
                "entry": "$0.99 per month",
                "class": "copyLarge subMonthly",
                "type": "p"
            }, {
                "entry": "billed monthly",
                "class": "copyLarge subMonthly",
                "type": "p"
            }, {
                "entry": "",
                "class": "closeButton",
                "type": "div",
                "target": "form_create"
            }
        ]
    }, {
        "id": 6,
        "title": "new_app_version_available",
        "section_type": "messages",
        "entries": [
            {
                "entry": "New app version available",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Update to enjoy the latest features\n and performance optimization.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }, {
                "entry": "Need help? Visit our ",
                "class": "copySmall",
                "type": "span"
            }, {
                "entry": "Help Centre",
                "class": "linkSmall",
                "type": "span",
                "link": "url"
            }, {
                "entry": " or ",
                "class": "copySmall",
                "type": "span"
            }, {
                "entry": "contact us",
                "class": "linkSmall",
                "type": "span",
                "link": "url"
            }, {
                "entry": ".",
                "class": "copySmall",
                "type": "span"
            }
        ]
    }, {
        "id": 7,
        "title": "purchase_cancelled",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Purchase cancelled",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Return to previous page.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 8,
        "title": "purchase_could_not_be_completed",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Purchase could not be completed",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Please try again later",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },

    {
        "id": 9,
        "title": "restore_subscription",
        "section_type": "form",
        "entries": [
            {
                "entry": "Please login to restore your purchase",
                "class": "headerPage",
                "type": "p"
            },
            {
                "entry": "Email",
                "class": "inputBefore",
                "type": "inputField"
            },
            {
                "entry": "Password",
                "class": "inputBefore",
                "type": "inputStart"
            },
            {
                "entry": "Show",
                "class": "inputBefore",
                "type": "inputEnd"
            },
            {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            },
            {
                "entry": "Forgot your password?",
                "class": "linkSmall",
                "type": "p",
                "target": "playhub_subscribed"

            }
        ]
    },

    {
        "id": 10,
        "title": "subscriptions_restored",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Subscription restored",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Your subscription has been successfully restored.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 11,
        "title": "no_subscriptions_found",
        "section_type": "messages",
        "entries": [
            {
                "entry": "No subscription found",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "You have no active subscription to restore.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },


    {
        "id": 12,
        "title": "age_gate",
        "section_type": "age_gate",
        "entries": [
            {
                "entry": "Grown-Ups",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Please, enter your date of birth to continue",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "",
                "class": "dotsdiv",
                "type": "div"
            },
            {
                "entry": "",
                "class": "agedot",
                "type": "div"
            },
            {
                "entry": "",
                "class": "agedot",
                "type": "div"
            },
            {
                "entry": "",
                "class": "agedot",
                "type": "div"
            },
            {
                "entry": "",
                "class": "agedot",
                "type": "div"
            },
            {
                "entry": "1",
                "class": "numpad",
                "type": "div"
            }, {
                "entry": "2",
                "class": "numpad",
                "type": "div"
            }, {
                "entry": "3",
                "class": "numpad",
                "type": "div"
            }, {
                "entry": "4",
                "class": "numpad ",
                "type": "div"
            }, {
                "entry": "5",
                "class": "numpad",
                "type": "div"
            }, {
                "entry": "6",
                "class": "numpad",
                "type": "div"
            }, {
                "entry": "7",
                "class": "numpad",
                "type": "div"
            }, {
                "entry": "8",
                "class": "numpad",
                "type": "div"
            }, {
                "entry": "9",
                "class": "numpad",
                "type": "div"
            }, {
                "entry": "",
                "class": "numpadSpacer",
                "type": "div"
            }, {
                "entry": "0",
                "class": "numpad",
                "type": "div"
            }, {
                "entry": "",
                "class": "numpadBack",
                "type": "div"
            }
        ]
    },




    {
        "id": 13,
        "title": "create_your_account",
        "section_type": "form",
        "entries": [
            {
                "entry": "Create your account",
                "class": "headerPage",
                "type": "p"
            },
            {
                "entry": "Already signed up?",
                "class": "copyLarge",
                "type": "span"
            },
            {
                "entry": "Login",
                "class": "link",
                "type": "span"
            },
            {
                "entry": ".",
                "class": "copyLarge",
                "type": "span"
            },
            {
                "entry": "Email",
                "class": "inputBefore",
                "type": "inputField"
            },
            {
                "entry": "Password",
                "class": "inputBefore",
                "type": "inputStart"
            },
            {
                "entry": "Show",
                "class": "inputBefore",
                "type": "inputEnd"
            },
            {
                "entry": "Password must be 8 characters or longer.",
                "class": "copySmall",
                "type": "p"
            },
            {
                "entry": "By continuing you agree to our ",
                "class": "copySmall",
                "type": "span",
            },
            {
                "entry": "Terms of Use ",
                "class": "linkSmall",
                "type": "span",
                "target": "url"

            },
            {
                "entry": "and ",
                "class": "copySmall",
                "type": "span",

            },
            {
                "entry": "Privacy Policy ",
                "class": "linkSmall",
                "type": "span",

            },
            {
                "entry": ".",
                "class": "copySmall",
                "type": "span",

            },
            {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            },

        ]
    },
    {
        "id": 14,
        "title": "email_already_in_use",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Email already in use",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "There is already an account associated with this email address.",
                "class": "copyLarge",
                "type": "p",
                "group": "vertical1"
            },
            {
                "entry": "Please ",
                "class": "copyLarge",
                "type": "span",
                "group": "vertical1"
            },
            {
                "entry": "login ",
                "class": "link",
                "type": "span",
                "group": "vertical1"
            },
            {
                "entry": "instead.",
                "class": "copyLarge",
                "type": "span",
                "group": "vertical1"
            }

        ]
    },

    {
        "id": 15,
        "title": "your_password_is_too_short",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Your password is too short",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Password must be 8 characters or longer.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Please try again.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 16,
        "title": "welcome",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Welcome!",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Your account is now active.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Let's jump in with Peppa and friends!",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },

    {
        "id": 17,
        "title": "activate_your_account_verification",
        "section_type": "activation_code",
        "anchor_out": "success_subscribed",
        "entries": [
            {
                "entry": "Activate your Account",
                "section_type": "headerPage",
                "type": "p"
            }, {
                "entry": "We sent a six-digit verification code to your email address.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Enter the code below.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "&nbsp;",
                "class": "copySmall mb30",
                "type": "p"
            }, {
                "entry": "Didn't receive the code? Check your spam folder or ",
                "class": "copySmall",
                "type": "span"
            }, {
                "entry": "request a new code",
                "class": "linkSmall",
                "type": "span",
                "target": "add_account_confirmation_interstitial"
            }, {
                "entry": ".",
                "class": "copySmall",
                "type": "span"
            }, {
                "entry": "Back to ",
                "class": "copySmall",
                "type": "span"
            }, {
                "entry": "sign up",
                "class": "linkSmall",
                "type": "span",
                "target": "form_create"
            }, {
                "entry": ".",
                "class": "copySmall",
                "type": "span",
                "target": "form_create"
            }
        ]
    },


    {
        "id": 18,
        "title": "new_code_is_on_the_way",
        "section_type": "messages",
        "entries": [
            {
                "entry": "A new code is on the way!",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "We sent a new six-digit verification code to your email address.",
                "class": "copyLarge",
                "type": "p",
                "group": "vertical1"
            }, {
                "entry": "Didn't receive the code? Check your spam folder.",
                "class": "copyLarge",
                "type": "p",
                "group": "vertical1"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 19,
        "title": "something_went_wrong",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Something went wrong",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "We couldn't complete your request.",
                "class": "copyLarge",
                "type": "p",
                "group": "vertical1"
            }, {
                "entry": "Please try again later.",
                "class": "copyLarge",
                "type": "p",
                "group": "vertical1"
            },
            {
                "entry": "Need help? Visit our ",
                "class": "copyLarge",
                "type": "span"
            },
            {
                "entry": "help centre",
                "class": "copyLarge",
                "type": "span"
            },
            {
                "entry": ".",
                "class": "copyLarge",
                "type": "span"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },

    {
        "id": 20,
        "title": "incorrect_code",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Incorrect code",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "You have entered an invalid verification code.",
                "class": "copyLarge",
                "type": "p",
                "group": "vertical1"
            },
            {
                "entry": "Please try again or",
                "class": "copyLarge",
                "type": "span",
                "group": "vertical1"
            }, {
                "entry": "request a new code",
                "class": "link",
                "type": "span",
                "group": "vertical1"
            }, {
                "entry": ".",
                "class": "copyLarge",
                "type": "span",
                "group": "vertical1"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 21,
        "title": "verification_code_expired",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Verification code expired",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Please ",
                "class": "copyLarge",
                "type": "span"
            },
            {
                "entry": "request a new code",
                "class": "copyLarge",
                "type": "span"
            },
            {
                "entry": ".",
                "class": "copyLarge",
                "type": "span"
            },
            {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 23,
        "title": "login",
        "section_type": "form",
        "entries": [
            {
                "entry": "Login to your account",
                "class": "headerPage",
                "type": "p"
            },
            {
                "entry": "Don't have an account yet?",
                "class": "copyLarge",
                "type": "span"
            },
            {
                "entry": "Sign up",
                "class": "link",
                "type": "span"
            },
            {
                "entry": ".",
                "class": "copyLarge",
                "type": "span"
            },
            {
                "entry": "Email",
                "class": "inputBefore",
                "type": "inputField"
            },
            {
                "entry": "Password",
                "class": "inputBefore",
                "type": "inputStart"
            },
            {
                "entry": "Show",
                "class": "inputBefore",
                "type": "inputEnd"
            },
            {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            },
            {
                "entry": "Forgot your password?",
                "class": "linkSmall",
                "type": "p",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 24,
        "title": "forgot_your_password",
        "section_type": "form",
        "entries": [
            {
                "entry": "Login to your account",
                "class": "headerPage",
                "type": "p"
            },
            {
                "entry": "If there is an account associated with this email address then a verification code will be sent to reset your password.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Email",
                "class": "inputBefore",
                "type": "inputField"
            },
            {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            },
        ]
    },
    {
        "id": 25,
        "title": "reset_your_password_verification",
        "section_type": "activation_code",
        "anchor_out": "success_subscribed",
        "entries": [
            {
                "entry": "Reset your password",
                "section_type": "headerPage",
                "type": "p"
            }, {
                "entry": "We sent a six-digit verification code to your email address.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Enter the code below.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "&nbsp;",
                "class": "copySmall mb30",
                "type": "p"
            }, {
                "entry": "Didn't receive the code? Check your spam folder or ",
                "class": "copySmall",
                "type": "span"
            }, {
                "entry": "request a new code",
                "class": "linkSmall",
                "type": "span",
                "target": "add_account_confirmation_interstitial"
            }, {
                "entry": ".",
                "class": "copySmall",
                "type": "span"
            }, {
                "entry": "Back to ",
                "class": "copySmall",
                "type": "span"
            }, {
                "entry": "sign up",
                "class": "linkSmall",
                "type": "span",
                "target": "form_create"
            }, {
                "entry": ".",
                "class": "copySmall",
                "type": "span",
                "target": "form_create"
            }
        ]
    },

    {
        "id": 27,
        "title": "incorrect_email_or_password",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Incorrect email or password",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "The email and password combination entered does not match our records. Please try again.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 28,
        "title": "are_you_sure_you_want_to_logout",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Are you sure you want to logout?",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "You won't be able to share your subscription across devices until you log back in.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "closebutton",
                "type": "span",
                "target": "playhub_subscribed"
            },
            {
                "entry": "",
                "class": "checkbutton",
                "type": "span",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 29,
        "title": "you_are_now_logged_out",
        "section_type": "messages",
        "entries": [
            {
                "entry": "You are now logged out",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "To access your account features,",
                "class": "copyLarge",
                "type": "span"
            }, {
                "entry": " login ",
                "class": "copyLarge",
                "type": "span"
            }, {
                "entry": " again.",
                "class": "copyLarge",
                "type": "span"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 30,
        "title": "parent_home",
        "section_type": "parent_container",
        "anchor_out": "parent_home",
        "entries": [
            {
                "entry": "Home",
                "class": "navLink",
                "type": "button",
                "target": "parent_home"
            }, {
                "entry": "Account",
                "class": "navText",
                "type": "button",
                "target": "parent_account"
            }, {
                "entry": "Settings",
                "class": "navText",
                "type": "button",
                "target": "parent_settings"
            }, {
                "entry": "Help Centre",
                "class": "whiteButton",
                "type": "span",
                "target": "helpcentre_interstitial"
            }, {
                "entry": "Contact Us",
                "class": "whiteButton",
                "type": "span",
                "target": "list_contactus"
            }, {
                "entry": "Terms of Use",
                "class": "navHomeLower",
                "type": "button",
                "target": "termsofuse_interstitial"
            }, {
                "entry": "Privacy Policy",
                "class": "navHomeLower",
                "type": "button",
                "target": "privacypolicy_interstitial"
            }, {
                "entry": "",
                "class": "banner_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "closeButton",
                "type": "div",
                "target": "playhub_subscribed"
            }
        ]
    },

    {
        "id": 31,
        "title": "how_can_we_help_you",
        "section_type": "messages",
        "entries": [
            {
                "entry": "How can we help you?",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Select a topic below to get in touch with us or visit our Help Centre.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Your account",
                "class": "link",
                "type": "p"
            },
            {
                "entry": "Your subscription",
                "class": "link",
                "type": "p"
            },
            {
                "entry": "A technical issue",
                "class": "link",
                "type": "p"
            }, {
                "entry": "Or something else",
                "class": "link",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 32,
        "title": "contact_us",
        "section_type": "Contact us",
        "entries": [
            {
                "entry": "Contact us",
                "class": "headerPage",
                "type": "p"
            },
            {
                "entry": "Send us a message and let us know how we can help.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Your name",
                "class": "inputBefore",
                "type": "inputField"
            },
            {
                "entry": "subscribed@email.com",
                "class": "copyLarge",
                "type": "inputField"
            },
            {
                "entry": "What can we help you with today?",
                "class": "inputBefore",
                "type": "inputField"
            },
            {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            },
        ]
    },



    {
        "id": 32.1,
        "title": "contact_us_form_sent_confirmation",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Thank you!",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "We've send your request to our Support Team.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "We will reach out to you via email.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },

    {
        "id": 33,
        "title": "free_user_status_display",
        "section_type": "parent_container",
        "entries": [
            {
                "entry": "Home",
                "class": "navText",
                "type": "button",
                "target": "parent_home"
            }, {
                "entry": "Account",
                "class": "navLink",
                "type": "button",
                "target": "parent_account"
            }, {
                "entry": "Settings",
                "class": "navText",
                "type": "button",
                "target": "parent_settings"
            }, {
                "entry": "",
                "class": "subscription_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "registration_div",
                "type": "div"
            },
            {
                "entry": "",
                "class": "footer_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "closeButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 34,
        "title": "subscribed_monthly_status_display",
        "section_type": "parent_container",
        "entries": [
            {
                "entry": "Home",
                "class": "navText",
                "type": "button",
                "target": "parent_home"
            }, {
                "entry": "Account",
                "class": "navLink",
                "type": "button",
                "target": "parent_account"
            }, {
                "entry": "Settings",
                "class": "navText",
                "type": "button",
                "target": "parent_settings"
            }, {
                "entry": "",
                "class": "subscription_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "registration_div",
                "type": "div"
            },
            {
                "entry": "",
                "class": "footer_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "closeButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 35,
        "title": "subscribed_annual_status_display",
        "section_type": "parent_container",
        "entries": [
            {
                "entry": "Home",
                "class": "navText",
                "type": "button",
                "target": "parent_home"
            }, {
                "entry": "Account",
                "class": "navLink",
                "type": "button",
                "target": "parent_account"
            }, {
                "entry": "Settings",
                "class": "navText",
                "type": "button",
                "target": "parent_settings"
            }, {
                "entry": "",
                "class": "subscription_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "registration_div",
                "type": "div"
            },
            {
                "entry": "",
                "class": "footer_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "closeButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 36,
        "title": "expired_status_display",
        "section_type": "parent_container",
        "entries": [
            {
                "entry": "Home",
                "class": "navText",
                "type": "button",
                "target": "parent_home"
            }, {
                "entry": "Account",
                "class": "navLink",
                "type": "button",
                "target": "parent_account"
            }, {
                "entry": "Settings",
                "class": "navText",
                "type": "button",
                "target": "parent_settings"
            }, {
                "entry": "",
                "class": "subscription_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "registration_div",
                "type": "div"
            },
            {
                "entry": "",
                "class": "footer_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "closeButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 37,
        "title": "guest_user_email_display",
        "section_type": "parent_container",
        "entries": [
            {
                "entry": "Home",
                "class": "navText",
                "type": "button",
                "target": "parent_home"
            }, {
                "entry": "Account",
                "class": "navLink",
                "type": "button",
                "target": "parent_account"
            }, {
                "entry": "Settings",
                "class": "navText",
                "type": "button",
                "target": "parent_settings"
            }, {
                "entry": "",
                "class": "subscription_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "registration_div",
                "type": "div"
            },
            {
                "entry": "",
                "class": "footer_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "closeButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 38,
        "title": "registered_user_email_display",
        "section_type": "parent_container",
        "entries": [
            {
                "entry": "Home",
                "class": "navText",
                "type": "button",
                "target": "parent_home"
            }, {
                "entry": "Account",
                "class": "navLink",
                "type": "button",
                "target": "parent_account"
            }, {
                "entry": "Settings",
                "class": "navText",
                "type": "button",
                "target": "parent_settings"
            }, {
                "entry": "",
                "class": "subscription_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "registration_div",
                "type": "div"
            },
            {
                "entry": "",
                "class": "footer_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "closeButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 39,
        "title": "cancel_my_subscription",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Cancel my subscription",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "When you cancel, you'll lose exclusive access to all content.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "Is there something we can do to get you to stay? If so, ",
                "class": "copyLarge",
                "type": "span"
            }, {
                "entry": "contact us",
                "class": "link",
                "type": "span"
            }, {
                "entry": ".",
                "class": "copyLarge",
                "type": "span"
            }, {
                "entry": "App subscriptions are managed through your app store. \nTo cancel, visit the app store that you subscribed from.",
                "class": "copyLarge",
                "type": "p"
            }/*,
            {
                "entry": "Help centre",
                "class": "button",
                "type": "button",
                "target": "playhub_subscribed"
            }*/
        ]
    },
    {
        "id": 40,
        "title": "update_your_email_address",
        "section_type": "form",
        "entries": [
            {
                "entry": "Update your email address",
                "class": "headerPage",
                "type": "p"
            },
            {
                "entry": "New email address",
                "class": "inputBefore",
                "type": "inputField"
            },
            {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            },
        ]
    },
    {
        "id": 41,
        "title": "update_your_email_address_verification",
        "section_type": "activation_code",
        "anchor_out": "success_subscribed",
        "entries": [
            {
                "entry": "Update your email address",
                "section_type": "headerPage",
                "type": "p"
            }, {
                "entry": "We sent a six-digit verification code to your email address.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Enter the code below.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "",
                "class": "verification",
                "type": "codeInput"
            }, {
                "entry": "&nbsp;",
                "class": "copySmall mb30",
                "type": "p"
            }, {
                "entry": "Didn't receive the code? Check your spam folder or ",
                "class": "copySmall",
                "type": "span"
            }, {
                "entry": "request a new code",
                "class": "linkSmall",
                "type": "span",
                "target": "add_account_confirmation_interstitial"
            }, {
                "entry": ".",
                "class": "copySmall",
                "type": "span"
            }, {
                "entry": "Back to ",
                "class": "copySmall",
                "type": "span"
            }, {
                "entry": "sign up",
                "class": "linkSmall",
                "type": "span",
                "target": "form_create"
            }, {
                "entry": ".",
                "class": "copySmall",
                "type": "span",
                "target": "form_create"
            }
        ]
    },
    {
        "id": 42,
        "title": "your_email_has_been_updated",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Your email has been updated",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Return to your account page.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 44,
        "title": "email_address_changes_on_device_b",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Oops",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Looks like your account email address was updated on another logged in device.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Please login again.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 45,
        "title": "update_your_password",
        "section_type": "form",
        "entries": [
            {
                "entry": "Update your password",
                "class": "headerPage",
                "type": "p"
            },
            {
                "entry": "Current password",
                "class": "inputBefore",
                "type": "inputStart"
            },
            {
                "entry": "Show",
                "class": "inputBefore",
                "type": "inputEnd"
            },
            {
                "entry": "New password",
                "class": "inputBefore",
                "type": "inputStart"
            },
            {
                "entry": "Show",
                "class": "inputBefore",
                "type": "inputEnd"
            },
            {
                "entry": "Password must be 8 characters or longer.",
                "class": "copySmall",
                "type": "p"
            },
            {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            },
        ]
    },
    {
        "id": 46,
        "title": "update_password_success",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Password successfully updated",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Use this password next time you login.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 48,
        "title": "update_your_password",
        "section_type": "form",
        "entries": [
            {
                "entry": "Delete your account",
                "class": "headerPage",
                "type": "p"
            },
            {
                "entry": "Please fill in your information below.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Name",
                "class": "inputBefore",
                "type": "inputField"
            },
            {
                "entry": "emailaddress@email.com",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Reason for deletion",
                "class": "inputBefore",
                "type": "inputField"
            },
            {
                "entry": "By deleting your account, you'll lose access to all content and services.",
                "class": "copySmall",
                "type": "p"
            },
            {
                "entry": "Are you sure you want to proceed?",
                "class": "copySmall",
                "type": "p"
            },
            /*{
                "entry": "Delete account",
                "class": "button",
                "type": "button",
                "target": "playhub_subscribed"
            },*/
        ]
    },
    {
        "id": 49,
        "title": "delete_request_submitted",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Request submitted",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Your request has been sent to our Support team.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "We'll send you an email shortly to confirm deletion.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 50,
        "title": "settings",
        "section_type": "parent_container",
        "entries": [
            {
                "entry": "Home",
                "class": "navText",
                "type": "button",
                "target": "parent_home"
            }, {
                "entry": "Account",
                "class": "navLink",
                "type": "button",
                "target": "parent_account"
            }, {
                "entry": "Settings",
                "class": "navText",
                "type": "button",
                "target": "parent_settings"
            }, {
                "entry": "",
                "class": "subscription_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "registration_div",
                "type": "div"
            },
            {
                "entry": "",
                "class": "footer_div",
                "type": "div"
            }, {
                "entry": "",
                "class": "closeButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 51,
        "title": "consent",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Allow access to device storage",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Allow us to access photos on your device to save your child's artwork.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 52,
        "title": "allow_us_to_send_you_helpful_notifications",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Allow us to send you helpful\n notifications about your child",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "",
                "class": "closebutton",
                "type": "span",
                "target": "playhub_subscribed"
            },
            {
                "entry": "",
                "class": "checkbutton",
                "type": "span",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 52.1,
        "title": "notifications_must_be_changed_on_device",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Notifications must be changed\n on your device directly.",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "You will be redirected to your device Settings to change your app notifications.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 53,
        "title": "marketing_consent",
        "section_type": "messages",
        "entries": [
            {
                "entry": "SEE CONFLUENCE DOC - copy below to appear on Create your account page",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "By continuing you agree to our Terms of Use and Privacy Policy, and to receiving electronic marketing messages from us. You can unsubscribe at anytime.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 54,
        "title": "looks_like_you_didn't_fill_in_all_the_fields",
        "section_type": "messages",
        "entries": [
            {
                "entry": "Oops!",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Looks like you didn't fill in all the fields.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Please try again.",
                "class": "copyLarge",
                "type": "p"
            }, {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            }
        ]
    },
    {
        "id": 55,
        "title": "looks_like_you_are_offline",
        "section_type": "messages",
        "entries": [
            {
                "entry": "",
                "class": "nointernet_icon",
                "type": "icon"
            },
            {
                "entry": "No internet connection",
                "class": "headerPage",
                "type": "p"
            }, {
                "entry": "Looks like you are offline.",
                "class": "copyLarge",
                "type": "p"
            },
            {
                "entry": "Check your internet connection and try again.",
                "class": "copyLarge",
                "type": "p"
            }/*, {
                "entry": "Try again",
                "class": "button",
                "type": "button",
                "target": "playhub_subscribed"
            }*/
        ]
    },
    {
        "id": 57,
        "title": "enter_your_new_password",
        "section_type": "form",
        "entries": [
            {
                "entry": "Login to your account",
                "class": "headerPage",
                "type": "p"
            },
            {
                "entry": "Don't have an account yet?",
                "class": "copyLarge",
                "type": "span"
            },
            {
                "entry": "Sign up",
                "class": "link",
                "type": "span"
            },
            {
                "entry": ".",
                "class": "copyLarge",
                "type": "span"
            },
            {
                "entry": "Email",
                "class": "inputBefore",
                "type": "inputField"
            },
            {
                "entry": "Password",
                "class": "inputBefore",
                "type": "inputStart"
            },
            {
                "entry": "Show",
                "class": "inputBefore",
                "type": "inputEnd"
            },

            {
                "entry": "",
                "class": "forwardButton",
                "type": "button",
                "target": "playhub_subscribed"
            },

            {
                "entry": "Forgot your password?",
                "class": "linkSmall",
                "type": "p",
                "target": "playhub_subscribed"
            }
        ]
    },
]








pages.forEach(page => {

    // START FIGMA //
    // Main Frame ---------------- GO
    let outerFrame = figma.createFrame();

    outerFrame.layoutMode = 'VERTICAL'
    outerFrame.fills = [{ type: 'SOLID', color: wopp_ui_blue_2 }]
    //https://www.figma.com/plugin-docs/api/properties/nodes-layoutsizingvertical/ < -- auto layout sizing 
    outerFrame.layoutSizingHorizontal = 'HUG'
    outerFrame.layoutAlign = 'STRETCH';
    outerFrame.counterAxisSizingMode = 'FIXED';
    outerFrame.primaryAxisSizingMode = 'FIXED';

    //https://www.figma.com/plugin-docs/api/properties/nodes-counteraxisalignitems/ <-- auto layout align items
    outerFrame.primaryAxisAlignItems = "CENTER"
    outerFrame.counterAxisAlignItems = "CENTER"

    outerFrame.layoutGrow = 1
    outerFrame.resize(1920, 1080)
    outerFrame.x = xpos
    outerFrame.y = ypos
    // Main Frame ---------------- STOP

    // Inside Frame ---------------- GO

    let innerFrame = figma.createFrame();

    outerFrame.appendChild(innerFrame)

    innerFrame.layoutMode = 'VERTICAL'
    //https://www.figma.com/plugin-docs/api/properties/nodes-layoutsizingvertical/ < -- auto layout sizing 
    innerFrame.layoutSizingVertical = 'HUG' // FIXED/ HUG/ FILL
    innerFrame.layoutSizingHorizontal = 'HUG' // FIXED/ HUG/ FILL

    //https://www.figma.com/plugin-docs/api/properties/nodes-counteraxisalignitems/ <-- auto layout align items
    innerFrame.primaryAxisAlignItems = "CENTER"
    innerFrame.counterAxisAlignItems = "CENTER"

    // Inside Frame ---------------- STOP

    if (xcount === 10) {
        ypos = 0;
        xcount = 0;
        xpos += 2120;

    } else {
        ypos += 1280;
        xcount++;
    }
    // END FIGMA //


    createPageType(page, innerFrame)
})

function createPageType(page, innerFrame) {

    let section_type = page.section_type

    switch (section_type) {
        case "messages":
            createMessage(page, innerFrame);
            break;
        case "form":
            createForm(page, innerFrame);
            break;
        default:
        //createPage(page)
    }
}

function layoutEntries(page, innerFrame) {

    let catchspan = []
    let catchformtext = []
    let catchgroup = [];
    let targetFrame = innerFrame;

    if (page.entries) {

        for (let i = 0; i < page.entries.length; i++) {

            var entry = page.entries[i];

            if (entry.hasOwnProperty('group')) {
                catchgroup.push([i, entry]);
            } else if (entry.entry) {

                switch (entry.type) {
                    case "span":
                        catchspan.push([i, entry]);
                        break;
                    case "inputField":
                        let formText = setTextStyle(entry);
                        let formField = createInputField();
                        formField.appendChild(formText);
                        targetFrame.appendChild(formField);
                        break;
                    case "inputStart":
                    case "inputEnd":
                        catchformtext.push([i, entry]);
                        break;
                    default:
                        let set_text = setTextStyle(entry);
                        targetFrame.appendChild(set_text);
                    //targetFrame.insertChild(i, set_text);
                }
            } else {
                setButton(entry, targetFrame);
            }
        }


        /*{
            "entry": entry,
                "vertical_group": [{
                        "entry": entry
                    }, {
                        "entry": entry 
                    }, {
                        "vertical_group": [{
                            "entry": entry
                        },
                        {
                            "entry": entry
                        }
                        ]
                    }
                ]
        },
        */

        if (catchgroup.length > 0) {
            createVerticalAutoLayout(catchgroup, targetFrame)
        }
        if (catchspan.length > 0) {
            createHorizontalAutolayout(catchspan, targetFrame)
        }
        if (catchformtext.length > 0) {
            createInputFieldMultiTexts(catchformtext, targetFrame)
        }

    }
}


function createInputFieldMultiTexts(catchformtext, innerFrame) {

    let formField = createInputField();

    for (let i = 0; i < catchformtext.length; i++) {
        let formText = setTextStyle(catchformtext[i][1]);
        formField.appendChild(formText);
    }
    formField.primaryAxisAlignItems = "SPACE_BETWEEN" //'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN'
    innerFrame.appendChild(formField);

    console.log('catchformtext --> insert new vertical group at ' + catchformtext[0][0])
    innerFrame.insertChild(catchformtext[0][0], formField);
}

function createPage(page) {
    console.log("createPage")
}

function createInputField() {

    let formframe = figma.createFrame();

    formframe.layoutMode = 'HORIZONTAL'
    formframe.primaryAxisSizingMode = 'FIXED';
    formframe.counterAxisSizingMode = 'FIXED';
    formframe.resize(1440, 100)
    formframe.primaryAxisAlignItems = "MIN" //'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN'
    formframe.counterAxisAlignItems = "CENTER"
    formframe.clipsContent = false;
    formframe.paddingLeft = 30;
    formframe.paddingRight = 30;
    formframe.paddingTop = 30;
    formframe.paddingBottom = 30;
    formframe.cornerRadius = 16;
    formframe.itemSpacing = 70;
    formframe.strokeWeight = lightStroke;
    formframe.strokes = [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": wopp_ui_lightest_grey }]

    formframe.fills = [{ type: 'SOLID', color: wopp_ui_white }]

    return formframe;
}

function setButton(entry, frame) {
    if (entry.class === "forwardButton") {
        let forwardButtonNode = figma.createNodeFromSvg(forwardButton);
        frame.appendChild(forwardButtonNode);
    }
}

function createVerticalAutoLayout(catchgroup, targetFrame) {
    let verticalFrame = figma.createFrame();

    verticalFrame.layoutMode = 'VERTICAL'
    verticalFrame.layoutSizingVertical = 'HUG'
    verticalFrame.layoutSizingHorizontal = 'HUG'
    verticalFrame.primaryAxisAlignItems = "CENTER"
    verticalFrame.counterAxisAlignItems = "CENTER"
    verticalFrame.clipsContent = false;
    verticalFrame.itemSpacing = 30;

    //DUPLICATED
    let catchspan = []
    let catchformtext = []

    for (let i = 0; i < catchgroup.length; i++) {

        let entry = catchgroup[i][1];

        if (entry.entry) {

            switch (entry.type) {
                case "span":
                    catchspan.push([i, entry]);
                    break;
                case "inputField":
                    let formText = setTextStyle(entry);
                    let formField = createInputField();
                    formField.appendChild(formText);
                    verticalFrame.appendChild(formField);
                    break;
                case "inputStart":
                case "inputEnd":
                    catchformtext.push([i, entry]);
                    break;
                default:
                    let set_text = setTextStyle(entry);
                    verticalFrame.appendChild(set_text);
            }
        } else {
            setButton(entry, verticalFrame);
        }
    }
    if (catchspan.length > 0) {
        createHorizontalAutolayout(catchspan, verticalFrame)
    }
    if (catchformtext.length > 0) {
        createInputFieldMultiTexts(catchformtext, verticalFrame)
    }
    //END DUPLICATED
    console.log('catchgroup --> insert new vertical group at ' + catchgroup[0][0])
    targetFrame.insertChild(catchgroup[0][0], verticalFrame);

}

function createHorizontalAutolayout(catchspan, innerFrame) {

    let spanframe = figma.createFrame();

    spanframe.layoutMode = 'HORIZONTAL'
    spanframe.layoutSizingVertical = 'HUG'
    spanframe.layoutSizingHorizontal = 'HUG'
    spanframe.primaryAxisAlignItems = "CENTER"
    spanframe.counterAxisAlignItems = "CENTER"
    spanframe.clipsContent = false;

    for (let i = 0; i < catchspan.length; i++) {

        let entry = catchspan[i][1];
        let set_text = setTextStyle(entry);
        spanframe.appendChild(set_text);
    }
    //--------------//
    console.log('catchspan --> insert new span of characters at ' + catchspan[0][0])
    innerFrame.insertChild(catchspan[0][0], spanframe);
}


function setTextStyle(entry) {

    for (let i = 0; i < styles.length; i++) {
        if (entry.class === styles[i].name) {

            //FIGMA
            let set_text = figma.createText()
            set_text.characters = entry.entry;
            set_text.fontSize = styles[i].fontSize;

            set_text.leadingTrim = 'CAP_HEIGHT';
            if (styles[i].lineHeight) {
                set_text.lineHeight = styles[i].lineHeight;
            }
            if (styles[i].color) {
                set_text.fills = [{ type: 'SOLID', color: styles[i].color }]
            }

            if (styles[i].textDecoration) {
                set_text.textDecoration = styles[i].textDecoration // "NONE" | "UNDERLINE" | "STRIKETHROUGH"
            }
            set_text.fontName = { family: styles[i].family, style: styles[i].style }
            //ENDFIGMA

            return set_text;
        }
    }
}


function createMessage(page, innerFrame) {

    innerFrame.paddingLeft = 70;
    innerFrame.paddingRight = 70;
    innerFrame.paddingTop = 70;
    innerFrame.paddingBottom = 70;
    innerFrame.cornerRadius = 50;
    innerFrame.itemSpacing = 70;
    innerFrame.strokeWeight = mediumStroke;
    innerFrame.strokes = [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": wopp_ui_white }]

    innerFrame.fills = [{ type: 'SOLID', color: wopp_ui_blue_1 }]

    layoutEntries(page, innerFrame)
}

function createForm(page, innerFrame) {

    innerFrame.fills = [{ type: 'SOLID', color: wopp_ui_blue_2 }]
    innerFrame.itemSpacing = 70;

    layoutEntries(page, innerFrame)

}