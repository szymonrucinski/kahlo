
var colourNameToHex = require('./colourNameToHex.js');
const fetch = require('node-fetch');
const { error } = require('console');

module.exports.findMatchColor = function findMatchColor(colorName) {

  var hexColor = colourNameToHex(colorName);
  hexColor = hexColor.slice(1,hexColor.length);

  console.log(hexColor);


  // var response = http.getUrl(config.get('http://thecolorapi.com/scheme?') + '/hex=' + hexColor + '&mode=analogic-complement&count=3', {format: 'json'});
  
  // fetch('http://thecolorapi.com/scheme?'+'/hex=' + hexColor + '&mode=analogic-complement&count=3')

  var obj;

   fetch('https://www.thecolorapi.com/scheme?hex='+hexColor+'&mode=complement&count=5&format=json')
  .then(response => response.json())
  .then(data => filterServerOutput(data))
  .catch(error);


  return hexColor;

    
  
    
    
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