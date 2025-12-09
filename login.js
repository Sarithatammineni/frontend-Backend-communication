document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === pass) {
        alert("Login Successful!");
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "todos.html";
    } else {
        alert("Invalid Credentials!");
    }
});
