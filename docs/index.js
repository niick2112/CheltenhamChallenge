(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function loadValues(values) {

  var headings = values[0];

  // DRAW THE HTML TABLE
  var perrow = 5, // 3 items per row
      html = "<table><tr>";

  // Loop through array and add table cells
  for (var i=0; i<headings.length; i++) {
    html += "<th>" + headings[i] + "</th>";
    // Break into next row
    var next = i+1;
    if (next%perrow==0 && next!=headings.length) {
      html += "</tr><tr>";
    }
  }
  for (var j=1; j<values.length; j++) {
    data = values[j];
    html += "<tr>";

    for (var k=0; k<data.length; k++) {
      html += "<td>" + data[k] + "</td>";
      // Break into next row
      var next = k+1;
      if (next%perrow==0 && next!=data.length) {
        html += "</tr><tr>";
      }
    }
    html += "</tr>";

}

  html += "</tr></table>";

  $("#league-table").append(html)
  //document.getElementById("league-table").innerHTML = html;


}

function setPodium (values) {
    var first = values[1];
    var second = values[2];
    var third = values[3];
    
    $(".first").append(first[1]);
    $(".first").append("<p>" + first[2] + "</p>");
    $(".second").append(second[1]);
    $(".second").append("<p>" + second[2] + "</p>");
    $(".third").append(third[1]);
    $(".third").append("<p>" + third[2] + "</p>");
}

  
},{}]},{},[1]);
