document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("문의가 접수되었습니다. (실제 전송 기능은 아직 연결되지 않았습니다)");
    form.reset();
  });
});
