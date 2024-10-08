//an object must be selected to be cloned and pasted in the right column
let cloneFrame = figma.currentPage.selection[0];

const closeButton = '<svg width="123" height="115" viewBox="0 0 123 115" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M55.9571 4.37213C40.5228 4.37213 26.0054 3.14961 18.3646 5.13621C10.7239 7.1228 4 13.3882 4 23.474C4 33.5598 4.91689 38.6027 4.91689 44.4097C4.91689 50.2166 3.23593 77.5705 5.37534 85.3641C7.51475 93.1577 8.89008 102.479 28.2976 102.479C38.2306 102.479 66.6542 101.868 78.4209 101.868C103.024 101.868 110.359 94.533 110.359 76.0424C110.359 57.5518 108.22 36.7689 108.22 26.0719C108.22 15.3748 108.678 5.28902 89.882 4.37213C71.0858 3.60806 71.2386 4.37213 55.9571 4.37213Z" fill="#0078BF"/> <path d="M55.9571 4.37213C40.5228 4.37213 26.0054 3.14961 18.3646 5.13621C10.7239 7.1228 4 13.3882 4 23.474C4 33.5598 4.91689 38.6027 4.91689 44.4097C4.91689 50.2166 3.23593 77.5705 5.37534 85.3641C7.51475 93.1577 8.89008 102.479 28.2976 102.479C38.2306 102.479 66.6542 101.868 78.4209 101.868C103.024 101.868 110.359 94.533 110.359 76.0424C110.359 57.5518 108.22 36.7689 108.22 26.0719C108.22 15.3748 108.678 5.28902 89.882 4.37213C71.0858 3.60806 71.2386 4.37213 55.9571 4.37213Z" stroke="white" stroke-width="7.57963"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M67.7238 53.5788L81.7828 39.5198C83.9222 37.3804 83.9222 33.7128 81.7828 31.5734L78.5737 28.3643C76.4343 26.2249 72.7667 26.2249 70.6273 28.3643L56.5683 42.4233L42.5093 28.3643C40.3699 26.2249 36.7024 26.2249 34.563 28.3643L31.5067 31.5734C29.3672 33.7128 29.3672 37.3804 31.5067 39.5198L45.5656 53.5788L31.5067 67.6378C29.3672 69.7772 29.3672 73.4448 31.5067 75.5842L34.7158 78.7933C36.8552 80.9327 40.5227 80.9327 42.6622 78.7933L56.7211 64.7343L70.7801 78.7933C72.9195 80.9327 76.5871 80.9327 78.7265 78.7933L81.9356 75.5842C84.075 73.4448 84.075 69.7772 81.9356 67.6378L67.7238 53.5788Z" fill="white"/> </svg>'
const wopp_ui_blue_2 = { r: 0.8275, g: 0.8941, b: 0.9882 }
const overlayBackground = "#53647e";

const devices = [
    {
        "as": "16:9 - Apple iPhone 8 Plus - 1920 x 1080",
        "width": 1920,
        "height": 1080
    },

    {
        "as": "19.5:9 - iPhone 12 Pro Max - 2778 x 1284",
        "width": 2778,
        "height": 1284
    },

    {
        "as": "19:9 - Samsung Galaxy S10 - 3040 x 1440",
        "width": 3040,
        "height": 1440
    },

    {
        "as": "22:9 - Samsung Galaxy Z Flip3 - 2640 x 1080",
        "width": 2640,
        "height": 1080
    },

    {
        "as": "4:3 - iPad 7th generation - 2160 x 1620",
        "width": 2160,
        "height": 1620
    },

    {
        "as": "59:41 - iPad Air 4th generation - 2360 x 1640",
        "width": 2360,
        "height": 1640
    },

    {
        "as": "8:5 - Google Pixel Tablet - 2560 x 1600",
        "width": 2560,
        "height": 1600
    },

    {
        "as": "5:3 - Google Nexus 4 - 1280 x 768",
        "width": 1280,
        "height": 768
    }
]






let ypos = 0;
let xpos = 0;
let xcount = 0;


for (let i = 0; i < devices.length; i++) {

    let gameiconwidth = devices[i].width * 0.13
    let gameiconheight = gameiconwidth
    let gameiconpadding = devices[i].width * 0.3


    let innerframewidth = devices[i].width * 0.84
    
    let gameframewidth = devices[i].width * 0.77 

    let gameframeheight = devices[i].width * 0.30 

    // Outerframe Frame ---------------- GO
    let deviceFrame = figma.createFrame();

    deviceFrame.layoutMode = 'HORIZONTAL'
    deviceFrame.fills = [{ type: 'SOLID', color: wopp_ui_blue_2 }]
    deviceFrame.layoutSizingHorizontal = 'HUG'
    deviceFrame.layoutAlign = 'STRETCH';
    deviceFrame.counterAxisSizingMode = 'FIXED';
    deviceFrame.primaryAxisSizingMode = 'FIXED';
    deviceFrame.primaryAxisAlignItems = "CENTER"
    deviceFrame.counterAxisAlignItems = "CENTER"

    deviceFrame.layoutGrow = 1
    deviceFrame.resize(devices[i].width, devices[i].height)
    deviceFrame.x = xpos
    deviceFrame.y = ypos
    deviceFrame.name = devices[i].as + " (outerframe)"

    let outerLeftRightPadding = devices[i].width/10;
    deviceFrame.paddingLeft = outerLeftRightPadding;
    deviceFrame.paddingRight = outerLeftRightPadding;

    let overlayCol = figma.util.rgb(overlayBackground)
    deviceFrame.fills = [{ type: 'SOLID', color: overlayCol }]

    // Main Frame ---------------- STOP

    // Inside Frames ------------------------------------------------------
   
    // innerFrame ---------------- 

    let innerFrame = figma.createFrame();

    deviceFrame.appendChild(innerFrame)

    

    innerFrame.layoutMode = 'VERTICAL'
    //innerFrame.layoutSizingHorizontal = 'FILL' // FIXED/ HUG/ FILL
    //innerFrame.layoutSizingVertical = 'HUG' // FIXED/ HUG/ FILL
    innerFrame.primaryAxisAlignItems = "CENTER" // MIN/ CENTER/ MAX
    innerFrame.counterAxisAlignItems = "CENTER" // MIN/ CENTER/ MAX
    innerFrame.fills = [{ type: 'SOLID', color: wopp_ui_blue_2 }]
    innerFrame.name = "innerframe"

    innerFrame.resize(innerframewidth, devices[i].height)

    innerFrame.cornerRadius = 50
        
    // Game Frame ------------ START

    let gamesframe = figma.createFrame();
    gamesframe.name = "gamesframe"
    gamesframe.resize(gameframewidth , gameframeheight)
    innerFrame.appendChild(gamesframe)

    // Game Frame ------------ END

    //placement of frames as devices array
    if (xcount === 3) {
        ypos = 0;
        xcount = 0;
        xpos += 4500;

    } else {
        ypos += devices[i].height + 500;
        xcount++;
    }
    // END FIGMA //

}






