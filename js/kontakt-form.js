// Sendet das Kontaktformular per AJAX an Web3Forms und leitet bei Erfolg
// auf thank-you.html weiter. Fehler werden inline im #kontakt-result angezeigt.

const form = document.getElementById("kontakt-form");
const result = document.getElementById("kontakt-result");

const handleSubmit = async (event) => {
  event.preventDefault();

  result.classList.remove("is-error");
  result.textContent = "Wird gesendet …";

  const formData = new FormData(form);

  // hCaptcha muss gelöst sein, bevor gesendet wird
  if (!formData.get("h-captcha-response")) {
    result.classList.add("is-error");
    result.textContent = "Bitte bestätigen Sie das Captcha.";
    return;
  }

  const json = JSON.stringify(Object.fromEntries(formData));

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const data = await response.json();

    if (response.status === 200) {
      window.location.href = "thank-you.html";
    } else {
      result.classList.add("is-error");
      result.textContent =
        data.message || "Senden fehlgeschlagen. Bitte versuchen Sie es erneut.";
    }
  } catch (error) {
    result.classList.add("is-error");
    result.textContent =
      "Verbindung fehlgeschlagen. Bitte prüfen Sie Ihre Internetverbindung.";
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}
