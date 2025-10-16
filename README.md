# resumeEnDe


 Mehmet Yilmaz – Multilingual Resume Website (English / Deutsch)
 
🧠 Project Purpose

This project is a personal CV (Resume) web page designed to showcase professional experience in a clean, interactive, and bilingual format (English and German).
The main goal is to demonstrate frontend development, internationalization (i18n), and clean code structuring skills while providing a professional, easily accessible online resume.


## 🔗 Live Demo

📄 [mehmetyilmaz61381.github.io/resume](https://mehmetyilmaz61381.github.io/resumeEnDe/)


🏗️ Project Structure


project-root/

│

├── index.html              # Main HTML file

├── style.css               # Styling and layout

├── js/

      │  
      └── lang.js             # JavaScript file for language switching

├── lang/

       │  
       ├── en.json             # English translation file

       │  
       └── de.json             # German translation file


    
⚙️ How It Works
When the user opens the page, the script checks localStorage for a saved language preference.

If no language is saved, English (en) is loaded by default.

The lang.js file dynamically fetches the corresponding JSON translation file (en.json or de.json) using the fetch() API.

Each HTML element that contains translatable text uses a data-translate attribute.
The JavaScript replaces the text content of these elements with the corresponding translation from the JSON file.

The  language toggle button allows switching between English and German.
The selected language is saved in localStorage, ensuring that the preference persists on reload.

💡 Why This Project Was Built
This project was created to:

Provide a professional, multilingual online CV.

Showcase skills in HTML, CSS, and JavaScript without using frameworks.

Demonstrate knowledge of asynchronous data loading and browser storage.

Create a lightweight and fast-loading portfolio page with clean structure.

🧰 Technologies Used
🟦 HTML5
Provides the semantic structure of the page using tags like <header>, <main>, <article>, and <section>.

Uses custom data attributes (data-translate) to support multilingual text replacement.

🟨 CSS3
Implements a responsive two-column grid layout (grid-template-columns: 40% 60%).

Styled for readability and simplicity using modern design principles.

Includes hover animations and a floating language switch button with transition effects.

Ensures professional and consistent visual design across browsers.

🟩 JavaScript 
Manages dynamic content replacement and user interaction.

Uses async/await and the fetch() API to load JSON translation files.

Stores the selected language in localStorage for persistence.

Listens to the click event on the language toggle button and switches between English and German dynamically.

🟧 JSON
Used for storing translation data for each supported language.


⚙️ Font Awesome
Provides professional icons (email, phone, GitHub, location, and globe icons).

Imported via CDN for lightweight usage.

🧩 Key Files Explained
🔸 lang.js
Handles the logic for language detection, loading, and switching.

Fetches translation data asynchronously from /lang/en.json or /lang/de.json.

Updates all text nodes that contain the data-translate attribute.

Saves the chosen language in localStorage.

🔸 en.json / de.json
Contain  text translations for the interface and CV content.
Example:


🔸 style.css
Defines layout and visual styling:

Grid-based layout for two-column design.

Centered header with profile photo and name.

Interactive globe button for language switching.

Minimalist and professional typography using Segoe UI and fallback fonts.



No server or build process is required; it works directly in the browser.

Click the button to switch between English and German.
The website will remember your last selection even after reloading.

🧱 Design Decisions
 Built purely with HTML, CSS, and JavaScript for maximum control and learning value.

Localization via JSON: Simplifies translation and future maintenance.

LocalStorage persistence: Improves user experience by remembering language preferences.

Clean separation of concerns: HTML (structure), CSS (presentation), and JS (logic) are kept separate for readability.








