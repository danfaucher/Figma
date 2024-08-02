//https://forum.figma.com/t/how-to-copy-component-instance-to-current-page-from-another-page-with-main-component/30474/7

/*let page = figma.root.findChild(node => node.name === 'UI Kit'),
	allComponentSets = page.findAllWithCriteria({types: ['COMPONENT_SET']}),
	componentSet = allComponentSets.find(node => node.name === 'Buttons');
componentSet.defaultVariant.createInstance();*/


//const firstChildFrame = figma.currentPage.findChild(n => n.type === "FRAME")

/*
//

// node with name must be top level 


const firstChildFrame = figma.currentPage.findChild(n => n.name === "6714236926819962880")

console.log(firstChildFrame + " fuck yeah");

// node with type must be top level 

const firstChildFrame0 = figma.currentPage.findChild(n => n.type === "COMPONENT")

console.log(firstChildFrame0);
    // cloneFrame node 
    let pageFrame = firstChildFrame.clone(); 


    //*/

/*

//
    const nodes = node.findAll(node => {
        return node.type === "FRAME" && node.children.length === 0
      })

      const nodes0 = node.findAll(node => {
        return node.type === "COMPONENT" 
      })

      console.log("meep " + nodes )
      console.log("beep " + nodes0 )


    //

    */


    const nodes = figma.currentPage.findAllWithCriteria({
        types: ['INSTANCE']
      })
      
      console.log(nodes)