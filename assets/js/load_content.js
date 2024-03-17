window.addEventListener("DOMContentLoaded", () => {
    // get the head of the document script is being loaded from
    const head = document.getElementsByTagName("head")[0];

    function loadContent() {
        // load the css files
        // loadCSS(["base.css", "styles.css"], "v=1");

        // load the js files
        loadJS(["gen_nav.js"]);
    }

    /**
     * takes an array of css files and appends them to the head of the document
     * provides a version number to prevent caching
     * @param {*} cssFiles
     * @param {*} cssVersion
     */
    function loadCSS(cssFiles, cssVersion) {
        /**
         * for each css file in the array, create a link element
         * set the rel attribute to stylesheet
         * set the href attribute to the css file
         * append the link element to the head
         */
        cssFiles.forEach((cssFile) => {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = `/assets/css/${cssFile}?${cssVersion}`;
            head.appendChild(link);
        });
    }

    /**
     * takes an array of js files and appends them to the head of the document
     * provides a version number to prevent caching
     * @param {*} jsFiles
     * @param {*} jsVersion
     */
    function loadJS(jsFiles) {
        /**
         * for each js file in the array, create a script element
         * set the src attribute to the js file
         * append the script element to the head
         */
        jsFiles.forEach((jsFile) => {
            const script = document.createElement("script");
            script.src = `assets/js/${jsFile}`;

            head.appendChild(script);
        });
    }

    // call the loadAssets function
    loadContent();
});
