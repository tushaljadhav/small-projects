// 1️⃣ Select elements from the DOM
const item = document.querySelector("#item");       // Input box for typing a to-do
const toDoBox = document.querySelector("#to-do-box"); // UL or div to hold the list items

// 2️⃣ Listen for Enter key press on the input box
item.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addToDo(this.value); // Add the typed item to the list
        this.value = "";     // Clear the input box after adding
    }
});

// 3️⃣ Function to add a new to-do item
const addToDo = (itemText) => {
    // Create a new <li> element
    const listItem = document.createElement("li");

    // Set its content: text + delete icon
    listItem.innerHTML = `
        ${itemText}
        <i class="fas fa-times"></i>
    `;

    // 4️⃣ Mark item as done when clicked
    listItem.addEventListener("click", function() {
        this.classList.toggle("done"); // toggle "done" class on click
    });

    // 5️⃣ Delete the item when the "X" icon is clicked
    listItem.querySelector("i").addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent marking as done when clicking delete
        listItem.remove();       // Remove the <li> from the list
    });

    // 6️⃣ Add the new item to the to-do box
    toDoBox.appendChild(listItem);
};
