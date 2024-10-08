
    
   /*let background1 =  figma.currentPage.findAll(n => n.name === "background1")
   let background1_clone = background1.clone();



   let rightColumnContent = text_content.clone(); 
   rightColumn.appendChild(rightColumnContent);*/

   let thumbTarget = figma.currentPage.findOne(n => n.name === "background1");
   let cloneFrame = thumbTarget.clone();