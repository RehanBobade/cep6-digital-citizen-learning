const moduleCatalog = [
  {
    id: "digilocker",
    title: "DigiLocker",
    badge: "DigiLocker Explorer",
    label: "Digital documents",
    icon: "▣",
    summary: "Store, fetch and share official digital documents safely and efficiently.",
    introduction: "DigiLocker is a secure digital document wallet where citizens can store their verified documents and access them anytime from a trusted digital environment.",
    topics: [
      "What is DigiLocker and why it was created",
      "Purpose of DigiLocker for students and citizens",
      "Benefits of storing documents digitally",
      "Documents you can keep safely in one place",
      "Creating and accessing an account securely",
      "Fetching and uploading documents to the locker",
      "Sharing documents with institutions and verification systems",
      "Security, privacy and safe usage habits"
    ],
    keyPoints: [
      { title: "Purpose", text: "DigiLocker gives users a protected digital vault for important certificates, identity records and educational documents." },
      { title: "Convenience", text: "It reduces paperwork, improves access and allows document verification without physical copies." },
      { title: "Safety", text: "Always use official services, verify access requests and avoid sharing credentials with unknown sources." }
    ],
    quiz: [
      {
        question: "A student receives a request to share a DigiLocker document with a university office. Which step is safest before approving the request?",
        options: [
          "Share the document immediately because the request came through the university’s website.",
          "Verify the request source, confirm the college email or official identity, and only share the document to the official channel.",
          "Forward the document link to all contacts to ensure quick processing.",
          "Upload the same document multiple times for backup."
        ],
        correct: 1,
        explanation: "The safest practice is to verify the receiving institution and use official channels before sharing a digital document."
      },
      {
        question: "Why is DigiLocker more useful than storing only paper copies of certificates?",
        options: [
          "Paper documents are always easier to access than digital versions.",
          "Digital documents can be fetched, shared and verified more quickly while reducing storage and handling issues.",
          "Only paper copies are accepted by authentic institutions.",
          "DigiLocker removes the need for any verification process."
        ],
        correct: 1,
        explanation: "DigiLocker helps citizens manage verified documents digitally and simplifies sharing and verification processes."
      },
      {
        question: "What should a user do if they cannot access a document uploaded to DigiLocker?",
        options: [
          "Create a new account and ignore the previous one.",
          "Check the account login, internet connection, app status and whether the document was uploaded in the right format.",
          "Share the login details with a friend for support.",
          "Delete the account and start over without checking."
        ],
        correct: 1,
        explanation: "Access issues usually relate to account, connection or document-status checks rather than unsafe shortcuts."
      },
      {
        question: "Which practice best protects personal documents stored in DigiLocker?",
        options: [
          "Using the same password for all government services",
          "Sharing access credentials with family members",
          "Using a strong password and avoiding suspicious links or requests for OTPs",
          "Downloading documents to public computers without checking security"
        ],
        correct: 2,
        explanation: "Strong passwords and caution against phishing are essential for digital security and privacy."
      },
      {
        question: "A student wants to upload a mark sheet to DigiLocker. What is the best approach?",
        options: [
          "Upload screenshots from social media to save time.",
          "Upload only genuine, readable and verified documents from official sources.",
          "Upload copies without checking if they are readable.",
          "Upload documents from unknown links sent by friends."
        ],
        correct: 1,
        explanation: "Only verified and genuine documents should be uploaded to protect trust and document authenticity."
      },
      {
        question: "Which statement about document verification is correct?",
        options: [
          "Anyone can claim to be an official verification authority without checking.",
          "Verification is only required when a student is applying for a new account.",
          "Verification ensures the receiving party can confirm the document is authentic and matches official records.",
          "Verification is not necessary if a document is already uploaded."
        ],
        correct: 2,
        explanation: "Digital verification helps ensure authenticity and trust between citizens and institutions."
      },
      {
        question: "If a DigiLocker user receives a suspicious message claiming to be from support, what should they do?",
        options: [
          "Click the link immediately to verify the issue.",
          "Share the personal details to resolve the issue quickly.",
          "Ignore it, verify the official page independently and never share OTP or credentials.",
          "Send the document to the sender for confirmation."
        ],
        correct: 2,
        explanation: "Users must not share credentials or OTPs, and they should verify any support request through an official source."
      },
      {
        question: "How does sharing a document from DigiLocker benefit a user compared with sending a scanned file by email?",
        options: [
          "It eliminates the need to check the document quality.",
          "It allows access through a controlled digital process and can improve verification reliability.",
          "It guarantees that the document reaches everyone in the contact list.",
          "It prevents any institution from asking for further proof."
        ],
        correct: 1,
        explanation: "Controlled digital sharing helps reduce confusion and supports more reliable verification."
      },
      {
        question: "A student accidentally shares a link to a document with someone who is not authorized. What is the most responsible response?",
        options: [
          "Panic and delete the account immediately.",
          "Inform the institution or support channel, check if the document was shared publicly and avoid further sharing.",
          "Send the same document to more people to compare responses.",
          "Ask the person to keep it private without report or verification."
        ],
        correct: 1,
        explanation: "Responsible users react by checking the scope of sharing and contacting official support if needed."
      },
      {
        question: "Which practice best shows safe use of DigiLocker?",
        options: [
          "Using public Wi-Fi to access personal documents without caution",
          "Keeping device software updated and being careful with unknown requests",
          "Posting document screenshots on public forums for convenience",
          "Saving the username and password in a visible note on the device"
        ],
        correct: 1,
        explanation: "Updating devices and remaining alert to unknown requests are core principles of safe digital document use."
      },
      {
        question: "What is the most important reason to verify who is requesting a document from DigiLocker?",
        options: [
          "To avoid unnecessary digital uploads",
          "To prevent unauthorized access to private records and reduce fraud risk",
          "To make every file downloadable from the platform",
          "To ensure the document can be shared without any restrictions"
        ],
        correct: 1,
        explanation: "Verification reduces risk of unauthorized disclosure and identity misuse."
      },
      {
        question: "A user sees that a document is pending verification. What is the most appropriate step?",
        options: [
          "Ignore it because the document was already uploaded",
          "Check the issue source, confirm the required details and follow official instructions before retrying",
          "Delete the document to avoid the issue",
          "Ask a stranger for a copy of the document"
        ],
        correct: 1,
        explanation: "Pending verification is typically resolved by checking official instructions and correct submission details."
      },
      {
        question: "Which of these is an example of secure document sharing?",
        options: [
          "Sending a document through a message link from an unverified number",
          "Using the official sharing option in DigiLocker for a verified institution request",
          "Posting a document in a group chat for convenience",
          "Sharing document access credentials in email"
        ],
        correct: 1,
        explanation: "Official, verified sharing channels reduce exposure and preserve document authenticity."
      },
      {
        question: "Why should users be careful about fake websites claiming to help with DigiLocker access?",
        options: [
          "Because they can collect login details, OTPs or personal information",
          "Because they automatically improve account security",
          "Because they are the same as official government portals",
          "Because there are no real government services online"
        ],
        correct: 0,
        explanation: "Fake websites may cause phishing attacks, credential theft or identity misuse."
      },
      {
        question: "Which statement best explains safe usage of digital documents?",
        options: [
          "Keep copies in many email folders to ensure access",
          "Use official apps and trusted sources, and remain alert to scams or duplicate requests",
          "Always accept any request that looks urgent",
          "Share the same document to every institution without checking need"
        ],
        correct: 1,
        explanation: "Safe usage depends on official channels, careful verification and resisting urgency-based scams."
      }
    ]
  },
  {
    id: "aadhaar",
    title: "Aadhaar Services",
    badge: "Aadhaar Learner",
    label: "Identity services",
    icon: "◉",
    summary: "Understand Aadhaar verification, updates, safety and responsible service usage.",
    introduction: "Aadhaar is an identity system used to help citizens access government and service-related processes. It must be used carefully, securely and only through official channels.",
    topics: [
      "What Aadhaar is and why it matters",
      "Common Aadhaar services and uses",
      "Authentication and verification processes",
      "Updating or correcting details safely",
      "Using e-Aadhaar and virtual ID appropriately",
      "Mobile and email service connections",
      "Privacy, security and safe Aadhaar habits"
    ],
    keyPoints: [
      { title: "Authentication", text: "Aadhaar-based authentication must be used only for permitted and trusted purposes." },
      { title: "Verification", text: "Always verify the service and avoid sharing personal details outside official channels." },
      { title: "Security", text: "Never share OTPs, login details or a photocopy of your identity number with unverified sources." }
    ],
    quiz: [
      {
        question: "A service asks you to provide your Aadhaar number for verification. What is the safest response?",
        options: [
          "Give it immediately to any service that requests it.",
          "Check whether the service is official, trusted and legally relevant before providing the information.",
          "Send the number to all contacts to confirm authenticity.",
          "Store the number openly in a message thread."
        ],
        correct: 1,
        explanation: "Aadhaar should only be shared with official, trusted and relevant services that truly require it."
      },
      {
        question: "Why is Aadhaar verification important in digital services?",
        options: [
          "It allows any online form to collect personal information without checking legality.",
          "It helps confirm identity for legitimate government or service-related processes while reducing fraud risk.",
          "It removes the need for any personal security checks.",
          "It ensures all services must accept a single password."
        ],
        correct: 1,
        explanation: "Verification helps maintain trust and prevents unauthorised identity use."
      },
      {
        question: "What should a user do if they receive a call claiming to be from a government service and asking for Aadhaar details?",
        options: [
          "Provide details quickly to avoid delays.",
          "Ask for the official identity, verify the institution through a trusted source and avoid sharing information immediately.",
          "Send a screenshot of the Aadhaar card.",
          "Provide the OTP to prove identity."
        ],
        correct: 1,
        explanation: "Unverified calls and messages can be fraudulent; users should verify the official channel and avoid sharing personal details."
      },
      {
        question: "What is the purpose of e-Aadhaar or related digital identity features?",
        options: [
          "To let any person reuse the same identity across every service without checking.",
          "To support secure digital access to identity records while maintaining controlled access and verification.",
          "To replace all digital security checks permanently.",
          "To avoid the need for any official documents."
        ],
        correct: 1,
        explanation: "Digital identity features are meant to provide convenience with secure access, not unrestricted sharing."
      },
      {
        question: "Which habit is most appropriate when updating Aadhaar details online?",
        options: [
          "Use a suspicious third-party website claiming faster service.",
          "Use only the official process and verify the request before entering any details.",
          "Share the OTP with anyone claiming to be a service agent.",
          "Upload the Aadhaar number in a public social media group."
        ],
        correct: 1,
        explanation: "Only official channels should be used for changes or corrections."
      },
      {
        question: "Why should users avoid sharing Aadhaar-related OTPs?",
        options: [
          "Because OTPs are designed to be shared with all family members",
          "Because OTPs are used to validate a transaction or service request and should remain private",
          "Because OTP messages expire too slowly",
          "Because OTPs are not connected to account security"
        ],
        correct: 1,
        explanation: "An OTP is a one-time security secret. Sharing it can enable unauthorized access or identity misuse."
      },
      {
        question: "Which of the following is a safe practice for Aadhaar-related digital use?",
        options: [
          "Keeping the Aadhaar card number stored in an unprotected note app",
          "Using official services, protecting the mobile number and not revealing OTPs",
          "Sharing a screenshot of the e-Aadhaar file on social media for accessibility",
          "Downloading a fake application that says it can help with updates"
        ],
        correct: 1,
        explanation: "Protecting the mobile number and using official services is key to safe and responsible Aadhaar use."
      },
      {
        question: "A student sees a message that claims to verify Aadhaar details by asking for a code. What should they do?",
        options: [
          "Provide the code because the message looks urgent.",
          "Call the official service number independently and verify before doing anything.",
          "Forward the message to friends for guidance.",
          "Repeat the code to confirm the message is valid."
        ],
        correct: 1,
        explanation: "Urgent messages can be scams. Independent verification through official channels is safer."
      },
      {
        question: "What is the risk of using unverified Aadhaar-related websites?",
        options: [
          "They may collect sensitive information or trick users into sharing personal details.",
          "They always improve identity security.",
          "They automatically guarantee faster government service.",
          "They are the only official sources for updates."
        ],
        correct: 0,
        explanation: "Unverified websites may be fraudulent and expose users to identity theft or data compromise."
      },
      {
        question: "Why is it helpful to keep Aadhaar-related information limited to necessary sharing?",
        options: [
          "Because the government requires all personal details to be public.",
          "Because the least exposure reduces the risk of misuse, phishing and identity theft.",
          "Because no digital service should request identity information at all.",
          "Because one identity can be safely shared with everyone."
        ],
        correct: 1,
        explanation: "Limiting exposure helps reduce fraud and privacy risks while still supporting necessary services."
      },
      {
        question: "A user needs to update their Aadhaar mobile number. Which action is best?",
        options: [
          "Use a random third-party site that promises faster service.",
          "Use only official Aadhaar update channels and verify the process carefully.",
          "Share the identity number via a message to a caller.",
          "Post the phone number on a public forum to confirm it."
        ],
        correct: 1,
        explanation: "Official update channels are the correct and secure path for identity-linked changes."
      },
      {
        question: "Which statement reflects responsible Aadhaar usage?",
        options: [
          "Never check who is requesting the information.",
          "Use Aadhaar only where necessary, protect OTPs and verify service legitimacy.",
          "Use the same OTP across multiple requests for convenience.",
          "Share screenshots of Aadhaar details with friends for support."
        ],
        correct: 1,
        explanation: "Responsible usage means sharing only when needed, protecting OTPs and verifying every request."
      },
      {
        question: "Why should a user be careful with e-Aadhaar or digital copy downloads?",
        options: [
          "Because they should never be used for any government purpose.",
          "Because downloads can be stored or shared insecurely and may be misused if access is not protected.",
          "Because they automatically delete private data.",
          "Because they remove the need for identity verification."
        ],
        correct: 1,
        explanation: "Digital identity files should be protected and used only through safe, trusted and necessary processes."
      },
      {
        question: "Which practice can reduce the chance of Aadhaar-related fraud?",
        options: [
          "Treat every message as genuine if it mentions a service",
          "Protect the mobile device, avoid unknown links and never share OTPs",
          "Share the Aadhaar number with anyone who asks politely",
          "Use public Wi-Fi to complete all identity tasks quickly"
        ],
        correct: 1,
        explanation: "Protecting the device and OTPs is central to reducing identity fraud risk."
      }
    ]
  },
  {
    id: "pan",
    title: "PAN Services",
    badge: "PAN Pro",
    label: "Tax and identity",
    icon: "◫",
    summary: "Learn PAN services, applications and responsible handling of tax identity data.",
    introduction: "PAN is a core tax and identity number used by citizens for financial and official processes. It must be handled carefully and used only through trusted platforms.",
    topics: [
      "What PAN is and why it matters",
      "PAN application and status tracking",
      "e-PAN services and digital access",
      "PAN correction and issue handling",
      "Tax-related service usage",
      "Common mistakes and security risks",
      "Safe PAN usage and fraud prevention"
    ],
    keyPoints: [
      { title: "Importance", text: "PAN is used for tax records, financial transactions and identity verification in formal processes." },
      { title: "Accuracy", text: "Incorrect PAN details can delay service requests or create compliance issues." },
      { title: "Safety", text: "Never share PAN details or OTPs on unverified or suspicious websites." }
    ],
    quiz: [
      {
        question: "A citizen needs to check the status of a PAN application. Which action is best?",
        options: [
          "Use a random website that promises faster results.",
          "Use the official service channel and verify the status through a trusted source.",
          "Share the PAN details in a public online group.",
          "Ask a caller to confirm status without checking their authority."
        ],
        correct: 1,
        explanation: "Official PAN service channels are the safest and most reliable source for status inquiries."
      },
      {
        question: "What is one main reason PAN data must be shared carefully?",
        options: [
          "PAN is not related to any real-world identity or tax process.",
          "PAN details are sensitive and may be misused for fraud or identity theft if exposed.",
          "PAN numbers are valid only for a few hours.",
          "PAN data can be uploaded to any website without risk."
        ],
        correct: 1,
        explanation: "PAN details are personal and financial in nature, making secure handling important."
      },
      {
        question: "A user receives a suspicious SMS claiming to provide a PAN correction service. What is the safest approach?",
        options: [
          "Click the link immediately because it references PAN.",
          "Ignore or verify the service independently through official sources before sharing any detail.",
          "Share the PAN number to check whether it is valid.",
          "Reply with personal details to start the process."
        ],
        correct: 1,
        explanation: "Scam messages often impersonate official services; independent verification is safer."
      },
      {
        question: "Why is e-PAN useful for citizens?",
        options: [
          "Because it provides a faster and safer digital way to access or verify PAN-related information when using official channels.",
          "Because it removes the need for every official process to verify identity.",
          "Because it guarantees all personal details become public.",
          "Because it lets users share PAN data without restrictions."
        ],
        correct: 0,
        explanation: "Digital PAN access is meant to improve convenience while safeguarding data through official and trusted processes."
      },
      {
        question: "What mistake is most likely to cause problems with a PAN correction request?",
        options: [
          "Submitting the form through an official service channel",
          "Checking the information carefully before submission",
          "Entering mismatched or incorrect personal details, even if the request seems urgent",
          "Using a secure, trusted website"
        ],
        correct: 2,
        explanation: "Incorrect details can delay service or lead to rejection, so accuracy matters."
      },
      {
        question: "Which of the following protects PAN data most effectively?",
        options: [
          "Sharing the PAN number with colleagues for validation",
          "Using only official services, keeping records secure and avoiding suspicious links or OTP sharing",
          "Posting a photo of the PAN card in a public social group",
          "Checking a website only if it is visually attractive"
        ],
        correct: 1,
        explanation: "Secure posture includes verified channels, restricted disclosure and OTP protection."
      },
      {
        question: "A citizen wants to download an e-PAN from a service portal. What should they confirm before proceeding?",
        options: [
          "The website is official and trusted, and they are following a valid process.",
          "The website is trending on social media.",
          "The website offers a promise of immediate approval without documentation.",
          "The website asks for all personal details in the same message."
        ],
        correct: 0,
        explanation: "Trustworthy access is based on official process and verified service legitimacy."
      },
      {
        question: "Which scenario is most likely to be a PAN-related scam?",
        options: [
          "A service asks for verified identity details through the official portal",
          "A caller demands OTP or PAN details without proving the service identity",
          "A user checks PAN status on a trusted tax service channel",
          "An institution requests a correction using an official process"
        ],
        correct: 1,
        explanation: "A scam is likely when the caller demands sensitive details without proof or official verification."
      },
      {
        question: "Why should PAN details not be shared casually with unknown people or websites?",
        options: [
          "Because PAN data can be used for identity misuse, fraudulent claims or financial abuse.",
          "Because PAN is valid for one day only.",
          "Because PAN is not used in any real financial or tax process.",
          "Because PAN is not necessary for any government service."
        ],
        correct: 0,
        explanation: "PAN data is highly sensitive and must be protected from unauthorized exposure."
      },
      {
        question: "What is the safest response to a message that says your PAN correction is pending and asks for a code?",
        options: [
          "Send the code to complete the update",
          "Open the link and enter the code because the process is urgent",
          "Verify the communication through official channels before taking any action",
          "Copy the message to many people for awareness"
        ],
        correct: 2,
        explanation: "Never share one-time codes before verifying the originating service through a trusted channel."
      },
      {
        question: "Which of these is the best way to maintain PAN security?",
        options: [
          "Keep PAN data in a public notebook for easy access",
          "Share the number in group chats for record checking",
          "Use official services, secure storage and avoid unknown links or OTP requests",
          "Trust any website that references PAN service"
        ],
        correct: 2,
        explanation: "PAN safety depends on official service usage and careful protection of personal information."
      },
      {
        question: "Why is accuracy in PAN-related forms important?",
        options: [
          "Because it prevents unnecessary delays and helps correct records properly.",
          "Because every form automatically accepts incorrect data.",
          "Because tax systems do not check details.",
          "Because the PAN number can be reused without consequences."
        ],
        correct: 0,
        explanation: "Accurate details help maintain trust and prevent delays or wrong processing."
      },
      {
        question: "What should a user do if they cannot access a PAN service portal?",
        options: [
          "Share the PAN number with an unknown contact to get support.",
          "Use a public email to ask strangers for help.",
          "Check the official portal, confirm the correct process and use trusted support channels.",
          "Repeat the request endlessly without checking service status."
        ],
        correct: 2,
        explanation: "A systematic check with official support is safer and more reliable than informal shortcuts."
      },
      {
        question: "When is it acceptable to share PAN details?",
        options: [
          "Whenever someone asks for it politely",
          "Only as needed for legitimate, verified and official processes",
          "On unsecured email chains for convenience",
          "If a random caller mentions a tax issue"
        ],
        correct: 1,
        explanation: "PAN details should be shared only when required by verified and official processes."
      }
    ]
  },
  {
    id: "safety",
    title: "Digital Safety",
    badge: "Cyber Safety Champion",
    label: "Online protection",
    icon: "✦",
    summary: "Recognize scams, phishing attempts and unsafe digital behaviour before they harm you.",
    introduction: "Digital safety means protecting your identity, passwords, OTPs and online behaviour in a world where fraudsters use fake messages, fake websites and social engineering tricks.",
    topics: [
      "Strong passwords and security habits",
      "OTP safety and two-step verification",
      "Phishing and fake sites",
      "Fake calls, SMS and social engineering",
      "Recognizing suspicious links and scams",
      "Protecting Aadhaar, PAN and DigiLocker details",
      "Responsible digital behaviour and safer browsing"
    ],
    keyPoints: [
      { title: "Passwords", text: "Strong and unique passwords reduce the risk of account takeover and misuse." },
      { title: "OTP protection", text: "Never share one-time passwords with anyone, even if they claim to be from a trusted service." },
      { title: "Threat awareness", text: "Scammers often use urgency, fear and fake authority to exploit users." }
    ],
    quiz: [
      {
        question: "A user receives a message saying their bank account is blocked and they must reply with OTP immediately. What is the correct response?",
        options: [
          "Provide the OTP to unblock the account.",
          "Ignore the message and verify the service using an official source before taking action.",
          "Reply with the account number for verification.",
          "Forward the message to all contacts to warn them."
        ],
        correct: 1,
        explanation: "Urgent messages may be scams. Users should independently verify the official channel and never share OTPs."
      },
      {
        question: "Why are fake websites dangerous?",
        options: [
          "They always help improve mobile security.",
          "They can collect personal information, passwords or OTPs for fraud.",
          "They are automatically approved by government portals.",
          "They are only used for educational purposes."
        ],
        correct: 1,
        explanation: "Fake websites often mimic trusted services to steal user data."
      },
      {
        question: "What is the safest way to handle a suspicious link?",
        options: [
          "Open it because it looks urgent.",
          "Do not click it; verify the link separately through a trusted source.",
          "Share it with friends to check if it is fake.",
          "Forward it to colleagues for analysis."
        ],
        correct: 1,
        explanation: "Suspicious links can lead to phishing or malware; trusted verification is safer than immediate interaction."
      },
      {
        question: "Which password habit is most effective?",
        options: [
          "Using the same password across all platforms",
          "Reusing a familiar pattern for easier memory",
          "Creating a unique, strong password for each important service",
          "Saving passwords in plain text in a public file"
        ],
        correct: 2,
        explanation: "Unique and strong passwords reduce the risk of a single breach affecting multiple accounts."
      },
      {
        question: "A student receives a call claiming to be from a government office asking for Aadhaar details. What should happen next?",
        options: [
          "Share the details because the caller sounds official.",
          "Ask for a callback number, verify it through an official channel and avoid sharing personal information.",
          "Send a photo of the Aadhaar card immediately.",
          "Provide the OTP to confirm the caller is genuine."
        ],
        correct: 1,
        explanation: "Verification through official channels is essential before disclosing sensitive identity information."
      },
      {
        question: "Which statement about OTP safety is correct?",
        options: [
          "OTP codes are meant to be shared when asked by someone who seems helpful.",
          "OTP codes are one-time security keys and should never be shared with callers, texts or websites unless clearly verified.",
          "OTP codes are only useful for logging into non-important websites.",
          "OTP codes are designed to be copied into public groups."
        ],
        correct: 1,
        explanation: "OTPs are security secrets used to authenticate sensitive actions."
      },
      {
        question: "Why is social engineering dangerous online?",
        options: [
          "It uses trust and manipulation to trick users into revealing sensitive information.",
          "It is a legal method for accessing public websites.",
          "It helps users protect personal information automatically.",
          "It only happens on offline systems."
        ],
        correct: 0,
        explanation: "Social engineering preys on trust, fear and urgency to trick users into unsafe actions."
      },
      {
        question: "What is a safe response to a random SMS that contains a suspicious link to a government service?",
        options: [
          "Open it because it may be urgent.",
          "Search for the service separately through the official website and ignore the message if it is not verified.",
          "Send the link to all contacts to confirm it.",
          "Click it to see if the page is genuine."
        ],
        correct: 1,
        explanation: "Many scams rely on urgency and a lookalike official link; independent verification is best practice."
      },
      {
        question: "Which practice best protects students from online fraud?",
        options: [
          "Sharing private details with anyone who uses official terminology",
          "Using strong passwords, trained caution and official channels for any service request",
          "Trusting every mobile app that asks for account access",
          "Ignoring software updates because they slow down devices"
        ],
        correct: 1,
        explanation: "Caution, strong passwords and official verification reduce fraud risk."
      },
      {
        question: "A person receives a fake call about PAN and Aadhaar verification. Which response is safest?",
        options: [
          "Provide the details immediately to stop the issue.",
          "Verify the contact independently and avoid sharing personal information or OTPs.",
          "Ask the caller to send a screenshot of the ID card.",
          "Update the details in a public note for reference."
        ],
        correct: 1,
        explanation: "Scammers often impersonate authentic agencies; independent verification is the safe move."
      },
      {
        question: "How can users protect DigiLocker and personal records from cyber fraud?",
        options: [
          "By storing documents in open public folders",
          "By using official apps, strong passwords and verifying every access request before approving it",
          "By sharing access codes with family and friends",
          "By accepting every message with a link to resolve the issue"
        ],
        correct: 1,
        explanation: "Official channels, strong passwords and cautious access approvals help secure digital records."
      },
      {
        question: "Which habit is most important when using public or shared devices?",
        options: [
          "Log in to all accounts and leave the session open for convenience",
          "Never save passwords and always log out after use",
          "Share login credentials with the person beside you",
          "Use public Wi-Fi for all sensitive tasks without caution"
        ],
        correct: 1,
        explanation: "Logging out and avoiding credential exposure on shared devices can prevent unauthorized access."
      },
      {
        question: "Why is it important to be careful with fake SMS and fake calls?",
        options: [
          "They may trick a user into revealing OTPs, IDs or account details.",
          "They always guarantee legal service access.",
          "They are required for every legitimate government message.",
          "They are harmless because they only ask for basic information."
        ],
        correct: 0,
        explanation: "Fake SMS and calls are a common way for scammers to obtain personal or identity information."
      },
      {
        question: "Which of the following demonstrates responsible digital behaviour?",
        options: [
          "Sharing credentials with a trusted friend in a group message",
          "Verifying a suspicious request before acting and following official channels",
          "Clicking every urgent link to stay informed",
          "Posting personal identity information to build digital records"
        ],
        correct: 1,
        explanation: "Responsible digital behaviour is based on caution, verification and keeping access private."
      }
    ]
  }
];

const finalAssessmentQuestions = [
  {
    question: "A student receives a message claiming that a DigiLocker document must be shared immediately to confirm admission. What is the best response?",
    options: [
      "Share the document immediately through the message link.",
      "Ignore the message because all digital services are safe.",
      "Verify the institution through official channels before sharing, and do not share OTPs or credentials.",
      "Ask all classmates to open the link to confirm it is safe."
    ],
    correct: 2,
    explanation: "The safest approach is to verify the institution independently and avoid sharing credentials or OTPs."
  },
  {
    question: "During Aadhaar verification, a caller requests the OTP for a service update. What should the user do?",
    options: [
      "Give the OTP to resolve the issue quickly.",
      "Confirm the caller’s identity through an official government channel and refuse to share OTPs with unknown callers.",
      "Share the OTP with family members to speed up the update.",
      "Call a random number listed in the message."
    ],
    correct: 1,
    explanation: "OTPs must remain private; a user should verify the service through official channels before taking any action."
  },
  {
    question: "A citizen wants to update PAN details online. Which approach is safest?",
    options: [
      "Use a random website promising quick approval.",
      "Use only official, trusted digital channels and confirm details before submitting.",
      "Send the PAN number to a WhatsApp contact for review.",
      "Submit incorrect data to test whether the form works."
    ],
    correct: 1,
    explanation: "Official service channels are the secure and correct route for sensitive updates."
  },
  {
    question: "Which behaviour best reduces cyber fraud risk?",
    options: [
      "Click every urgent link in messages.",
      "Use the same password across all official services.",
      "Verify unknown requests, protect OTPs and use strong, unique passwords.",
      "Share documents with anyone who mentions a government service."
    ],
    correct: 2,
    explanation: "Verification, strong unique passwords and OTP protection are core digital safety habits."
  },
  {
    question: "Why should a user avoid using suspicious websites for DigiLocker, Aadhaar or PAN services?",
    options: [
      "They are never faster than official services.",
      "They may capture private information, OTPs or identity data for fraud.",
      "They are always blocked by all official portals.",
      "They guarantee an instant completion of all applications."
    ],
    correct: 1,
    explanation: "Fake websites are often designed to steal sensitive information or credentials."
  },
  {
    question: "A student receives an email asking for a PAN correction and includes a link. The email uses a nearly identical domain and urgent language. What should happen?",
    options: [
      "Click quickly to fix the issue.",
      "Use the official service website directly and confirm the request before acting.",
      "Send the PAN number to the email to confirm authenticity.",
      "Forward the email to everyone in the college."
    ],
    correct: 1,
    explanation: "Urgent, lookalike emails often signal phishing; independent verification is safer."
  },
  {
    question: "Which action best protects a citizen’s digital identity?",
    options: [
      "Storing personal information in plain text files for convenience",
      "Using a secure device, avoiding unknown links and keeping OTPs private",
      "Sharing identity details in group chats for quick support",
      "Assuming all calls talking about official services are genuine"
    ],
    correct: 1,
    explanation: "Protecting devices and not revealing one-time codes are essential digital-security habits."
  },
  {
    question: "A government service asks for a document to be uploaded. What is the right way to proceed?",
    options: [
      "Upload the document to any site that claims it is official.",
      "Use the official service portal or authorised channel and check the requester’s legitimacy.",
      "Share the same document with all contacts to confirm it is accepted.",
      "Send the file by email to anyone who asks."
    ],
    correct: 1,
    explanation: "Official, verified channels reduce risk and protect the integrity of the document."
  },
  {
    question: "Why is it risky to share Aadhaar or PAN information in social media messages or suspicious online forms?",
    options: [
      "Because the information may be misused for identity theft or financial fraud.",
      "Because all government messages require public disclosure.",
      "Because the information will become automatically invalid after sharing.",
      "Because social media platforms always delete personal data."
    ],
    correct: 0,
    explanation: "Personal identity data is sensitive and must remain restricted to legitimate, trusted uses."
  },
  {
    question: "Which example demonstrates safe browsing behaviour?",
    options: [
      "Clicking every link in a message to verify authenticity",
      "Checking the website address, using trusted portals and avoiding phishing traps",
      "Submitting personal data without checking if the form is legitimate",
      "Using a public computer to log in to sensitive accounts without protecting the session"
    ],
    correct: 1,
    explanation: "Safe browsing depends on verifying the website and avoiding risky shortcuts."
  },
  {
    question: "A user cannot access the official DigiLocker portal. Which action is most appropriate?",
    options: [
      "Search the result page and only use links from trusted official sources.",
      "Give credentials to the first person who offers help online.",
      "Use a random new redirect to reach the portal.",
      "Ignore the issue because digital locks are always accessible."
    ],
    correct: 0,
    explanation: "Users should access services through verified official sources and avoid untrusted redirects."
  },
  {
    question: "What is the main purpose of strong password habits and device protection?",
    options: [
      "To make every account easier to share with others.",
      "To reduce the risk of account takeover and protect sensitive identity information.",
      "To ensure all services ask for less security.",
      "To avoid the need to verify digital documents."
    ],
    correct: 1,
    explanation: "Strong passwords and device protection lower the chance of unauthorized access."
  },
  {
    question: "Which of these would be considered an unsafe digital practice?",
    options: [
      "Verifying a service request through its official portal",
      "Keeping OTPs private and protecting personal devices",
      "Sharing an OTP to unblock a service because a caller said it was urgent",
      "Using a unique password for each important online account"
    ],
    correct: 2,
    explanation: "Sharing an OTP is unsafe; OTPs are meant to be private and used only for verified requests."
  },
  {
    question: "A person’s Aadhaar data is requested by a local service office. What is the safest next step?",
    options: [
      "Provide the data only if the service is official, relevant and the user has verified the process.",
      "Provide the data to any local office without checking.",
      "Share a screenshot with the office plus all family contacts.",
      "Post the information in a public WhatsApp group."
    ],
    correct: 0,
    explanation: "Sharing should be limited to legitimate, verified and relevant service interactions."
  },
  {
    question: "Why should users never share a government-service OTP with a caller or a message?",
    options: [
      "Because OTPs are designed to authorize official access and are not meant to be shared with unknown parties.",
      "Because OTPs are automatically invalid after a few minutes anyway.",
      "Because OTPs are only needed to log into public websites.",
      "Because OTPs are public and meant for everyone to see."
    ],
    correct: 0,
    explanation: "An OTP is a private security token used to confirm identity or approve a real request."
  },
  {
    question: "A citizen receives a message with a fake government link and a warning that action is required. What should they do before clicking?",
    options: [
      "Click to confirm the message is real.",
      "Ignore it and directly open the official service website through a trusted source.",
      "Forward it to all friends to check if it is credible.",
      "Reply with personal information to confirm the issue."
    ],
    correct: 1,
    explanation: "The safer practice is to ignore the suspicious message and access the service via the official website instead."
  },
  {
    question: "Which statement best reflects responsible digital citizenship?",
    options: [
      "Any site asking for identity details is trustworthy if it looks polished.",
      "Only share sensitive information when required, verify sources and protect OTPs and credentials.",
      "All policies and procedures can be skipped if a message seems urgent.",
      "Public devices are safe for confidential banking or government tasks."
    ],
    correct: 1,
    explanation: "Responsible digital citizenship is based on caution, source validation and safeguarding identity data."
  },
  {
    question: "Why is it important for students to learn about DigiLocker, Aadhaar, PAN and digital safety together?",
    options: [
      "Because the modules are unrelated and serve different purposes.",
      "Because digital identity and safe online behaviour are connected; misuse in one area can affect others.",
      "Because only government services rely on any of these systems.",
      "Because they can all be replaced by one universal password."
    ],
    correct: 1,
    explanation: "These digital systems are connected through identity, trust and security, so understanding them together is valuable."
  },
  {
    question: "A user notices one of their digital identity documents is missing from the official app. What is the best step?",
    options: [
      "Delete the app and reinstall without checking the official source.",
      "Check the app status, verify account access and contact official support before taking action.",
      "Share the login credentials with a helper to recover it.",
      "Ask unknown contacts to email the missing document."
    ],
    correct: 1,
    explanation: "Real issue resolution depends on checking access, official status and trusted support channels."
  }
];

const app = document.getElementById("app");

function defaultState() {
  return {
    studentName: "Student Name",
    modules: moduleCatalog.reduce((acc, module) => {
      acc[module.id] = {
        studied: false,
        watched: [],
        answers: {},
        review: [],
        quizSubmitted: false,
        quizResult: null,
        finalAssessmentUnlocked: false
      };
      return acc;
    }, {}),
    finalAssessment: {
      submitted: false,
      answers: {},
      result: null
    },
    certificateUnlocked: false
  };
}

function loadState() {
  const existing = JSON.parse(localStorage.getItem("cepDigitalCitizenState") || "null");
  if (!existing) return defaultState();

  const base = defaultState();
  return {
    ...base,
    ...existing,
    modules: { ...base.modules, ...(existing.modules || {}) },
    finalAssessment: { ...base.finalAssessment, ...(existing.finalAssessment || {}) }
  };
}

let state = loadState();

function saveState() {
  localStorage.setItem("cepDigitalCitizenState", JSON.stringify(state));
}

function moduleState(moduleId) {
  return state.modules[moduleId];
}

function computeModuleProgress(module) {
  const current = moduleState(module.id);
  const watchedCount = current.watched.length;
  const requiredCount = videoLibrary[module.id].length;
  const videosDone = watchedCount >= requiredCount;
  const studyDone = current.studied;
  const quizDone = current.quizSubmitted;
  const percent = [studyDone, videosDone, quizDone].filter(Boolean).length * 33.33;

  return {
    studyDone,
    videosDone,
    quizDone,
    requiredCount,
    watchedCount,
    percent: Math.min(100, Math.round(percent))
  };
}

function allModulesCompleted() {
  return moduleCatalog.every((module) => computeModuleProgress(module).studyDone && computeModuleProgress(module).videosDone && computeModuleProgress(module).quizDone);
}

function renderPage(type, moduleId = "") {
  const currentState = computeModuleProgress(moduleId && moduleCatalog.find((module) => module.id === moduleId));
  if (type === "home") {
    renderHomePage();
    return;
  }

  if (type === "dashboard") {
    renderDashboard();
    return;
  }

  if (type === "assessment") {
    renderAssessmentPage();
    return;
  }

  if (type === "certificate") {
    renderCertificate();
    return;
  }

  if (type === "module") {
    renderModulePage(moduleId);
    return;
  }
}

function createHeader(active = "home") {
  return `
    <header class="topbar">
      <div class="container topbar-inner">
        <div class="brand" aria-label="College Learning Portal Brand">
          <div class="brand-mark">✓</div>
          <span>Digital Citizen Learning</span>
        </div>
        <nav class="nav-links" aria-label="Main navigation">
          <button class="nav-btn ${active === "home" ? "active" : ""}" data-action="navigate-home">Home</button>
          <button class="nav-btn ${active === "dashboard" ? "active" : ""}" data-action="navigate-dashboard">Dashboard</button>
          <button class="nav-btn ${active === "modules" ? "active" : ""}" data-action="navigate-modules">Modules</button>
          <button class="nav-btn ${active === "assessment" ? "active" : ""}" data-action="navigate-assessment">Final Assessment</button>
          <button class="nav-btn ${active === "certificate" ? "active" : ""}" data-action="navigate-certificate">Certificate</button>
        </nav>
      </div>
    </header>
  `;
}

function renderHomePage() {
  app.innerHTML = `
    ${createHeader("home")}
    <main class="container page-shell">
      <section class="hero">
        <div class="hero-grid">
          <div>
            <span class="kicker">Digital literacy portal</span>
            <h1>Training on <span>DigiLocker, Aadhaar & PAN Services</span></h1>
            <p class="subtitle">Learn digital services. Understand online processes. Stay safe.</p>
            <div class="hero-actions">
              <button class="primary-btn" data-action="navigate-modules">Start Learning</button>
              <button class="secondary-btn" data-action="navigate-modules">Explore Modules</button>
              <button class="ghost-btn" data-action="navigate-dashboard">Watch Videos</button>
            </div>
          </div>
          <div class="hero-panel">
            <div class="hero-summary">
              <div class="summary-box">
                <strong>4</strong>
                <span>Modules</span>
              </div>
              <div class="summary-box">
                <strong>20</strong>
                <span>Final Assessment</span>
              </div>
              <div class="summary-box">
                <strong>70%</strong>
                <span>Pass mark</span>
              </div>
              <div class="summary-box">
                <strong>1</strong>
                <span>Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 class="section-title">Learning Modules</h2>
      <section class="module-grid" aria-label="Available learning modules">
        ${moduleCatalog.map((module) => `
          <article class="module-card" data-module="${module.id}">
            <div>
              <div class="module-card-header">
                <div class="module-icon">${module.icon}</div>
                <span class="module-pill">${module.label}</span>
              </div>
              <h3>${module.title}</h3>
              <p>${module.summary}</p>
            </div>
            <div class="module-meta">
              <span>${computeModuleProgress(module).percent}% complete</span>
              <button class="ghost-btn" data-action="open-module" data-module-id="${module.id}">Open</button>
            </div>
          </article>
        `).join("")}
      </section>

      <section class="track-list">
        <h3 class="section-title" style="margin-top:0; margin-bottom:0;">Your Learning Journey</h3>
        <div class="journey-line">
          <div class="journey-step">Learn</div>
          <div class="journey-step">Watch</div>
          <div class="journey-step">Practice</div>
          <div class="journey-step">Quiz</div>
          <div class="journey-step">Complete</div>
          <div class="journey-step">Certificate</div>
        </div>
      </section>
    </main>
  `;
}

function renderDashboard() {
  const moduleRows = moduleCatalog.map((module) => {
    const progress = computeModuleProgress(module);
    return `
      <div class="progress-item">
        <div class="progress-header">
          <strong>${module.title}</strong>
          <span>${progress.percent}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width: ${progress.percent}%"></div>
        </div>
      </div>
    `;
  }).join("");

  const totalVideos = moduleCatalog.reduce((sum, module) => sum + videoLibrary[module.id].length, 0);
  const watchedVideos = moduleCatalog.reduce((sum, module) => sum + moduleState(module.id).watched.length, 0);
  const completedQuizzes = moduleCatalog.filter((module) => moduleState(module.id).quizSubmitted).length;
  const averageScore = (() => {
    const scores = moduleCatalog
      .map((module) => moduleState(module.id).quizResult)
      .filter(Boolean)
      .map((result) => result.percentage);
    if (!scores.length) return 0;
    return Math.round(scores.reduce((sum, val) => sum + val, 0) / scores.length);
  })();

  app.innerHTML = `
    ${createHeader("dashboard")}
    <main class="container page-shell">
      <section class="dashboard-card">
        <h3>Learning Progress</h3>
        <div class="progress-list">
          ${moduleRows}
        </div>
      </section>

      <section class="page-section">
        <div class="stats-grid">
          <div class="stat-box">
            <strong>${watchedVideos} / ${totalVideos}</strong>
            <span>Videos watched</span>
          </div>
          <div class="stat-box">
            <strong>${completedQuizzes} / ${moduleCatalog.length}</strong>
            <span>Quizzes completed</span>
          </div>
          <div class="stat-box">
            <strong>${averageScore}%</strong>
            <span>Average score</span>
          </div>
          <div class="stat-box">
            <strong>${allModulesCompleted() ? "Passed" : "Locked"}</strong>
            <span>Final assessment</span>
          </div>
          <div class="stat-box">
            <strong>${state.certificateUnlocked ? "Unlocked" : "Locked"}</strong>
            <span>Certificate</span>
          </div>
        </div>
      </section>

      <section class="page-section">
        <div class="dashboard-card">
          <h3>Badges</h3>
          <div class="badge-grid">
            ${moduleCatalog.map((module) => `
              <div class="badge-chip">${computeModuleProgress(module).quizDone ? "✓" : "•"} ${module.badge}</div>
            `).join("")}
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderModulePage(moduleId) {
  const module = moduleCatalog.find((item) => item.id === moduleId);
  const progress = computeModuleProgress(module);

  const videoData = videoLibrary[moduleId];
  const videoMarkup = videoData.map((video) => {
    const watched = moduleState(moduleId).watched.includes(video.id);
    return `
      <article class="video-card">
        <div class="video-thumbnail">
          <iframe src="https://www.youtube.com/embed/${video.id}" title="${video.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="video-body">
          <h4 class="video-title">${video.title}</h4>
          <div class="meta-row">
            <span class="video-meta">${video.channel}</span>
            <span class="video-tag">${video.topic}</span>
          </div>
          <p>${video.description}</p>
          <div class="video-actions">
            <button class="watch-btn" data-action="watch-video" data-video-id="${video.id}" data-module-id="${moduleId}">Watch</button>
            <label class="video-check">
              <input
                type="checkbox"
                data-action="toggle-video"
                data-video-id="${video.id}"
                data-module-id="${moduleId}"
                ${watched ? "checked" : ""}
              />
              <span>Mark Video as Watched ✓</span>
            </label>
          </div>
        </div>
      </article>
    `;
  }).join("");

  const quizData = module.quiz;
  const quizAnswerState = moduleState(moduleId).answers;
  const answeredCount = Object.keys(quizAnswerState).length;
  const progressWidth = Math.min(100, Math.round((answeredCount / quizData.length) * 100));

  const moduleStatus = progress.studyDone && progress.videosDone && progress.quizDone ? "Completed" : "In Progress";

  app.innerHTML = `
    ${createHeader("modules")}
    <main class="container page-shell">
      <section class="module-page">
        <div class="module-header-card">
          <div>
            <span class="module-pill">${module.label}</span>
            <h2>${module.title}</h2>
          </div>
          <div class="module-actions">
            <button class="primary-btn" data-action="mark-studied" data-module-id="${module.id}">${progress.studyDone ? "Studied ✓" : "Mark as Studied"}</button>
            <button class="ghost-btn" data-action="navigate-dashboard">Dashboard</button>
          </div>
        </div>

        <div class="content-grid">
          <article class="content-card">
            <h3>Introduction</h3>
            <p class="blank-state">${module.introduction}</p>
            <ul class="topic-list">
              ${module.topics.map((topic) => `<li>${topic}</li>`).join("")}
            </ul>
          </article>

          <aside class="content-card">
            <h3>Learning Progress</h3>
            <div class="key-points">
              <div class="key-point"><strong>Content</strong> ${progress.studyDone ? "✓ Completed" : "Pending"}</div>
              <div class="key-point"><strong>Videos</strong> ${progress.watchedCount}/${progress.requiredCount} ${progress.videosDone ? "✓" : "in progress"}</div>
              <div class="key-point"><strong>Quiz</strong> ${answeredCount}/${quizData.length} ${progress.quizDone ? "✓ Completed" : "attempted"}</div>
              <div class="key-point"><strong>Status</strong> ${moduleStatus}</div>
              ${progress.studyDone && progress.videosDone && progress.quizDone ? '<div class="key-point"><strong>Module Complete</strong> ✓ MODULE COMPLETED</div>' : ""}
            </div>
          </aside>
        </div>

        <div class="video-panel">
          <h3>Watch & Learn — ${module.title}</h3>
          <p class="blank-state" style="margin-bottom: 16px;"><strong>${module.title} Videos:</strong> ${progress.watchedCount} / ${progress.requiredCount} completed</p>
          <div class="video-grid">
            ${videoMarkup}
          </div>
        </div>

        <div class="quiz-panel">
          <h3>Test Your Knowledge</h3>
          <div class="quiz-status">
            <span>${module.title} Quiz</span>
            <strong>${answeredCount} / ${quizData.length} answered</strong>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width: ${progressWidth}%"></div>
          </div>

          ${renderQuizOnly(module, quizData, quizAnswerState)}
        </div>
      </section>
    </main>
  `;
}

function renderQuizOnly(module, quizData, answers) {
  if (moduleState(module.id).quizSubmitted && moduleState(module.id).quizResult) {
    return renderQuizResult(module, moduleState(module.id).quizResult);
  }

  const currentIndex = moduleState(module.id).currentQuestion || 0;
  const question = quizData[currentIndex];
  const isAnswered = answers[currentIndex] !== undefined;

  return `
    <div class="quiz-wrapper">
      <div class="quiz-question">
        <h4>Question ${currentIndex + 1} of ${quizData.length}</h4>
        <p>${question.question}</p>
        <div class="options-list">
          ${question.options.map((option, idx) => `
            <button class="option-btn ${answers[currentIndex] === idx ? "selected" : ""}" data-action="select-answer" data-module-id="${module.id}" data-question-index="${currentIndex}" data-option-index="${idx}">
              ${String.fromCharCode(65 + idx)}. ${option}
            </button>
          `).join("")}
        </div>
      </div>

      <div class="question-pills">
        ${quizData.map((_, idx) => {
          const classes = [];
          if (idx === currentIndex) classes.push("active");
          if (answers[idx] !== undefined) classes.push("answered");
          if (moduleState(module.id).review.includes(idx)) classes.push("review");
          return `<button class="q-pill ${classes.join(" ")}" data-action="jump-question" data-module-id="${module.id}" data-question-index="${idx}">${idx + 1}</button>`;
        }).join("")}
      </div>

      <div class="quiz-actions">
        <button class="quiz-nav-btn" data-action="quiz-prev" data-module-id="${module.id}">Previous</button>
        <button class="quiz-nav-btn" data-action="quiz-next" data-module-id="${module.id}">Next</button>
        <button class="quiz-nav-btn" data-action="quiz-clear" data-module-id="${module.id}">Clear Answer</button>
        <button class="quiz-nav-btn" data-action="quiz-review" data-module-id="${module.id}">Mark for Review</button>
        <button class="primary-btn" data-action="submit-quiz" data-module-id="${module.id}">Submit Quiz</button>
      </div>
    </div>
  `;
}

function renderQuizResult(module, result) {
  const answerReview = result.review.map((item) => `
    <div class="review-item">
      <p><strong>Q${item.index + 1}:</strong> ${item.question}</p>
      <p><strong>Your answer:</strong> ${item.userAnswer !== null ? item.userAnswer : "Unanswered"}</p>
      <p><strong>Correct answer:</strong> ${item.correctAnswer}</p>
      <p><strong>Explanation:</strong> ${item.explanation}</p>
      <p><strong>Why the others were wrong:</strong> ${item.wrongReason}</p>
    </div>
  `).join("");

  return `
    <div class="result-card">
      <h3>Quiz Completed</h3>
      <div class="result-score">
        <div>
          <span style="display:block; color: var(--ink-700); font-weight:700; text-transform:uppercase; letter-spacing:0.08em;">Score</span>
          <strong>${result.score} / ${result.total}</strong>
        </div>
        <div>
          <span style="display:block; color: var(--ink-700); font-weight:700; text-transform:uppercase; letter-spacing:0.08em;">Percentage</span>
          <strong>${result.percentage}%</strong>
        </div>
      </div>
      <div class="final-summary">
        <div class="stat-box"><strong>${result.correct}</strong><span>Correct</span></div>
        <div class="stat-box"><strong>${result.incorrect}</strong><span>Incorrect</span></div>
        <div class="stat-box"><strong>${result.unanswered}</strong><span>Unanswered</span></div>
      </div>
      <div class="answer-review">
        ${answerReview}
      </div>
      <div class="certificate-actions" style="justify-content:flex-start; margin-top:20px;">
        <button class="primary-btn" data-action="retake-quiz" data-module-id="${module.id}">Retake Quiz</button>
        <button class="ghost-btn" data-action="open-module" data-module-id="${module.id}">Review Module</button>
        <button class="secondary-btn" data-action="navigate-dashboard">Go to Dashboard</button>
      </div>
    </div>
  `;
}

function renderAssessmentPage() {
  if (!allModulesCompleted()) {
    app.innerHTML = `
      ${createHeader("assessment")}
      <main class="container page-shell">
        <div class="lock-card">
          <h3>Final Digital Citizen Assessment</h3>
          <p class="blank-state">Complete all four modules to unlock the final assessment.</p>
        </div>
      </main>
    `;
    return;
  }

  const assessmentState = state.finalAssessment;
  if (assessmentState.submitted && assessmentState.result) {
    const result = assessmentState.result;
    const passed = result.percentage >= 70;
    app.innerHTML = `
      ${createHeader("assessment")}
      <main class="container page-shell">
        <div class="result-card">
          <h3>${passed ? "Congratulations!" : "Assessment Not Passed"}</h3>
          <div class="result-score">
            <div>
              <span style="display:block; color: var(--ink-700); font-weight:700; text-transform:uppercase; letter-spacing:0.08em;">Score</span>
              <strong>${result.score} / ${result.total}</strong>
            </div>
            <div>
              <span style="display:block; color: var(--ink-700); font-weight:700; text-transform:uppercase; letter-spacing:0.08em;">Percentage</span>
              <strong>${result.percentage}%</strong>
            </div>
          </div>
          ${passed ? `
            <p class="blank-state">You have successfully completed the Digital Citizen learning program.</p>
            <div class="certificate-actions" style="justify-content:flex-start;">
              <button class="primary-btn" data-action="navigate-certificate">View Certificate</button>
              <button class="secondary-btn" data-action="restart-final-assessment">Retake Assessment</button>
            </div>
          ` : `
            <p class="blank-state">Review the learning modules and try again.</p>
            <div class="certificate-actions" style="justify-content:flex-start;">
              <button class="primary-btn" data-action="restart-final-assessment">Retake Assessment</button>
              <button class="ghost-btn" data-action="navigate-modules">Review Modules</button>
            </div>
          `}
        </div>
      </main>
    `;
    return;
  }

  const answers = state.finalAssessment.answers || {};
  const currentIndex = state.finalAssessment.currentQuestion || 0;
  const question = finalAssessmentQuestions[currentIndex];

  app.innerHTML = `
    ${createHeader("assessment")}
    <main class="container page-shell">
      <div class="assessment-card">
        <h3>Final Digital Citizen Assessment</h3>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width: ${(Object.keys(answers).length / finalAssessmentQuestions.length) * 100}%"></div>
        </div>
        <div class="quiz-question">
          <h4>Question ${currentIndex + 1} of ${finalAssessmentQuestions.length}</h4>
          <p>${question.question}</p>
          <div class="options-list">
            ${question.options.map((option, idx) => `
              <label class="assessment-option">
                <input type="radio" name="final-assessment" value="${idx}" ${answers[currentIndex] === idx ? "checked" : ""} data-action="final-answer" data-question-index="${currentIndex}" data-option-index="${idx}" />
                <span>${String.fromCharCode(65 + idx)}. ${option}</span>
              </label>
            `).join("")}
          </div>
        </div>
        <div class="question-pills">
          ${finalAssessmentQuestions.map((_, idx) => `<button class="q-pill ${answers[idx] !== undefined ? "answered" : ""} ${idx === currentIndex ? "active" : ""}" data-action="jump-final-question" data-question-index="${idx}">${idx + 1}</button>`).join("")}
        </div>
        <div class="quiz-actions">
          <button class="quiz-nav-btn" data-action="final-prev">Previous</button>
          <button class="quiz-nav-btn" data-action="final-next">Next</button>
          <button class="primary-btn" data-action="submit-final-assessment">Submit Assessment</button>
        </div>
      </div>
    </main>
  `;
}

function renderCertificate() {
  const unlocked = state.certificateUnlocked;
  if (!unlocked) {
    app.innerHTML = `
      ${createHeader("certificate")}
      <main class="container page-shell">
        <div class="lock-card">
          <h3>Certificate Locked</h3>
          <p class="blank-state">Complete all four modules and pass the final assessment to unlock your certificate.</p>
        </div>
      </main>
    `;
    return;
  }

  const studentName = state.studentName || "Student Name";
  const modulesCompleted = moduleCatalog.filter((module) => computeModuleProgress(module).studyDone && computeModuleProgress(module).videosDone && computeModuleProgress(module).quizDone).map((module) => module.title).join(", ");
  const score = state.finalAssessment.result ? state.finalAssessment.result.percentage : 0;

  app.innerHTML = `
    ${createHeader("certificate")}
    <main class="container page-shell">
      <div class="certificate-shell">
        <article class="certificate" aria-label="Certificate of Completion">
          <div class="certificate-inner">
            <div class="certificate-badge">✦</div>
            <h1>CERTIFICATE OF COMPLETION</h1>
            <div class="subtitle-line">This certificate is proudly presented to</div>

            <div class="student-name">${studentName}</div>

            <p>for successfully completing</p>
            <h2 style="margin: 10px 0 0; font-size: clamp(2rem,2.4vw,3rem); color: var(--navy-900); font-family: 'Cormorant Garamond', serif; letter-spacing: 0.04em;">TRAINING ON DIGILOCKER, AADHAAR & PAN SERVICES</h2>

            <div class="certificate-grid">
              <div class="cert-item"><span>Course Name</span><strong>Digital Citizen Learning Program</strong></div>
              <div class="cert-item"><span>Completion Date</span><strong>${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</strong></div>
              <div class="cert-item"><span>Modules Completed</span><strong>${modulesCompleted}</strong></div>
              <div class="cert-item"><span>Final Assessment Score</span><strong>${score}%</strong></div>
              <div class="cert-item"><span>Achievement</span><strong>Digital Citizen</strong></div>
              <div class="cert-item"><span>Certificate ID</span><strong>DC360-2026-${Math.floor(Math.random() * 9000 + 1000)}</strong></div>
            </div>

            <div class="signatures">
              <div>
                <div class="signature-line">Project Guide Signature</div>
              </div>
              <div>
                <div class="signature-line">Student Signature</div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="certificate-actions">
        <button class="cert-btn" data-action="download-certificate">Download Certificate</button>
        <button class="cert-btn secondary" data-action="print-certificate">Print Certificate</button>
      </div>
    </main>
  `;
}

function buildResultForModule(moduleId) {
  const module = moduleCatalog.find((item) => item.id === moduleId);
  const answers = moduleState(moduleId).answers;
  const review = module.quiz.map((question, index) => {
    const userAnswerIndex = answers[index];
    const userAnswer = userAnswerIndex !== undefined ? question.options[userAnswerIndex] : null;
    const correctAnswer = question.options[question.correct];
    const wrongReason = question.options
      .map((option, optionIndex) => optionIndex !== question.correct ? `${String.fromCharCode(65 + optionIndex)}: ${option}` : null)
      .filter(Boolean)
      .join("; ");

    return {
      index,
      question: question.question,
      userAnswer,
      correctAnswer,
      explanation: question.explanation,
      wrongReason
    };
  });

  const correct = module.quiz.reduce((count, question, index) => count + (answers[index] === question.correct ? 1 : 0), 0);
  const incorrect = module.quiz.length - correct - Object.keys(answers).filter((key) => module.quiz[Number(key)] && answers[Number(key)] === undefined).length;
  const unanswered = module.quiz.length - Object.keys(answers).length;

  const result = {
    score: correct,
    total: module.quiz.length,
    percentage: Math.round((correct / module.quiz.length) * 100),
    correct,
    incorrect: Math.max(0, module.quiz.length - correct - unanswered),
    unanswered,
    review
  };

  moduleState(moduleId).quizResult = result;
  moduleState(moduleId).quizSubmitted = true;
  saveState();
  return result;
}

function submitModuleQuiz(moduleId) {
  const module = moduleCatalog.find((item) => item.id === moduleId);
  const result = buildResultForModule(moduleId);
  moduleState(moduleId).quizSubmitted = true;
  moduleState(moduleId).quizResult = result;
  saveState();
  renderModulePage(moduleId);
}

function submitFinalAssessment() {
  const answers = state.finalAssessment.answers || {};
  const total = finalAssessmentQuestions.length;
  let score = 0;

  finalAssessmentQuestions.forEach((question, index) => {
    if (answers[index] === question.correct) {
      score += 1;
    }
  });

  const percentage = Math.round((score / total) * 100);
  state.finalAssessment = {
    ...state.finalAssessment,
    submitted: true,
    result: {
      score,
      total,
      percentage,
      correct: score,
      incorrect: total - score - (total - Object.keys(answers).length),
      unanswered: total - Object.keys(answers).length
    }
  };

  if (percentage >= 70) {
    state.certificateUnlocked = true;
  }
  saveState();
  renderAssessmentPage();
}

function handleAction(action, event) {
  if (action === "navigate-home") return renderHomePage();
  if (action === "navigate-dashboard") return renderDashboard();
  if (action === "navigate-modules") return renderHomePage();
  if (action === "navigate-assessment") return renderAssessmentPage();
  if (action === "navigate-certificate") return renderCertificate();
  if (action === "open-module") {
    const moduleId = event.target.closest("[data-module-id]")?.dataset.moduleId;
    return renderModulePage(moduleId);
  }
  if (action === "mark-studied") {
    const moduleId = event.target.closest("[data-module-id]")?.dataset.moduleId;
    moduleState(moduleId).studied = true;
    saveState();
    return renderModulePage(moduleId);
  }
  if (action === "toggle-video") {
    const moduleId = event.target.closest("[data-module-id]")?.dataset.moduleId;
    const videoId = event.target.closest("[data-video-id]")?.dataset.videoId;
    const watched = moduleState(moduleId).watched;
    if (watched.includes(videoId)) {
      moduleState(moduleId).watched = watched.filter((id) => id !== videoId);
    } else {
      watched.push(videoId);
      moduleState(moduleId).watched = watched;
    }
    saveState();
    return renderModulePage(moduleId);
  }
  if (action === "watch-video") {
    const moduleId = event.target.closest("[data-module-id]")?.dataset.moduleId;
    const videoId = event.target.closest("[data-video-id]")?.dataset.videoId;
    const watched = moduleState(moduleId).watched;
    if (!watched.includes(videoId)) {
      watched.push(videoId);
      moduleState(moduleId).watched = watched;
      saveState();
    }
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank", "noopener,noreferrer");
    return renderModulePage(moduleId);
  }
  if (action === "select-answer") {
    const moduleId = event.target.closest("[data-module-id]")?.dataset.moduleId;
    const questionIndex = Number(event.target.closest("[data-question-index]")?.dataset.questionIndex);
    const optionIndex = Number(event.target.closest("[data-option-index]")?.dataset.optionIndex);
    moduleState(moduleId).answers[questionIndex] = optionIndex;
    moduleState(moduleId).currentQuestion = questionIndex;
    saveState();
    return renderModulePage(moduleId);
  }
  if (action === "jump-question") {
    const moduleId = event.target.closest("[data-module-id]")?.dataset.moduleId;
    const questionIndex = Number(event.target.closest("[data-question-index]")?.dataset.questionIndex);
    moduleState(moduleId).currentQuestion = questionIndex;
    saveState();
    return renderModulePage(moduleId);
  }
  if (action === "quiz-prev") {
    const moduleId = event.target.closest("[data-module-id]")?.dataset.moduleId;
    const current = moduleState(moduleId).currentQuestion || 0;
    moduleState(moduleId).currentQuestion = Math.max(0, current - 1);
    saveState();
    return renderModulePage(moduleId);
  }
  if (action === "quiz-next") {
    const moduleId = event.target.closest("[data-module-id]")?.dataset.moduleId;
    const current = moduleState(moduleId).currentQuestion || 0;
    moduleState(moduleId).currentQuestion = Math.min(moduleCatalog.find((m) => m.id === moduleId).quiz.length - 1, current + 1);
    saveState();
    return renderModulePage(moduleId);
  }
  if (action === "quiz-clear") {
    const moduleId = event.target.closest("[data-module-id]")?.dataset.moduleId;
    const current = moduleState(moduleId).currentQuestion || 0;
    delete moduleState(moduleId).answers[current];
    moduleState(moduleId).review = moduleState(moduleId).review.filter((questionIndex) => questionIndex !== current);
    saveState();
    return renderModulePage(moduleId);
  }
  if (action === "quiz-review") {
    const moduleId = event.target.closest("[data-module-id]")?.dataset.moduleId;
    const current = moduleState(moduleId).currentQuestion || 0;
    if (!moduleState(moduleId).review.includes(current)) {
      moduleState(moduleId).review.push(current);
    }
    saveState();
    return renderModulePage(moduleId);
  }
  if (action === "submit-quiz") {
    const moduleId = event.target.closest("[data-module-id]")?.dataset.moduleId;
    return submitModuleQuiz(moduleId);
  }
  if (action === "retake-quiz") {
    const moduleId = event.target.closest("[data-module-id]")?.dataset.moduleId;
    moduleState(moduleId).answers = {};
    moduleState(moduleId).review = [];
    moduleState(moduleId).quizSubmitted = false;
    moduleState(moduleId).quizResult = null;
    moduleState(moduleId).currentQuestion = 0;
    saveState();
    return renderModulePage(moduleId);
  }
  if (action === "jump-final-question") {
    const questionIndex = Number(event.target.closest("[data-question-index]")?.dataset.questionIndex);
    state.finalAssessment.currentQuestion = questionIndex;
    saveState();
    return renderAssessmentPage();
  }
  if (action === "final-answer") {
    const questionIndex = Number(event.target.closest("[data-question-index]")?.dataset.questionIndex);
    const optionIndex = Number(event.target.closest("[data-option-index]")?.dataset.optionIndex);
    state.finalAssessment.answers[questionIndex] = optionIndex;
    state.finalAssessment.currentQuestion = questionIndex;
    saveState();
    return renderAssessmentPage();
  }
  if (action === "final-prev") {
    state.finalAssessment.currentQuestion = Math.max(0, (state.finalAssessment.currentQuestion || 0) - 1);
    saveState();
    return renderAssessmentPage();
  }
  if (action === "final-next") {
    state.finalAssessment.currentQuestion = Math.min(finalAssessmentQuestions.length - 1, (state.finalAssessment.currentQuestion || 0) + 1);
    saveState();
    return renderAssessmentPage();
  }
  if (action === "submit-final-assessment") {
    return submitFinalAssessment();
  }
  if (action === "restart-final-assessment") {
    state.finalAssessment = { submitted: false, answers: {}, result: null, currentQuestion: 0 };
    saveState();
    return renderAssessmentPage();
  }
  if (action === "download-certificate") {
    return window.print();
  }
  if (action === "print-certificate") {
    return window.print();
  }
}

app.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) return;
  const action = trigger.dataset.action;
  if (action) handleAction(action, event);
});

app.addEventListener("change", (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) return;
  const action = trigger.dataset.action;
  if (action === "toggle-video") {
    handleAction(action, event);
  }
  if (action === "final-answer") {
    handleAction(action, event);
  }
});

renderHomePage();
