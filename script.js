const loadBtn = document.getElementById("loadBtn");
const userList = document.getElementById("userList");
const errorMsg = document.getElementById("error");

loadBtn.addEventListener("click", loadData);

async function loadData() {
    userList.innerHTML = "";
    errorMsg.textContent = "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const users = await response.json();

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} (${user.email})`;
            userList.appendChild(li);
        });

    } catch (error) {
        errorMsg.textContent = "Something went wrong. Please try again.";
    }
}
