import { QuizQuestion } from '../questions';

// Questions for remaining Old Testament books
export const leviticusQuestions: QuizQuestion[] = [
  { id: 'lev-001', bookId: 'leviticus', difficulty: 'easy', type: 'multiple-choice', question: 'What tribe was designated for priestly duties?', options: ['Judah', 'Benjamin', 'Levi', 'Dan'], correctAnswer: 2, reference: 'Leviticus 1:5' },
  { id: 'lev-002', bookId: 'leviticus', difficulty: 'medium', type: 'multiple-choice', question: 'What day of atonement is described in Leviticus?', options: ['Passover', 'Yom Kippur', 'Pentecost', 'Sabbath'], correctAnswer: 1, reference: 'Leviticus 16' },
  { id: 'lev-003', bookId: 'leviticus', difficulty: 'hard', type: 'multiple-choice', question: 'What animal was sent into the wilderness on the Day of Atonement?', options: ['Lamb', 'Bull', 'Scapegoat', 'Dove'], correctAnswer: 2, reference: 'Leviticus 16:10' },
  { id: 'lev-004', bookId: 'leviticus', difficulty: 'medium', type: 'verse-completion', question: 'Thou shalt love thy neighbour as...', options: ['thy brother', 'thyself', 'thy family', 'thy friend'], correctAnswer: 1, reference: 'Leviticus 19:18' },
  { id: 'lev-005', bookId: 'leviticus', difficulty: 'hard', type: 'multiple-choice', question: 'What year was the Year of Jubilee celebrated?', options: ['Every 7th year', 'Every 25th year', 'Every 50th year', 'Every 100th year'], correctAnswer: 2, reference: 'Leviticus 25:10' },
  { id: 'lev-006', bookId: 'leviticus', difficulty: 'easy', type: 'multiple-choice', question: 'What type of offering required the finest flour?', options: ['Burnt offering', 'Grain offering', 'Sin offering', 'Peace offering'], correctAnswer: 1, reference: 'Leviticus 2:1' },
  { id: 'lev-007', bookId: 'leviticus', difficulty: 'medium', type: 'multiple-choice', question: 'What happened to Nadab and Abihu for offering unauthorized fire?', options: ['They were exiled', 'Fire consumed them', 'They became lepers', 'Nothing'], correctAnswer: 1, reference: 'Leviticus 10:1-2' },
  { id: 'lev-008', bookId: 'leviticus', difficulty: 'hard', type: 'multiple-choice', question: 'How many types of offerings are described in the first 7 chapters?', options: ['3', '4', '5', '7'], correctAnswer: 2, reference: 'Leviticus 1-7' },
  { id: 'lev-009', bookId: 'leviticus', difficulty: 'medium', type: 'multiple-choice', question: 'What could make a person ceremonially unclean?', options: ['Touching a dead body', 'Working on Sabbath', 'Eating bread', 'Singing songs'], correctAnswer: 0, reference: 'Leviticus 11:24' },
  { id: 'lev-010', bookId: 'leviticus', difficulty: 'easy', type: 'multiple-choice', question: 'What animal was NOT allowed to be eaten according to Leviticus?', options: ['Lamb', 'Goat', 'Pig', 'Cow'], correctAnswer: 2, reference: 'Leviticus 11:7' },
];

export const numbersQuestions: QuizQuestion[] = [
  { id: 'num-001', bookId: 'numbers', difficulty: 'easy', type: 'multiple-choice', question: 'How many spies were sent to explore Canaan?', options: ['10', '12', '40', '70'], correctAnswer: 1, reference: 'Numbers 13:1-16' },
  { id: 'num-002', bookId: 'numbers', difficulty: 'medium', type: 'multiple-choice', question: 'Which two spies gave a good report about Canaan?', options: ['Moses and Aaron', 'Joshua and Caleb', 'Nadab and Abihu', 'Eleazar and Ithamar'], correctAnswer: 1, reference: 'Numbers 14:6-8' },
  { id: 'num-003', bookId: 'numbers', difficulty: 'hard', type: 'multiple-choice', question: 'What did Moses strike to bring water from the rock (for which he was punished)?', options: ['The rock once', 'The rock twice', 'His staff on the ground', 'The air'], correctAnswer: 1, reference: 'Numbers 20:11' },
  { id: 'num-004', bookId: 'numbers', difficulty: 'medium', type: 'multiple-choice', question: 'What was lifted up to heal the Israelites from serpent bites?', options: ['A golden calf', 'A bronze serpent', 'Moses\' staff', 'The Ark'], correctAnswer: 1, reference: 'Numbers 21:9' },
  { id: 'num-005', bookId: 'numbers', difficulty: 'hard', type: 'multiple-choice', question: 'Whose donkey spoke to him?', options: ['Moses', 'Balaam', 'Joshua', 'Caleb'], correctAnswer: 1, reference: 'Numbers 22:28' },
  { id: 'num-006', bookId: 'numbers', difficulty: 'easy', type: 'multiple-choice', question: 'How many years did the Israelites wander in the wilderness?', options: ['10', '20', '40', '70'], correctAnswer: 2, reference: 'Numbers 14:33-34' },
  { id: 'num-007', bookId: 'numbers', difficulty: 'medium', type: 'multiple-choice', question: 'What swallowed Korah and his followers?', options: ['Fire', 'The earth', 'A flood', 'Serpents'], correctAnswer: 1, reference: 'Numbers 16:32' },
  { id: 'num-008', bookId: 'numbers', difficulty: 'hard', type: 'multiple-choice', question: 'What bloomed on Aaron\'s staff to prove his leadership?', options: ['Roses', 'Lilies', 'Almonds', 'Olives'], correctAnswer: 2, reference: 'Numbers 17:8' },
  { id: 'num-009', bookId: 'numbers', difficulty: 'easy', type: 'multiple-choice', question: 'Who was Moses\' sister?', options: ['Rachel', 'Miriam', 'Deborah', 'Hannah'], correctAnswer: 1, reference: 'Numbers 12:1' },
  { id: 'num-010', bookId: 'numbers', difficulty: 'medium', type: 'multiple-choice', question: 'What disease did Miriam receive as punishment for criticizing Moses?', options: ['Blindness', 'Leprosy', 'Fever', 'Lameness'], correctAnswer: 1, reference: 'Numbers 12:10' },
];

export const deuteronomyQuestions: QuizQuestion[] = [
  { id: 'deu-001', bookId: 'deuteronomy', difficulty: 'easy', type: 'verse-completion', question: 'Hear, O Israel: The Lord our God is... Lord', options: ['the only', 'one', 'the true', 'our'], correctAnswer: 1, reference: 'Deuteronomy 6:4' },
  { id: 'deu-002', bookId: 'deuteronomy', difficulty: 'medium', type: 'multiple-choice', question: 'Where did Moses die?', options: ['In Egypt', 'In Canaan', 'On Mount Nebo', 'In the wilderness'], correctAnswer: 2, reference: 'Deuteronomy 34:5' },
  { id: 'deu-003', bookId: 'deuteronomy', difficulty: 'hard', type: 'multiple-choice', question: 'How old was Moses when he died?', options: ['100', '110', '120', '150'], correctAnswer: 2, reference: 'Deuteronomy 34:7' },
  { id: 'deu-004', bookId: 'deuteronomy', difficulty: 'medium', type: 'multiple-choice', question: 'Who buried Moses?', options: ['Joshua', 'Aaron', 'The Israelites', 'God'], correctAnswer: 3, reference: 'Deuteronomy 34:6' },
  { id: 'deu-005', bookId: 'deuteronomy', difficulty: 'easy', type: 'multiple-choice', question: 'What does Deuteronomy mean?', options: ['First law', 'Second law', 'God\'s law', 'Final law'], correctAnswer: 1, reference: 'Title origin' },
  { id: 'deu-006', bookId: 'deuteronomy', difficulty: 'medium', type: 'verse-completion', question: 'Man shall not live by bread alone, but by every word that proceedeth out of the mouth of...', options: ['man', 'the Lord', 'prophets', 'Moses'], correctAnswer: 1, reference: 'Deuteronomy 8:3' },
  { id: 'deu-007', bookId: 'deuteronomy', difficulty: 'easy', type: 'multiple-choice', question: 'Where were the Israelites when Moses gave these speeches?', options: ['Egypt', 'Plains of Moab', 'Mount Sinai', 'Canaan'], correctAnswer: 1, reference: 'Deuteronomy 1:5' },
  { id: 'deu-008', bookId: 'deuteronomy', difficulty: 'hard', type: 'multiple-choice', question: 'How many cities of refuge were to be established?', options: ['3', '6', '7', '12'], correctAnswer: 1, reference: 'Deuteronomy 19:2-3' },
  { id: 'deu-009', bookId: 'deuteronomy', difficulty: 'medium', type: 'multiple-choice', question: 'What blessing was given by Moses before his death?', options: ['A new covenant', 'Blessings on each tribe', 'A new law', 'A prophecy'], correctAnswer: 1, reference: 'Deuteronomy 33' },
  { id: 'deu-010', bookId: 'deuteronomy', difficulty: 'hard', type: 'verse-completion', question: 'Be strong and of a good courage, fear not... for the Lord thy God, he it is that doth go with thee', options: ['be dismayed', 'nor be afraid', 'be worried', 'tremble'], correctAnswer: 1, reference: 'Deuteronomy 31:6' },
];

export const joshuaQuestions: QuizQuestion[] = [
  { id: 'jos-001', bookId: 'joshua', difficulty: 'easy', type: 'multiple-choice', question: 'Who succeeded Moses as leader of Israel?', options: ['Aaron', 'Caleb', 'Joshua', 'Eleazar'], correctAnswer: 2, reference: 'Joshua 1:1-2' },
  { id: 'jos-002', bookId: 'joshua', difficulty: 'easy', type: 'multiple-choice', question: 'What city\'s walls fell down after the Israelites marched around it?', options: ['Ai', 'Jerusalem', 'Jericho', 'Bethel'], correctAnswer: 2, reference: 'Joshua 6:20' },
  { id: 'jos-003', bookId: 'joshua', difficulty: 'medium', type: 'multiple-choice', question: 'How many days did the Israelites march around Jericho?', options: ['1', '3', '7', '40'], correctAnswer: 2, reference: 'Joshua 6:15' },
  { id: 'jos-004', bookId: 'joshua', difficulty: 'medium', type: 'multiple-choice', question: 'Who hid the Israelite spies in Jericho?', options: ['Ruth', 'Rahab', 'Deborah', 'Naomi'], correctAnswer: 1, reference: 'Joshua 2:1-6' },
  { id: 'jos-005', bookId: 'joshua', difficulty: 'hard', type: 'multiple-choice', question: 'What did Joshua command to stand still?', options: ['The Jordan River', 'The Sun and Moon', 'The army', 'The walls'], correctAnswer: 1, reference: 'Joshua 10:12-13' },
  { id: 'jos-006', bookId: 'joshua', difficulty: 'easy', type: 'multiple-choice', question: 'What river did the Israelites cross to enter Canaan?', options: ['Nile', 'Euphrates', 'Jordan', 'Red Sea'], correctAnswer: 2, reference: 'Joshua 3:17' },
  { id: 'jos-007', bookId: 'joshua', difficulty: 'medium', type: 'multiple-choice', question: 'Who stole devoted things causing Israel\'s defeat at Ai?', options: ['Caleb', 'Achan', 'Eleazar', 'Phinehas'], correctAnswer: 1, reference: 'Joshua 7:1' },
  { id: 'jos-008', bookId: 'joshua', difficulty: 'hard', type: 'multiple-choice', question: 'How many times did Israel march around Jericho on the seventh day?', options: ['1', '3', '7', '12'], correctAnswer: 2, reference: 'Joshua 6:15' },
  { id: 'jos-009', bookId: 'joshua', difficulty: 'medium', type: 'verse-completion', question: 'As for me and my house, we will serve the...', options: ['God of Israel', 'Lord', 'Almighty', 'Most High'], correctAnswer: 1, reference: 'Joshua 24:15' },
  { id: 'jos-010', bookId: 'joshua', difficulty: 'hard', type: 'multiple-choice', question: 'What people tricked Joshua into making a treaty?', options: ['Amorites', 'Gibeonites', 'Philistines', 'Canaanites'], correctAnswer: 1, reference: 'Joshua 9:3-6' },
];

export const judgesQuestions: QuizQuestion[] = [
  { id: 'jdg-001', bookId: 'judges', difficulty: 'easy', type: 'multiple-choice', question: 'Who was the strong man whose power came from his hair?', options: ['Gideon', 'Samson', 'Jephthah', 'Othniel'], correctAnswer: 1, reference: 'Judges 16:17' },
  { id: 'jdg-002', bookId: 'judges', difficulty: 'easy', type: 'multiple-choice', question: 'Who was the woman judge of Israel?', options: ['Ruth', 'Rahab', 'Deborah', 'Hannah'], correctAnswer: 2, reference: 'Judges 4:4' },
  { id: 'jdg-003', bookId: 'judges', difficulty: 'medium', type: 'multiple-choice', question: 'How many men did Gideon defeat the Midianites with?', options: ['100', '300', '1000', '10000'], correctAnswer: 1, reference: 'Judges 7:7' },
  { id: 'jdg-004', bookId: 'judges', difficulty: 'medium', type: 'multiple-choice', question: 'Who betrayed Samson?', options: ['Rahab', 'Ruth', 'Delilah', 'Hannah'], correctAnswer: 2, reference: 'Judges 16:18' },
  { id: 'jdg-005', bookId: 'judges', difficulty: 'hard', type: 'multiple-choice', question: 'What weapon did Samson use to kill 1000 Philistines?', options: ['A sword', 'The jawbone of a donkey', 'A spear', 'His bare hands'], correctAnswer: 1, reference: 'Judges 15:15' },
  { id: 'jdg-006', bookId: 'judges', difficulty: 'medium', type: 'multiple-choice', question: 'What did Gideon use to test God\'s will?', options: ['Stones', 'A fleece', 'Fire', 'Water'], correctAnswer: 1, reference: 'Judges 6:37' },
  { id: 'jdg-007', bookId: 'judges', difficulty: 'hard', type: 'multiple-choice', question: 'What instruments did Gideon\'s army use?', options: ['Swords and shields', 'Trumpets and jars', 'Spears and bows', 'Rocks and slings'], correctAnswer: 1, reference: 'Judges 7:16' },
  { id: 'jdg-008', bookId: 'judges', difficulty: 'easy', type: 'multiple-choice', question: 'What animal did Samson kill with his bare hands?', options: ['Bear', 'Lion', 'Wolf', 'Bull'], correctAnswer: 1, reference: 'Judges 14:6' },
  { id: 'jdg-009', bookId: 'judges', difficulty: 'medium', type: 'multiple-choice', question: 'Who killed Sisera with a tent peg?', options: ['Deborah', 'Jael', 'Ruth', 'Rahab'], correctAnswer: 1, reference: 'Judges 4:21' },
  { id: 'jdg-010', bookId: 'judges', difficulty: 'hard', type: 'multiple-choice', question: 'How did Samson die?', options: ['In battle', 'Old age', 'Pulling down temple pillars', 'Executed by Philistines'], correctAnswer: 2, reference: 'Judges 16:30' },
];

export const ruthQuestions: QuizQuestion[] = [
  { id: 'rut-001', bookId: 'ruth', difficulty: 'easy', type: 'multiple-choice', question: 'Who was Ruth\'s mother-in-law?', options: ['Hannah', 'Naomi', 'Deborah', 'Rachel'], correctAnswer: 1, reference: 'Ruth 1:4' },
  { id: 'rut-002', bookId: 'ruth', difficulty: 'easy', type: 'multiple-choice', question: 'What country did Ruth come from?', options: ['Egypt', 'Moab', 'Edom', 'Philistia'], correctAnswer: 1, reference: 'Ruth 1:4' },
  { id: 'rut-003', bookId: 'ruth', difficulty: 'medium', type: 'verse-completion', question: 'Whither thou goest, I will go; and where thou lodgest...', options: ['I will stay', 'I will rest', 'I will lodge', 'I will live'], correctAnswer: 2, reference: 'Ruth 1:16' },
  { id: 'rut-004', bookId: 'ruth', difficulty: 'medium', type: 'multiple-choice', question: 'Who did Ruth marry?', options: ['Elimelech', 'Boaz', 'Mahlon', 'Chilion'], correctAnswer: 1, reference: 'Ruth 4:13' },
  { id: 'rut-005', bookId: 'ruth', difficulty: 'hard', type: 'multiple-choice', question: 'Who was the great-grandson of Ruth?', options: ['Solomon', 'David', 'Jesse', 'Samuel'], correctAnswer: 1, reference: 'Ruth 4:22' },
  { id: 'rut-006', bookId: 'ruth', difficulty: 'easy', type: 'multiple-choice', question: 'What was Ruth doing when Boaz first noticed her?', options: ['Cooking', 'Gleaning in the fields', 'Drawing water', 'Weaving'], correctAnswer: 1, reference: 'Ruth 2:5' },
  { id: 'rut-007', bookId: 'ruth', difficulty: 'medium', type: 'multiple-choice', question: 'What was Boaz\'s role in relation to Naomi\'s family?', options: ['Brother', 'Kinsman-redeemer', 'Priest', 'Judge'], correctAnswer: 1, reference: 'Ruth 3:9' },
  { id: 'rut-008', bookId: 'ruth', difficulty: 'hard', type: 'multiple-choice', question: 'What town did Naomi and Ruth return to?', options: ['Jerusalem', 'Bethlehem', 'Nazareth', 'Hebron'], correctAnswer: 1, reference: 'Ruth 1:19' },
  { id: 'rut-009', bookId: 'ruth', difficulty: 'medium', type: 'multiple-choice', question: 'Who was Ruth\'s first husband?', options: ['Boaz', 'Mahlon', 'Elimelech', 'Chilion'], correctAnswer: 1, reference: 'Ruth 4:10' },
  { id: 'rut-010', bookId: 'ruth', difficulty: 'hard', type: 'multiple-choice', question: 'What did Naomi tell people to call her because of her bitterness?', options: ['Mara', 'Rachel', 'Leah', 'Orpah'], correctAnswer: 0, reference: 'Ruth 1:20' },
];

export const samuel1Questions: QuizQuestion[] = [
  { id: '1sa-001', bookId: '1-samuel', difficulty: 'easy', type: 'multiple-choice', question: 'Who was the first king of Israel?', options: ['David', 'Saul', 'Solomon', 'Samuel'], correctAnswer: 1, reference: '1 Samuel 10:24' },
  { id: '1sa-002', bookId: '1-samuel', difficulty: 'easy', type: 'multiple-choice', question: 'Who killed Goliath?', options: ['Saul', 'Jonathan', 'David', 'Samuel'], correctAnswer: 2, reference: '1 Samuel 17:50' },
  { id: '1sa-003', bookId: '1-samuel', difficulty: 'medium', type: 'multiple-choice', question: 'What weapon did David use to kill Goliath?', options: ['A sword', 'A spear', 'A sling and stone', 'A bow and arrow'], correctAnswer: 2, reference: '1 Samuel 17:49' },
  { id: '1sa-004', bookId: '1-samuel', difficulty: 'medium', type: 'multiple-choice', question: 'Who was Samuel\'s mother?', options: ['Ruth', 'Hannah', 'Naomi', 'Rachel'], correctAnswer: 1, reference: '1 Samuel 1:20' },
  { id: '1sa-005', bookId: '1-samuel', difficulty: 'hard', type: 'multiple-choice', question: 'How tall was Goliath?', options: ['6 cubits and a span', '8 cubits', '10 cubits', '12 cubits'], correctAnswer: 0, reference: '1 Samuel 17:4' },
  { id: '1sa-006', bookId: '1-samuel', difficulty: 'easy', type: 'multiple-choice', question: 'What did Samuel hear God call him as a boy?', options: ['His name', 'A vision', 'Thunder', 'A song'], correctAnswer: 0, reference: '1 Samuel 3:4' },
  { id: '1sa-007', bookId: '1-samuel', difficulty: 'medium', type: 'multiple-choice', question: 'Who was David\'s best friend?', options: ['Saul', 'Jonathan', 'Samuel', 'Abner'], correctAnswer: 1, reference: '1 Samuel 18:1' },
  { id: '1sa-008', bookId: '1-samuel', difficulty: 'hard', type: 'multiple-choice', question: 'How many stones did David take to face Goliath?', options: ['1', '3', '5', '7'], correctAnswer: 2, reference: '1 Samuel 17:40' },
  { id: '1sa-009', bookId: '1-samuel', difficulty: 'medium', type: 'multiple-choice', question: 'What instrument did David play to soothe Saul?', options: ['Flute', 'Harp', 'Trumpet', 'Drums'], correctAnswer: 1, reference: '1 Samuel 16:23' },
  { id: '1sa-010', bookId: '1-samuel', difficulty: 'hard', type: 'multiple-choice', question: 'Where was Samuel serving when God first spoke to him?', options: ['Jerusalem', 'Shiloh', 'Bethel', 'Hebron'], correctAnswer: 1, reference: '1 Samuel 3:3' },
];

export const samuel2Questions: QuizQuestion[] = [
  { id: '2sa-001', bookId: '2-samuel', difficulty: 'easy', type: 'multiple-choice', question: 'Who became king after Saul?', options: ['Solomon', 'David', 'Jonathan', 'Absalom'], correctAnswer: 1, reference: '2 Samuel 2:4' },
  { id: '2sa-002', bookId: '2-samuel', difficulty: 'medium', type: 'multiple-choice', question: 'What city did David make his capital?', options: ['Bethlehem', 'Hebron', 'Jerusalem', 'Jericho'], correctAnswer: 2, reference: '2 Samuel 5:6-9' },
  { id: '2sa-003', bookId: '2-samuel', difficulty: 'medium', type: 'multiple-choice', question: 'Which prophet confronted David about Bathsheba?', options: ['Elijah', 'Nathan', 'Samuel', 'Isaiah'], correctAnswer: 1, reference: '2 Samuel 12:1' },
  { id: '2sa-004', bookId: '2-samuel', difficulty: 'hard', type: 'multiple-choice', question: 'Who was David\'s son that rebelled against him?', options: ['Solomon', 'Amnon', 'Absalom', 'Adonijah'], correctAnswer: 2, reference: '2 Samuel 15:10' },
  { id: '2sa-005', bookId: '2-samuel', difficulty: 'hard', type: 'multiple-choice', question: 'Who was David\'s best friend?', options: ['Nathan', 'Jonathan', 'Joab', 'Abner'], correctAnswer: 1, reference: '2 Samuel 1:26' },
  { id: '2sa-006', bookId: '2-samuel', difficulty: 'easy', type: 'multiple-choice', question: 'Who was Bathsheba\'s first husband?', options: ['Nathan', 'Joab', 'Uriah', 'Abner'], correctAnswer: 2, reference: '2 Samuel 11:3' },
  { id: '2sa-007', bookId: '2-samuel', difficulty: 'medium', type: 'multiple-choice', question: 'What did David bring to Jerusalem?', options: ['The Ark of the Covenant', 'The Tabernacle', 'The Bronze Serpent', 'The Temple'], correctAnswer: 0, reference: '2 Samuel 6:12' },
  { id: '2sa-008', bookId: '2-samuel', difficulty: 'hard', type: 'multiple-choice', question: 'How did Absalom die?', options: ['In battle', 'His hair caught in a tree', 'By poison', 'Old age'], correctAnswer: 1, reference: '2 Samuel 18:9-15' },
  { id: '2sa-009', bookId: '2-samuel', difficulty: 'medium', type: 'multiple-choice', question: 'Who danced before the Lord as the Ark entered Jerusalem?', options: ['Solomon', 'David', 'Nathan', 'The priests'], correctAnswer: 1, reference: '2 Samuel 6:14' },
  { id: '2sa-010', bookId: '2-samuel', difficulty: 'hard', type: 'multiple-choice', question: 'What son did David and Bathsheba lose?', options: ['Solomon', 'Amnon', 'Their firstborn child', 'Absalom'], correctAnswer: 2, reference: '2 Samuel 12:18' },
];

export const kings1Questions: QuizQuestion[] = [
  { id: '1ki-001', bookId: '1-kings', difficulty: 'easy', type: 'multiple-choice', question: 'Who was the wisest king of Israel?', options: ['David', 'Solomon', 'Saul', 'Rehoboam'], correctAnswer: 1, reference: '1 Kings 4:29-30' },
  { id: '1ki-002', bookId: '1-kings', difficulty: 'easy', type: 'multiple-choice', question: 'What did Solomon build for the Lord?', options: ['An ark', 'A temple', 'An altar', 'A palace'], correctAnswer: 1, reference: '1 Kings 6:1' },
  { id: '1ki-003', bookId: '1-kings', difficulty: 'medium', type: 'multiple-choice', question: 'Which prophet challenged the prophets of Baal on Mount Carmel?', options: ['Elisha', 'Isaiah', 'Elijah', 'Jeremiah'], correctAnswer: 2, reference: '1 Kings 18:19' },
  { id: '1ki-004', bookId: '1-kings', difficulty: 'hard', type: 'multiple-choice', question: 'How many years did it take Solomon to build the temple?', options: ['3 years', '7 years', '12 years', '20 years'], correctAnswer: 1, reference: '1 Kings 6:38' },
  { id: '1ki-005', bookId: '1-kings', difficulty: 'hard', type: 'multiple-choice', question: 'How many prophets of Baal did Elijah challenge?', options: ['100', '250', '450', '850'], correctAnswer: 2, reference: '1 Kings 18:19' },
  { id: '1ki-006', bookId: '1-kings', difficulty: 'medium', type: 'multiple-choice', question: 'What did Solomon ask God for?', options: ['Wealth', 'Long life', 'Wisdom', 'Victory'], correctAnswer: 2, reference: '1 Kings 3:9' },
  { id: '1ki-007', bookId: '1-kings', difficulty: 'easy', type: 'multiple-choice', question: 'Who was the evil queen who promoted Baal worship?', options: ['Bathsheba', 'Jezebel', 'Athaliah', 'Vashti'], correctAnswer: 1, reference: '1 Kings 16:31' },
  { id: '1ki-008', bookId: '1-kings', difficulty: 'hard', type: 'multiple-choice', question: 'What fed Elijah by the brook Cherith?', options: ['Angels', 'Ravens', 'A widow', 'Fish'], correctAnswer: 1, reference: '1 Kings 17:6' },
  { id: '1ki-009', bookId: '1-kings', difficulty: 'medium', type: 'multiple-choice', question: 'Into how many kingdoms was Israel divided after Solomon?', options: ['1', '2', '3', '12'], correctAnswer: 1, reference: '1 Kings 12:19-20' },
  { id: '1ki-010', bookId: '1-kings', difficulty: 'hard', type: 'multiple-choice', question: 'How did God speak to Elijah at Mount Horeb?', options: ['Through fire', 'Through earthquake', 'Through a still small voice', 'Through thunder'], correctAnswer: 2, reference: '1 Kings 19:12' },
];

export const kings2Questions: QuizQuestion[] = [
  { id: '2ki-001', bookId: '2-kings', difficulty: 'easy', type: 'multiple-choice', question: 'How did Elijah go to heaven?', options: ['He died', 'In a whirlwind with chariots of fire', 'He was translated', 'Angels carried him'], correctAnswer: 1, reference: '2 Kings 2:11' },
  { id: '2ki-002', bookId: '2-kings', difficulty: 'medium', type: 'multiple-choice', question: 'Who succeeded Elijah as prophet?', options: ['Isaiah', 'Jeremiah', 'Elisha', 'Nathan'], correctAnswer: 2, reference: '2 Kings 2:13-15' },
  { id: '2ki-003', bookId: '2-kings', difficulty: 'medium', type: 'multiple-choice', question: 'Who was healed of leprosy by washing in the Jordan?', options: ['Gehazi', 'Naaman', 'Ben-Hadad', 'Hazael'], correctAnswer: 1, reference: '2 Kings 5:14' },
  { id: '2ki-004', bookId: '2-kings', difficulty: 'hard', type: 'multiple-choice', question: 'How many times did Naaman have to dip in the Jordan?', options: ['3', '5', '7', '12'], correctAnswer: 2, reference: '2 Kings 5:10' },
  { id: '2ki-005', bookId: '2-kings', difficulty: 'hard', type: 'multiple-choice', question: 'Which empire conquered the Northern Kingdom?', options: ['Babylon', 'Assyria', 'Persia', 'Egypt'], correctAnswer: 1, reference: '2 Kings 17:6' },
  { id: '2ki-006', bookId: '2-kings', difficulty: 'easy', type: 'multiple-choice', question: 'What did Elisha ask for when Elijah was taken?', options: ['His cloak', 'Double portion of his spirit', 'His staff', 'His wisdom'], correctAnswer: 1, reference: '2 Kings 2:9' },
  { id: '2ki-007', bookId: '2-kings', difficulty: 'medium', type: 'multiple-choice', question: 'What miracle did Elisha perform with the widow\'s oil?', options: ['Turned it to wine', 'Made it multiply', 'Healed the sick', 'Fed thousands'], correctAnswer: 1, reference: '2 Kings 4:1-7' },
  { id: '2ki-008', bookId: '2-kings', difficulty: 'hard', type: 'multiple-choice', question: 'Which king found the Book of the Law in the temple?', options: ['Hezekiah', 'Josiah', 'Manasseh', 'Amon'], correctAnswer: 1, reference: '2 Kings 22:8' },
  { id: '2ki-009', bookId: '2-kings', difficulty: 'medium', type: 'multiple-choice', question: 'Who destroyed Jerusalem and the temple?', options: ['Assyria', 'Babylon', 'Egypt', 'Persia'], correctAnswer: 1, reference: '2 Kings 25:8-9' },
  { id: '2ki-010', bookId: '2-kings', difficulty: 'hard', type: 'multiple-choice', question: 'Which good king saw God add 15 years to his life?', options: ['Josiah', 'Hezekiah', 'Asa', 'Jehoshaphat'], correctAnswer: 1, reference: '2 Kings 20:6' },
];

export const chronicles1Questions: QuizQuestion[] = [
  { id: '1ch-001', bookId: '1-chronicles', difficulty: 'easy', type: 'multiple-choice', question: 'Who brought the Ark of the Covenant to Jerusalem?', options: ['Solomon', 'David', 'Saul', 'Samuel'], correctAnswer: 1, reference: '1 Chronicles 15:3' },
  { id: '1ch-002', bookId: '1-chronicles', difficulty: 'medium', type: 'multiple-choice', question: 'Why was David not allowed to build the temple?', options: ['He was too old', 'He was a man of war', 'He sinned', 'God chose Solomon'], correctAnswer: 1, reference: '1 Chronicles 28:3' },
  { id: '1ch-003', bookId: '1-chronicles', difficulty: 'hard', type: 'multiple-choice', question: 'Who died when he touched the Ark?', options: ['Uzza', 'Obed-edom', 'Asaph', 'Benaiah'], correctAnswer: 0, reference: '1 Chronicles 13:10' },
  { id: '1ch-004', bookId: '1-chronicles', difficulty: 'medium', type: 'multiple-choice', question: 'What did David prepare for Solomon to build?', options: ['A palace', 'The temple', 'The walls', 'An altar'], correctAnswer: 1, reference: '1 Chronicles 22:5' },
  { id: '1ch-005', bookId: '1-chronicles', difficulty: 'easy', type: 'multiple-choice', question: 'What does 1 Chronicles begin with?', options: ['Stories', 'Laws', 'Genealogies', 'Prophecies'], correctAnswer: 2, reference: '1 Chronicles 1:1' },
  { id: '1ch-006', bookId: '1-chronicles', difficulty: 'hard', type: 'multiple-choice', question: 'Who was the chief musician David appointed?', options: ['Asaph', 'Heman', 'Ethan', 'All of these'], correctAnswer: 3, reference: '1 Chronicles 15:17' },
  { id: '1ch-007', bookId: '1-chronicles', difficulty: 'medium', type: 'multiple-choice', question: 'What tribe did the Levites come from?', options: ['Judah', 'Benjamin', 'Levi', 'Joseph'], correctAnswer: 2, reference: '1 Chronicles 6:1' },
  { id: '1ch-008', bookId: '1-chronicles', difficulty: 'hard', type: 'multiple-choice', question: 'How many men did David\'s census count?', options: ['570,000', '800,000', '1,100,000', '1,300,000'], correctAnswer: 2, reference: '1 Chronicles 21:5' },
];

export const chronicles2Questions: QuizQuestion[] = [
  { id: '2ch-001', bookId: '2-chronicles', difficulty: 'easy', type: 'verse-completion', question: 'If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their...', options: ['nation', 'hearts', 'land', 'people'], correctAnswer: 2, reference: '2 Chronicles 7:14' },
  { id: '2ch-002', bookId: '2-chronicles', difficulty: 'medium', type: 'multiple-choice', question: 'Which queen visited Solomon?', options: ['Queen of Egypt', 'Queen of Sheba', 'Queen of Tyre', 'Queen of Moab'], correctAnswer: 1, reference: '2 Chronicles 9:1' },
  { id: '2ch-003', bookId: '2-chronicles', difficulty: 'hard', type: 'multiple-choice', question: 'Which empire destroyed the temple?', options: ['Assyria', 'Egypt', 'Babylon', 'Persia'], correctAnswer: 2, reference: '2 Chronicles 36:19' },
  { id: '2ch-004', bookId: '2-chronicles', difficulty: 'medium', type: 'multiple-choice', question: 'What came down from heaven to consume the sacrifice at the temple dedication?', options: ['Angels', 'Fire', 'Light', 'Rain'], correctAnswer: 1, reference: '2 Chronicles 7:1' },
  { id: '2ch-005', bookId: '2-chronicles', difficulty: 'easy', type: 'multiple-choice', question: 'Who was the first king mentioned in 2 Chronicles?', options: ['David', 'Solomon', 'Rehoboam', 'Saul'], correctAnswer: 1, reference: '2 Chronicles 1:1' },
  { id: '2ch-006', bookId: '2-chronicles', difficulty: 'hard', type: 'multiple-choice', question: 'Which king of Judah was called the reformer who destroyed idols?', options: ['Hezekiah', 'Josiah', 'Asa', 'All of these'], correctAnswer: 3, reference: '2 Chronicles' },
  { id: '2ch-007', bookId: '2-chronicles', difficulty: 'medium', type: 'multiple-choice', question: 'How long did Solomon reign?', options: ['20 years', '30 years', '40 years', '50 years'], correctAnswer: 2, reference: '2 Chronicles 9:30' },
  { id: '2ch-008', bookId: '2-chronicles', difficulty: 'hard', type: 'multiple-choice', question: 'What filled the temple so priests could not minister?', options: ['Fire', 'The glory of the Lord', 'Smoke', 'Angels'], correctAnswer: 1, reference: '2 Chronicles 5:14' },
];

export const ezraQuestions: QuizQuestion[] = [
  { id: 'ezr-001', bookId: 'ezra', difficulty: 'easy', type: 'multiple-choice', question: 'Who allowed the Jews to return to Jerusalem?', options: ['Nebuchadnezzar', 'Darius', 'Cyrus', 'Artaxerxes'], correctAnswer: 2, reference: 'Ezra 1:1-2' },
  { id: 'ezr-002', bookId: 'ezra', difficulty: 'medium', type: 'multiple-choice', question: 'What did the returning Jews rebuild first?', options: ['The walls', 'The temple', 'Their homes', 'The palace'], correctAnswer: 1, reference: 'Ezra 3:8' },
  { id: 'ezr-003', bookId: 'ezra', difficulty: 'hard', type: 'multiple-choice', question: 'What was Ezra\'s profession?', options: ['Prophet', 'Priest and scribe', 'Governor', 'King'], correctAnswer: 1, reference: 'Ezra 7:6' },
  { id: 'ezr-004', bookId: 'ezra', difficulty: 'medium', type: 'multiple-choice', question: 'How did the older Jews react when the temple foundation was laid?', options: ['They celebrated', 'They wept', 'They sang', 'All of these'], correctAnswer: 3, reference: 'Ezra 3:12-13' },
  { id: 'ezr-005', bookId: 'ezra', difficulty: 'easy', type: 'multiple-choice', question: 'From which empire did the Jews return?', options: ['Egypt', 'Babylon/Persia', 'Assyria', 'Greece'], correctAnswer: 1, reference: 'Ezra 1:1' },
  { id: 'ezr-006', bookId: 'ezra', difficulty: 'hard', type: 'multiple-choice', question: 'Who opposed the rebuilding of the temple?', options: ['Egyptians', 'Samaritans', 'Babylonians', 'Greeks'], correctAnswer: 1, reference: 'Ezra 4:1-5' },
  { id: 'ezr-007', bookId: 'ezra', difficulty: 'medium', type: 'multiple-choice', question: 'What sin did Ezra address among the people?', options: ['Idolatry', 'Intermarriage with pagans', 'Sabbath breaking', 'Theft'], correctAnswer: 1, reference: 'Ezra 9:1-2' },
  { id: 'ezr-008', bookId: 'ezra', difficulty: 'hard', type: 'multiple-choice', question: 'Who was the governor when the temple was completed?', options: ['Nehemiah', 'Zerubbabel', 'Ezra', 'Joshua'], correctAnswer: 1, reference: 'Ezra 5:2' },
];

export const nehemiahQuestions: QuizQuestion[] = [
  { id: 'neh-001', bookId: 'nehemiah', difficulty: 'easy', type: 'multiple-choice', question: 'What did Nehemiah rebuild?', options: ['The temple', 'The walls of Jerusalem', 'The palace', 'The altar'], correctAnswer: 1, reference: 'Nehemiah 2:17' },
  { id: 'neh-002', bookId: 'nehemiah', difficulty: 'medium', type: 'multiple-choice', question: 'What was Nehemiah\'s job in Persia?', options: ['Scribe', 'Cupbearer to the king', 'Governor', 'Soldier'], correctAnswer: 1, reference: 'Nehemiah 1:11' },
  { id: 'neh-003', bookId: 'nehemiah', difficulty: 'hard', type: 'multiple-choice', question: 'How many days did it take to rebuild the walls?', options: ['40 days', '52 days', '70 days', '120 days'], correctAnswer: 1, reference: 'Nehemiah 6:15' },
  { id: 'neh-004', bookId: 'nehemiah', difficulty: 'medium', type: 'multiple-choice', question: 'Who opposed Nehemiah\'s building work?', options: ['Sanballat and Tobiah', 'Ezra', 'The priests', 'The Persians'], correctAnswer: 0, reference: 'Nehemiah 2:10' },
  { id: 'neh-005', bookId: 'nehemiah', difficulty: 'easy', type: 'multiple-choice', question: 'What made Nehemiah sad initially?', options: ['His job', 'News about Jerusalem', 'A dream', 'His health'], correctAnswer: 1, reference: 'Nehemiah 1:3-4' },
  { id: 'neh-006', bookId: 'nehemiah', difficulty: 'hard', type: 'multiple-choice', question: 'What did the workers carry while building?', options: ['Food and water', 'Weapons', 'Extra stones', 'Torches'], correctAnswer: 1, reference: 'Nehemiah 4:17' },
  { id: 'neh-007', bookId: 'nehemiah', difficulty: 'medium', type: 'multiple-choice', question: 'Which king allowed Nehemiah to go to Jerusalem?', options: ['Cyrus', 'Darius', 'Artaxerxes', 'Xerxes'], correctAnswer: 2, reference: 'Nehemiah 2:1' },
  { id: 'neh-008', bookId: 'nehemiah', difficulty: 'hard', type: 'multiple-choice', question: 'What did Ezra read to the people?', options: ['Psalms', 'The Law of Moses', 'Prophecies', 'History'], correctAnswer: 1, reference: 'Nehemiah 8:1' },
];

export const estherQuestions: QuizQuestion[] = [
  { id: 'est-001', bookId: 'esther', difficulty: 'easy', type: 'multiple-choice', question: 'Who was the Jewish queen of Persia?', options: ['Ruth', 'Esther', 'Naomi', 'Deborah'], correctAnswer: 1, reference: 'Esther 2:17' },
  { id: 'est-002', bookId: 'esther', difficulty: 'medium', type: 'multiple-choice', question: 'Who wanted to destroy all the Jews?', options: ['Xerxes', 'Haman', 'Mordecai', 'Vashti'], correctAnswer: 1, reference: 'Esther 3:6' },
  { id: 'est-003', bookId: 'esther', difficulty: 'medium', type: 'multiple-choice', question: 'Who was Esther\'s cousin who raised her?', options: ['Haman', 'Mordecai', 'Hegai', 'Memucan'], correctAnswer: 1, reference: 'Esther 2:7' },
  { id: 'est-004', bookId: 'esther', difficulty: 'hard', type: 'verse-completion', question: 'Who knoweth whether thou art come to the kingdom for such a...', options: ['purpose', 'time as this', 'calling', 'moment'], correctAnswer: 1, reference: 'Esther 4:14' },
  { id: 'est-005', bookId: 'esther', difficulty: 'easy', type: 'multiple-choice', question: 'What feast was established because of Esther?', options: ['Passover', 'Purim', 'Hanukkah', 'Pentecost'], correctAnswer: 1, reference: 'Esther 9:26' },
  { id: 'est-006', bookId: 'esther', difficulty: 'hard', type: 'multiple-choice', question: 'What was Esther\'s Hebrew name?', options: ['Hadassah', 'Miriam', 'Sarah', 'Rachel'], correctAnswer: 0, reference: 'Esther 2:7' },
  { id: 'est-007', bookId: 'esther', difficulty: 'medium', type: 'multiple-choice', question: 'What happened to Haman?', options: ['He was exiled', 'He was hanged', 'He escaped', 'He repented'], correctAnswer: 1, reference: 'Esther 7:10' },
  { id: 'est-008', bookId: 'esther', difficulty: 'hard', type: 'multiple-choice', question: 'What was Haman\'s father\'s name?', options: ['Hammedatha', 'Zeresh', 'Memucan', 'Bigthana'], correctAnswer: 0, reference: 'Esther 3:1' },
  { id: 'est-009', bookId: 'esther', difficulty: 'medium', type: 'multiple-choice', question: 'Who was the queen before Esther?', options: ['Ruth', 'Vashti', 'Naomi', 'Deborah'], correctAnswer: 1, reference: 'Esther 1:9' },
  { id: 'est-010', bookId: 'esther', difficulty: 'hard', type: 'multiple-choice', question: 'What word is NOT mentioned in the book of Esther?', options: ['King', 'Queen', 'God', 'Feast'], correctAnswer: 2, reference: 'Esther' },
];

export const jobQuestions: QuizQuestion[] = [
  { id: 'job-001', bookId: 'job', difficulty: 'easy', type: 'multiple-choice', question: 'What happened to Job?', options: ['He became king', 'He lost everything', 'He became a prophet', 'He conquered nations'], correctAnswer: 1, reference: 'Job 1:13-19' },
  { id: 'job-002', bookId: 'job', difficulty: 'medium', type: 'multiple-choice', question: 'How many friends came to comfort Job?', options: ['Two', 'Three', 'Four', 'Seven'], correctAnswer: 1, reference: 'Job 2:11' },
  { id: 'job-003', bookId: 'job', difficulty: 'medium', type: 'multiple-choice', question: 'Who challenged God about Job?', options: ['An angel', 'Satan', 'A demon', 'A prophet'], correctAnswer: 1, reference: 'Job 1:9-11' },
  { id: 'job-004', bookId: 'job', difficulty: 'hard', type: 'multiple-choice', question: 'What did God do for Job at the end?', options: ['Made him king', 'Restored double what he lost', 'Took him to heaven', 'Made him a prophet'], correctAnswer: 1, reference: 'Job 42:10' },
  { id: 'job-005', bookId: 'job', difficulty: 'easy', type: 'multiple-choice', question: 'What was Job described as?', options: ['A king', 'Blameless and upright', 'A prophet', 'A priest'], correctAnswer: 1, reference: 'Job 1:1' },
  { id: 'job-006', bookId: 'job', difficulty: 'medium', type: 'multiple-choice', question: 'What did Job\'s wife tell him to do?', options: ['Pray more', 'Curse God and die', 'Seek medicine', 'Find new friends'], correctAnswer: 1, reference: 'Job 2:9' },
  { id: 'job-007', bookId: 'job', difficulty: 'hard', type: 'multiple-choice', question: 'What animals does God describe at length to Job?', options: ['Lions and bears', 'Behemoth and Leviathan', 'Eagles and serpents', 'Horses and bulls'], correctAnswer: 1, reference: 'Job 40-41' },
  { id: 'job-008', bookId: 'job', difficulty: 'medium', type: 'multiple-choice', question: 'Who was the youngest friend who spoke last?', options: ['Eliphaz', 'Bildad', 'Zophar', 'Elihu'], correctAnswer: 3, reference: 'Job 32:4-6' },
  { id: 'job-009', bookId: 'job', difficulty: 'hard', type: 'multiple-choice', question: 'How many children did Job have after his restoration?', options: ['7 sons and 3 daughters', '10 sons and 10 daughters', '3 sons and 7 daughters', '5 sons and 5 daughters'], correctAnswer: 0, reference: 'Job 42:13' },
  { id: 'job-010', bookId: 'job', difficulty: 'easy', type: 'multiple-choice', question: 'Where did Job live?', options: ['Canaan', 'Uz', 'Egypt', 'Babylon'], correctAnswer: 1, reference: 'Job 1:1' },
];

export const proverbsQuestions: QuizQuestion[] = [
  { id: 'pro-001', bookId: 'proverbs', difficulty: 'easy', type: 'verse-completion', question: 'The fear of the Lord is the beginning of...', options: ['love', 'wisdom', 'faith', 'hope'], correctAnswer: 1, reference: 'Proverbs 9:10' },
  { id: 'pro-002', bookId: 'proverbs', difficulty: 'easy', type: 'multiple-choice', question: 'Who wrote most of Proverbs?', options: ['David', 'Solomon', 'Moses', 'Samuel'], correctAnswer: 1, reference: 'Proverbs 1:1' },
  { id: 'pro-003', bookId: 'proverbs', difficulty: 'medium', type: 'verse-completion', question: 'Train up a child in the way he should go: and when he is old, he will not...', options: ['forget it', 'depart from it', 'lose it', 'regret it'], correctAnswer: 1, reference: 'Proverbs 22:6' },
  { id: 'pro-004', bookId: 'proverbs', difficulty: 'medium', type: 'verse-completion', question: 'Trust in the Lord with all thine heart; and lean not unto thine own...', options: ['wisdom', 'strength', 'understanding', 'knowledge'], correctAnswer: 2, reference: 'Proverbs 3:5' },
  { id: 'pro-005', bookId: 'proverbs', difficulty: 'hard', type: 'verse-completion', question: 'A soft answer turneth away...', options: ['anger', 'wrath', 'evil', 'strife'], correctAnswer: 1, reference: 'Proverbs 15:1' },
  { id: 'pro-006', bookId: 'proverbs', difficulty: 'medium', type: 'verse-completion', question: 'In all thy ways acknowledge him, and he shall direct thy...', options: ['steps', 'paths', 'life', 'heart'], correctAnswer: 1, reference: 'Proverbs 3:6' },
  { id: 'pro-007', bookId: 'proverbs', difficulty: 'easy', type: 'verse-completion', question: 'Pride goeth before destruction, and an haughty spirit before a...', options: ['tragedy', 'fall', 'sin', 'curse'], correctAnswer: 1, reference: 'Proverbs 16:18' },
  { id: 'pro-008', bookId: 'proverbs', difficulty: 'hard', type: 'verse-completion', question: 'Iron sharpeneth...', options: ['steel', 'iron', 'blades', 'weapons'], correctAnswer: 1, reference: 'Proverbs 27:17' },
  { id: 'pro-009', bookId: 'proverbs', difficulty: 'medium', type: 'verse-completion', question: 'A friend loveth at all times, and a brother is born for...', options: ['family', 'love', 'adversity', 'joy'], correctAnswer: 2, reference: 'Proverbs 17:17' },
  { id: 'pro-010', bookId: 'proverbs', difficulty: 'hard', type: 'multiple-choice', question: 'How many chapters are in Proverbs?', options: ['25', '28', '31', '36'], correctAnswer: 2, reference: 'Proverbs' },
];

export const ecclesiastesQuestions: QuizQuestion[] = [
  { id: 'ecc-001', bookId: 'ecclesiastes', difficulty: 'easy', type: 'verse-completion', question: 'Vanity of vanities, saith the Preacher, vanity of vanities; all is...', options: ['nothing', 'vanity', 'meaningless', 'empty'], correctAnswer: 1, reference: 'Ecclesiastes 1:2' },
  { id: 'ecc-002', bookId: 'ecclesiastes', difficulty: 'medium', type: 'verse-completion', question: 'To every thing there is a season, and a time to every purpose under the...', options: ['sun', 'heaven', 'sky', 'earth'], correctAnswer: 1, reference: 'Ecclesiastes 3:1' },
  { id: 'ecc-003', bookId: 'ecclesiastes', difficulty: 'hard', type: 'multiple-choice', question: 'Who is traditionally believed to be the author of Ecclesiastes?', options: ['David', 'Solomon', 'Moses', 'Isaiah'], correctAnswer: 1, reference: 'Ecclesiastes 1:1' },
  { id: 'ecc-004', bookId: 'ecclesiastes', difficulty: 'easy', type: 'verse-completion', question: 'Remember now thy Creator in the days of thy...', options: ['life', 'youth', 'strength', 'wisdom'], correctAnswer: 1, reference: 'Ecclesiastes 12:1' },
  { id: 'ecc-005', bookId: 'ecclesiastes', difficulty: 'medium', type: 'verse-completion', question: 'A threefold cord is not quickly...', options: ['untied', 'broken', 'cut', 'worn'], correctAnswer: 1, reference: 'Ecclesiastes 4:12' },
  { id: 'ecc-006', bookId: 'ecclesiastes', difficulty: 'hard', type: 'verse-completion', question: 'Cast thy bread upon the waters: for thou shalt find it after many...', options: ['years', 'days', 'seasons', 'trials'], correctAnswer: 1, reference: 'Ecclesiastes 11:1' },
  { id: 'ecc-007', bookId: 'ecclesiastes', difficulty: 'medium', type: 'multiple-choice', question: 'What does the Preacher call himself?', options: ['Son of David', 'King of Jerusalem', 'Both of these', 'Neither'], correctAnswer: 2, reference: 'Ecclesiastes 1:1' },
  { id: 'ecc-008', bookId: 'ecclesiastes', difficulty: 'hard', type: 'verse-completion', question: 'The end of the matter; all hath been heard: Fear God and keep his commandments: for this is the whole duty of...', options: ['Israel', 'man', 'believers', 'the wise'], correctAnswer: 1, reference: 'Ecclesiastes 12:13' },
];

export const songOfSolomonQuestions: QuizQuestion[] = [
  { id: 'sos-001', bookId: 'song-of-solomon', difficulty: 'easy', type: 'multiple-choice', question: 'What is the Song of Solomon also called?', options: ['Song of David', 'Song of Songs', 'Love Song', 'Wedding Song'], correctAnswer: 1, reference: 'Song of Solomon 1:1' },
  { id: 'sos-002', bookId: 'song-of-solomon', difficulty: 'medium', type: 'multiple-choice', question: 'What is the main theme of Song of Solomon?', options: ['Wisdom', 'War', 'Love', 'Law'], correctAnswer: 2, reference: 'Song of Solomon' },
  { id: 'sos-003', bookId: 'song-of-solomon', difficulty: 'hard', type: 'verse-completion', question: 'Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as...', options: ['fire', 'death', 'mountains', 'the sea'], correctAnswer: 1, reference: 'Song of Solomon 8:6' },
  { id: 'sos-004', bookId: 'song-of-solomon', difficulty: 'easy', type: 'verse-completion', question: 'I am the rose of Sharon, and the lily of the...', options: ['fields', 'valleys', 'mountains', 'gardens'], correctAnswer: 1, reference: 'Song of Solomon 2:1' },
  { id: 'sos-005', bookId: 'song-of-solomon', difficulty: 'medium', type: 'verse-completion', question: 'Many waters cannot quench...', options: ['fire', 'thirst', 'love', 'desire'], correctAnswer: 2, reference: 'Song of Solomon 8:7' },
  { id: 'sos-006', bookId: 'song-of-solomon', difficulty: 'hard', type: 'multiple-choice', question: 'How many chapters are in Song of Solomon?', options: ['5', '8', '10', '12'], correctAnswer: 1, reference: 'Song of Solomon' },
  { id: 'sos-007', bookId: 'song-of-solomon', difficulty: 'medium', type: 'verse-completion', question: 'Behold, thou art fair, my love; behold, thou art fair; thou hast...', options: ['roses for cheeks', 'doves\' eyes', 'golden hair', 'gentle voice'], correctAnswer: 1, reference: 'Song of Solomon 1:15' },
  { id: 'sos-008', bookId: 'song-of-solomon', difficulty: 'hard', type: 'multiple-choice', question: 'Who is traditionally considered the author?', options: ['David', 'Solomon', 'Anonymous', 'Multiple authors'], correctAnswer: 1, reference: 'Song of Solomon 1:1' },
];

export const isaiahQuestions: QuizQuestion[] = [
  { id: 'isa-001', bookId: 'isaiah', difficulty: 'easy', type: 'verse-completion', question: 'For unto us a child is born, unto us a... is given', options: ['king', 'son', 'savior', 'prince'], correctAnswer: 1, reference: 'Isaiah 9:6' },
  { id: 'isa-002', bookId: 'isaiah', difficulty: 'easy', type: 'multiple-choice', question: 'Who was Isaiah?', options: ['A king', 'A prophet', 'A priest', 'A judge'], correctAnswer: 1, reference: 'Isaiah 1:1' },
  { id: 'isa-003', bookId: 'isaiah', difficulty: 'medium', type: 'verse-completion', question: 'But they that wait upon the Lord shall renew their strength; they shall mount up with wings as...', options: ['doves', 'angels', 'eagles', 'hawks'], correctAnswer: 2, reference: 'Isaiah 40:31' },
  { id: 'isa-004', bookId: 'isaiah', difficulty: 'hard', type: 'verse-completion', question: 'He was wounded for our transgressions, he was bruised for our...', options: ['sins', 'iniquities', 'wrongs', 'trespasses'], correctAnswer: 1, reference: 'Isaiah 53:5' },
  { id: 'isa-005', bookId: 'isaiah', difficulty: 'medium', type: 'verse-completion', question: 'Come now, and let us reason together, saith the Lord: though your sins be as scarlet, they shall be as white as...', options: ['clouds', 'snow', 'wool', 'linen'], correctAnswer: 1, reference: 'Isaiah 1:18' },
  { id: 'isa-006', bookId: 'isaiah', difficulty: 'easy', type: 'verse-completion', question: 'Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name...', options: ['Jesus', 'Immanuel', 'Messiah', 'Savior'], correctAnswer: 1, reference: 'Isaiah 7:14' },
  { id: 'isa-007', bookId: 'isaiah', difficulty: 'hard', type: 'multiple-choice', question: 'How many chapters are in Isaiah?', options: ['40', '52', '66', '72'], correctAnswer: 2, reference: 'Isaiah' },
  { id: 'isa-008', bookId: 'isaiah', difficulty: 'medium', type: 'verse-completion', question: 'And his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of...', options: ['Glory', 'Peace', 'Light', 'Life'], correctAnswer: 1, reference: 'Isaiah 9:6' },
  { id: 'isa-009', bookId: 'isaiah', difficulty: 'hard', type: 'multiple-choice', question: 'In Isaiah\'s vision, how many wings did the seraphim have?', options: ['2', '4', '6', '8'], correctAnswer: 2, reference: 'Isaiah 6:2' },
  { id: 'isa-010', bookId: 'isaiah', difficulty: 'medium', type: 'verse-completion', question: 'Here am I; send...', options: ['someone', 'me', 'thy servant', 'an angel'], correctAnswer: 1, reference: 'Isaiah 6:8' },
];

export const jeremiahQuestions: QuizQuestion[] = [
  { id: 'jer-001', bookId: 'jeremiah', difficulty: 'easy', type: 'multiple-choice', question: 'What is Jeremiah often called?', options: ['The major prophet', 'The weeping prophet', 'The young prophet', 'The last prophet'], correctAnswer: 1, reference: 'Jeremiah 9:1' },
  { id: 'jer-002', bookId: 'jeremiah', difficulty: 'medium', type: 'verse-completion', question: 'For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected...', options: ['future', 'end', 'hope', 'blessing'], correctAnswer: 1, reference: 'Jeremiah 29:11' },
  { id: 'jer-003', bookId: 'jeremiah', difficulty: 'hard', type: 'multiple-choice', question: 'Where was Jeremiah thrown for prophesying?', options: ['Prison', 'A pit/cistern', 'The desert', 'Egypt'], correctAnswer: 1, reference: 'Jeremiah 38:6' },
  { id: 'jer-004', bookId: 'jeremiah', difficulty: 'easy', type: 'multiple-choice', question: 'What did God call Jeremiah before he was born?', options: ['A king', 'A prophet to the nations', 'A priest', 'A warrior'], correctAnswer: 1, reference: 'Jeremiah 1:5' },
  { id: 'jer-005', bookId: 'jeremiah', difficulty: 'medium', type: 'multiple-choice', question: 'What did God tell Jeremiah he was too young for?', options: ['To prophesy', 'To lead', 'To marry', 'To fight'], correctAnswer: 0, reference: 'Jeremiah 1:6-7' },
  { id: 'jer-006', bookId: 'jeremiah', difficulty: 'hard', type: 'verse-completion', question: 'The heart is deceitful above all things, and desperately wicked: who can...', options: ['understand it', 'know it', 'change it', 'heal it'], correctAnswer: 1, reference: 'Jeremiah 17:9' },
  { id: 'jer-007', bookId: 'jeremiah', difficulty: 'medium', type: 'multiple-choice', question: 'What new covenant did God promise through Jeremiah?', options: ['Written on tablets', 'Written on hearts', 'Written in books', 'Written in heaven'], correctAnswer: 1, reference: 'Jeremiah 31:33' },
  { id: 'jer-008', bookId: 'jeremiah', difficulty: 'hard', type: 'multiple-choice', question: 'Who rescued Jeremiah from the cistern?', options: ['Baruch', 'Ebed-Melech', 'Zedekiah', 'Nebuchadnezzar'], correctAnswer: 1, reference: 'Jeremiah 38:10-13' },
  { id: 'jer-009', bookId: 'jeremiah', difficulty: 'easy', type: 'multiple-choice', question: 'Which kingdom did Jeremiah prophesy would conquer Judah?', options: ['Assyria', 'Babylon', 'Egypt', 'Persia'], correctAnswer: 1, reference: 'Jeremiah 25:9' },
  { id: 'jer-010', bookId: 'jeremiah', difficulty: 'hard', type: 'multiple-choice', question: 'Who was Jeremiah\'s scribe?', options: ['Gehazi', 'Baruch', 'Ezra', 'Nehemiah'], correctAnswer: 1, reference: 'Jeremiah 36:4' },
];

export const lamentationsQuestions: QuizQuestion[] = [
  { id: 'lam-001', bookId: 'lamentations', difficulty: 'easy', type: 'multiple-choice', question: 'What event does Lamentations mourn?', options: ['The Exodus', 'The destruction of Jerusalem', 'The death of David', 'The flood'], correctAnswer: 1, reference: 'Lamentations 1:1' },
  { id: 'lam-002', bookId: 'lamentations', difficulty: 'medium', type: 'verse-completion', question: 'Great is thy faithfulness...', options: ['O Lord', 'forever', 'to all generations', 'in the morning'], correctAnswer: 0, reference: 'Lamentations 3:23' },
  { id: 'lam-003', bookId: 'lamentations', difficulty: 'hard', type: 'multiple-choice', question: 'Who is traditionally believed to have written Lamentations?', options: ['Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel'], correctAnswer: 1, reference: 'Tradition' },
  { id: 'lam-004', bookId: 'lamentations', difficulty: 'medium', type: 'verse-completion', question: 'The Lord\'s mercies... are new every morning', options: ['never end', 'are great', 'fail not', 'endure'], correctAnswer: 2, reference: 'Lamentations 3:22-23' },
  { id: 'lam-005', bookId: 'lamentations', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Lamentations?', options: ['3', '4', '5', '7'], correctAnswer: 2, reference: 'Lamentations' },
  { id: 'lam-006', bookId: 'lamentations', difficulty: 'hard', type: 'multiple-choice', question: 'What literary form is used in most of Lamentations?', options: ['Parable', 'Acrostic poetry', 'Narrative', 'Prophecy'], correctAnswer: 1, reference: 'Lamentations structure' },
  { id: 'lam-007', bookId: 'lamentations', difficulty: 'medium', type: 'verse-completion', question: 'It is good that a man should both hope and quietly wait for the salvation of the...', options: ['Lord', 'God', 'Almighty', 'Most High'], correctAnswer: 0, reference: 'Lamentations 3:26' },
  { id: 'lam-008', bookId: 'lamentations', difficulty: 'hard', type: 'multiple-choice', question: 'Which empire destroyed Jerusalem as mourned in Lamentations?', options: ['Assyria', 'Babylon', 'Egypt', 'Persia'], correctAnswer: 1, reference: 'Lamentations context' },
];

export const ezekielQuestions: QuizQuestion[] = [
  { id: 'eze-001', bookId: 'ezekiel', difficulty: 'easy', type: 'multiple-choice', question: 'What famous vision did Ezekiel have about dry bones?', options: ['They crumbled', 'They came to life', 'They burned', 'They were buried'], correctAnswer: 1, reference: 'Ezekiel 37:10' },
  { id: 'eze-002', bookId: 'ezekiel', difficulty: 'medium', type: 'multiple-choice', question: 'Where was Ezekiel when he received his visions?', options: ['Jerusalem', 'Babylon', 'Egypt', 'Assyria'], correctAnswer: 1, reference: 'Ezekiel 1:1' },
  { id: 'eze-003', bookId: 'ezekiel', difficulty: 'hard', type: 'multiple-choice', question: 'How many faces did each living creature have in Ezekiel\'s vision?', options: ['Two', 'Three', 'Four', 'Six'], correctAnswer: 2, reference: 'Ezekiel 1:6' },
  { id: 'eze-004', bookId: 'ezekiel', difficulty: 'easy', type: 'multiple-choice', question: 'What was Ezekiel\'s profession before becoming a prophet?', options: ['Shepherd', 'Priest', 'Farmer', 'Scribe'], correctAnswer: 1, reference: 'Ezekiel 1:3' },
  { id: 'eze-005', bookId: 'ezekiel', difficulty: 'medium', type: 'multiple-choice', question: 'What did Ezekiel eat in his vision?', options: ['Bread', 'A scroll', 'Honey', 'Meat'], correctAnswer: 1, reference: 'Ezekiel 3:1-3' },
  { id: 'eze-006', bookId: 'ezekiel', difficulty: 'hard', type: 'multiple-choice', question: 'What river was Ezekiel by when he had his first vision?', options: ['Jordan', 'Euphrates', 'Chebar', 'Tigris'], correctAnswer: 2, reference: 'Ezekiel 1:1' },
  { id: 'eze-007', bookId: 'ezekiel', difficulty: 'medium', type: 'multiple-choice', question: 'What does the valley of dry bones represent?', options: ['Death', 'Judgment', 'Israel\'s restoration', 'War'], correctAnswer: 2, reference: 'Ezekiel 37:11' },
  { id: 'eze-008', bookId: 'ezekiel', difficulty: 'hard', type: 'multiple-choice', question: 'Who are Gog and Magog in Ezekiel?', options: ['Angels', 'Prophets', 'Future enemies of Israel', 'Kings of Judah'], correctAnswer: 2, reference: 'Ezekiel 38-39' },
  { id: 'eze-009', bookId: 'ezekiel', difficulty: 'medium', type: 'verse-completion', question: 'I will give you a new heart and put a new... within you', options: ['mind', 'spirit', 'soul', 'life'], correctAnswer: 1, reference: 'Ezekiel 36:26' },
  { id: 'eze-010', bookId: 'ezekiel', difficulty: 'hard', type: 'multiple-choice', question: 'What did Ezekiel see leaving the temple?', options: ['Angels', 'The glory of the Lord', 'Priests', 'Fire'], correctAnswer: 1, reference: 'Ezekiel 10:18' },
];

export const danielQuestions: QuizQuestion[] = [
  { id: 'dan-001', bookId: 'daniel', difficulty: 'easy', type: 'multiple-choice', question: 'Where was Daniel thrown for praying?', options: ['Prison', 'The fiery furnace', 'The lion\'s den', 'The pit'], correctAnswer: 2, reference: 'Daniel 6:16' },
  { id: 'dan-002', bookId: 'daniel', difficulty: 'easy', type: 'multiple-choice', question: 'Who were Daniel\'s three friends?', options: ['Peter, James, and John', 'Shadrach, Meshach, and Abednego', 'Abraham, Isaac, and Jacob', 'Moses, Aaron, and Miriam'], correctAnswer: 1, reference: 'Daniel 1:7' },
  { id: 'dan-003', bookId: 'daniel', difficulty: 'medium', type: 'multiple-choice', question: 'What did Nebuchadnezzar\'s dream statue have feet made of?', options: ['Gold', 'Silver', 'Iron and clay', 'Bronze'], correctAnswer: 2, reference: 'Daniel 2:33' },
  { id: 'dan-004', bookId: 'daniel', difficulty: 'hard', type: 'multiple-choice', question: 'What words appeared on the wall at Belshazzar\'s feast?', options: ['You are weighed', 'MENE, MENE, TEKEL, UPHARSIN', 'God is coming', 'Repent now'], correctAnswer: 1, reference: 'Daniel 5:25' },
  { id: 'dan-005', bookId: 'daniel', difficulty: 'medium', type: 'multiple-choice', question: 'Where were Daniel\'s friends thrown for not bowing to the idol?', options: ['Prison', 'The lion\'s den', 'The fiery furnace', 'The river'], correctAnswer: 2, reference: 'Daniel 3:20' },
  { id: 'dan-006', bookId: 'daniel', difficulty: 'easy', type: 'multiple-choice', question: 'What did Daniel refuse to eat?', options: ['Bread', 'The king\'s food', 'Meat', 'Fruit'], correctAnswer: 1, reference: 'Daniel 1:8' },
  { id: 'dan-007', bookId: 'daniel', difficulty: 'hard', type: 'multiple-choice', question: 'How many men were seen in the fiery furnace?', options: ['3', '4', '7', '12'], correctAnswer: 1, reference: 'Daniel 3:25' },
  { id: 'dan-008', bookId: 'daniel', difficulty: 'medium', type: 'multiple-choice', question: 'What happened to the lions when Daniel was in the den?', options: ['They escaped', 'They slept', 'God shut their mouths', 'They became friendly'], correctAnswer: 2, reference: 'Daniel 6:22' },
  { id: 'dan-009', bookId: 'daniel', difficulty: 'hard', type: 'multiple-choice', question: 'How many times a day did Daniel pray?', options: ['Once', 'Twice', 'Three times', 'Seven times'], correctAnswer: 2, reference: 'Daniel 6:10' },
  { id: 'dan-010', bookId: 'daniel', difficulty: 'medium', type: 'multiple-choice', question: 'What was the head of Nebuchadnezzar\'s statue made of?', options: ['Silver', 'Bronze', 'Gold', 'Iron'], correctAnswer: 2, reference: 'Daniel 2:32' },
];

export const hoseaQuestions: QuizQuestion[] = [
  { id: 'hos-001', bookId: 'hosea', difficulty: 'easy', type: 'multiple-choice', question: 'Who did God tell Hosea to marry?', options: ['A widow', 'A prophetess', 'An unfaithful woman', 'A virgin'], correctAnswer: 2, reference: 'Hosea 1:2' },
  { id: 'hos-002', bookId: 'hosea', difficulty: 'medium', type: 'multiple-choice', question: 'What was Hosea\'s wife\'s name?', options: ['Rachel', 'Gomer', 'Ruth', 'Hannah'], correctAnswer: 1, reference: 'Hosea 1:3' },
  { id: 'hos-003', bookId: 'hosea', difficulty: 'hard', type: 'multiple-choice', question: 'What does Hosea\'s marriage symbolize?', options: ['God\'s power', 'Israel\'s unfaithfulness', 'Coming judgment', 'Future blessings'], correctAnswer: 1, reference: 'Hosea 1-3' },
  { id: 'hos-004', bookId: 'hosea', difficulty: 'medium', type: 'verse-completion', question: 'For I desired mercy, and not sacrifice; and the knowledge of God more than...', options: ['wealth', 'burnt offerings', 'power', 'wisdom'], correctAnswer: 1, reference: 'Hosea 6:6' },
  { id: 'hos-005', bookId: 'hosea', difficulty: 'easy', type: 'multiple-choice', question: 'Which kingdom did Hosea prophesy to?', options: ['Judah', 'Israel (Northern)', 'Babylon', 'Assyria'], correctAnswer: 1, reference: 'Hosea 1:1' },
  { id: 'hos-006', bookId: 'hosea', difficulty: 'hard', type: 'multiple-choice', question: 'What were Hosea\'s children\'s names symbolic of?', options: ['Blessings', 'Judgment and restoration', 'Victory', 'Prosperity'], correctAnswer: 1, reference: 'Hosea 1:4-9' },
  { id: 'hos-007', bookId: 'hosea', difficulty: 'medium', type: 'verse-completion', question: 'Come, and let us return unto the Lord: for he hath torn, and he will...', options: ['judge us', 'heal us', 'restore us', 'save us'], correctAnswer: 1, reference: 'Hosea 6:1' },
  { id: 'hos-008', bookId: 'hosea', difficulty: 'hard', type: 'multiple-choice', question: 'What did God say Israel was sowing and reaping?', options: ['Wind and whirlwind', 'Seeds and fruit', 'Peace and joy', 'War and destruction'], correctAnswer: 0, reference: 'Hosea 8:7' },
];

export const joelQuestions: QuizQuestion[] = [
  { id: 'joe-001', bookId: 'joel', difficulty: 'easy', type: 'multiple-choice', question: 'What plague does Joel describe?', options: ['Frogs', 'Locusts', 'Boils', 'Hail'], correctAnswer: 1, reference: 'Joel 1:4' },
  { id: 'joe-002', bookId: 'joel', difficulty: 'medium', type: 'verse-completion', question: 'And it shall come to pass afterward, that I will pour out my spirit upon all...', options: ['nations', 'flesh', 'Israel', 'believers'], correctAnswer: 1, reference: 'Joel 2:28' },
  { id: 'joe-003', bookId: 'joel', difficulty: 'hard', type: 'multiple-choice', question: 'What did Peter quote from Joel on Pentecost?', options: ['The locust prophecy', 'The Spirit being poured out', 'The day of judgment', 'The call to repent'], correctAnswer: 1, reference: 'Acts 2:16-21' },
  { id: 'joe-004', bookId: 'joel', difficulty: 'medium', type: 'verse-completion', question: 'Rend your heart, and not your...', options: ['clothes', 'garments', 'hair', 'flesh'], correctAnswer: 1, reference: 'Joel 2:13' },
  { id: 'joe-005', bookId: 'joel', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Joel?', options: ['2', '3', '4', '5'], correctAnswer: 1, reference: 'Joel' },
  { id: 'joe-006', bookId: 'joel', difficulty: 'hard', type: 'multiple-choice', question: 'What valley does Joel mention for judgment?', options: ['Valley of Hinnom', 'Valley of Decision', 'Valley of Salt', 'Valley of Elah'], correctAnswer: 1, reference: 'Joel 3:14' },
  { id: 'joe-007', bookId: 'joel', difficulty: 'medium', type: 'verse-completion', question: 'Your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see...', options: ['angels', 'visions', 'glory', 'truth'], correctAnswer: 1, reference: 'Joel 2:28' },
  { id: 'joe-008', bookId: 'joel', difficulty: 'hard', type: 'multiple-choice', question: 'What will God restore according to Joel?', options: ['The temple', 'The years the locusts have eaten', 'The kingdom', 'The law'], correctAnswer: 1, reference: 'Joel 2:25' },
];

export const amosQuestions: QuizQuestion[] = [
  { id: 'amo-001', bookId: 'amos', difficulty: 'easy', type: 'multiple-choice', question: 'What was Amos\'s occupation before he was a prophet?', options: ['Fisherman', 'Shepherd', 'Carpenter', 'Tax collector'], correctAnswer: 1, reference: 'Amos 1:1' },
  { id: 'amo-002', bookId: 'amos', difficulty: 'medium', type: 'verse-completion', question: 'But let judgment run down as waters, and righteousness as a mighty...', options: ['river', 'stream', 'flood', 'ocean'], correctAnswer: 1, reference: 'Amos 5:24' },
  { id: 'amo-003', bookId: 'amos', difficulty: 'hard', type: 'multiple-choice', question: 'What other job did Amos have besides shepherding?', options: ['Fishing', 'Tending sycamore figs', 'Making tents', 'Farming wheat'], correctAnswer: 1, reference: 'Amos 7:14' },
  { id: 'amo-004', bookId: 'amos', difficulty: 'medium', type: 'multiple-choice', question: 'Which kingdom did Amos primarily prophesy against?', options: ['Judah', 'Israel (Northern)', 'Egypt', 'Assyria'], correctAnswer: 1, reference: 'Amos 7:15' },
  { id: 'amo-005', bookId: 'amos', difficulty: 'easy', type: 'multiple-choice', question: 'Where was Amos from?', options: ['Jerusalem', 'Tekoa', 'Bethel', 'Samaria'], correctAnswer: 1, reference: 'Amos 1:1' },
  { id: 'amo-006', bookId: 'amos', difficulty: 'hard', type: 'verse-completion', question: 'Surely the Lord God will do nothing, but he revealeth his secret unto his servants the...', options: ['priests', 'prophets', 'kings', 'elders'], correctAnswer: 1, reference: 'Amos 3:7' },
  { id: 'amo-007', bookId: 'amos', difficulty: 'medium', type: 'multiple-choice', question: 'What social injustice did Amos condemn?', options: ['Oppression of the poor', 'Idolatry', 'Both of these', 'Neither'], correctAnswer: 2, reference: 'Amos 2:6-8' },
  { id: 'amo-008', bookId: 'amos', difficulty: 'hard', type: 'multiple-choice', question: 'What did Amos see in one of his visions?', options: ['A plumb line', 'A ladder', 'A chariot', 'A throne'], correctAnswer: 0, reference: 'Amos 7:7-8' },
];

export const obadiahQuestions: QuizQuestion[] = [
  { id: 'oba-001', bookId: 'obadiah', difficulty: 'easy', type: 'multiple-choice', question: 'Obadiah is the... book in the Old Testament', options: ['longest', 'shortest', 'middle', 'last'], correctAnswer: 1, reference: 'Obadiah' },
  { id: 'oba-002', bookId: 'obadiah', difficulty: 'medium', type: 'multiple-choice', question: 'Which nation does Obadiah prophecy against?', options: ['Assyria', 'Babylon', 'Edom', 'Egypt'], correctAnswer: 2, reference: 'Obadiah 1:1' },
  { id: 'oba-003', bookId: 'obadiah', difficulty: 'hard', type: 'multiple-choice', question: 'Who was the ancestor of Edom?', options: ['Jacob', 'Esau', 'Ishmael', 'Lot'], correctAnswer: 1, reference: 'Genesis 36:1' },
  { id: 'oba-004', bookId: 'obadiah', difficulty: 'medium', type: 'multiple-choice', question: 'Why was Edom condemned?', options: ['For attacking Judah', 'For idolatry', 'For pride', 'For all of these'], correctAnswer: 3, reference: 'Obadiah 1:10-14' },
  { id: 'oba-005', bookId: 'obadiah', difficulty: 'easy', type: 'multiple-choice', question: 'How many verses are in Obadiah?', options: ['12', '21', '31', '40'], correctAnswer: 1, reference: 'Obadiah' },
  { id: 'oba-006', bookId: 'obadiah', difficulty: 'hard', type: 'verse-completion', question: 'The pride of thine heart hath deceived thee, thou that dwellest in the clefts of the...', options: ['mountains', 'rock', 'valley', 'earth'], correctAnswer: 1, reference: 'Obadiah 1:3' },
  { id: 'oba-007', bookId: 'obadiah', difficulty: 'medium', type: 'multiple-choice', question: 'What relationship did Edom have with Israel?', options: ['Allies', 'Brothers (descended from Esau)', 'Strangers', 'Servants'], correctAnswer: 1, reference: 'Obadiah 1:10' },
  { id: 'oba-008', bookId: 'obadiah', difficulty: 'hard', type: 'multiple-choice', question: 'What is promised at the end of Obadiah?', options: ['Judgment only', 'The kingdom shall be the Lord\'s', 'Destruction of all', 'Peace for Edom'], correctAnswer: 1, reference: 'Obadiah 1:21' },
];

export const jonahQuestions: QuizQuestion[] = [
  { id: 'jon-001', bookId: 'jonah', difficulty: 'easy', type: 'multiple-choice', question: 'What swallowed Jonah?', options: ['A whale', 'A great fish', 'A sea monster', 'A shark'], correctAnswer: 1, reference: 'Jonah 1:17' },
  { id: 'jon-002', bookId: 'jonah', difficulty: 'easy', type: 'multiple-choice', question: 'To which city was Jonah sent?', options: ['Babylon', 'Jerusalem', 'Nineveh', 'Tarshish'], correctAnswer: 2, reference: 'Jonah 1:2' },
  { id: 'jon-003', bookId: 'jonah', difficulty: 'medium', type: 'multiple-choice', question: 'How many days was Jonah in the fish?', options: ['1 day', '2 days', '3 days', '7 days'], correctAnswer: 2, reference: 'Jonah 1:17' },
  { id: 'jon-004', bookId: 'jonah', difficulty: 'hard', type: 'multiple-choice', question: 'What happened to Nineveh after Jonah preached?', options: ['It was destroyed', 'The people repented', 'Jonah was imprisoned', 'Nothing changed'], correctAnswer: 1, reference: 'Jonah 3:10' },
  { id: 'jon-005', bookId: 'jonah', difficulty: 'medium', type: 'multiple-choice', question: 'Where was Jonah trying to flee to?', options: ['Egypt', 'Tarshish', 'Babylon', 'Assyria'], correctAnswer: 1, reference: 'Jonah 1:3' },
  { id: 'jon-006', bookId: 'jonah', difficulty: 'hard', type: 'multiple-choice', question: 'What plant grew to shade Jonah?', options: ['A palm tree', 'A gourd/vine', 'An olive tree', 'A fig tree'], correctAnswer: 1, reference: 'Jonah 4:6' },
  { id: 'jon-007', bookId: 'jonah', difficulty: 'easy', type: 'multiple-choice', question: 'What was Jonah doing during the storm?', options: ['Praying', 'Sleeping', 'Helping sailors', 'Crying'], correctAnswer: 1, reference: 'Jonah 1:5' },
  { id: 'jon-008', bookId: 'jonah', difficulty: 'medium', type: 'multiple-choice', question: 'How did the sailors determine Jonah caused the storm?', options: ['A dream', 'Casting lots', 'Jonah confessed', 'An angel told them'], correctAnswer: 1, reference: 'Jonah 1:7' },
  { id: 'jon-009', bookId: 'jonah', difficulty: 'hard', type: 'multiple-choice', question: 'What destroyed the plant that shaded Jonah?', options: ['Fire', 'A worm', 'Wind', 'Locusts'], correctAnswer: 1, reference: 'Jonah 4:7' },
  { id: 'jon-010', bookId: 'jonah', difficulty: 'medium', type: 'multiple-choice', question: 'How did the king of Nineveh respond to Jonah\'s message?', options: ['He ignored it', 'He arrested Jonah', 'He repented in sackcloth', 'He fled'], correctAnswer: 2, reference: 'Jonah 3:6' },
];

export const micahQuestions: QuizQuestion[] = [
  { id: 'mic-001', bookId: 'micah', difficulty: 'easy', type: 'verse-completion', question: 'He hath shewed thee, O man, what is good; and what doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy...', options: ['Lord', 'God', 'neighbor', 'brothers'], correctAnswer: 1, reference: 'Micah 6:8' },
  { id: 'mic-002', bookId: 'micah', difficulty: 'medium', type: 'multiple-choice', question: 'Which city did Micah prophesy would be the birthplace of the Messiah?', options: ['Jerusalem', 'Nazareth', 'Bethlehem', 'Hebron'], correctAnswer: 2, reference: 'Micah 5:2' },
  { id: 'mic-003', bookId: 'micah', difficulty: 'hard', type: 'multiple-choice', question: 'What does Micah\'s name mean?', options: ['God is great', 'Who is like the Lord?', 'God saves', 'The Lord remembers'], correctAnswer: 1, reference: 'Micah 1:1' },
  { id: 'mic-004', bookId: 'micah', difficulty: 'easy', type: 'multiple-choice', question: 'Where was Micah from?', options: ['Jerusalem', 'Moresheth', 'Bethlehem', 'Samaria'], correctAnswer: 1, reference: 'Micah 1:1' },
  { id: 'mic-005', bookId: 'micah', difficulty: 'medium', type: 'verse-completion', question: 'And they shall beat their swords into plowshares, and their spears into...', options: ['shields', 'pruning hooks', 'tools', 'nothing'], correctAnswer: 1, reference: 'Micah 4:3' },
  { id: 'mic-006', bookId: 'micah', difficulty: 'hard', type: 'multiple-choice', question: 'Which kingdoms did Micah prophesy against?', options: ['Israel only', 'Judah only', 'Both Israel and Judah', 'Egypt and Assyria'], correctAnswer: 2, reference: 'Micah 1:1' },
  { id: 'mic-007', bookId: 'micah', difficulty: 'medium', type: 'verse-completion', question: 'Who is a God like unto thee, that pardoneth iniquity, and passeth by the transgression of the remnant of his...', options: ['people', 'heritage', 'children', 'servants'], correctAnswer: 1, reference: 'Micah 7:18' },
  { id: 'mic-008', bookId: 'micah', difficulty: 'hard', type: 'multiple-choice', question: 'How many chapters are in Micah?', options: ['5', '6', '7', '9'], correctAnswer: 2, reference: 'Micah' },
];

export const nahumQuestions: QuizQuestion[] = [
  { id: 'nah-001', bookId: 'nahum', difficulty: 'medium', type: 'multiple-choice', question: 'Which city\'s destruction does Nahum prophesy?', options: ['Babylon', 'Nineveh', 'Jerusalem', 'Samaria'], correctAnswer: 1, reference: 'Nahum 1:1' },
  { id: 'nah-002', bookId: 'nahum', difficulty: 'hard', type: 'verse-completion', question: 'The Lord is good, a strong hold in the day of...', options: ['battle', 'trouble', 'war', 'sorrow'], correctAnswer: 1, reference: 'Nahum 1:7' },
  { id: 'nah-003', bookId: 'nahum', difficulty: 'medium', type: 'multiple-choice', question: 'Which empire ruled Nineveh?', options: ['Babylon', 'Persia', 'Assyria', 'Egypt'], correctAnswer: 2, reference: 'Nahum 1:1' },
  { id: 'nah-004', bookId: 'nahum', difficulty: 'easy', type: 'multiple-choice', question: 'What is Nahum\'s prophecy primarily about?', options: ['Restoration', 'Judgment', 'Creation', 'Salvation'], correctAnswer: 1, reference: 'Nahum' },
  { id: 'nah-005', bookId: 'nahum', difficulty: 'hard', type: 'multiple-choice', question: 'What does Nahum\'s name mean?', options: ['God\'s anger', 'Comfort', 'Judgment', 'Destruction'], correctAnswer: 1, reference: 'Nahum 1:1' },
  { id: 'nah-006', bookId: 'nahum', difficulty: 'medium', type: 'verse-completion', question: 'The Lord is slow to anger, and great in power, and will not at all acquit the...', options: ['proud', 'wicked', 'sinful', 'rebellious'], correctAnswer: 1, reference: 'Nahum 1:3' },
  { id: 'nah-007', bookId: 'nahum', difficulty: 'hard', type: 'multiple-choice', question: 'How many chapters are in Nahum?', options: ['2', '3', '4', '5'], correctAnswer: 1, reference: 'Nahum' },
  { id: 'nah-008', bookId: 'nahum', difficulty: 'medium', type: 'multiple-choice', question: 'What had Nineveh been known for?', options: ['Wisdom', 'Cruelty and violence', 'Righteousness', 'Trade'], correctAnswer: 1, reference: 'Nahum 3:1' },
];

export const habakkukQuestions: QuizQuestion[] = [
  { id: 'hab-001', bookId: 'habakkuk', difficulty: 'medium', type: 'verse-completion', question: 'The just shall live by...', options: ['works', 'faith', 'grace', 'love'], correctAnswer: 1, reference: 'Habakkuk 2:4' },
  { id: 'hab-002', bookId: 'habakkuk', difficulty: 'hard', type: 'multiple-choice', question: 'What nation did God say He would use to punish Judah?', options: ['Assyria', 'Babylon (Chaldeans)', 'Egypt', 'Persia'], correctAnswer: 1, reference: 'Habakkuk 1:6' },
  { id: 'hab-003', bookId: 'habakkuk', difficulty: 'medium', type: 'multiple-choice', question: 'What does Habakkuk question God about?', options: ['Creation', 'Why the wicked prosper', 'The law', 'Worship'], correctAnswer: 1, reference: 'Habakkuk 1:3-4' },
  { id: 'hab-004', bookId: 'habakkuk', difficulty: 'easy', type: 'multiple-choice', question: 'What type of literature is Habakkuk?', options: ['History', 'Prophecy', 'Poetry', 'Law'], correctAnswer: 1, reference: 'Habakkuk' },
  { id: 'hab-005', bookId: 'habakkuk', difficulty: 'hard', type: 'verse-completion', question: 'For the earth shall be filled with the knowledge of the glory of the Lord, as the waters cover the...', options: ['earth', 'sea', 'land', 'depths'], correctAnswer: 1, reference: 'Habakkuk 2:14' },
  { id: 'hab-006', bookId: 'habakkuk', difficulty: 'medium', type: 'verse-completion', question: 'Yet I will rejoice in the Lord, I will joy in the God of my...', options: ['heart', 'salvation', 'strength', 'life'], correctAnswer: 1, reference: 'Habakkuk 3:18' },
  { id: 'hab-007', bookId: 'habakkuk', difficulty: 'hard', type: 'multiple-choice', question: 'Where does Habakkuk say he will stand to watch?', options: ['On the mountain', 'On the watchtower', 'At the temple', 'By the river'], correctAnswer: 1, reference: 'Habakkuk 2:1' },
  { id: 'hab-008', bookId: 'habakkuk', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Habakkuk?', options: ['2', '3', '4', '5'], correctAnswer: 1, reference: 'Habakkuk' },
];

export const zephaniahQuestions: QuizQuestion[] = [
  { id: 'zep-001', bookId: 'zephaniah', difficulty: 'medium', type: 'multiple-choice', question: 'What is the main theme of Zephaniah?', options: ['Love', 'The Day of the Lord', 'Wisdom', 'Creation'], correctAnswer: 1, reference: 'Zephaniah 1:14' },
  { id: 'zep-002', bookId: 'zephaniah', difficulty: 'hard', type: 'verse-completion', question: 'The Lord thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with...', options: ['gladness', 'singing', 'praise', 'dancing'], correctAnswer: 1, reference: 'Zephaniah 3:17' },
  { id: 'zep-003', bookId: 'zephaniah', difficulty: 'medium', type: 'multiple-choice', question: 'Which king reigned when Zephaniah prophesied?', options: ['Hezekiah', 'Manasseh', 'Josiah', 'Zedekiah'], correctAnswer: 2, reference: 'Zephaniah 1:1' },
  { id: 'zep-004', bookId: 'zephaniah', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Zephaniah?', options: ['2', '3', '4', '5'], correctAnswer: 1, reference: 'Zephaniah' },
  { id: 'zep-005', bookId: 'zephaniah', difficulty: 'hard', type: 'multiple-choice', question: 'What ancestor of Zephaniah was a king?', options: ['David', 'Solomon', 'Hezekiah', 'Josiah'], correctAnswer: 2, reference: 'Zephaniah 1:1' },
  { id: 'zep-006', bookId: 'zephaniah', difficulty: 'medium', type: 'verse-completion', question: 'Seek ye the Lord, all ye meek of the earth, which have wrought his judgment; seek righteousness, seek...', options: ['peace', 'meekness', 'truth', 'love'], correctAnswer: 1, reference: 'Zephaniah 2:3' },
  { id: 'zep-007', bookId: 'zephaniah', difficulty: 'hard', type: 'multiple-choice', question: 'What nations does Zephaniah prophesy against?', options: ['Only Judah', 'Judah and surrounding nations', 'Only Assyria', 'Only Egypt'], correctAnswer: 1, reference: 'Zephaniah 2' },
  { id: 'zep-008', bookId: 'zephaniah', difficulty: 'medium', type: 'multiple-choice', question: 'What hope does Zephaniah offer at the end?', options: ['Immediate deliverance', 'Restoration of a remnant', 'Military victory', 'Wealth'], correctAnswer: 1, reference: 'Zephaniah 3:12-13' },
];

export const haggaiQuestions: QuizQuestion[] = [
  { id: 'hag-001', bookId: 'haggai', difficulty: 'easy', type: 'multiple-choice', question: 'What did Haggai encourage the people to rebuild?', options: ['The walls', 'The temple', 'The palace', 'The city'], correctAnswer: 1, reference: 'Haggai 1:8' },
  { id: 'hag-002', bookId: 'haggai', difficulty: 'medium', type: 'multiple-choice', question: 'Who was the governor when Haggai prophesied?', options: ['Nehemiah', 'Ezra', 'Zerubbabel', 'Joshua'], correctAnswer: 2, reference: 'Haggai 1:1' },
  { id: 'hag-003', bookId: 'haggai', difficulty: 'hard', type: 'multiple-choice', question: 'What were the people doing instead of building the temple?', options: ['Fighting wars', 'Working on their own houses', 'Worshipping idols', 'Trading'], correctAnswer: 1, reference: 'Haggai 1:4' },
  { id: 'hag-004', bookId: 'haggai', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Haggai?', options: ['1', '2', '3', '4'], correctAnswer: 1, reference: 'Haggai' },
  { id: 'hag-005', bookId: 'haggai', difficulty: 'medium', type: 'multiple-choice', question: 'What promise did God make about the new temple?', options: ['It would be smaller', 'Its glory would exceed the former', 'It would last forever', 'It would have no gold'], correctAnswer: 1, reference: 'Haggai 2:9' },
  { id: 'hag-006', bookId: 'haggai', difficulty: 'hard', type: 'multiple-choice', question: 'Who was the high priest alongside Zerubbabel?', options: ['Ezra', 'Joshua', 'Nehemiah', 'Haggai'], correctAnswer: 1, reference: 'Haggai 1:1' },
  { id: 'hag-007', bookId: 'haggai', difficulty: 'medium', type: 'verse-completion', question: 'Is it time for you, O ye, to dwell in your cieled houses, and this house lie...', options: ['empty', 'waste', 'forgotten', 'destroyed'], correctAnswer: 1, reference: 'Haggai 1:4' },
  { id: 'hag-008', bookId: 'haggai', difficulty: 'hard', type: 'multiple-choice', question: 'What did God say He would do when they obeyed?', options: ['Send rain', 'Bless them', 'Give them peace', 'All of these'], correctAnswer: 3, reference: 'Haggai 2:19' },
];

export const zechariahQuestions: QuizQuestion[] = [
  { id: 'zec-001', bookId: 'zechariah', difficulty: 'medium', type: 'verse-completion', question: 'Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an...', options: ['horse', 'ass', 'donkey', 'mule'], correctAnswer: 1, reference: 'Zechariah 9:9' },
  { id: 'zec-002', bookId: 'zechariah', difficulty: 'hard', type: 'multiple-choice', question: 'How many horsemen did Zechariah see in his vision?', options: ['Two', 'Three', 'Four', 'Seven'], correctAnswer: 2, reference: 'Zechariah 6:1-5' },
  { id: 'zec-003', bookId: 'zechariah', difficulty: 'easy', type: 'multiple-choice', question: 'When did Zechariah prophesy?', options: ['Before the exile', 'During the exile', 'After the exile', 'During Solomon\'s reign'], correctAnswer: 2, reference: 'Zechariah 1:1' },
  { id: 'zec-004', bookId: 'zechariah', difficulty: 'medium', type: 'verse-completion', question: 'Not by might, nor by power, but by my...', options: ['word', 'spirit', 'hand', 'grace'], correctAnswer: 1, reference: 'Zechariah 4:6' },
  { id: 'zec-005', bookId: 'zechariah', difficulty: 'hard', type: 'multiple-choice', question: 'What was the price for which the shepherd was valued?', options: ['20 pieces of silver', '30 pieces of silver', '40 pieces of silver', '50 pieces of silver'], correctAnswer: 1, reference: 'Zechariah 11:12' },
  { id: 'zec-006', bookId: 'zechariah', difficulty: 'medium', type: 'multiple-choice', question: 'What does Zechariah encourage the returned exiles to do?', options: ['Build walls', 'Rebuild the temple', 'Go to war', 'Fast more'], correctAnswer: 1, reference: 'Zechariah 1:16' },
  { id: 'zec-007', bookId: 'zechariah', difficulty: 'hard', type: 'verse-completion', question: 'And I will pour upon the house of David, and upon the inhabitants of Jerusalem, the spirit of grace and of...', options: ['truth', 'supplications', 'power', 'wisdom'], correctAnswer: 1, reference: 'Zechariah 12:10' },
  { id: 'zec-008', bookId: 'zechariah', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Zechariah?', options: ['8', '10', '12', '14'], correctAnswer: 3, reference: 'Zechariah' },
];

export const malachiQuestions: QuizQuestion[] = [
  { id: 'mal-001', bookId: 'malachi', difficulty: 'easy', type: 'multiple-choice', question: 'Malachi is the... book of the Old Testament', options: ['first', 'middle', 'last', 'longest'], correctAnswer: 2, reference: 'Malachi' },
  { id: 'mal-002', bookId: 'malachi', difficulty: 'medium', type: 'verse-completion', question: 'Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a...', options: ['blessing', 'reward', 'gift', 'treasure'], correctAnswer: 0, reference: 'Malachi 3:10' },
  { id: 'mal-003', bookId: 'malachi', difficulty: 'hard', type: 'multiple-choice', question: 'Which prophet does Malachi say will return before the Day of the Lord?', options: ['Moses', 'Isaiah', 'Elijah', 'Samuel'], correctAnswer: 2, reference: 'Malachi 4:5' },
  { id: 'mal-004', bookId: 'malachi', difficulty: 'medium', type: 'multiple-choice', question: 'What did God accuse the people of robbing from Him?', options: ['Sacrifices', 'Tithes and offerings', 'Time', 'Worship'], correctAnswer: 1, reference: 'Malachi 3:8' },
  { id: 'mal-005', bookId: 'malachi', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Malachi?', options: ['2', '3', '4', '5'], correctAnswer: 2, reference: 'Malachi' },
  { id: 'mal-006', bookId: 'malachi', difficulty: 'hard', type: 'verse-completion', question: 'For I am the Lord, I change...', options: ['never', 'not', 'for none', 'my mind not'], correctAnswer: 1, reference: 'Malachi 3:6' },
  { id: 'mal-007', bookId: 'malachi', difficulty: 'medium', type: 'multiple-choice', question: 'What was wrong with the sacrifices the people were offering?', options: ['Too expensive', 'Blemished animals', 'Wrong timing', 'Wrong location'], correctAnswer: 1, reference: 'Malachi 1:8' },
  { id: 'mal-008', bookId: 'malachi', difficulty: 'hard', type: 'verse-completion', question: 'But unto you that fear my name shall the Sun of righteousness arise with healing in his...', options: ['hands', 'wings', 'rays', 'light'], correctAnswer: 1, reference: 'Malachi 4:2' },
];

// New Testament Books (remaining)
export const markQuestions: QuizQuestion[] = [
  { id: 'mrk-001', bookId: 'mark', difficulty: 'easy', type: 'multiple-choice', question: 'Mark\'s Gospel is known for being the...', options: ['Longest', 'Shortest', 'Most detailed', 'Last written'], correctAnswer: 1, reference: 'Mark' },
  { id: 'mrk-002', bookId: 'mark', difficulty: 'medium', type: 'multiple-choice', question: 'What key word appears frequently in Mark?', options: ['Love', 'Immediately', 'Believe', 'Truth'], correctAnswer: 1, reference: 'Mark' },
  { id: 'mrk-003', bookId: 'mark', difficulty: 'hard', type: 'multiple-choice', question: 'Who was Mark\'s Gospel likely written for?', options: ['Jews', 'Romans', 'Greeks', 'Egyptians'], correctAnswer: 1, reference: 'Mark tradition' },
  { id: 'mrk-004', bookId: 'mark', difficulty: 'easy', type: 'multiple-choice', question: 'Who baptized Jesus in Mark?', options: ['Peter', 'John the Baptist', 'James', 'Andrew'], correctAnswer: 1, reference: 'Mark 1:9' },
  { id: 'mrk-005', bookId: 'mark', difficulty: 'medium', type: 'multiple-choice', question: 'What does Mark emphasize about Jesus?', options: ['His teaching', 'His actions/miracles', 'His genealogy', 'His birth'], correctAnswer: 1, reference: 'Mark' },
  { id: 'mrk-006', bookId: 'mark', difficulty: 'hard', type: 'multiple-choice', question: 'What title does Mark use for Jesus at the beginning?', options: ['King of Kings', 'Son of God', 'Son of David', 'Lamb of God'], correctAnswer: 1, reference: 'Mark 1:1' },
  { id: 'mrk-007', bookId: 'mark', difficulty: 'medium', type: 'multiple-choice', question: 'Who were the first disciples Jesus called in Mark?', options: ['Matthew and Thomas', 'Peter and Andrew', 'James and John', 'Philip and Nathanael'], correctAnswer: 1, reference: 'Mark 1:16-17' },
  { id: 'mrk-008', bookId: 'mark', difficulty: 'hard', type: 'multiple-choice', question: 'What miracle does Mark uniquely record in detail?', options: ['Healing of deaf mute', 'Walking on water', 'Feeding 5000', 'Raising Lazarus'], correctAnswer: 0, reference: 'Mark 7:31-37' },
  { id: 'mrk-009', bookId: 'mark', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Mark?', options: ['12', '14', '16', '21'], correctAnswer: 2, reference: 'Mark' },
  { id: 'mrk-010', bookId: 'mark', difficulty: 'medium', type: 'verse-completion', question: 'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for...', options: ['all', 'many', 'some', 'Israel'], correctAnswer: 1, reference: 'Mark 10:45' },
];

export const lukeQuestions: QuizQuestion[] = [
  { id: 'luk-001', bookId: 'luke', difficulty: 'easy', type: 'multiple-choice', question: 'What was Luke\'s profession?', options: ['Fisherman', 'Tax collector', 'Physician', 'Carpenter'], correctAnswer: 2, reference: 'Colossians 4:14' },
  { id: 'luk-002', bookId: 'luke', difficulty: 'easy', type: 'multiple-choice', question: 'Which parable is only found in Luke?', options: ['The Sower', 'The Good Samaritan', 'The Mustard Seed', 'The Talents'], correctAnswer: 1, reference: 'Luke 10:25-37' },
  { id: 'luk-003', bookId: 'luke', difficulty: 'medium', type: 'multiple-choice', question: 'Who did Luke write his Gospel to?', options: ['Timothy', 'Theophilus', 'Titus', 'The churches'], correctAnswer: 1, reference: 'Luke 1:3' },
  { id: 'luk-004', bookId: 'luke', difficulty: 'hard', type: 'multiple-choice', question: 'Which parable about a lost coin is unique to Luke?', options: ['The Lost Sheep', 'The Lost Coin', 'The Pearl of Great Price', 'The Hidden Treasure'], correctAnswer: 1, reference: 'Luke 15:8-10' },
  { id: 'luk-005', bookId: 'luke', difficulty: 'medium', type: 'multiple-choice', question: 'Which Christmas story elements are unique to Luke?', options: ['Wise men', 'Shepherds and manger', 'Flight to Egypt', 'Star'], correctAnswer: 1, reference: 'Luke 2:8-16' },
  { id: 'luk-006', bookId: 'luke', difficulty: 'easy', type: 'verse-completion', question: 'For the Son of man is come to seek and to save that which was...', options: ['sinful', 'broken', 'lost', 'dying'], correctAnswer: 2, reference: 'Luke 19:10' },
  { id: 'luk-007', bookId: 'luke', difficulty: 'hard', type: 'multiple-choice', question: 'What parable about prayer is unique to Luke?', options: ['The Persistent Widow', 'The Mustard Seed', 'The Sower', 'The Talents'], correctAnswer: 0, reference: 'Luke 18:1-8' },
  { id: 'luk-008', bookId: 'luke', difficulty: 'medium', type: 'multiple-choice', question: 'Who does Luke emphasize Jesus came to save?', options: ['Only Jews', 'The outcasts and sinners', 'Only men', 'The wealthy'], correctAnswer: 1, reference: 'Luke' },
  { id: 'luk-009', bookId: 'luke', difficulty: 'hard', type: 'multiple-choice', question: 'What story of Jesus at age 12 is only in Luke?', options: ['Baptism', 'Temple visit', 'Temptation', 'First miracle'], correctAnswer: 1, reference: 'Luke 2:41-52' },
  { id: 'luk-010', bookId: 'luke', difficulty: 'medium', type: 'multiple-choice', question: 'What other book did Luke write?', options: ['Romans', 'Hebrews', 'Acts', 'Revelation'], correctAnswer: 2, reference: 'Acts 1:1' },
];

export const actsQuestions: QuizQuestion[] = [
  { id: 'act-001', bookId: 'acts', difficulty: 'easy', type: 'multiple-choice', question: 'What event is described at the beginning of Acts chapter 2?', options: ['The Crucifixion', 'The Ascension', 'Pentecost', 'The Last Supper'], correctAnswer: 2, reference: 'Acts 2:1-4' },
  { id: 'act-002', bookId: 'acts', difficulty: 'easy', type: 'multiple-choice', question: 'Who wrote the book of Acts?', options: ['Paul', 'Peter', 'Luke', 'John'], correctAnswer: 2, reference: 'Acts 1:1' },
  { id: 'act-003', bookId: 'acts', difficulty: 'medium', type: 'multiple-choice', question: 'What was Saul\'s name changed to after his conversion?', options: ['Peter', 'Paul', 'Philip', 'Silas'], correctAnswer: 1, reference: 'Acts 13:9' },
  { id: 'act-004', bookId: 'acts', difficulty: 'medium', type: 'multiple-choice', question: 'Who was the first Christian martyr?', options: ['Peter', 'James', 'Stephen', 'Paul'], correctAnswer: 2, reference: 'Acts 7:59-60' },
  { id: 'act-005', bookId: 'acts', difficulty: 'hard', type: 'multiple-choice', question: 'How many missionary journeys did Paul take?', options: ['Two', 'Three', 'Four', 'Five'], correctAnswer: 1, reference: 'Acts 13-21' },
  { id: 'act-006', bookId: 'acts', difficulty: 'easy', type: 'multiple-choice', question: 'Where was Saul going when he was converted?', options: ['Jerusalem', 'Damascus', 'Rome', 'Athens'], correctAnswer: 1, reference: 'Acts 9:3' },
  { id: 'act-007', bookId: 'acts', difficulty: 'medium', type: 'multiple-choice', question: 'Who said "It is more blessed to give than to receive"?', options: ['Peter', 'Paul quoting Jesus', 'James', 'John'], correctAnswer: 1, reference: 'Acts 20:35' },
  { id: 'act-008', bookId: 'acts', difficulty: 'hard', type: 'multiple-choice', question: 'Who was raised from the dead by Peter?', options: ['Lazarus', 'Eutychus', 'Tabitha/Dorcas', 'Stephen'], correctAnswer: 2, reference: 'Acts 9:40' },
  { id: 'act-009', bookId: 'acts', difficulty: 'medium', type: 'multiple-choice', question: 'Where were believers first called Christians?', options: ['Jerusalem', 'Antioch', 'Rome', 'Corinth'], correctAnswer: 1, reference: 'Acts 11:26' },
  { id: 'act-010', bookId: 'acts', difficulty: 'hard', type: 'multiple-choice', question: 'Who fell asleep and fell out a window during Paul\'s sermon?', options: ['Timothy', 'Eutychus', 'Silas', 'Barnabas'], correctAnswer: 1, reference: 'Acts 20:9' },
];

export const romansQuestions: QuizQuestion[] = [
  { id: 'rom-001', bookId: 'romans', difficulty: 'easy', type: 'verse-completion', question: 'For all have sinned, and come short of the glory of...', options: ['heaven', 'God', 'Christ', 'the Lord'], correctAnswer: 1, reference: 'Romans 3:23' },
  { id: 'rom-002', bookId: 'romans', difficulty: 'medium', type: 'multiple-choice', question: 'According to Romans, what is the wages of sin?', options: ['Suffering', 'Sickness', 'Death', 'Poverty'], correctAnswer: 2, reference: 'Romans 6:23' },
  { id: 'rom-003', bookId: 'romans', difficulty: 'medium', type: 'verse-completion', question: 'And we know that all things work together for good to them that love God, to them who are the called according to his...', options: ['will', 'purpose', 'plan', 'word'], correctAnswer: 1, reference: 'Romans 8:28' },
  { id: 'rom-004', bookId: 'romans', difficulty: 'hard', type: 'verse-completion', question: 'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come... shall be able to separate us from the love of...', options: ['Christ', 'God', 'the Father', 'the Lord'], correctAnswer: 1, reference: 'Romans 8:38-39' },
  { id: 'rom-005', bookId: 'romans', difficulty: 'easy', type: 'verse-completion', question: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our...', options: ['Savior', 'Lord', 'King', 'God'], correctAnswer: 1, reference: 'Romans 6:23' },
  { id: 'rom-006', bookId: 'romans', difficulty: 'medium', type: 'verse-completion', question: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be...', options: ['blessed', 'saved', 'forgiven', 'justified'], correctAnswer: 1, reference: 'Romans 10:9' },
  { id: 'rom-007', bookId: 'romans', difficulty: 'hard', type: 'verse-completion', question: 'I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable...', options: ['duty', 'service', 'worship', 'offering'], correctAnswer: 1, reference: 'Romans 12:1' },
  { id: 'rom-008', bookId: 'romans', difficulty: 'easy', type: 'multiple-choice', question: 'Who wrote Romans?', options: ['Peter', 'Paul', 'John', 'James'], correctAnswer: 1, reference: 'Romans 1:1' },
  { id: 'rom-009', bookId: 'romans', difficulty: 'medium', type: 'multiple-choice', question: 'To whom was Romans written?', options: ['The church in Corinth', 'The church in Rome', 'Timothy', 'The church in Ephesus'], correctAnswer: 1, reference: 'Romans 1:7' },
  { id: 'rom-010', bookId: 'romans', difficulty: 'hard', type: 'verse-completion', question: 'For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that...', options: ['asks', 'believes', 'seeks', 'prays'], correctAnswer: 1, reference: 'Romans 1:16' },
];

export const corinthians1Questions: QuizQuestion[] = [
  { id: '1co-001', bookId: '1-corinthians', difficulty: 'easy', type: 'multiple-choice', question: 'Which chapter is known as the "Love Chapter"?', options: ['Chapter 11', 'Chapter 13', 'Chapter 15', 'Chapter 12'], correctAnswer: 1, reference: '1 Corinthians 13' },
  { id: '1co-002', bookId: '1-corinthians', difficulty: 'medium', type: 'multiple-choice', question: 'According to 1 Corinthians 13, what is the greatest of faith, hope, and love?', options: ['Faith', 'Hope', 'Love', 'They are equal'], correctAnswer: 2, reference: '1 Corinthians 13:13' },
  { id: '1co-003', bookId: '1-corinthians', difficulty: 'hard', type: 'verse-completion', question: 'For by one Spirit are we all baptized into one body, whether we be Jews or Gentiles, whether we be bond or free; and have been all made to drink into one...', options: ['Spirit', 'Lord', 'faith', 'cup'], correctAnswer: 0, reference: '1 Corinthians 12:13' },
  { id: '1co-004', bookId: '1-corinthians', difficulty: 'easy', type: 'verse-completion', question: 'Love is patient, love is...', options: ['true', 'kind', 'gentle', 'pure'], correctAnswer: 1, reference: '1 Corinthians 13:4' },
  { id: '1co-005', bookId: '1-corinthians', difficulty: 'medium', type: 'multiple-choice', question: 'What metaphor does Paul use for believers?', options: ['A building', 'The body of Christ', 'A garden', 'All of these'], correctAnswer: 3, reference: '1 Corinthians 3, 12' },
  { id: '1co-006', bookId: '1-corinthians', difficulty: 'hard', type: 'verse-completion', question: 'Behold, I shew you a mystery; We shall not all sleep, but we shall all be...', options: ['saved', 'changed', 'raised', 'glorified'], correctAnswer: 1, reference: '1 Corinthians 15:51' },
  { id: '1co-007', bookId: '1-corinthians', difficulty: 'medium', type: 'verse-completion', question: 'O death, where is thy sting? O grave, where is thy...', options: ['power', 'victory', 'hold', 'strength'], correctAnswer: 1, reference: '1 Corinthians 15:55' },
  { id: '1co-008', bookId: '1-corinthians', difficulty: 'easy', type: 'multiple-choice', question: 'What problems was the Corinthian church facing?', options: ['Division', 'Immorality', 'Confusion about gifts', 'All of these'], correctAnswer: 3, reference: '1 Corinthians' },
  { id: '1co-009', bookId: '1-corinthians', difficulty: 'hard', type: 'multiple-choice', question: 'How many chapters are in 1 Corinthians?', options: ['13', '14', '16', '18'], correctAnswer: 2, reference: '1 Corinthians' },
  { id: '1co-010', bookId: '1-corinthians', difficulty: 'medium', type: 'verse-completion', question: 'There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to...', options: ['overcome', 'escape', 'endure', 'resist'], correctAnswer: 1, reference: '1 Corinthians 10:13' },
];

export const corinthians2Questions: QuizQuestion[] = [
  { id: '2co-001', bookId: '2-corinthians', difficulty: 'medium', type: 'verse-completion', question: 'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become...', options: ['holy', 'pure', 'new', 'blessed'], correctAnswer: 2, reference: '2 Corinthians 5:17' },
  { id: '2co-002', bookId: '2-corinthians', difficulty: 'hard', type: 'verse-completion', question: 'And he said unto me, My grace is sufficient for thee: for my strength is made perfect in...', options: ['faith', 'love', 'weakness', 'trials'], correctAnswer: 2, reference: '2 Corinthians 12:9' },
  { id: '2co-003', bookId: '2-corinthians', difficulty: 'easy', type: 'verse-completion', question: 'God loveth a cheerful...', options: ['heart', 'giver', 'servant', 'believer'], correctAnswer: 1, reference: '2 Corinthians 9:7' },
  { id: '2co-004', bookId: '2-corinthians', difficulty: 'medium', type: 'multiple-choice', question: 'What does Paul boast about in 2 Corinthians?', options: ['His successes', 'His weaknesses', 'His education', 'His travels'], correctAnswer: 1, reference: '2 Corinthians 11:30' },
  { id: '2co-005', bookId: '2-corinthians', difficulty: 'hard', type: 'multiple-choice', question: 'Where was Paul caught up to in his vision?', options: ['First heaven', 'Second heaven', 'Third heaven', 'Paradise only'], correctAnswer: 2, reference: '2 Corinthians 12:2' },
  { id: '2co-006', bookId: '2-corinthians', difficulty: 'easy', type: 'verse-completion', question: 'For we walk by faith, not by...', options: ['works', 'sight', 'feelings', 'hope'], correctAnswer: 1, reference: '2 Corinthians 5:7' },
  { id: '2co-007', bookId: '2-corinthians', difficulty: 'medium', type: 'multiple-choice', question: 'What ministry does Paul describe in chapter 3?', options: ['Ministry of death', 'Ministry of the Spirit', 'Both of these', 'Neither'], correctAnswer: 2, reference: '2 Corinthians 3' },
  { id: '2co-008', bookId: '2-corinthians', difficulty: 'hard', type: 'multiple-choice', question: 'What "thorn in the flesh" did Paul have?', options: ['Poor eyesight', 'Unknown affliction', 'Persecution', 'Illness'], correctAnswer: 1, reference: '2 Corinthians 12:7' },
];

export const galatiansQuestions: QuizQuestion[] = [
  { id: 'gal-001', bookId: 'galatians', difficulty: 'easy', type: 'multiple-choice', question: 'What is the main theme of Galatians?', options: ['Love', 'Freedom in Christ', 'Prophecy', 'Creation'], correctAnswer: 1, reference: 'Galatians 5:1' },
  { id: 'gal-002', bookId: 'galatians', difficulty: 'medium', type: 'multiple-choice', question: 'How many fruits of the Spirit are listed in Galatians 5?', options: ['7', '9', '10', '12'], correctAnswer: 1, reference: 'Galatians 5:22-23' },
  { id: 'gal-003', bookId: 'galatians', difficulty: 'hard', type: 'verse-completion', question: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in...', options: ['my heart', 'me', 'my soul', 'my spirit'], correctAnswer: 1, reference: 'Galatians 2:20' },
  { id: 'gal-004', bookId: 'galatians', difficulty: 'easy', type: 'verse-completion', question: 'Stand fast therefore in the liberty wherewith Christ hath made us...', options: ['righteous', 'holy', 'free', 'saved'], correctAnswer: 2, reference: 'Galatians 5:1' },
  { id: 'gal-005', bookId: 'galatians', difficulty: 'medium', type: 'multiple-choice', question: 'What were the Galatians turning back to?', options: ['Paganism', 'The law', 'Sin', 'Judaism'], correctAnswer: 1, reference: 'Galatians 3:1-3' },
  { id: 'gal-006', bookId: 'galatians', difficulty: 'hard', type: 'verse-completion', question: 'Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also...', options: ['receive', 'reap', 'harvest', 'gain'], correctAnswer: 1, reference: 'Galatians 6:7' },
  { id: 'gal-007', bookId: 'galatians', difficulty: 'medium', type: 'multiple-choice', question: 'What is the first fruit of the Spirit listed?', options: ['Joy', 'Peace', 'Love', 'Faith'], correctAnswer: 2, reference: 'Galatians 5:22' },
  { id: 'gal-008', bookId: 'galatians', difficulty: 'hard', type: 'multiple-choice', question: 'Who did Paul confront in Galatians?', options: ['John', 'James', 'Peter', 'Barnabas'], correctAnswer: 2, reference: 'Galatians 2:11' },
  { id: 'gal-009', bookId: 'galatians', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Galatians?', options: ['4', '5', '6', '7'], correctAnswer: 2, reference: 'Galatians' },
  { id: 'gal-010', bookId: 'galatians', difficulty: 'medium', type: 'verse-completion', question: 'There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ...', options: ['Jesus', 'our Lord', 'the Savior', 'alone'], correctAnswer: 0, reference: 'Galatians 3:28' },
];

export const ephesiansQuestions: QuizQuestion[] = [
  { id: 'eph-001', bookId: 'ephesians', difficulty: 'easy', type: 'verse-completion', question: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of...', options: ['Christ', 'the Spirit', 'God', 'grace'], correctAnswer: 2, reference: 'Ephesians 2:8' },
  { id: 'eph-002', bookId: 'ephesians', difficulty: 'medium', type: 'multiple-choice', question: 'What is described as the "Armor of God" chapter?', options: ['Chapter 4', 'Chapter 5', 'Chapter 6', 'Chapter 3'], correctAnswer: 2, reference: 'Ephesians 6' },
  { id: 'eph-003', bookId: 'ephesians', difficulty: 'hard', type: 'multiple-choice', question: 'What is the "sword of the Spirit"?', options: ['Prayer', 'Faith', 'The Word of God', 'Truth'], correctAnswer: 2, reference: 'Ephesians 6:17' },
  { id: 'eph-004', bookId: 'ephesians', difficulty: 'easy', type: 'verse-completion', question: 'For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in...', options: ['faith', 'them', 'love', 'truth'], correctAnswer: 1, reference: 'Ephesians 2:10' },
  { id: 'eph-005', bookId: 'ephesians', difficulty: 'medium', type: 'multiple-choice', question: 'What pieces make up the armor of God?', options: ['Belt, breastplate, shoes, shield, helmet, sword', 'Sword and shield only', 'Helmet and breastplate only', 'There are 10 pieces'], correctAnswer: 0, reference: 'Ephesians 6:14-17' },
  { id: 'eph-006', bookId: 'ephesians', difficulty: 'hard', type: 'verse-completion', question: 'And be not drunk with wine, wherein is excess; but be filled with the...', options: ['joy', 'Spirit', 'love', 'word'], correctAnswer: 1, reference: 'Ephesians 5:18' },
  { id: 'eph-007', bookId: 'ephesians', difficulty: 'medium', type: 'verse-completion', question: 'Husbands, love your wives, even as Christ also loved the...', options: ['world', 'Father', 'church', 'disciples'], correctAnswer: 2, reference: 'Ephesians 5:25' },
  { id: 'eph-008', bookId: 'ephesians', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Ephesians?', options: ['4', '5', '6', '7'], correctAnswer: 2, reference: 'Ephesians' },
  { id: 'eph-009', bookId: 'ephesians', difficulty: 'hard', type: 'verse-completion', question: 'Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in...', options: ['heaven', 'us', 'Christ', 'faith'], correctAnswer: 1, reference: 'Ephesians 3:20' },
  { id: 'eph-010', bookId: 'ephesians', difficulty: 'medium', type: 'verse-completion', question: 'Children, obey your parents in the Lord: for this is...', options: ['good', 'right', 'holy', 'blessed'], correctAnswer: 1, reference: 'Ephesians 6:1' },
];

export const philippiansQuestions: QuizQuestion[] = [
  { id: 'php-001', bookId: 'philippians', difficulty: 'easy', type: 'verse-completion', question: 'I can do all things through Christ which...', options: ['loves me', 'saves me', 'strengtheneth me', 'guides me'], correctAnswer: 2, reference: 'Philippians 4:13' },
  { id: 'php-002', bookId: 'philippians', difficulty: 'medium', type: 'multiple-choice', question: 'Where was Paul when he wrote Philippians?', options: ['Athens', 'Rome (prison)', 'Jerusalem', 'Corinth'], correctAnswer: 1, reference: 'Philippians 1:13' },
  { id: 'php-003', bookId: 'philippians', difficulty: 'hard', type: 'verse-completion', question: 'Rejoice in the Lord alway: and again I say...', options: ['Rejoice', 'Praise', 'Give thanks', 'Be glad'], correctAnswer: 0, reference: 'Philippians 4:4' },
  { id: 'php-004', bookId: 'philippians', difficulty: 'easy', type: 'verse-completion', question: 'But my God shall supply all your need according to his riches in glory by Christ...', options: ['our Lord', 'Jesus', 'the Savior', 'alone'], correctAnswer: 1, reference: 'Philippians 4:19' },
  { id: 'php-005', bookId: 'philippians', difficulty: 'medium', type: 'verse-completion', question: 'For to me to live is Christ, and to die is...', options: ['heaven', 'glory', 'gain', 'peace'], correctAnswer: 2, reference: 'Philippians 1:21' },
  { id: 'php-006', bookId: 'philippians', difficulty: 'hard', type: 'multiple-choice', question: 'What attitude did Paul say Jesus had?', options: ['Pride', 'Humility of a servant', 'Anger at sin', 'Sorrow'], correctAnswer: 1, reference: 'Philippians 2:5-8' },
  { id: 'php-007', bookId: 'philippians', difficulty: 'medium', type: 'verse-completion', question: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto...', options: ['heaven', 'God', 'Jesus', 'the Father'], correctAnswer: 1, reference: 'Philippians 4:6' },
  { id: 'php-008', bookId: 'philippians', difficulty: 'easy', type: 'multiple-choice', question: 'What is Philippians often called?', options: ['The letter of joy', 'The letter of love', 'The letter of faith', 'The letter of hope'], correctAnswer: 0, reference: 'Philippians' },
  { id: 'php-009', bookId: 'philippians', difficulty: 'hard', type: 'verse-completion', question: 'That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the...', options: ['sea', 'ground', 'earth', 'world'], correctAnswer: 2, reference: 'Philippians 2:10' },
  { id: 'php-010', bookId: 'philippians', difficulty: 'medium', type: 'multiple-choice', question: 'How many chapters are in Philippians?', options: ['3', '4', '5', '6'], correctAnswer: 1, reference: 'Philippians' },
];

export const colossiansQuestions: QuizQuestion[] = [
  { id: 'col-001', bookId: 'colossians', difficulty: 'medium', type: 'verse-completion', question: 'And whatsoever ye do, do it heartily, as to the Lord, and not unto...', options: ['yourselves', 'men', 'the world', 'others'], correctAnswer: 1, reference: 'Colossians 3:23' },
  { id: 'col-002', bookId: 'colossians', difficulty: 'hard', type: 'verse-completion', question: 'For in him dwelleth all the fulness of the Godhead...', options: ['spiritually', 'bodily', 'eternally', 'completely'], correctAnswer: 1, reference: 'Colossians 2:9' },
  { id: 'col-003', bookId: 'colossians', difficulty: 'easy', type: 'verse-completion', question: 'And let the peace of God rule in your...', options: ['life', 'hearts', 'minds', 'souls'], correctAnswer: 1, reference: 'Colossians 3:15' },
  { id: 'col-004', bookId: 'colossians', difficulty: 'medium', type: 'multiple-choice', question: 'What false teaching was Paul combating in Colossians?', options: ['Legalism only', 'Mysticism only', 'A mix of philosophy and legalism', 'Paganism'], correctAnswer: 2, reference: 'Colossians 2:8' },
  { id: 'col-005', bookId: 'colossians', difficulty: 'hard', type: 'verse-completion', question: 'He is the image of the invisible God, the firstborn of every...', options: ['nation', 'creature', 'generation', 'creation'], correctAnswer: 1, reference: 'Colossians 1:15' },
  { id: 'col-006', bookId: 'colossians', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Colossians?', options: ['3', '4', '5', '6'], correctAnswer: 1, reference: 'Colossians' },
  { id: 'col-007', bookId: 'colossians', difficulty: 'medium', type: 'verse-completion', question: 'If ye then be risen with Christ, seek those things which are above, where Christ sitteth on the right hand of...', options: ['the Father', 'God', 'the throne', 'heaven'], correctAnswer: 1, reference: 'Colossians 3:1' },
  { id: 'col-008', bookId: 'colossians', difficulty: 'hard', type: 'multiple-choice', question: 'Who delivered the letter to the Colossians?', options: ['Timothy', 'Tychicus', 'Epaphras', 'Onesimus'], correctAnswer: 1, reference: 'Colossians 4:7' },
];

export const thessalonians1Questions: QuizQuestion[] = [
  { id: '1th-001', bookId: '1-thessalonians', difficulty: 'medium', type: 'verse-completion', question: 'Pray without...', options: ['stopping', 'ceasing', 'end', 'rest'], correctAnswer: 1, reference: '1 Thessalonians 5:17' },
  { id: '1th-002', bookId: '1-thessalonians', difficulty: 'hard', type: 'multiple-choice', question: '1 Thessalonians is considered one of Paul\'s... letters', options: ['longest', 'earliest', 'last', 'prison'], correctAnswer: 1, reference: '1 Thessalonians' },
  { id: '1th-003', bookId: '1-thessalonians', difficulty: 'easy', type: 'verse-completion', question: 'Rejoice evermore. Pray without ceasing. In every thing give...', options: ['praise', 'glory', 'thanks', 'honor'], correctAnswer: 2, reference: '1 Thessalonians 5:16-18' },
  { id: '1th-004', bookId: '1-thessalonians', difficulty: 'medium', type: 'multiple-choice', question: 'What event does Paul describe in chapter 4?', options: ['Pentecost', 'The rapture/return of Christ', 'The crucifixion', 'Creation'], correctAnswer: 1, reference: '1 Thessalonians 4:16-17' },
  { id: '1th-005', bookId: '1-thessalonians', difficulty: 'hard', type: 'verse-completion', question: 'For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of...', options: ['heaven', 'God', 'Gabriel', 'the Lord'], correctAnswer: 1, reference: '1 Thessalonians 4:16' },
  { id: '1th-006', bookId: '1-thessalonians', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in 1 Thessalonians?', options: ['3', '4', '5', '6'], correctAnswer: 2, reference: '1 Thessalonians' },
  { id: '1th-007', bookId: '1-thessalonians', difficulty: 'medium', type: 'verse-completion', question: 'For God hath not appointed us to wrath, but to obtain salvation by our Lord Jesus...', options: ['Christ', 'alone', 'the Savior', 'our King'], correctAnswer: 0, reference: '1 Thessalonians 5:9' },
  { id: '1th-008', bookId: '1-thessalonians', difficulty: 'hard', type: 'multiple-choice', question: 'Who co-authored 1 Thessalonians with Paul?', options: ['Timothy only', 'Silas only', 'Silas and Timothy', 'Barnabas'], correctAnswer: 2, reference: '1 Thessalonians 1:1' },
];

export const thessalonians2Questions: QuizQuestion[] = [
  { id: '2th-001', bookId: '2-thessalonians', difficulty: 'medium', type: 'multiple-choice', question: 'What does 2 Thessalonians warn about?', options: ['False prophets', 'The Day of the Lord', 'Persecution', 'All of these'], correctAnswer: 3, reference: '2 Thessalonians 2' },
  { id: '2th-002', bookId: '2-thessalonians', difficulty: 'hard', type: 'verse-completion', question: 'For even when we were with you, this we commanded you, that if any would not work, neither should he...', options: ['rest', 'eat', 'sleep', 'receive'], correctAnswer: 1, reference: '2 Thessalonians 3:10' },
  { id: '2th-003', bookId: '2-thessalonians', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in 2 Thessalonians?', options: ['2', '3', '4', '5'], correctAnswer: 1, reference: '2 Thessalonians' },
  { id: '2th-004', bookId: '2-thessalonians', difficulty: 'medium', type: 'multiple-choice', question: 'Who is the "man of sin" or "lawless one"?', options: ['Satan', 'The Antichrist', 'A Roman emperor', 'Unknown'], correctAnswer: 1, reference: '2 Thessalonians 2:3' },
  { id: '2th-005', bookId: '2-thessalonians', difficulty: 'hard', type: 'verse-completion', question: 'Now we beseech you, brethren, by the coming of our Lord Jesus Christ, and by our gathering together unto...', options: ['heaven', 'him', 'glory', 'the Father'], correctAnswer: 1, reference: '2 Thessalonians 2:1' },
  { id: '2th-006', bookId: '2-thessalonians', difficulty: 'easy', type: 'verse-completion', question: 'But the Lord is faithful, who shall stablish you, and keep you from...', options: ['evil', 'sin', 'harm', 'Satan'], correctAnswer: 0, reference: '2 Thessalonians 3:3' },
  { id: '2th-007', bookId: '2-thessalonians', difficulty: 'medium', type: 'multiple-choice', question: 'What problem were some Thessalonians having?', options: ['Idleness', 'Persecution', 'False teaching', 'All of these'], correctAnswer: 3, reference: '2 Thessalonians 3:11' },
  { id: '2th-008', bookId: '2-thessalonians', difficulty: 'hard', type: 'multiple-choice', question: 'What did some think had already happened?', options: ['The resurrection', 'The Day of the Lord', 'Christ\'s return', 'The judgment'], correctAnswer: 1, reference: '2 Thessalonians 2:2' },
];

export const timothy1Questions: QuizQuestion[] = [
  { id: '1ti-001', bookId: '1-timothy', difficulty: 'easy', type: 'multiple-choice', question: 'Who was Timothy to Paul?', options: ['A son in the faith', 'A brother', 'A servant', 'A fellow prisoner'], correctAnswer: 0, reference: '1 Timothy 1:2' },
  { id: '1ti-002', bookId: '1-timothy', difficulty: 'medium', type: 'verse-completion', question: 'For the love of money is the root of all...', options: ['sin', 'evil', 'wickedness', 'corruption'], correctAnswer: 1, reference: '1 Timothy 6:10' },
  { id: '1ti-003', bookId: '1-timothy', difficulty: 'hard', type: 'verse-completion', question: 'This is a faithful saying, and worthy of all acceptation, that Christ Jesus came into the world to save...', options: ['the righteous', 'sinners', 'His people', 'the lost'], correctAnswer: 1, reference: '1 Timothy 1:15' },
  { id: '1ti-004', bookId: '1-timothy', difficulty: 'easy', type: 'verse-completion', question: 'Let no man despise thy...', options: ['faith', 'calling', 'youth', 'weakness'], correctAnswer: 2, reference: '1 Timothy 4:12' },
  { id: '1ti-005', bookId: '1-timothy', difficulty: 'medium', type: 'multiple-choice', question: 'What type of letter is 1 Timothy?', options: ['Prophetic', 'Pastoral', 'Apocalyptic', 'Historical'], correctAnswer: 1, reference: '1 Timothy' },
  { id: '1ti-006', bookId: '1-timothy', difficulty: 'hard', type: 'verse-completion', question: 'For there is one God, and one mediator between God and men, the man Christ...', options: ['Jesus', 'our Lord', 'the Savior', 'the Messiah'], correctAnswer: 0, reference: '1 Timothy 2:5' },
  { id: '1ti-007', bookId: '1-timothy', difficulty: 'medium', type: 'multiple-choice', question: 'What qualifications does Paul give for church leaders?', options: ['Education', 'Wealth', 'Character and family', 'Political skill'], correctAnswer: 2, reference: '1 Timothy 3' },
  { id: '1ti-008', bookId: '1-timothy', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in 1 Timothy?', options: ['4', '5', '6', '7'], correctAnswer: 2, reference: '1 Timothy' },
];

export const timothy2Questions: QuizQuestion[] = [
  { id: '2ti-001', bookId: '2-timothy', difficulty: 'medium', type: 'verse-completion', question: 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in...', options: ['truth', 'faith', 'righteousness', 'wisdom'], correctAnswer: 2, reference: '2 Timothy 3:16' },
  { id: '2ti-002', bookId: '2-timothy', difficulty: 'hard', type: 'multiple-choice', question: '2 Timothy is believed to be Paul\'s... letter', options: ['first', 'middle', 'last', 'prison'], correctAnswer: 2, reference: '2 Timothy tradition' },
  { id: '2ti-003', bookId: '2-timothy', difficulty: 'easy', type: 'verse-completion', question: 'I have fought a good fight, I have finished my course, I have kept the...', options: ['word', 'faith', 'promise', 'truth'], correctAnswer: 1, reference: '2 Timothy 4:7' },
  { id: '2ti-004', bookId: '2-timothy', difficulty: 'medium', type: 'verse-completion', question: 'Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of...', options: ['God', 'truth', 'the Lord', 'life'], correctAnswer: 1, reference: '2 Timothy 2:15' },
  { id: '2ti-005', bookId: '2-timothy', difficulty: 'hard', type: 'multiple-choice', question: 'What was Timothy\'s grandmother\'s name?', options: ['Eunice', 'Lois', 'Priscilla', 'Phoebe'], correctAnswer: 1, reference: '2 Timothy 1:5' },
  { id: '2ti-006', bookId: '2-timothy', difficulty: 'easy', type: 'verse-completion', question: 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound...', options: ['heart', 'faith', 'mind', 'judgment'], correctAnswer: 2, reference: '2 Timothy 1:7' },
  { id: '2ti-007', bookId: '2-timothy', difficulty: 'medium', type: 'multiple-choice', question: 'Where was Paul when he wrote 2 Timothy?', options: ['Corinth', 'Athens', 'Prison in Rome', 'Ephesus'], correctAnswer: 2, reference: '2 Timothy 1:8' },
  { id: '2ti-008', bookId: '2-timothy', difficulty: 'hard', type: 'verse-completion', question: 'Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all longsuffering and...', options: ['love', 'doctrine', 'patience', 'wisdom'], correctAnswer: 1, reference: '2 Timothy 4:2' },
];

export const titusQuestions: QuizQuestion[] = [
  { id: 'tit-001', bookId: 'titus', difficulty: 'medium', type: 'multiple-choice', question: 'Where was Titus when Paul wrote to him?', options: ['Rome', 'Crete', 'Athens', 'Ephesus'], correctAnswer: 1, reference: 'Titus 1:5' },
  { id: 'tit-002', bookId: 'titus', difficulty: 'hard', type: 'multiple-choice', question: 'What type of letter is Titus classified as?', options: ['Prophetic', 'Pastoral', 'General', 'Apocalyptic'], correctAnswer: 1, reference: 'Titus' },
  { id: 'tit-003', bookId: 'titus', difficulty: 'easy', type: 'verse-completion', question: 'For the grace of God that bringeth salvation hath appeared to all...', options: ['nations', 'men', 'believers', 'Israel'], correctAnswer: 1, reference: 'Titus 2:11' },
  { id: 'tit-004', bookId: 'titus', difficulty: 'medium', type: 'multiple-choice', question: 'What was Titus supposed to do in Crete?', options: ['Build a church', 'Appoint elders', 'Start a school', 'Write a gospel'], correctAnswer: 1, reference: 'Titus 1:5' },
  { id: 'tit-005', bookId: 'titus', difficulty: 'hard', type: 'verse-completion', question: 'Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy...', options: ['Spirit', 'Ghost', 'Word', 'One'], correctAnswer: 1, reference: 'Titus 3:5' },
  { id: 'tit-006', bookId: 'titus', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Titus?', options: ['2', '3', '4', '5'], correctAnswer: 1, reference: 'Titus' },
  { id: 'tit-007', bookId: 'titus', difficulty: 'medium', type: 'multiple-choice', question: 'What does Paul emphasize believers should be ready for?', options: ['Persecution', 'Good works', 'The end times', 'Travel'], correctAnswer: 1, reference: 'Titus 3:1' },
  { id: 'tit-008', bookId: 'titus', difficulty: 'hard', type: 'verse-completion', question: 'Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus...', options: ['Christ', 'the Lord', 'our King', 'Messiah'], correctAnswer: 0, reference: 'Titus 2:13' },
];

export const philemonQuestions: QuizQuestion[] = [
  { id: 'phm-001', bookId: 'philemon', difficulty: 'easy', type: 'multiple-choice', question: 'Philemon is the... book in the New Testament', options: ['longest', 'shortest', 'most quoted', 'last'], correctAnswer: 1, reference: 'Philemon' },
  { id: 'phm-002', bookId: 'philemon', difficulty: 'medium', type: 'multiple-choice', question: 'Who was Onesimus?', options: ['A pastor', 'A runaway slave', 'A prophet', 'Paul\'s brother'], correctAnswer: 1, reference: 'Philemon 1:10-16' },
  { id: 'phm-003', bookId: 'philemon', difficulty: 'hard', type: 'multiple-choice', question: 'What was Paul asking Philemon to do?', options: ['Send money', 'Receive Onesimus back as a brother', 'Visit Rome', 'Start a church'], correctAnswer: 1, reference: 'Philemon 1:15-17' },
  { id: 'phm-004', bookId: 'philemon', difficulty: 'easy', type: 'multiple-choice', question: 'How many verses are in Philemon?', options: ['15', '21', '25', '30'], correctAnswer: 2, reference: 'Philemon' },
  { id: 'phm-005', bookId: 'philemon', difficulty: 'medium', type: 'multiple-choice', question: 'Where was Paul when he wrote Philemon?', options: ['Corinth', 'Prison', 'Ephesus', 'Jerusalem'], correctAnswer: 1, reference: 'Philemon 1:9' },
  { id: 'phm-006', bookId: 'philemon', difficulty: 'hard', type: 'multiple-choice', question: 'What does Paul call Onesimus?', options: ['A servant', 'My son in the faith', 'A brother', 'Both B and C'], correctAnswer: 3, reference: 'Philemon 1:10, 16' },
  { id: 'phm-007', bookId: 'philemon', difficulty: 'medium', type: 'verse-completion', question: 'That the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ...', options: ['Jesus', 'our Lord', 'alone', 'the Savior'], correctAnswer: 0, reference: 'Philemon 1:6' },
  { id: 'phm-008', bookId: 'philemon', difficulty: 'hard', type: 'multiple-choice', question: 'What did Onesimus\'s name mean?', options: ['Faithful', 'Useful/Profitable', 'Servant', 'Beloved'], correctAnswer: 1, reference: 'Philemon 1:11' },
];

export const hebrewsQuestions: QuizQuestion[] = [
  { id: 'heb-001', bookId: 'hebrews', difficulty: 'easy', type: 'verse-completion', question: 'Now faith is the substance of things hoped for, the evidence of things not...', options: ['understood', 'seen', 'known', 'believed'], correctAnswer: 1, reference: 'Hebrews 11:1' },
  { id: 'heb-002', bookId: 'hebrews', difficulty: 'medium', type: 'multiple-choice', question: 'Which chapter is known as the "Faith Hall of Fame"?', options: ['Chapter 9', 'Chapter 10', 'Chapter 11', 'Chapter 12'], correctAnswer: 2, reference: 'Hebrews 11' },
  { id: 'heb-003', bookId: 'hebrews', difficulty: 'hard', type: 'verse-completion', question: 'Jesus Christ the same yesterday, and to day, and...', options: ['evermore', 'for ever', 'eternally', 'always'], correctAnswer: 1, reference: 'Hebrews 13:8' },
  { id: 'heb-004', bookId: 'hebrews', difficulty: 'easy', type: 'verse-completion', question: 'Let us run with patience the race that is set before...', options: ['us', 'all', 'believers', 'the saints'], correctAnswer: 0, reference: 'Hebrews 12:1' },
  { id: 'heb-005', bookId: 'hebrews', difficulty: 'medium', type: 'verse-completion', question: 'For the word of God is quick, and powerful, and sharper than any twoedged...', options: ['knife', 'sword', 'blade', 'weapon'], correctAnswer: 1, reference: 'Hebrews 4:12' },
  { id: 'heb-006', bookId: 'hebrews', difficulty: 'hard', type: 'multiple-choice', question: 'Who is the author of Hebrews?', options: ['Paul', 'Apollos', 'Barnabas', 'Unknown'], correctAnswer: 3, reference: 'Hebrews' },
  { id: 'heb-007', bookId: 'hebrews', difficulty: 'medium', type: 'multiple-choice', question: 'What priesthood does Jesus belong to?', options: ['Aaronic', 'Levitical', 'Melchizedek', 'None'], correctAnswer: 2, reference: 'Hebrews 7:17' },
  { id: 'heb-008', bookId: 'hebrews', difficulty: 'hard', type: 'verse-completion', question: 'Looking unto Jesus the author and finisher of our...', options: ['salvation', 'faith', 'hope', 'love'], correctAnswer: 1, reference: 'Hebrews 12:2' },
  { id: 'heb-009', bookId: 'hebrews', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in Hebrews?', options: ['10', '11', '12', '13'], correctAnswer: 3, reference: 'Hebrews' },
  { id: 'heb-010', bookId: 'hebrews', difficulty: 'medium', type: 'verse-completion', question: 'Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day...', options: ['coming', 'approaching', 'drawing near', 'at hand'], correctAnswer: 1, reference: 'Hebrews 10:25' },
];

export const jamesQuestions: QuizQuestion[] = [
  { id: 'jam-001', bookId: 'james', difficulty: 'easy', type: 'multiple-choice', question: 'According to James, faith without works is...', options: ['weak', 'incomplete', 'dead', 'false'], correctAnswer: 2, reference: 'James 2:26' },
  { id: 'jam-002', bookId: 'james', difficulty: 'medium', type: 'verse-completion', question: 'If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be...', options: ['granted', 'given him', 'revealed', 'found'], correctAnswer: 1, reference: 'James 1:5' },
  { id: 'jam-003', bookId: 'james', difficulty: 'hard', type: 'multiple-choice', question: 'James compares the tongue to what?', options: ['A sword', 'A fire', 'A weapon', 'A poison'], correctAnswer: 1, reference: 'James 3:6' },
  { id: 'jam-004', bookId: 'james', difficulty: 'easy', type: 'verse-completion', question: 'But be ye doers of the word, and not hearers...', options: ['only', 'alone', 'merely', 'just'], correctAnswer: 0, reference: 'James 1:22' },
  { id: 'jam-005', bookId: 'james', difficulty: 'medium', type: 'verse-completion', question: 'Draw nigh to God, and he will draw nigh to...', options: ['his people', 'you', 'the faithful', 'his children'], correctAnswer: 1, reference: 'James 4:8' },
  { id: 'jam-006', bookId: 'james', difficulty: 'hard', type: 'verse-completion', question: 'The effectual fervent prayer of a righteous man availeth...', options: ['greatly', 'much', 'always', 'eternally'], correctAnswer: 1, reference: 'James 5:16' },
  { id: 'jam-007', bookId: 'james', difficulty: 'easy', type: 'multiple-choice', question: 'Who is James believed to be?', options: ['The apostle', 'Jesus\' brother', 'John\'s brother', 'Unknown'], correctAnswer: 1, reference: 'James 1:1' },
  { id: 'jam-008', bookId: 'james', difficulty: 'medium', type: 'verse-completion', question: 'Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to...', options: ['anger', 'wrath', 'judgment', 'action'], correctAnswer: 1, reference: 'James 1:19' },
  { id: 'jam-009', bookId: 'james', difficulty: 'hard', type: 'multiple-choice', question: 'What does James call God\'s word that can save?', options: ['Living word', 'Engrafted word', 'Holy word', 'Pure word'], correctAnswer: 1, reference: 'James 1:21' },
  { id: 'jam-010', bookId: 'james', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in James?', options: ['3', '4', '5', '6'], correctAnswer: 2, reference: 'James' },
];

export const peter1Questions: QuizQuestion[] = [
  { id: '1pe-001', bookId: '1-peter', difficulty: 'medium', type: 'verse-completion', question: 'Casting all your care upon him; for he careth for...', options: ['us', 'you', 'all', 'his people'], correctAnswer: 1, reference: '1 Peter 5:7' },
  { id: '1pe-002', bookId: '1-peter', difficulty: 'hard', type: 'verse-completion', question: 'But sanctify the Lord God in your hearts: and be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and...', options: ['truth', 'love', 'fear', 'wisdom'], correctAnswer: 2, reference: '1 Peter 3:15' },
  { id: '1pe-003', bookId: '1-peter', difficulty: 'easy', type: 'verse-completion', question: 'For all flesh is as grass, and all the glory of man as the flower of grass. The grass withereth, and the flower thereof falleth away: But the word of the Lord endureth...', options: ['always', 'for ever', 'eternally', 'evermore'], correctAnswer: 1, reference: '1 Peter 1:24-25' },
  { id: '1pe-004', bookId: '1-peter', difficulty: 'medium', type: 'multiple-choice', question: 'What does Peter call believers?', options: ['Children of God', 'A royal priesthood', 'Saints', 'All of these'], correctAnswer: 3, reference: '1 Peter 2:9' },
  { id: '1pe-005', bookId: '1-peter', difficulty: 'hard', type: 'verse-completion', question: 'Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may...', options: ['destroy', 'deceive', 'devour', 'defeat'], correctAnswer: 2, reference: '1 Peter 5:8' },
  { id: '1pe-006', bookId: '1-peter', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in 1 Peter?', options: ['3', '4', '5', '6'], correctAnswer: 2, reference: '1 Peter' },
  { id: '1pe-007', bookId: '1-peter', difficulty: 'medium', type: 'verse-completion', question: 'Humble yourselves therefore under the mighty hand of God, that he may exalt you in due...', options: ['course', 'season', 'time', 'order'], correctAnswer: 2, reference: '1 Peter 5:6' },
  { id: '1pe-008', bookId: '1-peter', difficulty: 'hard', type: 'multiple-choice', question: 'What does Peter say suffering produces?', options: ['Weakness', 'Tested faith', 'Doubt', 'Fear'], correctAnswer: 1, reference: '1 Peter 1:7' },
];

export const peter2Questions: QuizQuestion[] = [
  { id: '2pe-001', bookId: '2-peter', difficulty: 'medium', type: 'verse-completion', question: 'But, beloved, be not ignorant of this one thing, that one day is with the Lord as a thousand years, and a thousand years as...', options: ['a moment', 'one day', 'nothing', 'an hour'], correctAnswer: 1, reference: '2 Peter 3:8' },
  { id: '2pe-002', bookId: '2-peter', difficulty: 'hard', type: 'multiple-choice', question: 'What does Peter warn about in 2 Peter?', options: ['Persecution', 'False teachers', 'Laziness', 'Poverty'], correctAnswer: 1, reference: '2 Peter 2:1' },
  { id: '2pe-003', bookId: '2-peter', difficulty: 'easy', type: 'verse-completion', question: 'The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to...', options: ['salvation', 'faith', 'repentance', 'Christ'], correctAnswer: 2, reference: '2 Peter 3:9' },
  { id: '2pe-004', bookId: '2-peter', difficulty: 'medium', type: 'multiple-choice', question: 'What qualities does Peter say to add to faith?', options: ['Virtue, knowledge, temperance...', 'Love only', 'Works only', 'Prayer only'], correctAnswer: 0, reference: '2 Peter 1:5-7' },
  { id: '2pe-005', bookId: '2-peter', difficulty: 'hard', type: 'verse-completion', question: 'For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy...', options: ['Spirit', 'Ghost', 'One', 'Wind'], correctAnswer: 1, reference: '2 Peter 1:21' },
  { id: '2pe-006', bookId: '2-peter', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in 2 Peter?', options: ['2', '3', '4', '5'], correctAnswer: 1, reference: '2 Peter' },
  { id: '2pe-007', bookId: '2-peter', difficulty: 'medium', type: 'verse-completion', question: 'But grow in grace, and in the knowledge of our Lord and Saviour Jesus...', options: ['Christ', 'the Messiah', 'our King', 'alone'], correctAnswer: 0, reference: '2 Peter 3:18' },
  { id: '2pe-008', bookId: '2-peter', difficulty: 'hard', type: 'multiple-choice', question: 'What example of judgment does Peter use from the Old Testament?', options: ['Egypt', 'Babylon', 'Sodom and Gomorrah', 'Nineveh'], correctAnswer: 2, reference: '2 Peter 2:6' },
];

export const john1Questions: QuizQuestion[] = [
  { id: '1jn-001', bookId: '1-john', difficulty: 'easy', type: 'verse-completion', question: 'God is...', options: ['holy', 'good', 'love', 'spirit'], correctAnswer: 2, reference: '1 John 4:8' },
  { id: '1jn-002', bookId: '1-john', difficulty: 'medium', type: 'verse-completion', question: 'If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all...', options: ['evil', 'wickedness', 'unrighteousness', 'iniquity'], correctAnswer: 2, reference: '1 John 1:9' },
  { id: '1jn-003', bookId: '1-john', difficulty: 'hard', type: 'verse-completion', question: 'There is no fear in love; but perfect love casteth out...', options: ['doubt', 'fear', 'sin', 'darkness'], correctAnswer: 1, reference: '1 John 4:18' },
  { id: '1jn-004', bookId: '1-john', difficulty: 'easy', type: 'verse-completion', question: 'If we say that we have no sin, we deceive...', options: ['God', 'others', 'ourselves', 'the world'], correctAnswer: 2, reference: '1 John 1:8' },
  { id: '1jn-005', bookId: '1-john', difficulty: 'medium', type: 'multiple-choice', question: 'What does John say we should test?', options: ['Our faith', 'The spirits', 'Our works', 'The scriptures'], correctAnswer: 1, reference: '1 John 4:1' },
  { id: '1jn-006', bookId: '1-john', difficulty: 'hard', type: 'verse-completion', question: 'We love him, because he first loved...', options: ['the world', 'us', 'his Son', 'all'], correctAnswer: 1, reference: '1 John 4:19' },
  { id: '1jn-007', bookId: '1-john', difficulty: 'easy', type: 'multiple-choice', question: 'How many chapters are in 1 John?', options: ['3', '4', '5', '6'], correctAnswer: 2, reference: '1 John' },
  { id: '1jn-008', bookId: '1-john', difficulty: 'medium', type: 'verse-completion', question: 'And this is the confidence that we have in him, that, if we ask any thing according to his will, he...', options: ['answers us', 'heareth us', 'helps us', 'loves us'], correctAnswer: 1, reference: '1 John 5:14' },
  { id: '1jn-009', bookId: '1-john', difficulty: 'hard', type: 'multiple-choice', question: 'What does John call Jesus?', options: ['Our advocate', 'The propitiation', 'The Word of life', 'All of these'], correctAnswer: 3, reference: '1 John 2:1-2' },
  { id: '1jn-010', bookId: '1-john', difficulty: 'medium', type: 'verse-completion', question: 'Beloved, let us love one another: for love is of...', options: ['heaven', 'God', 'Christ', 'the Spirit'], correctAnswer: 1, reference: '1 John 4:7' },
];

export const john2Questions: QuizQuestion[] = [
  { id: '2jn-001', bookId: '2-john', difficulty: 'medium', type: 'multiple-choice', question: '2 John is written to whom?', options: ['Timothy', 'The elect lady', 'The church', 'Gaius'], correctAnswer: 1, reference: '2 John 1:1' },
  { id: '2jn-002', bookId: '2-john', difficulty: 'hard', type: 'multiple-choice', question: 'How many verses are in 2 John?', options: ['10', '13', '15', '21'], correctAnswer: 1, reference: '2 John' },
  { id: '2jn-003', bookId: '2-john', difficulty: 'easy', type: 'multiple-choice', question: 'What is the main theme of 2 John?', options: ['Prophecy', 'Walking in truth and love', 'The end times', 'Church leadership'], correctAnswer: 1, reference: '2 John' },
  { id: '2jn-004', bookId: '2-john', difficulty: 'medium', type: 'verse-completion', question: 'And this is love, that we walk after his...', options: ['ways', 'commandments', 'example', 'path'], correctAnswer: 1, reference: '2 John 1:6' },
  { id: '2jn-005', bookId: '2-john', difficulty: 'hard', type: 'multiple-choice', question: 'What does John warn about regarding deceivers?', options: ['Avoid them', 'Don\'t receive them in your house', 'Don\'t greet them', 'All of these'], correctAnswer: 3, reference: '2 John 1:10-11' },
  { id: '2jn-006', bookId: '2-john', difficulty: 'easy', type: 'multiple-choice', question: 'Who is the author of 2 John?', options: ['John the Baptist', 'John the Apostle', 'John Mark', 'Unknown'], correctAnswer: 1, reference: '2 John 1:1' },
  { id: '2jn-007', bookId: '2-john', difficulty: 'medium', type: 'verse-completion', question: 'Look to yourselves, that we lose not those things which we have wrought, but that we receive a full...', options: ['blessing', 'reward', 'inheritance', 'portion'], correctAnswer: 1, reference: '2 John 1:8' },
  { id: '2jn-008', bookId: '2-john', difficulty: 'hard', type: 'multiple-choice', question: 'What false teaching does John warn about?', options: ['Denying Christ came in the flesh', 'Legalism', 'Gnosticism', 'Paganism'], correctAnswer: 0, reference: '2 John 1:7' },
];

export const john3Questions: QuizQuestion[] = [
  { id: '3jn-001', bookId: '3-john', difficulty: 'medium', type: 'multiple-choice', question: '3 John is written to whom?', options: ['Timothy', 'The elect lady', 'Diotrephes', 'Gaius'], correctAnswer: 3, reference: '3 John 1:1' },
  { id: '3jn-002', bookId: '3-john', difficulty: 'hard', type: 'verse-completion', question: 'Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul...', options: ['grows', 'prospers', 'flourishes', 'lives'], correctAnswer: 1, reference: '3 John 1:2' },
  { id: '3jn-003', bookId: '3-john', difficulty: 'easy', type: 'multiple-choice', question: 'How many verses are in 3 John?', options: ['10', '12', '14', '15'], correctAnswer: 2, reference: '3 John' },
  { id: '3jn-004', bookId: '3-john', difficulty: 'medium', type: 'multiple-choice', question: 'Who does John criticize in 3 John?', options: ['Gaius', 'Demetrius', 'Diotrephes', 'Alexander'], correctAnswer: 2, reference: '3 John 1:9' },
  { id: '3jn-005', bookId: '3-john', difficulty: 'hard', type: 'multiple-choice', question: 'What was Diotrephes\' problem?', options: ['False teaching', 'Loving to be first', 'Immorality', 'Laziness'], correctAnswer: 1, reference: '3 John 1:9' },
  { id: '3jn-006', bookId: '3-john', difficulty: 'easy', type: 'verse-completion', question: 'Beloved, follow not that which is evil, but that which is...', options: ['righteous', 'holy', 'good', 'pure'], correctAnswer: 2, reference: '3 John 1:11' },
  { id: '3jn-007', bookId: '3-john', difficulty: 'medium', type: 'multiple-choice', question: 'Who does John commend in 3 John?', options: ['Only Gaius', 'Gaius and Demetrius', 'Only Demetrius', 'Diotrephes'], correctAnswer: 1, reference: '3 John 1:1, 12' },
  { id: '3jn-008', bookId: '3-john', difficulty: 'hard', type: 'multiple-choice', question: 'What was Gaius doing that pleased John?', options: ['Teaching', 'Showing hospitality to traveling believers', 'Preaching', 'Writing'], correctAnswer: 1, reference: '3 John 1:5-6' },
];

export const judeQuestions: QuizQuestion[] = [
  { id: 'jud-001', bookId: 'jude', difficulty: 'medium', type: 'multiple-choice', question: 'Jude identifies himself as the brother of whom?', options: ['Jesus', 'James', 'John', 'Peter'], correctAnswer: 1, reference: 'Jude 1:1' },
  { id: 'jud-002', bookId: 'jude', difficulty: 'hard', type: 'multiple-choice', question: 'What does Jude warn about?', options: ['The end times', 'False teachers', 'Persecution', 'Sin'], correctAnswer: 1, reference: 'Jude 1:4' },
  { id: 'jud-003', bookId: 'jude', difficulty: 'easy', type: 'verse-completion', question: 'But ye, beloved, building up yourselves on your most holy faith, praying in the Holy...', options: ['Spirit', 'Ghost', 'Name', 'One'], correctAnswer: 1, reference: 'Jude 1:20' },
  { id: 'jud-004', bookId: 'jude', difficulty: 'medium', type: 'verse-completion', question: 'Contend earnestly for the faith which was once delivered unto the...', options: ['apostles', 'prophets', 'saints', 'church'], correctAnswer: 2, reference: 'Jude 1:3' },
  { id: 'jud-005', bookId: 'jude', difficulty: 'hard', type: 'multiple-choice', question: 'Who disputed with the devil about Moses\' body?', options: ['Gabriel', 'Michael', 'An angel', 'God'], correctAnswer: 1, reference: 'Jude 1:9' },
  { id: 'jud-006', bookId: 'jude', difficulty: 'easy', type: 'multiple-choice', question: 'How many verses are in Jude?', options: ['20', '25', '30', '35'], correctAnswer: 1, reference: 'Jude' },
  { id: 'jud-007', bookId: 'jude', difficulty: 'medium', type: 'verse-completion', question: 'Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding...', options: ['power', 'joy', 'grace', 'love'], correctAnswer: 1, reference: 'Jude 1:24' },
  { id: 'jud-008', bookId: 'jude', difficulty: 'hard', type: 'multiple-choice', question: 'What Old Testament examples does Jude use as warnings?', options: ['Israel, angels, Sodom', 'Egypt, Babylon, Persia', 'David, Solomon, Saul', 'Abraham, Isaac, Jacob'], correctAnswer: 0, reference: 'Jude 1:5-7' },
];

export const revelationQuestions: QuizQuestion[] = [
  { id: 'rev-001', bookId: 'revelation', difficulty: 'easy', type: 'multiple-choice', question: 'Who wrote the book of Revelation?', options: ['Paul', 'Peter', 'John', 'James'], correctAnswer: 2, reference: 'Revelation 1:1' },
  { id: 'rev-002', bookId: 'revelation', difficulty: 'easy', type: 'multiple-choice', question: 'Where was John when he received the Revelation?', options: ['Jerusalem', 'Rome', 'Patmos', 'Ephesus'], correctAnswer: 2, reference: 'Revelation 1:9' },
  { id: 'rev-003', bookId: 'revelation', difficulty: 'medium', type: 'multiple-choice', question: 'How many churches did John write to in Revelation?', options: ['5', '7', '10', '12'], correctAnswer: 1, reference: 'Revelation 1:4' },
  { id: 'rev-004', bookId: 'revelation', difficulty: 'hard', type: 'multiple-choice', question: 'What is the number of the beast mentioned in Revelation?', options: ['616', '666', '777', '888'], correctAnswer: 1, reference: 'Revelation 13:18' },
  { id: 'rev-005', bookId: 'revelation', difficulty: 'hard', type: 'multiple-choice', question: 'How many seals are on the scroll?', options: ['5', '7', '10', '12'], correctAnswer: 1, reference: 'Revelation 5:1' },
  { id: 'rev-006', bookId: 'revelation', difficulty: 'hard', type: 'verse-completion', question: 'Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with...', options: ['me', 'the Lord', 'God', 'us'], correctAnswer: 0, reference: 'Revelation 3:20' },
  { id: 'rev-007', bookId: 'revelation', difficulty: 'medium', type: 'multiple-choice', question: 'Who alone was worthy to open the scroll?', options: ['An angel', 'John', 'The Lamb', 'One of the elders'], correctAnswer: 2, reference: 'Revelation 5:5-6' },
  { id: 'rev-008', bookId: 'revelation', difficulty: 'easy', type: 'multiple-choice', question: 'What color is the horse of the first seal?', options: ['Red', 'Black', 'White', 'Pale'], correctAnswer: 2, reference: 'Revelation 6:2' },
  { id: 'rev-009', bookId: 'revelation', difficulty: 'hard', type: 'multiple-choice', question: 'How many people are sealed from the tribes of Israel?', options: ['12,000', '24,000', '144,000', '1,000,000'], correctAnswer: 2, reference: 'Revelation 7:4' },
  { id: 'rev-010', bookId: 'revelation', difficulty: 'medium', type: 'verse-completion', question: 'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more...', options: ['suffering', 'pain', 'evil', 'sin'], correctAnswer: 1, reference: 'Revelation 21:4' },
  { id: 'rev-011', bookId: 'revelation', difficulty: 'easy', type: 'multiple-choice', question: 'What comes down from heaven at the end of Revelation?', options: ['Fire', 'The New Jerusalem', 'Angels', 'The Ark'], correctAnswer: 1, reference: 'Revelation 21:2' },
  { id: 'rev-012', bookId: 'revelation', difficulty: 'hard', type: 'multiple-choice', question: 'How many chapters are in Revelation?', options: ['20', '21', '22', '24'], correctAnswer: 2, reference: 'Revelation' },
];
