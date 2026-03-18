



// MARK: CONST
const dagSelect = document.getElementById("dag");
const maandSelect = document.getElementById("maand");

// met Array.from maken we er een array van zodat we er doorheen kunnen loopen door meerder elementen

const steps = Array.from(document.querySelectorAll(".stap"));
const btnPrev = document.getElementById("vorige_stap");
const btnNext = document.getElementById("volgende_stap");

const progress = document.getElementById("progress");
const stepCircles = document.querySelectorAll(".step");

const kinderenRadios = document.querySelectorAll('input[name="heeftKinderen"]');
const kinderenBlok = document.getElementById("kinderen-blok");

const eerderOverledenRadios = document.querySelectorAll('input[name="eerderOverledenKind"]');
const kleinkinderenBlok = document.getElementById("kleinkinderen-blok");

const partnerRadios = document.querySelectorAll('input[name="partnerStatus"]');
const voorwaardenBlok = document.getElementById("voorwaarden-blok");

const notarisRadios = document.querySelectorAll('input[name="heeftNotaris"]');
const notarisBlok = document.getElementById("notaris-blok");

const addPersonBtn = document.getElementById("addPersonBtn");
const fieldsetsContainer = document.getElementById("fieldsetsContainer");
const personList = document.getElementById("personList");



let current = 0;
let personCount = 0;
let nextId = 1;

//   MARK:DAGEN functie
// kijkt hoeveel dagen er in een maand zitten

function dagenInMaand(maand) {
    if (maand === 2) return 28;
    const maanden31 = [1, 3, 5, 7, 8, 10, 12];
    return maanden31.includes(maand) ? 31 : 30;
}

function vulDagen() {
    if (!dagSelect || !maandSelect) return;

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
        dagSelect.value = "";
    }
}

if (maandSelect && dagSelect) {
    maandSelect.addEventListener("change", vulDagen);
    vulDagen();
}
 


//   MARK: stappen form
// Dit stuk code regelt het stappenformulier.
// Het formulier bestaat uit meerdere stappen (fase_1, fase_2, fase_3, etc.).
// De variabele "current" houdt bij welke stap op dat moment zichtbaar is.
// showStep() zorgt ervoor dat alleen de juiste stap zichtbaar wordt.
// Ook bepaalt deze functie wanneer de "Vorige" knop verborgen moet worden
// en wanneer de "Volgende" knop verandert in "Verzenden".

  


function showStep(index) {
    if (!steps.length || !btnPrev || !btnNext) return;

    steps.forEach((s, i) => {
        s.classList.toggle("is-active", i === index);
    });

    btnPrev.style.display = index === 0 ? "none" : "inline-block";
    btnNext.textContent = index === steps.length - 1 ? "Verzenden" : "Volgende";
    btnNext.type = "button";
}


  // Controleert of alle velden in de huidige stap correct zijn ingevuld.
// Als een veld ongeldig is, krijgt het een error-styling en fouttekst.
// De gebruiker kan alleen naar de volgende stap als alles geldig is.

function validateStep() {
    if (!steps.length) return true;

    const step = steps[current];
    if (!step) return true;

    const fields = Array.from(step.querySelectorAll("input, select"))
        .filter(el => !el.disabled && el.type !== "radio");

    let valid = true;

    // gewone inputs en selects
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

    // radio groep partnerStatus
    const partnerRadios = step.querySelectorAll('input[name="partnerStatus"]');

    if (partnerRadios.length > 0) {
        const radioGroup = step.querySelector("#partner-group");
        const radioError = step.querySelector("#partner-error");
        const isChecked = Array.from(partnerRadios).some(radio => radio.checked);

        if (!isChecked) {
            if (radioGroup) {
                radioGroup.classList.add("error");
            }
            if (radioError) {
                radioError.style.display = "block";
            }
            valid = false;
        } else {
            if (radioGroup) {
                radioGroup.classList.remove("error");
            }
            if (radioError) {
                radioError.style.display = "none";
            }
        } 
        
    }

    return valid;
}





  // Knoppen om door de stappen te navigeren

function updateProgress() {
    if (!progress || !stepCircles.length) return;

    stepCircles.forEach((circle, index) => {
        circle.classList.toggle("active", index <= current);
    });

    const percent = (current / (stepCircles.length - 1)) * 100;
    progress.style.width = percent + "%";
}

if (btnNext) {
    btnNext.addEventListener("click", () => {
        if (!validateStep()) return;

        if (current < steps.length - 1) {
            current++;
            showStep(current);
            updateProgress();
        } else {
            alert("De aangifte is succesvol verzonden.");
            window.location.href = "index.html";
        }
    });
}

if (btnPrev) {
    btnPrev.addEventListener("click", () => {
        if (current > 0) {
            current--;
            showStep(current);
            updateProgress();
        }
    });
}

  // showStep(current) wordt aan het begin uitgevoerd zodat de eerste stap
// meteen zichtbaar is wanneer de pagina wordt geladen.
if (steps.length) {
    showStep(current);
    updateProgress();
}

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener("change", () => {
        const group = radio.closest("fieldset")?.querySelector("#partner-group");
        const error = radio.closest("fieldset")?.querySelector("#partner-error");

        if (group) group.classList.remove("error");
        if (error) error.style.display = "none";
    });
});


//   MARK:de progress bar 

  function updateProgress() {

    stepCircles.forEach((circle, index) => {
  
      if (index <= current) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
  
    });
  
    const percent = (current / (stepCircles.length - 1)) * 100;
    progress.style.width = percent + "%";
  }

//   MARK: hidden vragen 

// Controleert de partnervraag.
// "Ja" → extra vragen tonen
// "Nee" → extra vragen verbergen

partnerRadios.forEach(radio => {
  radio.addEventListener("change", () => {

    if (radio.value === "ja" && radio.checked) {
      voorwaardenBlok.classList.remove("hidden");
    } else if (radio.value === "nee" && radio.checked) {
      voorwaardenBlok.classList.add("hidden");
    }

  });
});
  

  function toggleKinderenBlok() {
    const heeftKinderenJa = document.querySelector('input[name="heeftKinderen"][value="ja"]');
  
    if (heeftKinderenJa.checked) {
      kinderenBlok.classList.remove("hidden");
    } else {
      kinderenBlok.classList.add("hidden");
      kleinkinderenBlok.classList.add("hidden");
    }
  }
  
  function toggleKleinkinderenBlok() {
    const eerderOverledenJa = document.querySelector('input[name="eerderOverledenKind"][value="ja"]');
  
    if (eerderOverledenJa && eerderOverledenJa.checked) {
      kleinkinderenBlok.classList.remove("hidden");
    } else {
      kleinkinderenBlok.classList.add("hidden");
    }
  }
  
  kinderenRadios.forEach(radio => {
    radio.addEventListener("change", toggleKinderenBlok);
  });
  
  eerderOverledenRadios.forEach(radio => {
    radio.addEventListener("change", toggleKleinkinderenBlok);
  });


// toont of verbergt de notarisvelden.
// als "notaris = ja" → velden zichtbaar
// als "notaris = nee" → velden verborgen

function toggleNotarisBlok() {

  const heeftNotarisJa = document.querySelector('input[name="heeftNotaris"][value="ja"]');

  if (heeftNotarisJa && heeftNotarisJa.checked) {
    notarisBlok.classList.remove("hidden");
  } else {
    notarisBlok.classList.add("hidden");
  }

}

// luister wanneer de gebruiker een keuze maakt
notarisRadios.forEach(radio => {
  radio.addEventListener("change", toggleNotarisBlok);
});



// add person 

if (addPersonBtn && fieldsetsContainer && personList) {
    addPersonBtn.addEventListener("click", () => {
        createPersonFieldset(nextId);
        personCount++;
        nextId++;
    });
}

function createPersonFieldset(id) {
    if (!fieldsetsContainer || !personList) return;

    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("verkrijger-fieldset");
    fieldset.dataset.id = id;

    fieldset.innerHTML = `
        <legend>Gegevens verkrijgers</legend>

        <p>Vul de gegevens in van de persoon of instelling.</p>

        <h3>Gegevens persoon</h3>

        <label>
            BSN persoon
            <input type="text" name="bsnPersoon" placeholder="123456789">
        </label>

        <label>
            Voorletter(s)
            <input type="text" id="voorletters-persoon-${id}" name="voorlettersPersoon" placeholder="J.P.">
        </label>

        <label>
            Tussenvoegsel(s)
            <input type="text" name="tussenvoegselPersoon" placeholder="van">
        </label>

        <label>
            Achternaam persoon
            <input type="text" id="achternaam-persoon-${id}" name="achternaamPersoon" placeholder="Dijk">
        </label>




            <fieldset class="datum">
                        <legend>Overlijdensdatum</legend>
                        <label for="dag">Dag
                            <select id="dag" name="dates" required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                        </label>


                        <label>Maand
                            <select id="maand" required>
                                <option value="1">Januari</option>
                                <option value="2">Februari</option>
                                <option value="3">Maart</option>
                                <option value="4">April</option>
                                <option value="5">Mei</option>
                                <option value="6">Juni</option>
                                <option value="7">Juli</option>
                                <option value="8">Augustus</option>
                                <option value="9">September</option>
                                <option value="10">Oktober</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </label>
            <label>
                Jaar
                <input type="number" name="geboorteJaar" placeholder="1990">
            </label>
        </fieldset>

        <h3>Gegevens instelling</h3>

        <label>
            RSIN instelling
            <input type="text" name="rsinInstelling" placeholder="123456789">
        </label>

        <label>
            Naam instelling
            <input type="text" name="naamInstelling" placeholder="Naam van instelling">
        </label>


        <h3>Adres in Nederland</h3>

        <label>
            Straat
            <input type="text" name="straatNederland" placeholder="Hoofdstraat">
        </label>

        <label>
            Huisnummer
            <input type="number" name="huisnummerNederland" placeholder="12">
        </label>

        <label>
            Toevoeging
            <input type="text" name="toevoegingNederland" placeholder="A">
        </label>

        <label>
            Postcode
            <input type="text" name="postcodeNederland" placeholder="1234 AB">
        </label>

        <label>
            Woonplaats
            <input type="text" name="woonplaatsNederland" placeholder="Amsterdam">
        </label>

        <h3>Adres in het buitenland</h3>
        <p class="hint">Vul dit alleen in als dit van toepassing is.</p>

        <label>
            Straat en huisnummer
            <input type="text" name="straatBuitenland" placeholder="Main Street 10">
        </label>

        <label>
            Postcode
            <input type="text" name="postcodeBuitenland" placeholder="10001">
        </label>

        <label>
            Plaats
            <input type="text" name="plaatsBuitenland" placeholder="New York">
        </label>

        <label>
            Landcode
            <input type="text" name="landcode" placeholder="USA">
        </label>

        <button type="button" class="remove-btn">Verwijder persoon</button>
    `;

    fieldsetsContainer.appendChild(fieldset);

    const personItem = document.createElement("div");
    personItem.classList.add("person-item");
    personItem.dataset.id = id;
    personItem.textContent = `Verkrijger ${id}`;
    personList.appendChild(personItem);

    const voorlettersInput = fieldset.querySelector(`#voorletters-persoon-${id}`);
    const achternaamInput = fieldset.querySelector(`#achternaam-persoon-${id}`);
    const removeBtn = fieldset.querySelector(".remove-btn");
    const dagSelect = fieldset.querySelector('select[name="geboorteDag"]');

    if (!voorlettersInput || !achternaamInput || !removeBtn || !dagSelect) {
        console.log("Een veld is niet gevonden in createPersonFieldset");
        return;
    }


    
    function updatePersonName() {
        const naam = [
            voorlettersInput.value.trim(),
            achternaamInput.value.trim()
        ].filter(Boolean).join(" ");

        personItem.textContent = naam || `Verkrijger ${id}`;
    }

    voorlettersInput.addEventListener("input", updatePersonName);
    achternaamInput.addEventListener("input", updatePersonName);

    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        dagSelect.appendChild(option);
    }

    removeBtn.addEventListener("click", () => {
        fieldset.remove();
        personItem.remove();
    });
}