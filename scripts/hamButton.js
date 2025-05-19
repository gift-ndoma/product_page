const navigation = document.getElementById("main-nav");
const hamButton = document.getElementById("hambutton");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle('active');
    navigation.classList.toggle('active');
})