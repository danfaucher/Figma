let text_content = figma.currentPage.selection[0];

const wopp_ui_blue_2 = { r: 0.8275, g: 0.8941, b: 0.9882 }
//const wopp_ui_alpha = { r: 0.8275, g: 0.8941, b: 0.9882, a: 0 }
//const wopp_ui_alpha = rgba('rgb(25% 25% 25% / 0.5)')

//#D3E4FC

const devices = [
    {
        "as": "16:9 - Apple iPhone 8 Plus - 1920 x 1080",
        "width": 1920,
        "height": 1080
    },

    {
        "as": "19.5:9",
        "width": 1339,
        "height": 618
    },

    {
        "as": "20:9",
        "width": 1339,
        "height": 603
    },

    {
        "as": "22:9",
        "width": 1339,
        "height": 548
    },

    {
        "as": "4:3",
        "width": 1024,
        "height": 768
    },

    {
        "as": "59:41",
        "width": 1024,
        "height": 711
    },

    {
        "as": "8:5",
        "width": 1024,
        "height": 640
    },

    {
        "as": "5:3",
        "width": 1024,
        "height": 615
    }
]

//percentage widths 
const left_safety = 0.05;
const right_safety = 0.05;
const graphic_hero = 0.40;
const right_column = 0.50;

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
    //https://www.figma.com/plugin-docs/api/properties/nodes-layoutsizingvertical/ < -- auto layout sizing 
    outerFrame.layoutSizingHorizontal = 'HUG'
    outerFrame.layoutAlign = 'STRETCH';
    outerFrame.counterAxisSizingMode = 'FIXED';
    outerFrame.primaryAxisSizingMode = 'FIXED';

    //https://www.figma.com/plugin-docs/api/properties/nodes-counteraxisalignitems/ <-- auto layout align items
    outerFrame.primaryAxisAlignItems = "CENTER"
    outerFrame.counterAxisAlignItems = "CENTER"

    outerFrame.layoutGrow = 1
    outerFrame.resize(devices[i].width, devices[i].height)
    outerFrame.x = xpos
    outerFrame.y = ypos
    outerFrame.name = devices[i].as
    // Main Frame ---------------- STOP

    // Inside Frames ------------------------------------------------------
    // LeftSafety Frame ---------------- 

    let leftSafety = figma.createFrame();

    outerFrame.appendChild(leftSafety)

    leftSafety.layoutMode = 'VERTICAL'
    //outerFrame.fills = [{ type: 'SOLID', color: rgba('rgb(25% 25% 25% / 0.5)')}]    
    leftSafety.layoutSizingVertical = 'FILL' // FIXED/ HUG/ FILL
    leftSafety.layoutSizingHorizontal = 'FIXED' // FIXED/ HUG/ FILL
    leftSafety.primaryAxisAlignItems = "CENTER"
    leftSafety.counterAxisAlignItems = "CENTER"

    leftSafety.resize(devices[i].width * left_safety, devices[i].height)
    leftSafety.name = "left_safety"

    // graphicHero Frame ---------------- 

    let graphicHero = figma.createFrame();

    outerFrame.appendChild(graphicHero)

    graphicHero.layoutMode = 'VERTICAL'
    graphicHero.layoutSizingVertical = 'FILL' // FIXED/ HUG/ FILL
    graphicHero.layoutSizingHorizontal = 'FIXED' // FIXED/ HUG/ FILL
    graphicHero.primaryAxisAlignItems = "CENTER"
    graphicHero.counterAxisAlignItems = "CENTER"

    graphicHero.resize(devices[i].width * graphic_hero, devices[i].height)
    graphicHero.name = "graphic_hero"

    // rightSafety Frame ---------------- 

    let rightSafety = figma.createFrame();

    outerFrame.appendChild(rightSafety)

    rightSafety.layoutMode = 'VERTICAL'
    rightSafety.layoutSizingVertical = 'FILL' // FIXED/ HUG/ FILL
    rightSafety.layoutSizingHorizontal = 'FIXED' // FIXED/ HUG/ FILL
    rightSafety.primaryAxisAlignItems = "CENTER"
    rightSafety.counterAxisAlignItems = "CENTER"

    rightSafety.resize(devices[i].width * right_safety, devices[i].height)
    rightSafety.name = "right_safety"

    // rightColumn Frame ---------------- 

    let rightColumn = figma.createFrame();

    outerFrame.appendChild(rightColumn)

    rightColumn.layoutMode = 'VERTICAL'
    rightColumn.layoutSizingVertical = 'FILL' // FIXED/ HUG/ FILL
    rightColumn.layoutSizingHorizontal = 'FIXED' // FIXED/ HUG/ FILL
    rightColumn.primaryAxisAlignItems = "CENTER"
    rightColumn.counterAxisAlignItems = "MIN"

    rightColumn.resize(devices[i].width * right_column, devices[i].height)

    // Inside Frames ------------------------------------------------------ END


    // text_content node 
    let rightColumnContent = text_content.clone(); 
    rightColumn.appendChild(rightColumnContent);

    let deviceRescale = devices[i].width/ 1920
    //rightColumnContent.rescale(0.7)
    rightColumnContent.rescale(deviceRescale)
    if (xcount === 3) {
        ypos = 0;
        xcount = 0;
        xpos += 2120;

    } else {
        ypos += 1280;
        xcount++;
    }
    // END FIGMA //

}






