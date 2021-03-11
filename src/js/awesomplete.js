// Import Awesomplete
import Awesomplete from "awesomplete";

// Custom Awesomplete scripts
document.addEventListener("DOMContentLoaded", function() {

	var inputHero = document.getElementById("search-hero");
	var inputNavbar = document.getElementById("search-navbar");

  var list = [
        { label: "Do the prices shown in online store include sales tax?",  value: "article.html" },
        { label: "What happens if I change my mind?",                       value: "article.html" },
        { label: "Which payment methods do you offer?",                     value: "article.html" },
        { label: "How long does it take to deliver my package?", 	          value: "article.html" },
        { label: "What retuns options do you offer?", 					            value: "article.html" }
      ];

  if (inputHero) {
    inputHero.addEventListener("awesomplete-selectcomplete", function(e) {
      window.location.href = e.text.value;
    }, false);
    
    new Awesomplete(inputHero, {
      autoFirst: true,
      list: list,
      replace: function(suggestion) {
        this.input.value = suggestion.label;
      }
    });
  }

  if (inputNavbar) {
    inputNavbar.addEventListener("awesomplete-selectcomplete", function(e) {
      window.location.href = e.text.value;
    }, false);
    
    new Awesomplete(inputNavbar, {
      autoFirst: true,
      list: list,
      replace: function(suggestion) {
        this.input.value = suggestion.label;
      }
    });
  }
  
});