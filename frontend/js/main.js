const BACKEND_URL = window.location.protocol === 'file:'
      ? 'http://localhost:3001'
      : `${window.location.protocol}//${window.location.hostname}:3001`;

const moduleCatalog = {
  digilocker: {
      key: 'digilocker',
          title: 'DigiLocker',
              page: 'digilocker.html',
                  badge: 'DigiLocker Explorer',
                      summary: 'Securely store, access and share important digital documents with confidence.',
                          intro: 'DigiLocker is a secure digital document wallet that helps citizens store, access and share official records in a trusted, paperless environment.',
                              objectives: [
                                    'Understand what DigiLocker is and why it matters.',
                                          'Learn how to store and access official documents securely.',
                                                'Know how to share documents safely with verified institutions.',
                                                      'Recognize the importance of privacy and document safety.'
                                                          ],
                                                              topics: [
                                                                    'What is DigiLocker?',
                                                                          'Purpose of DigiLocker',
                                                                                'Safe storing of official documents',
                                                                                      'Fetching and sharing documents',
                                                                                            'Verification and digital privacy',
                                                                                                  'Common issues and troubleshooting',
                                                                                                        'Responsible digital document use',
                                                                                                              'Document security best practices'
                                                                                                                  ],
                                                                                                                      keyFeatures: [
                                                                                                                            'Stores official records in one secure place.',
                                                                                                                                  'Helps reduce paper dependency and manual document handling.',
                                                                                                                                        'Supports faster verification for education and government processes.',
                                                                                                                                              'Promotes safe sharing through trusted institutions.'
                                                                                                                                                  ],
                                                                                                                                                      steps: [
                                                                                                                                                            'Open DigiLocker through the official government platform.',
                                                                                                                                                                  'Upload or fetch verified documents into the account.',
                                                                                                                                                                        'Access them when needed for admissions, verification or official work.',
                                                                                                                                                                              'Share them only with genuine institutions or authorized bodies.',
                                                                                                                                                                                    'Verify each request before sharing any document.'
                                                                                                                                                                                        ],
                                                                                                                                                                                            safetyTips: [
                                                                                                                                                                                                  'Never share OTPs or account credentials with anyone.',
                                                                                                                                                                                                        'Avoid suspicious links pretending to be DigiLocker support.',
                                                                                                                                                                                                              'Use only trusted official channels for document access.',
                                                                                                                                                                                                                    'Verify all document requests before sending files.'
                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                            questions: [
                                                                                                                                                                                                                                  { question: 'A university asks for a DigiLocker document for admission. What is the safest action?', options: ['Share the document immediately through any message link', 'Verify the university through official contact details before sharing the document', 'Post the document on social media for confirmation', 'Share the document with all classmates'], correct: 1, explanation: 'Always verify the institution through official channels before sharing any digital document.' },
                                                                                                                                                                                                                                        { question: 'Why is DigiLocker useful for students?', options: ['It allows unlimited public sharing of certificates', 'It lets them store and access important official documents in one secure digital place', 'It replaces the need for any identification document', 'It guarantees automatic admission approval'], correct: 1, explanation: 'DigiLocker helps students organize and access verified documents quickly and safely.' },
                                                                                                                                                                                                                                              { question: 'What should you do if a document does not appear in your DigiLocker account?', options: ['Delete the account and create a new one immediately', 'Ignore the issue', 'Check whether the document was uploaded correctly and confirm account access before retrying', 'Send the same document to everyone'], correct: 2, explanation: 'Access issues usually come from account, upload, or verification checks, not from deleting the locker.' },
                                                                                                                                                                                                                                                    { question: 'Which practice is best for document security?', options: ['Use the same password for every government account', 'Share account details with a trusted friend', 'Use a strong unique password and avoid suspicious links', 'Download files from unknown websites'], correct: 2, explanation: 'Strong unique passwords and caution reduce the risk of phishing and account compromise.' },
                                                                                                                                                                                                                                                          { question: 'A message claims to be from DigiLocker support and asks for your OTP. What should you do?', options: ['Provide it to verify the issue', 'Ignore the message and verify the official channel independently', 'Forward it to your classmates', 'Reply with your password'], correct: 1, explanation: 'No legitimate support service should ask for your OTP or password via message.' },
                                                                                                                                                                                                                                                                { question: 'What is one benefit of fetching documents into DigiLocker?', options: ['It makes every document available to all contacts', 'It helps keep verified documents ready for later access or institutional verification', 'It removes the need to verify identity', 'It guarantees faster approval in every department'], correct: 1, explanation: 'Fetching documents makes them easier to verify and use when needed.' },
                                                                                                                                                                                                                                                                      { question: 'Why should users be careful with public Wi-Fi when accessing DigiLocker?', options: ['Public Wi-Fi is always secure', 'Public networks can expose login details if the user is careless', 'DigiLocker does not require internet access', 'The app does not store personal data'], correct: 1, explanation: 'Public or shared networks can be risky, especially for sensitive services.' },
                                                                                                                                                                                                                                                                            { question: 'Which action best protects personal digital records?', options: ['Saving all documents in a public folder', 'Using official channels and verifying every access request before sharing', 'Uploading screenshots from unofficial sources', 'Sharing your login link with a family member'], correct: 1, explanation: 'Verified sharing and official access channels help protect records from misuse.' },
                                                                                                                                                                                                                                                                                  { question: 'What does verification of a shared DigiLocker document help with?', options: ['It eliminates the need for any document review', 'It confirms the receiving authority is genuine and the document is valid', 'It makes the document public to everyone', 'It removes all privacy concerns'], correct: 1, explanation: 'Verification helps ensure the document reaches the correct and trusted authority.' },
                                                                                                                                                                                                                                                                                        { question: 'A student accidentally sends a document to an unknown person. What is the best response?', options: ['Ignore it and do nothing', 'Delete the document and contact the official support channel or relevant institution', 'Send it again to more people for checks', 'Leave it public for everyone'], correct: 1, explanation: 'Quick and responsible reporting helps reduce risk and limit data exposure.' },
                                                                                                                                                                                                                                                                                              { question: 'Why is uploading only genuine documents important?', options: ['It makes the locker look more organized', 'It protects authenticity and trust in official verification processes', 'It automatically updates all institutions', 'It reduces the need for a password'], correct: 1, explanation: 'Only correct and genuine documents should be uploaded to protect trust.' },
                                                                                                                                                                                                                                                                                                    { question: 'If a DigiLocker request seems urgent and asks for immediate action, what should you do?', options: ['Accept it instantly without checking', 'Verify with official contact details before proceeding', 'Share every document to avoid delays', 'Send a screenshot to your friends'], correct: 1, explanation: 'Urgency is often a sign of scam behaviour; verification is safer.' },
                                                                                                                                                                                                                                                                                                          { question: 'Which statement is most accurate about safe DigiLocker usage?', options: ['Every link claiming to be from DigiLocker is safe', 'Safe usage means using official portals, strong passwords and careful verification', 'Any email asking for documents is legitimate', 'The user should share their password with support teams'], correct: 1, explanation: 'Official portals, strong passwords and verification are essential for safe use.' },
                                                                                                                                                                                                                                                                                                                { question: 'What should a user avoid when using DigiLocker?', options: ['Password management tools', 'Official support portals', 'Unknown links and requests for OTPs', 'Two-step verification'], correct: 2, explanation: 'Unknown links and OTP requests are common scam tactics.' },
                                                                                                                                                                                                                                                                                                                      { question: 'How does DigiLocker improve paperless service?', options: ['By making all digital documents public by default', 'By making document retrieval and verification easier while reducing physical paperwork', 'By removing the need for identity checks', 'By forcing all institutions to use only digital records'], correct: 1, explanation: 'It reduces dependency on physical documents and supports easier verification.' }
                                                                                                                                                                                                                                                                                                                          ]
                                                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                                                              aadhaar: {
                                                                                                                                                                                                                                                                                                                                  key: 'aadhaar',
                                                                                                                                                                                                                                                                                                                                      title: 'Aadhaar Services',
                                                                                                                                                                                                                                                                                                                                          page: 'aadhaar.html',
                                                                                                                                                                                                                                                                                                                                              badge: 'Aadhaar Learner',
                                                                                                                                                                                                                                                                                                                                                  summary: 'Understand Aadhaar services, updates, verification and digital safety practices.',
                                                                                                                                                                                                                                                                                                                                                      intro: 'Aadhaar is a citizen identity system used for official verification and digital access. It must be handled carefully through trusted channels and used only when necessary.',
                                                                                                                                                                                                                                                                                                                                                          objectives: [
                                                                                                                                                                                                                                                                                                                                                                'Understand the purpose and features of Aadhaar services.',
                                                                                                                                                                                                                                                                                                                                                                      'Learn how authentication and verification work safely.',
                                                                                                                                                                                                                                                                                                                                                                            'Recognize the importance of protected OTPs and secure updates.',
                                                                                                                                                                                                                                                                                                                                                                                  'Use official channels for corrections, updates and digital access.'
                                                                                                                                                                                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                                                                                                                                                                                          topics: [
                                                                                                                                                                                                                                                                                                                                                                                                'What is Aadhaar?',
                                                                                                                                                                                                                                                                                                                                                                                                      'Aadhaar services and identity access',
                                                                                                                                                                                                                                                                                                                                                                                                            'Aadhaar authentication and verification',
                                                                                                                                                                                                                                                                                                                                                                                                                  'Aadhaar update and e-Aadhaar',
                                                                                                                                                                                                                                                                                                                                                                                                                        'Virtual ID and digital identity use',
                                                                                                                                                                                                                                                                                                                                                                                                                              'Mobile and email linkage',
                                                                                                                                                                                                                                                                                                                                                                                                                                    'Privacy and secure handling',
                                                                                                                                                                                                                                                                                                                                                                                                                                          'Safe Aadhaar usage and digital safety awareness'
                                                                                                                                                                                                                                                                                                                                                                                                                                              ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                  keyFeatures: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                        'Authenticates citizen identity for legitimate services.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                              'Supports digital verification in official and trusted processes.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    'Allows updates and corrections through official systems.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'Requires users to protect OTPs, personal data and identity information.'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  steps: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        'Understand the purpose of Aadhaar in official digital processes.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              'Use Aadhaar only for legitimate and necessary services.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    'Verify the authenticity of any official request before acting.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'Never share OTPs, numbers or personal information with unknown callers.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                'Use official channels to update personal details or manage digital records.'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        safetyTips: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              'Never share your OTP with anyone, even if they claim to be an official agent.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    'Do not enter Aadhaar details on suspicious websites.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'Always verify information through trusted official portals.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                'Keep your mobile number and identity information protected.'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        questions: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { question: 'A caller says they are from a government office and asks for your Aadhaar OTP. What is the safe response?', options: ['Share it immediately to resolve the issue', 'Ask for official proof, verify through a trusted source and refuse to share the OTP', 'Share it with a family member for confirmation', 'Send a screenshot of the Aadhaar card'], correct: 1, explanation: 'An OTP is a private security token and should never be shared with unverified callers.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { question: 'Why is Aadhaar verification important?', options: ['It lets any website use personal data freely', 'It helps confirm identity for genuine service requests while reducing fraud risk', 'It removes the need for any password', 'It guarantees faster processing for all services'], correct: 1, explanation: 'Verification supports legitimate identity checks while reducing fraud and misuse.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { question: 'A service requests Aadhaar details for a valid purpose. What should you do first?', options: ['Provide the details in the first message you receive', 'Verify the service is legitimate and official before sharing information', 'Post the number in a public group', 'Ask a random contact for advice'], correct: 1, explanation: 'Identity data must only be shared with officially verified and necessary services.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { question: 'What is the main risk of using fake Aadhaar websites?', options: ['They may steal personal details, OTPs or identity information', 'They always improve the accuracy of records', 'They are approved by official authorities', 'They remove all online security checks'], correct: 0, explanation: 'Fake sites are often designed to capture personal information for fraud.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { question: 'What is the safest way to update Aadhaar details?', options: ['Use any quick website promising service', 'Use official portals and verify the update process before entering data', 'Share a photo of your Aadhaar card with multiple people', 'Send your OTP to a contact for validation'], correct: 1, explanation: 'Only trusted official processes should be used for identity-related updates.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { question: 'How should citizens treat e-Aadhaar digital copies?', options: ['Share them freely on social media', 'Store them securely and use them only through trusted official processes', 'Delete them without checking', 'Publish them in public folders'], correct: 1, explanation: 'Digital identity files should be protected and accessed via official channels only.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { question: 'Why should users avoid using unknown apps for Aadhaar-related tasks?', options: ['They can collect sensitive data or misuse identity documents', 'They automatically improve approval rates', 'They are always verified by the government', 'They guarantee secure verification'], correct: 0, explanation: 'Unknown apps may be misleading or malicious and can compromise personal data.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { question: 'Which practice is most responsible?', options: ['Sharing Aadhaar with everyone in a group chat', 'Using Aadhaar only when needed and protecting OTPs and identity data', 'Posting Aadhaar screenshots publicly for proof', 'Trusting every message that mentions Aadhaar'], correct: 1, explanation: 'Responsible use means limited sharing and careful protection of personal identity data.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { question: 'A person receives a fake call about Aadhaar verification. What should they do?', options: ['Send the OTP immediately to stop the call', 'End the call and independently verify the agency through official contact details', 'Share the mobile number in response', 'Reply with a photo of the Aadhaar card'], correct: 1, explanation: 'Independent verification is safer than reacting to urgent or suspicious calls.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { question: 'What does protecting your mobile number help with?', options: ['It makes all messages safe automatically', 'It reduces the chance of receiving fraudulent Aadhaar-related OTP requests', 'It ensures every unknown call is legitimate', 'It replaces the need for digital documentation'], correct: 1, explanation: 'Your mobile number is a major identity access point and should be protected.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { question: 'Which statement best reflects safe Aadhaar behaviour?', options: ['Never share OTPs, check legitimacy of requests and use official services only', 'Share OTPs with any family member to avoid delays', 'Provide passwords to unknown service agents', 'Use public Wi-Fi to complete all Aadhaar updates'], correct: 0, explanation: 'Safe Aadhaar use requires strict privacy and verification.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { question: 'What is the primary reason to limit exposure of Aadhaar data?', options: ['To reduce identity theft and fraud risk', 'To make the data more public', 'To increase the number of requests received', 'To guarantee faster verification'], correct: 0, explanation: 'The less personal identity data is exposed, the lower the risk of misuse.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { question: 'A student receives a text claiming the Aadhaar card is blocked and asks for confirmation. What should happen?', options: ['Answer the link to unblock it', 'Ignore the text and verify the message through an official channel', 'Forward it to all classmates', 'Reply with the Aadhaar number'], correct: 1, explanation: 'Urgent scam messages should be treated cautiously and checked independently.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { question: 'Which of the following is a secure action?', options: ['Using a public computer without logging out', 'Accessing official channels on a trusted device and logging out after use', 'Saving Aadhaar data in an unprotected note', 'Sending identity details in a group chat'], correct: 1, explanation: 'Device safety and secure access reduce the risk of unauthorized access.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { question: 'Why is caution with Aadhaar updates important?', options: ['Because incorrect or misleading updates can create identity confusion and fraud risk', 'Because updates happen automatically everywhere', 'Because Aadhaar does not affect any financial process', 'Because all messages are official'], correct: 0, explanation: 'Identity updates must be accurate and controlled to avoid misuse or confusion.' }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          pan: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              key: 'pan',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  title: 'PAN Services',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      page: 'pan.html',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          badge: 'PAN Pro',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              summary: 'Learn about PAN applications, corrections, status checks and responsible document handling.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  intro: 'PAN is an important financial and identity document used for tax-related and official services. It must be protected carefully and used only through genuine channels.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      objectives: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            'Understand what PAN is and why it matters.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  'Learn how PAN applications and status checks work.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        'Know how to handle corrections and service requests safely.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              'Recognize fraud risks and safe digital usage for PAN data.'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      topics: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            'What is PAN?',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  'Importance of PAN',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        'PAN application process',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              'e-PAN and digital access',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    'PAN correction and status tracking',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'Tax-related services',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                'Common mistakes and security risks',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      'Safe PAN usage and fraud prevention'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              keyFeatures: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    'PAN supports financial and tax identity processes.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'Status checks and corrections are handled through official service channels.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                'PAN data must be protected from phishing and identity misuse.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      'Digital PAN services improve convenience when used correctly.'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              steps: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    'Understand the lawful purpose of a PAN number.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'Apply through official government channels.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                'Check application or card status through trusted sources.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      'Avoid suspicious websites or urgency-based scam links.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            'Keep your PAN details private and only share when necessary.'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    safetyTips: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'Do not share PAN or OTP details on unknown websites.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                'Use official channels for PAN status or corrections.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      'Avoid clicking suspicious links claiming urgent service updates.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            'Protect all documents and screenshots that contain PAN information.'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    questions: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { question: 'A person receives a message saying their PAN application is pending and asks for a one-time code. What is the right action?', options: ['Share the code to complete the review', 'Ignore it and check the official portal directly', 'Reply with the PAN number', 'Forward it to everyone in the family'], correct: 1, explanation: 'Never share OTPs with an unverified message and verify through official channels instead.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { question: 'Why is PAN data sensitive?', options: ['It is not used in any formal process', 'It is linked to identity and financial records and must be protected', 'It should be public for easier confirmation', 'It is temporary and can be shared freely'], correct: 1, explanation: 'PAN data is important for identity and tax processes and can be misused if exposed.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { question: 'Which option is best for checking PAN status?', options: ['A random website promising instant results', 'The official service portal or trusted government channel', 'A social media post from an unknown person', 'A caller who asks for PAN details without official proof'], correct: 1, explanation: 'Official channels remain the safest and most reliable sources.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { question: 'What is the main risk of a fake PAN correction link?', options: ['It can steal personal data or OTPs', 'It always improves tax accuracy', 'It guarantees approval', 'It removes the need for records'], correct: 0, explanation: 'Fake links often aim to collect information or trick users into unauthorized actions.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { question: 'A citizen wants to download e-PAN. What should they do?', options: ['Use the official service only after checking it is genuine', 'Use any trending app', 'Share PAN details with every contact', 'Download from a random message link'], correct: 0, explanation: 'Official and verified pathways are the safest way to access digital PAN documents.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { question: 'Which behaviour is safer?', options: ['Posting PAN details in a WhatsApp group', 'Using official portals and limiting disclosure to trusted requirements', 'Sending screenshots to strangers', 'Answering unknown calls about PAN correction'], correct: 1, explanation: 'Limited sharing through official channels helps prevent fraud and misuse.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { question: 'Why does PAN data need careful verification before sharing?', options: ['Because every request is genuine', 'Because it can be used for identity theft or misinformation', 'Because PAN cannot be used for any official purpose', 'Because it is a public database'], correct: 1, explanation: 'PAN details are personal and sensitive; careless disclosure creates risk.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { question: 'A user sees an urgent message claiming a PAN correction is blocked. What is the safest response?', options: ['Open the link immediately', 'Use a known official site or call official support directly for verification', 'Send the OTP to confirm', 'Tell all friends to act immediately'], correct: 1, explanation: 'Urgency is often a manipulation tactic; verify through official channels.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { question: 'What is the purpose of an official PAN status check?', options: ['To verify if an application or record is valid and properly processed', 'To publicize the PAN number to all officials', 'To avoid any identity checking', 'To remove the need for secure storage'], correct: 0, explanation: 'Status checks help verify processes without unnecessary exposure or misuse.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { question: 'Which action best reduces PAN-related fraud risk?', options: ['Sharing PAN data with social media contacts', 'Keeping PAN records secure, using official channels and not sharing OTPs', 'Answering all unknown calls', 'Using any website with a clean design'], correct: 1, explanation: 'Protection and official channels reduce fraud risk effectively.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { question: 'What is a common error in PAN-related online services?', options: ['Checking the official source before entering any details', 'Using the correct official portal', 'Entering wrong or mismatched information in a correction form', 'Keeping records updated'], correct: 2, explanation: 'Incorrect personal details can delay or reject service processing.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { question: 'Which statement is accurate about PAN corrections?', options: ['Any fast correction website is reliable', 'Corrections should only be made through trusted and official methods', 'Correction requests should always be sent to all contacts', 'PAN numbers can be reused endlessly'], correct: 1, explanation: 'Accuracy and official channels matter more than speed.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { question: 'Why should a user avoid storing PAN records in an unprotected folder?', options: ['Because it may make the information easier to steal or misuse', 'Because the government requires them to be public', 'Because official services do not need them', 'Because PAN is not personal data'], correct: 0, explanation: 'Sensitive identity information should always be stored and shared carefully.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { question: 'A random caller says they can help with a PAN service if the user shares the OTP. What should happen?', options: ['Share the code to get faster service', 'End the call and verify the service separately', 'Send a screenshot of the PAN card', 'Ask the caller to update the PAN in public'], correct: 1, explanation: 'A caller should not be trusted without independent official verification.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { question: 'What does safe PAN usage involve?', options: ['Using official services, keeping details private, and not revealing OTPs or numbers to unknown sources', 'Sharing the number with anyone who asks politely', 'Publicly posting the PAN card for verification', 'Ignoring all official notice messages'], correct: 0, explanation: 'Safe usage is based on verification, privacy and responsible digital habits.' }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      'digital-safety': {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          key: 'digital-safety',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              title: 'Digital Safety',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  page: 'digital-safety.html',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      badge: 'Cyber Safety Champion',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          summary: 'Protect yourself from phishing, fake websites, identity theft and unsafe digital habits.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              intro: 'Digital safety is about protecting your identity, passwords, OTPs and personal data from cyber fraud and social engineering attacks in daily online life.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  objectives: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        'Recognize phishing and fake website patterns.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              'Learn OTP and password safety practices.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    'Understand online fraud, fake calls and scam behaviour.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'Build responsible and secure digital habits.'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  topics: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        'Strong passwords',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              'OTP safety',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    'Phishing and fake websites',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'Fake calls and SMS',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                'Suspicious links and social engineering',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      'Identity theft and cyber fraud',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            'Safe browsing habits',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  'Responsible digital behaviour'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          keyFeatures: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                'Protects personal data from criminals and scammers.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      'Teaches how to verify websites and messages before acting.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            'Reduces exposure to identity theft, OTP scams and fake services.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  'Builds safer and more responsible digital citizenship.'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          steps: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                'Use strong and unique passwords for important accounts.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      'Never share OTPs, passwords or personal information with anyone.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            'Verify links and websites before clicking or making payments.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  'Treat urgent calls and messages as potentially suspicious.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        'Use official channels and practice safe online behaviour at all times.'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                safetyTips: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      'Never share OTPs even if the message sounds urgent.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            'Do not click suspicious links or open fake government pages.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  'Keep your devices updated and use secure login practices.',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        'If unsure, verify the message through official contact methods.'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                questions: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { question: 'A message says your account is blocked and asks for an OTP immediately. What is the safest action?', options: ['Provide the OTP to unblock the account', 'Ignore the message and verify the service through an official source', 'Share the OTP with your friends', 'Reply with your bank account number'], correct: 1, explanation: 'Urgent service messages can be scams; official verification is safer.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { question: 'Why are fake websites dangerous?', options: ['They can steal passwords, personal data and OTPs', 'They always have official government seals', 'They are used only for educational purposes', 'They improve device security automatically'], correct: 0, explanation: 'Fake websites are designed to capture user information for fraud or misuse.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { question: 'What should you do if you receive a suspicious link?', options: ['Click it to confirm if it is legitimate', 'Do not click it and verify it through a trusted source', 'Share it with everyone to test', 'Forward it to a random contact for advice'], correct: 1, explanation: 'Suspicious links can be malicious or phishing attempts.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { question: 'Which password habit is safest?', options: ['Using the same password for all accounts', 'Writing all passwords in a public document', 'Using a unique strong password for each important account', 'Using a simple pattern with birthdays'], correct: 2, explanation: 'Unique strong passwords reduce the risk of a single breach affecting multiple services.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { question: 'A caller claims to be a government employee and asks for Aadhaar and PAN information. What is the best response?', options: ['Share the data immediately to avoid delays', 'Ask for official proof, verify independently and do not share personal information', 'Send the details to family members for confirmation', 'Use the number from the message in the text'], correct: 1, explanation: 'Caller identity and service legitimacy should be verified before disclosure.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { question: 'Which statement about OTP safety is correct?', options: ['OTPs are meant to be shared whenever someone claims to be from the service', 'OTPs are one-time security codes and should never be shared with unverified callers or websites', 'OTPs are only needed for social media accounts', 'OTPs can be copied to public chats when asked'], correct: 1, explanation: 'OTPs are sensitive security tokens and must be kept private.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { question: 'What is social engineering?', options: ['A form of legal digital communication', 'A tactic that uses trust, fear or urgency to manipulate users into revealing data', 'A method to improve cybersecurity awareness', 'A harmless online survey method'], correct: 1, explanation: 'Social engineering depends on manipulation rather than technical hacking alone.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                { question: 'A government-service message contains a link in an SMS. What is the safest action?', options: ['Open the link because the message mentions a government service', 'Ignore it and verify through the official website directly', 'Reply with the OTP immediately', 'Share the link with everyone in the contact list'], correct: 1, explanation: 'Independent verification is safer than acting on a suspicious message.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      { question: 'What is a good digital safety habit?', options: ['Clicking every urgent message to be updated', 'Using official websites and avoiding unverified requests', 'Posting personal information publicly for convenience', 'Sharing passwords with trusted friends'], correct: 1, explanation: 'Official websites and caution reduce the risk of scams and unauthorized access.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            { question: 'Why are fake SMS or fake calls harmful?', options: ['They may trick users into sharing OTPs, identity details or passwords', 'They always guarantee service completion', 'They are only used for government communication', 'They only matter in banking contexts'], correct: 0, explanation: 'Fake calls and SMS are common fraud tools used to steal personal information.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  { question: 'What is the correct response if a website looks slightly different from the official one?', options: ['Continue because it looks professional', 'Use a known official source or browser security check before entering data', 'Share personal details to validate it', 'Click the link because it might be the official page'], correct: 1, explanation: 'Lookalike websites are common phishing traps and should be treated with caution.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        { question: 'Which action best protects digital identity?', options: ['Always share personal details with anyone who asks', 'Protect passwords, OTPs and personal data while verifying every request', 'Use one universal password across services', 'Accept every urgent message from a service'], correct: 1, explanation: 'Caution and verification protect identity from scams and unauthorized access.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              { question: 'Why is it important to avoid public computers for sensitive accounts?', options: ['Public devices can be misused and leave users logged in or exposed', 'They are always safer than personal devices', 'They never carry any security risk', 'They automatically prevent fraud'], correct: 0, explanation: 'Public systems can expose account access and personal information if misused.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    { question: 'What should a user do if they are unsure whether a request is official?', options: ['Answer quickly to avoid missing the opportunity', 'Use an independent official contact or trusted source before taking action', 'Reply with the identity number to confirm', 'Send the link to everyone for review'], correct: 1, explanation: 'Independent verification avoids scams and prevents data exposure.' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          { question: 'Which statement best shows responsible digital behaviour?', options: ['Trust every urgent government message', 'Verify the source, avoid suspicious links and protect OTPs and passwords', 'Share personal details publicly to save time', 'Use fake websites to compare options'], correct: 1, explanation: 'Responsible digital behaviour is about cautious, informed and secure actions.' }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
const finalAssessmentQuestions = [
  { question: 'A student receives an urgent message claiming that a DigiLocker document must be shared before a deadline. What is the safest action?', options: ['Share it immediately on the message', 'Verify the institution through an official contact before sharing any credential or document', 'Post it in a class chat', 'Send it to everyone in contact list'], correct: 1, explanation: 'Urgent requests should be verified before any document is shared.' },
    { question: 'A caller requests your Aadhaar OTP while claiming to be from a government office. What is the correct response?', options: ['Share it to complete the verification step', 'Refuse to share the OTP and verify the claim through official channels', 'Ask a friend to confirm', 'Send a screenshot of the Aadhaar card'], correct: 1, explanation: 'OTPs are private and should never be shared with unverified callers.' },
      { question: 'Which is the safest method for updating PAN details?', options: ['Use any website trending on social media', 'Use an official, trusted service and verify details before submission', 'Send the PAN number to a random contact', 'Use a fake portal to test the transaction'], correct: 1, explanation: 'Only official channels should be used for PAN updates and corrections.' },
        { question: 'Why is it important to protect your OTPs and passwords?', options: ['They are unnecessary for many services', 'They are vital security tokens that should never be shared with unknown persons', 'They can be posted publicly for convenience', 'They are only useful for remote access'], correct: 1, explanation: 'Passwords and OTPs are core security controls and must stay private.' },
          { question: 'You receive an email that looks almost identical to a government service and asks you to click a login link. What should you do?', options: ['Click immediately because it mentions a government service', 'Open the official site directly from a trusted source and ignore the email unless verified', 'Reply with your document details', 'Forward it to all contacts'], correct: 1, explanation: 'Lookalike emails are common phishing attempts and should be verified independently.' },
            { question: 'What is the safest way to use DigiLocker with sensitive documents?', options: ['Share a document with anyone who requests it', 'Use official channels, strong passwords and verify any access request before sharing', 'Download documents on public computers without checking', 'Send copies to unknown social media messages'], correct: 1, explanation: 'Document security depends on controlled sharing and official access.' },
              { question: 'A service requests Aadhaar for a valid process. What is the best first check?', options: ['Whether the request is official and relevant to the transaction', 'Whether the caller seems impatient', 'Whether more than one person mentions it', 'Whether the app is popular on social media'], correct: 0, explanation: 'Legitimacy and relevance are more important than urgency or popularity.' },
                { question: 'Which action shows safe handling of PAN information?', options: ['Sharing the number in a public group chat', 'Keeping it private and using official channels only when necessary', 'Sending it to a stranger who claims to help', 'Posting it on social media to verify if it is valid'], correct: 1, explanation: 'Sensitive identity information should be restricted to official and necessary use.' },
                  { question: 'Why should a user avoid clicking random links from SMS or social media?', options: ['They are always harmless', 'They may open fake websites or lead to identity theft', 'They always belong to official services', 'They are only for promoting entertainment'], correct: 1, explanation: 'Random links are a common entry point for phishing and scams.' },
                    { question: 'Which habit best protects a student online?', options: ['Use one universal password across all services', 'Use strong unique passwords and verify requests before sharing personal data', 'Share identity details with anyone who sounds official', 'Open every link that feels urgent'], correct: 1, explanation: 'Digital security improves when users protect credentials and verify requests.' },
                      { question: 'What is the main reason to verify the source of a digital document request?', options: ['To ensure the request is legitimate and not a scam or data-stealing attempt', 'To make the document visible to everyone', 'To ensure the document disappears', 'To allow all citizens to access the records'], correct: 0, explanation: 'Verification prevents unauthorized disclosure and helps protect digital documents.' },
                        { question: 'Which action reduces cyber fraud risk the most?', options: ['Trust every message that mentions official terms', 'Use official service portals, strong passwords and independent verification', 'Share OTPs for faster validation', 'Click any urgent link to be safe'], correct: 1, explanation: 'Official procedures and independent verification reduce scam exposure.' },
                          { question: 'A user is unsure whether a file or message is official. What should they do?', options: ['Share it with many people to gather opinions', 'Check the official source directly before taking action', 'Click it because it might be important', 'Reply with identity details to confirm'], correct: 1, explanation: 'Official verification is the correct path when trust is uncertain.' },
                            { question: 'Why should a citizen keep personal identity data limited to necessary use?', options: ['Because any data exposure can increase the risk of fraud or identity misuse', 'Because the data is only useful for public posting', 'Because all services require public data', 'Because identity data has no legal or privacy value'], correct: 0, explanation: 'Limiting sharing reduces risk and helps maintain privacy.' },
                              { question: 'What should you do if a website asks for a password or OTP unexpectedly?', options: ['Provide it to continue', 'Leave the website and verify it through a trusted official source', 'Save it in a public file for later', 'Forward it to friends for a second opinion'], correct: 1, explanation: 'Unexpected password or OTP requests are often scam attempts.' },
                                { question: 'Which practice reflects responsible digital citizenship?', options: ['Using any service that asks for identity data quickly', 'Verifying sources, protecting OTPs and using official digital services only when needed', 'Ignoring all suspicious warnings', 'Posting personal data in public groups'], correct: 1, explanation: 'Responsible digital citizenship relies on caution and secure behaviour.' },
                                  { question: 'Why is checking the website address important before entering sensitive details?', options: ['Because all websites are equally safe', 'Because fake websites may mimic official portals to steal information', 'Because the exact address does not matter', 'Because official sites never ask for personal details'], correct: 1, explanation: 'Website address and URL inspection helps detect phishing and fraud.' },
                                    { question: 'A user is asked to install an app to complete a government service. What is the safe response?', options: ['Install it on the first recommendation', 'Check whether it is official, trusted and necessary before installing or sharing details', 'Give the app all personal details immediately', 'Install it because it looks popular'], correct: 1, explanation: 'Unverified apps can be malicious and should be avoided unless official.' },
                                      { question: 'What is the main value of digital safety learning?', options: ['It helps users avoid scams, protect identity and act responsibly online', 'It ensures every link is trustworthy', 'It replaces the need for education', 'It removes all cybersecurity risk from the internet'], correct: 0, explanation: 'Digital safety training improves awareness and helps prevent common frauds.' },
                                        { question: 'A student receives a fake call saying their DigiLocker or PAN status is in danger. What should they do?', options: ['Provide details to stop the tension', 'End the call and verify independently through official channels', 'Ask the caller to send their OTP', 'Share the document by email'], correct: 1, explanation: 'Scammers use urgency; independent verification and refusal to share OTPs are safer.' }
                                        ];
                                        
function getCurrentUser() {
  try {
      return JSON.parse(localStorage.getItem('currentUser') || 'null');
        } catch (error) {
            return null;
              }
              }
              
function saveCurrentUser(user) {
  if (!user) {
      localStorage.removeItem('currentUser');
          return;
            }
                                          const name = user.name || user.fullName || '';
                                          localStorage.setItem('currentUser', JSON.stringify({ ...user, name, fullName: user.fullName || name }));
              }

function getUserStorageKey(key) {
      const user = getCurrentUser();
      const identity = user?.id ?? user?.email;
      return identity ? `user:${encodeURIComponent(String(identity))}:${key}` : key;
}

function getRequestErrorMessage(error) {
      if (error instanceof TypeError && /fetch/i.test(error.message)) {
            return `Cannot reach the learning server at ${BACKEND_URL}. Start the project with npm start, then open http://localhost:3000.`;
      }
      return error.message || 'The request could not be completed.';
}
              
function readLocalStorage(key, fallback) {
  try {
                  const value = JSON.parse(localStorage.getItem(getUserStorageKey(key)) || 'null');
          return value ?? fallback;
            } catch (error) {
                return fallback;
                  }
                  }
                  
function writeLocalStorage(key, value) {
      localStorage.setItem(getUserStorageKey(key), JSON.stringify(value));
  }
  
function getCompletedVideos() {
  return readLocalStorage('completedVideos', []);
  }
  
function setCompletedVideos(videos) {
  writeLocalStorage('completedVideos', videos);
  }
  
function getCompletedModules() {
  return readLocalStorage('completedModules', []);
  }
  
function setCompletedModules(modules) {
  writeLocalStorage('completedModules', modules);
  }
  
function getQuizResults() {
  return readLocalStorage('quizResults', {});
  }
  
function setQuizResults(results) {
  writeLocalStorage('quizResults', results);
  }
  
function getQuizAnswers() {
  return readLocalStorage('quizAnswers', {});
  }
  
function setQuizAnswers(answers) {
  writeLocalStorage('quizAnswers', answers);
  }
  
function getFinalAssessmentState() {
  return readLocalStorage('finalAssessment', { answers: {}, currentIndex: 0, completed: false, result: null });
  }
  
function setFinalAssessmentState(state) {
  writeLocalStorage('finalAssessment', state);
  }
  
function getVideosByModule(moduleKey) {
      return (window.videoLibrary && window.videoLibrary[moduleKey]) || [];
    }
    
function getWatchedVideoIds(moduleKey) {
  return getCompletedVideos()
      .filter((entry) => entry.startsWith(`${moduleKey}:`))
          .map((entry) => entry.replace(`${moduleKey}:`, ''));
          }
          
function markModuleComplete(moduleKey) {
  const modules = getCompletedModules();
    if (!modules.includes(moduleKey)) {
        modules.push(moduleKey);
            setCompletedModules(modules);
              }
              }
              
function configureNavigation(pageName = 'home') {
      const nav = document.querySelector('.topbar .nav-links');
      if (!nav) return;

      const user = getCurrentUser();
      const activePage = moduleCatalog[pageName] ? 'modules' : pageName;
      const links = [
            ['home', 'Home', 'index.html'],
            ['about', 'About', 'about.html'],
            ['modules', 'Modules', 'modules.html'],
            ['videos', 'Videos', 'videos.html'],
            ['quiz', 'Quiz', 'quiz.html'],
            ['games', 'Games', 'games.html'],
            ['service-finder', 'Service Finder', 'service-finder.html'],
            ['faq', 'FAQ', 'faq.html']
      ];

      nav.id = 'mainNav';
      nav.innerHTML = links.map(([key, label, href]) => `<a class="nav-btn ${activePage === key ? 'active' : ''}" href="${href}" ${activePage === key ? 'aria-current="page"' : ''}>${label}</a>`).join('');
      nav.innerHTML += user
            ? `<a class="nav-btn ${activePage === 'dashboard' ? 'active' : ''}" href="dashboard.html">Dashboard</a><a class="nav-btn ${activePage === 'certificate' ? 'active' : ''}" href="certificate.html">Certificate</a><button class="nav-btn" type="button" data-action="logout">Logout</button>`
            : '<a class="nav-btn" href="login.html">Login</a><a class="nav-btn" href="register.html">Register</a>';

      const brandName = nav.parentElement.querySelector('.brand span:last-child');
      if (brandName) brandName.textContent = 'DIGITAL CITIZEN 360';
      let menuButton = nav.parentElement.querySelector('[data-nav-toggle]');
      if (!menuButton) {
            menuButton = document.createElement('button');
            menuButton.className = 'mobile-nav-toggle';
            menuButton.type = 'button';
            menuButton.dataset.navToggle = '';
            menuButton.setAttribute('aria-controls', 'mainNav');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'Open navigation menu');
            menuButton.textContent = 'Menu';
            nav.before(menuButton);
      }
}

function renderHeader(pageName = 'home') {
  const holder = document.getElementById('site-header');
    if (!holder) return;
    
  const user = getCurrentUser();
    holder.innerHTML = `
        <header class="topbar">
              <div class="container topbar-inner">
                      <div class="brand">
                                <div class="brand-mark">✓</div>
                                          <span>Digital Citizen Learning</span>
                                                  </div>
                                                          <nav class="nav-links" aria-label="Main navigation">
                                                                    <a class="nav-btn ${pageName === 'home' ? 'active' : ''}" href="index.html">Home</a>
                                                                              <a class="nav-btn ${pageName === 'modules' ? 'active' : ''}" href="modules.html">Modules</a>
                                                                                        <a class="nav-btn ${pageName === 'dashboard' ? 'active' : ''}" href="dashboard.html">Dashboard</a>
                                                                                                  <a class="nav-btn ${pageName === 'certificate' ? 'active' : ''}" href="certificate.html">Certificate</a>
                                                                                                            ${user ? `<a class="nav-btn" href="dashboard.html">${user.fullName}</a>` : `<a class="nav-btn" href="login.html">Login</a>`}
                                                                                                                      ${user ? '<button class="nav-btn" id="logoutNavBtn" type="button">Logout</button>' : ''}
                                                                                                                              </nav>
                                                                                                                                    </div>
                                                                                                                                        </header>
                                                                                                                                          `;
                                                                                                                                          
      configureNavigation(pageName);
}
                          
function requireAuth() {
  if (!getCurrentUser()) {
      window.location.href = 'login.html';
          return false;
            }
              return true;
              }
              
function renderHomePage() {
  const app = document.getElementById('app');
    if (!app) return;
    
  app.innerHTML = `
      <header class="topbar">
            <div class="container topbar-inner">
                    <div class="brand">
                              <div class="brand-mark">✓</div>
                                        <span>Digital Citizen Learning</span>
                                                </div>
                                                        <nav class="nav-links" aria-label="Main navigation">
                                                                  <a class="nav-btn active" href="index.html">Home</a>
                                                                            <a class="nav-btn" href="modules.html">Modules</a>
                                                                                      <a class="nav-btn" href="dashboard.html">Dashboard</a>
                                                                                                <a class="nav-btn" href="certificate.html">Certificate</a>
                                                                                                          ${getCurrentUser() ? `<a class="nav-btn" href="dashboard.html">${getCurrentUser().fullName}</a>` : '<a class="nav-btn" href="login.html">Login</a>'}
                                                                                                                    ${getCurrentUser() ? '<button class="nav-btn" id="logoutHomeBtn" type="button">Logout</button>' : ''}
                                                                                                                            </nav>
                                                                                                                                  </div>
                                                                                                                                      </header>
                                                                                                                                          <main class="container page-shell">
                                                                                                                                                <section class="hero">
                                                                                                                                                        <div class="hero-grid">
                                                                                                                                                                  <div>
                                                                                                                                                                              <span class="kicker">Digital literacy portal</span>
                                                                                                                                                                                          <h1>Training on <span>DigiLocker, Aadhaar & PAN Services</span></h1>
                                                                                                                                                                                                      <p class="subtitle">Learn digital services, understand online processes and stay safe in a connected world.</p>
                                                                                                                                                                                                                  <div class="hero-actions">
                                                                                                                                                                                                                                <a class="primary-btn" href="modules.html">Start Learning</a>
                                                                                                                                                                                                                                              <a class="secondary-btn" href="modules.html">Explore Modules</a>
                                                                                                                                                                                                                                                            <a class="ghost-btn" href="modules.html">Watch Videos</a>
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                            <div class="hero-panel">
                                                                                                                                                                                                                                                                                                        <div class="hero-summary">
                                                                                                                                                                                                                                                                                                                      <div class="summary-box"><strong>4</strong><span>Modules</span></div>
                                                                                                                                                                                                                                                                                                                                    <div class="summary-box"><strong>20</strong><span>Questions</span></div>
                                                                                                                                                                                                                                                                                                                                                  <div class="summary-box"><strong>70%</strong><span>Pass Mark</span></div>
                                                                                                                                                                                                                                                                                                                                                                <div class="summary-box"><strong>1</strong><span>Certificate</span></div>
                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                    </section>
                                                                                                                                                                                                                                                                                                                                                                                                    
      <section id="about" class="track-list">
              <h3 class="section-title">Your Learning Journey</h3>
                      <div class="journey-line">
                                <div class="journey-step">Learn</div>
                                          <div class="journey-step">Watch</div>
                                                    <div class="journey-step">Practice</div>
                                                              <div class="journey-step">Quiz</div>
                                                                        <div class="journey-step">Complete</div>
                                                                                  <div class="journey-step">Certificate</div>
                                                                                          </div>
                                                                                                </section>
                                                                                                
      <section class="section-block">
              <h2 class="section-title">Learning Modules</h2>
                      <div class="module-grid">
                                ${Object.values(moduleCatalog).map((module) => `
                                            <article class="module-card">
                                                          <div>
                                                                          <div class="module-card-header">
                                                                                            <div class="module-icon">${module.title[0]}</div>
                                                                                                              <span class="module-pill">${module.title}</span>
                                                                                                                              </div>
                                                                                                                                              <h3>${module.title}</h3>
                                                                                                                                                              <p>${module.summary}</p>
                                                                                                                                                                            </div>
                                                                                                                                                                                          <div class="module-meta">
                                                                                                                                                                                                          <span>${module.title === 'Digital Safety' ? 'Online safety' : module.title === 'Aadhaar Services' ? 'Identity services' : module.title === 'PAN Services' ? 'Tax services' : 'Digital documents'}</span>
                                                                                                                                                                                                                          <a class="ghost-btn" href="${module.page}">Open</a>
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                    </article>
                                                                                                                                                                                                                                                              `).join('')}
                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                            </section>
                                                                                                                                                                                                                                                                                </main>
                                                                                                                                                                                                                                                                                  `;

                                                                                                                                                                                                                                                                  configureNavigation('home');
                                                                                                                                                                                                                                                                                  
  const logoutHomeBtn = document.getElementById('logoutHomeBtn');
    if (logoutHomeBtn) {
        logoutHomeBtn.addEventListener('click', () => {
              saveCurrentUser(null);
                    window.location.href = 'login.html';
                        });
                          }
                          }
                          
function renderModulesPage() {
  renderHeader('modules');
    const modulesGrid = document.getElementById('modulesGrid');
      if (!modulesGrid) return;
        modulesGrid.innerHTML = Object.values(moduleCatalog).map((module) => `
            <article class="module-card">
                  <div>
                          <div class="module-card-header">
                                    <div class="module-icon">${module.title[0]}</div>
                                              <span class="module-pill">${module.key}</span>
                                                      </div>
                                                              <h3>${module.title}</h3>
                                                                      <p>${module.summary}</p>
                                                                            </div>
                                                                                  <div class="module-meta">
                                                                                          <span>Progress</span>
                                                                                                  <a class="ghost-btn" href="${module.page}">Open</a>
                                                                                                        </div>
                                                                                                            </article>
                                                                                                              `).join('');
                                                                                                              }
                                                                                                              
function renderVideoCards(videos) {
      return videos.map((video) => {
            const videoId = video.videoId || video.id;
            const watched = getCompletedVideos().includes(`${video.module}:${videoId}`);
            const moduleTitle = moduleCatalog[video.module]?.title || 'Digital Safety';
            return `
                  <article class="video-card">
                        <div class="video-wrapper">
                              <div class="video-poster" id="videoPoster-${videoId}">
                                    <img src="${video.thumbnail}" alt="Thumbnail for ${video.title}" loading="lazy" />
                                    <button class="video-play-btn" type="button" data-action="play-video" data-video-id="${videoId}">Watch Video</button>
                              </div>
                              <div class="video-embed" id="videoEmbed-${videoId}" hidden>
                                    <iframe title="${video.title}" data-src="https://www.youtube.com/embed/${videoId}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
                                    <p class="video-fallback" id="videoFallback-${videoId}" hidden>Unable to play this video here. <a href="${video.url}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a></p>
                              </div>
                        </div>
                        <div class="video-body">
                              <div class="meta-row"><span class="video-meta">${moduleTitle}</span><span class="video-tag">${video.topic}</span></div>
                              <h3 class="video-title">${video.title}</h3>
                              <p>${video.description}</p>
                              <p class="video-source">Source: ${video.source}</p>
                              <div class="video-actions">
                                    <a class="watch-btn" href="${video.url}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                                    <label class="video-check"><input type="checkbox" data-action="toggle-video" data-module="${video.module}" data-video-id="${videoId}" ${watched ? 'checked' : ''} /><span>Mark as Completed</span></label>
                              </div>
                        </div>
                  </article>
            `;
      }).join('');
}

function renderVideosPage(selectedModule = 'all') {
      renderHeader('videos');
      const grid = document.getElementById('videosPageGrid');
      const filter = document.getElementById('videoModuleFilter');
      const summary = document.getElementById('videoProgressSummary');
      if (!grid || !filter || !summary) return;

      filter.value = selectedModule;
      const videos = selectedModule === 'all' ? window.videos : getVideosByModule(selectedModule);
      const completed = getCompletedVideos().length;
      summary.textContent = `Videos watched: ${completed} / ${window.videos.length}`;
      grid.innerHTML = renderVideoCards(videos);
}

function renderQuizPage(started = false) {
      if (!requireAuth()) return;
      renderHeader('quiz');
      const main = document.getElementById('quizPageMain');
      if (!main) return;

      const moduleKey = new URLSearchParams(window.location.search).get('module');
      if (!moduleCatalog[moduleKey]) {
            main.innerHTML = `<section class="assessment-card"><h1>Choose a Module Quiz</h1><p class="blank-state">Each module quiz contains 15 questions and has no timer.</p><div class="module-grid">${Object.values(moduleCatalog).map((module) => `<article class="module-card"><h2>${module.title}</h2><p>${module.summary}</p><a class="primary-btn" href="quiz.html?module=${module.key}">Choose Module</a></article>`).join('')}</div></section>`;
            return;
      }

      const module = moduleCatalog[moduleKey];
      const result = getQuizResults()[moduleKey];
      if (result) {
            main.innerHTML = `<section class="assessment-card"><h1>${module.title} Quiz Result</h1>${renderQuizResult(moduleKey, result)}<div class="quiz-actions"><a class="ghost-btn" href="${module.page}">Return to Module</a><a class="ghost-btn" href="dashboard.html">Dashboard</a></div></section>`;
            return;
      }

      if (started) {
            main.innerHTML = `<section class="quiz-panel"><h1>${module.title} Quiz</h1>${renderQuizForm(moduleKey)}</section>`;
            return;
      }

      main.innerHTML = `<section class="assessment-card"><span class="kicker">Module assessment</span><h1>${module.title} Quiz</h1><div class="final-summary"><div class="stat-box"><strong>${module.questions.length}</strong><span>Questions</span></div><div class="stat-box"><strong>Applied</strong><span>Difficulty</span></div><div class="stat-box"><strong>No timer</strong><span>Format</span></div></div><p class="blank-state">Choose the safest and most responsible response in each scenario. Your answers remain in this browser until you submit.</p><div class="quiz-actions"><button class="primary-btn" type="button" data-action="start-module-quiz" data-module="${moduleKey}">Start Quiz</button><a class="ghost-btn" href="${module.page}">Return to Module</a></div></section>`;
}

function getGameScores() {
      return readLocalStorage('gameScores', {});
}

function renderGamesPage() {
      if (!requireAuth()) return;
      renderHeader('games');
      const main = document.getElementById('gamesMain');
      if (!main) return;

      const games = [
            { key: 'fraud-detector', title: 'Digital Fraud Detector', topic: 'DigiLocker', scenario: 'A fictional student receives an urgent request to share a digital document through an unfamiliar link.', options: ['Open the link and share immediately', 'Verify the request through the institution’s published contact details first', 'Forward the link to classmates'], correct: 1, explanation: 'Urgency and unfamiliar links are warning signs. Verify independently before sharing a document.' },
            { key: 'phishing-investigator', title: 'Phishing Investigator', topic: 'Digital Safety', scenario: 'A message threatens account suspension unless a password is entered on a lookalike website.', options: ['Use the message link to sign in', 'Avoid the link and navigate to the known official website directly', 'Reply with personal information to confirm'], correct: 1, explanation: 'Navigate to the official site independently instead of trusting links in unexpected messages.' },
            { key: 'service-decision', title: 'Digital Service Decision', topic: 'Aadhaar', scenario: 'A caller claims identity verification is urgent and asks for a one-time code.', options: ['Share the code to prevent delays', 'End the call and contact the official service independently', 'Ask the caller to send another message'], correct: 1, explanation: 'Never disclose an OTP to a caller. Verify the claim through an official channel.' },
            { key: 'document-match', title: 'Document & Service Match', topic: 'PAN', scenario: 'A user wants to check an e-PAN request and receives links from unknown senders.', options: ['Open the link with the most official-looking logo', 'Use the Income Tax Department website from a trusted source', 'Send the request details to both senders'], correct: 1, explanation: 'Use the official Income Tax Department website, not unverified links.' },
            { key: 'cyber-case-study', title: 'Cyber Safety Case Study', topic: 'Digital Safety', scenario: 'A fictional classmate discovers that a private document went to the wrong recipient.', options: ['Share it again in a group to ask what to do', 'Stop further sharing and contact the relevant official support channel', 'Ignore it because it happened once'], correct: 1, explanation: 'Limit further exposure and report the mistake through the appropriate support channel.' }
      ];
      const params = new URLSearchParams(window.location.search);
      const gameKey = params.get('game');
      const game = games.find((item) => item.key === gameKey);
      const scores = getGameScores();

      if (!game) {
            main.innerHTML = `<section class="page-heading"><span class="kicker">Practice safely</span><h1>Digital Learning Games</h1><p class="subtitle">Fictional decision scenarios. No government IDs, OTPs or financial information are collected.</p></section><section class="module-grid">${games.map((item) => `<article class="module-card"><div><span class="module-pill">${item.topic}</span><h2>${item.title}</h2><p>${item.scenario}</p></div><div class="module-meta"><span>${scores[item.key] ? `Best score: ${scores[item.key].score}/1` : 'Not played'}</span><a class="primary-btn" href="games.html?game=${item.key}">Play</a></div></article>`).join('')}</section>`;
            return;
      }

      if (params.has('result') && scores[game.key]) {
            const result = scores[game.key];
            main.innerHTML = `<section class="result-card"><span class="kicker">${game.topic}</span><h1>${game.title}</h1><div class="result-score"><span>Your score</span><strong>${result.score} / 1</strong></div><p class="blank-state">${result.explanation}</p><div class="quiz-actions"><a class="secondary-btn" href="games.html?game=${game.key}&amp;retry=${Date.now()}">Play Again</a><a class="ghost-btn" href="games.html">All Games</a><a class="ghost-btn" href="dashboard.html">Dashboard</a></div></section>`;
            return;
      }

      const savedAnswerKey = getUserStorageKey(`gameAnswer_${game.key}`);
      const savedAnswer = localStorage.getItem(savedAnswerKey);
      if (params.has('retry')) localStorage.removeItem(savedAnswerKey);
      main.innerHTML = `<section class="assessment-card" data-game-correct="${game.correct}" data-game-explanation="${game.explanation}"><span class="kicker">${game.topic}</span><h1>${game.title}</h1><div class="quiz-question"><h2>Scenario</h2><p>${game.scenario}</p><fieldset class="game-options"><legend>Choose the best response</legend>${game.options.map((option, index) => `<label class="assessment-option"><input type="radio" name="gameAnswer" value="${index}" data-action="game-answer" data-game="${game.key}" ${savedAnswer === String(index) && !params.has('retry') ? 'checked' : ''} /><span>${String.fromCharCode(65 + index)}. ${option}</span></label>`).join('')}</fieldset><p id="gameAnswerError" class="field-error" role="alert" aria-live="polite"></p><button class="primary-btn" type="button" data-action="submit-game" data-game="${game.key}">Check Answer</button></div><a class="ghost-btn" href="games.html">All Games</a></section>`;
}

function renderDashboard() {
  if (!requireAuth()) return;
    renderHeader('dashboard');
    
  const user = getCurrentUser();
      const isNewUser = user.isNewUser === true;
      if (isNewUser) {
                  document.body.classList.add('first-login');
                  const welcomeName = document.getElementById('firstLoginName');
                  const welcomePanel = document.getElementById('firstLoginWelcome');
                  if (welcomeName) welcomeName.textContent = user.fullName || user.name || 'learner';
                  if (welcomePanel) welcomePanel.hidden = false;
                  saveCurrentUser({ ...user, isNewUser: false });
      }

    const studentName = document.getElementById('studentName');
      if (studentName) studentName.textContent = user.fullName;
      
  const stats = document.getElementById('dashboardStats');
    const progressList = document.getElementById('moduleProgressList');
      const badges = document.getElementById('badgeList');
      
  const modules = Object.keys(moduleCatalog);
    const completedModules = getCompletedModules();
      const totalVideos = Object.values(moduleCatalog).reduce((total, module) => total + getVideosByModule(module.key).length, 0);
        const watchedVideos = getCompletedVideos().length;
          const quizResults = getQuizResults();
            const averagePercentage = Object.keys(quizResults).length
                ? Math.round(Object.values(quizResults).reduce((total, result) => total + Number(result.percentage || 0), 0) / Object.keys(quizResults).length)
                    : 0;
                    
  if (stats) {
      stats.innerHTML = `
            <div class="stat-box"><strong>${user.fullName}</strong><span>User</span></div>
                  <div class="stat-box"><strong>${completedModules.filter((moduleKey) => completedModules.includes(moduleKey)).length}/${modules.length}</strong><span>Modules</span></div>
                        <div class="stat-box"><strong>${watchedVideos}/${totalVideos}</strong><span>Videos</span></div>
                              <div class="stat-box"><strong>${Object.keys(quizResults).length}/${modules.length}</strong><span>Quizzes</span></div>
                                    <div class="stat-box"><strong>${averagePercentage}%</strong><span>Average</span></div>
                                          <div class="stat-box"><strong>${isCertificateUnlocked() ? 'Unlocked' : 'Locked'}</strong><span>Certificate</span></div>
                                              `;
                                                }
                                                
  if (progressList) {
      progressList.innerHTML = Object.values(moduleCatalog).map((module) => {
            const moduleVideos = getVideosByModule(module.key);
                  const watched = getWatchedVideoIds(module.key).length;
                        const result = quizResults[module.key];
                              const completed = completedModules.includes(module.key);
                                    const percent = Math.min(100, Math.round(((completed ? 1 : 0) + (watched === moduleVideos.length ? 1 : 0) + (result ? 1 : 0)) / 3 * 100));
                                          return `
                                                  <div class="progress-item">
                                                            <div class="progress-header">
                                                                        <strong>${module.title}</strong>
                                                                                    <span>${percent}%</span>
                                                                                              </div>
                                                                                                        <div class="progress-bar"><div class="progress-bar-fill" style="width:${percent}%"></div></div>
                                                                                                                </div>
                                                                                                                      `;
                                                                                                                          }).join('');
                                                                                                                            }
                                                                                                                            
  if (badges) {
      badges.innerHTML = Object.values(moduleCatalog).map((module) => `<span class="badge-chip">${completedModules.includes(module.key) ? '✓' : '•'} ${module.badge}</span>`).join('');
        }
        
  const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
              saveCurrentUser(null);
                    window.location.href = 'login.html';
                        });
                          }
                          }
                          
function isCertificateUnlocked() {
  const state = getFinalAssessmentState();
    const allModulesDone = Object.keys(moduleCatalog).every((key) => getCompletedModules().includes(key));
      return allModulesDone && state.completed && state.result && Number(state.result.percentage || 0) >= 70;
      }
      
function renderCertificate() {
  if (!requireAuth()) return;
    renderHeader('certificate');
    
  const container = document.getElementById('certificateContainer');
    if (!container) return;
    
  const user = getCurrentUser();
    const finalState = getFinalAssessmentState();
    
  if (!isCertificateUnlocked()) {
      container.innerHTML = `
            <div class="lock-card">
                    <h3>Certificate Locked</h3>
                            <p class="blank-state">Complete all four modules and pass the final assessment to unlock your certificate.</p>
                                  </div>
                                      `;
                                          return;
                                            }
                                            
  const date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const certificateId = `DC360-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    
  container.innerHTML = `
      <div class="certificate-shell">
            <article class="certificate" aria-label="Certificate of Completion">
                    <div class="certificate-inner">
                              <div class="certificate-badge">✦</div>
                                        <h1>CERTIFICATE OF COMPLETION</h1>
                                                  <div class="subtitle-line">This certificate is proudly presented to</div>
                                                            <div class="student-name">${user.fullName}</div>
                                                                      <p>for successfully completing the Digital Citizen Learning Program.</p>
                                                                                <h2 class="certificate-course">TRAINING ON DIGILOCKER, AADHAAR & PAN SERVICES</h2>
                                                                                          <div class="certificate-grid">
                                                                                                      <div class="cert-item"><span>Student Name</span><strong>${user.fullName}</strong></div>
                                                                                                                  <div class="cert-item"><span>Course Name</span><strong>Digital Citizen Learning Program</strong></div>
                                                                                                                              <div class="cert-item"><span>Completion Date</span><strong>${date}</strong></div>
                                                                                                                                          <div class="cert-item"><span>Modules Completed</span><strong>${Object.keys(moduleCatalog).length}</strong></div>
                                                                                                                                                      <div class="cert-item"><span>Final Assessment Score</span><strong>${finalState.result.percentage}%</strong></div>
                                                                                                                                                                  <div class="cert-item"><span>Certificate ID</span><strong>${certificateId}</strong></div>
                                                                                                                                                                            </div>
                                                                                                                                                                                      <div class="signatures">
                                                                                                                                                                                                  <div><div class="signature-line">Project Guide Signature</div></div>
                                                                                                                                                                                                              <div><div class="signature-line">Student Signature</div></div>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                      </article>
                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                              <div class="certificate-actions">
                                                                                                                                                                                                                                                    <button class="cert-btn" type="button" onclick="window.print()">Download Certificate</button>
                                                                                                                                                                                                                                                          <button class="cert-btn secondary" type="button" onclick="window.print()">Print Certificate</button>
                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                `;
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                
function renderQuizForm(moduleKey) {
  const module = moduleCatalog[moduleKey];
      const answers = getQuizAnswers()[moduleKey] || {};
    
  return `
      <div class="quiz-wrapper">
            ${module.questions.map((question, questionIndex) => `
                    <div class="quiz-question">
                              <h4>Question ${questionIndex + 1}</h4>
                                        <p>${question.question}</p>
                                                  <div class="options-list">
                                                              ${question.options.map((option, optionIndex) => `
                                                                            <label class="assessment-option">
                                                                                            <input type="radio" name="question-${moduleKey}-${questionIndex}" value="${optionIndex}" ${answers[questionIndex] === optionIndex ? 'checked' : ''} data-action="quiz-answer" data-module="${moduleKey}" data-index="${questionIndex}" data-option="${optionIndex}" />
                                                                                                            <span>${String.fromCharCode(65 + optionIndex)}. ${option}</span>
                                                                                                                          </label>
                                                                                                                                      `).join('')}
                                                                                                                                                </div>
                                                                                                                                                        </div>
                                                                                                                                                              `).join('')}
                                                                                                                                                                    <div class="quiz-actions">
                                                                                                                                                                            <button class="primary-btn" type="button" data-action="submit-module-quiz" data-module="${moduleKey}">Submit Quiz</button>
                                                                                                                                                                                  </div>
                                                                                                                                                                                      </div>
                                                                                                                                                                                        `;
                                                                                                                                                                                        }
                                                                                                                                                                                        
function renderQuizResult(moduleKey, result) {
  return `
      <div class="result-card">
            <h3>Quiz Result</h3>
                  <div class="result-score">
                          <div><span>Score</span><strong>${result.score} / ${result.total}</strong></div>
                                  <div><span>Percentage</span><strong>${result.percentage}%</strong></div>
                                        </div>
                                              <div class="final-summary">
                                                      <div class="stat-box"><strong>${result.correct}</strong><span>Correct</span></div>
                                                              <div class="stat-box"><strong>${result.incorrect}</strong><span>Incorrect</span></div>
                                                                      <div class="stat-box"><strong>${result.unanswered}</strong><span>Unanswered</span></div>
                                                                            </div>
                                                                                  <div class="answer-review">
                                                                                          ${result.review.map((item) => `
                                                                                                    <div class="review-item">
                                                                                                                <p><strong>Q${item.index + 1}:</strong> ${item.question}</p>
                                                                                                                            <p><strong>Your answer:</strong> ${item.userAnswer}</p>
                                                                                                                                        <p><strong>Correct answer:</strong> ${item.correctAnswer}</p>
                                                                                                                                                    <p><strong>Explanation:</strong> ${item.explanation}</p>
                                                                                                                                                              </div>
                                                                                                                                                                      `).join('')}
                                                                                                                                                                            </div>
                                                                                                                                                                                  <div class="quiz-actions">
                                                                                                                                                                                          <button class="secondary-btn" type="button" data-action="retake-module-quiz" data-module="${moduleKey}">Retake Quiz</button>
                                                                                                                                                                                                </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                      `;
                                                                                                                                                                                                      }
                                                                                                                                                                                                      
function computeModuleQuiz(moduleKey) {
  const module = moduleCatalog[moduleKey];
      const storedAnswers = getQuizAnswers()[moduleKey] || {};
      const review = [];
        let correct = 0;
          let unanswered = 0;
          
  module.questions.forEach((question, index) => {
      const selected = storedAnswers[index];
          const userAnswer = typeof selected === 'number' ? question.options[selected] : 'Unanswered';
              const correctAnswer = question.options[question.correct];
              
    if (typeof selected !== 'number') {
          unanswered += 1;
              } else if (selected === question.correct) {
                    correct += 1;
                        }
                        
    review.push({
          index,
                question: question.question,
                      userAnswer,
                            correctAnswer,
                                  explanation: question.explanation
                                      });
                                        });
                                        
  const incorrect = module.questions.length - correct - unanswered;
    const result = {
        score: correct,
            total: module.questions.length,
                percentage: Math.round((correct / module.questions.length) * 100),
                    correct,
                        incorrect,
                            unanswered,
                                review
                                  };
                                  
  const quizResults = getQuizResults();
    quizResults[moduleKey] = result;
      setQuizResults(quizResults);
      const user = getCurrentUser();
      if (user?.id && user.email) {
            fetch(`${BACKEND_URL}/api/quiz-result`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                        userId: user.id,
                        userEmail: user.email,
                        module: moduleKey,
                        score: result.score,
                        percentage: result.percentage,
                        correct: result.correct,
                        incorrect: result.incorrect,
                        unanswered: result.unanswered
                  })
            }).catch(() => {});
      }
      
      const videosComplete = getVideosByModule(moduleKey).length > 0 && getWatchedVideoIds(moduleKey).length === getVideosByModule(moduleKey).length;
      if (videosComplete && Object.keys(storedAnswers).length === module.questions.length) markModuleComplete(moduleKey);
        
  return result;
  }
  
function renderModulePage(moduleKey) {
    renderHeader(moduleKey);
    
  const module = moduleCatalog[moduleKey];
    const main = document.querySelector('.module-page-shell');
      if (!main) return;
      
  const videos = getVideosByModule(moduleKey);
    const watchedVideoIds = getWatchedVideoIds(moduleKey);
      const quizResult = getQuizResults()[moduleKey];
      const allVideosCompleted = videos.length > 0 && watchedVideoIds.length === videos.length;
          const quizBlock = quizResult ? renderQuizResult(moduleKey, quizResult) : renderQuizForm(moduleKey);
          
  main.innerHTML = `
      <section class="module-header-card">
            <div>
                    <span class="module-pill">${module.title}</span>
                            <h2>${module.title}</h2>
                                  </div>
                                        <div class="module-actions">
                                                <button class="primary-btn" type="button" data-action="mark-module-studied" data-module="${moduleKey}">Mark as Completed</button>
                                                        ${allVideosCompleted && quizResult ? `<button class="secondary-btn" type="button" data-action="next-module" data-module="${moduleKey}">${Object.keys(moduleCatalog).indexOf(moduleKey) === Object.keys(moduleCatalog).length - 1 ? 'Go to Final Assessment' : 'Next Module'}</button>` : ''}
                                                              </div>
                                                                  </section>
                                                                  
    <div class="content-grid">
          <article class="content-card">
                  <h3>Introduction</h3>
                          <p class="blank-state">${module.intro}</p>
                                  <h3>Learning Objectives</h3>
                                          <ul class="topic-list">
                                                    ${module.objectives.map((item) => `<li>${item}</li>`).join('')}
                                                            </ul>
                                                                  </article>
                                                                        <aside class="content-card">
                                                                                <h3>Learning Progress</h3>
                                                                                        <div class="key-points">
                                                                                                  <div class="key-point"><strong>Content</strong> ${getCompletedModules().includes(moduleKey) ? '✓ Completed' : 'Pending'}</div>
                                                                                                            <div class="key-point"><strong>Videos</strong> ${watchedVideoIds.length}/${videos.length}</div>
                                                                                                                      <div class="key-point"><strong>Quiz</strong> ${quizResult ? '✓ Submitted' : 'Pending'}</div>
                                                                                                                              </div>
                                                                                                                                    </aside>
                                                                                                                                        </div>
                                                                                                                                        
    <article class="content-card">
          <h3>Topics</h3>
                <ul class="topic-list">
                        ${module.topics.map((item) => `<li>${item}</li>`).join('')}
                              </ul>
                                  </article>
                                  
    <article class="content-card">
          <h3>Key Features</h3>
                <div class="key-points">
                        ${module.keyFeatures.map((feature) => `<div class="key-point"><strong>Feature</strong> ${feature}</div>`).join('')}
                              </div>
                                  </article>
                                  
    <article class="content-card">
          <h3>Step-by-Step Guide</h3>
                <ol class="guide-list">
                        ${module.steps.map((step) => `<li>${step}</li>`).join('')}
                              </ol>
                                  </article>
                                  
    <article class="content-card">
          <h3>Important Safety Tips</h3>
                <ul class="topic-list">
                        ${module.safetyTips.map((tip) => `<li>${tip}</li>`).join('')}
                              </ul>
                                  </article>
                                  
    <section class="video-panel">
          <h3>Related Videos</h3>
                <div class="video-grid">
                        ${renderVideoCards(videos)}
                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                            <p class="blank-state">Videos watched: ${watchedVideoIds.length} / ${videos.length}</p>
                                                                                                                                                                                                                                                                                                                                                                                                                  ${allVideosCompleted ? '<p class="success-message">✓ All required videos completed</p>' : ''}
                                                                                                                                                                                                                                                                                                                                                                                                                          <div class="quiz-actions">
                                                                                                                                                                                                                                                                                                                                                                                                                                  <button class="primary-btn" type="button" data-action="start-module-quiz" data-module="${moduleKey}" ${allVideosCompleted ? '' : 'disabled'}>Start Module Quiz</button>
                                                                                                                                                                                                                                                                                                                                                                                                                                  <a class="secondary-btn" href="quiz.html?module=${moduleKey}">Open Full Quiz</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                          </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                          
    <section class="quiz-panel">
          <h3>Quiz</h3>
                ${quizBlock}
                    </section>
                      `;
                      }
                      
function submitModuleQuiz(moduleKey) {
      computeModuleQuiz(moduleKey);
      if (document.body.dataset.page === 'quiz') renderQuizPage();
      else renderModulePage(moduleKey);
}
          
function nextModulePage(moduleKey) {
  const keys = Object.keys(moduleCatalog);
    const currentIndex = keys.indexOf(moduleKey);
      const nextKey = keys[currentIndex + 1];
        if (nextKey) {
            window.location.href = moduleCatalog[nextKey].page;
                return;
                  }
                    window.location.href = 'final-assessment.html';
                    }
                    
function renderFinalAssessmentPage() {
  if (!requireAuth()) return;
    renderHeader('quiz');
    
  const main = document.getElementById('finalAssessmentMain');
    if (!main) return;
    
  const allModulesDone = Object.keys(moduleCatalog).every((key) => getCompletedModules().includes(key));
    if (!allModulesDone) {
        main.innerHTML = `
              <div class="lock-card">
                      <h3>Final Digital Citizen Assessment</h3>
                              <p class="blank-state">Complete all four modules before unlocking the final assessment.</p>
                                    </div>
                                        `;
                                            return;
                                              }
                                              
  const state = getFinalAssessmentState();
    const answers = state.answers || {};
      const currentIndex = Number(state.currentIndex || 0);
      
  if (state.completed && state.result) {
        const passed = Number(state.result.percentage || 0) >= 70;
          main.innerHTML = `
                <div class="result-card">
                        <h3>${passed ? 'Congratulations!' : 'Assessment Not Passed'}</h3>
                                <div class="result-score">
                                          <div><span>Score</span><strong>${state.result.score} / ${state.result.total}</strong></div>
                                                    <div><span>Percentage</span><strong>${state.result.percentage}%</strong></div>
                                                            </div>
                                                                    ${passed ? '<p class="blank-state">You have successfully completed the Digital Citizen learning program.</p>' : '<p class="blank-state">Review the learning modules and try again.</p>'}
                                                                            <div class="certificate-actions">
                                                                                      ${passed ? '<a class="primary-btn" href="certificate.html">View Certificate</a>' : ''}
                                                                                                <button class="secondary-btn" type="button" data-action="retake-final">Retake Assessment</button>
                                                                                                        </div>
                                                                                                              </div>
                                                                                                                  `;
                                                                                                                      return;
                                                                                                                        }
                                                                                                                        
  const question = finalAssessmentQuestions[currentIndex];
    main.innerHTML = `
        <div class="assessment-card">
              <h3>Final Digital Citizen Assessment</h3>
                    <div class="progress-bar"><div class="progress-bar-fill" style="width:${(Object.keys(answers).length / finalAssessmentQuestions.length) * 100}%"></div></div>
                          <div class="quiz-question">
                                  <h4>Question ${currentIndex + 1} of ${finalAssessmentQuestions.length}</h4>
                                          <p>${question.question}</p>
                                                  <div class="options-list">
                                                            ${question.options.map((option, optionIndex) => `
                                                                        <label class="assessment-option">
                                                                                      <input type="radio" name="final-question" value="${optionIndex}" ${answers[currentIndex] === optionIndex ? 'checked' : ''} data-action="final-answer" data-index="${currentIndex}" data-option="${optionIndex}" />
                                                                                                    <span>${String.fromCharCode(65 + optionIndex)}. ${option}</span>
                                                                                                                </label>
                                                                                                                          `).join('')}
                                                                                                                                  </div>
                                                                                                                                        </div>
                                                                                                                                              <div class="question-pills">
                                                                                                                                                      ${finalAssessmentQuestions.map((_, index) => `<button class="q-pill ${answers[index] !== undefined ? 'answered' : ''} ${index === currentIndex ? 'active' : ''}" type="button" data-action="jump-final" data-index="${index}">${index + 1}</button>`).join('')}
                                                                                                                                                            </div>
                                                                                                                                                                  <div class="quiz-actions">
                                                                                                                                                                          <button class="quiz-nav-btn" type="button" data-action="final-prev">Previous</button>
                                                                                                                                                                                  <button class="quiz-nav-btn" type="button" data-action="final-next">Next</button>
                                                                                                                                                                                          <button class="primary-btn" type="button" data-action="submit-final">Submit Assessment</button>
                                                                                                                                                                                                </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                      `;
                                                                                                                                                                                                      }
                                                                                                                                                                                                      
function submitFinalAssessment() {
  const state = getFinalAssessmentState();
    const answers = state.answers || {};
      let score = 0;
      
  finalAssessmentQuestions.forEach((question, index) => {
      if (answers[index] === question.correct) score += 1;
        });
        
  const percentage = Math.round((score / finalAssessmentQuestions.length) * 100);
    const result = {
        score,
            total: finalAssessmentQuestions.length,
                percentage,
                    correct: score,
                        incorrect: finalAssessmentQuestions.length - score - (finalAssessmentQuestions.length - Object.keys(answers).length),
                            unanswered: finalAssessmentQuestions.length - Object.keys(answers).length
                              };
                              
  const nextState = {
      ...state,
          answers,
              currentIndex: 0,
                  completed: true,
                      result
                        };
                          setFinalAssessmentState(nextState);
                          
  if (percentage >= 70) {
      Object.keys(moduleCatalog).forEach((moduleKey) => markModuleComplete(moduleKey));
        }
        
  renderFinalAssessmentPage();
  }
  
function setAuthFieldError(inputId, message) {
      const input = document.getElementById(inputId);
      const error = document.getElementById(`${inputId}Error`);
      if (input) input.setAttribute('aria-invalid', message ? 'true' : 'false');
      if (error) {
            error.textContent = message || '';
            error.classList.toggle('visible', Boolean(message));
      }
}

function clearAuthMessages() {
      document.querySelectorAll('.field-error').forEach((error) => {
            error.textContent = '';
            error.classList.remove('visible');
      });
      ['registerError', 'loginError', 'registerSuccess', 'loginSuccess'].forEach((id) => {
            const message = document.getElementById(id);
            if (message) {
                  message.textContent = '';
                  message.classList.add('hidden');
            }
      });
}

function handleAuthSubmit(type, event) {
  event.preventDefault();
      clearAuthMessages();
    const form = event.currentTarget;
      const payload = Object.fromEntries(new FormData(form).entries());
      
  if (type === 'register') {
      const errorEl = document.getElementById('registerError');
          const submitBtn = document.getElementById('registerBtn');
              const email = String(payload.email || '').trim();
              
    if (!payload.fullName || !payload.email || !payload.password || !payload.confirmPassword) {
          if (!payload.fullName) setAuthFieldError('fullName', 'Full name is required.');
          if (!payload.email) setAuthFieldError('registerEmail', 'Email is required.');
          if (!payload.password) setAuthFieldError('registerPassword', 'Password is required.');
          if (!payload.confirmPassword) setAuthFieldError('confirmPassword', 'Please confirm your password.');
          if (errorEl) {
                  errorEl.textContent = 'All fields are required.';
                          errorEl.classList.remove('hidden');
                                }
                                      return;
                                          }
                                          
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          setAuthFieldError('registerEmail', 'Please enter a valid email address.');
          if (errorEl) {
                  errorEl.textContent = 'Please enter a valid email address.';
                          errorEl.classList.remove('hidden');
                                }
                                      return;
                                          }
                                          
    if (String(payload.password).length < 6) {
          setAuthFieldError('registerPassword', 'Password must be at least 6 characters long.');
          if (errorEl) {
                  errorEl.textContent = 'Password must be at least 6 characters long.';
                          errorEl.classList.remove('hidden');
                                }
                                      return;
                                          }
                                          
    if (payload.password !== payload.confirmPassword) {
          setAuthFieldError('confirmPassword', 'Passwords do not match.');
          if (errorEl) {
                  errorEl.textContent = 'Passwords do not match.';
                          errorEl.classList.remove('hidden');
                                }
                                      return;
                                          }
                                          
    submitBtn.disabled = true;
        submitBtn.textContent = 'Creating account...';
        
    fetch(`${BACKEND_URL}/api/register`, {
          method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(payload)
                          })
                                .then(async (response) => {
                                        const data = await response.json();
                                                if (!response.ok) throw new Error(data.message || 'Registration failed');
                                                const success = document.getElementById('registerSuccess');
                                                if (success) {
                                                  success.textContent = 'Account created successfully. Redirecting you to login...';
                                                  success.classList.remove('hidden');
                                                }
                                                window.setTimeout(() => { window.location.href = 'login.html'; }, 900);
                                                                      })
                                                                            .catch((error) => {
                                                                                    if (errorEl) {
                                                                                              errorEl.textContent = getRequestErrorMessage(error);
                                                                                                        errorEl.classList.remove('hidden');
                                                                                                                }
                                                                                    if (error.message.toLowerCase().includes('email')) setAuthFieldError('registerEmail', error.message);
                                                                                                                      })
                                                                                                                            .finally(() => {
                                                                                                                                    submitBtn.disabled = false;
                                                                                                                                            submitBtn.textContent = 'Create Account';
                                                                                                                                                  });
                                                                                                                                                    }
                                                                                                                                                    
  if (type === 'login') {
      const errorEl = document.getElementById('loginError');
          const submitBtn = document.getElementById('loginBtn');
              if (!payload.email || !payload.password) {
                    if (!payload.email) setAuthFieldError('loginEmail', 'Email is required.');
                    if (!payload.password) setAuthFieldError('loginPassword', 'Password is required.');
                    if (errorEl) {
                            errorEl.textContent = 'Email and password are required.';
                                    errorEl.classList.remove('hidden');
                                          }
                                                return;
                                                    }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(payload.email).trim())) {
                  setAuthFieldError('loginEmail', 'Please enter a valid email address.');
                  if (errorEl) {
                        errorEl.textContent = 'Please enter a valid email address.';
                        errorEl.classList.remove('hidden');
                  }
                  return;
            }
                                                    
    submitBtn.disabled = true;
        submitBtn.textContent = 'Logging in...';
        
    fetch(`${BACKEND_URL}/api/login`, {
          method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(payload)
                          })
                                .then(async (response) => {
                                        const data = await response.json();
                                                if (!response.ok) throw new Error(data.message || 'Login failed');
                                                        saveCurrentUser(data.user);
                                                                                                                                                                                                const success = document.getElementById('loginSuccess');
                                                                                                                                                                                                if (success) {
                                                                                                                                                                                                      success.textContent = 'Login successful. Opening your dashboard...';
                                                                                                                                                                                                      success.classList.remove('hidden');
                                                                                                                                                                                                }
                                                                                                                                                                                                window.setTimeout(() => { window.location.href = 'dashboard.html'; }, 700);
                                                                      })
                                                                            .catch((error) => {
                                                                                    if (errorEl) {
                                                                                              errorEl.textContent = getRequestErrorMessage(error);
                                                                                                        errorEl.classList.remove('hidden');
                                                                                                                }
                                                                                    if (error.message === 'Invalid email or password.') {
                                                                                              setAuthFieldError('loginPassword', error.message);
                                                                                    }
                                                                                                                      })
                                                                                                                            .finally(() => {
                                                                                                                                    submitBtn.disabled = false;
                                                                                                                                            submitBtn.textContent = 'Login';
                                                                                                                                                  });
                                                                                                                                                    }
                                                                                                                                                    }
                                                                                                                                                    
function initializeAuthPages() {
  const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        if (getCurrentUser()) {
              window.location.href = 'dashboard.html';
                    return;
                        }
                            loginForm.addEventListener('submit', (event) => handleAuthSubmit('login', event));
                              }
                              
  const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        if (getCurrentUser()) {
              window.location.href = 'dashboard.html';
                    return;
                        }
                            registerForm.addEventListener('submit', (event) => handleAuthSubmit('register', event));
                              }
                              
  document.querySelectorAll('.toggle-password').forEach((button) => {
      button.addEventListener('click', () => {
            const target = document.getElementById(button.dataset.toggleTarget);
                  if (!target) return;
                        const passwordVisible = target.type === 'text';
                              target.type = passwordVisible ? 'password' : 'text';
                                    button.textContent = passwordVisible ? 'Show' : 'Hide';
                                        });
                                          });
                                          }
                                          
function initializePage() {
  const page = document.body.dataset.page;
  
      if (page === 'login' || page === 'register') {
      initializeAuthPages();
          return;
            }
            
      if (page === 'about' || page === 'faq' || page === 'service-finder') {
            renderHeader(page);
            return;
      }

      if (page === 'videos') {
            renderVideosPage();
            return;
      }

      if (page === 'quiz') {
            renderQuizPage();
            return;
      }

      if (page === 'games') {
            renderGamesPage();
            return;
      }

      if (page === 'modules') {
      renderModulesPage();
          return;
            }
            
      if (page === 'digilocker' || page === 'aadhaar' || page === 'pan' || page === 'digital-safety') {
      renderModulePage(page);
          return;
            }
            
  if (page === 'dashboard') {
      renderDashboard();
          return;
            }
            
  if (page === 'certificate') {
      renderCertificate();
          return;
            }
            
  if (page === 'final-assessment') {
      renderFinalAssessmentPage();
          return;
            }
            
  renderHomePage();
  }
  
document.addEventListener('click', (event) => {
      const menuButton = event.target.closest('[data-nav-toggle]');
      if (menuButton) {
            const nav = document.getElementById(menuButton.getAttribute('aria-controls'));
            const expanded = menuButton.getAttribute('aria-expanded') === 'true';
            nav?.classList.toggle('open', !expanded);
            menuButton.setAttribute('aria-expanded', String(!expanded));
            menuButton.setAttribute('aria-label', expanded ? 'Open navigation menu' : 'Close navigation menu');
            return;
      }

      if (event.target.closest('#mainNav a')) {
            document.getElementById('mainNav')?.classList.remove('open');
            document.querySelector('[data-nav-toggle]')?.setAttribute('aria-expanded', 'false');
      }

  const target = event.target.closest('[data-action]');
    if (!target) return;
    
  const action = target.dataset.action;
    const moduleKey = target.dataset.module;

      if (action === 'logout') {
                  saveCurrentUser(null);
                  window.location.href = 'login.html';
                  return;
      }

      if (action === 'play-video') {
            const videoId = target.dataset.videoId;
            const poster = document.getElementById(`videoPoster-${videoId}`);
            const embed = document.getElementById(`videoEmbed-${videoId}`);
            const iframe = embed?.querySelector('iframe');
            if (!poster || !embed || !iframe) return;
            poster.hidden = true;
            embed.hidden = false;
            iframe.addEventListener('error', () => {
                  const fallback = document.getElementById(`videoFallback-${videoId}`);
                  if (fallback) fallback.hidden = false;
            }, { once: true });
            iframe.src = iframe.dataset.src;
            return;
      }

      if (action === 'service-finder-recommend') {
            const output = document.getElementById('serviceRecommendation');
            const service = document.getElementById('serviceNeed')?.value;
            const goal = document.getElementById('serviceGoal')?.value;
            const module = moduleCatalog[service];
            if (!output || !module) return;
            const officialSites = {
                  digilocker: 'https://www.digilocker.gov.in/',
                  aadhaar: 'https://www.uidai.gov.in/',
                  pan: 'https://www.incometax.gov.in/',
                  'digital-safety': 'https://www.cybercrime.gov.in/'
            };
            const reason = goal === 'safety' ? `Review safe-use guidance for ${module.title}.` : module.summary;
            output.innerHTML = `<h2>Recommended: ${module.title}</h2><p>${reason}</p><div class="hero-actions"><a class="primary-btn" href="${module.page}">Start Learning</a><a class="ghost-btn" href="${officialSites[service]}" target="_blank" rel="noopener noreferrer">Official Website</a></div>`;
            return;
      }

      if (action === 'submit-game') {
            const gameKey = target.dataset.game;
            const selected = document.querySelector('input[name="gameAnswer"]:checked');
            const error = document.getElementById('gameAnswerError');
            if (!selected) {
                  if (error) {
                        error.textContent = 'Choose an answer before checking your decision.';
                        error.classList.add('visible');
                  }
                  return;
            }
            const card = target.closest('.assessment-card');
            const scores = getGameScores();
            scores[gameKey] = {
                  score: Number(selected.value) === Number(card.dataset.gameCorrect) ? 1 : 0,
                  explanation: card.dataset.gameExplanation,
                  completedAt: new Date().toISOString()
            };
            writeLocalStorage('gameScores', scores);
            localStorage.removeItem(getUserStorageKey(`gameAnswer_${gameKey}`));
            history.replaceState(null, '', `games.html?game=${gameKey}&result=1`);
            renderGamesPage();
            return;
      }
    
  if (action === 'mark-module-studied') {
      markModuleComplete(moduleKey);
          renderModulePage(moduleKey);
              return;
                }
                
  if (action === 'start-module-quiz') {
                  if (document.body.dataset.page === 'quiz') {
                        renderQuizPage(true);
                        return;
                  }
      const panel = document.querySelector('.quiz-panel');
          if (panel) {
                panel.innerHTML = `<h3>Quiz</h3>${renderQuizForm(moduleKey)}`;
                    }
                        return;
                          }
                          
  if (action === 'submit-module-quiz') {
      submitModuleQuiz(moduleKey);
          return;
            }
            
  if (action === 'retake-module-quiz') {
      const quizAnswers = getQuizAnswers();
          quizAnswers[moduleKey] = {};
              setQuizAnswers(quizAnswers);
                  const quizResults = getQuizResults();
                      delete quizResults[moduleKey];
                          setQuizResults(quizResults);
                              if (document.body.dataset.page === 'quiz') renderQuizPage();
                              else renderModulePage(moduleKey);
                                  return;
                                    }
                                    
  if (action === 'next-module') {
      nextModulePage(moduleKey);
          return;
            }
            
  if (action === 'final-prev') {
      const state = getFinalAssessmentState();
          state.currentIndex = Math.max(0, Number(state.currentIndex || 0) - 1);
              setFinalAssessmentState(state);
                  renderFinalAssessmentPage();
                      return;
                        }
                        
  if (action === 'final-next') {
      const state = getFinalAssessmentState();
          state.currentIndex = Math.min(finalAssessmentQuestions.length - 1, Number(state.currentIndex || 0) + 1);
              setFinalAssessmentState(state);
                  renderFinalAssessmentPage();
                      return;
                        }
                        
  if (action === 'jump-final') {
      const state = getFinalAssessmentState();
          state.currentIndex = Number(target.dataset.index);
              setFinalAssessmentState(state);
                  renderFinalAssessmentPage();
                      return;
                        }
                        
  if (action === 'submit-final') {
      submitFinalAssessment();
          return;
            }
            
  if (action === 'retake-final') {
      setFinalAssessmentState({ answers: {}, currentIndex: 0, completed: false, result: null });
          renderFinalAssessmentPage();
            }
            });
            
document.addEventListener('change', (event) => {
      if (event.target.id === 'videoModuleFilter') {
            renderVideosPage(event.target.value);
            return;
      }

  const target = event.target.closest('[data-action]');
    if (!target) return;
    
  const action = target.dataset.action;
      if (action === 'game-answer') {
            localStorage.setItem(getUserStorageKey(`gameAnswer_${target.dataset.game}`), target.value);
            return;
      }

      if (action === 'toggle-video') {
            const moduleKey = target.dataset.module;
            const videoId = target.dataset.videoId;
            const key = `${moduleKey}:${videoId}`;
            const completed = getCompletedVideos();
            if (target.checked) {
                  if (!completed.includes(key)) completed.push(key);
                  localStorage.setItem(getUserStorageKey(`videoCompleted_${videoId}`), 'true');
                  setCompletedVideos(completed);
            } else {
                  localStorage.removeItem(getUserStorageKey(`videoCompleted_${videoId}`));
                  setCompletedVideos(completed.filter((entry) => entry !== key));
            }
            if (document.body.dataset.page === 'videos') {
                  renderVideosPage(document.getElementById('videoModuleFilter')?.value || 'all');
            } else {
                  renderModulePage(moduleKey);
            }
            return;
      }

    if (action === 'quiz-answer') {
        const moduleKey = target.dataset.module;
            const answers = getQuizAnswers();
                if (!answers[moduleKey]) answers[moduleKey] = {};
                    answers[moduleKey][Number(target.dataset.index)] = Number(target.dataset.option);
                        setQuizAnswers(answers);
                            return;
                              }
                              
  if (action === 'final-answer') {
      const state = getFinalAssessmentState();
          const answers = state.answers || {};
              const index = Number(target.dataset.index);
                  answers[index] = Number(target.dataset.option);
                      state.answers = answers;
                          state.currentIndex = index;
                              setFinalAssessmentState(state);
                                  renderFinalAssessmentPage();
                                    }
                                    });
                                    
initializePage();
