function palindrome(str) {
  const reverses = str.split("").reverse().join("");

  return reverses === str;
}

palindrome("abba");
