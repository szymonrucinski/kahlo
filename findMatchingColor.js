
var colourNameToHex = require('./colourNameToHex.js');
const fetch = require('node-fetch');
const { error } = require('console');

module.exports.findMatchingColor = function findMatchColor(colorName) {

  var hexColor = colourNameToHex(colorName);
  var matchingColors;
  hexColor = hexColor.slice(1,hexColor.length);

  console.log(hexColor);

   fetch('https://www.thecolorapi.com/scheme?hex='+hexColor+'&mode=complement&count=5&format=json')
  .then(response => response.json())
    .then(data => { matchingColors = filterServerOutput(data)})
  .catch(error);


  return matchingColors;

    
  
    
    
  };

  function filterServerOutput(data)
  {
    var outputMap = new Map();

    for (var i =0; i<data.colors.length-1; i++)
    {
       outputMap.set(data.colors[i].name.value,data.colors[i].hex.value);
    }

    console.log(outputMap);
    return outputMap;

  };