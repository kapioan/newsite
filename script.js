function subscribe() {
    var emailInput = document.getElementById("emailInput");
    var email = emailInput.value;

    // Сохраняем введенную почту в локальный файл
    saveEmailToLocalFile(email);

    // Отображаем сообщение об успешной подписке
    var subscribeMessage = document.getElementById("subscribeMessage");
    subscribeMessage.innerHTML = "Вы успешно подписались, скоро с вами свяжутся";
}

function saveEmailToLocalFile(email) {
    // Имитация сохранения в локальный файл JavaScript
    // В реальном проекте мы могли бы использовать Node.js для сохранения в файл
    // Здесь мы просто покажем, что почта сохранена, создавая объект с почтой и выводим его в консоль
    var emails = JSON.parse(localStorage.getItem("emails")) || [];
    emails.push({ email: email });
    localStorage.setItem("emails", JSON.stringify(emails));
}