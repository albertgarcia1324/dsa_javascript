function vowels(str) {
  const letters = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (letters.includes(char)) {
      count++;
    }
  }
  return count;
}
