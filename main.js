document.addEventListener("DOMContentLoaded", function () {
  // Функция для создания события в Google Календаре
  function createGoogleCalendarEvent(event) {
    event.preventDefault(); // Отмена стандартной отправки формы

    // Получите данные из полей формы
    const serviceType = document.getElementById("choice1").value;
    const carBrand = document.getElementById("choice2").value;
    const carYear = document.getElementById("choice3").value;
    const bookDate = document.getElementById("date").value;
    const customerName = document.getElementById("name").value;
    const phoneNum = document.getElementById("phone").value;

    // Создайте объект события
    const eventDetails = {
      summary: serviceType + ", " + customerName,

      description: `
      Клієнт: ${customerName},
      Послуга: ${serviceType},
      Авто: ${carBrand}, ${carYear},
      Дата вiзиту: ${bookDate},
      Контакти: ${phoneNum}`,
      start: {
        dateTime: `${bookDate}T11:00`,
        timeZone: "GMT+3", // Укажите свою временную зону
      },
      end: {
        dateTime: `${bookDate}T12:00`,
        timeZone: "GMT+3",
      },
    };

    console.log(eventDetails);
  }

  // Добавьте обработчик события отправки формы
  const form = document.querySelector(".form-booking");
  form.addEventListener("submit", createGoogleCalendarEvent);
});
