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

  