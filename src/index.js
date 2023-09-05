import "./style.css";

function component() {
    const element = document.createElement("div");

    element.innerHTML = "Hello world";
    element.classList.add("text-6xl");
    element.classList.add("font-mono");
    element.classList.add("font-semibold");
    element.classList.add("text-red-600");

    return element;
}

document.body.appendChild(component());
