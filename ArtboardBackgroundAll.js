var docRef = app.activeDocument;
var artboardRef = docRef.artboards;

// Check if the "Background" layer exists
var backgroundLayer = null;
var designLayer = null;

for (var i = 0; i < docRef.layers.length; i++) {
    if (docRef.layers[i].name === "Background") {
        backgroundLayer = docRef.layers[i];
    }
    if (docRef.layers[i].name === "Design") {
        designLayer = docRef.layers[i];
    }
}

// Create the "Background" layer if it doesn't exist
if (backgroundLayer === null) {
    backgroundLayer = docRef.layers[0];
    backgroundLayer.name = "Background";
}

// Create the "Design" layer if it doesn't exist
if (designLayer === null) {
    designLayer = docRef.layers.add();
    designLayer.name = "Design";
}

for (var i = 0; i < artboardRef.length; i++) {
    var top = artboardRef[i].artboardRect[1];
    var left = artboardRef[i].artboardRect[0];
    var width = artboardRef[i].artboardRect[2] - artboardRef[i].artboardRect[0];
    var height = artboardRef[i].artboardRect[1] - artboardRef[i].artboardRect[3];
    var rect = backgroundLayer.pathItems.rectangle(top, left, width, height);
    rect.filled = true;
    rect.stroked = false;
    var bgFillColor = new RGBColor();
    bgFillColor.red = 200;
    bgFillColor.green = 200;
    bgFillColor.blue = 200;
    rect.fillColor = bgFillColor;
}
