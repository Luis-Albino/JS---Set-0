function Image (dataArray,width,height,imgName) {
    try {
        if (width*height != dataArray.length) 
        throw "invalid image size";
    }
    catch (err) {
        console.log(err)
    };
    this.width = width,
    this.height = height,
    this.name = imgName,
    this.getPixel = function (x,y) {
        try {
            if (x > width) 
            throw "invalid pixel width position"
            if (y > height) 
            throw "invalid pixel height position"
        }
        catch (err) {
            console.log(err)
        };
        return dataArray[width*(y-1)+x-1]
    }
};


/* FAKE IMAGE */
imgWidth = 40;
imgHeight = 40;
var data = Array(imgWidth*imgHeight);
for (let i = 0; i < data.length; i++) {
    let pixelWidth = i%imgWidth+1;
    let pixelHeight = Math.floor(i/imgWidth)+1;
    data[i] = "colorAt("+pixelWidth+","+pixelHeight+")";
}

var img = new Image(data,imgWidth,imgHeight,"myImage");


/* PRINT IMAGE INFO */

console.log("Name: ",img.name);
console.log("Width: ",img.width,"px");
console.log("Height: ",img.height,"px");
console.log("Color: ",img.getPixel(20,4));
