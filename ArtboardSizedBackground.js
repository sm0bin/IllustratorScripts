var docRef = app.activeDocument;
var artboardRef = docRef.artboards;

docRef.layers[0].name = "Background";

for (i = 0; i < artboardRef.length; i++) {
     var top = artboardRef[i].artboardRect[1];
     var left = artboardRef[i].artboardRect[0];
     var width = artboardRef[i].artboardRect[2] - artboardRef[i].artboardRect[0];
     var height = artboardRef[i].artboardRect[1] - artboardRef[i].artboardRect[3];
     var rect = docRef.pathItems.rectangle(top, left, width, height);
     rect.filled = true;
     rect.stroked = false;
     var bgFillColour = new RGBColor();
     bgFillColour.red = 200;
     bgFillColour.green = 200;
     bgFillColour.blue = 200;
     rect.fillColor = bgFillColour;
}

var layerTwo = docRef.layers.add();
layerTwo.name = "Design";
