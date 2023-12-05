var generateQuerySelector = function(el) {
      if (el.tagName.toLowerCase() == "html")
          return "html";
      var str = el.tagName;
      str += (el.id != "") ? "#" + el.id : "";
      if (el.className) {
          var classes = el.className.split(/\s/);
          for (var i = 0; i < classes.length; i++) {
              str += "." + classes[i]
          }
      }
      return generateQuerySelector(el.parentNode) + " > " + str;
}

var qStr = generateQuerySelector(document.querySelector("span"));