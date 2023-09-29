// Write your solution in this file!

const employee = { name: "lina", streetAddress: "jordan" };

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

// function updateEmployeeWithKeyAndValue(obj, key) {
//     delete obj[key]=value;

// };
function deleteFromEmployeeByKey(obj, key) {
    const newObjj = { ...obj };
    delete newObjj[key];
    return newObjj;
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
};



