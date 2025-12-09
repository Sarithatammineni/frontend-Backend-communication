export function displayTodos(data) {
    const container = document.getElementById("todos-container");
    container.innerHTML = "";

    data.forEach(todo => {
        const div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.padding = "10px";
        div.style.margin = "10px 0";

        div.innerHTML = `
            <h3>📝 ${todo.title}</h3>
            <p>Status: ${todo.completed ? "✔ Completed" : "❌ Not Completed"}</p>
        `;

        container.append(div);
    });
}
import { displayTodos } from "../modules/displayTodos.js";

const isLoggedIn = localStorage.getItem("isLoggedIn");

if (!isLoggedIn) {
    alert("Please login first!");
    window.location.href = "login.html";
}

async function fetchTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    displayTodos(data);
}

fetchTodos();

