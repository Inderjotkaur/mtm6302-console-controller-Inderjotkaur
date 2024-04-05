function setTitle() {
    const newTitle = prompt("Enter new title:");
    if (newTitle !== null) {
        document.getElementById('title').innerText = newTitle;
    }
}

function setDescription() {
    const newDescription = prompt("Enter new description:");
    if (newDescription !== null) {
        document.getElementById('description').innerText = newDescription;
    }
}

function setBackgroundColor() {
    const newColor = prompt("Enter new background color (e.g., 'red', '#00ff00', 'rgb(255, 0, 0)'):");
    if (newColor !== null) {
        document.body.style.backgroundColor = newColor;
    }
}

function setFontColor() {
    const newColor = prompt("Enter new font color (e.g., 'red', '#00ff00', 'rgb(255, 0, 0)'):");
    if (newColor !== null) {
        const elements = document.querySelectorAll('*');
        elements.forEach(function(element) {
            element.style.color = newColor;
        });
    }
}

function setTheme() {
    const theme = prompt("Enter theme (e.g., 'light', 'dark'):");
    if (theme !== null) {
        if (theme === 'light') {
            document.body.style.backgroundColor = '#ffffff';
            const elements = document.querySelectorAll('*');
            elements.forEach(function(element) {
                element.style.color = '#000000';
            });
        } else if (theme === 'dark') {
            document.body.style.backgroundColor = '#000000';
            const elements = document.querySelectorAll('*');
            elements.forEach(function(element) {
                element.style.color = '#ffffff';
            });
        } else {
            alert("Invalid theme. Please enter 'light' or 'dark'.");
        }
    }
}
