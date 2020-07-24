var colorNameToHex = require("./colourNameToHex.js");
var http = require("http");
var fail = require("fail");



module.exports.function = function (colorName) {

  var hexColor = colorNameToHex(colorName);
  if(hexColor==false){
    throw fail.checkedError("No result found", "NoResultFound", {HexAndColor: hexAndColor});
  }

  //remove the hash prefix from hex
  hexColor = hexColor.slice(1, hexColor.length);


  var response = http.getUrl("https://www.thecolorapi.com/scheme?hex=" + hexColor + "&mode=complement&count=5&format=json", {
    format: "json"
  });

  var colors = [];

  for (var i = 0; i < response.colors.length - 1; i++) {

    var temp = new Object;

    temp["hex"] = response.colors[i].hex.value;
    temp["color"] = response.colors[i].name.value;
    temp["url"] = "http://www.thecolorapi.com/id?format=svg&named=false&hex=" + response.colors[i].hex.clean;
    colors.push(temp);

  }

  var hexAndColor = colors.filter((v, i, a) => a.findIndex(t => (t.color === v.color)) === i);
  return hexAndColor;
};
