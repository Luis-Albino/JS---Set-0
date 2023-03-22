function createGrid () {

    // Remove existing grid //
    if (document.getElementById("grid")) {
        document.body.removeChild(document.getElementById("grid"));
    }

    // NEW GRID //
    let n = document.getElementById("rows").value; // Number of rows
    let m = document.getElementById("columns").value; // Number of columns
    let totalCells = n*m; // total number of cells

    let cellHeight = document.getElementById("height").value; // cell height in pixels
    let cellWidth = document.getElementById("width").value; // cell width in pixels

    let gapThickness = Number(document.getElementById("gap").value); // gap thickness in pixels
    let fontSize = Number(document.getElementById("font").value); // font-size in pixels
    let gapColor = document.getElementById("gap_color").value;
    let fontColor = document.getElementById("font_color").value;

    let container = document.createElement("DIV");
    container.className = "container";
    container.id = "grid";
    container.style.border = (gapThickness/2) + "px solid " + gapColor;
    container.style.height = (n*cellHeight + gapThickness) + "px";
    container.style.width = (m*cellWidth + gapThickness) + "px";
    document.body.appendChild(container);

    for (let i=0; i<totalCells; i++) {
        let cell = document.createElement("DIV");
        cell.style.border = (gapThickness/2) + "px solid " + gapColor;
        cell.style.fontSize = fontSize + "px";
        cell.style.color = fontColor;
        cell.style.height = cellHeight + "px";
        cell.style.width = cellWidth + "px";
        cell.style.overflow = "hidden";
        cell.innerHTML = i+1;
        container.appendChild(cell);
        let textInput = document.createElement("input");
        textInput.style.height = "100%";
        textInput.style.width = cellWidth + "px";
        textInput.setAttribute("placeholder","Input text");
        cell.appendChild(textInput);
    };

};

createGrid();

document.getElementById("apply_changes").addEventListener("click",createGrid)