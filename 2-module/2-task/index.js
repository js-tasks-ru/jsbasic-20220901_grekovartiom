function isEmpty(obj) {
  let countProperties = 0;
  for (let key in obj) {
    countProperties = countProperties + key[0];
  }
  if (countProperties.length > 1) {
    countProperties = false
  } else {
    countProperties = true
  }
  return (countProperties);
}