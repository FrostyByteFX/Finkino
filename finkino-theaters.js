function loadXMLinfo() {
    // Create AJAX object
    var xmlhttp = new XMLHttpRequest();
    // Specify the data / url to be fetched
    xmlhttp.open("GET", "https://www.finnkino.fi/xml/TheatreAreas/", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
             // find myDiv and insert results there
            document.getElementById("theaters-div").innerHTML = xmlhttp.responseText;
        }
    }
  }