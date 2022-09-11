function truncate(str, maxlength) {
if (str.length > maxlength) {
  let countSymbols = parseInt(maxlength);
 return str.substring(0, countSymbols-1) + "…";
} else
  return (str);
}
