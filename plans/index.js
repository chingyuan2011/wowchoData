const fs = require("fs");

const data = [];
const fileName = "data.json";

const dataNum = 1;
const date = Date.now();
for (let i = 0; i < dataNum; i++) {
  const specificationNum = Math.floor(Math.random() * 2);
  const specificationData = [];
  for (let j = 0; j < specificationNum; j++) {
    specificationData.push({
      title: `募資規格${i+1}-${j+1}`,
      option: ["規格一", "規格二"]
    })
  }

    const eachData = {
      name: `募資方案名稱 - ${i}`,
      originalPrice: i * 500,
      actualPrice: i * 400,
      quantity: 10,
      pickupDate: date * 2,
      image: null,
      summary: `募資方案簡介 markdown - ${i}`,
      freightMainIsland: 60 + i,
      freightOuterIsland: null,
      freightOtherCountries: 100 + 20 * i,
      toSponsor: `給贊助者的話 markdown - ${i}`,
      specification: specificationData,
      createTime: date + i,
      updateTime: date + i,
    };
    data.push(eachData);
}

const jsonData = JSON.stringify(data);

fs.writeFile(fileName, jsonData, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("Data has been written to file.");
  }
});
