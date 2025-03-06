module.exports = {
    proxy: "http://localhost:5202", // Replace with your ASP.NET Core server URL
    files: ["Views/Jokes/ShowSearchForm.cshtml.css", "Views/Shared/_Layout.cshtml.css", "wwwroot/css/site.css"], // Adjust paths as needed
    reloadDelay: 500
};