const dagSelect = document.getElementById("dag");
const maandSelect = document.getElementById("maand");

const steps = Array.from(document.querySelectorAll(".stap"));
const btnPrev = document.getElementById("vorige_stap");
const btnNext = document.getElementById("volgende_stap");


function dagenInMaand(maand) {
    if (maand === 2) return 28;
  
    const maanden31 = [1, 3, 5, 7, 8, 10, 12];
    return maanden31.includes(maand) ? 31 : 30;
  }

  function vulDagen() {
    const maand = parseInt(maandSelect.value, 10);
    const maxDagen = dagenInMaand(maand);
  
    dagSelect.innerHTML = "";
  
    for (let i = 1; i <= maxDagen; i++) {
      dagSelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
  }
  
  maandSelect.addEventListener("change", vulDagen);
  
  vulDagen();


  
  let current = 0;
  
  function showStep(index) {
    steps.forEach((s, i) => s.classList.toggle("is-active", i === index));
  
    // Vorige knop
    btnPrev.style.display = index === 0 ? "none" : "inline-block";
  
    // Laatste stap = verzenden (optioneel)
    if (index === steps.length - 1) {
      btnNext.textContent = "Verzenden";
      btnNext.type = "submit";
    } else {
      btnNext.textContent = "Volgende";
      btnNext.type = "button";
    }
  }
  
  function validateStep() {
    const step = steps[current];
  
    // Alleen inputs die niet disabled zijn (en dus echt meetellen)
    const fields = Array.from(step.querySelectorAll("input, select"))
      .filter(el => !el.disabled);
  
    for (const el of fields) {
      if (!el.checkValidity()) {
        el.reportValidity();
        return false;
      }
    }
    return true;
  }
  
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
  
  // init
  showStep(current);


 