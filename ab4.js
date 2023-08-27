var docRef = app.activeDocument;
var artboardRef = docRef.artboards;
var activeArtboardIndex = docRef.artboards.getActiveArtboardIndex();

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
    docRef.layers[0].name = "Background";
}

// Create the "Design" layer if it doesn't exist
if (designLayer === null) {
    designLayer = docRef.layers.add();
    designLayer.name = "Design";
}

if (activeArtboardIndex >= 0 && activeArtboardIndex < artboardRef.length) {
    // Get the active artboard's dimensions
    var activeArtboard = artboardRef[activeArtboardIndex];
    var top = activeArtboard.artboardRect[1];
    var left = activeArtboard.artboardRect[0];
    var width = activeArtboard.artboardRect[2] - activeArtboard.artboardRect[0];
    var height = activeArtboard.artboardRect[1] - activeArtboard.artboardRect[3];

    // Create a rectangle on the active artboard within the "Background" layer
    var rect = docRef.backgroundLayer.pathItems.rectangle(top, left, width, height);
    rect.filled = true;
    rect.stroked = false;
    var bgFillColour = new RGBColor();
    bgFillColour.red = 200;
    bgFillColour.green = 200;
    bgFillColour.blue = 200;
    rect.fillColor = bgFillColour;
}
