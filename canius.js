
// selects the html section element which contains the new article
const section = document.querySelector(
    'section.collapsible-section.ds-layout[data-selection-id="topstories"]'
);

// deletes said section
if (section) {
    section.remove();
} 