export default function orderByProps(obj) {
  const arr = [];
  for (const props in obj) {
    if (obj.hasOwnProperty(props)) {
      arr.push({
        key: props,
        value: obj[props],
      });
    }
  }
  arr.sort((a, b) => a.value - b.value);
  return arr;
}
