const fs = require("fs");

const data = [];
const fileName = 'users.json'

const dataNum = 100;
for (let i = 0; i < 100; i++) {
  const eachData = {
    account: `account${i}`,
    password: `1234${i}`,
    name: `全名${i}`,
    username: `帳號名稱${i}`,
    email: `account${i}@gmail.com`,
    image:
      "https://www.google.com.tw/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    isAllowedNotifications: true,
    isSubscribed: true,
    customedUrl: "https://www.google.com.tw",
    gender: -1,
    birthday: "1990/8/8",
    address: `account1_address_${i}`,
    website: `account1_web_${i}`,
    facebook: `fb_account1_url_${i}`,
    instagram: `ig_account1_url_${i}`,
    youtube: `yt_account1_url_${i}`,
    tokenList: "",
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
