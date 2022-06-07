function updateNavbar() {
    var title = document.title;

    if (title == "GKSE Home") {
        console.log("home");
    } else if (title == "GKSE About") {
        console.log("not home");
    } else if (title == "GKSE Contact Me") {
        console.log("conteact");
    } else {
        console.log("unknown");
    }
}

// Attempt to only show the page once it has been completely loaded.
// Unsuccessful thusfar.
function renderPage() {
    console.log("rendering...");
    document.getElementsByTagName("html")[0].style.visibility = "visible";
}

function load(url) {
    // display loading image here...
    document.getElementById('loadingImg').visible = true;
    // request your data...
    var req = new XMLHttpRequest();
    req.open("POST", url, true);

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            // content is loaded...hide the gif and display the content...
            if (req.responseText) {
                document.getElementById('content').innerHTML = req.responseText;
                document.getElementById('loadingImg').visible = false;
            }
        }
    };
    request.send(vars);
}