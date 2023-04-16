const fs = require("fs");

const data = [];
const fileName = 'data.json'

const dataNum = 100;
const date = Date.now()
for (let i = 0; i < dataNum; i++) {
  const eachData = {
    contact: `聯絡方式${i}`,
    risk: `風險與挑展\r\n blablabla ${i}`,
    refund: `退換貨\r\n blablabla ${i}`,
    createTime: date+i,
    updateTime: date+i,
  };
  data.push(eachData)
}

const jsonData = JSON.stringify(data);

fs.writeFile(fileName, jsonData, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("Data has been written to file.");
  }
});
