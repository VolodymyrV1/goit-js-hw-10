let formData = {
    email: "",
    message: ""
};
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

//Підтягуємо значення, якщо в вони є в локальному сховищі
const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
    formData = savedData;
};


//Заповнюємо актуальними даними
form.elements.email.value = formData.email ?? "";
form.elements.message.value = formData.message ?? "";



form.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener("submit", evt => {
    evt.preventDefault();
    if (!form.elements.email.value.trim() || !form.elements.message.value.trim()) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData = {
        email: "",
        message: ""
    };
});

