const Ajv = require("ajv");

const ajv = new Ajv();
const schema = {
    "type":"object",
    "properties":{
        "name":{
            "type":"string",
        },
        "dept":{
            "type":"string",
            "enum":["it","is","cs"],
        }
    }
};
module.exports = ajv.compile(schema);