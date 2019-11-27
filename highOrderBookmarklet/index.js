function bookmarkletize(c) {
  return "javascript:void%20function(){" + encodeURIComponent(c + '') + "}();";
}

function c() {
  var code = prompt('Paste here Your code');
  code && prompt('Here\`s the bookmarklet code', "javascript:void%20function(){" + encodeURIComponent(code + '') + "}();");
}

console.log(bookmarkletize(`(${c})()`))