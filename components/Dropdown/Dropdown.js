class Dropdown {
  constructor(element) {
    this.element = element;
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent();
    })
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    const DROPDOWN_HIDDEN_CLASS = 'dropdown-hidden'
    if (this.content.classList.contains(DROPDOWN_HIDDEN_CLASS)) { 
      this.content.classList.remove(DROPDOWN_HIDDEN_CLASS);
    } else {
      this.content.classList.add(DROPDOWN_HIDDEN_CLASS);
    }
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));