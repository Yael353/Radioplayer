// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
const element = document.getElementById("channels");
const ulEl = document.getElementById("ul");

async function getChannel() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();

  // Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.
  data.channels.forEach((channel) => {
    const liEl = document.createElement("li");

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", channel.image);
    liEl.appendChild(imgEl);

    const textAudioContainer = document.createElement("div");
    textAudioContainer.classList.add("text-audio-container");

    const pEl = document.createElement("p");
    pEl.innerHTML = channel.name;
    textAudioContainer.appendChild(pEl);

    const audioEl = document.createElement("audio");
    audioEl.controls = true;

    const sourceEl = document.createElement("source");
    sourceEl.setAttribute("src", channel.liveaudio.url);
    sourceEl.setAttribute("type", "audio/mpeg");
    audioEl.appendChild(sourceEl);

    textAudioContainer.appendChild(audioEl);

    liEl.appendChild(textAudioContainer);

    ulEl.appendChild(liEl);
  });

  // Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
  // <audio controls>
  //   <source src="" type="audio/mpeg" />
  // </audio>
}
getChannel();
