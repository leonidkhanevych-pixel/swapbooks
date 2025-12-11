// Зміна стилів елементів з певним класом 
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".highlight"); 
  elements.forEach(el => {
    el.style.color = "#2b8a4eff";
  });

  // Додавання нового <p> у <main>
  const main = document.querySelector("main");
  if (main) {
    const p = document.createElement("p");
    p.textContent = "Текст додано";
    main.append(p);
  }
});

// Відображення поточної дати у футері
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer p");
  if (footer) {
    const date = new Date().toLocaleDateString("uk-UA");
    footer.textContent += " | " + date;
  }
});

// Кнопка “Показати більше” 
document.addEventListener("DOMContentLoaded", () => {
  const hiddenBlock = document.querySelector(".hidden-text");
  const showMoreBtn = document.querySelector(".show-more");

  if (hiddenBlock && showMoreBtn) {
    hiddenBlock.style.display = "none";

    showMoreBtn.addEventListener("click", () => {
      hiddenBlock.style.display =
        hiddenBlock.style.display === "none" ? "block" : "none";
    });
  }
});

// Зміна теми
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.querySelector(".change-theme");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }
});

// Підсвітка меню при наведенні
document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll("nav ul li a");
  menuLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.classList.add("hovered");
    });
    link.addEventListener("mouseout", () => {
      link.classList.remove("hovered");
    });
  });
});

// Зміна розміру шрифту ArrowUp/ArrowDown
let fontSize = 16;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    fontSize++;
    document.body.style.fontSize = fontSize + "px";
  } else if (e.key === "ArrowDown") {
    fontSize--;
    document.body.style.fontSize = fontSize + "px";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Заборона відправки

    let valid = true;

    // Поля
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    // Очищення попередніх помилок
    form.querySelectorAll(".error").forEach(e => e.remove());
    form.querySelectorAll("input, textarea").forEach(el => {
      el.style.borderColor = "#ccc";
    });

    // Перевірки
    if (name && name.value.trim().length < 3) {
      showError(name, "Ім'я повинно містити мінімум 3 символи.");
      valid = false;
    }

    if (email && !email.value.includes("@")) {
      showError(email, "Email повинен містити '@'.");
      valid = false;
    }

    if (email && !email.value.includes(".")) {
      showError(email, "Email повинен містити домен (наприклад .com).");
      valid = false;
    }

    if (message && message.value.trim().length < 10) {
      showError(message, "Повідомлення повинно містити щонайменше 10 символів.");
      valid = false;
    }

    // Якщо помилок нема
    if (valid) {
      console.log("Ім'я:", name?.value);
      console.log("Email:", email?.value);
      console.log("Повідомлення:", message?.value);

      form.reset();

      const success = document.createElement("p");
      success.textContent = "Форма успішно надіслана!";
      success.style.color = "green";
      form.append(success);
    }
  });
});

// Показ помилки
function showError(input, message) {
  input.style.borderColor = "red";

  const error = document.createElement("p");
  error.textContent = message;
  error.style.color = "red";
  error.classList.add("error");

  input.insertAdjacentElement("afterend", error);
}
