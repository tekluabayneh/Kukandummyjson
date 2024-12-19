const backtoHome = $(".backtoHome");
const apkiekey_home = $(".apkie-key_home");

gsap.to(backtoHome, {
  yoyo: true,
  duration: 1,
  repeat: -1,
  scale: 1.1,
  ease: "bounce",
  color: "red",
});

gsap.from(apkiekey_home, {
  opacity: 0,
  duration: 1,
  y: 100,
  delay: 0.3,
});

document
  .getElementById("apiKeyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const apiKey =
      "sk-" +
      Math.random().toString(36).substr(2, 16) +
      "-" +
      Math.random().toString(36).substr(2, 8);

    // Display the API Key
    document.getElementById("output").classList.remove("hidden");
    document.getElementById("apiKey").textContent = apiKey;
  });
