
(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    var helloSpeaker = {
        speakWord: "Hello",
        speak: function(name) {
            console.log(this.speakWord + " " + name);
        }
    };

    var byeSpeaker = {
        speakWord: "Good Bye",
        speak: function(name) {
            console.log(this.speakWord + " " + name);
        }
    };

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        
        if (firstLetter === 'j' || names[i] === "Jen") {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
