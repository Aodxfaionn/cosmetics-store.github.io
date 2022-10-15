const icons = document.querySelectorAll(".header__icons-item");
const modal = document.querySelector(".b-popup");
const textModal = document.querySelector(".b-popup__window");
const btnClose = document.querySelector(".close");
const btnGuest = document.querySelector(".skindom__btn-guest");
const btnLogin = document.querySelector(".skindom__btn-login");

window.addEventListener("click", function (e) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

function closeBtn() {
  modal.style.display = "none";
}

function registrationUser() {
  textModal.innerHTML = `<span class="close">&times;</span>
    <h2 class="b-popup__title-login">Войти или зарегистрироваться</h2>
    <p>Мы отправим на номер SMS-сообщение с кодом подтверждения.</p>
    <form><input type="tel" placeholder="Телефон для связи" minlength="10" maxlength="11" class="b-popup__title-input" required>
    <p><button type="submit" class="skindom__btn-login">Войти/зарегистрироваться</button></p></form>`;
  modal.style.display = "block";
}

btnClose.addEventListener("click", closeBtn);
btnGuest.addEventListener("click", closeBtn);
btnLogin.addEventListener("click", registrationUser);
for (icon of icons) {
  icon.addEventListener("click", registrationUser);
}
