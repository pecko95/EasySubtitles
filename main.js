// Define global variables
const seriesInputField = document.getElementById("seriesInputField");
const movieInputField = document.getElementById("movieInputField");
const seasonField = document.getElementById("season");
const episodeField = document.getElementById("episode");
const warning = document.querySelector(".warning");
let URL;

// Get input field value
document.getElementById("submitSearch").addEventListener("click", (e)=>{
    if(movieInputField.value){
        searchForMovieTitle();
    } else if (seriesInputField.value){
        searchForSeriesTitle();
    } else {
        warning.style.display = "flex";
    }
    e.preventDefault();
})

// Add support for enter and numpad enter.
document.body.addEventListener("keydown", (e)=>{
    const keyCode = e.keyCode;
    // If keycode is 13 which is equal to ENTER & numpad ENTER:
    if ( keyCode === 13) {
        if(movieInputField.value){
            searchForMovieTitle();
        } else if (seriesInputField.value){
            searchForSeriesTitle();
        } else {
            warning.style.display = "flex";
        }
    }
})

// Search for movie subtitles.
function searchForMovieTitle(){
    const movieValue = movieInputField.value;
    // If input field is not empty:
    if(movieValue){
        document.querySelector(".warning").style.display = "none";
        URL = "https://titlovi.com/titlovi/?prijevod="+movieValue+'&jezik=bosanski|hrvatski|english|makedonski|srpski&t=1&sort=4';
        window.open(URL);
    }
}
// Enable season and episode fields when there's user input into series input field.
seriesInputField.addEventListener("keyup", ()=>{
    const seriesValue = seriesInputField.value;
    if(seriesValue){
        seasonField.removeAttribute('disabled');
        episodeField.removeAttribute('disabled');
    } else if (seriesInputField.textContent == ""){
        seasonField.setAttribute('disabled', true);
        episodeField.setAttribute("disabled", true);
    }
})
// Search for series subtitles.
function searchForSeriesTitle(){
    const seriesValue = seriesInputField.value;
    const season = seasonField.value;
    let episode = episodeField.value;
    // If the episode input field matches any of these words, turn it into 0.
    if( episode === "ALL" || episode ==="all" || episode === "sve" || episode === "SVE" || episode === "site" || episode === "SITE" || episode == "") {
        episode = "0";
    }
    if(seriesValue && season && episode){
        URL = "https://titlovi.com/titlovi/?prijevod="+seriesValue+'&jezik=bosanski|hrvatski|english|makedonski|srpski&t=2&s='+season+'&e='+episode+'&sort=4';
        window.open(URL);
    } 
    
    else if ( seriesValue && season){
        URL = "https://titlovi.com/titlovi/?prijevod="+seriesValue+'&jezik=bosanski|hrvatski|english|makedonski|srpski&t=2&s='+season;
        window.open(URL);
    } 
    
    else if (seriesValue){
        URL = "https://titlovi.com/titlovi/?prijevod="+seriesValue+'&jezik=bosanski|hrvatski|english|makedonski|srpski&t=2&sort=4';
        window.open(URL);
    }
}