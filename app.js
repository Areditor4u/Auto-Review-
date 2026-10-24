const businessName = "Avinash Computer And Ray Choice Center";
const reviewUrl = "https://g.page/r/CfdqDy-6tQGOEBM/review";

const serviceData = {
  general: {
    en: ["CSC and digital service support", "online application assistance", "customer service at the center"],
    hi: ["सीएससी और डिजिटल सेवा सहायता", "ऑनलाइन आवेदन में मदद", "केंद्र पर ग्राहक सेवा"],
    hinglish: ["CSC aur digital service support", "online application assistance", "customer service"]
  },
  pan: {
    en: ["PAN card service", "PAN application assistance", "help with the PAN card process"],
    hi: ["पैन कार्ड सेवा", "पैन आवेदन में सहायता", "पैन कार्ड प्रक्रिया में मदद"],
    hinglish: ["PAN card service", "PAN application assistance", "PAN card process mein help"]
  },
  aadhaar: {
    en: ["Aadhaar print assistance", "Aadhaar-related support", "help with Aadhaar services"],
    hi: ["आधार प्रिंट सहायता", "आधार संबंधी सहायता", "आधार सेवा में मदद"],
    hinglish: ["Aadhaar print service", "Aadhaar se judi help", "Aadhaar service support"]
  },
  voter: {
    en: ["Voter ID assistance", "voter card application support", "help with voter ID services"],
    hi: ["वोटर आईडी सहायता", "वोटर कार्ड आवेदन में मदद", "मतदाता पहचान पत्र सेवा"],
    hinglish: ["Voter ID assistance", "Voter card application support", "Voter ID service"]
  },
  banking: {
    en: ["banking and AEPS services", "basic banking assistance", "help with banking transactions"],
    hi: ["बैंकिंग और एईपीएस सेवा", "बुनियादी बैंकिंग सहायता", "बैंकिंग लेन-देन में मदद"],
    hinglish: ["banking aur AEPS service", "basic banking assistance", "banking transaction mein help"]
  },
  pension: {
    en: ["pension and scholarship application support", "help with application paperwork", "online application assistance"],
    hi: ["पेंशन और छात्रवृत्ति आवेदन सहायता", "आवेदन के कागज़ात में मदद", "ऑनलाइन आवेदन सहायता"],
    hinglish: ["pension aur scholarship application support", "application paperwork mein help", "online form assistance"]
  },
  labour: {
    en: ["e-Shram and labour card assistance", "labour card application support", "help with worker registration"],
    hi: ["ई-श्रम और श्रमिक कार्ड सहायता", "श्रमिक कार्ड आवेदन में मदद", "श्रमिक पंजीकरण सहायता"],
    hinglish: ["e-Shram aur labour card service", "labour card application support", "worker registration mein help"]
  },
  certificate: {
    en: ["income and domicile certificate assistance", "help with certificate applications", "online certificate application support"],
    hi: ["आय और निवास प्रमाण पत्र सहायता", "प्रमाण पत्र आवेदन में मदद", "ऑनलाइन प्रमाण पत्र आवेदन सहायता"],
    hinglish: ["income aur domicile certificate assistance", "certificate application mein help", "online certificate support"]
  },
  pmkisan: {
    en: ["PM-Kisan and farmer service assistance", "farmer registration support", "help with PM-Kisan related applications"],
    hi: ["पीएम-किसान और किसान सेवा सहायता", "किसान पंजीकरण सहायता", "पीएम-किसान आवेदन में मदद"],
    hinglish: ["PM-Kisan aur farmer service", "farmer registration support", "PM-Kisan application mein help"]
  },
  printing: {
    en: ["printing, typing and online form services", "online form filling assistance", "document typing and print support"],
    hi: ["प्रिंटिंग, टाइपिंग और ऑनलाइन फॉर्म सेवा", "ऑनलाइन फॉर्म भरने में सहायता", "दस्तावेज़ टाइपिंग और प्रिंट सहायता"],
    hinglish: ["printing, typing aur online form service", "online form filling assistance", "document print support"]
  },
  recharge: {
    en: ["bill payment and recharge services", "utility bill payment support", "mobile recharge assistance"],
    hi: ["बिल भुगतान और रिचार्ज सेवा", "यूटिलिटी बिल भुगतान सहायता", "मोबाइल रिचार्ज सहायता"],
    hinglish: ["bill payment aur recharge service", "utility bill payment support", "mobile recharge assistance"]
  },
  other: {
    en: ["the service I needed", "help with an online service", "customer support at the center"],
    hi: ["मेरी ज़रूरत की सेवा", "ऑनलाइन सेवा में सहायता", "केंद्र पर ग्राहक सहायता"],
    hinglish: ["meri required service", "online service mein help", "center par customer support"]
  }
};

const phraseSets = {
  en: {
    open: [
      "I visited {business} for {service}.",
      "I used {service} at {business}.",
      "I went to {business} to get help with {service}."
    ],
    helpful: ["The guidance was useful for me.", "I appreciated the assistance I received.", "The process was explained in a way I could understand."],
    clear: ["The steps were explained clearly.", "I found the information easy to understand.", "The guidance helped me understand the process."],
    quick: ["The service felt quick during my visit.", "My work was handled promptly.", "The process was completed in a timely way."],
    convenient: ["It was convenient to get online service support in one place.", "Having this service available locally was helpful.", "The center made it easier to get assistance with an online process."],
    polite: ["The communication was polite.", "I was spoken to respectfully.", "The interaction was courteous."],
    close: ["My experience was {experience}.", "Overall, my visit was {experience}.", "I would describe my experience as {experience}."]
  },
  hi: {
    open: [
      "मैंने {business} में {service} के लिए सहायता ली।",
      "{business} पर मैंने {service} सेवा का उपयोग किया।",
      "मैं {service} से जुड़े काम के लिए {business} गया/गई।"
    ],
    helpful: ["मुझे उपयोगी मार्गदर्शन मिला।", "मिली हुई सहायता मेरे लिए काम की रही।", "मुझे प्रक्रिया समझने में मदद मिली।"],
    clear: ["प्रक्रिया के चरण स्पष्ट रूप से समझाए गए।", "जानकारी समझने में आसान थी।", "मार्गदर्शन से प्रक्रिया समझने में मदद मिली।"],
    quick: ["मेरी विज़िट के दौरान सेवा जल्दी मिली।", "मेरा काम समय पर संभाला गया।", "प्रक्रिया समय पर पूरी हुई।"],
    convenient: ["एक ही जगह ऑनलाइन सेवा की सहायता मिलना सुविधाजनक रहा।", "स्थानीय स्तर पर यह सेवा मिलना मददगार रहा।", "ऑनलाइन प्रक्रिया में सहायता मिलना आसान रहा।"],
    polite: ["बातचीत विनम्रता से की गई।", "मेरे साथ सम्मानपूर्वक व्यवहार किया गया।", "बातचीत का तरीका अच्छा और शालीन था।"],
    close: ["मेरा अनुभव {experience} रहा।", "कुल मिलाकर, मेरी विज़िट {experience} रही।", "मैं अपने अनुभव को {experience} कहूँगा/कहूँगी।"]
  },
  hinglish: {
    open: [
      "Maine {business} par {service} ke liye help li.",
      "{business} mein maine {service} service use ki.",
      "Main {service} se related kaam ke liye {business} gaya/gayi."
    ],
    helpful: ["Mujhe useful guidance mili.", "Jo assistance mili, woh mere liye helpful rahi.", "Process samajhne mein mujhe help mili."],
    clear: ["Steps clearly explain kiye gaye.", "Information samajhna easy tha.", "Guidance se process samajhne mein help mili."],
    quick: ["Meri visit ke dauran service quick rahi.", "Mera kaam time par handle kiya gaya.", "Process time par complete hua."],
    convenient: ["Ek hi jagah online service support milna convenient raha.", "Local level par yeh service milna helpful tha.", "Online process ke liye assistance milna easy raha."],
    polite: ["Communication polite thi.", "Mere saath respectfully baat ki gayi.", "Staff ka behaviour courteous tha."],
    close: ["Mera experience {experience} raha.", "Overall, meri visit {experience} rahi.", "Main apne experience ko {experience} kahunga/kahungi."]
  }
};

const experienceMap = {
  en: ["good", "positive", "satisfactory", "helpful"],
  hi: ["अच्छा", "सकारात्मक", "संतोषजनक", "सहायक"],
  hinglish: ["good", "positive", "satisfactory", "helpful"]
};
const highlightMap = { helpful: "helpful", clear: "clear", quick: "quick", convenient: "convenient", polite: "polite" };

const form = document.getElementById("reviewForm");
const serviceEl = document.getElementById("service");
const languageEl = document.getElementById("language");
const lengthEl = document.getElementById("length");
const experienceEl = document.getElementById("experience");
const highlightEl = document.getElementById("highlight");
const outputEl = document.getElementById("reviewOutput");
const resultArea = document.getElementById("resultArea");
const emptyState = document.getElementById("emptyState");
const copyStatus = document.getElementById("copyStatus");
let generationCount = 0;

document.getElementById("year").textContent = new Date().getFullYear();
experienceEl.addEventListener("input", () => {
  document.getElementById("charCount").textContent = `${experienceEl.value.length} / 260`;
});

function pick(list) { return list[Math.floor(Math.random() * list.length)]; }
function shuffle(list) { return [...list].sort(() => Math.random() - 0.5); }
function clean(text) { return text.replace(/\s+/g, " ").trim(); }

function generateDraft() {
  const lang = languageEl.value;
  const service = pick(serviceData[serviceEl.value][lang]);
  const phrases = phraseSets[lang];
  const actual = clean(experienceEl.value);
  const highlight = highlightEl.value;
  const sentences = [];
  sentences.push(pick(phrases.open).replaceAll("{business}", businessName).replaceAll("{service}", service));

  if (highlight !== "none") {
    sentences.push(pick(phrases[highlightMap[highlight]]));
  } else {
    const available = ["helpful", "clear", "convenient", "polite"];
    if (actual) available.push("helpful", "clear");
    sentences.push(pick(available.map(key => pick(phrases[key]))));
  }

  if (actual) sentences.push(pick(phrases.close).replace("{experience}", actual.replace(/[.!?]+$/g, "")));

  if (lengthEl.value === "long") {
    const extraKeys = shuffle(["helpful", "clear", "convenient", "polite"]);
    const extra = pick(phrases[extraKeys[0]]);
    if (!sentences.includes(extra)) sentences.push(extra);
    if (!actual && sentences.length < 3) sentences.push(pick(phrases[extraKeys[1]]));
  } else if (lengthEl.value === "short") {
    sentences.splice(2);
  } else if (!actual && sentences.length < 3) {
    sentences.push(lang === "hi" ? "यह विवरण मेरी वास्तविक विज़िट के अनुसार संपादित किया जा सकता है।" :
      lang === "hinglish" ? "Aap apni real visit ke hisaab se details edit kar sakte hain." :
      "You can edit this draft to match your actual visit.");
  }

  // Reorder some middle sentences for variation, while keeping the opening first.
  if (sentences.length > 2 && Math.random() > 0.5) {
    const tail = sentences.slice(1).reverse();
    sentences.splice(1, sentences.length - 1, ...tail);
  }
  generationCount++;
  return sentences.map(clean).join(" ");
}

function updateWordCount() {
  const words = clean(outputEl.value).split(/\s+/).filter(Boolean).length;
  document.getElementById("wordCount").textContent = `${words} ${words === 1 ? "word" : "words"}`;
}
function renderDraft() {
  outputEl.value = generateDraft();
  emptyState.classList.add("hidden");
  resultArea.classList.remove("hidden");
  document.getElementById("variantLabel").textContent = `Draft variation ${generationCount} · edit before sharing`;
  copyStatus.textContent = "";
  document.getElementById("copyBtn").textContent = "▣ Copy review";
  document.getElementById("copyBtn").classList.remove("copied");
  updateWordCount();
}
form.addEventListener("submit", event => { event.preventDefault(); renderDraft(); });
document.getElementById("regenerateBtn").addEventListener("click", renderDraft);
outputEl.addEventListener("input", updateWordCount);
document.getElementById("googleReviewBtn").href = reviewUrl;
document.getElementById("copyBtn").addEventListener("click", async () => {
  const text = outputEl.value.trim();
  if (!text) { copyStatus.textContent = "Generate a draft first."; return; }
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Copied! Open Google Review and paste the text if it matches your real experience.";
  } catch (error) {
    outputEl.focus(); outputEl.select();
    const copied = document.execCommand("copy");
    copyStatus.textContent = copied ? "Copied! Open Google Review and paste the text." : "Select the text and copy it manually.";
  }
  document.getElementById("copyBtn").textContent = "✓ Copied";
  document.getElementById("copyBtn").classList.add("copied");
});
