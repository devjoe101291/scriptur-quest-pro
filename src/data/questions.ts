export interface QuizQuestion {
  id: string;
  bookId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'multiple-choice' | 'verse-completion' | 'who-said' | 'which-book';
  question: string;
  options: string[];
  correctAnswer: number;
  reference?: string;
  explanation?: string;
}

// Sample questions for multiple books - in production, this would be a much larger dataset
export const questions: QuizQuestion[] = [
  // Genesis Questions
  {
    id: 'gen-001',
    bookId: 'genesis',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'In the beginning, God created the heaven and the...',
    options: ['Earth', 'Sea', 'Mountains', 'Stars'],
    correctAnswer: 0,
    reference: 'Genesis 1:1',
    explanation: 'The very first verse of the Bible states "In the beginning God created the heaven and the earth."'
  },
  {
    id: 'gen-002',
    bookId: 'genesis',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What was the name of the first man created by God?',
    options: ['Noah', 'Adam', 'Abraham', 'Moses'],
    correctAnswer: 1,
    reference: 'Genesis 2:7',
  },
  {
    id: 'gen-003',
    bookId: 'genesis',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'From what part of Adam\'s body did God create Eve?',
    options: ['His hand', 'His foot', 'His rib', 'His heart'],
    correctAnswer: 2,
    reference: 'Genesis 2:22',
  },
  {
    id: 'gen-004',
    bookId: 'genesis',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'How many days did it take God to create the world?',
    options: ['5 days', '6 days', '7 days', '40 days'],
    correctAnswer: 1,
    reference: 'Genesis 1:31-2:1',
    explanation: 'God created the world in six days and rested on the seventh.'
  },
  {
    id: 'gen-005',
    bookId: 'genesis',
    difficulty: 'medium',
    type: 'who-said',
    question: 'Who said "Am I my brother\'s keeper?"',
    options: ['Abel', 'Cain', 'Seth', 'Adam'],
    correctAnswer: 1,
    reference: 'Genesis 4:9',
  },
  {
    id: 'gen-006',
    bookId: 'genesis',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'How old was Noah when the flood came upon the earth?',
    options: ['500 years old', '600 years old', '700 years old', '950 years old'],
    correctAnswer: 1,
    reference: 'Genesis 7:6',
  },
  {
    id: 'gen-007',
    bookId: 'genesis',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What was the sign of God\'s covenant with Noah?',
    options: ['A dove', 'A rainbow', 'An olive branch', 'A star'],
    correctAnswer: 1,
    reference: 'Genesis 9:13',
  },
  {
    id: 'gen-008',
    bookId: 'genesis',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'How many sons did Jacob have?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2,
    reference: 'Genesis 35:22',
  },

  // Exodus Questions
  {
    id: 'exo-001',
    bookId: 'exodus',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Who led the Israelites out of Egypt?',
    options: ['Aaron', 'Joshua', 'Moses', 'Abraham'],
    correctAnswer: 2,
    reference: 'Exodus 3:10',
  },
  {
    id: 'exo-002',
    bookId: 'exodus',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'How many plagues did God send upon Egypt?',
    options: ['7', '10', '12', '40'],
    correctAnswer: 1,
    reference: 'Exodus 7-12',
  },
  {
    id: 'exo-003',
    bookId: 'exodus',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What did God provide for the Israelites to eat in the wilderness?',
    options: ['Fish and bread', 'Manna and quail', 'Lamb and unleavened bread', 'Figs and dates'],
    correctAnswer: 1,
    reference: 'Exodus 16:13-15',
  },
  {
    id: 'exo-004',
    bookId: 'exodus',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'On which mountain did Moses receive the Ten Commandments?',
    options: ['Mount Carmel', 'Mount Sinai', 'Mount Nebo', 'Mount Horeb'],
    correctAnswer: 1,
    reference: 'Exodus 19:20',
  },

  // Psalms Questions
  {
    id: 'psa-001',
    bookId: 'psalms',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'The Lord is my shepherd; I shall not...',
    options: ['fear', 'want', 'worry', 'hunger'],
    correctAnswer: 1,
    reference: 'Psalm 23:1',
  },
  {
    id: 'psa-002',
    bookId: 'psalms',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'Thy word is a lamp unto my feet, and a light unto my...',
    options: ['way', 'path', 'soul', 'heart'],
    correctAnswer: 1,
    reference: 'Psalm 119:105',
  },
  {
    id: 'psa-003',
    bookId: 'psalms',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'Which Psalm begins with "The Lord is my light and my salvation"?',
    options: ['Psalm 23', 'Psalm 27', 'Psalm 91', 'Psalm 100'],
    correctAnswer: 1,
    reference: 'Psalm 27:1',
  },

  // Matthew Questions
  {
    id: 'mat-001',
    bookId: 'matthew',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Where was Jesus born?',
    options: ['Nazareth', 'Jerusalem', 'Bethlehem', 'Capernaum'],
    correctAnswer: 2,
    reference: 'Matthew 2:1',
  },
  {
    id: 'mat-002',
    bookId: 'matthew',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'How many disciples did Jesus have?',
    options: ['7', '10', '12', '14'],
    correctAnswer: 2,
    reference: 'Matthew 10:1-4',
  },
  {
    id: 'mat-003',
    bookId: 'matthew',
    difficulty: 'medium',
    type: 'who-said',
    question: 'Who said "Thou art the Christ, the Son of the living God"?',
    options: ['John', 'Peter', 'James', 'Thomas'],
    correctAnswer: 1,
    reference: 'Matthew 16:16',
  },
  {
    id: 'mat-004',
    bookId: 'matthew',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'How many beatitudes are there in the Sermon on the Mount?',
    options: ['7', '8', '9', '10'],
    correctAnswer: 2,
    reference: 'Matthew 5:3-12',
  },

  // John Questions
  {
    id: 'jhn-001',
    bookId: 'john',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'For God so loved the world, that he gave his only begotten...',
    options: ['Spirit', 'Word', 'Son', 'Angel'],
    correctAnswer: 2,
    reference: 'John 3:16',
  },
  {
    id: 'jhn-002',
    bookId: 'john',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What was Jesus\' first miracle?',
    options: ['Healing a blind man', 'Turning water into wine', 'Walking on water', 'Feeding the 5000'],
    correctAnswer: 1,
    reference: 'John 2:1-11',
  },
  {
    id: 'jhn-003',
    bookId: 'john',
    difficulty: 'medium',
    type: 'who-said',
    question: 'Who said "I am the resurrection, and the life"?',
    options: ['Peter', 'John the Baptist', 'Jesus', 'Paul'],
    correctAnswer: 2,
    reference: 'John 11:25',
  },

  // Romans Questions
  {
    id: 'rom-001',
    bookId: 'romans',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'For all have sinned, and come short of the glory of...',
    options: ['heaven', 'God', 'Christ', 'the Lord'],
    correctAnswer: 1,
    reference: 'Romans 3:23',
  },
  {
    id: 'rom-002',
    bookId: 'romans',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'According to Romans, what is the wages of sin?',
    options: ['Suffering', 'Sickness', 'Death', 'Poverty'],
    correctAnswer: 2,
    reference: 'Romans 6:23',
  },

  // Revelation Questions
  {
    id: 'rev-001',
    bookId: 'revelation',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'Who wrote the book of Revelation?',
    options: ['Paul', 'Peter', 'John', 'James'],
    correctAnswer: 2,
    reference: 'Revelation 1:1',
  },
  {
    id: 'rev-002',
    bookId: 'revelation',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'How many churches did John write to in Revelation?',
    options: ['5', '7', '10', '12'],
    correctAnswer: 1,
    reference: 'Revelation 1:4',
  },
  {
    id: 'rev-003',
    bookId: 'revelation',
    difficulty: 'hard',
    type: 'multiple-choice',
    question: 'What is the number of the beast mentioned in Revelation?',
    options: ['616', '666', '777', '888'],
    correctAnswer: 1,
    reference: 'Revelation 13:18',
  },

  // Proverbs Questions
  {
    id: 'pro-001',
    bookId: 'proverbs',
    difficulty: 'easy',
    type: 'verse-completion',
    question: 'The fear of the Lord is the beginning of...',
    options: ['love', 'wisdom', 'faith', 'hope'],
    correctAnswer: 1,
    reference: 'Proverbs 9:10',
  },
  {
    id: 'pro-002',
    bookId: 'proverbs',
    difficulty: 'medium',
    type: 'verse-completion',
    question: 'Train up a child in the way he should go: and when he is old, he will not...',
    options: ['forget it', 'depart from it', 'lose it', 'regret it'],
    correctAnswer: 1,
    reference: 'Proverbs 22:6',
  },

  // Acts Questions
  {
    id: 'act-001',
    bookId: 'acts',
    difficulty: 'easy',
    type: 'multiple-choice',
    question: 'What event is described at the beginning of Acts chapter 2?',
    options: ['The Crucifixion', 'The Ascension', 'Pentecost', 'The Last Supper'],
    correctAnswer: 2,
    reference: 'Acts 2:1-4',
  },
  {
    id: 'act-002',
    bookId: 'acts',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'What was Saul\'s name changed to after his conversion?',
    options: ['Peter', 'Paul', 'Philip', 'Silas'],
    correctAnswer: 1,
    reference: 'Acts 13:9',
  },

  // 1 Corinthians Questions
  {
    id: 'cor-001',
    bookId: '1-corinthians',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'According to 1 Corinthians 13, what is the greatest of faith, hope, and love?',
    options: ['Faith', 'Hope', 'Love', 'They are equal'],
    correctAnswer: 2,
    reference: '1 Corinthians 13:13',
  },

  // Hebrews Questions  
  {
    id: 'heb-001',
    bookId: 'hebrews',
    difficulty: 'medium',
    type: 'verse-completion',
    question: 'Now faith is the substance of things hoped for, the evidence of things not...',
    options: ['understood', 'seen', 'known', 'believed'],
    correctAnswer: 1,
    reference: 'Hebrews 11:1',
  },

  // James Questions
  {
    id: 'jam-001',
    bookId: 'james',
    difficulty: 'medium',
    type: 'multiple-choice',
    question: 'According to James, faith without works is...',
    options: ['weak', 'incomplete', 'dead', 'false'],
    correctAnswer: 2,
    reference: 'James 2:26',
  },
];

export const getQuestionsByBook = (bookId: string) =>
  questions.filter(q => q.bookId === bookId);

export const getQuestionsByDifficulty = (bookId: string, difficulty: 'easy' | 'medium' | 'hard') =>
  questions.filter(q => q.bookId === bookId && q.difficulty === difficulty);

export const shuffleQuestions = (questionsArray: QuizQuestion[]): QuizQuestion[] => {
  const shuffled = [...questionsArray];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
