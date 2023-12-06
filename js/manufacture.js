function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Send the data to the PHP script for validation
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;
            if (response.trim() === "success") {
                // Redirect to the next page if login is successful
                window.location.href = "../product-menu.html";
            } else {
                alert("Invalid username or password");
            }
        }
    };

    xhr.open("POST", "../../manufacture.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("username=" + username + "&password=" + password);
}
