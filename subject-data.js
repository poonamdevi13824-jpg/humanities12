const subjectCatalog = {
  history: {
    name: 'History',
    tagline: 'Nationalism, change, freedom, and identity.',
    cover: 'history',
    pyqSource: 'https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/HISTORY.zip',
    books: ['Themes in Indian History Part I', 'Themes in Indian History Part II', 'Themes in Indian History Part III'],
    bookFiles: ['history1.pdf', 'history2.pdf', 'history3.pdf'],
    chapters: [
      { id: 'bricks-beads-bones', name: 'Bricks, Beads and Bones: The Harappan Civilisation', bookIndex: 0 },
      { id: 'kings-farmers-towns', name: 'Kings, Farmers and Towns: Early States and Economies', bookIndex: 0 },
      { id: 'kinship-caste-class', name: 'Kinship, Caste and Class: Early Societies', bookIndex: 0 },
      { id: 'thinkers-beliefs-buildings', name: 'Thinkers, Beliefs and Buildings: Cultural Developments', bookIndex: 0 },
      { id: 'through-eyes-travellers', name: 'Through the Eyes of Travellers: Perceptions of Society', bookIndex: 1 },
      { id: 'bhakti-sufi-traditions', name: 'Bhakti-Sufi Traditions: Changes in Religious Beliefs and Devotional Texts', bookIndex: 1 },
      { id: 'imperial-capital-vijayanagara', name: 'An Imperial Capital: Vijayanagara', bookIndex: 1 },
      { id: 'peasants-zamindars-state', name: 'Peasants, Zamindars and the State: Agrarian Society and the Mughal Empire', bookIndex: 1 },
      { id: 'kings-chronicles', name: 'Kings and Chronicles: The Mughal Courts', bookIndex: 1 },
      { id: 'colonialism-countryside', name: 'Colonialism and the Countryside: Exploring Official Archives', bookIndex: 2 },
      { id: 'rebels-raj', name: 'Rebels and the Raj: 1857 Revolt and Its Representations', bookIndex: 2 },
      { id: 'colonial-cities', name: 'Colonial Cities: Urbanisation, Planning and Architecture', bookIndex: 2 },
      { id: 'mahatma-gandhi-nationalist-movement', name: 'Mahatma Gandhi and the Nationalist Movement: Civil Disobedience and Beyond', bookIndex: 2 },
      { id: 'understanding-partition', name: 'Understanding Partition: Politics, Memories, Experiences', bookIndex: 2 },
      { id: 'framing-constitution', name: 'Framing the Constitution: The Beginning of a New Era', bookIndex: 2 }
    ],
    noteContent: {
      'nationalism-and-modernisation': {
        title: 'Nationalism and Modernisation',
        summary: 'Nationalism is the idea of a shared political identity built from culture, history, language, and citizenship.',
        points: [
          'Nationalism united people around common rights and political belonging.',
          'Modernisation changed social life, policy, and economic systems.',
          'Freedom movements often challenged colonial domination and unequal power.'
        ],
        exam: 'Discuss how nationalism and political awareness influenced independence movements.'
      },
      'colonialism-and-change': {
        title: 'Colonialism and Change',
        summary: 'Colonial rule introduced new economic, social, and political systems that reshaped life across regions.',
        points: [
          'Land revenue, trade, and industrial changes affected rural communities.',
          'Education and political reform created new ideas of citizenship and resistance.',
          'Urbanisation and social changes produced new political awareness.'
        ],
        exam: 'Explain how colonial policies transformed economy, society, and political consciousness.'
      },
      'rise-of-nationalism-in-europe': {
        title: 'Rise of Nationalism in Europe',
        summary: 'European nationalism formed nation-based identities and changed the map of states and political loyalties.',
        points: [
          'Shared language, history, and culture contributed to national identity.',
          'Revolutions and reform strengthened demands for representation and rights.',
          'Nationalism shifted power from dynasties to nation-centred political systems.'
        ],
        exam: 'How did nationalism influence state-building and political change in Europe?' 
      },
      'freedom-struggles-and-reforms': {
        title: 'Freedom Struggles and Reforms',
        summary: 'Movements and leaders transformed political realities by linking rights, reform, and self-rule.',
        points: [
          'Leaders mobilised public opinion through campaigns and reform movements.',
          'Economic grievances and political exclusion pushed the demand for change.',
          'Reforms shaped the future constitution and democratic institutions.'
        ],
        exam: 'Analyse the role of leaders, reforms, and mass movements in democratic change.'
      }
    },
    questionBank: {
      'nationalism-and-modernisation': [
        { q: 'Which factor most strongly contributed to nationalism?', options: ['Shared history and identity', 'Only military power', 'Foreign trade only', 'Urban roads'], answer: 0 },
        { q: 'Nationalism usually promotes:', options: ['Collective identity and political unity', 'Only personal preference', 'No reform', 'Foreign influence'], answer: 0 },
        { q: 'Which statement is correct about modernisation?', options: ['It changes social and economic systems', 'It stops all reforms', 'It removes all conflict', 'It is unrelated to politics'], answer: 0 },
        { q: 'Why did educated citizens support nationalism?', options: ['They wanted rights and self-rule', 'They wanted no change', 'They disliked all societies', 'They hated culture'], answer: 0 },
        { q: 'A nation is usually linked by:', options: ['Common identity and political belonging', 'Only one religion', 'No history', 'Short-term trade'], answer: 0 },
        { q: 'Which is an impact of nationalism?', options: ['Formation of political movements', 'Increased silence', 'No social change', 'Reduced rights'], answer: 0 },
        { q: 'Nationalism often challenges:', options: ['Colonial and authoritarian rule', 'Only textbooks', 'Only family traditions', 'Only weather'], answer: 0 },
        { q: 'The idea of citizenship is linked to:', options: ['Rights and participation', 'Only taxes', 'Only marriage', 'Only geography'], answer: 0 },
        { q: 'Modernisation tends to affect:', options: ['Society, economy, and politics', 'Only sport', 'Only food', 'Only music'], answer: 0 },
        { q: 'A major purpose of national movements was to:', options: ['Create political change and independence', 'Reduce all speech', 'Ignore society', 'Stop education'], answer: 0 }
      ],
      'colonialism-and-change': [
        { q: 'Colonial rule often affected:', options: ['Land use and taxation', 'Only weather', 'Only cinema', 'Only clothing'], answer: 0 },
        { q: 'Which was an outcome of colonial control?', options: ['New political awareness', 'No social change', 'No cities', 'No schools'], answer: 0 },
        { q: 'What changed due to industrial and trade policies?', options: ['Labour systems and urban life', 'Only games', 'Only languages', 'Only holidays'], answer: 0 },
        { q: 'Education under colonialism often led to:', options: ['Criticism of exploitation', 'No awareness', 'No changes', 'No political thought'], answer: 0 },
        { q: 'A major impact of colonialism was:', options: ['Inequality and social transformation', 'No economy', 'No population', 'No politics'], answer: 0 },
        { q: 'Land revenue systems often:', options: ['Affected village economies', 'Stopped migration', 'Cancelled history', 'Removed all rights'], answer: 0 },
        { q: 'Urbanisation under colonial rule increased:', options: ['Industrial and civic change', 'Silence', 'No labour', 'No schools'], answer: 0 },
        { q: 'National movements gained strength due to:', options: ['Political awareness', 'Only old maps', 'Only travel', 'No reason'], answer: 0 },
        { q: 'Colonialism usually created:', options: ['Conflict and reform ideas', 'No social debates', 'No identity', 'No education'], answer: 0 },
        { q: 'The social impact of colonialism included:', options: ['New class and political tensions', 'No people', 'No laws', 'No communities'], answer: 0 }
      ]
    },
    previousYears: [],
    verifiedQuestionBank: {
      'bricks-beads-bones': [
        {
          q: 'What is the approximate date range of the Mature Harappan phase?',
          options: ['2600-1900 BCE', '600-300 BCE', '1500-1000 CE', '1900-1600 CE'],
          answer: 0,
          explanation: 'The Mature Harappan phase is generally dated to about 2600-1900 BCE.'
        },
        {
          q: 'In which Harappan city was the Great Bath found?',
          options: ['Harappa', 'Mohenjo-daro', 'Lothal', 'Kalibangan'],
          answer: 1,
          explanation: 'The Great Bath is a major structure excavated at Mohenjo-daro.'
        },
        {
          q: 'What proportion was commonly used for the length, width, and height of Harappan bricks?',
          options: ['1:2:4', '1:1:2', '2:3:5', '2:4:8'],
          answer: 0,
          explanation: 'Many Harappan bricks followed a standard proportion of 1:2:4.'
        },
        {
          q: 'What is the present scholarly status of the Harappan script?',
          options: ['It has been fully translated', 'It remains undeciphered', 'It is written in Greek', 'It was used only after 1000 CE'],
          answer: 1,
          explanation: 'The script has not been deciphered, so its inscriptions cannot yet be read with certainty.'
        },
        {
          q: 'Which site is especially known for its large reservoirs and water-management system?',
          options: ['Dholavira', 'Sanchi', 'Pataliputra', 'Taxila'],
          answer: 0,
          explanation: 'Dholavira is notable for its reservoirs and carefully managed water supply.'
        },
        {
          q: 'What name in Mesopotamian texts is commonly associated with the Harappan region?',
          options: ['Magadha', 'Meluhha', 'Kalinga', 'Avanti'],
          answer: 1,
          explanation: 'Mesopotamian texts refer to a trading region called Meluhha, commonly associated with the Indus region.'
        },
        {
          q: 'What did traces of nickel in Omani copper and some Harappan objects suggest?',
          options: ['Contact between Oman and Harappan communities', 'That both objects were made in Rome', 'That copper was unknown to Harappans', 'That the sites belonged to the same city'],
          answer: 0,
          explanation: 'The shared traces were cited as evidence of contact and exchange between Oman and Harappan communities.'
        },
        {
          q: 'Which feature was common in the planning of major Harappan settlements?',
          options: ['Covered drains connected to streets', 'Stone theatres in every house', 'Iron railway lines', 'Large stone pyramids'],
          answer: 0,
          explanation: 'Excavated settlements show planned streets and drainage systems, including covered drains.'
        },
        {
          q: 'Which material was used for many Harappan seals?',
          options: ['Steatite', 'Porcelain', 'Aluminium', 'Paper'],
          answer: 0,
          explanation: 'Many seals were made from steatite and bear animal motifs and short inscriptions.'
        },
        {
          q: 'Which statement about Harappan weights is supported by archaeological finds?',
          options: ['They were standardised, often cubical weights', 'They were all made from iron coins', 'They were used only as jewellery', 'They had no common system'],
          answer: 0,
          explanation: 'Standardised cubical weights indicate a shared system of measurement.'
        }
      ],
      'kings-farmers-towns': [
        { q: 'Which region became an important centre of early state formation because of fertile land and access to waterways?', options: ['Magadha in the Ganga valley', 'The Thar desert', 'The Deccan coast only', 'The Himalayan passes'], answer: 0, explanation: 'Magadha grew powerful in the middle Ganga valley, with fertile agriculture and useful resources.' },
        { q: 'What were mahajanapadas?', options: ['Large territorial states', 'Buddhist monasteries', 'Guilds of merchants', 'Stone temples'], answer: 0, explanation: 'Mahajanapadas were large states that developed in northern India in the first millennium BCE.' },
        { q: 'Which ruler is especially associated with inscriptions explaining dhamma?', options: ['Ashoka', 'Harsha', 'Samudragupta', 'Kanishka'], answer: 0, explanation: 'Ashoka used inscriptions on rocks and pillars to communicate his dhamma.' },
        { q: 'What is a prashasti?', options: ['An inscription praising a ruler', 'A tax paid by farmers', 'A Buddhist relic', 'A type of coin'], answer: 0, explanation: 'Prashastis are eulogies, often inscribed, that praise rulers and their achievements.' },
        { q: 'Who composed the Allahabad Pillar inscription praising Samudragupta?', options: ['Harisena', 'Banabhatta', 'Kalidasa', 'Megasthenes'], answer: 0, explanation: 'The court poet Harisena composed the prashasti of Samudragupta.' },
        { q: 'What were punch-marked coins?', options: ['Early coins marked with symbols', 'Clay seals for trade', 'Land-grant documents', 'Royal proclamations'], answer: 0, explanation: 'Punch-marked coins are among the earliest coins found in the subcontinent.' },
        { q: 'Why are inscriptions useful to historians?', options: ['They provide direct evidence, though they need interpretation', 'They always describe every group equally', 'They contain no political information', 'They are all written by farmers'], answer: 0, explanation: 'Inscriptions are important primary sources, but their purpose and audience must be considered.' },
        { q: 'What was one common purpose of land grants recorded in inscriptions?', options: ['Giving land or revenue rights to beneficiaries', 'Recording a sea voyage', 'Teaching arithmetic', 'Marking a city drain'], answer: 0, explanation: 'Inscriptions recorded grants of land or revenue, often to religious beneficiaries.' },
        { q: 'Ashoka’s inscriptions were written in which widely used script in much of the subcontinent?', options: ['Brahmi', 'Roman', 'Arabic', 'Devanagari'], answer: 0, explanation: 'Most Ashokan inscriptions in the subcontinent were written in Brahmi; some north-western inscriptions used other scripts.' },
        { q: 'Which sources can help historians study early towns and trade?', options: ['Archaeological finds, coins, and inscriptions', 'Only modern maps', 'Only royal stories', 'Only weather reports'], answer: 0, explanation: 'Material remains, coins, and inscriptions each provide evidence about towns, exchange, and political authority.' }
      ],
      'kinship-caste-class': [
        { q: 'What does patriliny mean?', options: ['Tracing descent through the male line', 'Tracing descent through the female line only', 'Choosing rulers by election', 'Living only in monasteries'], answer: 0, explanation: 'Patriliny traces descent and often inheritance through the male line.' },
        { q: 'What was the usual Brahmanical rule about marriage within the same gotra?', options: ['It was generally prohibited', 'It was required for every marriage', 'It was limited to rulers', 'It had no relation to kinship'], answer: 0, explanation: 'Gotra exogamy generally required marriage outside one’s gotra.' },
        { q: 'What kind of source is the Manusmriti?', options: ['A text prescribing social norms', 'A census of every ancient village', 'A Greek travel account', 'A Buddhist stupa inscription'], answer: 0, explanation: 'The Manusmriti sets out Brahmanical ideals and prescriptions, which should not be treated as a complete picture of lived practice.' },
        { q: 'How did the Mahabharata critical edition project help historians?', options: ['It compared manuscripts to establish a common text', 'It translated every inscription', 'It excavated Harappan drains', 'It counted medieval land taxes'], answer: 0, explanation: 'Researchers compared many manuscripts to prepare a critical edition of the Mahabharata.' },
        { q: 'Which example in the Mahabharata challenges the ideal of patrilineal marriage?', options: ['Draupadi’s marriage to the five Pandavas', 'Ashoka’s dhamma', 'The building of a stupa', 'A land grant to a Brahmana'], answer: 0, explanation: 'Draupadi’s marriage to five brothers is an example of a practice that did not fit the usual norm.' },
        { q: 'How many varnas appear in the fourfold Brahmanical classification?', options: ['Four', 'Three', 'Five', 'Seven'], answer: 0, explanation: 'The four varnas are Brahmanas, Kshatriyas, Vaishyas, and Shudras.' },
        { q: 'Which group was placed outside the four-varna order in many Brahmanical texts?', options: ['Chandalas', 'Kshatriyas', 'Vaishyas', 'Brahmanas'], answer: 0, explanation: 'Chandalas were treated as outside the four-varna order in Brahmanical prescriptions.' },
        { q: 'Why should historians distinguish social rules from social practice?', options: ['Prescriptive texts describe ideals, not necessarily everyday reality', 'Rules always describe every person accurately', 'Practices never changed', 'Texts contain no social ideas'], answer: 0, explanation: 'Prescriptive sources show what authors wanted people to do, not automatically what everyone did.' },
        { q: 'What was a key feature of caste (jati) organisation?', options: ['Social groups with distinct rules and occupations', 'A single political dynasty', 'A Buddhist council', 'A tax-free village'], answer: 0, explanation: 'Jatis were social groups associated with particular rules, status, and often occupations.' },
        { q: 'What does endogamy mean?', options: ['Marriage within a social group', 'Marriage outside a social group', 'Descent through the father', 'A gift of land'], answer: 0, explanation: 'Endogamy means marriage within a defined group; it differs from gotra exogamy.' }
      ],
      'thinkers-beliefs-buildings': [
        { q: 'What is a stupa primarily associated with?', options: ['Relics and Buddhist worship', 'Harappan copper trade', 'Mughal court chronicles', 'Colonial railways'], answer: 0, explanation: 'Stupas were built to enshrine relics and became important Buddhist sacred sites.' },
        { q: 'Which Mauryan ruler is closely associated with the spread of Buddhist ideas and the building of stupas?', options: ['Ashoka', 'Chandragupta II', 'Samudragupta', 'Pushyamitra'], answer: 0, explanation: 'Ashoka supported Buddhist institutions and is associated with the enlargement or building of stupas.' },
        { q: 'What does the Buddhist term Sangha refer to?', options: ['The community of monks and nuns', 'A royal tax office', 'A merchant ship', 'A Vedic fire altar'], answer: 0, explanation: 'The Sangha was the monastic community of Buddhist monks and nuns.' },
        { q: 'Which teaching is central to the Buddha’s first sermon?', options: ['The Four Noble Truths', 'The four varnas', 'The doctrine of divine kingship', 'The theory of two-nationhood'], answer: 0, explanation: 'The Four Noble Truths explain suffering, its cause, its cessation, and the path to its cessation.' },
        { q: 'Which figure is regarded in Jain tradition as the twenty-fourth tirthankara?', options: ['Mahavira', 'Ashoka', 'Nagarjuna', 'Kabir'], answer: 0, explanation: 'Mahavira is regarded as the twenty-fourth tirthankara in Jain tradition.' },
        { q: 'What idea is associated with the Ajivika teacher Makkhali Gosala?', options: ['Niyati or destiny', 'The Four Noble Truths', 'The middle path', 'Bhakti to Vishnu'], answer: 0, explanation: 'Ajivika teachings are associated with niyati, or the idea of an inexorable destiny.' },
        { q: 'What do the Upanishads discuss?', options: ['Philosophical ideas about the self and ultimate reality', 'Only military campaigns', 'Only trade routes', 'Only temple taxation'], answer: 0, explanation: 'The Upanishads explore philosophical questions, including the self (atman) and ultimate reality (brahman).' },
        { q: 'What is the torana at a Buddhist stupa?', options: ['An ornamental gateway', 'A relic casket', 'A monastery kitchen', 'A pillar inscription'], answer: 0, explanation: 'A torana is a gateway, often elaborately carved, leading into a stupa enclosure.' },
        { q: 'Why are sculptures on early stupas useful historical sources?', options: ['They show stories, symbols, and aspects of religious life', 'They provide exact population censuses', 'They record every royal law', 'They are modern photographs'], answer: 0, explanation: 'Sculptural panels preserve visual narratives and clues to religious practices and society.' },
        { q: 'Which site is especially famous for its Buddhist stupa complex?', options: ['Sanchi', 'Lothal', 'Dholavira', 'Pataliputra only'], answer: 0, explanation: 'Sanchi is renowned for its Buddhist stupas and gateways.' }
      ]
    }
  },
  geography: {
    name: 'Geography',
    tagline: 'Human interaction with land, resources, and distribution.',
    cover: 'geography',
    pyqSource: 'https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/GEOGRAPHY.zip',
    books: ['Fundamentals of Human Geography', 'India: People and Economy', 'Practical Work in Geography Part II'],
    bookFiles: ['geo1.pdf', 'geo2.pdf', 'geo3.pdf'],
    chapters: [
      { id: 'human-geography-nature-scope', name: 'Human Geography: Nature and Scope', bookIndex: 0 },
      { id: 'world-population', name: 'The World Population: Distribution, Density and Growth', bookIndex: 0 },
      { id: 'human-development', name: 'Human Development', bookIndex: 0 },
      { id: 'primary-activities', name: 'Primary Activities', bookIndex: 0 },
      { id: 'secondary-activities', name: 'Secondary Activities', bookIndex: 0 },
      { id: 'tertiary-quaternary-activities', name: 'Tertiary and Quaternary Activities', bookIndex: 0 },
      { id: 'transport-communication-world', name: 'Transport and Communication', bookIndex: 0 },
      { id: 'international-trade-world', name: 'International Trade', bookIndex: 0 },
      { id: 'population-india', name: 'Population: Distribution, Density, Growth and Composition', bookIndex: 1 },
      { id: 'human-settlements', name: 'Human Settlements', bookIndex: 1 },
      { id: 'land-resources-agriculture', name: 'Land Resources and Agriculture', bookIndex: 1 },
      { id: 'water-resources', name: 'Water Resources', bookIndex: 1 },
      { id: 'mineral-energy-resources', name: 'Mineral and Energy Resources', bookIndex: 1 },
      { id: 'planning-sustainable-development', name: 'Planning and Sustainable Development in Indian Context', bookIndex: 1 },
      { id: 'transport-communication-india', name: 'Transport and Communication', bookIndex: 1 },
      { id: 'international-trade-india', name: 'International Trade', bookIndex: 1 },
      { id: 'selected-issues-problems', name: 'Geographical Perspective on Selected Issues and Problems', bookIndex: 1 },
      { id: 'data-source-compilation', name: 'Data: Its Source and Compilation', bookIndex: 2 },
      { id: 'data-processing', name: 'Data Processing', bookIndex: 2 },
      { id: 'graphical-representation-data', name: 'Graphical Representation of Data', bookIndex: 2 },
      { id: 'computer-data-processing-mapping', name: 'Use of Computer in Data Processing and Mapping', bookIndex: 2 },
      { id: 'field-surveys', name: 'Field Surveys', bookIndex: 2 },
      { id: 'spatial-information-technology', name: 'Spatial Information Technology', bookIndex: 2 }
    ],
    noteContent: {
      'human-geography': {
        title: 'Human Geography',
        summary: 'Human geography studies how people adapt to and modify their environment.',
        points: [
          'People organise economic activity according to climate and location.',
          'Land use patterns depend on technology, resources, and infrastructure.',
          'Settlement, occupation, and environment are strongly linked.'
        ],
        exam: 'Analyse the relationship between human activity and physical environment.'
      },
      'population-and-distribution': {
        title: 'Population and Distribution',
        summary: 'Population distribution depends on factors such as climate, soil, water, and economic opportunities.',
        points: [
          'Dense population is often found in fertile plains and urban hubs.',
          'Migration reshapes demand for housing, jobs, and services.',
          'Population patterns reflect both natural and human factors.'
        ],
        exam: 'How do physical and economic factors influence population distribution?' 
      },
      'resource-use': {
        title: 'Resource Use',
        summary: 'Resources are unevenly distributed and must be used sustainably for development.',
        points: [
          'Availability of water, land, and minerals affects economic growth.',
          'Sustainable use reduces waste and long-term damage.',
          'Resource planning supports balanced development.'
        ],
        exam: 'Discuss the importance of resource planning and sustainable development.'
      },
      'migration-and-urbanisation': {
        title: 'Migration and Urbanisation',
        summary: 'Urbanisation is caused by migration toward better jobs, services, and opportunity.',
        points: [
          'Migration responds to push and pull factors.',
          'Cities expand because of economic concentration.',
          'Urban growth raises both opportunities and challenges.'
        ],
        exam: 'Explain how migration and urbanisation influence regional development.'
      }
    },
    questionBank: {
      'human-geography': [
        { q: 'Human geography mainly studies:', options: ['People and their relation to environment', 'Only rocks', 'Only rivers', 'Only weather'], answer: 0 },
        { q: 'Which factor affects land use?', options: ['Climate and technology', 'Only moon phases', 'Only songs', 'Only holidays'], answer: 0 },
        { q: 'Settlements are influenced by:', options: ['Resources and location', 'Only traffic lights', 'Only games', 'Only walls'], answer: 0 },
        { q: 'The environment influences:', options: ['Economic activity and settlement', 'Only colors', 'Only sound', 'Only books'], answer: 0 },
        { q: 'Human geography is about:', options: ['Spatial interaction', 'Only weather maps', 'Only music', 'Only penning'], answer: 0 },
        { q: 'A major element in geography is:', options: ['Resource distribution', 'Only travel time', 'Only sketching', 'Only seating'], answer: 0 },
        { q: 'Physical geography and human geography are:', options: ['Closely linked', 'Completely separate', 'Unrelated', 'Only theoretical'], answer: 0 },
        { q: 'Land use decisions depend on:', options: ['Available resources and needs', 'Only history marks', 'Only school fees', 'Only festivals'], answer: 0 },
        { q: 'People modify environment through:', options: ['Technology and settlement', 'Only silence', 'Only entertainment', 'Only sleep'], answer: 0 },
        { q: 'Spatial distribution concerns:', options: ['How people and resources are spread', 'Only handwriting', 'Only cooking', 'Only travel'], answer: 0 }
      ],
      'population-and-distribution': [
        { q: 'Dense population is often found near:', options: ['Fertile plains and cities', 'Deserts only', 'High mountains only', 'Only forests'], answer: 0 },
        { q: 'Migration is influenced by:', options: ['Pull and push factors', 'Only weather', 'Only hobbies', 'Only stores'], answer: 0 },
        { q: 'Population distribution is usually:', options: ['Uneven', 'Always equal', 'Only on one coast', 'Only in cities'], answer: 0 },
        { q: 'Urban growth occurs because of:', options: ['Jobs and services', 'No need for roads', 'No people needed', 'No business'], answer: 0 },
        { q: 'A resource-rich region often attracts:', options: ['Settlers and industries', 'No one', 'Only night', 'Only animals'], answer: 0 },
        { q: 'Which factor can reduce population density?', options: ['Harsh climate', 'Only festivals', 'Only colours', 'Only clothes'], answer: 0 },
        { q: 'Migration affects:', options: ['Both origin and destination areas', 'Only one shop', 'Only one river', 'Only one road'], answer: 0 },
        { q: 'Urbanisation is mainly linked to:', options: ['Economic opportunities', 'No economy', 'No roads', 'No schools'], answer: 0 },
        { q: 'Why do people move to cities?', options: ['For jobs and services', 'Only to sleep', 'Only to play', 'Only to eat'], answer: 0 },
        { q: 'A key issue in geography is:', options: ['How population is placed across space', 'Only directions', 'Only weather forecasts', 'Only data entry'], answer: 0 }
      ]
    },
    previousYears: []
  },
  politics: {
    name: 'Political Science',
    tagline: 'Democracy, institutions, rights, and state-building.',
    cover: 'politics',
    pyqSource: 'https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/POLITICAL_SCIENCE.zip',
    books: ['Contemporary World Politics', 'Politics in India since Independence'],
    bookFiles: ['pol1.pdf', 'pol2.pdf'],
    chapters: [
      { id: 'cold-war-era', name: 'The Cold War Era', bookIndex: 0 },
      { id: 'end-bipolarity', name: 'The End of Bipolarity', bookIndex: 0 },
      { id: 'us-hegemony-world-politics', name: 'US Hegemony in World Politics', bookIndex: 0 },
      { id: 'alternative-centres-power', name: 'Alternative Centres of Power', bookIndex: 0 },
      { id: 'contemporary-south-asia', name: 'Contemporary South Asia', bookIndex: 0 },
      { id: 'international-organisations', name: 'International Organisations', bookIndex: 0 },
      { id: 'security-contemporary-world', name: 'Security in the Contemporary World', bookIndex: 0 },
      { id: 'environment-natural-resources', name: 'Environment and Natural Resources', bookIndex: 0 },
      { id: 'globalisation', name: 'Globalisation', bookIndex: 0 },
      { id: 'challenges-nation-building', name: 'Challenges of Nation Building', bookIndex: 1 },
      { id: 'one-party-dominance', name: 'Era of One-party Dominance', bookIndex: 1 },
      { id: 'planned-development', name: 'Politics of Planned Development', bookIndex: 1 },
      { id: 'indias-external-relations', name: "India's External Relations", bookIndex: 1 },
      { id: 'congress-system', name: 'Challenges to and Restoration of the Congress System', bookIndex: 1 },
      { id: 'democratic-order-crisis', name: 'The Crisis of Democratic Order', bookIndex: 1 },
      { id: 'popular-movements', name: 'Rise of Popular Movements', bookIndex: 1 },
      { id: 'regional-aspirations', name: 'Regional Aspirations', bookIndex: 1 },
      { id: 'recent-political-developments', name: 'Recent Developments in Indian Politics', bookIndex: 1 }
    ],
    noteContent: {
      'democratic-state': {
        title: 'Democratic State',
        summary: 'The Indian state was built on constitutional values, representation, and democratic participation.',
        points: [
          'The Constitution established justice, liberty, equality, and fraternity.',
          'Parliamentary institutions gave political participation a formal structure.',
          'Democracy requires representation, law, and accountability.'
        ],
        exam: 'Describe how the Constitution shaped India’s democratic state.'
      },
      'rights-and-institutions': {
        title: 'Rights and Institutions',
        summary: 'Rights and institutions maintain democratic governance and enable citizen participation.',
        points: [
          'Rights protect freedom, dignity, and equality.',
          'Institutions such as Parliament, judiciary, and executive ensure balance.',
          'Democratic systems need both participation and accountability.'
        ],
        exam: 'How do rights and institutions strengthen democracy?' 
      },
      'challenges-to-democracy': {
        title: 'Challenges to Democracy',
        summary: 'Democracies face economic inequality, social differences, and political pressures that require reform.',
        points: [
          'Regional, caste, and language differences can create political tensions.',
          'Poverty and inequity test democratic inclusion and fairness.',
          'Strong institutions help manage conflict and preserve democracy.'
        ],
        exam: 'Explain major challenges faced by democracy in India.'
      },
      'federalism-and-justice': {
        title: 'Federalism and Justice',
        summary: 'Federalism and justice are central to balancing power and protecting citizens in a diverse society.',
        points: [
          'Power is divided between centre and states to manage diversity.',
          'Judicial institutions uphold the rule of law.',
          'Inclusive governance is essential for social justice.'
        ],
        exam: 'Analyse the role of federalism and justice in strengthening democracy.'
      }
    },
    questionBank: {
      'democratic-state': [
        { q: 'The Constitution gives India:', options: ['A democratic and rights-based framework', 'No structure', 'No rights', 'Only monarchy'], answer: 0 },
        { q: 'Which value is central to democracy?', options: ['Equality', 'Only silence', 'Only wealth', 'Only power'], answer: 0 },
        { q: 'The Indian state is built on:', options: ['Constitutional principles', 'Only family names', 'Only trade', 'Only ideology alone'], answer: 0 },
        { q: 'Political participation means:', options: ['Citizens take part in public life', 'No voting', 'No laws', 'No government'], answer: 0 },
        { q: 'A democracy requires:', options: ['Representation and accountability', 'Only one leader', 'No institutions', 'No debate'], answer: 0 },
        { q: 'The rule of law means:', options: ['Laws apply equally to everyone', 'Only rulers are free', 'No laws matter', 'Only courts decide everything'], answer: 0 },
        { q: 'Justice includes:', options: ['Fairness and rights', 'Only punishment', 'Only wealth', 'Only roads'], answer: 0 },
        { q: 'A state is stronger when it has:', options: ['Institutions and rights', 'Only armies', 'Only police', 'Only slogans'], answer: 0 },
        { q: 'Why are democratic institutions important?', options: ['They check power and support representation', 'They limit speech', 'They remove rights', 'They remove elections'], answer: 0 },
        { q: 'India follows a:', options: ['Parliamentary democracy', 'Monarchy system', 'Military rule', 'No constitution'], answer: 0 }
      ],
      'rights-and-institutions': [
        { q: 'Rights help citizens to:', options: ['Exercise freedom and equality', 'Stay silent', 'Avoid law', 'Avoid voting'], answer: 0 },
        { q: 'The judiciary helps by:', options: ['Checking institutions and protecting rights', 'Only collecting fees', 'Only building roads', 'Only creating games'], answer: 0 },
        { q: 'Which is a democratic institution?', options: ['Parliament', 'Private club', 'Only market', 'Only family group'], answer: 0 },
        { q: 'Why are institutions needed?', options: ['To balance power and maintain order', 'To stop all debates', 'To remove law', 'To end elections'], answer: 0 },
        { q: 'The executive is responsible for:', options: ['Implementation of policy', 'Only entertainment', 'Only journaling', 'Only sports'], answer: 0 },
        { q: 'A right protects:', options: ['Liberty and dignity', 'Only currency', 'Only roads', 'Only taxes'], answer: 0 },
        { q: 'Democratic accountability means:', options: ['Leaders answer to citizens', 'No scrutiny', 'No rights', 'No elections'], answer: 0 },
        { q: 'Effective governance depends on:', options: ['Institutional balance', 'Only slogans', 'Only loudness', 'Only wealth'], answer: 0 },
        { q: 'What strengthens constitutional democracy?', options: ['Rights and institutions', 'Only speeches', 'Only marches', 'Only laws without values'], answer: 0 },
        { q: 'The rule of law protects:', options: ['All citizens equally', 'Only officials', 'Only one community', 'Only the powerful'], answer: 0 }
      ]
    },
    previousYears: [],
    verifiedQuestionBank: {
      'cold-war-era': [
        { q: 'What best describes the Cold War?', options: ['A prolonged rivalry between the United States and the Soviet Union without a direct full-scale war between them', 'A war fought only between France and Germany', 'A conflict that began after the Soviet Union dissolved', 'A trade agreement between NATO and the Warsaw Pact'], answer: 0, explanation: 'The Cold War was a sustained political, military, and ideological rivalry between the two superpowers, without a direct full-scale war between them.' },
        { q: 'Which two powers led the opposing blocs during the Cold War?', options: ['United States and Soviet Union', 'China and Japan', 'Britain and France', 'India and Indonesia'], answer: 0, explanation: 'The United States and the Soviet Union emerged as the two superpowers after the Second World War.' },
        { q: 'What does the term bipolarity refer to in Cold War politics?', options: ['The concentration of power around two rival superpowers', 'A system with no powerful states', 'A union of all European countries', 'A division between rural and urban regions'], answer: 0, explanation: 'Bipolarity describes an international system dominated by two major centres of power.' },
        { q: 'Which alliance was formed in 1949 under United States leadership?', options: ['NATO', 'Warsaw Pact', 'Non-Aligned Movement', 'ASEAN'], answer: 0, explanation: 'The North Atlantic Treaty Organization (NATO) was established in 1949.' },
        { q: 'Which event brought the United States and Soviet Union close to nuclear conflict in 1962?', options: ['Cuban Missile Crisis', 'Suez Crisis', 'Berlin Blockade', 'Korean Armistice'], answer: 0, explanation: 'The Cuban Missile Crisis followed the discovery of Soviet missiles in Cuba and brought the superpowers close to confrontation.' },
        { q: 'What was the main purpose of the Non-Aligned Movement?', options: ['To avoid formal alignment with either Cold War bloc', 'To join NATO as a single country', 'To restore European colonial empires', 'To form a military alliance with the Soviet Union'], answer: 0, explanation: 'Non-alignment sought independent foreign policies rather than formal membership in either superpower bloc.' },
        { q: 'Where was the first Non-Aligned Summit held in 1961?', options: ['Belgrade', 'Havana', 'Moscow', 'Washington'], answer: 0, explanation: 'The first Non-Aligned Summit took place in Belgrade in 1961.' },
        { q: 'Which pair were prominent early leaders associated with non-alignment?', options: ['Jawaharlal Nehru and Josip Broz Tito', 'Winston Churchill and Charles de Gaulle', 'Harry Truman and Dwight Eisenhower', 'Mao Zedong and Chiang Kai-shek'], answer: 0, explanation: 'Nehru and Tito, alongside leaders such as Nasser, Sukarno, and Nkrumah, were associated with the movement.' },
        { q: 'Why did the superpowers build large nuclear arsenals?', options: ['To deter attack and strengthen strategic influence', 'To abolish all military alliances', 'To end competition for influence', 'To replace diplomacy with trade'], answer: 0, explanation: 'Nuclear weapons became central to deterrence and the strategic rivalry between the superpowers.' },
        { q: 'Which statement about non-alignment is most accurate?', options: ['It supported independent judgement on international issues', 'It required countries to remain neutral on every issue', 'It was a military alliance against both blocs', 'It prohibited countries from having diplomatic relations'], answer: 0, explanation: 'Non-alignment was not automatic neutrality; it aimed to preserve independent decision-making.' }
      ]
    }
  },
  economics: {
    name: 'Economics',
    tagline: 'Income, output, employment, and inflation.',
    cover: 'economics',
    pyqSource: 'https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/ECONOMICS.zip',
    books: ['Introductory Macroeconomics', 'Indian Economic Development'],
    bookFiles: ['eco1.pdf', 'eco2.pdf'],
    chapters: [
      { id: 'introduction-macroeconomics', name: 'Introduction', bookIndex: 0 },
      { id: 'national-income-accounting', name: 'National Income Accounting', bookIndex: 0 },
      { id: 'money-banking', name: 'Money and Banking', bookIndex: 0 },
      { id: 'determination-income-employment', name: 'Determination of Income and Employment', bookIndex: 0 },
      { id: 'government-budget-economy', name: 'Government Budget and the Economy', bookIndex: 0 },
      { id: 'open-economy-macroeconomics', name: 'Open Economy Macroeconomics', bookIndex: 0 },
      { id: 'eve-independence', name: 'Indian Economy on the Eve of Independence', bookIndex: 1 },
      { id: 'indian-economy-1950-1990', name: 'Indian Economy 1950-1990', bookIndex: 1 },
      { id: 'liberalisation-privatisation-globalisation', name: 'Liberalisation, Privatisation and Globalisation: An Appraisal', bookIndex: 1 },
      { id: 'human-capital-formation', name: 'Human Capital Formation in India', bookIndex: 1 },
      { id: 'rural-development', name: 'Rural Development', bookIndex: 1 },
      { id: 'employment-growth-informalisation', name: 'Employment: Growth, Informalisation and Other Issues', bookIndex: 1 },
      { id: 'environment-sustainable-development', name: 'Environment and Sustainable Development', bookIndex: 1 },
      { id: 'comparative-development-neighbours', name: 'Comparative Development Experiences of India and its Neighbours', bookIndex: 1 }
    ],
    noteContent: {
      'national-income': {
        title: 'National Income',
        summary: 'National income measures the total value of goods and services produced in an economy over time.',
        points: [
          'GDP and GNP are key indicators of economic performance.',
          'Income generation is linked to production and consumption.',
          'Macroeconomic data helps assess growth and welfare.'
        ],
        exam: 'Explain the meaning and importance of national income in macroeconomics.'
      },
      'employment-and-inflation': {
        title: 'Employment and Inflation',
        summary: 'Employment and inflation shape the stability and purchasing power of the economy.',
        points: [
          'High employment increases income and demand.',
          'Inflation reduces purchasing power and household welfare.',
          'Balanced policy is required to control instability.'
        ],
        exam: 'How do employment and inflation affect economic stability?' 
      },
      'government-budget': {
        title: 'Government Budget',
        summary: 'A budget channels public expenditure and revenue to influence development and welfare.',
        points: [
          'Revenue and expenditure are planned to meet public goals.',
          'Budgets support infrastructure, education, and health.',
          'Fiscal policy can stimulate or restrain the economy.'
        ],
        exam: 'Explain the role of the government budget in economic development.'
      },
      'money-and-banking': {
        title: 'Money and Banking',
        summary: 'Money and banking enable transactions, savings, investment, and credit in the economy.',
        points: [
          'Money acts as a medium of exchange and store of value.',
          'Banks mobilise savings and provide credit.',
          'Monetary policy influences inflation and growth.'
        ],
        exam: 'Analyse the role of banks and money in economic activity.'
      }
    },
    questionBank: {
      'national-income': [
        { q: 'National income measures:', options: ['Value of final goods and services', 'Only taxes', 'Only exports', 'Only wages'], answer: 0 },
        { q: 'GDP indicates:', options: ['Total output in an economy', 'Only government spending', 'Only debt level', 'Only inflation'], answer: 0 },
        { q: 'Why is national income important?', options: ['It shows economic performance', 'It stops all trade', 'It removes growth', 'It removes business'], answer: 0 },
        { q: 'Income is generated by:', options: ['Production and supply', 'Only savings', 'Only school fees', 'Only weather'], answer: 0 },
        { q: 'Macroeconomics studies:', options: ['Overall economy', 'Only one family', 'Only one person', 'Only one trade route'], answer: 0 },
        { q: 'A rise in output usually means:', options: ['Higher income and growth', 'Lower growth', 'No change', 'No economy'], answer: 0 },
        { q: 'Consumption depends on:', options: ['Income and demand', 'Only roads', 'Only language', 'Only fashion'], answer: 0 },
        { q: 'National income is used for:', options: ['Policy planning and comparison', 'Only cooking', 'Only religion', 'Only traffic'], answer: 0 },
        { q: 'Production and distribution are linked by:', options: ['Income flow', 'Only seasons', 'Only sports', 'Only music'], answer: 0 },
        { q: 'A major macroeconomic objective is:', options: ['Growth with stability', 'No output', 'No taxes', 'No spending'], answer: 0 }
      ],
      'employment-and-inflation': [
        { q: 'Inflation reduces:', options: ['Purchasing power', 'All budgets', 'Only roads', 'Only libraries'], answer: 0 },
        { q: 'Employment is linked to:', options: ['Production and investment', 'Only weather', 'Only travel', 'Only books'], answer: 0 },
        { q: 'A high unemployment rate can cause:', options: ['Reduced income and demand', 'More savings only', 'No problem', 'Only happiness'], answer: 0 },
        { q: 'What does inflation measure?', options: ['General rise in prices', 'Only retail profit', 'Only salary rise', 'Only roads'], answer: 0 },
        { q: 'Which is a macroeconomic concern?', options: ['Price stability', 'Only city maps', 'Only sports results', 'Only music'], answer: 0 },
        { q: 'Higher wages may raise:', options: ['Demand and costs', 'Only silence', 'Only schools', 'Only politics'], answer: 0 },
        { q: 'A balanced economy needs:', options: ['Employment and controlled inflation', 'No exports', 'No imports', 'No taxes'], answer: 0 },
        { q: 'Public policy often tries to:', options: ['Reduce unemployment and inflation', 'Ignore all problems', 'Stop growth', 'Remove money'], answer: 0 },
        { q: 'Price rise usually affects:', options: ['Consumers and households', 'Only forests', 'Only textbooks', 'Only roads'], answer: 0 },
        { q: 'Stable income supports:', options: ['Economic confidence', 'No investment', 'No values', 'No markets'], answer: 0 }
      ]
    },
    previousYears: []
  },
  hindi: {
    name: 'Hindi',
    tagline: 'Hindi Core and supplementary readers.',
    cover: 'hindi',
    pyqSource: 'https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/HINDI_CORE.zip',
    books: ['Aroh, Part 2 (Hindi Core)', 'Vitan, Part 2 (Hindi Supplementary Reader)'],
    bookFiles: ['aroh.pdf', 'vitan.pdf'],
    chapters: [
      { id: 'aatmaparichay-ek-geet', name: 'आत्मपरिचय, एक गीत', bookIndex: 0 },
      { id: 'patang', name: 'पतंग', bookIndex: 0 },
      { id: 'kavita-ke-bahane-baat-seedhi', name: 'कविता के बहाने, बात सीधी थी पर', bookIndex: 0 },
      { id: 'camera-mein-band-apahij', name: 'कैमरे में बंद अपाहिज', bookIndex: 0 },
      { id: 'usha', name: 'उषा', bookIndex: 0 },
      { id: 'badal-rag', name: 'बादल राग', bookIndex: 0 },
      { id: 'kavitavali-lakshman-murchha', name: 'कवितावली, लक्ष्मण-मूर्छा और राम का विलाप', bookIndex: 0 },
      { id: 'rubaiyan', name: 'रुबाइयाँ', bookIndex: 0 },
      { id: 'chhota-mera-khet-bagule', name: 'छोटा मेरा खेत, बगुलों के पंख', bookIndex: 0 },
      { id: 'bhaktin', name: 'भक्तिन', bookIndex: 0 },
      { id: 'bazaar-darshan', name: 'बाज़ार दर्शन', bookIndex: 0 },
      { id: 'kale-megha-pani-de', name: 'काले मेघा पानी दे', bookIndex: 0 },
      { id: 'pehalwan-ki-dholak', name: 'पहलवान की ढोलक', bookIndex: 0 },
      { id: 'shirish-ke-phool', name: 'शिरीष के फूल', bookIndex: 0 },
      { id: 'shram-vibhajan-jati-pratha', name: 'श्रम विभाजन और जाति-प्रथा, मेरी कल्पना का आदर्श समाज', bookIndex: 0 },
      { id: 'silver-wedding', name: 'सिल्वर वैडिंग', bookIndex: 1 },
      { id: 'joojh', name: 'जूझ', bookIndex: 1 },
      { id: 'ateet-mein-dabe-paon', name: 'अतीत में दबे पाँव', bookIndex: 1 },
      { id: 'diary-ke-panne', name: 'डायरी के पन्ने', bookIndex: 1 }
    ],
    noteContent: {},
    questionBank: {},
    previousYears: []
  },
  english: {
    name: 'English',
    tagline: 'English Core and supplementary readers.',
    cover: 'english',
    pyqSource: 'https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/ENGLISH_CORE.zip',
    books: ['Flamingo (English Core)', 'Vistas (English Supplementary Reader)'],
    bookFiles: ['flamingo.pdf', 'vistas.pdf'],
    chapters: [
      { id: 'last-lesson', name: 'The Last Lesson', bookIndex: 0 },
      { id: 'lost-spring', name: 'Lost Spring', bookIndex: 0 },
      { id: 'deep-water', name: 'Deep Water', bookIndex: 0 },
      { id: 'rattrap', name: 'The Rattrap', bookIndex: 0 },
      { id: 'indigo', name: 'Indigo', bookIndex: 0 },
      { id: 'poets-and-pancakes', name: 'Poets and Pancakes', bookIndex: 0 },
      { id: 'interview', name: 'The Interview', bookIndex: 0 },
      { id: 'going-places', name: 'Going Places', bookIndex: 0 },
      { id: 'my-mother-at-sixty-six', name: 'My Mother at Sixty-Six', bookIndex: 0 },
      { id: 'elementary-school-classroom', name: 'An Elementary School Classroom in a Slum', bookIndex: 0 },
      { id: 'keeping-quiet', name: 'Keeping Quiet', bookIndex: 0 },
      { id: 'thing-of-beauty', name: 'A Thing of Beauty', bookIndex: 0 },
      { id: 'roadside-stand', name: 'A Roadside Stand', bookIndex: 0 },
      { id: 'aunt-jennifers-tigers', name: "Aunt Jennifer's Tigers", bookIndex: 0 },
      { id: 'third-level', name: 'The Third Level', bookIndex: 1 },
      { id: 'tiger-king', name: 'The Tiger King', bookIndex: 1 },
      { id: 'journey-end-earth', name: 'Journey to the End of the Earth', bookIndex: 1 },
      { id: 'enemy', name: 'The Enemy', bookIndex: 1 },
      { id: 'should-wizard-hit-mommy', name: 'Should Wizard Hit Mommy?', bookIndex: 1 },
      { id: 'on-face-of-it', name: 'On the Face of It', bookIndex: 1 },
      { id: 'evans-o-level', name: 'Evans Tries an O-Level', bookIndex: 1 },
      { id: 'memories-of-childhood', name: 'Memories of Childhood', bookIndex: 1 }
    ],
    noteContent: {},
    questionBank: {},
    previousYears: []
  },
  yoga: {
    name: 'Yoga',
    tagline: 'Class XII Yoga textbook and course material.',
    cover: 'yoga',
    bookOnly: true,
    books: ['Yoga Textbook for Class XII'],
    bookFiles: ['yog.pdf'],
    chapters: [],
    noteContent: {},
    questionBank: {},
    previousYears: []
  }
};

const subjectList = Object.keys(subjectCatalog).filter((key) => key !== 'sociology');

const textbookLibrary = [
  { subject: 'History', title: 'Themes in Indian History Part I', file: 'history1.pdf' },
  { subject: 'History', title: 'Themes in Indian History Part II', file: 'history2.pdf' },
  { subject: 'History', title: 'Themes in Indian History Part III', file: 'history3.pdf' },
  { subject: 'Geography', title: 'Fundamentals of Human Geography', file: 'geo1.pdf' },
  { subject: 'Geography', title: 'India: People and Economy', file: 'geo2.pdf' },
  { subject: 'Geography', title: 'Practical Work in Geography Part II', file: 'geo3.pdf' },
  { subject: 'Economics', title: 'Introductory Macroeconomics', file: 'eco1.pdf' },
  { subject: 'Economics', title: 'Indian Economic Development', file: 'eco2.pdf' },
  { subject: 'Political Science', title: 'Contemporary World Politics', file: 'pol1.pdf' },
  { subject: 'Political Science', title: 'Politics in India since Independence', file: 'pol2.pdf' },
  { subject: 'Hindi', title: 'Aroh, Part 2 (Hindi Core)', file: 'aroh.pdf' },
  { subject: 'Hindi', title: 'Vitan, Part 2 (Hindi Supplementary Reader)', file: 'vitan.pdf' },
  { subject: 'English', title: 'Flamingo (English Core)', file: 'flamingo.pdf' },
  { subject: 'English', title: 'Vistas (English Supplementary Reader)', file: 'vistas.pdf' },
  { subject: 'Yoga', title: 'Yoga Textbook for Class XII', file: 'yog.pdf' }
];
