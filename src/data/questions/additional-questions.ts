import { QuizQuestion } from '../questions';

// Additional questions with rich explanations for study mode
// These supplement the existing question banks

export const additionalGenesisQuestions: QuizQuestion[] = [
  {
    id: 'gen-add-001',
    bookId: 'genesis',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What was the first thing God said in the Bible?',
    options: ['Let there be light', 'Let there be water', 'Let there be land', 'Let us make man'],
    correctAnswer: 0,
    reference: 'Genesis 1:3',
    explanation: 'God\'s first recorded words were "Let there be light," demonstrating His creative power through speech. This established the pattern of God creating through His spoken word.'
  },
  {
    id: 'gen-add-002',
    bookId: 'genesis',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What was the name of the tree whose fruit Adam and Eve were forbidden to eat?',
    options: ['Tree of Life', 'Tree of Knowledge of Good and Evil', 'Tree of Wisdom', 'The Fig Tree'],
    correctAnswer: 1,
    reference: 'Genesis 2:17',
    explanation: 'The Tree of the Knowledge of Good and Evil was placed in the center of the Garden of Eden. God commanded Adam not to eat from it, warning that doing so would result in death.'
  },
  {
    id: 'gen-add-003',
    bookId: 'genesis',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'How old was Abraham when Isaac was born?',
    options: ['75 years old', '86 years old', '99 years old', '100 years old'],
    correctAnswer: 3,
    reference: 'Genesis 21:5',
    explanation: 'Abraham was 100 years old when Isaac was born, making this a miraculous birth. Sarah was 90 years old at the time, highlighting God\'s ability to fulfill His promises despite human impossibility.'
  },
  {
    id: 'gen-add-004',
    bookId: 'genesis',
    difficulty: 'medium',
    type: 'who-said',
    question: 'Who said, "Am I my brother\'s keeper?"',
    options: ['Abel', 'Cain', 'Seth', 'Adam'],
    correctAnswer: 1,
    reference: 'Genesis 4:9',
    explanation: 'Cain spoke these words to God when asked about Abel\'s whereabouts after Cain had murdered his brother. This response revealed Cain\'s lack of remorse and his attempt to evade responsibility.'
  },
  {
    id: 'gen-add-005',
    bookId: 'genesis',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What sign did God give Noah as a promise never to flood the earth again?',
    options: ['A dove', 'A rainbow', 'An olive branch', 'The sun'],
    correctAnswer: 1,
    reference: 'Genesis 9:13',
    explanation: 'The rainbow became God\'s covenant sign with Noah and all creation. Whenever a rainbow appears in the clouds, it serves as a reminder of God\'s promise never to destroy the earth by flood again.'
  },
  {
    id: 'gen-add-006',
    bookId: 'genesis',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'What were the names of Joseph\'s two sons born in Egypt?',
    options: ['Gershom and Eliezer', 'Er and Onan', 'Manasseh and Ephraim', 'Perez and Zerah'],
    correctAnswer: 2,
    reference: 'Genesis 41:51-52',
    explanation: 'Joseph named his firstborn Manasseh ("causing to forget") because God helped him forget his hardship. His second son Ephraim ("fruitful") represented God making him fruitful in the land of his suffering.'
  },
];

export const additionalExodusQuestions: QuizQuestion[] = [
  {
    id: 'exo-add-001',
    bookId: 'exodus',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What did the burning bush do that amazed Moses?',
    options: ['It spoke to him', 'It did not burn up', 'It moved toward him', 'It changed colors'],
    correctAnswer: 1,
    reference: 'Exodus 3:2-3',
    explanation: 'Moses saw that though the bush was on fire, it did not burn up. This miraculous sight drew Moses to investigate, where God called him to lead Israel out of Egypt.'
  },
  {
    id: 'exo-add-002',
    bookId: 'exodus',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What was the tenth and final plague on Egypt?',
    options: ['Darkness', 'Death of firstborn', 'Locusts', 'Boils'],
    correctAnswer: 1,
    reference: 'Exodus 12:29',
    explanation: 'The death of the firstborn was the most severe plague, striking every Egyptian household. Only homes with lamb\'s blood on their doorposts were "passed over," giving the Passover its name.'
  },
  {
    id: 'exo-add-003',
    bookId: 'exodus',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'How many days was Moses on Mount Sinai receiving the Law?',
    options: ['7 days', '20 days', '40 days', '70 days'],
    correctAnswer: 2,
    reference: 'Exodus 24:18',
    explanation: 'Moses was on Mount Sinai for forty days and forty nights. During this time, God gave him the stone tablets with the Ten Commandments and detailed instructions for the Tabernacle.'
  },
  {
    id: 'exo-add-004',
    bookId: 'exodus',
    difficulty: 'medium',
    type: 'verse-completion',
    question: 'I AM THAT I AM: Thus shalt thou say unto the children of Israel...',
    options: ['The Lord hath sent me', 'I AM hath sent me', 'God hath sent me', 'The Almighty hath sent me'],
    correctAnswer: 1,
    reference: 'Exodus 3:14',
    explanation: 'God revealed His name as "I AM" (YHWH), signifying His eternal, self-existent nature. This name became the most sacred name for God in Jewish tradition.'
  },
  {
    id: 'exo-add-005',
    bookId: 'exodus',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What food did God provide for the Israelites in the wilderness?',
    options: ['Bread and fish', 'Manna and quail', 'Milk and honey', 'Grapes and figs'],
    correctAnswer: 1,
    reference: 'Exodus 16:13-15',
    explanation: 'God miraculously provided manna (bread from heaven) every morning and quail in the evening to feed the Israelites during their 40 years in the wilderness.'
  },
];

export const additionalPsalmsQuestions: QuizQuestion[] = [
  {
    id: 'psa-add-001',
    bookId: 'psalms',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'The Lord is my light and my salvation; whom shall I...?',
    options: ['fear', 'praise', 'trust', 'follow'],
    correctAnswer: 0,
    reference: 'Psalm 27:1',
    explanation: 'David declares that with God as his light and salvation, there is no reason to fear. This psalm is a powerful declaration of trust in God during times of danger.'
  },
  {
    id: 'psa-add-002',
    bookId: 'psalms',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'How many psalms are in the Book of Psalms?',
    options: ['100', '119', '150', '175'],
    correctAnswer: 2,
    reference: 'Psalms 1-150',
    explanation: 'The Book of Psalms contains 150 individual psalms, making it the longest book in the Bible. They were written by various authors including David, Asaph, and the Sons of Korah.'
  },
  {
    id: 'psa-add-003',
    bookId: 'psalms',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Which psalm is the longest chapter in the entire Bible?',
    options: ['Psalm 91', 'Psalm 100', 'Psalm 119', 'Psalm 150'],
    correctAnswer: 2,
    reference: 'Psalm 119',
    explanation: 'Psalm 119 has 176 verses and is an acrostic poem where each section begins with a successive letter of the Hebrew alphabet. It celebrates God\'s Word and law throughout.'
  },
  {
    id: 'psa-add-004',
    bookId: 'psalms',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'This is the day which the Lord hath made; we will rejoice and be... in it.',
    options: ['happy', 'glad', 'content', 'joyful'],
    correctAnswer: 1,
    reference: 'Psalm 118:24',
    explanation: 'This verse reminds believers that each day is a gift from God and should be celebrated. It encourages an attitude of gratitude and joy regardless of circumstances.'
  },
  {
    id: 'psa-add-005',
    bookId: 'psalms',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which psalm begins with "The heavens declare the glory of God"?',
    options: ['Psalm 1', 'Psalm 8', 'Psalm 19', 'Psalm 23'],
    correctAnswer: 2,
    reference: 'Psalm 19:1',
    explanation: 'Psalm 19 is a beautiful meditation on how creation reveals God\'s glory and how His law brings joy and wisdom. It shows two ways God reveals Himself: through nature and Scripture.'
  },
];

export const additionalProverbsQuestions: QuizQuestion[] = [
  {
    id: 'pro-add-001',
    bookId: 'proverbs',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'Trust in the Lord with all thine heart; and lean not unto thine own...',
    options: ['strength', 'wisdom', 'understanding', 'knowledge'],
    correctAnswer: 2,
    reference: 'Proverbs 3:5',
    explanation: 'This verse teaches complete reliance on God rather than our limited human perspective. It\'s one of the most quoted verses about faith and trusting God\'s guidance.'
  },
  {
    id: 'pro-add-002',
    bookId: 'proverbs',
    difficulty: 'medium',
    type: 'verse-completion',
    question: 'The fear of the Lord is the beginning of...',
    options: ['knowledge', 'wisdom', 'faith', 'understanding'],
    correctAnswer: 0,
    reference: 'Proverbs 1:7',
    explanation: 'Reverence for God is the foundation of all true knowledge and wisdom. This theme is central to Proverbs and establishes that a right relationship with God is essential for wise living.'
  },
  {
    id: 'pro-add-003',
    bookId: 'proverbs',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Who is credited with writing most of the Proverbs?',
    options: ['David', 'Solomon', 'Moses', 'Samuel'],
    correctAnswer: 1,
    reference: 'Proverbs 1:1',
    explanation: 'Solomon, known as the wisest man who ever lived, wrote most of the Proverbs. God granted him extraordinary wisdom when he asked for it instead of wealth or power (1 Kings 3:12).'
  },
  {
    id: 'pro-add-004',
    bookId: 'proverbs',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'Train up a child in the way he should go: and when he is old...',
    options: ['he will remember it', 'he will not depart from it', 'he will teach others', 'he will be blessed'],
    correctAnswer: 1,
    reference: 'Proverbs 22:6',
    explanation: 'This proverb emphasizes the importance of early spiritual and moral education. The training given in childhood shapes character and values for life.'
  },
];

export const additionalMatthewQuestions: QuizQuestion[] = [
  {
    id: 'mat-add-001',
    bookId: 'matthew',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Where was Jesus born?',
    options: ['Nazareth', 'Jerusalem', 'Bethlehem', 'Capernaum'],
    correctAnswer: 2,
    reference: 'Matthew 2:1',
    explanation: 'Jesus was born in Bethlehem of Judea, fulfilling the prophecy in Micah 5:2. This was also the city of David, linking Jesus to the royal lineage.'
  },
  {
    id: 'mat-add-002',
    bookId: 'matthew',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'How many times did Peter deny Jesus?',
    options: ['Once', 'Twice', 'Three times', 'Four times'],
    correctAnswer: 2,
    reference: 'Matthew 26:34',
    explanation: 'Jesus predicted that Peter would deny Him three times before the rooster crowed. This prophecy was fulfilled exactly as Jesus said, demonstrating both human weakness and Jesus\' divine knowledge.'
  },
  {
    id: 'mat-add-003',
    bookId: 'matthew',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'In the parable of the talents, how many talents did the master give to the first servant?',
    options: ['One', 'Two', 'Five', 'Ten'],
    correctAnswer: 2,
    reference: 'Matthew 25:15',
    explanation: 'The first servant received five talents (a unit of money), the second received two, and the third received one, each according to their ability. This parable teaches about faithful stewardship.'
  },
  {
    id: 'mat-add-004',
    bookId: 'matthew',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'Come unto me, all ye that labour and are heavy laden, and I will give you...',
    options: ['peace', 'rest', 'joy', 'hope'],
    correctAnswer: 1,
    reference: 'Matthew 11:28',
    explanation: 'Jesus offers rest to all who are weary and burdened. This invitation extends to anyone struggling under the weight of sin, religious legalism, or life\'s difficulties.'
  },
  {
    id: 'mat-add-005',
    bookId: 'matthew',
    difficulty: 'medium',
    type: 'who-said',
    question: 'Who said, "Thou art the Christ, the Son of the living God"?',
    options: ['John', 'Peter', 'James', 'Andrew'],
    correctAnswer: 1,
    reference: 'Matthew 16:16',
    explanation: 'Peter made this confession of faith at Caesarea Philippi. Jesus responded by declaring that this truth was revealed to Peter by the Father in heaven.'
  },
];

export const additionalJohnQuestions: QuizQuestion[] = [
  {
    id: 'joh-add-001',
    bookId: 'john',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have...',
    options: ['eternal life', 'salvation', 'peace', 'joy'],
    correctAnswer: 0,
    reference: 'John 3:16',
    explanation: 'Often called "the Gospel in a nutshell," this verse summarizes the entire message of Christianity: God\'s love, Christ\'s sacrifice, faith as the response, and eternal life as the result.'
  },
  {
    id: 'joh-add-002',
    bookId: 'john',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What was Jesus\' first miracle?',
    options: ['Healing a blind man', 'Feeding 5,000', 'Turning water into wine', 'Walking on water'],
    correctAnswer: 2,
    reference: 'John 2:1-11',
    explanation: 'At a wedding in Cana, Jesus turned water into wine when the hosts ran out. This miracle revealed His glory and caused His disciples to believe in Him.'
  },
  {
    id: 'joh-add-003',
    bookId: 'john',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'Who did Jesus raise from the dead after four days in the tomb?',
    options: ['Jairus\' daughter', 'The widow\'s son', 'Lazarus', 'Eutychus'],
    correctAnswer: 2,
    reference: 'John 11:43-44',
    explanation: 'Jesus raised His friend Lazarus from the dead after he had been in the tomb for four days. This miracle demonstrated Jesus\' power over death and foreshadowed His own resurrection.'
  },
  {
    id: 'joh-add-004',
    bookId: 'john',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'Jesus said unto him, I am the way, the truth, and the life: no man cometh unto the Father...',
    options: ['without faith', 'but by me', 'except through prayer', 'without love'],
    correctAnswer: 1,
    reference: 'John 14:6',
    explanation: 'Jesus declared Himself as the exclusive way to God the Father. This verse affirms that salvation and access to God come only through faith in Jesus Christ.'
  },
  {
    id: 'joh-add-005',
    bookId: 'john',
    difficulty: 'medium',
    type: 'who-said',
    question: 'Who said, "Unless I see the nail marks in his hands... I will not believe"?',
    options: ['Peter', 'John', 'Thomas', 'James'],
    correctAnswer: 2,
    reference: 'John 20:25',
    explanation: 'Thomas, often called "Doubting Thomas," made this statement after the other disciples claimed to have seen the risen Jesus. A week later, Jesus appeared and Thomas believed.'
  },
];

export const additionalRevelationQuestions: QuizQuestion[] = [
  {
    id: 'rev-add-001',
    bookId: 'revelation',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'To how many churches did Jesus send messages in Revelation?',
    options: ['Five', 'Seven', 'Ten', 'Twelve'],
    correctAnswer: 1,
    reference: 'Revelation 1:11',
    explanation: 'Jesus sent messages to seven churches in Asia Minor: Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea. Each message contained specific warnings and encouragements.'
  },
  {
    id: 'rev-add-002',
    bookId: 'revelation',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What does "666" represent in Revelation?',
    options: ['The number of the beast', 'The number of angels', 'The years of tribulation', 'The tribes of Israel'],
    correctAnswer: 0,
    reference: 'Revelation 13:18',
    explanation: '666 is identified as "the number of the beast" or the number of a man. It represents the Antichrist and has been the subject of much interpretation throughout church history.'
  },
  {
    id: 'rev-add-003',
    bookId: 'revelation',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'What are the four horsemen of the Apocalypse?',
    options: ['War, Famine, Pestilence, Death', 'Conquest, War, Famine, Death', 'Sin, War, Plague, Death', 'Evil, War, Hunger, Death'],
    correctAnswer: 1,
    reference: 'Revelation 6:1-8',
    explanation: 'The four horsemen represent Conquest (white horse), War (red horse), Famine (black horse), and Death (pale horse). They symbolize the judgments that will come upon the earth.'
  },
  {
    id: 'rev-add-004',
    bookId: 'revelation',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will...',
    options: ['bless him', 'save him', 'come in to him', 'heal him'],
    correctAnswer: 2,
    reference: 'Revelation 3:20',
    explanation: 'Jesus promises intimate fellowship with those who respond to His invitation. This verse from the letter to Laodicea is often used in evangelism to illustrate Christ\'s patient invitation.'
  },
  {
    id: 'rev-add-005',
    bookId: 'revelation',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What comes down from heaven at the end of Revelation?',
    options: ['A great temple', 'The New Jerusalem', 'A golden throne', 'The Tree of Life'],
    correctAnswer: 1,
    reference: 'Revelation 21:2',
    explanation: 'The New Jerusalem descends from heaven as the eternal dwelling place of God with His people. It is described in glorious detail with streets of gold and gates of pearl.'
  },
];

// New Testament Letters with explanations
export const additionalRomansQuestions: QuizQuestion[] = [
  {
    id: 'rom-add-001',
    bookId: 'romans',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'For all have sinned, and come short of the glory of...',
    options: ['man', 'heaven', 'God', 'salvation'],
    correctAnswer: 2,
    reference: 'Romans 3:23',
    explanation: 'This verse establishes that every person has sinned and fallen short of God\'s perfect standard. It\'s a foundational verse for understanding the need for salvation through Christ.'
  },
  {
    id: 'rom-add-002',
    bookId: 'romans',
    difficulty: 'medium',
    type: 'verse-completion',
    question: 'For the wages of sin is death; but the gift of God is eternal life through...',
    options: ['good works', 'faith alone', 'Jesus Christ our Lord', 'baptism'],
    correctAnswer: 2,
    reference: 'Romans 6:23',
    explanation: 'This verse contrasts what we earn (death) with what God freely gives (eternal life). It emphasizes that salvation is a gift, not something we can earn.'
  },
  {
    id: 'rom-add-003',
    bookId: 'romans',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'According to Romans 8, what can separate us from the love of God?',
    options: ['Sin', 'Death', 'Angels', 'Nothing'],
    correctAnswer: 3,
    reference: 'Romans 8:38-39',
    explanation: 'Paul declares that nothing—neither death, life, angels, demons, present, future, powers, height, depth, nor anything else in all creation—can separate believers from God\'s love in Christ.'
  },
];

// Export all additional questions combined
export const allAdditionalQuestions: QuizQuestion[] = [
  ...additionalGenesisQuestions,
  ...additionalExodusQuestions,
  ...additionalPsalmsQuestions,
  ...additionalProverbsQuestions,
  ...additionalMatthewQuestions,
  ...additionalJohnQuestions,
  ...additionalRevelationQuestions,
  ...additionalRomansQuestions,
];
