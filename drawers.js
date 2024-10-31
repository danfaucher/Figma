//stub script to create cabinet drawings 
//draws one shape only


const dark_grey = { r: 0.2784, g: 0.2784, b: 0.2784 }
const pieces = [
    {name: "Left Side Carcass",
        width: 0.75,
        height: 35,
        depth: 24
    },

]

const frontFrame = figma.createFrame();
const sideFrame = figma.createFrame();
const topFrame = figma.createFrame();

frontFrame.layoutMode = 'VERTICAL'
//https://www.figma.com/plugin-docs/api/properties/nodes-layoutsizingvertical/ < -- auto layout sizing 
frontFrame.layoutSizingVertical = 'HUG' // FIXED/ HUG/ FILL
frontFrame.layoutSizingHorizontal = 'HUG' // FIXED/ HUG/ FILL

frontFrame.x = 0;
frontFrame.y = 1000;

sideFrame.x = 2000;
sideFrame.y = 1000;

topFrame.x = 3000;
topFrame.y = 1000;



pieces.forEach(piece => {

    let pieceFrame = figma.createFrame();
    pieceFrame.resize(piece.width *72, piece.height *72)
    pieceFrame.strokes = [{ "type": "SOLID", "visible": true, "opacity": 1, "blendMode": "NORMAL", "color": dark_grey }]




    frontFrame.appendChild(pieceFrame)
    

})
