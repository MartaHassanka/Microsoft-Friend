// Translations for Interface Text
const translations = {
  en: {
    appName: "Microsoft Friend",
    languageLabel: "Select your language:",
    tutorialsTitle: "Tutorial Links",
    footerText: "© 2025 Microsoft Friend"
  },
  fi: {
    appName: "Microsoft Ystävä",
    languageLabel: "Valitse kielesi:",
    tutorialsTitle: "Opetuslinkit",
    footerText: "© 2025 Microsoft Ystävä"
  },
  pl: {
    appName: "Przyjaciel Microsoftu",
    languageLabel: "Wybierz swój język:",
    tutorialsTitle: "Linki do samouczków",
    footerText: "© 2025 Przyjaciel Microsoftu"
  },
  ar: {
    appName: "صديق مايكروسوفت",
    languageLabel: "اختر لغتك:",
    tutorialsTitle: "روابط التعليمات",
    footerText: "© 2025 صديق مايكروسوفت"
  }
};

// Tutorial Links for Each Language and Program
const tutorials = {
  en: {
    Word: [
      "<a href='https://www.youtube.com/results?search_query=word+tutorial' target='_blank'>Explore Word Tutorials on YouTube</a>"
    ],
    Excel: [
      "<a href='https://www.youtube.com/results?search_query=excel+tutorial' target='_blank'>Explore Excel Tutorials on YouTube</a>"
    ],
    Teams: [
      "<a href='https://www.youtube.com/results?search_query=Teams+tutorial' target='_blank'>Explore Teams Tutorials on YouTube</a>"
    ],
    PowerPoint: [
      "<a href='https://www.youtube.com/results?search_query=Powerpoint+tutorial' target='_blank'>Explore PowerPoint Tutorials on YouTube</a>"
    ]
  },
  fi: {
    Word: [
      "<a href='https://www.youtube.com/results?search_query=word+opastus' target='_blank'>Etsi Word-opetusohjelmia YouTubessa</a>"
    ],
    Excel: [
      "<a href='https://www.youtube.com/results?search_query=excel+opastus' target='_blank'>Etsi Excel-opetusohjelmia YouTubessa</a>"
    ],
    Teams: [
      "<a href='https://www.youtube.com/results?search_query=teams+opiskelu' target='_blank'>Etsi Teams-opetusohjelmia YouTubessa</a>"
    ],
    PowerPoint: [
      "<a href='https://www.youtube.com/results?search_query=powerpoint+opiskelu' target='_blank'>Etsi PowerPoint-opetusohjelmia YouTubessa</a>"
    ]
  },
  pl: {
    Word: [
      "<a href='https://www.youtube.com/results?search_query=jak+uzwac+worda' target='_blank'>Zobacz samouczki Word na YouTube</a>"
    ],
    Excel: [
      "<a href='https://www.youtube.com/results?search_query=jak+uzwac+excela' target='_blank'>Zobacz samouczki Excel na YouTube</a>"
    ],
    Teams: [
      "<a href='https://www.youtube.com/results?search_query=jak+uzwac+teamsa' target='_blank'>Zobacz samouczki Teams na YouTube</a>"
    ],
    PowerPoint: [
      "<a href='https://www.youtube.com/results?search_query=jak+uzwac+powerpointa' target='_blank'>Zobacz samouczki PowerPoint na YouTube</a>"
    ]
  },
  ar: {
    Word: [
      "<a href='https://www.youtube.com/results?search_query=%D9%83%D9%8A%D9%81%D9%8A%D8%A9+%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85+%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC+Word' target='_blank'>تعرف على دروس Word على YouTube</a>"
    ],
    Excel: [
      "<a href='https://www.youtube.com/results?search_query=%D9%83%D9%8A%D9%81%D9%8A%D8%A9+%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85+Excel++%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC' target='_blank'>تعرف على دروس Excel على YouTube</a>"
    ],
    Teams: [
      "<a href='https://www.youtube.com/results?search_query=%D9%83%D9%8A%D9%81%D9%8A%D8%A9+%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D9%85+Teams++%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC' target='_blank'>تعرف على دروس Teams على YouTube</a>"
    ],
    PowerPoint: [
      "<a href='https://www.youtube.com/results?search_query=%D9%83%D9%8A%D9%81%D9%8A%D8%A9+%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D9%85+%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC+Powerpoint' target='_blank'>تعرف على دروس PowerPoint على YouTube</a>"
    ]
  }
};

// Function to Update Interface Language
function updateLanguage(language) {
  const elementsToTranslate = ["appName", "languageLabel", "tutorialsTitle", "footerText"];
  elementsToTranslate.forEach((id) => {
    document.getElementById(id).textContent = translations[language][id];
  });

  // Update tutorials when the language changes
  const selectedProgram = document.getElementById("programSelect").value;
  updateTutorials(language, selectedProgram);
}

// Function to Update Tutorials Dynamically
function updateTutorials(language, program) {
  const tutorialList = document.getElementById("tutorialList");
  if (tutorials[language] && tutorials[language][program]) {
    tutorialList.innerHTML = tutorials[language][program].map(link => `<li>${link}</li>`).join("");
  } else {
    tutorialList.innerHTML = "<p>No tutorials available for this selection.</p>";
  }
}
// Event Listeners for Language and Program
document.getElementById("languageSelect").addEventListener("change", function () {
  const selectedLanguage = this.value;
  updateLanguage(selectedLanguage);
});

document.getElementById("programSelect").addEventListener("change", function () {
  const selectedProgram = this.value;
  const selectedLanguage = document.getElementById("languageSelect").value;
  updateTutorials(selectedLanguage, selectedProgram);
});
// Comprehensive FAQ Content for Each Language
const faqListContent = {
  en: [
    { question: "What is Word used for?", answer: "Microsoft Word is used to create and edit text documents, such as letters, resumes, and reports." },
    { question: "How do I save a document in Word?", answer: "To save a document in Word, press Ctrl + S or go to File > Save." },
    { question: "How do I insert an image in Word?", answer: "In Word, go to Insert > Pictures, then select an image from your device." },
    { question: "What is Excel used for?", answer: "Microsoft Excel is used to create and manage spreadsheets for data analysis and calculations." },
    { question: "How do I create a chart in Excel?", answer: "In Excel, highlight your data, go to Insert > Charts, and select the desired chart type." },
    { question: "What is Teams used for?", answer: "Microsoft Teams is used for collaboration, including messaging, video calls, and file sharing." },
    { question: "How do I create a slide in PowerPoint?", answer: "To create a slide in PowerPoint, go to Home > New Slide and choose a layout." }
  ],
  fi: [
    { question: "Mihin Wordia käytetään?", answer: "Microsoft Wordia käytetään tekstiasiakirjojen, kuten kirjeiden ja raporttien, luomiseen ja muokkaamiseen." },
    { question: "Kuinka tallennan asiakirjan Wordissa?", answer: "Tallenna asiakirja Wordissa painamalla Ctrl + S tai siirtymällä kohtaan Tiedosto > Tallenna." },
    { question: "Kuinka lisään kuvan Wordissa?", answer: "Wordissa siirry kohtaan Lisää > Kuvat ja valitse kuva laitteeltasi." },
    { question: "Mihin Exceliä käytetään?", answer: "Microsoft Exceliä käytetään taulukoiden hallintaan ja tietojen analysointiin." },
    { question: "Kuinka luon kaavion Excelissä?", answer: "Excelissä valitse tiedot, siirry kohtaan Lisää > Kaaviot ja valitse haluamasi kaaviotyyppi." },
    { question: "Mihin Teamsia käytetään?", answer: "Microsoft Teams on yhteistyöalusta viestintään, videopuheluihin ja tiedostojen jakamiseen." },
    { question: "Kuinka luon dian PowerPointissa?", answer: "Luo dia PowerPointissa siirtymällä kohtaan Aloitus > Uusi dia ja valitse asettelu." }
  ],
  pl: [
    { question: "Do czego służy Word?", answer: "Microsoft Word służy do tworzenia i edycji dokumentów tekstowych, takich jak listy i raporty." },
    { question: "Jak zapisać dokument w Wordzie?", answer: "Aby zapisać dokument w Wordzie, naciśnij Ctrl + S lub przejdź do Plik > Zapisz." },
    { question: "Jak wstawić obraz w Wordzie?", answer: "W Wordzie przejdź do Wstaw > Obrazy i wybierz obraz z urządzenia." },
    { question: "Do czego służy Excel?", answer: "Microsoft Excel służy do zarządzania arkuszami kalkulacyjnymi i analizy danych." },
    { question: "Jak utworzyć wykres w Excelu?", answer: "W Excelu zaznacz dane, przejdź do Wstaw > Wykresy i wybierz typ wykresu." },
    { question: "Do czego służy Teams?", answer: "Microsoft Teams to platforma współpracy do wiadomości, wideokonferencji i udostępniania plików." },
    { question: "Jak utworzyć slajd w PowerPoint?", answer: "Aby utworzyć slajd w PowerPoint, przejdź do Strona główna > Nowy slajd i wybierz układ." }
  ],
  ar: [
    { question: "ما هي استخدامات برنامج Word؟", answer: "يستخدم Microsoft Word لإنشاء وتحرير المستندات النصية، مثل الرسائل والتقارير." },
    { question: "كيف أحفظ مستند في Word؟", answer: "لحفظ مستند في Word، اضغط على Ctrl + S أو انتقل إلى ملف > حفظ." },
    { question: "كيف يمكنني إدراج صورة في Word؟", answer: "في Word، انتقل إلى إدراج > الصور، واختر صورة من جهازك." },
    { question: "ما هي استخدامات برنامج Excel؟", answer: "يُستخدم Microsoft Excel لإنشاء وإدارة جداول البيانات وتحليل البيانات." },
    { question: "كيف أنشئ رسمًا بيانيًا في Excel؟", answer: "في Excel، قم بتحديد البيانات، ثم انتقل إلى إدراج > الرسوم البيانية واختر نوع الرسم البياني." },
    { question: "ما هي استخدامات برنامج Teams؟", answer: "Microsoft Teams هو منصة للتعاون تشمل المراسلة ومكالمات الفيديو ومشاركة الملفات." },
    { question: "كيف أنشئ شريحة في PowerPoint؟", answer: "لإنشاء شريحة في PowerPoint، انتقل إلى الصفحة الرئيسية > شريحة جديدة واختر التخطيط." }
  ]
};

// Function to Populate FAQ List Based on Language
function populateFAQ(language) {
  const faqList = document.getElementById("faqList");
  faqList.innerHTML = ""; // Clear existing content
  const faqs = faqListContent[language] || [];

  faqs.forEach(faq => {
    const questionElement = document.createElement("h3");
    questionElement.textContent = faq.question;

    const answerElement = document.createElement("p");
    answerElement.textContent = faq.answer;

    faqList.appendChild(questionElement);
    faqList.appendChild(answerElement);
  });
}

// Update FAQ on Language Change
document.getElementById("languageSelect").addEventListener("change", function () {
  const selectedLanguage = this.value;
  populateFAQ(selectedLanguage); // Update FAQ list
});
// Event Listeners for Language and Program
document.getElementById("languageSelect").addEventListener("change", function () {
  const selectedLanguage = this.value;
  updateLanguage(selectedLanguage);
});

document.getElementById("programSelect").addEventListener("change", function () {
  const selectedProgram = this.value;
  const selectedLanguage = document.getElementById("languageSelect").value;
  updateTutorials(selectedLanguage, selectedProgram);
});

// Initial Population of FAQ
const defaultLanguage = document.getElementById("languageSelect").value || "en";
populateFAQ(defaultLanguage);
// Exhaustive tasks for all programs
const tasks = {
  Word: [
    { task: "Insert a Table", instructions: [
      "Open Microsoft Word.",
      "Go to the 'Insert' tab.",
      "Click 'Table' and select the size of the table (e.g., 3x3).",
      "Your table will appear in the document."
    ]},
    { task: "Save the Document", instructions: [
      "Click 'File' in the top-left corner.",
      "Select 'Save As'.",
      "Choose a location (e.g., Desktop) and give your file a name.",
      "Click 'Save' to save the document."
    ]},
    { task: "Insert an Image", instructions: [
      "Place your cursor where you want to insert the image.",
      "Go to the 'Insert' tab.",
      "Click 'Pictures' and choose an image from your PC.",
      "Adjust the image size and position as needed."
    ]},
    { task: "Use Spell Check", instructions: [
      "Click on the 'Review' tab.",
      "Select 'Spelling & Grammar'.",
      "Review the suggested changes and apply them as needed.",
      "Save your document after reviewing."
    ]},
    { task: "Copy and Paste Text", instructions: [
      "Highlight the text you want to copy by clicking and dragging over it.",
      "Right-click the highlighted text and choose 'Copy'.",
      "Place your cursor where you want the text to appear.",
      "Right-click and choose 'Paste' to insert the text."
      ]},
    { task: "Customize Font Style and Size", instructions: [
      "Highlight the text you want to format.",
      "Go to the 'Home' tab.",
      "In the 'Font' group, select a font style (e.g., Times New Roman) and size (e.g., 12).",
      "Click to apply the changes to your selected text."
    ]},
    { task: "Change Text Alignment", instructions: [
      "Select the paragraph or text you want to align.",
      "Go to the 'Home' tab.",
      "In the 'Paragraph' group, choose one of the alignment options: Left, Center, Right, or Justify.",
      "Your text will adjust accordingly."
    ]},
    { task: "Insert Page Numbers", instructions: [
      "Go to the 'Insert' tab.",
      "Click 'Page Number' and select a position (e.g., bottom-center or top-right).",
      "The page numbers will automatically be added to all pages."
    ]},
    { task: "Insert a Header", instructions: [
      "Go to the 'Insert' tab.",
      "Click 'Header' and choose a style.",
      "Type the text you want to appear in the header (e.g., document title).",
      "Click 'Close Header and Footer' to return to the main document."
    ]},
     { task: "Insert a Footer", instructions: [
      "Go to the 'Insert' tab.",
      "Click 'Footer' and select a style.",
      "Add the text or elements you want to display in the footer.",
      "Click 'Close Header and Footer' to finish."
    ]},
    { task: "Use Find and Replace", instructions: [
      "Go to the 'Home' tab.",
      "Click 'Replace' in the 'Editing' group.",
      "Enter the text you want to find in the 'Find what' field.",
      "Type the replacement text in the 'Replace with' field.",
      "Click 'Replace All' to apply the changes throughout the document."
    ]},
    { task: "Split Text into Columns", instructions: [
      "Highlight the text you want to format into columns.",
      "Go to the 'Layout' tab.",
      "Click 'Columns' and select the number of columns you need (e.g., two or three).",
      "Your text will be organized into columns."
    ]},
    { task: "Set Margins", instructions: [
      "Go to the 'Layout' tab.",
      "Click 'Margins' and choose a preset option (e.g., Normal, Narrow).",
      "To customize margins, select 'Custom Margins' and set specific values for Top, Bottom, Left, and Right.",
      "Click 'OK' to apply the margins."
    ]},
     { task: "Insert a Cover Page", instructions: [
      "Go to the 'Insert' tab.",
      "Click 'Cover Page' in the 'Pages' group.",
      "Choose a design template from the dropdown menu.",
      "Customize the cover page with your text or images."
    ]},
    { task: "Insert a Hyperlink", instructions: [
      "Highlight the text you want to turn into a hyperlink.",
      "Right-click and select 'Link' or 'Hyperlink'.",
      "Enter the URL in the field provided.",
      "Click 'OK' to apply the hyperlink."
    ]},
    { task: "Track Changes", instructions: [
      "Go to the 'Review' tab.",
      "Click 'Track Changes' to enable the feature.",
      "Edit your document, and Word will highlight the changes made.",
      "To accept or reject changes, click 'Review' and use the 'Accept' or 'Reject' options."
    ]},
    { task: "Insert Shapes", instructions: [
      "Go to the 'Insert' tab.",
      "Click 'Shapes' and select a shape (e.g., circle, arrow, square).",
      "Click and drag in your document to draw the shape.",
      "Use the 'Shape Format' tab to adjust the color, size, or border of the shape."
    ]},
    
    { task: "Add Watermark", instructions: [
      "Go to the 'Design' tab.",
      "Click 'Watermark' in the 'Page Background' group.",
      "Select a built-in watermark (e.g., Confidential, Draft) or create a custom one.",
      "The watermark will appear on all pages of your document."
    ]},
    { task: "Use Dictate Tool", instructions: [
      "Click on the 'Home' tab.",
      "In the 'Voice' group, click the 'Dictate' icon.",
      "Speak clearly, and Word will transcribe your speech into text.",
      "Click 'Dictate' again to stop."
    ]},
      { task: "Customize Paragraph Alignment", instructions: [
      "Select the paragraph or text you want to align.",
      "Go to the 'Home' tab.",
      "In the 'Paragraph' group, choose an alignment option: Left, Center, Right, or Justify.",
      "The alignment will be applied to the selected paragraph."
    ]},
    { task: "Insert Page Numbers", instructions: [
      "Go to the 'Insert' tab.",
      "Click 'Page Number' and choose the location for the page number (e.g., Bottom of Page).",
      "Select a format (e.g., centered or aligned to the right).",
      "Page numbers will be added throughout your document."
    ]}
  ],
  Excel: [
    { task: "Create a New Workbook", instructions: [
      "Open Microsoft Excel on your computer or device.",
      "Click the 'File' tab in the top-left corner.",
      "From the dropdown menu, select 'New'.",
      "Choose 'Blank Workbook' to start with an empty sheet.",
      "Click 'Create' to open your workbook."
    ]},
    { task: "Insert Data into Cells", instructions: [
      "Click on the cell where you want to insert data.",
      "Type the data you want to input using your keyboard.",
      "Press 'Enter' to move to the cell below, or 'Tab' to move to the next cell in the row.",
      "Repeat the steps to fill in other cells as needed."
    ]},
    { task: "Format Cells", instructions: [
      "Select the cells you want to format by clicking and dragging your cursor over them.",
      "Right-click the selected cells and choose 'Format Cells' from the menu.",
      "In the dialog box, select the desired format (e.g., Number, Currency, Date).",
      "Click 'OK' to apply the formatting."
    ]},
    { task: "Create a Chart", instructions: [
      "Highlight the range of cells that contain the data you want to visualize.",
      "Go to the 'Insert' tab at the top of the screen.",
      "In the 'Charts' group, select the type of chart you want (e.g., Bar, Line, Pie).",
      "The chart will appear in your spreadsheet.",
      "Click and drag the chart to reposition it if needed."
    ]},
    { task: "Sort Data", instructions: [
      "Select the range of data you want to sort.",
      "Go to the 'Data' tab at the top menu.",
      "Click 'Sort' and choose your sorting criteria (e.g., ascending or descending order).",
      "Click 'OK' to apply the sort to your data."
    ]},
    { task: "Filter Data", instructions: [
      "Select the range of cells where you want to apply filters.",
      "Go to the 'Data' tab at the top of the screen.",
      "Click 'Filter' to enable filtering options for each column.",
      "Click the dropdown arrow in a column header to filter values by specific criteria.",
      "Choose your criteria and click 'OK' to view the filtered data."
    ]},
    { task: "Use Conditional Formatting", instructions: [
      "Select the range of cells you want to format conditionally.",
      "Go to the 'Home' tab and click 'Conditional Formatting' in the 'Styles' group.",
      "Choose a formatting rule, such as 'Highlight Cell Rules' or 'Top/Bottom Rules'.",
      "Specify the criteria for the formatting (e.g., greater than a specific value).",
      "Click 'OK' to apply the conditional formatting."
    ]},
    { task: "Freeze Panes", instructions: [
      "Go to the 'View' tab at the top of the screen.",
      "Click 'Freeze Panes' in the 'Window' group.",
      "Choose an option (e.g., 'Freeze Top Row' or 'Freeze First Column').",
      "Your selected row or column will remain visible as you scroll through the sheet."
    ]},
    { task: "Insert Formulas", instructions: [
      "Click on the cell where you want to display the result of the formula.",
      "Type the equal sign '=' to start the formula.",
      "Enter the formula (e.g., '=SUM(A1:A5)' to calculate the sum of cells A1 through A5).",
      "Press 'Enter' to calculate and display the result in the cell."
    ]},
    { task: "Use the AutoSum Tool", instructions: [
      "Select the cell where you want the total to appear.",
      "Go to the 'Home' tab at the top of the screen.",
      "In the 'Editing' group, click the 'AutoSum' button (Σ symbol).",
      "Excel will automatically suggest a range of cells to sum.",
      "Press 'Enter' to confirm and calculate the total."
    ]},
    { task: "Insert a Pivot Table", instructions: [
      "Select the range of data you want to analyze.",
      "Go to the 'Insert' tab at the top of the screen.",
      "Click 'PivotTable' in the 'Tables' group.",
      "Choose where to place the PivotTable (e.g., new worksheet or existing worksheet).",
      "Click 'OK' to create the PivotTable and begin arranging fields."
    ]},
    { task: "Add Comments to Cells", instructions: [
      "Right-click the cell where you want to add a comment.",
      "Select 'New Comment' or 'Insert Comment' from the menu.",
      "Type your comment in the comment box that appears.",
      "Click outside the comment box to save it. A small red triangle will indicate the cell contains a comment."
    ]},
    { task: "Use the Find and Replace Tool", instructions: [
      "Go to the 'Home' tab at the top of the screen.",
      "Click 'Find & Select' in the 'Editing' group, then choose 'Replace'.",
      "In the dialog box, type the text you want to find in the 'Find what' field.",
      "Type the replacement text in the 'Replace with' field.",
      "Click 'Replace All' to make the changes throughout the sheet."
    ]},
    { task: "Print the Spreadsheet", instructions: [
      "Go to the 'File' tab at the top-left corner of the screen.",
      "Select 'Print' from the menu.",
      "Choose your printer and set the desired print options (e.g., number of copies, orientation).",
      "Click 'Print' to print the spreadsheet."
    ]}
  ],
PowerPoint: [
    { task: "Create a New Presentation", instructions: [
      "Open Microsoft PowerPoint on your computer or device.",
      "Click 'File' in the top-left corner of the screen.",
      "From the dropdown menu, select 'New'.",
      "Choose 'Blank Presentation' to start fresh or select a template.",
      "Click 'Create' to open your new presentation."
    ]},
    { task: "Add a New Slide", instructions: [
      "Go to the 'Home' tab at the top of the screen.",
      "In the 'Slides' group, click 'New Slide'.",
      "Choose a slide layout from the dropdown menu (e.g., Title Slide, Title and Content).",
      "The new slide will appear in the slide pane on the left."
    ]},
    { task: "Insert Text into a Slide", instructions: [
      "Click on a text box in the slide where you want to add text.",
      "Type your text using the keyboard.",
      "Adjust the font style, size, and color from the 'Home' tab in the 'Font' group.",
      "Click outside the text box to finish editing."
    ]},
    { task: "Insert an Image", instructions: [
      "Go to the 'Insert' tab at the top of the screen.",
      "In the 'Images' group, click 'Pictures'.",
      "Choose 'This Device' to insert an image from your computer.",
      "Browse your files, select the image, and click 'Insert'.",
      "Resize or reposition the image by clicking and dragging the handles."
    ]},
    { task: "Apply Slide Transitions", instructions: [
      "Select the slide to which you want to apply a transition from the slide pane on the left.",
      "Go to the 'Transitions' tab at the top.",
      "In the 'Transition to This Slide' group, select a transition effect (e.g., Fade, Wipe, Push).",
      "Adjust the transition's duration and settings from the options provided.",
      "Click 'Apply to All' if you want the same transition for all slides."
    ]},
    { task: "Add Animation to Objects", instructions: [
      "Click on the object (e.g., text box, image, shape) you want to animate.",
      "Go to the 'Animations' tab at the top.",
      "In the 'Animation' group, select an animation effect (e.g., Appear, Fly In, Bounce).",
      "Use the 'Animation Pane' to manage the order and timing of animations.",
      "Preview the animation by clicking 'Preview' in the ribbon."
    ]},
    { task: "Add a Video to a Slide", instructions: [
      "Go to the 'Insert' tab at the top of the screen.",
      "Click 'Video' in the 'Media' group.",
      "Choose 'This Device' and browse for the video file on your computer.",
      "Click 'Insert' to add the video to your slide.",
      "Resize or reposition the video as needed, and use the playback controls to preview it."
    ]},
    { task: "Add Speaker Notes", instructions: [
      "Click on the slide where you want to add notes.",
      "Below the slide, locate the 'Notes' pane.",
      "Click in the 'Notes' pane and type your speaker notes.",
      "Your notes will be visible to you during the presentation but not to the audience."
    ]},
    { task: "Change the Slide Background", instructions: [
      "Go to the 'Design' tab at the top of the screen.",
      "In the 'Customize' group, click 'Format Background'.",
      "Choose a background fill option (e.g., Solid Fill, Gradient Fill, Picture or Texture Fill).",
      "Adjust the settings as needed and click 'Apply to All' if you want the same background for all slides."
    ]},
    { task: "Use the Slide Master", instructions: [
      "Go to the 'View' tab at the top of the screen.",
      "Click 'Slide Master' in the 'Master Views' group.",
      "Edit the master slide to change the layout, fonts, or colors for all slides.",
      "When done, click 'Close Master View' to return to your presentation."
    ]},
    { task: "Rehearse Slide Timings", instructions: [
      "Go to the 'Slide Show' tab at the top of the screen.",
      "Click 'Rehearse Timings' in the 'Set Up' group.",
      "Practice presenting your slides. PowerPoint will record the time spent on each slide.",
      "Click 'Yes' when prompted to save the slide timings."
    ]},
    { task: "Export as a PDF", instructions: [
      "Go to the 'File' tab in the top-left corner of the screen.",
      "Click 'Export' from the menu options.",
      "Select 'Create PDF/XPS Document' and click 'Create PDF/XPS'.",
      "Choose a location to save the PDF, name the file, and click 'Publish'."
    ]},
    { task: "Print Handouts", instructions: [
      "Go to the 'File' tab in the top-left corner.",
      "Click 'Print' from the menu.",
      "In the 'Settings' section, choose 'Handouts' as the print layout.",
      "Select the number of slides to print per page (e.g., 2, 4, or 6).",
      "Click 'Print' to create the handouts."
    ]}
  ],
Teams: [
    { task: "Schedule a Meeting", instructions: [
      "Open Microsoft Teams on your computer or device.",
      "Log in to your account using your credentials.",
      "Navigate to the 'Calendar' tab located in the left-hand sidebar.",
      "Click 'New Meeting' at the top-right corner of the calendar.",
      "Fill in the meeting details, such as the title, participants, date, and time.",
      "Click 'Save' to schedule the meeting in your calendar."
    ]},
    { task: "Start a Chat with a Contact", instructions: [
      "Click on the 'Chat' tab located in the left-hand sidebar.",
      "Click 'New Chat' at the top of the chat list.",
      "Type the name or email address of the person you want to chat with in the 'To:' field.",
      "Write your message in the message box and press 'Enter' to send."
    ]},
    { task: "Join a Meeting", instructions: [
      "Go to the 'Calendar' tab located in the left-hand sidebar.",
      "Locate the meeting you want to join in your calendar.",
      "Click the meeting invitation to open it.",
      "Click 'Join' at the top-right corner of the invitation page.",
      "Adjust your video and audio settings as needed, then click 'Join Now' to enter the meeting."
    ]},
    { task: "Share Your Screen", instructions: [
      "Join or start a meeting in Microsoft Teams.",
      "Click 'Share' located in the toolbar at the bottom of the screen.",
      "Select the screen or window you want to share from the options provided.",
      "Your screen will be visible to all participants in the meeting."
    ]},
    { task: "Change Background Effects", instructions: [
      "Join or start a meeting in Microsoft Teams.",
      "Click on the 'More' icon (three dots) in the meeting toolbar.",
      "Select 'Apply Background Effects' from the dropdown menu.",
      "Choose a built-in background or upload a custom background image.",
      "Click 'Apply' to set the chosen background."
    ]},
    { task: "Record a Meeting", instructions: [
      "Join or start a meeting in Microsoft Teams.",
      "Click on the 'More' icon (three dots) in the meeting toolbar.",
      "Select 'Start Recording' from the dropdown menu.",
      "The meeting recording will start, and all participants will be notified.",
      "Click 'Stop Recording' in the same menu when you're done. The recording will be saved automatically."
    ]},
    { task: "Create a Team", instructions: [
      "Click on the 'Teams' tab located in the left-hand sidebar.",
      "Click 'Join or Create a Team' at the bottom of the Teams list.",
      "Select 'Create a Team' and choose the type of team you want to create (e.g., Class, Staff, Other).",
      "Enter a team name and description, and click 'Create'.",
      "Add members to your team by typing their email addresses or names."
    ]},
    { task: "Post a Message in a Team Channel", instructions: [
      "Navigate to the 'Teams' tab in the left-hand sidebar.",
      "Select the team and channel where you want to post a message.",
      "Click in the message box at the bottom of the channel.",
      "Type your message and click the 'Send' button (paper airplane icon) to post it."
    ]},
    { task: "Use the Whiteboard During a Meeting", instructions: [
      "Join or start a meeting in Microsoft Teams.",
      "Click 'Share' in the toolbar at the bottom of the screen.",
      "Select 'Microsoft Whiteboard' from the sharing options.",
      "Use the tools provided (e.g., pen, eraser, text) to collaborate with meeting participants."
    ]},
    { task: "Manage Notifications", instructions: [
      "Click on your profile picture located at the top-right corner of the screen.",
      "Select 'Settings' from the dropdown menu.",
      "Navigate to the 'Notifications' tab in the settings menu.",
      "Adjust your notification preferences for messages, calls, and meetings.",
      "Click 'Save' to apply your changes."
    ]},
    { task: "Set Up a Poll in a Meeting", instructions: [
      "Join or start a meeting in Microsoft Teams.",
      "Click on the 'More' icon (three dots) in the meeting toolbar.",
      "Select 'Add an App' from the dropdown menu.",
      "Search for 'Forms' and click 'Add'.",
      "Create your poll with a question and possible answers, then share it with participants."
    ]},
    { task: "End a Meeting", instructions: [
      "While in a meeting, click on the 'More' icon (three dots) in the toolbar.",
      "Select 'End Meeting' from the dropdown menu.",
      "Confirm that you want to end the meeting for all participants."
    ]}
  ]
};
// Populate Walkthroughs List
function populateWalkthroughs() {
  // Helper function to populate tasks for a specific program
  function populateProgramTasks(program, containerId) {
    const container = document.getElementById(containerId);

    tasks[program].forEach((task) => {
      const taskItem = document.createElement("li");
      
      // Highlight task name
      const taskName = document.createElement("strong");
      taskName.textContent = task.task;
      taskItem.appendChild(taskName);

      const instructionsList = document.createElement("ul");
      task.instructions.forEach((instruction) => {
        const instructionItem = document.createElement("li");
        instructionItem.textContent = instruction;
        instructionsList.appendChild(instructionItem);
      });

      taskItem.appendChild(instructionsList);
      container.appendChild(taskItem);
    });
  }

  // Populate tasks for each program
  populateProgramTasks("Word", "wordTasks");
  populateProgramTasks("Excel", "excelTasks");
  populateProgramTasks("PowerPoint", "powerpointTasks");
  populateProgramTasks("Teams", "teamsTasks");
}

// Initialize Walkthroughs List on Page Load
document.addEventListener("DOMContentLoaded", () => {
  populateWalkthroughs(); // Populate the walkthroughs list
});

// Exhaustive tasks for all programs in Finnish
const tasksSuomi = {
  Word: [
    {
      task: "Lisää taulukko",
      instructions: [
        "Avaa Microsoft Word.",
        "Siirry 'Lisää' välilehteen.",
        "Napsauta 'Taulukko' ja valitse taulukon koko (esim. 3x3).",
        "Taulukko ilmestyy asiakirjaan."
      ]
    },
    {
      task: "Tallenna asiakirja",
      instructions: [
        "Napsauta ylävasemmassa kulmassa olevaa 'Tiedosto'-painiketta.",
        "Valitse 'Tallenna nimellä'.",
        "Valitse sijainti (esim. Työpöytä) ja anna tiedostolle nimi.",
        "Napsauta 'Tallenna' tallentaaksesi asiakirjan."
      ]
    },
    {
      task: "Lisää kuva",
      instructions: [
        "Sijoita kohdistin kohtaan, johon haluat lisätä kuvan.",
        "Siirry 'Lisää' välilehteen.",
        "Napsauta 'Kuvat' ja valitse kuva tietokoneeltasi.",
        "Muokkaa kuvan kokoa ja sijaintia tarvittaessa."
      ]
    },
    {
      task: "Käytä oikeinkirjoituksen tarkistusta",
      instructions: [
        "Napsauta 'Tarkista' välilehteä.",
        "Valitse 'Oikeinkirjoitus ja kielioppi'.",
        "Käy ehdotetut muutokset läpi ja hyväksy tarpeen mukaan.",
        "Tallenna asiakirja tarkistuksen jälkeen."
      ]
    },
    {
      task: "Kopioi ja liitä teksti",
      instructions: [
        "Korosta kopioitava teksti napsauttamalla ja vetämällä.",
        "Napsauta hiiren kakkospainikkeella korostettua tekstiä ja valitse 'Kopioi'.",
        "Sijoita kohdistin kohtaan, johon haluat tekstin liittää.",
        "Napsauta hiiren kakkospainikkeella ja valitse 'Liitä'."
      ]
    },
    {
      task: "Mukauta fonttityyliä ja -kokoa",
      instructions: [
        "Korosta teksti, jota haluat muokata.",
        "Siirry 'Koti' välilehteen.",
        "Valitse 'Fontti'-ryhmästä fonttityyli (esim. Times New Roman) ja -koko (esim. 12).",
        "Napsauta muokataksesi valittua tekstiä."
      ]
    },
    {
      task: "Muuta tekstin tasausta",
      instructions: [
        "Valitse kappale tai teksti, jota haluat tasata.",
        "Siirry 'Koti' välilehteen.",
        "Valitse 'Kappale'-ryhmästä tasausvaihtoehto: Vasen, Keskitä, Oikea tai Tasaa.",
        "Teksti mukautuu valittuun asetukseen."
      ]
    },
    {
      task: "Lisää sivunumeroita",
      instructions: [
        "Siirry 'Lisää' välilehteen.",
        "Napsauta 'Sivunumero' ja valitse sijainti (esim. ala-keskellä tai yläoikealla).",
        "Sivunumerot lisätään automaattisesti kaikille sivuille."
      ]
    },
    {
      task: "Lisää ylätunniste",
      instructions: [
        "Siirry 'Lisää' välilehteen.",
        "Napsauta 'Ylätunniste' ja valitse tyyli.",
        "Kirjoita teksti, jonka haluat näkyvän ylätunnisteessa (esim. asiakirjan otsikko).",
        "Napsauta 'Sulje ylätunniste ja alatunniste' palataksesi pääasiakirjaan."
      ]
    },
    {
      task: "Lisää alatunniste",
      instructions: [
        "Siirry 'Lisää' välilehteen.",
        "Napsauta 'Alatunniste' ja valitse tyyli.",
        "Lisää teksti tai elementit, joita haluat näyttää alatunnisteessa.",
        "Napsauta 'Sulje ylätunniste ja alatunniste' viimeistelyä varten."
      ]
    },
    {
      task: "Käytä Etsi ja korvaa -toimintoa",
      instructions: [
        "Siirry 'Koti' välilehteen.",
        "Napsauta 'Korvaa' 'Muokkaus'-ryhmässä.",
        "Kirjoita etsittävä teksti 'Etsi mitä'-kenttään.",
        "Kirjoita korvaava teksti 'Korvaa millä'-kenttään.",
        "Napsauta 'Korvaa kaikki' soveltaaksesi muutoksia asiakirjan läpi."
      ]
    },
    {
      task: "Jaa teksti sarakkeisiin",
      instructions: [
        "Korosta teksti, jonka haluat muotoilla sarakkeiksi.",
        "Siirry 'Asettelu' välilehteen.",
        "Napsauta 'Sarakkeet' ja valitse sarakkeiden määrä (esim. kaksi tai kolme).",
        "Teksti järjestetään sarakkeisiin."
      ]
    },
    {
      task: "Määritä marginaalit",
      instructions: [
        "Siirry 'Asettelu' välilehteen.",
        "Napsauta 'Marginaalit' ja valitse esiasetettu vaihtoehto (esim. Normaali, Kapea).",
        "Mukauta marginaaleja valitsemalla 'Mukautetut marginaalit' ja asettamalla arvot.",
        "Napsauta 'OK' vahvistaaksesi muutokset."
      ]
    },
    {
      task: "Lisää kansilehti",
      instructions: [
        "Siirry 'Lisää' välilehteen.",
        "Napsauta 'Kansilehti' 'Sivut'-ryhmässä.",
        "Valitse mallipohja avattavasta valikosta.",
        "Mukauta kansilehti tekstilläsi tai kuvillasi."
      ]
    },
    {
      task: "Lisää hyperlinkki",
      instructions: [
        "Korosta teksti, jonka haluat muuttaa hyperlinkiksi.",
        "Napsauta hiiren kakkospainikkeella ja valitse 'Linkki' tai 'Hyperlinkki'.",
        "Kirjoita URL-osoite annettuun kenttään.",
        "Napsauta 'OK' käyttääksesi hyperlinkkiä."
      ]
    },
    {
      task: "Seuraa muutoksia",
      instructions: [
        "Siirry 'Tarkista' välilehteen.",
        "Napsauta 'Seuraa muutoksia' ominaisuuden aktivoimiseksi.",
        "Muokkaa asiakirjaa, ja Word merkitsee tehdyt muutokset.",
        "Hyväksy tai hylkää muutoksia napsauttamalla 'Tarkista' ja käyttämällä 'Hyväksy' tai 'Hylkää' vaihtoehtoja."
      ]
    },
    {
      task: "Lisää muotoja",
      instructions: [
        "Siirry 'Lisää' välilehteen.",
        "Napsauta 'Muodot' ja valitse muoto (esim. ympyrä, nuoli, neliö).",
        "Napsauta ja vedä asiakirjassa piirtääksesi muodon.",
        "Muokkaa muotoa käyttämällä 'Muodon muotoilu' välilehteä."
      ]
    },
    {
      task: "Lisää vesileima",
      instructions: [
        "Siirry 'Suunnittelu' välilehteen.",
        "Napsauta 'Vesileima' 'Sivun tausta' -ryhmässä.",
        "Valitse valmiiksi määritelty vesileima (esim. Luottamuksellinen, Luonnos) tai luo oma.",
        "Vesileima näkyy kaikilla sivuilla."
      ]
    },
    {
      task: "Käytä puheentunnistustyökalua",
      instructions: [
        "Napsauta 'Koti' välilehteä.",
        "Valitse 'Diktointi'-kuvake 'Puhe' ryhmästä.",
        "Puhu selkeästi, ja Word muuntaa puheesi tekstiksi.",
        "Napsauta uudelleen 'Diktointi' lopettaaksesi."
      ]
    },
    {
      task: "Mukauta kappaleen tasausta",
      instructions: [
        "Valitse kappale tai teksti, jota haluat tasata.",
        "Siirry 'Koti' välilehteen.",
        "Valitse tasausvaihtoehto: Vasen, Keskitä, Oikea tai Tasaa.",
        "Valitut asetukset kohdistetaan kappaleeseen."
    ]}
  ],
Excel: [
    {
      task: "Luo uusi työkirja",
      instructions: [
        "Avaa Microsoft Excel tietokoneellasi tai laitteellasi.",
        "Napsauta ylävasemmassa kulmassa olevaa 'Tiedosto'-välilehteä.",
        "Valitse avattavasta valikosta 'Uusi'.",
        "Valitse 'Tyhjä työkirja' aloittaaksesi tyhjällä taulukolla.",
        "Napsauta 'Luo' avataksesi työkirjan."
      ]
    },
    {
      task: "Syötä tietoja soluihin",
      instructions: [
        "Napsauta solua, johon haluat syöttää tietoja.",
        "Kirjoita haluamasi tiedot näppäimistöllä.",
        "Paina 'Enter' siirtyäksesi soluun alapuolella tai 'Tab' siirtyäksesi rivin seuraavaan soluun.",
        "Toista vaiheet täyttääksesi muita soluja tarpeen mukaan."
      ]
    },
    {
      task: "Muotoile solut",
      instructions: [
        "Valitse solut, jotka haluat muotoilla, napsauttamalla ja vetämällä hiiren osoitinta niiden yli.",
        "Napsauta hiiren kakkospainikkeella valittuja soluja ja valitse 'Muotoile solut' avattavasta valikosta.",
        "Valitse avautuvasta ikkunasta haluamasi muoto (esim. Numero, Valuutta, Päivämäärä).",
        "Napsauta 'OK' soveltaaksesi muotoilua."
      ]
    },
    {
      task: "Luo kaavio",
      instructions: [
        "Korosta solualue, joka sisältää haluamasi tiedot visualisointiin.",
        "Siirry ylhäällä olevaan 'Lisää'-välilehteen.",
        "Valitse 'Kaaviot'-ryhmästä haluamasi kaaviotyyppi (esim. Pylväs, Viiva, Piirakka).",
        "Kaavio ilmestyy taulukkolaskentaan.",
        "Napsauta ja vedä kaaviota siirtääksesi sitä tarvittaessa."
      ]
    },
    {
      task: "Lajittele tiedot",
      instructions: [
        "Valitse solualue, jonka haluat lajitella.",
        "Siirry ylävalikossa olevaan 'Data'-välilehteen.",
        "Napsauta 'Lajittele' ja valitse lajittelukriteerit (esim. nouseva tai laskeva järjestys).",
        "Napsauta 'OK' soveltaaksesi lajittelua tietoihisi."
      ]
    },
    {
      task: "Suodata tiedot",
      instructions: [
        "Valitse solualue, jolle haluat soveltaa suodattimia.",
        "Siirry ylhäällä olevaan 'Data'-välilehteen.",
        "Napsauta 'Suodatin' ottaaksesi suodatusvaihtoehdot käyttöön kullekin sarakkeelle.",
        "Napsauta sarakeotsikon avattavaa nuolta suodattaaksesi arvoja tiettyjen kriteerien mukaan.",
        "Valitse kriteerisi ja napsauta 'OK' nähdäksesi suodatetut tiedot."
      ]
    },
    {
      task: "Käytä ehdollista muotoilua",
      instructions: [
        "Valitse solualue, jonka haluat muotoilla ehdollisesti.",
        "Siirry 'Koti'-välilehteen ja napsauta 'Ehdollinen muotoilu' 'Tyylit'-ryhmässä.",
        "Valitse muotoilusääntö, kuten 'Korosta solusäännöt' tai 'Ylä-/alapohjasäännöt'.",
        "Määritä muotoilun kriteerit (esim. suurempi kuin tietty arvo).",
        "Napsauta 'OK' soveltaaksesi ehdollista muotoilua."
      ]
    },
    {
      task: "Paina ruudut",
      instructions: [
        "Siirry ylhäällä olevaan 'Näytä'-välilehteen.",
        "Napsauta 'Ruudut paikoillaan' 'Ikkuna'-ryhmässä.",
        "Valitse vaihtoehto (esim. 'Lukitse ylärivi' tai 'Lukitse ensimmäinen sarake').",
        "Valittu rivi tai sarake pysyy näkyvissä, kun selaat laskentataulukkoa."
      ]
    },
    {
      task: "Lisää kaavat",
      instructions: [
        "Napsauta solua, johon haluat näyttää kaavan tuloksen.",
        "Kirjoita yhtälömerkki '=' aloittaaksesi kaavan.",
        "Anna kaava (esim. '=SUM(A1:A5)' laskeaksesi solujen A1-A5 summan).",
        "Paina 'Enter' laskeaksesi ja näyttämään tulos solussa."
      ]
    },
    {
      task: "Käytä AutoSum-työkalua",
      instructions: [
        "Valitse solu, johon haluat summan näkyvän.",
        "Siirry ylhäällä olevaan 'Koti'-välilehteen.",
        "Napsauta 'Muokkaus'-ryhmässä olevaa 'AutoSum'-painiketta (Σ-symboli).",
        "Excel ehdottaa automaattisesti solualuetta summattavaksi.",
        "Paina 'Enter' vahvistaaksesi ja laskeaksesi summan."
      ]
    },
    {
      task: "Lisää Pivot-taulukko",
      instructions: [
        "Valitse data-alue, jota haluat analysoida.",
        "Siirry ylhäällä olevaan 'Lisää'-välilehteen.",
        "Napsauta 'Pivot-taulukko' 'Taulukot'-ryhmässä.",
        "Valitse, minne haluat sijoittaa Pivot-taulukon (esim. uusi tai nykyinen laskentataulukko).",
        "Napsauta 'OK' luodaksesi Pivot-taulukon ja aloittaaksesi kenttien järjestelyn."
      ]
    },
    {
      task: "Lisää kommentteja soluihin",
      instructions: [
        "Napsauta hiiren kakkospainikkeella solua, johon haluat lisätä kommentin.",
        "Valitse 'Uusi kommentti' tai 'Lisää kommentti' valikosta.",
        "Kirjoita kommenttisi kommenttikenttään, joka ilmestyy.",
        "Napsauta kommenttikentän ulkopuolella tallentaaksesi sen. Pieni punainen kolmio osoittaa, että solussa on kommentti."
      ]
    },
    {
      task: "Käytä Etsi ja korvaa -työkalua",
      instructions: [
        "Siirry ylhäällä olevaan 'Koti'-välilehteen.",
        "Napsauta 'Etsi ja valitse' 'Muokkaus'-ryhmässä ja valitse 'Korvaa'.",
        "Kirjoita avautuvaan ikkunaan tekstin, jonka haluat löytää 'Etsi mitä'-kenttään.",
        "Kirjoita korvaava teksti 'Korvaa millä'-kenttään.",
        "Napsauta 'Korvaa kaikki' tehdäksesi muutokset laskentataulukkoon."
      ]
    },
    {
      task: "Tulosta laskentataulukko",
      instructions: [
        "Siirry ylävasemmassa olevaan 'Tiedosto'-välilehteen.",
        "Valitse 'Tulosta' valikosta.",
        "Valitse tulostimesi ja aseta halutut tulostusasetukset (esim. kopioiden määrä, suunta).",
        "Napsauta 'Tulosta' tulostaaksesi laskentataulukon."
    ]}
  ],
PowerPoint: [
    {
      task: "Luo uusi esitys",
      instructions: [
        "Avaa Microsoft PowerPoint tietokoneellasi tai laitteellasi.",
        "Napsauta ylävasemmassa kulmassa olevaa 'Tiedosto'-välilehteä.",
        "Valitse avattavasta valikosta 'Uusi'.",
        "Valitse 'Tyhjä esitys' aloittaaksesi alusta tai valitse malli.",
        "Napsauta 'Luo' avataksesi uuden esityksen."
      ]
    },
    {
      task: "Lisää uusi dia",
      instructions: [
        "Siirry ylhäällä olevaan 'Koti'-välilehteen.",
        "Napsauta 'Diat'-ryhmässä olevaa 'Uusi dia'.",
        "Valitse dian asettelu avattavasta valikosta (esim. Otsikkodia, Otsikko ja sisältö).",
        "Uusi dia ilmestyy dianäkymään vasemmalla."
      ]
    },
    {
      task: "Lisää tekstiä diaan",
      instructions: [
        "Napsauta tekstiruutua diassa, johon haluat lisätä tekstiä.",
        "Kirjoita teksti näppäimistöllä.",
        "Muokkaa fontin tyyliä, kokoa ja väriä 'Koti'-välilehden 'Fontti'-ryhmässä.",
        "Napsauta tekstiruudun ulkopuolella lopettaaksesi muokkauksen."
      ]
    },
    {
      task: "Lisää kuva",
      instructions: [
        "Siirry ylhäällä olevaan 'Lisää'-välilehteen.",
        "Napsauta 'Kuvat'-ryhmässä olevaa 'Kuvat'-painiketta.",
        "Valitse 'Tämä laite' lisätäksesi kuvan tietokoneeltasi.",
        "Selaa tiedostojasi, valitse kuva ja napsauta 'Lisää'.",
        "Muuta kuvan kokoa tai sijaintia napsauttamalla ja vetämällä kahvoja."
      ]
    },
    {
      task: "Lisää dian siirtymiä",
      instructions: [
        "Valitse dia, johon haluat lisätä siirtymän, dianäkymässä vasemmalla.",
        "Siirry ylhäällä olevaan 'Siirtymät'-välilehteen.",
        "Valitse 'Siirtymä tähän diaan'-ryhmästä siirtymätehoste (esim. Häivytys, Pyyhkäisy, Työntö).",
        "Muokkaa siirtymän kestoa ja asetuksia käytettävissä olevista vaihtoehdoista.",
        "Napsauta 'Käytä kaikkiin', jos haluat käyttää samaa siirtymää kaikkiin dioihin."
      ]
    },
    {
      task: "Lisää animaatioita objekteihin",
      instructions: [
        "Napsauta objektia (esim. tekstiruutua, kuvaa, muotoa), johon haluat lisätä animaation.",
        "Siirry ylhäällä olevaan 'Animaatiot'-välilehteen.",
        "Valitse 'Animaatio'-ryhmästä animaatiotehoste (esim. Näkyviin, Lennä sisään, Pomppiminen).",
        "Hallitse animaatioiden järjestystä ja ajoitusta 'Animaatioruudussa'.",
        "Esikatsele animaatio napsauttamalla 'Esikatselu'-painiketta nauhassa."
      ]
    },
    {
      task: "Lisää video diaan",
      instructions: [
        "Siirry ylhäällä olevaan 'Lisää'-välilehteen.",
        "Napsauta 'Video' 'Media'-ryhmässä.",
        "Valitse 'Tämä laite' ja selaa tietokoneesi videotiedostoja.",
        "Napsauta 'Lisää' lisätäksesi videon diaan.",
        "Muuta videon kokoa tai sijaintia tarvittaessa ja käytä toistopainikkeita esikatseluun."
      ]
    },
    {
      task: "Lisää puhujamuistiinpanoja",
      instructions: [
        "Napsauta diaa, johon haluat lisätä muistiinpanoja.",
        "Etsi dian alapuolelta 'Muistiinpanot'-ruutu.",
        "Napsauta 'Muistiinpanot'-ruutua ja kirjoita puhujamuistiinpanosi.",
        "Muistiinpanot näkyvät esityksen aikana vain sinulle, eivät yleisölle."
      ]
    },
    {
      task: "Muuta dian taustaa",
      instructions: [
        "Siirry ylhäällä olevaan 'Rakenne'-välilehteen.",
        "Napsauta 'Mukauta'-ryhmässä olevaa 'Muotoile tausta'-painiketta.",
        "Valitse taustan täyttövaihtoehto (esim. Yksivärinen täyttö, Liukuväritäyttö, Kuvan tai tekstuurin täyttö).",
        "Muokkaa asetuksia tarpeen mukaan ja napsauta 'Käytä kaikkiin', jos haluat saman taustan kaikkiin dioihin."
      ]
    },
    {
      task: "Käytä dian perustaa",
      instructions: [
        "Siirry ylhäällä olevaan 'Näkymä'-välilehteen.",
        "Napsauta 'Dian perusta' 'Perustanäkymät'-ryhmässä.",
        "Muokkaa perustaa muuttaaksesi ulkoasua, fontteja tai värejä kaikille dioille.",
        "Kun olet valmis, napsauta 'Sulje perustanäkymä' palataksesi esitykseen."
      ]
    },
    {
      task: "Harjoittele diojen ajoituksia",
      instructions: [
        "Siirry ylhäällä olevaan 'Diaesitys'-välilehteen.",
        "Napsauta 'Harjoittele ajoituksia' 'Aseta'-ryhmässä.",
        "Harjoittele esittelemällä dioja. PowerPoint tallentaa kullekin dialle käytetyn ajan.",
        "Napsauta 'Kyllä', kun sinua kehotetaan tallentamaan ajoitukset."
      ]
    },
    {
      task: "Vie esitys PDF-muodossa",
      instructions: [
        "Siirry ylävasemmassa olevaan 'Tiedosto'-välilehteen.",
        "Napsauta 'Vie' valikkovaihtoehdoista.",
        "Valitse 'Luo PDF/XPS-tiedosto' ja napsauta 'Luo PDF/XPS'.",
        "Valitse sijainti PDF-tiedoston tallentamista varten, nimeä tiedosto ja napsauta 'Julkaise'."
      ]
    },
    {
      task: "Tulosta muistiinpanosivut",
      instructions: [
        "Siirry ylävasemmassa olevaan 'Tiedosto'-välilehteen.",
        "Napsauta 'Tulosta' valikosta.",
        "Valitse 'Asetukset'-osiossa 'Muistiinpanot' tulostusasetteluksi.",
        "Valitse tulostettavien diojen määrä per sivu (esim. 2, 4 tai 6).",
        "Napsauta 'Tulosta' luodaksesi muistiinpanosivut."
    ]}
  ],
Teams: [
    {
      task: "Aikatauluta kokous",
      instructions: [
        "Avaa Microsoft Teams tietokoneellasi tai laitteellasi.",
        "Kirjaudu sisään tilillesi käyttäen tunnuksiasi.",
        "Siirry 'Kalenteri'-välilehteen vasemmassa sivupalkissa.",
        "Napsauta 'Uusi kokous' kalenterin oikeassa yläkulmassa.",
        "Täytä kokouksen tiedot, kuten otsikko, osallistujat, päivämäärä ja aika.",
        "Napsauta 'Tallenna' aikatauluttaaksesi kokouksen kalenteriin."
      ]
    },
    {
      task: "Aloita keskustelu kontaktin kanssa",
      instructions: [
        "Napsauta 'Keskustelu'-välilehteä vasemmassa sivupalkissa.",
        "Napsauta 'Uusi keskustelu' keskustelulistan yläosassa.",
        "Kirjoita sen henkilön nimi tai sähköpostiosoite, jonka kanssa haluat keskustella, 'Kenelle:'-kenttään.",
        "Kirjoita viestisi viestikenttään ja paina 'Enter' lähettääksesi sen."
      ]
    },
    {
      task: "Liity kokoukseen",
      instructions: [
        "Siirry 'Kalenteri'-välilehteen vasemmassa sivupalkissa.",
        "Etsi kokous, johon haluat liittyä kalenteristasi.",
        "Napsauta kokouskutsua avataksesi sen.",
        "Napsauta 'Liity' kutsusivun oikeassa yläkulmassa.",
        "Säädä videon ja äänen asetukset tarvittaessa ja napsauta 'Liity nyt' osallistuaksesi kokoukseen."
      ]
    },
    {
      task: "Jaa näyttösi",
      instructions: [
        "Liity tai aloita kokous Microsoft Teamsissa.",
        "Napsauta 'Jaa' työkalupalkissa näytön alareunassa.",
        "Valitse jaettava näyttö tai ikkuna annetuista vaihtoehdoista.",
        "Näyttösi näkyy kaikille kokouksen osallistujille."
      ]
    },
    {
      task: "Muuta taustatehosteita",
      instructions: [
        "Liity tai aloita kokous Microsoft Teamsissa.",
        "Napsauta kokoustyökalupalkissa olevaa 'Lisää'-kuvaketta (kolme pistettä).",
        "Valitse pudotusvalikosta 'Käytä taustatehosteita'.",
        "Valitse sisäänrakennettu tausta tai lataa mukautettu taustakuva.",
        "Napsauta 'Käytä' asettaaksesi valitun taustan."
      ]
    },
    {
      task: "Tallenna kokous",
      instructions: [
        "Liity tai aloita kokous Microsoft Teamsissa.",
        "Napsauta kokoustyökalupalkissa olevaa 'Lisää'-kuvaketta (kolme pistettä).",
        "Valitse pudotusvalikosta 'Aloita tallennus'.",
        "Kokouksen tallennus alkaa, ja kaikki osallistujat saavat ilmoituksen.",
        "Napsauta samaa valikkoa 'Lopeta tallennus' lopettaaksesi. Tallennus tallennetaan automaattisesti."
      ]
    },
    {
      task: "Luo tiimi",
      instructions: [
        "Napsauta 'Tiimit'-välilehteä vasemmassa sivupalkissa.",
        "Napsauta 'Liity tai luo tiimi' Teams-listan alaosassa.",
        "Valitse 'Luo tiimi' ja valitse tiimityyppi, jonka haluat luoda (esim. Luokka, Henkilöstö, Muu).",
        "Syötä tiimin nimi ja kuvaus ja napsauta 'Luo'.",
        "Lisää jäseniä tiimiisi kirjoittamalla heidän sähköpostiosoitteensa tai nimensä."
      ]
    },
    {
      task: "Julkaise viesti tiimikanavassa",
      instructions: [
        "Siirry 'Tiimit'-välilehteen vasemmassa sivupalkissa.",
        "Valitse tiimi ja kanava, jossa haluat julkaista viestin.",
        "Napsauta viestikenttää kanavan alareunassa.",
        "Kirjoita viestisi ja napsauta 'Lähetä'-painiketta (paperilennokin kuvake) julkaistaksesi sen."
      ]
    },
    {
      task: "Käytä valkotaulua kokouksen aikana",
      instructions: [
        "Liity tai aloita kokous Microsoft Teamsissa.",
        "Napsauta 'Jaa' työkalupalkissa näytön alareunassa.",
        "Valitse 'Microsoft Whiteboard' jakamisvaihtoehdoista.",
        "Käytä annettuja työkaluja (esim. kynä, pyyhekumi, teksti) yhteistyöhön kokouksen osallistujien kanssa."
      ]
    },
    {
      task: "Hallitse ilmoituksia",
      instructions: [
        "Napsauta profiilikuvasi näytön oikeassa yläkulmassa.",
        "Valitse pudotusvalikosta 'Asetukset'.",
        "Siirry 'Ilmoitukset'-välilehdelle asetusten valikossa.",
        "Muokkaa ilmoitusasetuksiasi viestien, puheluiden ja kokousten osalta.",
        "Napsauta 'Tallenna' soveltaaksesi muutokset."
      ]
    },
    {
      task: "Luo kysely kokouksessa",
      instructions: [
        "Liity tai aloita kokous Microsoft Teamsissa.",
        "Napsauta kokoustyökalupalkissa olevaa 'Lisää'-kuvaketta (kolme pistettä).",
        "Valitse pudotusvalikosta 'Lisää sovellus'.",
        "Etsi 'Forms' ja napsauta 'Lisää'.",
        "Luo kyselysi kysymyksellä ja mahdollisilla vastausvaihtoehdoilla ja jaa se osallistujille."
      ]
    },
    {
      task: "Päätä kokous",
      instructions: [
        "Kokouksen aikana napsauta työkalupalkissa olevaa 'Lisää'-kuvaketta (kolme pistettä).",
        "Valitse pudotusvalikosta 'Lopeta kokous'.",
        "Vahvista, että haluat päättää kokouksen kaikille osallistujille."
      ]
    }
  ]
};
// Populate Walkthroughs List for Finnish Section
function populateWalkthroughsSuomi() {
  // Helper function to populate tasks for a specific program
  function populateProgramTasksSuomi(program, containerId) {
    const container = document.getElementById(containerId);

    tasksSuomi[program].forEach((task) => {
      const taskItem = document.createElement("li");
      
      // Highlight task name
      const taskName = document.createElement("strong");
      taskName.textContent = task.task;
      taskItem.appendChild(taskName);

      const instructionsList = document.createElement("ul");
      task.instructions.forEach((instruction) => {
        const instructionItem = document.createElement("li");
        instructionItem.textContent = instruction;
        instructionsList.appendChild(instructionItem);
      });

      taskItem.appendChild(instructionsList);
      container.appendChild(taskItem);
    });
  }

  // Populate tasks for each program (Finnish IDs)
  populateProgramTasksSuomi("Word", "wordTehtävät");
  populateProgramTasksSuomi("Excel", "excelTehtävät");
  populateProgramTasksSuomi("PowerPoint", "powerpointTehtävät");
  populateProgramTasksSuomi("Teams", "teamsTehtävät");
}

// Initialize Walkthroughs List for Finnish Section on Page Load
document.addEventListener("DOMContentLoaded", () => {
  populateWalkthroughsSuomi(); // Populate the Finnish walkthroughs list
});

// Exhaustive tasks for Microsoft Word in Polish
const tasksPolski = {
  Word: [
    {
      task: "Dodaj tabelę",
      instructions: [
        "Otwórz Microsoft Word.",
        "Przejdź do zakładki 'Wstaw'.",
        "Kliknij 'Tabela' i wybierz rozmiar tabeli (np. 3x3).",
        "Tabela pojawi się w dokumencie."
      ]
    },
    {
      task: "Zapisz dokument",
      instructions: [
        "Kliknij przycisk 'Plik' w lewym górnym rogu.",
        "Wybierz 'Zapisz jako'.",
        "Wybierz lokalizację (np. Pulpit) i nadaj dokumentowi nazwę.",
        "Kliknij 'Zapisz', aby zapisać dokument."
      ]
    },
    {
      task: "Dodaj obraz",
      instructions: [
        "Umieść kursor w miejscu, gdzie chcesz dodać obraz.",
        "Przejdź do zakładki 'Wstaw'.",
        "Kliknij 'Obrazy' i wybierz obraz z komputera.",
        "Dostosuj rozmiar i pozycję obrazu w razie potrzeby."
      ]
    },
    {
      task: "Użyj sprawdzania pisowni",
      instructions: [
        "Kliknij zakładkę 'Recenzja'.",
        "Wybierz 'Pisownia i gramatyka'.",
        "Przejrzyj sugerowane zmiany i zaakceptuj je w razie potrzeby.",
        "Zapisz dokument po zakończeniu sprawdzania."
      ]
    },
    {
      task: "Kopiuj i wklej tekst",
      instructions: [
        "Zaznacz tekst, który chcesz skopiować, klikając i przeciągając myszką.",
        "Kliknij prawym przyciskiem myszy i wybierz 'Kopiuj'.",
        "Umieść kursor w miejscu, gdzie chcesz wkleić tekst.",
        "Kliknij prawym przyciskiem myszy i wybierz 'Wklej'."
      ]
    },
    {
      task: "Dostosuj styl i rozmiar czcionki",
      instructions: [
        "Zaznacz tekst, który chcesz edytować.",
        "Przejdź do zakładki 'Strona główna'.",
        "W grupie 'Czcionka' wybierz styl (np. Times New Roman) i rozmiar czcionki (np. 12).",
        "Kliknij, aby zastosować zmiany do zaznaczonego tekstu."
      ]
    },
    {
      task: "Zmień wyrównanie tekstu",
      instructions: [
        "Zaznacz akapit lub tekst, który chcesz wyrównać.",
        "Przejdź do zakładki 'Strona główna'.",
        "W grupie 'Akapit' wybierz jedną z opcji wyrównania: Do lewej, Wyśrodkuj, Do prawej lub Justuj.",
        "Tekst zostanie wyrównany zgodnie z wyborem."
      ]
    },
    {
      task: "Dodaj numerację stron",
      instructions: [
        "Przejdź do zakładki 'Wstaw'.",
        "Kliknij 'Numer strony' i wybierz lokalizację (np. u dołu na środku lub u góry po prawej).",
        "Numeracja stron zostanie automatycznie dodana do wszystkich stron."
      ]
    },
    {
      task: "Dodaj nagłówek",
      instructions: [
        "Przejdź do zakładki 'Wstaw'.",
        "Kliknij 'Nagłówek' i wybierz styl.",
        "Wpisz tekst, który ma pojawić się w nagłówku (np. tytuł dokumentu).",
        "Kliknij 'Zamknij nagłówek i stopkę', aby powrócić do dokumentu."
      ]
    },
    {
      task: "Dodaj stopkę",
      instructions: [
        "Przejdź do zakładki 'Wstaw'.",
        "Kliknij 'Stopka' i wybierz styl.",
        "Dodaj tekst lub elementy, które mają być wyświetlane w stopce.",
        "Kliknij 'Zamknij nagłówek i stopkę', aby zakończyć edycję."
      ]
    },
    {
      task: "Użyj funkcji Znajdź i Zamień",
      instructions: [
        "Przejdź do zakładki 'Strona główna'.",
        "Kliknij 'Zamień' w grupie 'Edytowanie'.",
        "Wpisz wyszukiwany tekst w polu 'Znajdź'.",
        "Wpisz tekst zamienny w polu 'Zamień na'.",
        "Kliknij 'Zamień wszystko', aby wprowadzić zmiany w całym dokumencie."
      ]
    },
    {
      task: "Podziel tekst na kolumny",
      instructions: [
        "Zaznacz tekst, który chcesz podzielić na kolumny.",
        "Przejdź do zakładki 'Układ'.",
        "Kliknij 'Kolumny' i wybierz liczbę kolumn (np. dwie lub trzy).",
        "Tekst zostanie rozdzielony na kolumny."
      ]
    },
    {
      task: "Ustaw marginesy",
      instructions: [
        "Przejdź do zakładki 'Układ'.",
        "Kliknij 'Marginesy' i wybierz opcję predefiniowaną (np. Normalne, Wąskie).",
        "Aby dostosować marginesy, wybierz 'Marginesy niestandardowe' i wprowadź konkretne wartości.",
        "Kliknij 'OK', aby zastosować zmiany."
      ]
    },
    {
      task: "Dodaj stronę tytułową",
      instructions: [
        "Przejdź do zakładki 'Wstaw'.",
        "Kliknij 'Strona tytułowa' w grupie 'Strony'.",
        "Wybierz szablon z listy rozwijanej.",
        "Dostosuj stronę tytułową, dodając własny tekst lub obraz."
      ]
    },
    {
      task: "Dodaj hiperłącze",
      instructions: [
        "Zaznacz tekst, który chcesz zmienić na hiperłącze.",
        "Kliknij prawym przyciskiem myszy i wybierz 'Hiperłącze'.",
        "Wprowadź adres URL w polu tekstowym.",
        "Kliknij 'OK', aby zastosować hiperłącze."
      ]
    },
    {
      task: "Śledź zmiany",
      instructions: [
        "Przejdź do zakładki 'Recenzja'.",
        "Kliknij 'Śledzenie zmian', aby aktywować funkcję.",
        "Edytuj dokument, a Word zaznaczy wszystkie wprowadzone zmiany.",
        "Zaakceptuj lub odrzuć zmiany, korzystając z opcji na pasku narzędzi."
      ]
    },
    {
      task: "Dodaj kształty",
      instructions: [
        "Przejdź do zakładki 'Wstaw'.",
        "Kliknij 'Kształty' i wybierz kształt (np. koło, strzałka, kwadrat).",
        "Kliknij i przeciągnij, aby narysować kształt w dokumencie.",
        "Dostosuj kształt, korzystając z opcji na pasku narzędzi."
      ]
    },
    {
      task: "Dodaj znak wodny",
      instructions: [
        "Przejdź do zakładki 'Projekt'.",
        "Kliknij 'Znak wodny' w grupie 'Tło strony'.",
        "Wybierz gotowy znak wodny lub dodaj własny.",
        "Znak wodny zostanie dodany do wszystkich stron dokumentu."
      ]
    },
    {
      task: "Użyj narzędzia dyktowania",
      instructions: [
        "Kliknij zakładkę 'Strona główna'.",
        "Wybierz ikonę 'Dyktowanie' w grupie 'Głos'.",
        "Wyraźnie wypowiadaj słowa, a Word przekształci je w tekst.",
        "Kliknij ponownie 'Dyktowanie', aby zatrzymać."
    ]}
  ],
  Excel: [
    {
      task: "Utwórz nowy skoroszyt",
      instructions: [
        "Otwórz Microsoft Excel na swoim komputerze lub urządzeniu.",
        "Kliknij zakładkę 'Plik' w lewym górnym rogu.",
        "Wybierz z rozwijanego menu 'Nowy'.",
        "Wybierz 'Pusty skoroszyt', aby rozpocząć od pustego arkusza.",
        "Kliknij 'Utwórz', aby otworzyć skoroszyt."
      ]
    },
    {
      task: "Wprowadź dane do komórek",
      instructions: [
        "Kliknij komórkę, do której chcesz wprowadzić dane.",
        "Wpisz dane za pomocą klawiatury.",
        "Naciśnij 'Enter', aby przejść do komórki poniżej, lub 'Tab', aby przejść do następnej komórki w wierszu.",
        "Powtarzaj kroki, aby wypełnić pozostałe komórki w razie potrzeby."
      ]
    },
    {
      task: "Formatuj komórki",
      instructions: [
        "Zaznacz komórki, które chcesz sformatować, klikając i przeciągając kursor nad nimi.",
        "Kliknij prawym przyciskiem myszy zaznaczone komórki i wybierz 'Formatuj komórki' z menu.",
        "W oknie dialogowym wybierz żądany format (np. Liczba, Waluta, Data).",
        "Kliknij 'OK', aby zastosować formatowanie."
      ]
    },
    {
      task: "Utwórz wykres",
      instructions: [
        "Zaznacz zakres komórek zawierających dane, które chcesz zobrazować.",
        "Przejdź do zakładki 'Wstaw' u góry ekranu.",
        "W grupie 'Wykresy' wybierz typ wykresu (np. Kolumnowy, Liniowy, Kołowy).",
        "Wykres pojawi się w arkuszu kalkulacyjnym.",
        "Kliknij i przeciągnij wykres, aby zmienić jego pozycję, jeśli to konieczne."
      ]
    },
    {
      task: "Sortuj dane",
      instructions: [
        "Zaznacz zakres danych, które chcesz posortować.",
        "Przejdź do zakładki 'Dane' w górnym menu.",
        "Kliknij 'Sortuj' i wybierz kryteria sortowania (np. rosnąco lub malejąco).",
        "Kliknij 'OK', aby zastosować sortowanie."
      ]
    },
    {
      task: "Filtruj dane",
      instructions: [
        "Zaznacz zakres komórek, do których chcesz zastosować filtry.",
        "Przejdź do zakładki 'Dane' u góry ekranu.",
        "Kliknij 'Filtr', aby włączyć opcje filtrowania dla każdej kolumny.",
        "Kliknij strzałkę rozwijaną w nagłówku kolumny, aby filtrować wartości według określonych kryteriów.",
        "Wybierz kryteria i kliknij 'OK', aby zobaczyć przefiltrowane dane."
      ]
    },
    {
      task: "Użyj formatowania warunkowego",
      instructions: [
        "Zaznacz zakres komórek, które chcesz sformatować warunkowo.",
        "Przejdź do zakładki 'Strona główna' i kliknij 'Formatowanie warunkowe' w grupie 'Style'.",
        "Wybierz regułę formatowania, taką jak 'Podświetl reguły komórek' lub 'Reguły góra/dół'.",
        "Określ kryteria formatowania (np. większe niż określona wartość).",
        "Kliknij 'OK', aby zastosować formatowanie warunkowe."
      ]
    },
    {
      task: "Zamroź okienka",
      instructions: [
        "Przejdź do zakładki 'Widok' u góry ekranu.",
        "Kliknij 'Zamroź okienka' w grupie 'Okno'.",
        "Wybierz opcję (np. 'Zamroź górny wiersz' lub 'Zamroź pierwszą kolumnę').",
        "Zamrożony wiersz lub kolumna pozostanie widoczny podczas przewijania arkusza."
      ]
    },
    {
      task: "Wstaw formuły",
      instructions: [
        "Kliknij komórkę, w której chcesz wyświetlić wynik formuły.",
        "Wpisz znak równości '=' aby rozpocząć formułę.",
        "Wprowadź formułę (np. '=SUM(A1:A5)' aby obliczyć sumę komórek A1 do A5).",
        "Naciśnij 'Enter', aby obliczyć i wyświetlić wynik w komórce."
      ]
    },
    {
      task: "Użyj narzędzia AutoSum",
      instructions: [
        "Zaznacz komórkę, w której chcesz wyświetlić sumę.",
        "Przejdź do zakładki 'Strona główna' u góry ekranu.",
        "W grupie 'Edytowanie' kliknij przycisk 'AutoSum' (symbol Σ).",
        "Excel automatycznie zasugeruje zakres komórek do zsumowania.",
        "Naciśnij 'Enter', aby potwierdzić i obliczyć sumę."
      ]
    },
    {
      task: "Wstaw tabelę przestawną",
      instructions: [
        "Zaznacz zakres danych, które chcesz analizować.",
        "Przejdź do zakładki 'Wstaw' u góry ekranu.",
        "Kliknij 'Tabela przestawna' w grupie 'Tabele'.",
        "Wybierz miejsce, w którym chcesz umieścić tabelę przestawną (np. nowy lub istniejący arkusz).",
        "Kliknij 'OK', aby utworzyć tabelę przestawną i rozpocząć układanie pól."
      ]
    },
    {
      task: "Dodaj komentarze do komórek",
      instructions: [
        "Kliknij prawym przyciskiem myszy komórkę, do której chcesz dodać komentarz.",
        "Wybierz 'Nowy komentarz' lub 'Wstaw komentarz' z menu.",
        "Wpisz swój komentarz w wyświetlonym polu tekstowym.",
        "Kliknij poza polem komentarza, aby zapisać go. Czerwona ikonka wskazuje, że komórka zawiera komentarz."
      ]
    },
    {
      task: "Użyj narzędzia Znajdź i Zamień",
      instructions: [
        "Przejdź do zakładki 'Strona główna' u góry ekranu.",
        "Kliknij 'Znajdź i zaznacz' w grupie 'Edytowanie', a następnie wybierz 'Zamień'.",
        "W oknie dialogowym wpisz tekst, którego szukasz, w polu 'Znajdź'.",
        "Wprowadź tekst zamienny w polu 'Zamień na'.",
        "Kliknij 'Zamień wszystko', aby zastosować zmiany w całym arkuszu."
      ]
    },
    {
      task: "Wydrukuj arkusz kalkulacyjny",
      instructions: [
        "Przejdź do zakładki 'Plik' w lewym górnym rogu ekranu.",
        "Wybierz 'Drukuj' z menu.",
        "Wybierz drukarkę i ustaw preferencje drukowania (np. liczba kopii, orientacja).",
        "Kliknij 'Drukuj', aby wydrukować arkusz kalkulacyjny."
    ]}
  ],
PowerPoint: [
    {
      task: "Utwórz nową prezentację",
      instructions: [
        "Otwórz Microsoft PowerPoint na swoim komputerze lub urządzeniu.",
        "Kliknij zakładkę 'Plik' w lewym górnym rogu ekranu.",
        "Wybierz z rozwijanego menu 'Nowy'.",
        "Wybierz 'Pusta prezentacja', aby zacząć od zera, lub wybierz szablon.",
        "Kliknij 'Utwórz', aby otworzyć nową prezentację."
      ]
    },
    {
      task: "Dodaj nowy slajd",
      instructions: [
        "Przejdź do zakładki 'Strona główna' u góry ekranu.",
        "W grupie 'Slajdy' kliknij 'Nowy slajd'.",
        "Wybierz układ slajdu z menu rozwijanego (np. Slajd tytułowy, Tytuł i zawartość).",
        "Nowy slajd pojawi się w panelu slajdów po lewej stronie."
      ]
    },
    {
      task: "Dodaj tekst do slajdu",
      instructions: [
        "Kliknij pole tekstowe na slajdzie, w którym chcesz dodać tekst.",
        "Wpisz tekst za pomocą klawiatury.",
        "Dostosuj styl, rozmiar i kolor czcionki w zakładce 'Strona główna' w grupie 'Czcionka'.",
        "Kliknij poza polem tekstowym, aby zakończyć edycję."
      ]
    },
    {
      task: "Dodaj obraz",
      instructions: [
        "Przejdź do zakładki 'Wstaw' u góry ekranu.",
        "W grupie 'Obrazy' kliknij 'Obraz'.",
        "Wybierz 'To urządzenie', aby dodać obraz z komputera.",
        "Przeglądaj swoje pliki, wybierz obraz i kliknij 'Wstaw'.",
        "Zmień rozmiar lub pozycję obrazu, klikając i przeciągając uchwyty."
      ]
    },
    {
      task: "Dodaj przejścia między slajdami",
      instructions: [
        "Wybierz slajd, do którego chcesz dodać przejście, w panelu slajdów po lewej stronie.",
        "Przejdź do zakładki 'Przejścia' u góry ekranu.",
        "W grupie 'Przejście do tego slajdu' wybierz efekt przejścia (np. Zanikanie, Wycieranie, Wypychanie).",
        "Dostosuj czas trwania i ustawienia przejścia, korzystając z dostępnych opcji.",
        "Kliknij 'Zastosuj do wszystkich', jeśli chcesz użyć tego samego przejścia dla wszystkich slajdów."
      ]
    },
    {
      task: "Dodaj animacje do obiektów",
      instructions: [
        "Kliknij obiekt (np. pole tekstowe, obraz, kształt), do którego chcesz dodać animację.",
        "Przejdź do zakładki 'Animacje' u góry ekranu.",
        "W grupie 'Animacje' wybierz efekt animacji (np. Pojawianie się, Przylot, Podskakiwanie).",
        "Zarządzaj kolejnością i czasem animacji w 'Panelu animacji'.",
        "Podglądaj animację, klikając 'Podgląd' na wstążce."
      ]
    },
    {
      task: "Dodaj wideo do slajdu",
      instructions: [
        "Przejdź do zakładki 'Wstaw' u góry ekranu.",
        "Kliknij 'Wideo' w grupie 'Multimedia'.",
        "Wybierz 'To urządzenie' i przeglądaj pliki wideo na swoim komputerze.",
        "Kliknij 'Wstaw', aby dodać wideo do slajdu.",
        "Dostosuj rozmiar lub pozycję wideo w razie potrzeby i użyj przycisków odtwarzania, aby je podglądać."
      ]
    },
    {
      task: "Dodaj notatki dla prelegenta",
      instructions: [
        "Kliknij slajd, do którego chcesz dodać notatki.",
        "Pod slajdem znajdź panel 'Notatki'.",
        "Kliknij w panelu 'Notatki' i wpisz swoje notatki prelegenta.",
        "Notatki będą widoczne tylko dla Ciebie podczas prezentacji, nie dla publiczności."
      ]
    },
    {
      task: "Zmień tło slajdu",
      instructions: [
        "Przejdź do zakładki 'Projekt' u góry ekranu.",
        "W grupie 'Dostosuj' kliknij 'Formatuj tło'.",
        "Wybierz opcję wypełnienia tła (np. Wypełnienie jednolite, Gradientowe, Obraz lub tekstura).",
        "Dostosuj ustawienia w razie potrzeby i kliknij 'Zastosuj do wszystkich', aby użyć tego samego tła dla wszystkich slajdów."
      ]
    },
    {
      task: "Użyj widoku wzorca slajdów",
      instructions: [
        "Przejdź do zakładki 'Widok' u góry ekranu.",
        "Kliknij 'Wzorzec slajdów' w grupie 'Widoki wzorców'.",
        "Edytuj wzorzec, aby zmienić układ, czcionki lub kolory dla wszystkich slajdów.",
        "Po zakończeniu kliknij 'Zamknij widok wzorca', aby wrócić do prezentacji."
      ]
    },
    {
      task: "Przećwicz czas slajdów",
      instructions: [
        "Przejdź do zakładki 'Pokaz slajdów' u góry ekranu.",
        "Kliknij 'Próba czasu' w grupie 'Ustawienia'.",
        "Ćwicz prezentowanie slajdów. PowerPoint zapisze czas spędzony na każdym slajdzie.",
        "Kliknij 'Tak', gdy zostaniesz poproszony o zapisanie czasów slajdów."
      ]
    },
    {
      task: "Eksportuj prezentację jako PDF",
      instructions: [
        "Przejdź do zakładki 'Plik' w lewym górnym rogu ekranu.",
        "Kliknij 'Eksportuj' z opcji w menu.",
        "Wybierz 'Utwórz dokument PDF/XPS' i kliknij 'Utwórz PDF/XPS'.",
        "Wybierz lokalizację zapisu pliku PDF, nadaj mu nazwę i kliknij 'Publikuj'."
      ]
    },
    {
      task: "Drukuj strony z notatkami",
      instructions: [
        "Przejdź do zakładki 'Plik' w lewym górnym rogu ekranu.",
        "Kliknij 'Drukuj' z menu.",
        "W sekcji 'Ustawienia' wybierz 'Strony notatek' jako układ wydruku.",
        "Wybierz liczbę slajdów na stronę (np. 2, 4 lub 6).",
        "Kliknij 'Drukuj', aby utworzyć strony z notatkami."
    ]}
  ],
Teams: [
    {
      task: "Zaplanuj spotkanie",
      instructions: [
        "Otwórz Microsoft Teams na swoim komputerze lub urządzeniu.",
        "Zaloguj się na swoje konto za pomocą poświadczeń.",
        "Przejdź do zakładki 'Kalendarz' w lewym panelu bocznym.",
        "Kliknij 'Nowe spotkanie' w prawym górnym rogu kalendarza.",
        "Wypełnij szczegóły spotkania, takie jak tytuł, uczestnicy, data i godzina.",
        "Kliknij 'Zapisz', aby zaplanować spotkanie w swoim kalendarzu."
      ]
    },
    {
      task: "Rozpocznij czat z kontaktem",
      instructions: [
        "Kliknij zakładkę 'Czat' w lewym panelu bocznym.",
        "Kliknij 'Nowy czat' na górze listy czatów.",
        "Wpisz imię lub adres e-mail osoby, z którą chcesz rozmawiać, w polu 'Do:'.",
        "Napisz swoją wiadomość w polu wiadomości i naciśnij 'Enter', aby ją wysłać."
      ]
    },
    {
      task: "Dołącz do spotkania",
      instructions: [
        "Przejdź do zakładki 'Kalendarz' w lewym panelu bocznym.",
        "Znajdź spotkanie, do którego chcesz dołączyć, w swoim kalendarzu.",
        "Kliknij zaproszenie na spotkanie, aby je otworzyć.",
        "Kliknij 'Dołącz' w prawym górnym rogu strony zaproszenia.",
        "Dostosuj ustawienia wideo i audio w razie potrzeby, a następnie kliknij 'Dołącz teraz', aby wejść na spotkanie."
      ]
    },
    {
      task: "Udostępnij ekran",
      instructions: [
        "Dołącz do spotkania lub rozpocznij je w Microsoft Teams.",
        "Kliknij 'Udostępnij' na pasku narzędzi u dołu ekranu.",
        "Wybierz ekran lub okno, które chcesz udostępnić, z dostępnych opcji.",
        "Twój ekran będzie widoczny dla wszystkich uczestników spotkania."
      ]
    },
    {
      task: "Zmień efekty tła",
      instructions: [
        "Dołącz do spotkania lub rozpocznij je w Microsoft Teams.",
        "Kliknij ikonę 'Więcej' (trzy kropki) na pasku narzędzi spotkania.",
        "Z menu rozwijanego wybierz 'Zastosuj efekty tła'.",
        "Wybierz wbudowane tło lub załaduj własny obraz tła.",
        "Kliknij 'Zastosuj', aby ustawić wybrane tło."
      ]
    },
    {
      task: "Nagrywaj spotkanie",
      instructions: [
        "Dołącz do spotkania lub rozpocznij je w Microsoft Teams.",
        "Kliknij ikonę 'Więcej' (trzy kropki) na pasku narzędzi spotkania.",
        "Z menu rozwijanego wybierz 'Rozpocznij nagrywanie'.",
        "Nagrywanie spotkania rozpocznie się, a wszyscy uczestnicy zostaną o tym powiadomieni.",
        "Kliknij 'Zatrzymaj nagrywanie' w tym samym menu, gdy skończysz. Nagranie zostanie zapisane automatycznie."
      ]
    },
    {
      task: "Utwórz zespół",
      instructions: [
        "Kliknij zakładkę 'Zespoły' w lewym panelu bocznym.",
        "Kliknij 'Dołącz do zespołu lub utwórz nowy' na dole listy zespołów.",
        "Wybierz 'Utwórz zespół' i wybierz typ zespołu, który chcesz utworzyć (np. Klasa, Personel, Inny).",
        "Wpisz nazwę i opis zespołu, a następnie kliknij 'Utwórz'.",
        "Dodaj członków do swojego zespołu, wpisując ich adresy e-mail lub imiona."
      ]
    },
    {
      task: "Opublikuj wiadomość w kanale zespołu",
      instructions: [
        "Przejdź do zakładki 'Zespoły' w lewym panelu bocznym.",
        "Wybierz zespół i kanał, w którym chcesz opublikować wiadomość.",
        "Kliknij pole wiadomości u dołu kanału.",
        "Napisz wiadomość i kliknij przycisk 'Wyślij' (ikona papierowego samolotu), aby ją opublikować."
      ]
    },
    {
      task: "Użyj tablicy w trakcie spotkania",
      instructions: [
        "Dołącz do spotkania lub rozpocznij je w Microsoft Teams.",
        "Kliknij 'Udostępnij' na pasku narzędzi u dołu ekranu.",
        "Z dostępnych opcji udostępniania wybierz 'Microsoft Whiteboard'.",
        "Użyj dostępnych narzędzi (np. pióro, gumka, tekst), aby współpracować z uczestnikami spotkania."
      ]
    },
    {
      task: "Zarządzaj powiadomieniami",
      instructions: [
        "Kliknij swój obrazek profilowy w prawym górnym rogu ekranu.",
        "Wybierz 'Ustawienia' z menu rozwijanego.",
        "Przejdź do zakładki 'Powiadomienia' w menu ustawień.",
        "Dostosuj preferencje powiadomień dla wiadomości, połączeń i spotkań.",
        "Kliknij 'Zapisz', aby zastosować zmiany."
      ]
    },
    {
      task: "Utwórz ankietę podczas spotkania",
      instructions: [
        "Dołącz do spotkania lub rozpocznij je w Microsoft Teams.",
        "Kliknij ikonę 'Więcej' (trzy kropki) na pasku narzędzi spotkania.",
        "Z menu rozwijanego wybierz 'Dodaj aplikację'.",
        "Wyszukaj 'Forms' i kliknij 'Dodaj'.",
        "Utwórz ankietę, wpisując pytanie i możliwe odpowiedzi, a następnie udostępnij ją uczestnikom."
      ]
    },
    {
      task: "Zakończ spotkanie",
      instructions: [
        "Podczas spotkania kliknij ikonę 'Więcej' (trzy kropki) na pasku narzędzi.",
        "Z menu rozwijanego wybierz 'Zakończ spotkanie'.",
        "Potwierdź, że chcesz zakończyć spotkanie dla wszystkich uczestników."
      ]
    }
  ]
};

// Populate Walkthroughs List for Polish Section
function populateWalkthroughsPolski() {
  // Helper function to populate tasks for a specific program
  function populateProgramTasksPolski(program, containerId) {
    const container = document.getElementById(containerId);

    tasksPolski[program].forEach((task) => {
      const taskItem = document.createElement("li");
      
      // Highlight task name
      const taskName = document.createElement("strong");
      taskName.textContent = task.task;
      taskItem.appendChild(taskName);

      const instructionsList = document.createElement("ul");
      task.instructions.forEach((instruction) => {
        const instructionItem = document.createElement("li");
        instructionItem.textContent = instruction;
        instructionsList.appendChild(instructionItem);
      });

      taskItem.appendChild(instructionsList);
      container.appendChild(taskItem);
    });
  }

  // Populate tasks for each program (Polish IDs)
  populateProgramTasksPolski("Word", "wordZadania");
  populateProgramTasksPolski("Excel", "excelZadania");
  populateProgramTasksPolski("PowerPoint", "powerpointZadania");
  populateProgramTasksPolski("Teams", "teamsZadania");
}

// Initialize Walkthroughs List for Polish Section on Page Load
document.addEventListener("DOMContentLoaded", () => {
  populateWalkthroughsPolski(); // Populate the Polish walkthroughs list
});
// Exhaustive tasks for Microsoft Word in Arabic
const tasksArabic = {
  Word: [
    {
      task: "إضافة جدول",
      instructions: [
        "افتح Microsoft Word.",
        "انتقل إلى علامة التبويب 'إدراج'.",
        "انقر فوق 'جدول' واختر حجم الجدول (مثل 3x3).",
        "سيظهر الجدول في المستند."
      ]
    },
    {
      task: "حفظ المستند",
      instructions: [
        "انقر فوق زر 'ملف' في الزاوية العلوية اليسرى.",
        "اختر 'حفظ باسم'.",
        "حدد الموقع (مثل سطح المكتب) وأعطِ اسمًا للمستند.",
        "انقر فوق 'حفظ' لحفظ المستند."
      ]
    },
    {
      task: "إضافة صورة",
      instructions: [
        "ضع المؤشر في المكان الذي تريد إدراج الصورة فيه.",
        "انتقل إلى علامة التبويب 'إدراج'.",
        "انقر فوق 'صور' واختر صورة من جهاز الكمبيوتر الخاص بك.",
        "عدل حجم الصورة أو موقعها إذا لزم الأمر."
      ]
    },
    {
      task: "استخدام التدقيق الإملائي",
      instructions: [
        "انقر فوق علامة التبويب 'مراجعة'.",
        "اختر 'التدقيق الإملائي والنحوي'.",
        "راجع الاقتراحات وأقبلها إذا لزم الأمر.",
        "احفظ المستند بعد الانتهاء من التدقيق."
      ]
    },
    {
      task: "نسخ ولصق النص",
      instructions: [
        "حدد النص الذي تريد نسخه عن طريق النقر والسحب بالماوس.",
        "انقر بزر الفأرة الأيمن واختر 'نسخ'.",
        "ضع المؤشر في المكان الذي تريد لصق النص فيه.",
        "انقر بزر الفأرة الأيمن واختر 'لصق'."
      ]
    },
    {
      task: "تعديل نمط وحجم الخط",
      instructions: [
        "حدد النص الذي تريد تحريره.",
        "انتقل إلى علامة التبويب 'الصفحة الرئيسية'.",
        "اختر نمط الخط (مثل Times New Roman) وحجم الخط (مثل 12) من مجموعة 'الخط'.",
        "انقر لتطبيق التعديلات على النص المحدد."
      ]
    },
    {
      task: "تغيير محاذاة النص",
      instructions: [
        "حدد الفقرة أو النص الذي تريد محاذاته.",
        "انتقل إلى علامة التبويب 'الصفحة الرئيسية'.",
        "اختر من مجموعة 'الفقرة' خيار المحاذاة: إلى اليسار، توسيط، إلى اليمين، أو ضبط.",
        "سيتم تطبيق المحاذاة المختارة على النص."
      ]
    },
    {
      task: "إضافة ترقيم الصفحات",
      instructions: [
        "انتقل إلى علامة التبويب 'إدراج'.",
        "انقر فوق 'رقم الصفحة' واختر الموقع (مثل أسفل الوسط أو أعلى اليمين).",
        "سيتم إضافة أرقام الصفحات تلقائيًا إلى جميع الصفحات."
      ]
    },
    {
      task: "إضافة رأس الصفحة",
      instructions: [
        "انتقل إلى علامة التبويب 'إدراج'.",
        "انقر فوق 'رأس الصفحة' واختر النمط.",
        "أضف النص الذي تريد ظهوره في الرأس (مثل عنوان المستند).",
        "انقر فوق 'إغلاق رأس وتذييل الصفحة' للعودة إلى المستند."
      ]
    },
    {
      task: "إضافة تذييل الصفحة",
      instructions: [
        "انتقل إلى علامة التبويب 'إدراج'.",
        "انقر فوق 'تذييل الصفحة' واختر النمط.",
        "أضف النص أو العناصر التي تريد ظهورها في التذييل.",
        "انقر فوق 'إغلاق رأس وتذييل الصفحة' للإنهاء."
      ]
    },
    {
      task: "استخدام وظيفة البحث والاستبدال",
      instructions: [
        "انتقل إلى علامة التبويب 'الصفحة الرئيسية'.",
        "انقر فوق 'استبدال' في مجموعة 'تحرير'.",
        "اكتب النص الذي تريد البحث عنه في حقل 'بحث عن'.",
        "اكتب النص الذي تريد استبداله في حقل 'استبدال بـ'.",
        "انقر فوق 'استبدال الكل' لتطبيق التعديلات في المستند."
      ]
    },
    {
      task: "تقسيم النص إلى أعمدة",
      instructions: [
        "حدد النص الذي تريد تقسيمه إلى أعمدة.",
        "انتقل إلى علامة التبويب 'تخطيط'.",
        "انقر فوق 'أعمدة' واختر عدد الأعمدة (مثل عمودين أو ثلاثة).",
        "سيتم تنظيم النص في أعمدة."
      ]
    },
    {
      task: "تعيين الهوامش",
      instructions: [
        "انتقل إلى علامة التبويب 'تخطيط'.",
        "انقر فوق 'هوامش' واختر خيارًا مُسبق الإعداد (مثل عادي، ضيق).",
        "لتخصيص الهوامش، اختر 'هوامش مخصصة' وأدخل القيم.",
        "انقر فوق 'موافق' لتطبيق التعديلات."
      ]
    },
    {
      task: "إضافة صفحة غلاف",
      instructions: [
        "انتقل إلى علامة التبويب 'إدراج'.",
        "انقر فوق 'صفحة غلاف' في مجموعة 'الصفحات'.",
        "اختر قالبًا من القائمة المنسدلة.",
        "عدل صفحة الغلاف بإضافة النص أو الصور الخاصة بك."
      ]
    },
    {
      task: "إضافة ارتباط تشعبي",
      instructions: [
        "حدد النص الذي تريد تحويله إلى ارتباط تشعبي.",
        "انقر بزر الفأرة الأيمن واختر 'ارتباط تشعبي'.",
        "أدخل عنوان URL في الحقل النصي.",
        "انقر فوق 'موافق' لتطبيق الارتباط التشعبي."
      ]
    },
    {
      task: "تعقب التغييرات",
      instructions: [
        "انتقل إلى علامة التبويب 'مراجعة'.",
        "انقر فوق 'تعقب التغييرات' لتفعيل الوظيفة.",
        "قم بتعديل المستند، وسيقوم Word بتحديد جميع التغييرات.",
        "اقبل أو ارفض التغييرات باستخدام الخيارات الموجودة في شريط الأدوات."
      ]
    },
    {
      task: "إضافة أشكال",
      instructions: [
        "انتقل إلى علامة التبويب 'إدراج'.",
        "انقر فوق 'الأشكال' واختر شكلاً (مثل دائرة، سهم، مربع).",
        "انقر واسحب لرسم الشكل في المستند.",
        "عدل الشكل باستخدام الخيارات الموجودة في شريط الأدوات."
      ]
    },
    {
      task: "إضافة علامة مائية",
      instructions: [
        "انتقل إلى علامة التبويب 'تصميم'.",
        "انقر فوق 'علامة مائية' في مجموعة 'خلفية الصفحة'.",
        "اختر علامة مائية مُعدة مسبقًا أو أضف علامتك الخاصة.",
        "سيتم تطبيق العلامة المائية على جميع صفحات المستند."
      ]
    },
    {
      task: "استخدام أداة الإملاء",
      instructions: [
        "انقر فوق علامة التبويب 'الصفحة الرئيسية'.",
        "اختر رمز 'الإملاء' في مجموعة 'الصوت'.",
        "تحدث بوضوح، وسيحول Word كلامك إلى نص.",
        "انقر فوق 'الإملاء' مرة أخرى لإيقافه."
    ]}
  ],
Excel: [
    {
      task: "إنشاء مصنف جديد",
      instructions: [
        "افتح Microsoft Excel على جهاز الكمبيوتر أو الجهاز الخاص بك.",
        "انقر فوق علامة التبويب 'ملف' في الزاوية العلوية اليسرى.",
        "اختر من القائمة المنسدلة 'جديد'.",
        "حدد 'مصنف فارغ' لبدء العمل بورقة فارغة.",
        "انقر فوق 'إنشاء' لفتح المصنف."
      ]
    },
    {
      task: "إدخال بيانات في الخلايا",
      instructions: [
        "انقر على الخلية التي ترغب في إدخال البيانات بها.",
        "اكتب البيانات باستخدام لوحة المفاتيح.",
        "اضغط على 'Enter' للانتقال إلى الخلية أدناه، أو 'Tab' للانتقال إلى الخلية التالية في الصف.",
        "كرر الخطوات لملء الخلايا الأخرى حسب الحاجة."
      ]
    },
    {
      task: "تنسيق الخلايا",
      instructions: [
        "حدد الخلايا التي ترغب في تنسيقها عن طريق النقر والسحب فوقها.",
        "انقر بزر الفأرة الأيمن على الخلايا المحددة واختر 'تنسيق الخلايا' من القائمة.",
        "في النافذة المنبثقة، اختر التنسيق المطلوب (مثل الرقم، العملة، التاريخ).",
        "انقر فوق 'موافق' لتطبيق التنسيق."
      ]
    },
    {
      task: "إنشاء مخطط",
      instructions: [
        "حدد نطاق الخلايا التي تحتوي على البيانات التي ترغب في تصورها.",
        "انتقل إلى علامة التبويب 'إدراج' في أعلى الشاشة.",
        "في مجموعة 'المخططات'، اختر نوع المخطط (مثل عمودي، خطي، دائري).",
        "سيظهر المخطط في ورقة العمل.",
        "انقر واسحب المخطط لتحريكه إذا لزم الأمر."
      ]
    },
    {
      task: "فرز البيانات",
      instructions: [
        "حدد نطاق البيانات الذي ترغب في فرزه.",
        "انتقل إلى علامة التبويب 'بيانات' في القائمة العلوية.",
        "انقر فوق 'فرز' واختر معايير الفرز (مثل تصاعدي أو تنازلي).",
        "انقر فوق 'موافق' لتطبيق الفرز."
      ]
    },
    {
      task: "تصفية البيانات",
      instructions: [
        "حدد نطاق الخلايا الذي ترغب في تطبيق الفلاتر عليه.",
        "انتقل إلى علامة التبويب 'بيانات' في أعلى الشاشة.",
        "انقر فوق 'تصفية' لتفعيل خيارات التصفية لكل عمود.",
        "انقر فوق سهم القائمة المنسدلة في رأس العمود لتصفية القيم بناءً على معايير معينة.",
        "اختر المعايير وانقر على 'موافق' لعرض البيانات المصفاة."
      ]
    },
    {
      task: "استخدام التنسيق الشرطي",
      instructions: [
        "حدد نطاق الخلايا الذي ترغب في تنسيقه بشكل شرطي.",
        "انتقل إلى علامة التبويب 'الصفحة الرئيسية' وانقر فوق 'التنسيق الشرطي' في مجموعة 'الأنماط'.",
        "اختر قاعدة التنسيق مثل 'تمييز قواعد الخلايا' أو 'قواعد أعلى/أسفل'.",
        "حدد معايير التنسيق (مثل أكبر من قيمة معينة).",
        "انقر فوق 'موافق' لتطبيق التنسيق الشرطي."
      ]
    },
    {
      task: "تجميد الأجزاء",
      instructions: [
        "انتقل إلى علامة التبويب 'عرض' في أعلى الشاشة.",
        "انقر فوق 'تجميد الأجزاء' في مجموعة 'نافذة'.",
        "اختر خيارًا (مثل 'تجميد الصف العلوي' أو 'تجميد العمود الأول').",
        "سيظل الصف أو العمود المحدد مرئيًا أثناء التمرير في ورقة العمل."
      ]
    },
    {
      task: "إدخال صيغ",
      instructions: [
        "انقر على الخلية التي تريد عرض نتيجة الصيغة فيها.",
        "اكتب علامة التساوي '=' لبدء الصيغة.",
        "أدخل الصيغة (مثل '=SUM(A1:A5)' لحساب مجموع الخلايا من A1 إلى A5).",
        "اضغط على 'Enter' لحساب وعرض النتيجة في الخلية."
      ]
    },
    {
      task: "استخدام أداة الجمع التلقائي",
      instructions: [
        "حدد الخلية التي ترغب في عرض المجموع بها.",
        "انتقل إلى علامة التبويب 'الصفحة الرئيسية' في أعلى الشاشة.",
        "في مجموعة 'تحرير' انقر فوق زر 'جمع تلقائي' (رمز Σ).",
        "سيقوم Excel تلقائيًا باقتراح نطاق خلايا لجمعها.",
        "اضغط على 'Enter' لتأكيد وحساب المجموع."
      ]
    },
    {
      task: "إدراج جدول محوري",
      instructions: [
        "حدد نطاق البيانات الذي ترغب في تحليله.",
        "انتقل إلى علامة التبويب 'إدراج' في أعلى الشاشة.",
        "انقر فوق 'جدول محوري' في مجموعة 'الجداول'.",
        "حدد المكان الذي ترغب في وضع الجدول المحوري فيه (مثل ورقة جديدة أو ورقة موجودة).",
        "انقر فوق 'موافق' لإنشاء الجدول المحوري وبدء ترتيب الحقول."
      ]
    },
    {
      task: "إضافة تعليقات إلى الخلايا",
      instructions: [
        "انقر بزر الفأرة الأيمن على الخلية التي ترغب في إضافة تعليق إليها.",
        "اختر 'تعليق جديد' أو 'إضافة تعليق' من القائمة.",
        "اكتب تعليقك في المربع النصي الذي يظهر.",
        "انقر خارج مربع التعليق لحفظه. ستظهر علامة حمراء صغيرة تشير إلى وجود تعليق في الخلية."
      ]
    },
    {
      task: "استخدام أداة البحث والاستبدال",
      instructions: [
        "انتقل إلى علامة التبويب 'الصفحة الرئيسية' في أعلى الشاشة.",
        "انقر فوق 'بحث وتحديد' في مجموعة 'تحرير' واختر 'استبدال'.",
        "في النافذة المنبثقة، اكتب النص الذي تبحث عنه في حقل 'البحث عن'.",
        "أدخل النص البديل في حقل 'الاستبدال بـ'.",
        "انقر فوق 'استبدال الكل' لتطبيق التغييرات على ورقة العمل بأكملها."
      ]
    },
    {
      task: "طباعة ورقة العمل",
      instructions: [
        "انتقل إلى علامة التبويب 'ملف' في الزاوية العلوية اليسرى من الشاشة.",
        "اختر 'طباعة' من القائمة.",
        "حدد الطابعة واضبط تفضيلات الطباعة (مثل عدد النسخ، الاتجاه).",
        "انقر فوق 'طباعة' لطباعة ورقة العمل."
    ]}
  ],
PowerPoint: [
    {
      task: "إنشاء عرض تقديمي جديد",
      instructions: [
        "افتح Microsoft PowerPoint على جهاز الكمبيوتر أو الجهاز الخاص بك.",
        "انقر فوق علامة التبويب 'ملف' في الزاوية العلوية اليسرى من الشاشة.",
        "اختر من القائمة المنسدلة 'جديد'.",
        "حدد 'عرض تقديمي فارغ' للبدء من الصفر أو اختر قالبًا.",
        "انقر فوق 'إنشاء' لفتح العرض التقديمي الجديد."
      ]
    },
    {
      task: "إضافة شريحة جديدة",
      instructions: [
        "انتقل إلى علامة التبويب 'الصفحة الرئيسية' في أعلى الشاشة.",
        "في مجموعة 'الشرائح'، انقر فوق 'شريحة جديدة'.",
        "اختر تخطيط الشريحة من القائمة المنسدلة (مثل شريحة عنوان، عنوان ومحتوى).",
        "ستظهر الشريحة الجديدة في لوحة الشرائح على الجانب الأيسر."
      ]
    },
    {
      task: "إضافة نص إلى الشريحة",
      instructions: [
        "انقر فوق مربع النص في الشريحة التي تريد إضافة النص إليها.",
        "اكتب النص باستخدام لوحة المفاتيح.",
        "قم بتعديل نمط الخط، حجمه، ولونه في علامة التبويب 'الصفحة الرئيسية' ضمن مجموعة 'الخط'.",
        "انقر خارج مربع النص لإنهاء التعديل."
      ]
    },
    {
      task: "إضافة صورة",
      instructions: [
        "انتقل إلى علامة التبويب 'إدراج' في أعلى الشاشة.",
        "في مجموعة 'الصور'، انقر فوق 'صورة'.",
        "اختر 'هذا الجهاز' لإدراج صورة من جهاز الكمبيوتر الخاص بك.",
        "تصفح ملفاتك، اختر الصورة، ثم انقر فوق 'إدراج'.",
        "قم بتغيير حجم الصورة أو موضعها عن طريق النقر وسحب المقابض."
      ]
    },
    {
      task: "إضافة انتقالات بين الشرائح",
      instructions: [
        "حدد الشريحة التي تريد إضافة انتقال إليها في لوحة الشرائح على الجانب الأيسر.",
        "انتقل إلى علامة التبويب 'الانتقالات' في أعلى الشاشة.",
        "في مجموعة 'انتقال إلى هذه الشريحة'، اختر تأثير الانتقال (مثل التلاشي، المسح، الدفع).",
        "قم بتعديل مدة الانتقال وإعداداته باستخدام الخيارات المتاحة.",
        "انقر فوق 'تطبيق على الكل' إذا كنت ترغب في استخدام نفس الانتقال لجميع الشرائح."
      ]
    },
    {
      task: "إضافة رسوم متحركة إلى الكائنات",
      instructions: [
        "انقر على الكائن (مثل مربع النص، الصورة، الشكل) الذي تريد إضافة الرسوم المتحركة إليه.",
        "انتقل إلى علامة التبويب 'الرسوم المتحركة' في أعلى الشاشة.",
        "في مجموعة 'الرسوم المتحركة'، اختر تأثير الرسوم المتحركة (مثل الظهور، الطيران، القفز).",
        "قم بإدارة ترتيب وتوقيت الرسوم المتحركة في 'لوحة الرسوم المتحركة'.",
        "قم بمعاينة الرسوم المتحركة بالنقر فوق 'معاينة' على الشريط."
      ]
    },
    {
      task: "إضافة فيديو إلى الشريحة",
      instructions: [
        "انتقل إلى علامة التبويب 'إدراج' في أعلى الشاشة.",
        "انقر فوق 'فيديو' في مجموعة 'الوسائط'.",
        "اختر 'هذا الجهاز' وابحث عن ملفات الفيديو على جهاز الكمبيوتر الخاص بك.",
        "انقر فوق 'إدراج' لإضافة الفيديو إلى الشريحة.",
        "قم بتعديل حجم الفيديو أو موضعه حسب الحاجة واستخدم أزرار التشغيل لمعاينته."
      ]
    },
    {
      task: "إضافة ملاحظات للمتحدث",
      instructions: [
        "انقر فوق الشريحة التي تريد إضافة ملاحظات إليها.",
        "أسفل الشريحة، ابحث عن لوحة 'الملاحظات'.",
        "انقر في لوحة 'الملاحظات' وأدخل ملاحظاتك للمتحدث.",
        "ستظهر الملاحظات لك فقط أثناء العرض، وليس للجمهور."
      ]
    },
    {
      task: "تغيير خلفية الشريحة",
      instructions: [
        "انتقل إلى علامة التبويب 'تصميم' في أعلى الشاشة.",
        "في مجموعة 'تخصيص'، انقر فوق 'تنسيق الخلفية'.",
        "اختر خيار تعبئة الخلفية (مثل التعبئة الصلبة، التدرج اللوني، الصورة أو النسيج).",
        "قم بتعديل الإعدادات حسب الحاجة وانقر فوق 'تطبيق على الكل' إذا كنت ترغب في استخدام نفس الخلفية لجميع الشرائح."
      ]
    },
    {
      task: "استخدام عرض الشريحة الرئيسي",
      instructions: [
        "انتقل إلى علامة التبويب 'عرض' في أعلى الشاشة.",
        "انقر فوق 'عرض الشريحة الرئيسي' في مجموعة 'عرض رئيسي'.",
        "قم بتحرير العرض الرئيسي لتغيير التخطيط، الخطوط، أو الألوان لجميع الشرائح.",
        "عند الانتهاء، انقر فوق 'إغلاق عرض الرئيسي' للعودة إلى العرض التقديمي."
      ]
    },
    {
      task: "التدرب على توقيت الشرائح",
      instructions: [
        "انتقل إلى علامة التبويب 'عرض الشرائح' في أعلى الشاشة.",
        "انقر فوق 'التوقيت التجريبي' في مجموعة 'إعداد'.",
        "قم بممارسة عرض الشرائح. سيقوم PowerPoint بتسجيل الوقت الذي تقضيه على كل شريحة.",
        "انقر فوق 'نعم' عند مطالبتك بحفظ توقيت الشرائح."
      ]
    },
    {
      task: "تصدير العرض التقديمي كملف PDF",
      instructions: [
        "انتقل إلى علامة التبويب 'ملف' في الزاوية العلوية اليسرى من الشاشة.",
        "انقر فوق 'تصدير' من خيارات القائمة.",
        "حدد 'إنشاء مستند PDF/XPS' ثم انقر فوق 'إنشاء PDF/XPS'.",
        "حدد موقع حفظ ملف PDF، قم بتسمية الملف وانقر فوق 'نشر'."
      ]
    },
    {
      task: "طباعة صفحات الملاحظات",
      instructions: [
        "انتقل إلى علامة التبويب 'ملف' في الزاوية العلوية اليسرى من الشاشة.",
        "انقر فوق 'طباعة' من القائمة.",
        "في قسم 'الإعدادات'، اختر 'صفحات الملاحظات' كتنسيق للطباعة.",
        "حدد عدد الشرائح لكل صفحة (مثل 2، 4، أو 6).",
        "انقر فوق 'طباعة' لإنشاء صفحات الملاحظات."
    ]}
  ],
Teams: [
    {
      task: "جدولة اجتماع",
      instructions: [
        "افتح Microsoft Teams على جهاز الكمبيوتر أو الجهاز الخاص بك.",
        "قم بتسجيل الدخول إلى حسابك باستخدام بيانات الاعتماد الخاصة بك.",
        "انتقل إلى علامة التبويب 'التقويم' في اللوحة الجانبية اليسرى.",
        "انقر فوق 'اجتماع جديد' في الزاوية اليمنى العليا من التقويم.",
        "املأ تفاصيل الاجتماع مثل العنوان، المشاركين، التاريخ والوقت.",
        "انقر فوق 'حفظ' لجدولة الاجتماع في التقويم الخاص بك."
      ]
    },
    {
      task: "ابدأ محادثة مع جهة اتصال",
      instructions: [
        "انقر فوق علامة التبويب 'الدردشة' في اللوحة الجانبية اليسرى.",
        "انقر فوق 'دردشة جديدة' في أعلى قائمة الدردشات.",
        "أدخل اسم الشخص أو عنوان البريد الإلكتروني الذي تريد التحدث معه في حقل 'إلى:'.",
        "اكتب رسالتك في حقل الرسالة واضغط 'Enter' لإرسالها."
      ]
    },
    {
      task: "الانضمام إلى اجتماع",
      instructions: [
        "انتقل إلى علامة التبويب 'التقويم' في اللوحة الجانبية اليسرى.",
        "ابحث عن الاجتماع الذي تريد الانضمام إليه في التقويم الخاص بك.",
        "انقر فوق دعوة الاجتماع لفتحها.",
        "انقر فوق 'انضمام' في الزاوية اليمنى العليا من صفحة الدعوة.",
        "اضبط إعدادات الفيديو والصوت حسب الحاجة، ثم انقر فوق 'انضم الآن' لدخول الاجتماع."
      ]
    },
    {
      task: "مشاركة شاشتك",
      instructions: [
        "انضم إلى اجتماع أو ابدأه في Microsoft Teams.",
        "انقر فوق 'مشاركة' على شريط الأدوات أسفل الشاشة.",
        "اختر الشاشة أو النافذة التي تريد مشاركتها من الخيارات المتاحة.",
        "ستكون شاشتك مرئية لجميع المشاركين في الاجتماع."
      ]
    },
    {
      task: "تغيير تأثيرات الخلفية",
      instructions: [
        "انضم إلى اجتماع أو ابدأه في Microsoft Teams.",
        "انقر فوق رمز 'المزيد' (ثلاث نقاط) على شريط الأدوات الخاص بالاجتماع.",
        "اختر 'تطبيق تأثيرات الخلفية' من القائمة المنسدلة.",
        "حدد خلفية مدمجة أو قم بتحميل صورة خلفية مخصصة.",
        "انقر فوق 'تطبيق' لتعيين الخلفية المختارة."
      ]
    },
    {
      task: "تسجيل الاجتماع",
      instructions: [
        "انضم إلى اجتماع أو ابدأه في Microsoft Teams.",
        "انقر فوق رمز 'المزيد' (ثلاث نقاط) على شريط الأدوات الخاص بالاجتماع.",
        "اختر 'بدء التسجيل' من القائمة المنسدلة.",
        "سيبدأ تسجيل الاجتماع وسيتم إعلام جميع المشاركين.",
        "انقر فوق 'إيقاف التسجيل' في نفس القائمة عند الانتهاء. سيتم حفظ التسجيل تلقائيًا."
      ]
    },
    {
      task: "إنشاء فريق",
      instructions: [
        "انقر فوق علامة التبويب 'الفرق' في اللوحة الجانبية اليسرى.",
        "انقر فوق 'انضم إلى فريق أو إنشاء فريق جديد' في أسفل قائمة الفرق.",
        "اختر 'إنشاء فريق' وحدد نوع الفريق الذي تريد إنشاؤه (مثل الفصل، الموظفون، آخر).",
        "أدخل اسم الفريق والوصف ثم انقر فوق 'إنشاء'.",
        "أضف الأعضاء إلى فريقك عن طريق إدخال عناوين بريدهم الإلكتروني أو أسمائهم."
      ]
    },
    {
      task: "نشر رسالة في قناة الفريق",
      instructions: [
        "انتقل إلى علامة التبويب 'الفرق' في اللوحة الجانبية اليسرى.",
        "حدد الفريق والقناة التي تريد نشر الرسالة فيها.",
        "انقر على مربع الرسالة أسفل القناة.",
        "اكتب رسالتك وانقر فوق زر 'إرسال' (رمز الطائرة الورقية) لنشرها."
      ]
    },
    {
      task: "استخدام اللوحة البيضاء أثناء الاجتماع",
      instructions: [
        "انضم إلى اجتماع أو ابدأه في Microsoft Teams.",
        "انقر فوق 'مشاركة' على شريط الأدوات أسفل الشاشة.",
        "اختر 'Microsoft Whiteboard' من خيارات المشاركة المتاحة.",
        "استخدم الأدوات المتوفرة (مثل القلم، الممحاة، النص) للتعاون مع المشاركين."
      ]
    },
    {
      task: "إدارة الإشعارات",
      instructions: [
        "انقر على صورة ملفك الشخصي في الزاوية اليمنى العليا من الشاشة.",
        "اختر 'الإعدادات' من القائمة المنسدلة.",
        "انتقل إلى علامة التبويب 'الإشعارات' في قائمة الإعدادات.",
        "قم بتعديل تفضيلات الإشعارات للرسائل والمكالمات والاجتماعات.",
        "انقر فوق 'حفظ' لتطبيق التغييرات."
      ]
    },
    {
      task: "إنشاء استطلاع أثناء الاجتماع",
      instructions: [
        "انضم إلى اجتماع أو ابدأه في Microsoft Teams.",
        "انقر فوق رمز 'المزيد' (ثلاث نقاط) على شريط الأدوات الخاص بالاجتماع.",
        "اختر 'إضافة تطبيق' من القائمة المنسدلة.",
        "ابحث عن 'Forms' وانقر فوق 'إضافة'.",
        "قم بإنشاء استطلاعك عن طريق كتابة سؤال وخيارات الإجابة، ثم شاركه مع المشاركين."
      ]
    },
    {
      task: "إنهاء الاجتماع",
      instructions: [
        "أثناء الاجتماع، انقر فوق رمز 'المزيد' (ثلاث نقاط) على شريط الأدوات.",
        "اختر 'إنهاء الاجتماع' من القائمة المنسدلة.",
        "أكد أنك تريد إنهاء الاجتماع لجميع المشاركين."
      ]
    }
  ]
};

// Populate Walkthroughs List for Arabic Section
function populateWalkthroughsArabic() {
  // Helper function to populate tasks for a specific program
  function populateProgramTasksArabic(program, containerId) {
    const container = document.getElementById(containerId);

    tasksArabic[program].forEach((task) => {
      const taskItem = document.createElement("li");
      
      // Highlight task name
      const taskName = document.createElement("strong");
      taskName.textContent = task.task;
      taskItem.appendChild(taskName);

      const instructionsList = document.createElement("ul");
      task.instructions.forEach((instruction) => {
        const instructionItem = document.createElement("li");
        instructionItem.textContent = instruction;
        instructionsList.appendChild(instructionItem);
      });

      taskItem.appendChild(instructionsList);
      container.appendChild(taskItem);
    });
  }

  // Populate tasks for each program (Arabic IDs)
  populateProgramTasksArabic("Word", "wordMawahid");
  populateProgramTasksArabic("Excel", "excelMawahid");
  populateProgramTasksArabic("PowerPoint", "powerpointMawahid");
  populateProgramTasksArabic("Teams", "teamsMawahid");
}

// Initialize Walkthroughs List for Arabic Section on Page Load
document.addEventListener("DOMContentLoaded", () => {
  populateWalkthroughsArabic(); // Populate the Arabic walkthroughs list
});
