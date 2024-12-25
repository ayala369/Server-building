function init() {
    let dateList = new List(0, "", "")
    let date = document.querySelector("#create");
    date.innerHTML += dateList.date;
    let save = document.querySelector("#save");
    save.addEventListener("click", newList);

    let items = document.querySelector("#items");//הוספת פריטים לרשימה
    items.addEventListener("click", openList);

    function openList() {
        let item = document.querySelector("#item");
        let input = document.createElement("input");
        input.classList.add("itemInput");
        input.setAttribute("type", "text");//מסוג טקסט
        input.setAttribute("placeholder", "item:");
        item.appendChild(input);
    }
}
init();