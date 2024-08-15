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
    let thumbArray = [];

    const nodes = figma.currentPage.findAllWithCriteria({
        types: ['INSTANCE']
      })
      
      nodes.forEach(node => {

        thumbArray.push({"id": node.name, "parent": node.parent.id})

        console.log(node.parent.id)

      })


      let myvar = thumbArray[5].parent;

      //let pageFrame = myvar.clone(); 

      //console.log(thumbArray)


      //let juju = figma.getNodeByIdAsync(figma.currentPage.selection[0].id).type

      //!!!!!!!!!!!!!!!!!!!!!
      //let juju = figma.getNodeByIdAsync(figma.currentPage.myvar)
     /*let juju = figma.getNodeByIdAsync(myvar)

      let pageFrame = juju.clone()
      
      console.log(juju)