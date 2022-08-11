module.exports = function reverse (n) {
    if (n > 0){
    return parseInt(String(n)
                    .split("")
                    .reverse()
                    .join(""));
  } else {
    return 0 - parseInt(String(n)
                        .split("")
                        .reverse()
                        .join(""));
  }
}
