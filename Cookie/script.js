function setCookie() {
    var username = document.getElementById("username").value;
    document.cookie = "username=" + username;
    alert("Cookie set successfully!");
}
