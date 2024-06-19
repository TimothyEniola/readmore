const readMoreButtons = document.querySelectorAll(".btn");


readMoreButtons.forEach(item => {
    item.addEventListener("click", () => {
        const box = item.closest(".box");
        const readMoreText = box.querySelector(".text");

        if (readMoreText.style.maxHeight) {
            readMoreText.style.maxHeight = null;
            item.textContent="Read More";
            item.style.backgroundColor="#3498db";
        } else{
            readMoreText.style.maxHeight = readMoreText.scrollHeight + "px";
            item.textContent = "Read Less"
            item.style.backgroundColor = "#e74c3c"; 
        }
    });
});