function displaColumns (number) {
    let container = document.getElementById("container");
    container.remove();
    document.body.appendChild(container)
    container.style.columnCount = number;
};

displaColumns(2);
