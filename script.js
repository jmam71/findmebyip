//Findme Auto Pass capture action

$(document).ready(function() {
    $("#findme").submit(function(event) {
        event.preventDefault();
        const findme = $("#findme")
        getFindme(findme);
    });
});


//API Call Auto
function getFindme(findme) {
    const apiUrl = `https://ipinfo.io/geo`;

    $.ajax({
        url: apiUrl,
        type: "GET",
        datType: "json",
        success: function(data) {
            const name = data.ip
            const city = data.city
            const region = data.region
            const country = data.country
            const location = data.loc
            const provider = data.org
            const postal = data.postal
            
            
            
            $(".ip").text("*My Public Adress: " + name);
            $(".city").text("*City: " + city);
            $(".region").text("*Region: " + region);
            $(".country").text("*Country: " + country);
            $(".location").text("*Location: "+ location);
            $(".provider").text("*ISP: " + provider);
            $(".postalcode").text("*Postal Code: " + postal);
            
    
        },
        error: function(error) {
            $("h2").text("Pokemon Not Found");
        }





    });


}




//Find me by IP






//API Call Auto