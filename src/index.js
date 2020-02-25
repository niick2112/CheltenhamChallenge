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

function loadRunners(values) {

  for (var j=0; j<values.length; j++) {
    data = values[j];

    var name = data[0]
    var img = data[4]
    var description = data[3]
    var card = ""

    card += "<div class='card' style='width: 15rem;'><img class='card-img-top' src='" + img + "'></img><div class='card-body'><h5 class='card-title'>" + name + "</h5><p class='card-text'>" + description + "</p></div></div>";

    $(".runners").append(card);

}

}

function loadDayResults(values,date) {

  var raceDay = new Date(2020, 2, date, 13, 00, 00);
  var currentTime = new Date();
  console.log(raceDay);
  /*if (currentTime < raceDay) {
    $("#day-table").append('<p>Scores will be available from 1pm</p>')
  }
  else {*/
  var headings = values[0];

  // DRAW THE HTML TABLE
  var perrow = 7, // 3 items per row
      html = "<table><tr>";

  // Loop through array and add table cells
/*  for (var i=0; i<headings.length; i++) {
    html += "<th>" + headings[i] + "</th>";
    // Break into next row
    var next = i+1;
    if (next%perrow==0 && next!=headings.length) {
      html += "</tr><tr>";
    }
  } */
  for (var j=1; j<values.length; j++) {

    data = values[j];

    if (data.length < 2) {
      html += '</table><h2>' + data[0] + '</h2><table>'
    }
    else if ((data[0]) == "") {
      html += "<tr>";

    for (var k=0; k<data.length; k++) {
      html += "<th>" + data[k] + "</th>";
      // Break into next row
      var next = k+1;
      if (next%perrow==0 && next!=data.length) {
        html += "</tr><tr>";
      }
    }
    html += "</tr>";
    }
    else {
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

}

  html += "</tr></table>";

  $("#day-table").append(html)
}
//}