# surveyFormJokba
Projektübersicht:
Dynamischer Fragebogen zur Patienteneingruppierung, der als eigenständige statische Ressource in ein Intranet eingebunden werden kann.

Dateien:

survey_index.html – Basis-HTML, das zwei Container-Divs bereitstellt:   • #quiz-container: Hier werden die Fragen dynamisch eingefügt.
  • #result: Hier erscheint der Abschlussbericht.  
   – Bindet style.css (für das Design) und script.js (für die Funktionslogik) ein.  
   – Standardmäßig als statische Ressource einsetzbar, z. B. in einem Intranet mit internen Pfadverweisen.

style.css  
– Definiert das Layout und Styling (Überschriften, Container, Fragen, Optionsfelder).  
– Nutzt Media Queries für responsives Design, sodass die Darstellung an Unternehmensstandards angepasst werden kann.  
– Änderungen am Design erfolgen zentral, was die Wartung und Anpassung an z. B. ein Corporate Design erleichtert.

script.js  
– Enthält die gesamte Fragebogenlogik in gut strukturierten Funktionen und einem zentralen questions-Array:
  • questions-Array: Definiert die Fragen, Antwortoptionen und Abhängigkeiten (über dependsOn).  
  • renderQuiz(): Baut den Fragebogen dynamisch auf. Es ruft:
   – resetAnswerCounts() zum Zurücksetzen der Zählvariablen auf,  
   – shouldDisplayQuestion() zur Prüfung der Abhängigkeiten, und  
   – createQuestionElement() zur Generierung der DOM-Elemente für jede Frage.
  • handleAnswer(questionId, value): Wird durch Event-Listener der Optionsfelder aufgerufen, aktualisiert die globale answers-Variable und triggert einen erneuten Render-Prozess über renderQuiz().  
  • displayResult(): Sobald alle sichtbaren Fragen beantwortet sind, aggregiert diese Funktion die Antwortzahlen (z. B. A2, A3, A4 sowie S2, S3) und erstellt auf Basis vordefinierter Regeln einen Abschlussbericht.  
  • getHigherSValue(): Vergleicht S-Werte, um den höchsten Wert in Gruppen zu ermitteln.  
– Wartung:  
  – Änderungen an den Umfragen (Fragen, Abhängigkeiten, Antwortoptionen) erfolgen durch Editieren des questions-Arrays direkt in script.js.  
  – Anpassungen der Logik (z. B. neue Bewertungsregeln oder alternative Abschlussberichte) können gezielt in den Hauptfunktionen (renderQuiz, handleAnswer, displayResult) vorgenommen werden, da der Code modular aufgebaut ist.  
– Für die Integration in ein Intranet ist script.js als statische Ressource ideal, die ohne komplexe Abhängigkeiten bereitgestellt werden kann.

Wartung & Einbindung:
• Aktualisierungen am Fragebogen (Text, Logik, Abhängigkeiten) werden zentral in script.js durchgeführt – Änderungen sind klar abgegrenzt und modulare Funktionen erleichtern die Erweiterung.  
• Design- und Layoutanpassungen erfolgen über style.css, was die Integration in bestehende Systeme und unternehmensspezifische Anpassungen unterstützt.  
• survey_index.html dient als Einstiegspunkt und kann problemlos in ein Intranet integriert werden, da alle Ressourcen als statische Dateien vorliegen und intern referenziert werden können.

Ende der README.txt
+++++ KI generierte readme.txt +++++
++++ PROMPT: Analysiere die folgenden drei Webdateien im Hinblick darauf, wie sie zusammenhängen, welche Funktionalität sie bieten und die allgemeine Struktur. Erkläre es in einer readme.txt anschließend so, dass IT'ler eines Unternehmens nachvollziehen können, wie die Dateien geschrieben und die Funktionsweise des Fragebogens implementiert wurde. Gehe dabei auch darauf ein, inwiefern eine Einbindung in das unternehmenseigene Intranet erfolgen könnte und, welche Wartungsmöglichkeiten es bietet. ++++
