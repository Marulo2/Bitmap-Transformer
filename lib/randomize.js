"use strict";

const transform = module.exports = function(){
  const fs = require('fs');
  const file = fs.readFileSync(__dirname + "lib/palette-bitmap.bmp")

  const headers = {};

  function getHeaders(){
    headers.type = file.toString('ascii', 0, 2);
    headers.size = file.readUInt32LE(2);
    headers.pixelStart = file.readUInt32LE(10)
    headers.width = file.readUInt32LE(18);
    headers.height = file.readUInt32LE(22);
    headers.colorDepth = file.readUInt32LE(28);
    headers.compression = file.readUInt32LE(30);
  }

  console.log(headers);

  console.log(file.readUInt8(54), file.readUInt8(55), file.readUInt8(56), file.readUInt8(57));  
};
