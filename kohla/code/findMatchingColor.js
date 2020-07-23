var colourNameToHex = require('./colourNameToHex.js');
var http = require('http');
var console = require('console');
var config = require('config');
const {
  error
} = require('console');

module.exports.function = function (colorName) {

  var hexColor = colourNameToHex(colorName);
  hexColor = hexColor.slice(1, hexColor.length);

  var response = http.getUrl('https://www.thecolorapi.com/scheme?hex=' + hexColor + '&mode=complement&count=5&format=json', {
    format: 'json'
  })

  var arrayOfColors = [];
  var temp = new Object;

  temp["hex"];
  temp["color"];
  temp["url"];
  for (var i = 0; i < response.colors.length - 1; i++) {

    var temp = new Object;

    temp["hex"] = response.colors[i].hex.value;
    temp["color"] = response.colors[i].name.value;
    temp["url"] = 'http://www.thecolorapi.com/id?format=svg&named=false&hex=' + response.colors[i].hex.clean;
    arrayOfColors.push(temp);

  }

  var toReturn = arrayOfColors.filter((v, i, a) => a.findIndex(t => (t.color === v.color)) === i);
  return toReturn;

};
