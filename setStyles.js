// set to work in tandem with Typography Style Guide Generator

const localTextStyles = await figma.getLocalTextStylesAsync()

const wopp_ui_white = { r: 1, g: 1, b: 1 }
const wopp_ui_blue_1 = { r: 0.9569, g: 0.9647, b: 0.9961 }
const wopp_ui_blue_2 = { r: 0.8275, g: 0.8941, b: 0.9882 }
const wopp_ui_blue_3 = { r: 0.0078, g: 0.4588, b: 0.7255 }

const wopp_ui_lighter_grey = { r: 0.5647, g: 0.5804, b: 0.5882 }
const wopp_ui_darker_grey = { r: 0.2039, g: 0.2157, b: 0.2392 }

const wopp_stroke_light = 4


const wopp_ui_small_shadow = [{
    type: "DROP_SHADOW",
    color: { r: 0, g: 0, b: 0, a: 0.25 },
    offset: { x: 4, y: 4 },
    radius: 4,
    visible: true,
    blendMode: "NORMAL"
}]


const styles = [

    { name: 'HeaderPage', family: "Peppa", style: "Bold", fontSize: 90, lineHeight: 70, color: wopp_ui_darker_grey, },
    { name: 'HeaderPageHomeBanner', family: 'Avenir Next World', style: 'Demi', fontSize: 72, lineHeight: 80, color: wopp_ui_darker_grey, },
    { name: 'HeaderSmall', family: 'Avenir Next World', style: 'Demi', fontSize: 64, lineHeight: 74, color: wopp_ui_darker_grey, },
    { name: 'CopyLarge', family: 'Avenir Next World', style: 'Medium', fontSize: 42, lineHeight: 48, color: wopp_ui_darker_grey, },
    { name: 'CopyLarge_parent', family: 'Avenir Next World', style: 'Medium', fontSize: 42, lineHeight: 69, color: wopp_ui_darker_grey, },
    { name: 'CopyLarge_parentBold', family: 'Avenir Next World', style: 'Medium', fontSize: 42, lineHeight: 69, color: wopp_ui_darker_grey, },
    { name: 'CopyLarge_parentDemi', family: 'Avenir Next World', style: 'Demi', fontSize: 42, lineHeight: 69, color: wopp_ui_darker_grey, },
    { name: 'CopyLarge_parentDemi_White', family: 'Avenir Next World', style: 'Demi', fontSize: 42, lineHeight: 69, color: wopp_ui_white, },
    { name: 'CopySmall_parentDemi_White', family: 'Avenir Next World', style: 'Demi', fontSize: 36, lineHeight: 69, color: wopp_ui_white, },
    { name: 'Copy_Small_und', family: 'Avenir Next World', style: 'Medium', fontSize: 32, lineHeight: 37, color: wopp_ui_darker_grey, },
    { name: 'Link', family: 'Avenir Next World', style: 'Medium', fontSize: 42, lineHeight: 48, /*textDecoration: 'underline', */ },
    { name: 'Link_Bold', family: 'Avenir Next World', style: 'Demi', fontSize: 42, /*textDecoration: 'underline', */ },
    { name: 'Link_Small_und', family: 'Avenir Next World', style: 'Medium', fontSize: 32, lineHeight: 37, /*textDecoration: 'underline', */ },
    { name: 'NavText', family: 'Avenir Next World', style: 'Medium', fontSize: 56, lineHeight: 58, color: wopp_ui_darker_grey, },
    { name: 'InputBefore', family: 'Avenir Next World', style: 'Regular', fontSize: 42, lineHeight: 48, color: wopp_ui_lighter_grey, },
    { name: 'ButtonWhite', family: 'Avenir Next World', style: 'Medium', fontSize: 50, lineHeight: 86.9, color: wopp_ui_white, },
    { name: 'ButtonBlack', family: 'Avenir Next World', style: 'Medium', fontSize: 28, color: wopp_ui_darker_grey },
    { name: 'Numbers', family: 'Avenir Next World', style: 'Demi', fontSize: 56, lineHeight: 68, color: wopp_ui_darker_grey, },
    { name: 'NoLink', family: 'Avenir Next World', style: 'Regular', fontSize: 42, },
    { name: 'Copy_Legal_und', family: 'Avenir Next World', style: 'Medium', fontSize: 18, lineHeight: 22, color: wopp_ui_darker_grey, },
    { name: 'Cost_Medium_und+dummyFontSize', family: 'Avenir Next World', style: 'Demi', fontSize: 24, color: wopp_ui_darker_grey, },
    { name: 'Cost_Medium_Currency_und', family: 'Avenir Next World', style: 'Medium', fontSize: 55, lineHeight: 66, color: wopp_ui_darker_grey, },
    { name: 'Cost_Small_und', family: 'Avenir Next World', style: 'Regular', fontSize: 70, lineHeight: 84, color: wopp_ui_darker_grey, },
    { name: 'Cost_Small_forward_slash_und', family: 'Avenir Next World', style: 'Regular', fontSize: 70, lineHeight: 84, color: wopp_ui_darker_grey, },
    { name: 'Cost_Small_Year_und', family: 'Avenir Next World', style: 'Regular', fontSize: 40, lineHeight: 48, color: wopp_ui_darker_grey, },
    { name: 'CopySmall_Demi', family: 'Avenir Next World', style: 'Demi', fontSize: 24, color: wopp_ui_darker_grey, },
    { name: 'Paywall_UI_Link_und', family: 'Avenir Next World', style: 'Medium', fontSize: 42, /*textDecoration: 'underline', */color: wopp_ui_blue_3, color: wopp_ui_blue_3, lineHeight: 48, },
    { name: 'Cost_Small_Demi_und', family: 'Avenir Next World', style: 'Demi', fontSize: 70, lineHeight: 84, color: wopp_ui_darker_grey, },
    { name: 'CancelSubscription_HelpCenter', family: 'Avenir Next World', style: 'Medium', fontSize: 36, color: wopp_ui_white, lineHeight: 62, },
    { name: 'GrownUps_CTA_dummyFontSize', family: "Peppa", style: "Bold", fontSize: 36, color: wopp_ui_white, }

]


let outerFrame = figma.createFrame();
outerFrame.layoutMode = 'VERTICAL'
//outerFrame.fills = [{ type: 'SOLID', color: wopp_ui_blue_2 }]
outerFrame.resize(1440, 22)

//styles.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

styles.sort((a, b) => b.fontSize - a.fontSize)

styles.forEach(style => {

    //----------------------------------------
    let title = figma.createText();
    title.characters = style.name
    title.fontName = { family: 'Inter', style: 'Medium' }
    title.fills = [{ type: 'SOLID', color: { r: 0.4118, g: 0.1608, b: 0.7686 } }] //purple
    title.fontSize = 18;
    title.resize(140, 22)
    //title.layoutSizingVertical = 'HUG'


    let sectionTitle = figma.createFrame();
    sectionTitle.layoutMode = 'VERTICAL'
    sectionTitle.layoutSizingHorizontal = 'HUG'
    sectionTitle.appendChild(title)
    sectionTitle.name = 'Title'

    sectionTitle.layoutSizingVertical = 'HUG'

    let fontStyle = figma.createText()
    fontStyle.characters = style.family + " - " + style.style
    fontStyle.fontName = { family: 'Inter', style: 'Regular' }
    fontStyle.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }] //purple
    fontStyle.fontSize = 14;

    let fontDetails = figma.createText()
    fontDetails.characters = ''
    if (style.fontSize) { fontDetails.characters += style.fontSize + 'px /' }
    if (style.lineHeight) { fontDetails.characters += ' ' + style.lineHeight + 'px /' }
    if (style.color) { fontDetails.characters += ' ' + style.color.toString() }
    

    let sectionInfos = figma.createFrame()
    sectionInfos.layoutMode = 'VERTICAL'
    sectionInfos.layoutSizingHorizontal = 'HUG'
    sectionInfos.appendChild(fontStyle)
    sectionInfos.appendChild(fontDetails)
    sectionInfos.name = 'Infos'
    sectionInfos.resize(250, 33)

    let lorum = figma.createText()
    lorum.characters = "Lorem ipsum"
    lorum.fontSize = style.fontSize;
    if (style.color) { lorum.fills[{ type: 'SOLID', color: style.color }] }
    lorum.fontName = { family: style.family, style: style.style }
    lorum.resize(500, 33)

    //https://www.figma.com/plugin-docs/api/TextNode/#layoutalign <-- Align - Hug, Fill and Fixed with Text Nodes
    lorum.layoutAlign = 'STRETCH' // Vertical :: 'STRETCH' 'INHERIT'
    lorum.layoutGrow = 1; // Horizontal :: setting this to 0 - text node = Fixed :: setting this to 1 will make the text node set to Fill

    let section = figma.createFrame()
    section.layoutMode = 'HORIZONTAL'
    section.layoutSizingVertical = 'HUG'
    //section.layoutSizingHorizontal = 'FILL'

    //https://www.figma.com/plugin-docs/api/properties/nodes-counteraxisalignitems/ <-- auto layout align items
    section.primaryAxisAlignItems = "MIN"
    section.counterAxisAlignItems = "CENTER"

    section.itemSpacing = 48
    section.name = 'Section'

    section.appendChild(sectionTitle)
    section.appendChild(sectionInfos)
    section.appendChild(lorum)

    outerFrame.appendChild(section)

})

outerFrame.layoutSizingVertical = 'HUG'
outerFrame.paddingLeft = 70
outerFrame.paddingRight = 70
outerFrame.paddingTop = 70
outerFrame.paddingBottom = 70


figma.notify(`My styles ${localTextStyles[5].name}`)

