const REVIEW_URL = "https://g.page/r/CfdqDy-6tQGOEBM/review";
const BUSINESS = "Avinash Computer And Ray Choice Center";

const services = {
  general:{en:["CSC and digital seva services","online application assistance","digital service support"],hi:["सीएससी और डिजिटल सेवा सहायता","ऑनलाइन आवेदन में सहायता","डिजिटल सेवा सहायता"],hinglish:["CSC aur Digital Seva services","online application assistance","digital service support"]},
  pan:{en:["PAN card service","PAN application assistance","help with the PAN card process"],hi:["पैन कार्ड सेवा","पैन आवेदन में सहायता","पैन कार्ड प्रक्रिया में मदद"],hinglish:["PAN card service","PAN application mein assistance","PAN card process mein help"]},
  aadhaar:{en:["Aadhaar print assistance","Aadhaar-related support","help with Aadhaar services"],hi:["आधार प्रिंट सहायता","आधार संबंधी सहायता","आधार सेवा में मदद"],hinglish:["Aadhaar print service","Aadhaar se related support","Aadhaar service mein help"]},
  voter:{en:["Voter ID assistance","voter card application support","help with voter ID services"],hi:["वोटर आईडी सहायता","वोटर कार्ड आवेदन में मदद","मतदाता पहचान पत्र सेवा"],hinglish:["Voter ID assistance","Voter card application support","Voter ID service mein help"]},
  banking:{en:["banking and AEPS service","basic banking assistance","help with banking transactions"],hi:["बैंकिंग और एईपीएस सेवा","बुनियादी बैंकिंग सहायता","बैंकिंग लेन-देन में मदद"],hinglish:["banking aur AEPS service","basic banking assistance","banking transaction mein help"]},
  pension:{en:["pension and scholarship application support","application form assistance","online application help"],hi:["पेंशन और छात्रवृत्ति आवेदन सहायता","आवेदन फॉर्म में मदद","ऑनलाइन आवेदन सहायता"],hinglish:["pension aur scholarship form support","application form assistance","online application mein help"]},
  labour:{en:["e-Shram and labour card assistance","labour card application support","worker registration help"],hi:["ई-श्रम और श्रमिक कार्ड सहायता","श्रमिक कार्ड आवेदन में मदद","श्रमिक पंजीकरण सहायता"],hinglish:["e-Shram aur labour card service","labour card application support","worker registration mein help"]},
  certificate:{en:["income and domicile certificate assistance","certificate application support","online certificate form help"],hi:["आय और निवास प्रमाण पत्र सहायता","प्रमाण पत्र आवेदन में मदद","ऑनलाइन प्रमाण पत्र फॉर्म सहायता"],hinglish:["income aur domicile certificate assistance","certificate application support","online certificate form mein help"]},
  pmkisan:{en:["PM-Kisan and farmer service assistance","farmer registration support","help with PM-Kisan applications"],hi:["पीएम-किसान और किसान सेवा सहायता","किसान पंजीकरण सहायता","पीएम-किसान आवेदन में मदद"],hinglish:["PM-Kisan aur farmer service","farmer registration support","PM-Kisan application mein help"]},
  printing:{en:["printing, typing and online form services","online form filling assistance","document printing support"],hi:["प्रिंटिंग, टाइपिंग और ऑनलाइन फॉर्म सेवा","ऑनलाइन फॉर्म भरने में सहायता","दस्तावेज़ प्रिंट सहायता"],hinglish:["printing, typing aur online form service","online form filling assistance","document printing support"]},
  recharge:{en:["bill payment and recharge services","utility bill payment support","mobile recharge assistance"],hi:["बिल भुगतान और रिचार्ज सेवा","यूटिलिटी बिल भुगतान सहायता","मोबाइल रिचार्ज सहायता"],hinglish:["bill payment aur recharge service","utility bill payment support","mobile recharge assistance"]},
  other:{en:["the service I needed","help with an online service","customer support at the center"],hi:["मेरी ज़रूरत की सेवा","ऑनलाइन सेवा में सहायता","केंद्र पर ग्राहक सहायता"],hinglish:["meri required service","online service mein help","center par customer support"]}
};

const lines = {
  en:{
    opening:["I visited {business} for {service}.","I used {service} at {business}.","I went to {business} for help with {service}."],
    helpful:["The guidance was helpful.","I appreciated the assistance I received.","The support helped me understand the process."],
    clear:["The steps were explained clearly.","The information was easy to understand.","I got a clear explanation of the process."],
    quick:["The service was quick during my visit.","My work was handled promptly.","The process was completed in a timely manner."],
    convenient:["It was convenient to get this service locally.","Getting online service support in one place was useful.","Having this service nearby was helpful."],
    polite:["The communication was polite.","I was treated respectfully.","The interaction was courteous."],
    close:["My actual experience was: {experience}.","One thing I would like to mention is: {experience}.","During my visit, {experience}."]
  },
  hi:{
    opening:["मैंने {business} में {service} के लिए सहायता ली।","{business} पर मैंने {service} सेवा का उपयोग किया।","मैं {service} से जुड़े काम के लिए {business} गया/गई।"],
    helpful:["मुझे उपयोगी मार्गदर्शन मिला।","मिली हुई सहायता मेरे लिए उपयोगी रही।","मुझे प्रक्रिया समझने में मदद मिली।"],
    clear:["प्रक्रिया के चरण स्पष्ट रूप से समझाए गए।","जानकारी समझने में आसान थी।","मार्गदर्शन से प्रक्रिया समझने में मदद मिली।"],
    quick:["मेरी विज़िट के दौरान सेवा जल्दी मिली।","मेरा काम समय पर संभाला गया।","प्रक्रिया समय पर पूरी हुई।"],
    convenient:["स्थानीय स्तर पर यह सेवा मिलना सुविधाजनक रहा।","एक ही जगह ऑनलाइन सेवा की सहायता मिलना उपयोगी रहा।","पास में यह सहायता उपलब्ध होना मेरे लिए मददगार रहा।"],
    polite:["बातचीत विनम्रता से की गई।","मेरे साथ सम्मानपूर्वक व्यवहार किया गया।","बातचीत का तरीका शालीन था।"],
    close:["मेरा वास्तविक अनुभव: {experience}।","मैं यह बात साझा करना चाहूँगा/चाहूँगी: {experience}।","मेरी विज़िट के दौरान, {experience}।"]
  },
  hinglish:{
    opening:["Maine {business} par {service} ke liye help li.","{business} mein maine {service} service use ki.","Main {service} se related kaam ke liye {business} gaya/gayi."],
    helpful:["Mujhe useful guidance mili.","Jo assistance mili, woh mere liye helpful rahi.","Process samajhne mein mujhe help mili."],
    clear:["Process ke steps clearly explain kiye gaye.","Information samajhna easy tha.","Mujhe process ke baare mein clear guidance mili."],
    quick:["Meri visit ke dauran service quick rahi.","Mera kaam time par handle kiya gaya.","Process time par complete hua."],
    convenient:["Local level par yeh service milna convenient raha.","Ek hi jagah online service support milna useful raha.","Nearby service support milna mere liye helpful tha."],
    polite:["Communication polite thi.","Mere saath respectfully baat ki gayi.","Baat karne ka tareeka polite tha."],
    close:["Mera actual experience: {experience}.","Main apne experience ke baare mein yeh share karna chahunga/chahungi: {experience}.","Meri visit ke dauran, {experience}."]
  }
};

const highlightKey = {helpful:"helpful",clear:"clear",quick:"quick",convenient:"convenient",polite:"polite"};
const form = document.getElementById("reviewForm");
const experience = document.getElementById("experience");
const output = document.getElementById("reviewOutput");
const resultArea = document.getElementById("resultArea");
const emptyState = document.getElementById("emptyState");
let count = 0;

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("charCount").textContent = "0/240";
experience.addEventListener("input", () => {
  document.getElementById("charCount").textContent = `${experience.value.length}/240`;
});

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function tidy(s) { return s.replace(/\s+/g, " ").trim(); }

function buildReview() {
  const lang = document.getElementById("language").value;
  const serviceKey = document.getElementById("service").value;
  const service = pick(services[serviceKey][lang]);
  const phrases = lines[lang];
  const length = document.getElementById("length").value;
  const chosenHighlight = document.getElementById("highlight").value;
  const actual = tidy(experience.value);
  const sentences = [
    pick(phrases.opening).replaceAll("{business}", BUSINESS).replaceAll("{service}", service)
  ];

  if (chosenHighlight !== "auto") {
    sentences.push(pick(phrases[highlightKey[chosenHighlight]]));
  } else {
    const candidates = ["helpful","clear","convenient","polite"];
    sentences.push(pick(candidates.map(key => pick(phrases[key]))));
  }

  if (actual) {
    sentences.push(pick(phrases.close).replace("{experience}", actual.replace(/[.!?।]+$/g, "")));
  }

  if (length === "long") {
    const extraCandidates = ["helpful","clear","convenient","polite"].filter(key => !sentences.some(s => s === key));
    const extra = pick(extraCandidates);
    const extraSentence = pick(phrases[extra]);
    if (!sentences.includes(extraSentence)) sentences.push(extraSentence);
    if (!actual && sentences.length < 4) sentences.push(pick(phrases[["helpful","clear","convenient","polite"].filter(k => k !== extra)[0]]));
  } else if (length === "short") {
    sentences.splice(2);
  }

  // Rotate sentence order and wording for a fresh draft; opening remains first.
  if (sentences.length > 2 && Math.random() > 0.5) {
    const tail = sentences.slice(1).reverse();
    sentences.splice(1, sentences.length - 1, ...tail);
  }
  count++;
  return sentences.map(tidy).join(" ");
}

function updateWords() {
  const words = tidy(output.value).split(/\s+/).filter(Boolean).length;
  document.getElementById("wordCount").textContent = `${words} ${words === 1 ? "word" : "words"}`;
}

function generate() {
  output.value = buildReview();
  emptyState.classList.add("hidden");
  resultArea.classList.remove("hidden");
  document.getElementById("copyStatus").textContent = "";
  document.getElementById("copyBtn").textContent = "▣ Copy & Open Google";
  document.getElementById("copyBtn").classList.remove("copied");
  updateWords();
}
form.addEventListener("submit", e => { e.preventDefault(); generate(); });
document.getElementById("regenerateBtn").addEventListener("click", generate);
output.addEventListener("input", updateWords);

async function copyThenOpenReview() {
  const text = output.value.trim();
  const status = document.getElementById("copyStatus");
  if (!text) {
    status.textContent = "Pehle review generate karein.";
    return;
  }

  // Open the destination directly from the click event to reduce popup-blocking risk.
  // The customer still pastes and submits the review on Google's page.
  const reviewTab = window.open(REVIEW_URL, "_blank", "noopener,noreferrer");

  try {
    await navigator.clipboard.writeText(text);
    status.textContent = "Review copy ho gaya. Google Review page khol diya hai — wahan text paste karke submit karein.";
    document.getElementById("copyBtn").textContent = "✓ Copied & Opened";
    document.getElementById("copyBtn").classList.add("copied");
  } catch (err) {
    output.focus();
    output.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) {}
    status.textContent = ok
      ? "Review copy ho gaya. Google page par paste karke submit karein."
      : "Clipboard permission nahi mili. Text select kar diya hai — Ctrl+C karein, phir Google page par paste karein.";
    document.getElementById("copyBtn").textContent = ok ? "✓ Copied & Opened" : "Copy manually";
    if (ok) document.getElementById("copyBtn").classList.add("copied");
    if (!reviewTab) status.textContent += " Agar page open nahi hua, neeche 'Open' link par click karein.";
  }
}
document.getElementById("copyBtn").addEventListener("click", copyThenOpenReview);
