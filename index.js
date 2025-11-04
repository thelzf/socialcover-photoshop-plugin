const photoshop = require("photoshop");

async function createDoc(width, height, name) {
  await photoshop.app.documents.add({
    width,
    height,
    resolution: 72,
    mode: "RGBColorMode",
    name
  });
}

document.getElementById("linkedin").onclick = () =>
  createDoc(1584, 396, "LinkedIn Cover");

document.getElementById("youtube").onclick = () =>
  createDoc(2560, 1440, "YouTube Banner");

document.getElementById("facebook").onclick = () =>
  createDoc(1640, 720, "Facebook Cover");
