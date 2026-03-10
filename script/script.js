const dagSelect = document.getElementById("dag");
const maandSelect = document.getElementById("maand");

const steps = Array.from(document.querySelectorAll(".stap"));
const btnPrev = document.getElementById("vorige_stap");
const btnNext = document.getElementById("volgende_stap");

// Fase 2
const partnerRadios = document.querySelectorAll('input[name="partnerStatus"]');
const voorwaardenBlok = document.getElementById("voorwaarden-blok");

// Fase 3
const kinderenRadios = document.querySelectorAll('input[name="heeftKinderen"]');
const kinderenBlok = document.getElementById("kinderen-blok");

const eerderOverledenRadios = document.querySelectorAll('input[name="eerderOverledenKind"]');
const kleinkinderenBlok = document.getElementById("kleinkinderen-blok");


// --------------------
// DATUM LOGICA
// --------------------
function dagenInMaand(maand) {
  if (maand === 2) return 28;

  const maanden31 = [1, 3, 5, 7, 8, 10, 12];
  return maanden31.includes(maand) ? 31 : 30;
}

function vulDagen() {
  const maand = Number(maandSelect.value);
  const huidigeDag = Number(dagSelect.value);

  const maxDagen = dagenInMaand(maand);

  dagSelect.innerHTML = "";

  for (let i = 1; i <= maxDagen; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    dagSelect.appendChild(option);
  }

  if (huidigeDag) {
    dagSelect.value = String(Math.min(huidigeDag, maxDagen));
  } else {
    dagSelect.value = "1";
  }
}

maandSelect.addEventListener("change", vulDagen);
vulDagen();


// --------------------
// STAPPEN FORMULIER
// --------------------
let current = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("is-active", i === index);
  });

  btnPrev.style.display = index === 0 ? "none" : "inline-block";

  if (index === steps.length - 1) {
    btnNext.textContent = "Verzenden";
    btnNext.type = "submit";
  } else {
    btnNext.textContent = "Volgende";
    btnNext.type = "button";
  }
}


// --------------------
// VALIDATIE
// --------------------
function validateStep() {
  const step = steps[current];

  const fields = Array.from(step.querySelectorAll("input, select")).filter(el => !el.disabled);

  let valid = true;

  fields.forEach(field => {
    const error = field.parentElement.querySelector(".error-text");

    field.classList.remove("input-error");

    if (error) {
      error.style.display = "none";
    }

    if (!field.checkValidity()) {
      field.classList.add("input-error");

      if (error) {
        error.style.display = "block";
      }

      valid = false;
    }
  });

  return valid;
}


// --------------------
// VOLGENDE / VORIGE
// --------------------
btnNext.addEventListener("click", () => {
  if (!validateStep()) return;

  if (current < steps.length - 1) {
    current++;
    showStep(current);
  }
});

btnPrev.addEventListener("click", () => {
  if (current > 0) {
    current--;
    showStep(current);
  }
});


// --------------------
// FASE 2 CONDITIONAL LOGIC
// --------------------
function toggleVoorwaardenBlok() {
  const partnerJa = document.querySelector('input[name="partnerStatus"][value="ja"]');

  if (partnerJa && partnerJa.checked) {
    voorwaardenBlok.classList.remove("hidden");
    voorwaardenBlok.classList.add("show");
  } else {
    voorwaardenBlok.classList.add("hidden");
    voorwaardenBlok.classList.remove("show");
  }
}

partnerRadios.forEach(radio => {
  radio.addEventListener("change", toggleVoorwaardenBlok);
});


// --------------------
// FASE 3 CONDITIONAL LOGIC
// --------------------
function toggleKinderenBlok() {
  const heeftKinderenJa = document.querySelector('input[name="heeftKinderen"][value="ja"]');

  if (heeftKinderenJa && heeftKinderenJa.checked) {
    kinderenBlok.classList.remove("hidden");
    kinderenBlok.classList.add("show");
  } else {
    kinderenBlok.classList.add("hidden");
    kinderenBlok.classList.remove("show");

    kleinkinderenBlok.classList.add("hidden");
    kleinkinderenBlok.classList.remove("show");
  }
}

function toggleKleinkinderenBlok() {
  const eerderOverledenJa = document.querySelector('input[name="eerderOverledenKind"][value="ja"]');

  if (eerderOverledenJa && eerderOverledenJa.checked) {
    kleinkinderenBlok.classList.remove("hidden");
    kleinkinderenBlok.classList.add("show");
  } else {
    kleinkinderenBlok.classList.add("hidden");
    kleinkinderenBlok.classList.remove("show");
  }
}

kinderenRadios.forEach(radio => {
  radio.addEventListener("change", toggleKinderenBlok);
});

eerderOverledenRadios.forEach(radio => {
  radio.addEventListener("change", toggleKleinkinderenBlok);
});


// --------------------
// FOUTSTIJL DIRECT WEGHALEN BIJ INVULLEN
// --------------------
document.querySelectorAll("input, select").forEach(field => {
  const eventType =
    field.tagName === "SELECT" || field.type === "radio" ? "change" : "input";

  field.addEventListener(eventType, () => {
    field.classList.remove("input-error");

    const error = field.parentElement.querySelector(".error-text");
    if (error) {
      error.style.display = "none";
    }
  });
});


// --------------------
// INIT
// --------------------
showStep(current);
toggleVoorwaardenBlok();
toggleKinderenBlok();
toggleKleinkinderenBlok();