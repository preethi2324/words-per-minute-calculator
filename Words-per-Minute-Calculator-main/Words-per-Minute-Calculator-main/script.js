const paragraphs = [
  "As I sat by the riverbank, I watched the water flow peacefully downstream. The sun was setting behind the trees, casting a warm golden light over everything. I took a deep breath and let the fresh air fill my lungs.It was moments like these that reminded me of the simple joys in life. I closed my eyes and listened to the gentle rustling of leaves in the wind. For a moment, I forgot about the worries and stresses of everyday life. All that mattered was the present moment, and I was content just being there. I thought about the people in my life who brought me joy, the memories I cherished, and the dreams I still had yet to fulfill. Life was a journey, and it was up to me to make the most of it. With renewed determination, I stood up and continued on my path, eager to see where it would take me next.I walked for what felt like hours, lost in thought and contemplation. The darkness had descended, and the stars had come out. I could hear the sound of crickets chirping in the distance and the rustling of nocturnal animals moving about. Despite the serene surroundings, my mind was racing with thoughts and emotions. I wondered about the future, the challenges and opportunities that awaited me.",
  " I knew that life was unpredictable and that anything could happen at any moment. I had to be ready to face whatever came my way, and that meant staying focused, motivated, and resilient.  As I continued walking, I felt a sense of clarity wash over me. I realized that life was not about waiting for things to happen but making them happen. I needed to be proactive, take risks, and pursue my dreams with unwavering passion. I made a mental note to start planning for the future, to set goals and take concrete steps towards achieving them. I knew it wouldn't be easy, but nothing worthwhile ever was.  Eventually, I reached my destination, a small cottage nestled in a clearing in the woods. The lights were on, and I could hear the sound of laughter and music coming from inside. As I approached, I was greeted by the warm embrace of my loved ones. We spent the rest of the night sharing stories, enjoying good food and company, and cherishing the moments we had together. It was a reminder that life was not just about achieving goals but also about building relationships and creating memories. As I drifted off to sleep that night, I felt grateful for everything in my life and excited about what the future held.",
  "The city was bustling with activity as I made my way through the crowded streets. People of all shapes and sizes rushed past me, each with their own agenda and purpose. The noise was deafening, with cars honking, music blaring, and chatter filling the air. Despite the chaos, I felt a sense of excitement and adventure. There was something thrilling about being in the midst of it all, witnessing the pulse of a city in motion. As I walked, I took in the sights and sounds around me. The skyscrapers loomed above, casting long shadows over the streets. The smell of street food filled my nostrils, making my mouth water with anticipation. I could hear the sound of street performers in the distance, their music echoing through the canyons of buildings. It was a symphony of sights, sounds, and smells, and I was in the middle of it all.As I turned a corner, I stumbled upon a small park hidden away from the chaos of the city. It was a serene oasis in the midst of the hustle and bustle. I could see people lounging on benches, reading books, and enjoying the peace and quiet. I decided to take a break and sat down on a bench. For a few moments, I simply sat and watched the world go by. It was a welcome reprieve from the frenzied energy of the city. As I sat there, I began to reflect on my own life. I thought about the goals I had set for myself, the dreams I had yet to fulfill, and the challenges that lay ahead. I knew that achieving my goals would not be easy, but I was determined to succeed. I took a deep breath, feeling a sense of clarity and purpose wash over me. I knew that I had to keep moving forward, no matter how daunting the obstacles may seem.With a renewed sense of purpose, I stood up and made my way back into the city. The noise, smells, and energy of the city felt invigorating, and I felt a sense of confidence and strength that I hadn't felt before. Life was full of surprises, and I was ready to take them all on, one step at a time.",
];

let wpm;
const typingText = document.querySelector(".typing-text p");
const inpField = document.querySelector(".wrapper .input-field");
const tryAgainBtn = document.getElementById("try_again");
const tipsBtn = document.getElementById("tips");
const timeTag = document.querySelector(".time span b");
const mistakeTag = document.querySelector(".mistake span");
const wpmTag = document.querySelector(".wpm span");
const cpmTag = document.querySelector(".cpm span");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = (mistakes = isTyping = 0);

function loadParagraph() {
  // const ranIndex = Math.random() * paragraphs.length;
  const ranIndex = Math.floor(Math.random() * paragraphs.length);
  typingText.innerHTML = "";
  paragraphs[ranIndex].split("").forEach((char) => {
    console.log(char);
    let span = `<span>${char}</span>`;
    typingText.innerHTML += span;
  });
  typingText.querySelectorAll("span")[0].classList.add("active");
  document.addEventListener("keydown", () => inpField.focus());
  typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
  let characters = typingText.querySelectorAll("span");
  let typedChar = inpField.value.split("")[charIndex];
  if (charIndex < characters.length - 1 && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000);
      isTyping = true;
    }
    if (typedChar == null) {
      if (charIndex > 0) {
        charIndex--;
        if (characters[charIndex].classList.contains("incorrect")) {
          mistakes--;
        }
        characters[charIndex].classList.remove("correct", "incorrect");
      }
    } else {
      if (characters[charIndex].innerText == typedChar) {
        characters[charIndex].classList.add("correct");
      } else {
        mistakes++;
        characters[charIndex].classList.add("incorrect");
      }
      charIndex++;
    }
    characters.forEach((span) => span.classList.remove("active"));
    characters[charIndex].classList.add("active");

    wpm = Math.round(((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60);
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

    wpmTag.innerText = wpm;
    mistakeTag.innerText = mistakes;
    cpmTag.innerText = charIndex - mistakes;
  } else {
    clearInterval(timer);
    inpField.value = "";
  }
}
//to addtips
const tips = [
  "Take typing lessons to learn proper technique and finger placement",
  "Practice typing regularly to build muscle memory and speed",
  "Try to minimize errors by focusing on accuracy instead of speed",
  "Use keyboard shortcuts and hotkeys to increase productivity",
  "Maintain good posture and ergonomics to reduce strain and fatigue",
  "Take breaks regularly to avoid burnout and maintain concentration",
];
//to add tips
function showTips(wpm) {
  let tipIndex;
  if (wpm < 40) {
    alert(
      "Good job Buddy! Here is your tip of the day: Take typing lessons to learn proper technique and finger placement"
    );
  } else if (wpm < 60) {
    alert(
      "Good job Buddy! Here is your tip of the day: Practice typing regularly to build muscle memory and speed"
    );
  } else if (wpm < 80) {
    alert(
      "Good job Buddy! Here is your tip of the day: Try to minimize errors by focusing on accuracy instead of speed"
    );
  } else if (wpm < 100) {
    alert(
      "Good job Buddy! Here is your tip of the day: Use keyboard shortcuts and hotkeys to increase productivity"
    );
  } else if (wpm < 120) {
    alert(
      "Good job Buddy! Here is your tip of the day: Maintain good posture and ergonomics to reduce strain and fatigue"
    );
  } else {
    alert(
      "Good job Buddy! Here is your tip of the day: Take breaks regularly to avoid burnout and maintain concentration"
    );
  }
  document.getElementById("exampleFormControlTextarea1").textContent =
    tips[tipIndex];
}

function initTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeTag.innerText = timeLeft;
    let wpm = Math.round(
      ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60
    );
    wpmTag.innerText = wpm;
  } else {
    clearInterval(timer);
  }
}

function resetGame() {
  showTips(wpm); //to add tips
  loadParagraph();
  clearInterval(timer);
  timeLeft = maxTime;
  charIndex = mistakes = isTyping = 0;
  inpField.value = "";
  timeTag.innerText = timeLeft;
  wpmTag.innerText = 0;
  mistakeTag.innerText = 0;
  cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
// tipsBtn.addEventListener("click", showTips(wpm));
