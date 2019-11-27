+function() {
  var lib = prompt('Provide lib url to inject'),
      script = document.createElement('script');
  script.onload = function () {
    console.log(lib + ' loaded')
  }
  script.src = lib;
  document.getElementsByTagName('head').item(0).appendChild(script)
}()