const messages = [
  "You will receive a phone call from yourself in the future.",
  "Your next Career: Mime.",
  "Your gas problem is not going unnoticed.",
  "It's time for a good, long look into your soul.",
  "You may find something entertaining you can use or at least will make you smile if you go through some old boxes or junk in your house this week!",
  "You will have a chance encounter with romance today so take a bath for god's sake.",
  "A journey of a thousand miles can begin with a single step, but you'll go farther if you simply jump to conclusions.",
  "Your dementia finally gets you somewhere.",
];

const getRandomMessge = () => {
  let randomMessage = Math.floor(Math.random() * messages.length);
  document.getElementById("randomMessage").innerHTML =
    '<em>"' + messages[randomMessage] + '"</em>';
};
