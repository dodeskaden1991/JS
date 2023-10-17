function colorize() {
    let colored = document.querySelectorAll("table tr:nth-child(even)");
    for (let i = 0; i < colored.length; i++) {
        colored[i].style.backgroundColor = "Teal";
    }
}