//an object must be selected to be cloned and pasted in the right column
let cloneFrame = figma.currentPage.selection[0];


const closeButton = '<svg width="123" height="115" viewBox="0 0 123 115" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M55.9571 4.37213C40.5228 4.37213 26.0054 3.14961 18.3646 5.13621C10.7239 7.1228 4 13.3882 4 23.474C4 33.5598 4.91689 38.6027 4.91689 44.4097C4.91689 50.2166 3.23593 77.5705 5.37534 85.3641C7.51475 93.1577 8.89008 102.479 28.2976 102.479C38.2306 102.479 66.6542 101.868 78.4209 101.868C103.024 101.868 110.359 94.533 110.359 76.0424C110.359 57.5518 108.22 36.7689 108.22 26.0719C108.22 15.3748 108.678 5.28902 89.882 4.37213C71.0858 3.60806 71.2386 4.37213 55.9571 4.37213Z" fill="#0078BF"/> <path d="M55.9571 4.37213C40.5228 4.37213 26.0054 3.14961 18.3646 5.13621C10.7239 7.1228 4 13.3882 4 23.474C4 33.5598 4.91689 38.6027 4.91689 44.4097C4.91689 50.2166 3.23593 77.5705 5.37534 85.3641C7.51475 93.1577 8.89008 102.479 28.2976 102.479C38.2306 102.479 66.6542 101.868 78.4209 101.868C103.024 101.868 110.359 94.533 110.359 76.0424C110.359 57.5518 108.22 36.7689 108.22 26.0719C108.22 15.3748 108.678 5.28902 89.882 4.37213C71.0858 3.60806 71.2386 4.37213 55.9571 4.37213Z" stroke="white" stroke-width="7.57963"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M67.7238 53.5788L81.7828 39.5198C83.9222 37.3804 83.9222 33.7128 81.7828 31.5734L78.5737 28.3643C76.4343 26.2249 72.7667 26.2249 70.6273 28.3643L56.5683 42.4233L42.5093 28.3643C40.3699 26.2249 36.7024 26.2249 34.563 28.3643L31.5067 31.5734C29.3672 33.7128 29.3672 37.3804 31.5067 39.5198L45.5656 53.5788L31.5067 67.6378C29.3672 69.7772 29.3672 73.4448 31.5067 75.5842L34.7158 78.7933C36.8552 80.9327 40.5227 80.9327 42.6622 78.7933L56.7211 64.7343L70.7801 78.7933C72.9195 80.9327 76.5871 80.9327 78.7265 78.7933L81.9356 75.5842C84.075 73.4448 84.075 69.7772 81.9356 67.6378L67.7238 53.5788Z" fill="white"/> </svg>'


//const closeButton = x<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M45.0001 84.6673C66.8945 84.6673 84.6433 66.9108 84.6433 45.007C84.6433 23.1032 66.8945 5.34668 45.0001 5.34668C23.1058 5.34668 5.35693 23.1032 5.35693 45.007C5.35693 66.9108 23.1058 84.6673 45.0001 84.6673Z" fill="white"/> <path d="M45.0001 87.222C68.3039 87.222 87.1955 68.3217 87.1955 45.007C87.1955 21.6923 68.3039 2.79199 45.0001 2.79199C21.6962 2.79199 2.80469 21.6923 2.80469 45.007C2.80469 68.3217 21.6962 87.222 45.0001 87.222Z" fill="white" stroke="#0275B9" stroke-width="5.2"/> <path d="M43.7701 26L61.5801 44.71L43.0601 64.16" stroke="#0275B9" stroke-width="11.45" stroke-linecap="round" stroke-linejoin="round"/> <path d="M60.01 45.0801H28" stroke="#0275B9" stroke-width="11.45" stroke-linecap="round"/> </svg>'

const wopp_ui_blue_2 = { r: 0.8275, g: 0.8941, b: 0.9882 }
//const wopp_ui_alpha = { r: 0.8275, g: 0.8941, b: 0.9882, a: 0 }
//const wopp_ui_alpha = rgba('rgb(25% 25% 25% / 0.5)')
const overlayBackground = "#53647e";
//#D3E4FC

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

//percentage widths 
//const width_percentage = 0.80;
//const height_percentage = 0.60;
const width_percentage = 1;
const height_percentage = 1;

const paywall_container = 750;
/*1720, 70 @ 1920, 1080
let close_x = 
let close_y = */


let ypos = 0;
let xpos = 0;   
let xcount = 0;


for (let i = 0; i < devices.length; i++) {

    // START FIGMA //
    // Main Frame ---------------- GO
    let outerFrame = figma.createFrame();

    outerFrame.layoutMode = 'HORIZONTAL'
    outerFrame.fills = [{ type: 'SOLID', color: wopp_ui_blue_2 }]
    outerFrame.layoutSizingHorizontal = 'HUG'
    outerFrame.layoutAlign = 'STRETCH';
    outerFrame.counterAxisSizingMode = 'FIXED';
    outerFrame.primaryAxisSizingMode = 'FIXED';
    outerFrame.primaryAxisAlignItems = "CENTER"
    outerFrame.counterAxisAlignItems = "CENTER"

    outerFrame.layoutGrow = 1
    outerFrame.resize(devices[i].width, devices[i].height)
    outerFrame.x = xpos
    outerFrame.y = ypos
    outerFrame.name = devices[i].as


    let overlayCol = figma.util.rgb(overlayBackground)
    outerFrame.fills = [{ type: 'SOLID', color: overlayCol }]

    // Main Frame ---------------- STOP

    // Inside Frames ------------------------------------------------------
   
    // innerFrame ---------------- 

    let innerFrame = figma.createFrame();

    outerFrame.appendChild(innerFrame)

    innerFrame.layoutMode = 'VERTICAL'
    innerFrame.layoutSizingVertical = 'FILL' // FIXED/ HUG/ FILL
    innerFrame.layoutSizingHorizontal = 'FIXED' // FIXED/ HUG/ FILL
    innerFrame.primaryAxisAlignItems = "CENTER"
    innerFrame.counterAxisAlignItems = "MIN"
    innerFrame.fills = [{ type: 'SOLID', color: wopp_ui_blue_2 }]

    innerFrame.paddingTop = 70
    innerFrame.paddingLeft = 70
    innerFrame.paddingBottom = 70
    innerFrame.paddingLeft = 70

    innerFrame.cornerRadius = 50

    innerFrame.resize(devices[i].width * width_percentage, devices[i].height * height_percentage)


    //percentage widths 
    //const width_percentage = 0.80;
    //const height_percentage = 0.80;
    // Inside Frames ------------------------------------------------------ END


    

    /*let closeButtonNode = figma.createNodeFromSvg(closeButton);
    outerFrame.appendChild(closeButtonNode);
    //set absolute position
    closeButtonNode.layoutPositioning = 'ABSOLUTE'
    closeButtonNode.x = devices[i].width - 200
    closeButtonNode.y = 70*/
    





    // cloneFrame node 
    let pageFrame = cloneFrame.clone(); 
    innerFrame.appendChild(pageFrame);
    
    //rescale height dependent on cloned frame being correct height
    //let deviceRescale = devices[i].height/ 1080
//let scalePercentage = pageFrame.height/ 1080


    let deviceRescale = devices[i].height * .71



    //pageFrame.rescale(0.7)
    pageFrame.rescale(deviceRescale)
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






