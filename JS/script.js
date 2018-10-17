$(document).ready(function () {

    $('#showAllbtn').click(function showAll() {

        $('.results').html("");
        $(".searchBox").val("");

        $.getJSON("https://restcountries.eu/rest/v2/all", (data) => {

            for (let i = 0; i < data.length; i++) {

                let country = data[i];

                var countryName = "<div><h5>Name: <span id='font'>" + country.name + "</span></h5></div>";
                var countryDomain = "<div><h5>Top Level Domain: <span id='font'>" + country.topLevelDomain[0] + "</span></h5></div>";
                var countryCapital = "<div><h5>Capital: <span id='font'>" + country.capital + "</span></h5></div>";
                var countryCurrency = "<div><h5>Currency: <span id='font'>" + country.currencies[0].code + "</span></h5></div>";
                var countryFlag = "<div><img id='countryimg' src='" + country.flag + "'/></div>";

                var countryItemDiv = "<div class='country'>" + countryName + countryDomain + countryCapital + countryCurrency + countryFlag + "</div>";
                $(".results").append(countryItemDiv);

            }
        });
    });

    $('#getCountries').click(function getCountries() {
        $(".results").empty();

        var searchTerm = $(".searchBox").val();
        searchCountryName(searchTerm);

    });

    function searchCountryName(nameOfCountry) {
        var url = "http://restcountries.eu/rest/v2/name/" + nameOfCountry;

        $.getJSON(url, (data) => {
            for (let i = 0; i < data.length; i++) {
                let country = data[i];

                var countryName = "<div class='countryInfo'><h5>Name: <span id='font'>" + country.name + "</span></h5></div>";
                var countryDomain = "<div class='countryInfo'><h5>Top Level Domain: <span id='font'>" + country.topLevelDomain[0] + "</span></h5></div>";
                var countryCapital = "<div class='countryInfo'><h5>Capital: <span id='font'>" + country.capital + "</span></h5></div>";
                var countryCurrency = "<div class='countryInfo'><h5>Currency: <span id='font'>" + country.currencies[0].code + "</span></h5></div>";
                var countryFlag = "<div><img id='countryimg' src='" + country.flag + "'/></div>";

                var countryItemDiv = "<div class='country'>" + countryName + countryDomain + countryCapital + countryCurrency + countryFlag + "</div>";
                $(".results").append(countryItemDiv);
                $(".searchBox").val("");
            }
        });
    }
});