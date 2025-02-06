// Allgemeine Fragen id 1 bis 8
const questions = [
  {
    id: 1,
    text: "Benötigt der Patient Unterstützung bei der Körperpflege?",
    options: [
      { text: "Ja", value: '1' },
      { text: "Nein", value: '0' },
    ]
  },
  {
    id: 2,
    dependsOn: { questionId: 1, answers: ['1'] },
    text: "Wie viel Unterstützung benötigt der Patient?",
    options: [
      { text: "Pat bedarf der Unterstützung: Körperpflegemittel vor/nachbereiten, Hilfe bei der Teilkörperwaschung, Übernahme wesentlicher Teile der Körperpflege, Pat kann überwiegend allein gelassen werden", value: 'A2' },
      { text: "Überwiegende oder vollständige Übernahme der Körperpflege", value: 'A3' },
      { text: "Volle Übernahme der Körperpflege (5x tgl., davon min. 1x Ganzkörper) oder volle Übernahme der Ganzkörperwäsche (2x tgl.)", value: 'A4' },
    ]
  },
  {
    id: 3,
    text: "Benötigt der Patient Unterstützung bei der Nahrungsaufnahme?",
    options: [
      { text: "Ja", value: '1' },
      { text: "Nein", value: '0' },
    ]
  },
  {
    id: 4,
    dependsOn: { questionId: 3, answers: ['1'] },
    text: "Wie viel Unterstützung benötigt der Patient bei der Nahrungsaufnahme?",
    options: [
      { text: "Mahlzeiten mundgerecht zubereiten, Getränke mit Trinkhilfe bereitstellen, Verabreichung von Sondennahrung", value: 'A2' },
      { text: "Nahrung und Getränke verabreichen, Trink- und Esstraining, Verabreichung der Sondennahrung (Bolusapplikation)", value: 'A3' },
      { text: "Volle Übernahme der oralen Nahrungs- und Flüssigkeitsverabreichung (min. 4x tgl.), Ess- und Trinktraining (min. 4x tgl.), Bolusapplikation von Sondennahrung und/oder Flüssigkeit (min. 7x tgl.)", value: 'A4' },
    ]
  },
  {
    id: 5,
    text: "Benötigt der Patient Unterstützung bei der Ausscheidung?",
    options: [
      { text: "Ja", value: '1' },
      { text: "Nein", value: '0' },
    ]
  },
  {
    id: 6,
    dependsOn: { questionId: 5, answers: ['1'] },
    text: "Wie viel Unterstützung benötigt der Patient bei der Ausscheidung?",
    options: [
      { text: "Unterstützung zur kontrollierten Blasen/Darmentleerung, Toilettenstuhl, Steckbecken, Urinflasche, Begleitung zur Toilette, Versorgung Katheter oder Stoma, Versorgung nach mehrmaligem Erbrechen, aufwendiges Versorgen bei starkem Schwitzen", value: 'A2' },
      { text: "Versorgung bei unkontrollierter Blasen/Darmentleerung, Versorgung mit Inkontinenzmaterial, Enddarm digital reinigen, Toilettentraining, Training selbstständige Stomaversorgung, aufwendiges Versorgen bei starkem Schwitzen (min. 3x tgl. Wäschewechsel)", value: 'A3' },
      { text: "Volle Übernahme der Ausscheidung (min. 4x tgl.), Kontinenztraining, Versorgung bei der Ausscheidung mit 2 PP (pflegefachlich begründet)", value: 'A4' },
    ]
  },
  {
    id: 7,
    text: "Benötigt der Patient Unterstützung bei der Mobilisation?",
    options: [
      { text: "Ja", value: '1' },
      { text: "Nein", value: '0' },
    ]
  },
  {
    id: 8,
    dependsOn: { questionId: 7, answers: ['1'] },
    text: "Wie viel Unterstützung benötigt der Patient bei der Mobilisation?",
    options: [
      { text: "Einfacher Positionswechsel, Patient benötigt Hilfe/Unterstützung bei Mobilisation/Positionswechsel, Patient ist überwiegend in der Lage, sich im Bett zu drehen, benötigt Unterstützung beim Aufstehen", value: 'A2' },
      { text: "Häufiger Positionswechsel und Mobilisation, Patient ist immobil, Patient ist überwiegend nicht in der Lage, sich im Bett zu drehen/aufzustehen", value: 'A3' },
      { text: "Volle Übernahme Positionswechsel (min. 12x tgl. davon 4 Mikrolagerungen), therapeutischer Positionswechsel (min. 6x tgl.), Positionswechsel mit 2 PP (min. 6x tgl.), Suchen und/oder Rückbegleiten des Patienten auf Station (min. 4x tgl.)", value: 'A4' },
    ]
  },
    // Fragen zur Speziellen Pflege ab id 9
  {
    id: 9,
    text: "Wurde der Patient operiert, wurden invasive Maßnahmen durchgeführt oder befindet sich der Patient in einer akuten Krankheitsphase?",
    options: [
      { text: "Ja", value: 'ja1' },
      { text: "Nein", value: 'nein' },
    ]
  },
  {
    id: 10,
    dependsOn: { questionId: 9, answers: ['ja1'] },
    text: "In welchem Umfang werden Parameter erhoben?",
    hint: "Hinweis zu Parametern: Vitalparameter (RR, Puls, Temp, AF, SpO2), Ausscheidungen (Urin, Stuhl, Erbrechen, Wundsekret), Schmerz, Blutzucker, Bewegungsprotokoll, Gewicht, DMS (Pupillen, Reflexe, Bewusstseinslage), Umfangsmessungen (Bauch, Extremitäten)",
    options: [
      { text: "S2: mindestens 2 Parameter bei 8 Messungen in 8 Stunden", value: 'S2' },
      { text: "S3: mindestens 3 Parameter bei min. 6 Messungen in 12 Stunden", value: 'S3' },
      { text: "Trifft nicht zu", value: 'nicht_zutreffend' },
    ]
  },
  {
    id: 11,
    dependsOn: { questionId: 9, answers: ['ja1'] },
    text: "Ist ein aufwendiges Versorgen von Zu-/Ableitungs-/Absaugsystemen notwendig?",
    options: [
      { text: "Ja", value: 'ja2' },
      { text: "Nein", value: 'nein' },
    ]
  },
  {
    id: 12,
    dependsOn: { questionId: 11, answers: ['ja2'] },
    text: "Welche Maßnahmen werden durchgeführt?",
    options: [
      { text: "S2: Thoraxdrainage, Spülkatheter, Liquorableitung, Absaugen (mehr als 3x tgl.), Legen von Magensonde/DK, ZVK, Wechsel von Drainagen oder Ziehen von min. 2 Drainagen, VAC-Pumpe, Trachealkanüle, Einlauf (aufwendiges Ablaufsystem)", value: 'S2' },
      { text: "S3: Endotracheales Absaugen mehr als 4x tgl.", value: 'S3' },
      { text: "Trifft nicht zu", value: 'nicht_zutreffend' },
    ]
  },
  {
    id: 13,
    text: "Ist ein aufwendiges Verabreichen von Medikamenten und deren Überwachung notwendig?",
    options: [
      { text: "Ja", value: 'ja3' },
      { text: "Nein", value: 'nein' },
    ]
  },
  {
    id: 14,
    dependsOn: { questionId: 13, answers: ['ja3'] },
    text: "Welche Medikamente und in welchem Umfang werden Medikamente verabreicht?",
    options: [
      { text: "S2: 1000ml Infusionslösung während des Tagdienstes, Verabreichung von min. 2 KI, i.v. Gabe von Zytostatika ohne kontinuierliche Beobachtung (trifft zu bei Verabreichungsdauer unter 2h) einschließlich Nachbeobachtung, Gabe von Transfusionen, Inhalationen/Atemhilfe min. 3x tgl.", value: 'S2' },
      { text: "S3: Verabreichung von min. 5 KIs, Gabe von 3 Transfusionen, Arzneimittelgaben, die über einen Zeitraum von mehr als 2h einer Beobachtung/Betreuung bedürfen, Gabe von Zytostatika mit engmaschiger Beobachtung (trifft zu bei Verabreichungsdauer über 2h), i.v. Insulingabe, Verabreichung von hochwirksamen Medikamenten bei Herz-Kreislauf-Krisen", value: 'S3' },
      { text: "Trifft nicht zu", value: 'nicht_zutreffend' },
    ]
  },
  {
    id: 15,
    text: "Benötigt der Patient eine Wundbehandlung?",
    options: [
      { text: "Ja", value: 'ja4' },
      { text: "Nein", value: 'nein' },
    ]
  },
  {
    id: 16,
    dependsOn: { questionId: 15, answers: ['ja4'] },
    text: "In welchem Umfang benötigt der Patient eine Wundbehandlung?",
    hint: "Hinweise zu aufwendigen Verbandswechseln: technisch schwieriger VW, unruhiger Patient oder wenig kooperativ, zwei PP erforderlich, steriler VW mit Medikament (Auflage, Salbe, Gaze, Spülen, Baden), septischer VW mit Wundreinigung, Verbände in Verbindung mit Drainagen/Spülungen, Gipsverbände mit darunterliegenden Wunden",
    options: [
      { text: "S2: Aufwendiger Verbandswechsel, Behandlung großflächiger Wunden (min. 4 cm²), tiefer Wunden (Muskeln, Sehnen, Knochen), großflächige Hautareale (ganze Extremität, erhebliche Teile der vorderen oder hinteren Körperseite), großflächige Hauterkrankungen, die medizinische Bäder erfordern, einfacher Verbandswechsel min. 2x tgl.", value: 'S2' },
      { text: "S3: min. 2x aufwendige Verbandswechsel, min. 2x Behandlung großflächiger Wunden (min. 4 cm²), tiefer Wunden (Muskeln, Sehnen, Knochen), großflächige Hautareale (ganze Extremität, erhebliche Teile der vorderen oder hinteren Körperseite), großflächige Hauterkrankungen, die medizinische Bäder erfordern, einfacher Verbandswechsel min. 3x tgl.", value: 'S3' },
      { text: "Trifft nicht zu", value: 'nicht_zutreffend' },
    ]
  },
];

let answers = {}; // Antwortenspeicher
let answerCounts = { A2: 0, A3: 0, A4: 0 }; // Zählt die Antworten A2, A3, A4
let specialCareCounts = { S2: 0, S3: 0 }; // Zählt die Antworten S2, S3

let showSpecialCareQuestions = false; // Steuerung der Anzeige der speziellen Pflegefragen
let displayedInitialResult = false; // Flag erster Abschlussbericht

const container = document.getElementById('quiz-container');

function renderQuiz() {
  container.innerHTML = '';
  resetAnswerCounts();

  // Flag Überschrift "Spezielle Pflege"
  let specialCareHeaderAdded = false;

  questions.forEach((question) => {
    // Steuerung der Anzeige der Fragen
    if (shouldDisplayQuestion(question)) {
      // Fragen ab ID 9 nur anzeigen, wenn showSpecialCareQuestions true ist
      if (question.id >= 9 && !showSpecialCareQuestions) {
        // Fragen zur speziellen Pflege noch nicht anzeigen
        return;
      }

      // Überschrift "Spezielle Pflege" einfügen
      if (question.id >= 9 && showSpecialCareQuestions && !specialCareHeaderAdded) {
        const headerElem = document.createElement('h2');
        headerElem.textContent = 'Spezielle Pflege';
        container.appendChild(headerElem);
        specialCareHeaderAdded = true;
      }

      const questionElem = createQuestionElement(question);
      container.appendChild(questionElem);
    }
  });

  // Ergebnisbereich leeren
  document.getElementById('result').innerHTML = '';

  // Alle Fragen beantwortet?!
  if (allQuestionsAnswered()) {
    displayResult();
  }
}

function resetAnswerCounts() {
  answerCounts = { A2: 0, A3: 0, A4: 0 };
  specialCareCounts = { S2: 0, S3: 0 };
}

function shouldDisplayQuestion(question) {
  if (!question.dependsOn) {
    // Frage hat keine Abhängigkeiten und wird immer angezeigt (abhängig von showSpecialCareQuestions)
    if (question.id >= 9 && !showSpecialCareQuestions) {
      return false;
    }
    return true;
  }
  const parentAnswer = answers[question.dependsOn.questionId];
  return question.dependsOn.answers.includes(parentAnswer);
}

function createQuestionElement(question) {
  const questionElem = document.createElement('div');
  questionElem.className = 'question';

  const questionTitle = document.createElement('div');
  questionTitle.className = 'question-title';
  questionTitle.textContent = question.text;
  questionElem.appendChild(questionTitle);

  if (question.hint) {
    const hintElem = document.createElement('div');
    hintElem.className = 'question-hint';
    hintElem.textContent = question.hint;
    questionElem.appendChild(hintElem);
  }

  const optionsElem = document.createElement('div');
  optionsElem.className = 'options';

  question.options.forEach((option) => {
    const optionLabel = document.createElement('label');

    const optionInput = document.createElement('input');
    optionInput.type = 'radio';
    optionInput.name = `question-${question.id}`;
    optionInput.value = option.value;
    optionInput.checked = answers[question.id] === option.value;
    optionInput.addEventListener('change', () => {
      handleAnswer(question.id, option.value);
    });

    const checkmarkSpan = document.createElement('span');
    checkmarkSpan.className = 'checkmark';

    optionLabel.appendChild(optionInput);
    optionLabel.appendChild(checkmarkSpan);
    optionLabel.appendChild(document.createTextNode(option.text));
    optionsElem.appendChild(optionLabel);
  });

  questionElem.appendChild(optionsElem);
  return questionElem;
}

function handleAnswer(questionId, value) {
  answers[questionId] = value;
  // Render 
  renderQuiz();
}

function allQuestionsAnswered() {
  // Prüfe, ob alle angezeigten Fragen beantwortet sind
  return questions.every((question) => {
    if (shouldDisplayQuestion(question)) {
      return answers[question.id] !== undefined;
    }
    return true;
  });
}

function scrollToResult() {
  const resultElem = document.getElementById('result');
  resultElem.scrollIntoView({ behavior: 'smooth' });
}

function displayResult() {
  // Antworten zählen
  resetAnswerCounts();

  // Speichert den höchsten S-Wert aus den Fragen 10 und 12 --> Spezielle Auswahl 
  let highestSValueGroup1 = 'nicht_zutreffend';

  questions.forEach((question) => {
    if (shouldDisplayQuestion(question) && answers[question.id]) {
      const answerValue = answers[question.id];

      if (answerCounts[answerValue] !== undefined) {
        answerCounts[answerValue]++;
      }

     //Spezielle Logik für 10 und 12
      if (question.id === 10 || question.id === 12) {
        highestSValueGroup1 = getHigherSValue(highestSValueGroup1, answerValue);
      } else {
        
        if (specialCareCounts[answerValue] !== undefined) {
          specialCareCounts[answerValue]++;
        }
      }
    }
  });

  // Den höchsten S-Wert aus Gruppe 1 zum Count hinzufügen (nur einmal)
  if (highestSValueGroup1 === 'S2' || highestSValueGroup1 === 'S3') {
    specialCareCounts[highestSValueGroup1]++;
  }

  const resultElem = document.getElementById('result');
  resultElem.innerHTML = '';

  if (!showSpecialCareQuestions && !displayedInitialResult) {
    displayedInitialResult = true; //Flag für Abschlussbericht

    
    let abschlussbericht = '';

    if (answerCounts['A4'] >= 2) {
      abschlussbericht = "Der Patient/die Patientin wird in Leistungsstufe A4 eingruppiert, sobald Barthel zwischen 0 und 35 Punkten liegt.";
    } else if (answerCounts['A3'] >= 2) {
      abschlussbericht = "Der Patient/die Patientin wird in Leistungsstufe A3 eingruppiert.";
    } else if (answerCounts['A2'] >= 2 && answerCounts['A3'] <= 1) {
      abschlussbericht = "Der Patient/die Patientin wird in Leistungsstufe A2 eingruppiert.";
    } else {
      abschlussbericht = "Der Patient/die Patientin wird in Leistungsstufe A1 eingruppiert.";
    }

    // Hinweis hinzufügen
    const hinweis = "Bitte Tätigkeiten, die zur Eingruppierung geführt haben, dokumentieren!";

    // Ausgabe des Abschlussberichts für allgemeine Pflege
    const berichtElem = document.createElement('div');
    berichtElem.className = 'abschlussbericht';
    berichtElem.innerHTML = `<p>${abschlussbericht}</p><p>${hinweis}</p>`;
    resultElem.appendChild(berichtElem);

    // Spezielle Pflegefragen anzeigen
    showSpecialCareQuestions = true;
    // Quiz neu rendern, um die speziellen Pflegefragen anzuzeigen
    renderQuiz();

    // Automatisch zum Ergebnis scrollen
    scrollToResult();
  } else {
    
    const resultTitle = document.createElement('div');
    resultTitle.className = 'result-title';
    resultTitle.textContent = 'Abschlussbericht';
    resultElem.appendChild(resultTitle);

    // Abschlussbericht allgemeine Pflege
    let abschlussbericht = '';

    if (answerCounts['A4'] >= 2) {
      abschlussbericht = "Allgemeine Pflege: Der Patient/die Patientin wird in Leistungsstufe A4 eingruppiert, sobald Barthel zwischen 0 und 35 Punkten liegt.";
    } else if (answerCounts['A3'] >= 2) {
      abschlussbericht = "Allgemeine Pflege: Der Patient/die Patientin wird in Leistungsstufe A3 eingruppiert.";
    } else if (answerCounts['A2'] >= 2 && answerCounts['A3'] <= 1) {
      abschlussbericht = "Allgemeine Pflege: Der Patient/die Patientin wird in Leistungsstufe A2 eingruppiert.";
    } else {
      abschlussbericht = "Allgemeine Pflege: Der Patient/die Patientin wird in Leistungsstufe A1 eingruppiert.";
    }

    // Abschlussbericht spezielle Pflege
    let specialAbschlussbericht = '';
    if (specialCareCounts['S3'] >= 2) {
      specialAbschlussbericht = "Spezielle Pflege: Der Patient/die Patientin wird in Leistungsstufe S4 eingruppiert.";
    } else if (specialCareCounts['S3'] >= 1) {
      specialAbschlussbericht = "Spezielle Pflege: Der Patient/die Patientin wird in Leistungsstufe S3 eingruppiert.";
    } else if (specialCareCounts['S2'] >= 1 && specialCareCounts['S3'] === 0) {
      specialAbschlussbericht = "Spezielle Pflege: Der Patient/die Patientin wird in Leistungsstufe S2 eingruppiert.";
    } else {
      specialAbschlussbericht = "Spezielle Pflege: Der Patient/die Patientin wird in Leistungsstufe S1 eingruppiert.";
    }

    // Kombinierter Abschlussbericht
    const berichtElem = document.createElement('div');
    berichtElem.className = 'abschlussbericht';
    berichtElem.innerHTML = `
      <p>${abschlussbericht}</p>
      <p>${specialAbschlussbericht}</p>
      <p>Bitte Tätigkeiten, die zur Eingruppierung geführt haben, dokumentieren! Verifizieren Sie die Leistungsstufen durch Ihr eigenes fachkundiges Urteil! Dieses Formular befindet sich noch in der Testphase.</p>`;
    resultElem.appendChild(berichtElem);

    // Automatisch zum Ergebnis scrollen
    scrollToResult();
  }
}

// Funktion zum Vergleichen der S-Werte und Zurückgeben des höheren Wertes
function getHigherSValue(value1, value2) {
  const hierarchy = ['nicht_zutreffend', 'S2', 'S3'];
  const index1 = hierarchy.indexOf(value1);
  const index2 = hierarchy.indexOf(value2);

  return hierarchy[Math.max(index1, index2)];
}

// Starten des Fragebogens
renderQuiz();
