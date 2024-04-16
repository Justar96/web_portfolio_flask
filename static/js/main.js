const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

var btn = document.getElementById('btn')
var toggleButtonLeft = document.getElementById('toggle-btn-left')
var toggleButtonRight = document.getElementById('toggle-btn-right')

var x = document.getElementById("1st-page");
var y = document.getElementById("2nd-page");

function leftClick() {
  btn.style.left = '0';
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.display = "none"
    toggleButtonLeft.style.color = '#f0f0f0'
    toggleButtonRight.style.color = '#030303'

  } else {
    x.style.display = "flex";
    y.style.display = "none"
    toggleButtonLeft.style.color = '#f0f0f0'
    toggleButtonRight.style.color = '#030303'

  }
}
function rightClick() {
  btn.style.left = '50%'
  if (y.style.display === "none") {
    y.style.display = "flex";
    x.style.display = "none";
    toggleButtonLeft.style.color = '#030303'
    toggleButtonRight.style.color = '#f0f0f0'
  } else {
    y.style.display = "flex";
    x.style.display = "none";
    toggleButtonLeft.style.color = '#030303'
    toggleButtonRight.style.color = '#f0f0f0'
  }
}

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About me',
    width: '400px',
    height: '400px',
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    x: "50",
    y: "50",
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#333')
    }
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact me',
    width: '300px',
    height: '400px',
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    x: "300",
    y: "300",
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#333')
    }
  })
})

function pageToggle() {
  var x = document.getElementById("1st-page");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function doDate() {
  var str = "";

  var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

  var now = new Date();

  str += days[now.getDay()] + ", " + String(now.getDate()).padStart(2, "0") + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0") + ":" + String(now.getSeconds()).padStart(2, "0");
  document.getElementById("todaysDate").innerHTML = str;
}
setInterval(doDate, 1000);

// main function

document.addEventListener('DOMContentLoaded', function () {

  document.getElementsByTagName('form')[0].onsubmit = function (evt) {
    evt.preventDefault(); // Preventing the form from submitting
    checkWord(); // Do your magic and check the entered word/sentence
    window.scrollTo(0, 150);
  }

  // Get the focus to the text input to enter a word right away.
  function forceFocus() {
  document.getElementById('terminalTextInput').focus();
  }
  setInterval(forceFocus, 50);

  // Getting the text from the input
  var textInputValue = document.getElementById('terminalTextInput').value.trim();

  //Getting the text from the results div
  var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;

  // Clear text input
  var clearInput = function () {
    document.getElementById('terminalTextInput').value = "";
  }

  // Scrtoll to the bottom of the resulAts div
  var scrollToBottomOfResults = function () {
    var terminalResultsDiv = document.getElementById('terminalReslutsCont');
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  }

  // Scroll to the bottom of the results
  scrollToBottomOfResults();

  // Add text to the results div
  var addTextToResults = function (textToAdd) {
    document.getElementById('terminalReslutsCont').innerHTML += "<p id='terminalText'>" + textToAdd + "</p>";
    scrollToBottomOfResults();
  }
  
  // Getting the list of keywords for help & posting it to the screen
  var postHelpList = function () {
    // Array of all the help keywords
    var helpKeyWords = [
      "- 'about'&nbsp;&nbsp;&nbsp;&nbsp;: about Nalongkorn P.",
      "- 'github'&nbsp;&nbsp;&nbsp;: link to all my offline projects.",
      "- 'leetcode'&nbsp;: link to my leetcode profile.",
      "- 'linkdin'&nbsp;&nbsp;: link to my linkdin profile.",
      "- 'email'&nbsp;&nbsp;&nbsp;&nbsp;: send an email to me.",
      "- 'phone'&nbsp;&nbsp;&nbsp;&nbsp;: to call me.",
      "- 'clear'&nbsp;&nbsp;&nbsp;&nbsp;: clear the terminal."
    ].join('<br>');
    addTextToResults(helpKeyWords);
  }

  var clearTerminal = function () {
    document.getElementById('terminalReslutsCont').innerHTML = "";
  }

  var removePlaceholder = function () {
    // Access the input element
    var input = document.getElementById('terminalTextInput');

    // Set the placeholder attribute to an empty string
    input.placeholder = '';
  }
  var addPlaceholder = function () {
    // Access the input element
    var input = document.getElementById('terminalTextInput');

    // Set the placeholder attribute to an empty string
    input.placeholder = 'Try typing help...';
  }

  // Opening links in a new window
  var openLinkInNewWindow = function (linkToOpen) {
    window.open(linkToOpen, '_blank');
    clearInput();
  }

  // Having a specific text reply to specific strings
  var textReplies = function () {
    switch (textInputValueLowerCase) {
      // replies
      case "about":
        clearInput();
        removePlaceholder();
        addTextToResults("Hi.my name is Guitar and i have been programming for 4 months now and some of the language that I am fluent in include JavaScript , Python");
        break;

      case "github":
        clearInput();
        removePlaceholder();
        addTextToResults("<i>The URL " + "<b>" + 'https://github.com/Justar96' + "</b>" + " should be opened now.</i>");
        openLinkInNewWindow('https://github.com/Justar96');
        break;

      case "leetcode":
        clearInput();
        removePlaceholder();
        addTextToResults("<i>The URL " + "<b>" + 'https://leetcode.com/justar1996/' + "</b>" + " should be opened now.</i>");
        openLinkInNewWindow('https://leetcode.com/justar1996/');
        break;

      case "linkdin":
        clearInput();
        removePlaceholder();
        addTextToResults("<i>The URL " + "<b>" + 'https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo' + "</b>" + " should be opened now.</i>");
        openLinkInNewWindow('https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo');
        break;

      case "email":
        clearInput();
        removePlaceholder();
        addTextToResults("nalongkon1996@gmail.com");
        break;

      case "phone":
        clearInput();
        removePlaceholder();
        addTextToResults("TH : 090-9091325");
        break;

      case "help":
        clearInput();
        removePlaceholder();
        postHelpList();
        break;

      case "clear":
        clearInput();
        addPlaceholder();
        clearTerminal();

        break;

      default:
        clearInput();
        addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
        break;
    }
  }

  // Main function to check the entered text and assign it to the correct function
  var checkWord = function () {
    textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a variable
    textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string

    if (textInputValue != "") { //checking if text was entered
      addTextToResults("<p class='userEnteredText'>guest@begetar-terminal ~ % " + textInputValue + "</p>");
      if (textInputValueLowerCase.substr(0, 5) == "open ") { //if the first 5 characters = open + space
        addTextToResults("<i>The URL " + "<b>" + textInputValue.substr(5) + "</b>" + " should be opened now.</i>");
      } else {
        textReplies();
      }
    }
  };

});