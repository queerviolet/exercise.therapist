"use strict";  // always do this. http://eloquentjavascript.net/08_error.html#p_NMLSAIO3JD

// Therapy is a Javascript module.
var Therapy = (function() {
  // session is a therapy-session element.
  var Therapist = function(session) {
    this.session = session;
  }
 
  Therapist.prototype.listen = function(feelings) {
    // TODO: WRITE ME!
    // The therapist should respond to the user's feelings.
    // this.session.say(something)...
  };


  var fmt = function(str, values) {
    // Stretch goal: Write this function. See section 4 in README.js.md.
    // TODO: return str.replace(some regexp, some function);
  };


  // Session is a class that extends HTMLElement.
  // It describes the behavior of a <therapy-session> element.
  var Session = Object.create(HTMLElement.prototype);

  // Show a message from the therapist.
  // Appends and returns a therapy-msg node.
  Session.say = function(msg) {
    return this.append('therapist', msg);
  };

  // Show a message from the user.
  // Appends and returns a therapy-msg node.
  Session.hear = function(msg) {
    return this.append('user', msg);
  };

  // Create and append a <therapy-msg> and scroll the session to the bottom.
  //
  // from should be 'patient' or 'therapist', msg is the message content.
  // Returns the <therapy-msg>
  Session.append = function(from, msg) {
    var node = document.createElement('therapy-msg');
    node.textContent = msg;
    node.setAttribute('class', 'from-' + from);
    this.insertBefore(node, this.form);
    this.scrollTop = this.scrollHeight;
    return node;
  };

  // Called by the browser when a <therapy-session> tag is created.
  Session.createdCallback = function() {
    this.form = this.querySelector('form');
    this.feelings = this.querySelector('input[type=text]');
    this.therapist = new Therapist(this);
    var self = this;
    this.form.addEventListener('submit', function(event) {
      event.preventDefault();
      var feelings = self.feelings.value;
      self.feelings.value = '';
      self.hear(feelings);
      self.therapist.listen(feelings);
    });
  };

  // Return the contents of our Therapy module.
  return {
    Therapist: Therapist,
    // document.registerElement tells the browser to use our Session class for
    // <therapy-session> elements.
    Session: document.registerElement('therapy-session', { prototype: Session }),
  };
})();