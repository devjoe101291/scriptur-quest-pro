import { QuizQuestion } from '../questions';

// Categorized questions covering different themes across the Bible
// Categories: Miracles, Parables, Prophecy, Women of the Bible, Kings & Leaders, Angels & Visions

// MIRACLES CATEGORY
export const miraclesQuestions: QuizQuestion[] = [
  {
    id: 'mir-001',
    bookId: 'exodus',
    difficulty: 'easy',
    type: 'multiple-choice',
    category: 'miracles',
    question: 'What miracle did Moses perform at the Red Sea?',
    options: ['Turned water to blood', 'Parted the waters', 'Called down fire', 'Made it rain'],
    correctAnswer: 1,
    reference: 'Exodus 14:21-22',
    explanation: 'Moses stretched out his hand over the sea, and God drove the sea back with a strong east wind, creating a path of dry land for the Israelites to cross.'
  },
  {
    id: 'mir-002',
    bookId: '2-kings',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'miracles',
    question: 'How many loaves of bread did Elisha use to feed 100 men?',
    options: ['5 loaves', '7 loaves', '20 loaves', '50 loaves'],
    correctAnswer: 2,
    reference: '2 Kings 4:42-44',
    explanation: 'Elisha fed 100 men with just 20 loaves of barley bread. This miracle foreshadowed Jesus feeding the 5,000 with five loaves and two fish.'
  },
  {
    id: 'mir-003',
    bookId: 'john',
    difficulty: 'easy',
    type: 'multiple-choice',
    category: 'miracles',
    question: 'How many days was Lazarus in the tomb before Jesus raised him?',
    options: ['1 day', '2 days', '3 days', '4 days'],
    correctAnswer: 3,
    reference: 'John 11:39',
    explanation: 'Lazarus had been dead for four days when Jesus arrived. This emphasized the completeness of the miracle, as decomposition would have begun.'
  },
  {
    id: 'mir-004',
    bookId: 'matthew',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'miracles',
    question: 'Which disciple walked on water with Jesus?',
    options: ['John', 'James', 'Peter', 'Andrew'],
    correctAnswer: 2,
    reference: 'Matthew 14:29',
    explanation: 'Peter asked Jesus to command him to come on the water. He walked toward Jesus but began to sink when he saw the wind and became afraid.'
  },
  {
    id: 'mir-005',
    bookId: 'luke',
    difficulty: 'hard',
    type: 'multiple-choice',
    category: 'miracles',
    question: 'How many lepers did Jesus heal on His way to Jerusalem, but only one returned to give thanks?',
    options: ['5', '7', '10', '12'],
    correctAnswer: 2,
    reference: 'Luke 17:12-17',
    explanation: 'Jesus healed ten lepers, but only one—a Samaritan—returned to thank Him. Jesus noted that the others did not return to give glory to God.'
  },
  {
    id: 'mir-006',
    bookId: '1-kings',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'miracles',
    question: 'How did Elijah prove the Lord was the true God on Mount Carmel?',
    options: ['Earthquake', 'Fire from heaven', 'Parting water', 'Healing a blind man'],
    correctAnswer: 1,
    reference: '1 Kings 18:38',
    explanation: 'Elijah challenged the prophets of Baal to a contest. When he prayed, fire from heaven consumed his water-soaked sacrifice, proving the Lord is God.'
  },
  {
    id: 'mir-007',
    bookId: 'acts',
    difficulty: 'hard',
    type: 'who-said',
    category: 'miracles',
    question: 'Who raised Tabitha (Dorcas) from the dead?',
    options: ['Paul', 'Peter', 'Philip', 'John'],
    correctAnswer: 1,
    reference: 'Acts 9:40',
    explanation: 'Peter prayed for Tabitha in Joppa and commanded her to arise. She opened her eyes and sat up, and many believed in the Lord because of this miracle.'
  },
];

// PARABLES CATEGORY
export const parablesQuestions: QuizQuestion[] = [
  {
    id: 'par-001',
    bookId: 'luke',
    difficulty: 'easy',
    type: 'multiple-choice',
    category: 'parables',
    question: 'In the Parable of the Prodigal Son, what job did the younger son take in the far country?',
    options: ['Shepherd', 'Carpenter', 'Feeding pigs', 'Tax collector'],
    correctAnswer: 2,
    reference: 'Luke 15:15',
    explanation: 'After spending all his inheritance, the son was so desperate he took a job feeding pigs—an unclean occupation for a Jewish person, showing how far he had fallen.'
  },
  {
    id: 'par-002',
    bookId: 'matthew',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'parables',
    question: 'In the Parable of the Sower, what happened to the seed that fell on rocky ground?',
    options: ['Birds ate it', 'It withered in the sun', 'Thorns choked it', 'It produced fruit'],
    correctAnswer: 1,
    reference: 'Matthew 13:5-6',
    explanation: 'The seed on rocky ground sprang up quickly but had no deep root. When the sun came up, it withered because it had no moisture. This represents those who receive the word with joy but fall away in times of testing.'
  },
  {
    id: 'par-003',
    bookId: 'luke',
    difficulty: 'easy',
    type: 'multiple-choice',
    category: 'parables',
    question: 'Who helped the injured man in the Parable of the Good Samaritan?',
    options: ['A Levite', 'A priest', 'A Samaritan', 'A Pharisee'],
    correctAnswer: 2,
    reference: 'Luke 10:33-35',
    explanation: 'While the priest and Levite passed by, the Samaritan—considered an outsider by Jews—showed compassion and cared for the wounded man, teaching that our neighbor is anyone in need.'
  },
  {
    id: 'par-004',
    bookId: 'matthew',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'parables',
    question: 'In the Parable of the Talents, how many talents did the master give to the first servant?',
    options: ['1', '2', '5', '10'],
    correctAnswer: 2,
    reference: 'Matthew 25:15',
    explanation: 'The master gave five talents to the first servant, who doubled it to ten. This parable teaches about faithfully using what God has entrusted to us.'
  },
  {
    id: 'par-005',
    bookId: 'matthew',
    difficulty: 'hard',
    type: 'multiple-choice',
    category: 'parables',
    question: 'In the Parable of the Ten Virgins, how many were wise and how many were foolish?',
    options: ['3 wise, 7 foolish', '5 wise, 5 foolish', '7 wise, 3 foolish', '4 wise, 6 foolish'],
    correctAnswer: 1,
    reference: 'Matthew 25:2',
    explanation: 'Five were wise (prepared with extra oil) and five were foolish (unprepared). This parable emphasizes the importance of being spiritually prepared for Christ\'s return.'
  },
  {
    id: 'par-006',
    bookId: 'luke',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'parables',
    question: 'What did the woman lose in the Parable of the Lost Coin?',
    options: ['1 of 5 coins', '1 of 10 coins', '1 of 12 coins', '1 of 100 coins'],
    correctAnswer: 1,
    reference: 'Luke 15:8',
    explanation: 'The woman had 10 silver coins and lost one. She searched diligently until she found it, then rejoiced with her neighbors—illustrating heaven\'s joy over one sinner who repents.'
  },
];

// PROPHECY CATEGORY
export const prophecyQuestions: QuizQuestion[] = [
  {
    id: 'pro-001',
    bookId: 'isaiah',
    difficulty: 'easy',
    type: 'verse-completion',
    category: 'prophecy',
    question: 'For unto us a child is born, unto us a son is given: and the government shall be upon his...',
    options: ['head', 'shoulder', 'hands', 'throne'],
    correctAnswer: 1,
    reference: 'Isaiah 9:6',
    explanation: 'This Messianic prophecy foretold that Jesus would bear the weight of ruling God\'s kingdom. The verse continues to list His names: Wonderful Counsellor, Mighty God, Everlasting Father, Prince of Peace.'
  },
  {
    id: 'pro-002',
    bookId: 'micah',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'prophecy',
    question: 'Which prophet foretold that the Messiah would be born in Bethlehem?',
    options: ['Isaiah', 'Jeremiah', 'Micah', 'Daniel'],
    correctAnswer: 2,
    reference: 'Micah 5:2',
    explanation: 'Micah prophesied that from Bethlehem Ephrathah would come forth a ruler whose origins are "from of old, from everlasting"—pointing to Christ\'s eternal divine nature.'
  },
  {
    id: 'pro-003',
    bookId: 'zechariah',
    difficulty: 'hard',
    type: 'multiple-choice',
    category: 'prophecy',
    question: 'Which prophet foretold that Jesus would be betrayed for 30 pieces of silver?',
    options: ['Isaiah', 'Jeremiah', 'Zechariah', 'Malachi'],
    correctAnswer: 2,
    reference: 'Zechariah 11:12-13',
    explanation: 'Zechariah prophesied both the amount (30 pieces of silver) and that it would be thrown to the potter in the house of the Lord—exactly as Judas later did.'
  },
  {
    id: 'pro-004',
    bookId: 'daniel',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'prophecy',
    question: 'In Daniel\'s vision, what kind of statue did King Nebuchadnezzar dream about?',
    options: ['All gold', 'Gold, silver, bronze, iron, and clay', 'All silver', 'Bronze and iron'],
    correctAnswer: 1,
    reference: 'Daniel 2:31-33',
    explanation: 'The statue had a head of gold (Babylon), chest of silver (Persia), belly of bronze (Greece), legs of iron (Rome), and feet of iron and clay (divided kingdoms).'
  },
  {
    id: 'pro-005',
    bookId: 'isaiah',
    difficulty: 'easy',
    type: 'verse-completion',
    category: 'prophecy',
    question: 'Behold, a virgin shall conceive, and bear a son, and shall call his name...',
    options: ['Jesus', 'Immanuel', 'Messiah', 'Savior'],
    correctAnswer: 1,
    reference: 'Isaiah 7:14',
    explanation: 'Immanuel means "God with us." This prophecy was fulfilled in Jesus Christ, who was conceived by the Holy Spirit and born of the virgin Mary.'
  },
];

// WOMEN OF THE BIBLE CATEGORY
export const womenOfBibleQuestions: QuizQuestion[] = [
  {
    id: 'wob-001',
    bookId: 'judges',
    difficulty: 'easy',
    type: 'multiple-choice',
    category: 'women',
    question: 'Who was the only female judge of Israel?',
    options: ['Ruth', 'Esther', 'Deborah', 'Miriam'],
    correctAnswer: 2,
    reference: 'Judges 4:4',
    explanation: 'Deborah was a prophetess who judged Israel and led them to victory against the Canaanite commander Sisera. She composed a victory song recorded in Judges 5.'
  },
  {
    id: 'wob-002',
    bookId: 'esther',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'women',
    question: 'What was Esther\'s Jewish name?',
    options: ['Hadassah', 'Sarah', 'Miriam', 'Hannah'],
    correctAnswer: 0,
    reference: 'Esther 2:7',
    explanation: 'Hadassah means "myrtle tree." She was given the Persian name Esther, meaning "star." She bravely approached the king to save her people from destruction.'
  },
  {
    id: 'wob-003',
    bookId: 'ruth',
    difficulty: 'easy',
    type: 'multiple-choice',
    category: 'women',
    question: 'Ruth was the great-grandmother of which famous king?',
    options: ['Saul', 'David', 'Solomon', 'Josiah'],
    correctAnswer: 1,
    reference: 'Ruth 4:17-22',
    explanation: 'Ruth married Boaz and they had a son named Obed, who was the father of Jesse, the father of King David. Ruth is also in the genealogy of Jesus.'
  },
  {
    id: 'wob-004',
    bookId: 'luke',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'women',
    question: 'Who was the first person to see Jesus after His resurrection?',
    options: ['Peter', 'Mary Magdalene', 'John', 'Mary the mother of Jesus'],
    correctAnswer: 1,
    reference: 'John 20:14-16',
    explanation: 'Mary Magdalene was the first to see the risen Christ. Jesus called her by name at the tomb, and she became the first witness to proclaim His resurrection.'
  },
  {
    id: 'wob-005',
    bookId: 'acts',
    difficulty: 'hard',
    type: 'multiple-choice',
    category: 'women',
    question: 'Who was the businesswoman from Thyatira who was Paul\'s first European convert?',
    options: ['Priscilla', 'Lydia', 'Phoebe', 'Dorcas'],
    correctAnswer: 1,
    reference: 'Acts 16:14-15',
    explanation: 'Lydia was a seller of purple cloth who heard Paul\'s message in Philippi. She and her household were baptized, and she hosted Paul and his companions in her home.'
  },
  {
    id: 'wob-006',
    bookId: '1-samuel',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'women',
    question: 'Who prayed so fervently for a child that the priest thought she was drunk?',
    options: ['Ruth', 'Rachel', 'Hannah', 'Rebekah'],
    correctAnswer: 2,
    reference: '1 Samuel 1:13-15',
    explanation: 'Hannah\'s lips were moving but her voice was not heard as she prayed. Eli the priest accused her of being drunk, but she explained she was pouring out her soul to the Lord for a son.'
  },
];

// KINGS & LEADERS CATEGORY
export const kingsLeadersQuestions: QuizQuestion[] = [
  {
    id: 'kng-001',
    bookId: '1-kings',
    difficulty: 'easy',
    type: 'multiple-choice',
    category: 'kings',
    question: 'Which king asked God for wisdom instead of riches or long life?',
    options: ['David', 'Solomon', 'Josiah', 'Hezekiah'],
    correctAnswer: 1,
    reference: '1 Kings 3:9-12',
    explanation: 'When God offered Solomon anything he wanted, he asked for wisdom to govern Israel. Pleased with this request, God granted him wisdom plus the riches and honor he didn\'t ask for.'
  },
  {
    id: 'kng-002',
    bookId: '2-chronicles',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'kings',
    question: 'How old was Josiah when he became king of Judah?',
    options: ['8 years old', '12 years old', '16 years old', '20 years old'],
    correctAnswer: 0,
    reference: '2 Chronicles 34:1',
    explanation: 'Josiah became king at just 8 years old and reigned for 31 years. He is remembered as one of Judah\'s most righteous kings who instituted major religious reforms.'
  },
  {
    id: 'kng-003',
    bookId: '2-kings',
    difficulty: 'hard',
    type: 'multiple-choice',
    category: 'kings',
    question: 'Which king had 15 years added to his life after he prayed?',
    options: ['David', 'Solomon', 'Hezekiah', 'Josiah'],
    correctAnswer: 2,
    reference: '2 Kings 20:6',
    explanation: 'When Hezekiah was told he would die, he prayed and wept. God sent Isaiah back with news that He had heard his prayers and would add 15 years to his life.'
  },
  {
    id: 'kng-004',
    bookId: 'daniel',
    difficulty: 'easy',
    type: 'multiple-choice',
    category: 'kings',
    question: 'Which Babylonian king threw Shadrach, Meshach, and Abednego into the fiery furnace?',
    options: ['Darius', 'Nebuchadnezzar', 'Belshazzar', 'Cyrus'],
    correctAnswer: 1,
    reference: 'Daniel 3:19-20',
    explanation: 'Nebuchadnezzar was furious when the three Hebrew men refused to worship his golden image. He had the furnace heated seven times hotter than usual before throwing them in.'
  },
  {
    id: 'kng-005',
    bookId: '1-samuel',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'kings',
    question: 'Why did God reject Saul as king?',
    options: ['He committed murder', 'He disobeyed God\'s command', 'He worshipped idols', 'He taxed the people heavily'],
    correctAnswer: 1,
    reference: '1 Samuel 15:22-23',
    explanation: 'Saul disobeyed God by sparing King Agag and the best of the livestock instead of completely destroying the Amalekites as commanded. Samuel declared that "to obey is better than sacrifice."'
  },
];

// ANGELS & VISIONS CATEGORY
export const angelsVisionsQuestions: QuizQuestion[] = [
  {
    id: 'ang-001',
    bookId: 'genesis',
    difficulty: 'easy',
    type: 'multiple-choice',
    category: 'angels',
    question: 'What did Jacob see in his dream at Bethel?',
    options: ['A burning bush', 'A ladder reaching to heaven', 'A chariot of fire', 'A scroll'],
    correctAnswer: 1,
    reference: 'Genesis 28:12',
    explanation: 'Jacob dreamed of a ladder (or stairway) reaching from earth to heaven with angels ascending and descending. God stood above it and renewed His covenant promises to Jacob.'
  },
  {
    id: 'ang-002',
    bookId: 'luke',
    difficulty: 'easy',
    type: 'multiple-choice',
    category: 'angels',
    question: 'Which angel appeared to Mary to announce she would bear Jesus?',
    options: ['Michael', 'Gabriel', 'Raphael', 'Uriel'],
    correctAnswer: 1,
    reference: 'Luke 1:26-28',
    explanation: 'Gabriel, whose name means "God is my strength," announced to Mary that she had found favor with God and would conceive and bear a son named Jesus.'
  },
  {
    id: 'ang-003',
    bookId: 'revelation',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'angels',
    question: 'In John\'s vision, how many living creatures surround God\'s throne?',
    options: ['2', '4', '7', '12'],
    correctAnswer: 1,
    reference: 'Revelation 4:6-8',
    explanation: 'Four living creatures—resembling a lion, an ox, a man, and an eagle—surround the throne, each with six wings and covered with eyes, constantly praising God.'
  },
  {
    id: 'ang-004',
    bookId: 'daniel',
    difficulty: 'hard',
    type: 'multiple-choice',
    category: 'angels',
    question: 'Which archangel fought against the prince of Persia in Daniel\'s vision?',
    options: ['Gabriel', 'Michael', 'Raphael', 'Uriel'],
    correctAnswer: 1,
    reference: 'Daniel 10:13',
    explanation: 'Michael, described as "one of the chief princes," came to help the messenger angel who had been delayed for 21 days by the prince of Persia (a spiritual power).'
  },
  {
    id: 'ang-005',
    bookId: 'isaiah',
    difficulty: 'medium',
    type: 'multiple-choice',
    category: 'angels',
    question: 'In Isaiah\'s vision, what did the seraphim cry out?',
    options: ['Hallelujah', 'Holy, holy, holy', 'Praise the Lord', 'Glory to God'],
    correctAnswer: 1,
    reference: 'Isaiah 6:3',
    explanation: 'The seraphim called out "Holy, holy, holy is the Lord of hosts; the whole earth is full of his glory!" The triple repetition emphasizes God\'s supreme holiness.'
  },
];

// Export all categorized questions
export const allCategorizedQuestions: QuizQuestion[] = [
  ...miraclesQuestions,
  ...parablesQuestions,
  ...prophecyQuestions,
  ...womenOfBibleQuestions,
  ...kingsLeadersQuestions,
  ...angelsVisionsQuestions,
];
