async function gen_nav() {
    // load header
    await appendTemplate("../assets/html/head_wrap.html", "header");
    // load footer
    await appendTemplate("../assets/html/foot_wrap.html", "footer");
}

async function appendTemplate(templatePath, containerId) {
    // fetch the template file
    await fetch(templatePath)
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch((err) => {
            console.error("Error: Loading Template", err);
        });
}
gen_nav();