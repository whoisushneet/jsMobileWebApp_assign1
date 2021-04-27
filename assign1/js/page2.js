$(document).ready(function() {
    //declaring personal variables and assigning values from LS
    let fname= localStorage.getItem("fname");
    let lname= localStorage.getItem("lname");
    let loginName = localStorage.getItem("loginName")
    let sId= localStorage.getItem("sId");

    $(".info h1:first").html(`Full name: ${fname} ${lname}`);
    $(".info h2:first").html(`Student ID: ${sId}`);
    $(".info h3:first").html(`Login name: ${loginName}`);

    $(".info h1:first").addClass("headerFormatting");
    $(".info h2:first").addClass("headerFormatting");
    $(".info h3:first").addClass("headerFormatting");

});