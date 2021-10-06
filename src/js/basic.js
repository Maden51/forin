export default function orderByProps(obj, [...sort]) {
  const arr = [];
  const objCopy = {};
  Object.assign(objCopy, obj);
  for (let i = 0; i < sort.length; i += 1) {
    for (const prop in objCopy) {
      if (sort[i] === prop) {
        arr.push({
          key: prop,
          value: obj[prop],
        });
        delete objCopy[prop];
      }
    }
  }
  const restProps = Object.entries(objCopy);
  restProps.sort();
  for (let i = 0; i < restProps.length; i += 1) {
    arr.push({
      key: restProps[i][0],
      value: restProps[i][1],
    });
  }
  return arr;
}
