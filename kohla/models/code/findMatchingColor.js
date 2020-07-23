
var colourNameToHex = require('./colourNameToHex.js');
var http = require('http');

module.exports.function = function (colorName) {

  var hexColor = colourNameToHex(colorName);
  hexColor = hexColor.slice(1,hexColor.length);
  var response = http.getUrl( 'https://www.thecolorapi.com/scheme?hex='+hexColor+'&mode=complement&count=5&format=json', {format: 'json'})
  var colorNames = []; 
  var colorHash = [];
  var outputColor = [];

  
    for (var i =0; i<response.colors.length-1; i++)
    {
      //  colorNames.push(response.colors[i].name.value);
      //  colorHash.push(response.colors[i].hex.value);
      outputColor[i].push({hex:response.colors[i].hex.value,
      color:response.colors[i].name.value});

    }



  return {
    hex: colorNames,
    color: colorHash
  };
    
  };

  