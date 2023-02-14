const Mock = require("mockjs");

const data = Mock.mock({
  // "test|30-60": "A"
  // "test|7":"A"
  // 'name|+1': 10,
  'name|1-2': true,
});

console.log(data);
