function reverseInt(n) {
  const reverses = n.toString().split("").reverse().join("");

  return parseInt(reverses) * Math.sign(n);
}

reverseInt(5999);
