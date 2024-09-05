function loadScript(url) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = function() {
        console.log('Script loaded successfully.');
    };
    script.onerror = function() {
        console.error('Failed to load script.');
    };
    document.head.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/gh/mewishmew9/Azzet@main/TOP%20SECRET%20FILE/BOBLOXSOURCEBv0.0.5.js")
loadScript("https://cdn.jsdelivr.net/gh/mewishmew9/Azzet@main/TOP%20SECRET%20FILE/BOBLOXSOURCEFILE%20v0.0.5.js")
