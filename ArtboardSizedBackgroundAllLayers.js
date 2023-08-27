// let docRef = app.activeDocument;
// let artboardRef = docRef.artboards;

// docRef.layers[0].name = "Background";

// for (i = 0; i < artboardRef.length; i++) {
//      let top = artboardRef[i].artboardRect[1];
//      let left = artboardRef[i].artboardRect[0];
//      let width = artboardRef[i].artboardRect[2] - artboardRef[i].artboardRect[0];
//      let height = artboardRef[i].artboardRect[1] - artboardRef[i].artboardRect[3];
//      let rect = docRef.pathItems.rectangle(top, left, width, height);
//      rect.filled = true;
//      rect.stroked = false;
//      let bgFillColour = new RGBColor();
//      bgFillColour.red = 200;
//      bgFillColour.green = 200;
//      bgFillColour.blue = 200;
//      rect.fillColor = bgFillColour;
// }

// let layerTwo = docRef.layers.add();
// layerTwo.name = "Design";

let docRef = app.activeDocument;
let artboardRef = docRef.artboards;

// Check if the "Background" layer exists
let backgroundLayer = null;
let designLayer = null;
for (let i = 0; i < docRef.layers.length; i++) {
     if (docRef.layers[i].name === "Background") {
          backgroundLayer = docRef.layers[i];
          // break;
     }
     if (docRef.layers[i].name === "Design") {
          designLayer = docRef.layers[i];
          // break;
     }
}

// Create the "Background" layer if it doesn't exist
if (backgroundLayer === null) {
     // backgroundLayer = docRef.layers.add();
     // backgroundLayer.name = "Background";
     docRef.layers[0].name = "Background";
}
if (designLayer === null) {
     // backgroundLayer = docRef.layers.add();
     // backgroundLayer.name = "Background";
     // docRef.layers[0].name = "Background";
     let layerTwo = docRef.layers.add();
     layerTwo.name = "Design";
}

for (let i = 0; i < artboardRef.length; i++) {
     let top = artboardRef[i].artboardRect[1];
     let left = artboardRef[i].artboardRect[0];
     let width = artboardRef[i].artboardRect[2] - artboardRef[i].artboardRect[0];
     let height = artboardRef[i].artboardRect[1] - artboardRef[i].artboardRect[3];
     let rect = docRef.pathItems.rectangle(top, left, width, height);
     rect.filled = true;
     rect.stroked = false;
     let bgFillColour = new RGBColor();
     bgFillColour.red = 200;
     bgFillColour.green = 200;
     bgFillColour.blue = 200;
     rect.fillColor = bgFillColour;
}

