function getBathValue() {

    var uiBathrooms = document.getElementsByName("uiBathrooms");

    for (var i = 0; i < uiBathrooms.length; i++) {

        if (uiBathrooms[i].checked) {
            return parseInt(uiBathrooms[i].value);
        }
    }

    return -1;
}

function getBHKValue() {

    var uiBHK = document.getElementsByName("uiBHK");

    for (var i = 0; i < uiBHK.length; i++) {

        if (uiBHK[i].checked) {
            return parseInt(uiBHK[i].value);
        }
    }

    return -1;
}

function onClickedEstimatePrice() {

    console.log("Estimate Price Button Clicked");

    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bath = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");

    var url =
        "http://127.0.0.1:5000/predict_home_price";

    $.post(url, {

        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bath,
        location: location.value

    }, function(data, status) {

        console.log("Prediction Response:", data);

        estPrice.innerHTML =
            "<h2>₹ " +
            data.estimated_price +
            " Lakh</h2>";

    }).fail(function(xhr, status, error) {

        console.log("Prediction Error");
        console.log(xhr);
        console.log(status);
        console.log(error);

    });
}

function onPageLoad() {

    console.log("Document loaded");

    var url = "http://127.0.0.1:5000/get_location_names";

    $.get(url, function(data, status) {

        console.log("Response Status:", status);
        console.log("Response Data:", data);

        if (data) {

            var locations = data.locations;

            var uiLocations =
                document.getElementById("uiLocations");

            $('#uiLocations').empty();

            var defaultOption =
                new Option("Choose a Location", "");

            $('#uiLocations').append(defaultOption);

            for (var i in locations) {

                var opt =
                    new Option(locations[i]);

                $('#uiLocations').append(opt);
            }

            console.log("Locations Loaded:",
                        locations.length);
        }

    }).fail(function(xhr, status, error) {

        console.log("Error Loading Locations");
        console.log(xhr);
        console.log(status);
        console.log(error);

    });
}

window.onload = onPageLoad;
window.onload = onPageLoad;