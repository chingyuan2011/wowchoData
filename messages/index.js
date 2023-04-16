const fs = require("fs");

const data = [];
const fileName = 'data.json'

const dataNum = 5;
const date = Date.now()
for (let i = 0; i < dataNum; i++) {
  const eachData = {
    parentId: null,
    personId: `留言人替換 id 後綁定 ${i}`,
    content: `留言內容\r\n blablabla ${i}`,
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
