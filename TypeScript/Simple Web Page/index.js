var button = document.getElementById("button");
var text = document.getElementById("text");
if (button && text) {
    document.addEventListener('click', function () {
        text.textContent = "Text Changed!";
    });
}
