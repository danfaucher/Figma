for (const node of figma.currentPage.selection) {
  if ("opacity" in node) {
    node.opacity *= 0.5
  }
}
figma.closePlugin()


for (const page of figma.root.children) {
    await page.loadAsync()
    console.log(`Page ${page.name} has ${page.children.length} children`)
  }