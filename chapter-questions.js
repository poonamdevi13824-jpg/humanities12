const chapterQuestionRows = {
  hindi: {
    'aatmaparichay-ek-geet': [
      ['आत्मपरिचय और एक गीत के रचनाकार कौन हैं?', 'हरिवंश राय बच्चन', 'आलोक धन्वा', 'कुँवर नारायण', 'रघुवीर सहाय'],
      ['आत्मपरिचय किस काव्य-विधा से संबंधित रचना है?', 'कविता', 'नाटक', 'रिपोर्ताज', 'जीवनी'],
      ['इन दोनों रचनाओं में मुख्य रूप से किसकी अभिव्यक्ति है?', 'कवि के आत्मानुभव और जीवन-दृष्टि की', 'किसी युद्ध के इतिहास की', 'कृषि-व्यवस्था की', 'नगर-योजना की']
    ],
    patang: [
      ['पतंग कविता के कवि कौन हैं?', 'आलोक धन्वा', 'हरिवंश राय बच्चन', 'फिराक गोरखपुरी', 'तुलसीदास'],
      ['पतंग कविता में बच्चों का कौन-सा अनुभव प्रमुख है?', 'पतंग उड़ाने का उत्साह और खेल', 'परीक्षा का तनाव', 'दरबारी जीवन', 'समुद्री यात्रा'],
      ['पतंग का बिंब कविता में किससे जुड़ता है?', 'उड़ान, गति और बाल-उल्लास से', 'कर-वसूली से', 'कारखाने के काम से', 'न्यायालय से']
    ],
    'kavita-ke-bahane-baat-seedhi': [
      ['कविता के बहाने और बात सीधी थी पर के कवि कौन हैं?', 'कुँवर नारायण', 'रघुवीर सहाय', 'शमशेर बहादुर सिंह', 'उमाशंकर जोशी'],
      ['कविता के बहाने में कविता की किस विशेषता पर विचार है?', 'उसकी व्यापकता और कल्पनाशीलता पर', 'केवल छंद-गणना पर', 'कृषि-उत्पादन पर', 'राजनीतिक सीमाओं पर'],
      ['बात सीधी थी पर कविता किस कठिनाई की ओर संकेत करती है?', 'सीधी बात को प्रभावी ढंग से कहने की कठिनाई', 'यात्रा का खर्च', 'फसल की सिंचाई', 'ऐतिहासिक तिथियों का क्रम']
    ],
    'camera-mein-band-apahij': [
      ['कैमरे में बंद अपाहिज के कवि कौन हैं?', 'रघुवीर सहाय', 'आलोक धन्वा', 'तुलसीदास', 'फिराक गोरखपुरी'],
      ['कविता में कैमरा मुख्यतः किसका प्रतीक बनता है?', 'मीडिया की दृष्टि और प्रस्तुति का', 'खेती के औजार का', 'यातायात के साधन का', 'प्राचीन सिक्के का'],
      ['कविता किस प्रवृत्ति पर प्रश्न उठाती है?', 'दूसरे के दुख को तमाशा बनाकर दिखाने पर', 'जल-संरक्षण पर', 'भाषा-अध्ययन पर', 'ग्रामीण ऋण पर']
    ],
    usha: [
      ['उषा कविता के कवि कौन हैं?', 'शमशेर बहादुर सिंह', 'सूर्यकांत त्रिपाठी निराला', 'धर्मवीर भारती', 'जैनेंद्र कुमार'],
      ['उषा कविता में किस समय का चित्रण है?', 'भोर का', 'आधी रात का', 'दोपहर का', 'संध्या के बाद का'],
      ['कविता में रंगों और बिंबों का उपयोग किसलिए है?', 'भोर के बदलते दृश्य को उभारने के लिए', 'युद्ध का नक्शा बनाने के लिए', 'बाजार की कीमतें बताने के लिए', 'किसी पात्र की वंशावली लिखने के लिए']
    ],
    'badal-rag': [
      ['बादल राग के कवि कौन हैं?', 'सूर्यकांत त्रिपाठी निराला', 'शमशेर बहादुर सिंह', 'कुँवर नारायण', 'हरिवंश राय बच्चन'],
      ['कविता में बादल किसका प्रतीक बनते हैं?', 'नवजीवन और परिवर्तनकारी ऊर्जा का', 'स्थिर दरबारी सत्ता का', 'व्यापारिक कर का', 'परीक्षा-परिणाम का'],
      ['बादल राग में प्रकृति-चित्रण का मुख्य आधार क्या है?', 'बादलों की गति और वर्षा की संभावना', 'रेगिस्तान की खनिज-सूची', 'शहर का यातायात', 'किसी अदालत की कार्यवाही']
    ],
    'kavitavali-lakshman-murchha': [
      ['कवितावली और लक्ष्मण-मूर्छा प्रसंग के रचनाकार कौन हैं?', 'तुलसीदास', 'कबीर', 'फिराक गोरखपुरी', 'उमाशंकर जोशी'],
      ['लक्ष्मण-मूर्छा प्रसंग किस महाकाव्य-कथा से जुड़ा है?', 'रामकथा', 'महाभारत की सभा', 'बुद्ध का प्रथम उपदेश', '1857 का विद्रोह'],
      ['इन रचनाओं में किस भाव का विशेष महत्व है?', 'भक्ति और करुणा का', 'औद्योगिक उत्पादन का', 'औपनिवेशिक नगर-योजना का', 'वैज्ञानिक प्रयोग का']
    ],
    rubaiyan: [
      ['रुबाइयाँ के कवि कौन हैं?', 'फिराक गोरखपुरी', 'तुलसीदास', 'आलोक धन्वा', 'रघुवीर सहाय'],
      ['रुबाई सामान्यतः कितनी पंक्तियों की काव्य-रचना होती है?', 'चार', 'दो', 'छह', 'आठ'],
      ['फिराक की रुबाइयों में किसका चित्रण मिलता है?', 'घरेलू जीवन और भारतीय सांस्कृतिक परिवेश का', 'मुगल राजस्व-व्यवस्था का', 'समुद्री युद्धों का', 'कारखाने की मशीनों का']
    ],
    'chhota-mera-khet-bagule': [
      ['छोटा मेरा खेत और बगुलों के पंख के कवि कौन हैं?', 'उमाशंकर जोशी', 'शमशेर बहादुर सिंह', 'हरिवंश राय बच्चन', 'रघुवीर सहाय'],
      ['छोटा मेरा खेत में खेत का बिंब किससे जुड़ता है?', 'कविता-रचना की प्रक्रिया से', 'सैनिक छावनी से', 'न्याय-व्यवस्था से', 'समुद्री व्यापार से'],
      ['बगुलों के पंख कविता में कौन-सा दृश्य उभरता है?', 'आकाश में उड़ते बगुलों का', 'रेलवे स्टेशन का', 'राजदरबार का', 'विद्यालय की सभा का']
    ],
    bhaktin: [
      ['भक्तिन की लेखिका कौन हैं?', 'महादेवी वर्मा', 'जैनेंद्र कुमार', 'धर्मवीर भारती', 'रज़िया सज्जाद ज़हीर'],
      ['भक्तिन किस गद्य-विधा के निकट है?', 'रेखाचित्र', 'वैज्ञानिक लेख', 'नाटक', 'यात्रा-वृत्तांत'],
      ['भक्तिन के चरित्र-चित्रण में किस पर ध्यान दिया गया है?', 'उसके संघर्ष, स्वभाव और जीवन-अनुभव पर', 'केवल राजवंशों पर', 'केवल युद्ध-नीति पर', 'केवल नगर-निर्माण पर']
    ],
    'bazaar-darshan': [
      ['बाज़ार दर्शन के लेखक कौन हैं?', 'जैनेंद्र कुमार', 'महादेवी वर्मा', 'ओम थानवी', 'आनंद यादव'],
      ['बाज़ार दर्शन का मुख्य विषय क्या है?', 'बाज़ार का आकर्षण और उपभोक्ता की विवेकशीलता', 'समुद्री यात्रा', 'कृषि में सिंचाई', 'प्राचीन स्थापत्य'],
      ['लेख के अनुसार बाज़ार से लाभ उठाने के लिए क्या जरूरी है?', 'अपनी आवश्यकता और उद्देश्य की स्पष्ट समझ', 'हर वस्तु खरीदना', 'दूसरों की नकल करना', 'बिना सोचे खर्च करना']
    ],
    'kale-megha-pani-de': [
      ['काले मेघा पानी दे के लेखक कौन हैं?', 'धर्मवीर भारती', 'फणीश्वरनाथ रेणु', 'हजारी प्रसाद द्विवेदी', 'विष्णु खरे'],
      ['पाठ में वर्षा से जुड़ी कौन-सी बात प्रमुख है?', 'लोक-विश्वास और बाल्य-स्मृतियाँ', 'मुगल दरबार', 'औद्योगिक श्रम', 'समुद्री व्यापार'],
      ['लेखक वर्षा के प्रसंगों से किसका चित्र देते हैं?', 'समाज और लोकजीवन का', 'केवल राजाओं की वंशावली का', 'केवल विज्ञान-प्रयोगों का', 'केवल न्यायालय का']
    ],
    'pehalwan-ki-dholak': [
      ['पहलवान की ढोलक के लेखक कौन हैं?', 'फणीश्वरनाथ रेणु', 'धर्मवीर भारती', 'जैनेंद्र कुमार', 'ओम थानवी'],
      ['पहलवान की ढोलक में किस पात्र का जीवन केंद्र में है?', 'लुट्टन पहलवान', 'यशोधर बाबू', 'आनंद यादव', 'ऐन फ्रैंक'],
      ['ढोलक की आवाज़ कहानी में किससे जुड़ती है?', 'गाँव के जीवन और लोगों के मनोबल से', 'शाही फरमान से', 'समुद्री जहाज से', 'विद्यालय की घंटी से']
    ],
    'shirish-ke-phool': [
      ['शिरीष के फूल के लेखक कौन हैं?', 'हजारी प्रसाद द्विवेदी', 'फणीश्वरनाथ रेणु', 'जैनेंद्र कुमार', 'विष्णु खरे'],
      ['शिरीष के फूल किस गद्य-विधा का उदाहरण है?', 'ललित निबंध', 'उपन्यास-अंश', 'नाटक', 'डायरी'],
      ['शिरीष के वृक्ष के माध्यम से कौन-सा गुण उभरता है?', 'विपरीत परिस्थितियों में सहजता और जीवट', 'केवल धन-संचय', 'सैनिक अनुशासन', 'औद्योगिक प्रतिस्पर्धा']
    ],
    'shram-vibhajan-jati-pratha': [
      ['श्रम विभाजन और जाति-प्रथा के लेखक कौन हैं?', 'डॉ. भीमराव आंबेडकर', 'जवाहरलाल नेहरू', 'हजारी प्रसाद द्विवेदी', 'ओम थानवी'],
      ['लेखक जाति-व्यवस्था की किस बात की आलोचना करते हैं?', 'जन्म के आधार पर काम और सामाजिक दर्जा तय करने की', 'सभी को समान अवसर देने की', 'शिक्षा के प्रसार की', 'लोकतांत्रिक भागीदारी की'],
      ['मेरी कल्पना का आदर्श समाज किस मूल्य पर बल देता है?', 'स्वतंत्रता, समानता और बंधुता', 'वंशानुगत विशेषाधिकार', 'अलगाव और असमानता', 'केवल आर्थिक लाभ']
    ],
    'silver-wedding': [
      ['सिल्वर वैडिंग के लेखक कौन हैं?', 'मनोहर श्याम जोशी', 'आनंद यादव', 'ओम थानवी', 'ऐन फ्रैंक'],
      ['कहानी का प्रमुख पात्र कौन है?', 'यशोधर बाबू', 'लुट्टन पहलवान', 'चार्ली चैप्लिन', 'डॉ. सदाओ'],
      ['कहानी में मुख्य टकराव किससे जुड़ा है?', 'पीढ़ियों के बदलते जीवन-मूल्यों से', 'मुगल उत्तराधिकार से', 'समुद्री व्यापार से', 'किसान आंदोलन से']
    ],
    joojh: [
      ['जूझ के लेखक कौन हैं?', 'आनंद यादव', 'मनोहर श्याम जोशी', 'ओम थानवी', 'जैनेंद्र कुमार'],
      ['जूझ किस प्रकार की रचना है?', 'आत्मकथात्मक अंश', 'ऐतिहासिक नाटक', 'वैज्ञानिक लेख', 'यात्रा-कविता'],
      ['पाठ में लेखक का संघर्ष मुख्यतः किसके लिए है?', 'शिक्षा पाने और आगे बढ़ने के लिए', 'राजसिंहासन पाने के लिए', 'समुद्री यात्रा करने के लिए', 'व्यापार शुरू करने के लिए']
    ],
    'ateet-mein-dabe-paon': [
      ['अतीत में दबे पाँव के लेखक कौन हैं?', 'ओम थानवी', 'आनंद यादव', 'विष्णु खरे', 'धर्मवीर भारती'],
      ['पाठ में किस प्राचीन स्थल के अवशेषों का वर्णन है?', 'मोहनजोदड़ो', 'सांची', 'हampi', 'आगरा'],
      ['पुरातात्विक स्थल को देखकर लेखक किससे जुड़ता है?', 'प्राचीन सभ्यता और उसके जीवन के संकेतों से', 'आधुनिक शेयर-बाज़ार से', 'संसदीय चुनाव से', 'समुद्री युद्ध से']
    ],
    'diary-ke-panne': [
      ['डायरी के पन्ने की लेखिका कौन हैं?', 'ऐन फ्रैंक', 'महादेवी वर्मा', 'रज़िया सज्जाद ज़हीर', 'कमला दास'],
      ['ऐन फ्रैंक अपनी डायरी को किस नाम से संबोधित करती थीं?', 'किट्टी', 'भक्तिन', 'डॉली', 'सophie'],
      ['डायरी किस ऐतिहासिक परिस्थिति का व्यक्तिगत अनुभव देती है?', 'नाज़ी उत्पीड़न और छिपकर जीवन बिताने का', 'मुगल दरबार का', 'विजयनगर के व्यापार का', 'हरित क्रांति का']
    ]
  },
  geography: {
    'human-geography-nature-scope': [
      ['Human geography primarily studies:', 'People and their relationships with the environment', 'Only landforms', 'Only weather systems', 'Only map projections'],
      ['Which is a major theme in human geography?', 'How people use and transform places', 'How planets orbit the sun', 'How rocks form underground', 'How stars produce light'],
      ['Human geography is best described as:', 'An integrative study of people, places, and processes', 'A branch concerned only with minerals', 'A study of astronomy', 'A record of political leaders only']
    ],
    'world-population': [
      ['Population density is calculated by comparing population with:', 'The area of land', 'The number of cities', 'Annual rainfall only', 'The number of rivers'],
      ['Which physical factor often supports dense settlement?', 'Fertile soil and reliable water', 'Extreme cold and steep slopes', 'Permanent ice cover', 'Frequent drought alone'],
      ['A population distribution map shows:', 'Where people are spread across an area', 'The age of every building', 'The direction of ocean currents only', 'The amount of trade by itself']
    ],
    'human-development': [
      ['The Human Development Index considers health, education, and:', 'Income', 'Military strength', 'Land area', 'Export volume'],
      ['Human development focuses on:', 'Expanding people’s capabilities and choices', 'Increasing output regardless of welfare', 'Measuring only population size', 'Counting only urban buildings'],
      ['Which is a health indicator used in human development comparisons?', 'Life expectancy', 'Number of ports', 'Forest area only', 'Annual exports'],
    ],
    'primary-activities': [
      ['Primary activities involve:', 'Obtaining products directly from nature', 'Manufacturing finished goods', 'Providing financial services', 'Designing computer software'],
      ['Which is a primary activity?', 'Fishing', 'Banking', 'Steel manufacturing', 'Retail advertising'],
      ['Pastoral nomadism is based mainly on:', 'Moving livestock between grazing areas', 'Factory production', 'Deep-sea shipping', 'Office work']
    ],
    'secondary-activities': [
      ['Secondary activities mainly involve:', 'Processing raw materials into products', 'Collecting wild plants only', 'Providing legal advice', 'Measuring population density'],
      ['Which is a secondary activity?', 'Textile manufacturing', 'Hunting and gathering', 'Retail trade', 'Tourism guiding'],
      ['Industrial location is influenced by:', 'Raw materials, labour, markets, and transport', 'Latitude alone', 'Religious calendars only', 'The number of national parks only']
    ],
    'tertiary-quaternary-activities': [
      ['Tertiary activities primarily provide:', 'Services', 'Raw minerals', 'Farm crops', 'Manufactured steel'],
      ['Which is a quaternary activity?', 'Information technology research', 'Crop cultivation', 'Coal mining', 'House construction'],
      ['A major feature of advanced service economies is:', 'Growth of knowledge and information work', 'The disappearance of all transport', 'Work limited to farming', 'No communication networks']
    ],
    'transport-communication-world': [
      ['Transport networks mainly help to:', 'Move people and goods between places', 'Increase soil fertility directly', 'Set population totals', 'Measure rainfall'],
      ['Which mode is especially useful for bulky goods over long distances?', 'Sea transport', 'Walking trails', 'Local bicycles only', 'Cable television'],
      ['Modern communication networks have made it easier to:', 'Share information across distant places quickly', 'Stop international contact', 'Eliminate all trade', 'Prevent urban growth']
    ],
    'international-trade-world': [
      ['International trade is the exchange of goods and services between:', 'Countries', 'Neighbouring households only', 'District offices only', 'Farm plots'],
      ['A country’s balance of trade compares:', 'The value of exports and imports of goods', 'Population and land area', 'Rainfall and temperature', 'Wages and working hours only'],
      ['A trade route is shaped by:', 'Transport links, markets, and political conditions', 'Mountain height alone', 'The number of schools only', 'Local festivals alone']
    ],
    'population-india': [
      ['India’s population census is generally conducted every:', 'Ten years', 'Two years', 'Twenty-five years', 'Fifty years'],
      ['Population density means:', 'People per unit area', 'Births per household', 'Workers per factory only', 'Villages per state'],
      ['Which source provides official population counts in India?', 'The Census of India', 'A trade directory', 'A rainfall atlas', 'A railway timetable']
    ],
    'human-settlements': [
      ['A settlement is:', 'A place where people live and organise activities', 'A type of mineral', 'A seasonal wind', 'A method of irrigation'],
      ['A nucleated settlement has houses that are:', 'Grouped close together', 'Spread evenly across a desert', 'Built only on boats', 'Located only underground'],
      ['Which factor often influences settlement location?', 'Access to water and livelihood', 'The colour of local rocks only', 'The number of time zones', 'The shape of national flags']
    ],
    'land-resources-agriculture': [
      ['Land-use records help show:', 'How land is allocated among different uses', 'The number of languages spoken', 'The length of rivers only', 'The age of mineral deposits'],
      ['Which is a land-resource conservation practice?', 'Contour ploughing on slopes', 'Removing all vegetation', 'Overgrazing continuously', 'Leaving irrigation canals leaking'],
      ['Cropping intensity compares:', 'The gross cropped area with net sown area', 'Rainfall with temperature', 'Imports with exports', 'Workers with factories']
    ],
    'water-resources': [
      ['A major source of freshwater for irrigation in India is:', 'Groundwater', 'Ocean water without treatment', 'Petroleum', 'Natural gas'],
      ['Watershed management aims to:', 'Conserve soil and water within a drainage area', 'Increase coastal erosion', 'Remove all local vegetation', 'Prevent rainwater from entering the soil'],
      ['Rainwater harvesting helps by:', 'Capturing and storing rainwater for later use', 'Increasing seawater salinity', 'Reducing groundwater recharge', 'Stopping all river flow']
    ],
    'mineral-energy-resources': [
      ['Which is a non-renewable energy resource?', 'Coal', 'Solar energy', 'Wind energy', 'Tidal energy'],
      ['Which mineral is an important source of aluminium?', 'Bauxite', 'Mica', 'Limestone', 'Gypsum'],
      ['A key concern in mineral extraction is:', 'Environmental damage and resource depletion', 'The creation of unlimited reserves', 'The end of all land use', 'The absence of waste']
    ],
    'planning-sustainable-development': [
      ['Sustainable development seeks to:', 'Meet present needs without compromising future generations', 'Use all resources as quickly as possible', 'Stop all economic activity', 'Replace planning with chance'],
      ['The Indira Gandhi Canal command area is in:', 'Rajasthan', 'Kerala', 'Assam', 'Odisha'],
      ['Target-area planning focuses on:', 'Development of a defined region or problem area', 'One household only', 'International shipping only', 'The location of stars']
    ],
    'transport-communication-india': [
      ['The Golden Quadrilateral connects:', 'Delhi, Mumbai, Chennai, and Kolkata', 'Srinagar, Leh, Kargil, and Shimla', 'Only ports on the western coast', 'All state capitals by river'],
      ['Pipelines are especially suitable for transporting:', 'Liquids and gases', 'Passengers only', 'Fresh vegetables only', 'Passenger aircraft'],
      ['Which is a major advantage of railways in India?', 'Moving large numbers of people and goods over land', 'Reaching every mountain peak', 'Replacing all road transport', 'Transporting crude oil inside pipes']
    ],
    'international-trade-india': [
      ['A major seaport on India’s western coast is:', 'Mumbai', 'Patna', 'Lucknow', 'Bhopal'],
      ['India’s international trade includes:', 'Exports and imports of goods and services', 'Only movement between villages', 'Only domestic tourism', 'Only agricultural land records'],
      ['A port supports trade by:', 'Connecting sea routes with inland transport', 'Producing rainfall', 'Measuring population growth', 'Replacing all warehouses']
    ],
    'selected-issues-problems': [
      ['Urban solid-waste problems are worsened by:', 'Inadequate collection and disposal systems', 'Perfect recycling of all waste', 'A lack of urban population', 'The absence of consumption'],
      ['Slums commonly face:', 'Inadequate housing and basic services', 'Excess access to sanitation everywhere', 'No population density', 'A complete absence of work'],
      ['Water pollution can result from:', 'Untreated sewage and industrial effluents', 'Rainwater harvesting', 'Afforestation only', 'Contour ploughing']
    ],
    'data-source-compilation': [
      ['Data collected first-hand for a particular study are:', 'Primary data', 'Secondary data', 'Class intervals', 'Index numbers'],
      ['A population census is an example of:', 'A primary source of demographic data', 'A type of bar graph', 'A remote-sensing platform', 'A sampling error'],
      ['Secondary data are:', 'Data already collected or published by another source', 'Always inaccurate', 'Collected only by field visits', 'The same as map symbols']
    ],
    'data-processing': [
      ['A frequency table records:', 'How often each value or class occurs', 'The location of every road', 'Only the source of rainfall', 'The direction of north'],
      ['Grouping continuous data into ranges creates:', 'Class intervals', 'Compass bearings', 'Scale bars', 'Map projections'],
      ['Why are data classified before analysis?', 'To organise values into a form that is easier to interpret', 'To remove all observations', 'To change the subject being studied', 'To hide the data source']
    ],
    'graphical-representation-data': [
      ['A bar graph is useful for comparing:', 'Values across categories', 'Only river directions', 'Underground rock layers', 'The exact shape of a coastline'],
      ['A choropleth map commonly uses shades to show:', 'Data values across areas', 'Names of individual people', 'The age of a textbook', 'The direction of a compass only'],
      ['A proportional circle map represents values using:', 'Different-sized circles', 'Only line styles', 'Text paragraphs', 'A single fixed-size symbol']
    ],
    'computer-data-processing-mapping': [
      ['GIS is used to:', 'Store, analyse, and display geographically referenced data', 'Translate every language automatically', 'Measure only air pressure', 'Replace all field surveys'],
      ['A spreadsheet is useful for:', 'Organising and calculating tabular data', 'Measuring mountain height without data', 'Photographing a landscape', 'Creating a compass'],
      ['Computer mapping allows users to:', 'Create and edit digital maps from spatial data', 'Eliminate the need for map scale', 'Make every map distortion-free', 'Replace all geographic information']
    ],
    'field-surveys': [
      ['A field survey collects information:', 'Directly at the study location', 'Only from satellite imagery', 'Only from old atlases', 'Without observing the area'],
      ['A questionnaire is used to:', 'Collect responses from selected people', 'Measure latitude automatically', 'Create a contour line', 'Store satellite signals'],
      ['Why is sampling used in a field survey?', 'To study a manageable subset of a population', 'To avoid defining a research question', 'To guarantee no errors', 'To replace all data analysis']
    ],
    'spatial-information-technology': [
      ['Remote sensing collects information about Earth using:', 'Sensors without direct physical contact', 'Only handwritten diaries', 'A local tax register', 'Underground pipes'],
      ['GPS is primarily used to determine:', 'Location using satellite signals', 'Soil ownership from a census', 'The age of a rock', 'The direction of ocean currents only'],
      ['GIS combines maps with:', 'Attribute and location data', 'Only printed photographs', 'Music files only', 'Unrelated text documents']
    ]
  },
  politics: {
    'end-bipolarity': [
      ['In which year did the Soviet Union dissolve?', '1991', '1949', '1962', '2001'],
      ['Who introduced perestroika and glasnost in the Soviet Union?', 'Mikhail Gorbachev', 'Joseph Stalin', 'Leonid Brezhnev', 'Boris Yeltsin'],
      ['Shock therapy refers to:', 'Rapid market-oriented economic reforms', 'A nuclear weapons test', 'A UN peacekeeping operation', 'A policy of agricultural collectivisation']
    ],
    'us-hegemony-world-politics': [
      ['The term hegemony refers to:', 'Dominant influence or leadership', 'Complete equality of power', 'The end of international trade', 'A type of election'],
      ['Which event demonstrated US military dominance after the Cold War?', 'The 1991 Gulf War', 'The 1955 Bandung Conference', 'The 1962 Sino-Indian war', 'The formation of ASEAN'],
      ['The 9/11 attacks took place in:', '2001', '1991', '1989', '1975']
    ],
    'alternative-centres-power': [
      ['Which organisation is an example of regional cooperation in Southeast Asia?', 'ASEAN', 'NATO', 'OPEC only', 'Warsaw Pact'],
      ['The European Union is an example of:', 'Regional integration', 'A single-party state', 'A military government', 'A colonial empire'],
      ['China’s economic reforms began under the leadership of:', 'Deng Xiaoping', 'Mao Zedong', 'Sun Yat-sen', 'Chiang Kai-shek']
    ],
    'contemporary-south-asia': [
      ['Which countries are members of SAARC?', 'Countries of South Asia', 'Only European Union states', 'Only North American states', 'Pacific island states only'],
      ['Which country experienced a civil war that led to the creation of Bangladesh in 1971?', 'Pakistan', 'Nepal', 'Bhutan', 'Maldives'],
      ['The 1998 nuclear tests in South Asia were conducted by:', 'India and Pakistan', 'Nepal and Bhutan', 'Sri Lanka and Maldives', 'Bangladesh and Nepal']
    ],
    'international-organisations': [
      ['The United Nations was founded in:', '1945', '1919', '1947', '1961'],
      ['The UN Security Council has primary responsibility for:', 'International peace and security', 'Global school curricula', 'World agricultural pricing', 'Olympic rules'],
      ['Why do countries reform international organisations?', 'To make them more representative and effective', 'To remove all cooperation', 'To abolish international law', 'To end diplomacy']
    ],
    'security-contemporary-world': [
      ['Traditional security mainly concerns:', 'Military threats to the state', 'Only climate change', 'Only internet access', 'Only public health'],
      ['Which is a non-traditional security concern?', 'A pandemic', 'A border fort only', 'A military alliance only', 'A weapons treaty only'],
      ['Human security focuses on:', 'Protection of individuals and their well-being', 'Only the survival of governments', 'Only control of territory', 'Only military spending']
    ],
    'environment-natural-resources': [
      ['Which is an example of a global common?', 'The atmosphere', 'A private farm', 'A city road', 'A household well'],
      ['The Kyoto Protocol focused on reducing:', 'Greenhouse-gas emissions', 'International literacy', 'Ocean shipping costs', 'Nuclear weapons'],
      ['Sustainable development seeks to:', 'Balance development with environmental protection', 'Use all resources immediately', 'Stop all economic activity', 'Privatise every common resource']
    ],
    globalisation: [
      ['Globalisation involves increasing flows of:', 'Goods, capital, people, and ideas across borders', 'Only local rainfall', 'Only village land records', 'Only military personnel'],
      ['Which technology has accelerated global communication?', 'The internet', 'The printing press alone', 'The telegraph only', 'The compass'],
      ['A common criticism of globalisation concerns:', 'Unequal distribution of benefits', 'The end of all trade', 'The disappearance of technology', 'The absence of cultural exchange']
    ],
    'challenges-nation-building': [
      ['Which was a major challenge at independence?', 'Integrating princely states', 'Creating the East India Company', 'Ending the Cold War', 'Building the Mughal Empire'],
      ['Who played a leading role in integrating princely states into India?', 'Sardar Vallabhbhai Patel', 'Lord Curzon', 'Mahatma Gandhi alone', 'C. Rajagopalachari alone'],
      ['The States Reorganisation Act of 1956 reorganised states mainly on the basis of:', 'Language', 'Religion only', 'Climate zones', 'Population density only']
    ],
    'one-party-dominance': [
      ['Which party dominated Indian politics in the first decades after independence?', 'Indian National Congress', 'Bharatiya Jana Sangh', 'Communist Party only', 'Swatantra Party'],
      ['What does a one-party-dominant system mean?', 'One party repeatedly wins while opposition parties still exist', 'Only one party is legally allowed', 'There are no elections', 'The military appoints all representatives'],
      ['India’s first general election was held in:', '1951-52', '1947', '1967', '1977']
    ],
    'planned-development': [
      ['Which body prepared India’s Five Year Plans?', 'Planning Commission', 'Election Commission', 'Finance Commission only', 'Supreme Court'],
      ['India adopted which broad economic approach after independence?', 'A mixed economy', 'A complete command economy', 'A fully laissez-faire economy', 'No planning at all'],
      ['The public sector was expected to:', 'Lead investment in key industries and infrastructure', 'Replace all farms', 'End all private enterprise', 'Control village languages']
    ],
    'indias-external-relations': [
      ['India’s policy of non-alignment aimed to:', 'Preserve independent foreign-policy choices', 'Join NATO', 'Join the Warsaw Pact', 'Avoid all international relations'],
      ['The Panchsheel principles were agreed between India and:', 'China', 'Pakistan', 'Sri Lanka', 'Nepal'],
      ['The 1962 war was fought between India and:', 'China', 'Pakistan', 'Bangladesh', 'Myanmar']
    ],
    'congress-system': [
      ['The Congress system refers to:', 'Congress dominance alongside competition among groups within and outside it', 'A military government', 'A ban on elections', 'A coalition led by regional parties only'],
      ['Which event contributed to the Congress split in 1969?', 'A conflict over party leadership and the presidential election', 'The adoption of the Constitution', 'The end of British rule', 'The formation of SAARC'],
      ['Who became Prime Minister after the 1967 general election?', 'Indira Gandhi', 'Morarji Desai', 'Lal Bahadur Shastri', 'Charan Singh']
    ],
    'democratic-order-crisis': [
      ['When was the National Emergency declared in India?', '1975', '1962', '1984', '1991'],
      ['Which fundamental change occurred during the Emergency?', 'Civil liberties and press freedoms were restricted', 'India became a monarchy', 'All state governments were elected directly', 'The Constitution was abolished permanently'],
      ['In which year was the Emergency lifted and a general election held?', '1977', '1971', '1980', '1989']
    ],
    'popular-movements': [
      ['The Chipko movement is associated with:', 'Forest conservation', 'Nuclear disarmament only', 'Language reorganisation', 'Urban transport'],
      ['The Bharatiya Kisan Union mobilised:', 'Farmers', 'Industrial managers', 'Foreign diplomats', 'University examiners'],
      ['Popular movements often seek to:', 'Influence public policy and defend group interests', 'Replace all elections', 'End all civil society', 'Abolish local participation']
    ],
    'regional-aspirations': [
      ['Regional aspirations in India often express demands for:', 'Recognition, autonomy, or statehood', 'The end of linguistic diversity', 'A return to colonial rule', 'A single-party constitution'],
      ['The Anandpur Sahib Resolution was associated with:', 'Akali Dal demands in Punjab', 'The Narmada Bachao Andolan', 'The Dravidian movement only', 'The Chipko movement'],
      ['The Mizo Accord was signed in:', '1986', '1950', '1962', '1999']
    ],
    'recent-political-developments': [
      ['The Mandal Commission recommendations concerned:', 'Reservation for socially and educationally backward classes', 'The creation of NATO', 'The Green Revolution', 'The reorganisation of the UN'],
      ['The coalition era in India expanded significantly after:', '1989', '1952', '1962', '1975'],
      ['The New Economic Policy in India began in:', '1991', '1977', '1984', '2001']
    ]
  },
  economics: {
    'introduction-macroeconomics': [
      ['Macroeconomics studies:', 'The economy as a whole', 'A single household only', 'One firm only', 'One product only'],
      ['Which is a macroeconomic variable?', 'National income', 'One shop’s daily sales only', 'One consumer’s preference', 'A single worker’s task'],
      ['Macroeconomic policy commonly aims at:', 'Growth, stability, and employment', 'Eliminating all trade', 'Setting every household’s choices', 'Stopping all production']
    ],
    'national-income-accounting': [
      ['GDP measures the value of:', 'Final goods and services produced within a country in a period', 'All intermediate goods only', 'Only exports', 'Only government tax revenue'],
      ['Which method adds value created at each stage of production?', 'Value-added method', 'Population method', 'Balance-of-trade method', 'Census method'],
      ['Real GDP differs from nominal GDP because it adjusts for:', 'Changes in prices', 'Population density', 'Exchange-rate names', 'Government borders']
    ],
    'money-banking': [
      ['Which is a primary function of money?', 'Medium of exchange', 'Measure of rainfall', 'Source of land', 'Form of labour'],
      ['Commercial banks create credit mainly by:', 'Lending a portion of deposits', 'Printing currency notes', 'Setting tax rates', 'Issuing government laws'],
      ['The central bank controls money supply using:', 'Monetary policy tools', 'Crop rotation', 'Import quotas only', 'Census schedules']
    ],
    'determination-income-employment': [
      ['Aggregate demand includes consumption and:', 'Investment expenditure', 'Only imports', 'Only tax revenue', 'Only savings'],
      ['In a simple Keynesian model, equilibrium income occurs when:', 'Planned aggregate expenditure equals output', 'Exports equal population', 'Taxes equal wages', 'Imports equal investment'],
      ['The multiplier effect describes how an initial spending change can cause:', 'A larger change in equilibrium income', 'A permanent fall in all prices', 'The disappearance of savings', 'A change in land area']
    ],
    'government-budget-economy': [
      ['A government budget presents planned:', 'Receipts and expenditure', 'Population and climate', 'Imports and exports only', 'Private wages only'],
      ['A fiscal deficit occurs when:', 'Government expenditure exceeds receipts excluding borrowings', 'Exports exceed imports', 'Savings exceed investment', 'Tax revenue exceeds expenditure'],
      ['Which is a revenue receipt?', 'Income tax', 'Borrowing', 'Sale of a public asset', 'Recovery of a loan']
    ],
    'open-economy-macroeconomics': [
      ['The balance of payments records transactions between:', 'Residents of a country and the rest of the world', 'Two households in one city', 'Two firms in one village', 'Government departments only'],
      ['An exchange rate is the price of:', 'One currency in terms of another', 'A bond in terms of a share', 'Labour in terms of land', 'A tax in terms of income'],
      ['A depreciation of domestic currency generally makes exports:', 'Cheaper for foreign buyers', 'More expensive for foreign buyers', 'Unchanged in every case', 'Unavailable by definition']
    ],
    'eve-independence': [
      ['A major feature of the Indian economy under colonial rule was:', 'Low levels of industrial and agricultural development', 'Universal high incomes', 'A large modern manufacturing base', 'Complete control over trade policy'],
      ['Colonial India’s foreign trade primarily served:', 'British economic interests', 'Only village self-sufficiency', 'The abolition of exports', 'The needs of every Indian equally'],
      ['Which sector faced stagnation under colonial rule?', 'Agriculture', 'Space technology', 'Information technology', 'Automobile manufacturing']
    ],
    'indian-economy-1950-1990': [
      ['India adopted which broad economic system after independence?', 'A mixed economy', 'A purely feudal economy', 'A fully private economy with no planning', 'A barter system'],
      ['The First Five Year Plan gave priority to:', 'Agriculture and irrigation', 'Space tourism', 'Software exports', 'The abolition of all public investment'],
      ['Import substitution aimed to:', 'Develop domestic industries and reduce dependence on imports', 'Increase all luxury imports', 'End domestic production', 'Abolish tariffs worldwide']
    ],
    'liberalisation-privatisation-globalisation': [
      ['Liberalisation generally means:', 'Reducing government restrictions on economic activity', 'Increasing all licensing controls', 'Ending international trade', 'Replacing money with barter'],
      ['Privatisation involves:', 'A greater role for private ownership or management', 'Nationalising every private firm', 'Ending all competition', 'Banning investment'],
      ['Globalisation refers to:', 'Growing integration of economies across countries', 'The isolation of all markets', 'The end of communication', 'A single village’s production']
    ],
    'human-capital-formation': [
      ['Human capital is developed through investment in:', 'Education and health', 'Only machinery', 'Only buildings', 'Only foreign exchange'],
      ['Which is a source of human capital formation?', 'On-the-job training', 'Soil erosion', 'Import duties only', 'Currency depreciation'],
      ['Education can raise productivity by:', 'Improving skills and knowledge', 'Reducing every worker’s ability', 'Eliminating all employment', 'Lowering access to information']
    ],
    'rural-development': [
      ['Rural development includes improving:', 'Credit, infrastructure, and livelihood opportunities', 'Only urban airports', 'Only stock markets', 'Only foreign tourism'],
      ['Self-help groups can support rural households through:', 'Savings and access to credit', 'The abolition of local work', 'Currency printing', 'Import licensing'],
      ['Diversification in rural areas means:', 'Expanding into activities beyond crop cultivation', 'Growing only one crop forever', 'Ending all non-farm work', 'Reducing all rural income sources']
    ],
    'employment-growth-informalisation': [
      ['Informal workers generally have:', 'Less formal job security and social protection', 'Guaranteed pensions in every job', 'Only government employment', 'No economic activity'],
      ['Worker-population ratio measures:', 'The share of population that is working', 'The share of exports in GDP', 'The number of banks per district', 'The proportion of land under forests'],
      ['Disguised unemployment occurs when:', 'More workers are engaged than needed for the same output', 'No one is willing to work', 'All workers are in factories', 'Wages are paid in cash']
    ],
    'environment-sustainable-development': [
      ['Sustainable development aims to:', 'Meet present needs while protecting future generations', 'Use all resources immediately', 'Stop all production', 'Ignore environmental costs'],
      ['Which is a renewable resource?', 'Solar energy', 'Coal', 'Petroleum', 'Natural gas'],
      ['An externality is a cost or benefit that:', 'Affects people not directly involved in a transaction', 'Is always paid by the producer', 'Exists only in foreign trade', 'Measures national income']
    ],
    'comparative-development-neighbours': [
      ['Which countries are commonly compared with India in this chapter?', 'China and Pakistan', 'Japan and Brazil', 'France and Germany', 'Canada and Mexico'],
      ['Per capita GDP is calculated by dividing GDP by:', 'Population', 'Exports', 'Tax revenue', 'Land area'],
      ['Why use several indicators to compare development?', 'Income alone does not capture all aspects of well-being', 'One indicator always explains everything', 'Population is irrelevant', 'Education cannot be measured']
    ]
  },
  english: {
    'last-lesson': [
      ['Who is the author of The Last Lesson?', 'Alphonse Daudet', 'Anees Jung', 'William Douglas', 'Louis Fischer'],
      ['Where is the story set?', 'Alsace-Lorraine under Prussian control', 'A village in Bengal', 'A school in London', 'A town in South Africa'],
      ['What announcement does M. Hamel make?', 'It is their last French lesson', 'The school will move to Paris', 'The war has ended', 'Franz must teach the class']
    ],
    'lost-spring': [
      ['Who wrote Lost Spring?', 'Anees Jung', 'Alphonse Daudet', 'Selma Lagerlof', 'Kamala Das'],
      ['What work do many children in Seemapuri undertake?', 'Rag-picking', 'Shipbuilding', 'Tea tasting', 'Silk weaving'],
      ['What does the title Lost Spring suggest?', 'Childhood and opportunity lost to poverty', 'A season of celebration', 'A school holiday', 'A journey to the mountains']
    ],
    'deep-water': [
      ['Who wrote Deep Water?', 'William O. Douglas', 'Louis Fischer', 'A. R. Barton', 'Pablo Neruda'],
      ['What fear does Douglas struggle to overcome?', 'Fear of water', 'Fear of public speaking', 'Fear of travel', 'Fear of darkness'],
      ['How does Douglas finally overcome his fear?', 'Through training, practice, and determination', 'By avoiding water forever', 'By moving to another country', 'By asking someone else to swim for him']
    ],
    rattrap: [
      ['Who wrote The Rattrap?', 'Selma Lagerlof', 'Anees Jung', 'Alphonse Daudet', 'Adrienne Rich'],
      ['What comparison does the peddler make about the world?', 'The world is a rattrap', 'The world is a classroom', 'The world is a river', 'The world is a courtroom'],
      ['What helps bring about the peddler’s change?', 'Edla’s trust and kindness', 'A police investigation', 'A large inheritance', 'A journey overseas']
    ],
    indigo: [
      ['Who wrote Indigo?', 'Louis Fischer', 'Asokamitran', 'William Douglas', 'Robert Frost'],
      ['Where did Gandhi support indigo cultivators?', 'Champaran', 'Dandi', 'Kheda only', 'Amritsar'],
      ['What did the Champaran episode demonstrate?', 'The effectiveness of organised non-violent resistance', 'The end of Indian agriculture', 'The start of the Quit India Movement', 'The abolition of all land revenue']
    ],
    'poets-and-pancakes': [
      ['Who wrote Poets and Pancakes?', 'Asokamitran', 'A. R. Barton', 'Christopher Silvester', 'Louis Fischer'],
      ['The chapter describes life at which film studio?', 'Gemini Studios', 'R. K. Studios', 'Prithvi Theatre', 'New Theatres'],
      ['What does the chapter mainly offer?', 'A humorous account of people and work in a film studio', 'A guide to baking', 'A history of the French Revolution', 'A travel diary of Europe']
    ],
    interview: [
      ['Who wrote the introductory part of The Interview?', 'Christopher Silvester', 'Umberto Eco', 'Anees Jung', 'Selma Lagerlof'],
      ['Which writer is interviewed in Part II?', 'Umberto Eco', 'William Douglas', 'Louis Fischer', 'John Keats'],
      ['What is one central issue discussed in the chapter?', 'The value and problems of interviews', 'The history of railways', 'The rules of cricket', 'The growth of farming']
    ],
    'going-places': [
      ['Who wrote Going Places?', 'A. R. Barton', 'Pablo Neruda', 'Robert Frost', 'Asokamitran'],
      ['What does Sophie often do?', 'Dreams of an exciting future beyond her circumstances', 'Plans to become a farmer', 'Avoids speaking to her family', 'Writes a travel guide'],
      ['Who is Geoff?', 'Sophie’s older brother', 'Her teacher', 'A football coach', 'An actor she meets at school']
    ],
    'my-mother-at-sixty-six': [
      ['Who wrote My Mother at Sixty-Six?', 'Kamala Das', 'Adrienne Rich', 'Kamala Markandaya', 'Anees Jung'],
      ['Where is the speaker travelling when she observes her mother?', 'To the airport', 'To a school', 'To a village market', 'To a railway museum'],
      ['What emotion is central to the poem?', 'Fear of separation and awareness of ageing', 'Anger at a teacher', 'Excitement about a competition', 'Pride in a new house']
    ],
    'elementary-school-classroom': [
      ['Who wrote An Elementary School Classroom in a Slum?', 'Stephen Spender', 'Pablo Neruda', 'John Keats', 'Robert Frost'],
      ['What contrast is central to the poem?', 'The slum children’s lives and the privileged world beyond them', 'The sea and the desert', 'A king and his army', 'Summer and winter holidays'],
      ['What does the poet suggest the children need?', 'Access to education and a wider world', 'More locked doors', 'Fewer books', 'A longer school uniform']
    ],
    'keeping-quiet': [
      ['Who wrote Keeping Quiet?', 'Pablo Neruda', 'John Keats', 'Robert Frost', 'Stephen Spender'],
      ['What does the poet ask people to do briefly?', 'Pause and remain still', 'Leave the planet', 'Stop learning permanently', 'Forget every language'],
      ['What is the purpose of the pause in the poem?', 'Reflection and a more peaceful understanding', 'A permanent end to work', 'A military exercise', 'A celebration of noise']
    ],
    'thing-of-beauty': [
      ['Who wrote A Thing of Beauty?', 'John Keats', 'Pablo Neruda', 'Robert Frost', 'Kamala Das'],
      ['According to the poem, a thing of beauty is:', 'A joy for ever', 'A passing rumour', 'A burden without end', 'A source of fear'],
      ['What can beauty provide in the poem?', 'Comfort and enduring pleasure', 'Only wealth', 'Political authority', 'A journey abroad']
    ],
    'roadside-stand': [
      ['Who wrote A Roadside Stand?', 'Robert Frost', 'John Keats', 'Stephen Spender', 'Pablo Neruda'],
      ['What do the rural people hope to gain from the roadside stand?', 'Income from passing city traffic', 'A place in Parliament', 'A new railway station', 'A school examination'],
      ['What contrast does the poem criticise?', 'Rural poverty and urban indifference', 'Old poetry and new poetry', 'Winter and summer', 'Mountains and oceans']
    ],
    'aunt-jennifers-tigers': [
      ['Who wrote Aunt Jennifer’s Tigers?', 'Adrienne Rich', 'Kamala Das', 'John Keats', 'Selma Lagerlof'],
      ['How are Aunt Jennifer’s tigers presented?', 'Confident and unafraid', 'Weak and silent', 'Trapped in a classroom', 'Lost at sea'],
      ['What does Aunt Jennifer’s needlework contrast with?', 'The constraints she experiences in life', 'The freedom of a bird', 'A journey by train', 'A political speech']
    ],
    'third-level': [
      ['Who wrote The Third Level?', 'Jack Finney', 'A. R. Barton', 'John Keats', 'Anees Jung'],
      ['What does Charley believe he has discovered?', 'A third level at Grand Central Station', 'A hidden room at school', 'A new railway in India', 'A secret film studio'],
      ['Which year does Charley wish to travel to?', '1894', '1947', '1962', '2001']
    ],
    'tiger-king': [
      ['Who wrote The Tiger King?', 'Kalki', 'Jack Finney', 'Tishani Doshi', 'Pearl S. Buck'],
      ['What prediction is made about the Maharaja?', 'A tiger will cause his death', 'He will become a teacher', 'He will lose a horse race', 'He will travel to Antarctica'],
      ['What ultimately causes the Tiger King’s death?', 'An infection from a wooden toy tiger splinter', 'A battle with a real tiger', 'A shipwreck', 'A hunting accident in childhood']
    ],
    'journey-end-earth': [
      ['Who wrote Journey to the End of the Earth?', 'Tishani Doshi', 'Kalki', 'Jack Finney', 'A. R. Barton'],
      ['Where does the narrator travel?', 'Antarctica', 'The Sahara', 'The Amazon', 'The Himalayas'],
      ['What does Antarctica help visitors understand?', 'Earth’s climate history and environmental change', 'The history of cinema', 'The origins of the Mughal Empire', 'The rise of city markets']
    ],
    enemy: [
      ['Who wrote The Enemy?', 'Pearl S. Buck', 'Kalki', 'Jack Finney', 'Tishani Doshi'],
      ['What is Dr Sadao’s profession?', 'Surgeon', 'Schoolteacher', 'Merchant sailor', 'Journalist'],
      ['What dilemma does Dr Sadao face?', 'Medical duty toward an enemy soldier during wartime', 'Whether to leave school', 'Whether to buy a house', 'Whether to become a poet']
    ],
    'should-wizard-hit-mommy': [
      ['Who wrote Should Wizard Hit Mommy?', 'John Updike', 'Pearl S. Buck', 'Jack Finney', 'Kalki'],
      ['Who tells Jo a bedtime story?', 'Her father Jack', 'Her teacher', 'Her brother Geoff', 'A neighbour'],
      ['What does Jo challenge in the story discussion?', 'Her father’s resolution of the story', 'The spelling of her name', 'The school timetable', 'The weather forecast']
    ],
    'on-face-of-it': [
      ['Who wrote On the Face of It?', 'Susan Hill', 'John Updike', 'Pearl S. Buck', 'Tishani Doshi'],
      ['What physical difference does Derry live with?', 'A badly scarred face', 'A broken leg', 'Loss of hearing', 'Blindness'],
      ['Who helps Derry see beyond his appearance?', 'Mr Lamb', 'Dr Sadao', 'Charley', 'The Tiger King']
    ],
    'evans-o-level': [
      ['Who wrote Evans Tries an O-Level?', 'Colin Dexter', 'Susan Hill', 'John Updike', 'Kalki'],
      ['What examination is Evans preparing to take?', 'German O-Level', 'French A-Level', 'History entrance exam', 'Driving test'],
      ['What is central to the plot?', 'Evans’s carefully planned escape', 'A journey to Antarctica', 'A village election', 'A dispute over a poem']
    ],
    'memories-of-childhood': [
      ['Memories of Childhood presents accounts by which two writers?', 'Zitkala-Sa and Bama', 'Anees Jung and Kamala Das', 'Pearl S. Buck and Tishani Doshi', 'Jack Finney and John Updike'],
      ['What common issue connects the two autobiographical accounts?', 'Discrimination and the struggle for dignity', 'A love of hunting', 'Life at a film studio', 'The search for a railway platform'],
      ['What does Zitkala-Sa describe from her school experience?', 'The forced cutting of her hair', 'A journey to Antarctica', 'A visit to a Mughal court', 'A competition with tigers']
    ]
  }
};

function makeChapterQuestion(row, index) {
  const [q, correct, ...distractors] = row;
  const baseOptions = [correct, ...distractors];
  const shift = index % baseOptions.length;
  const options = baseOptions.slice(shift).concat(baseOptions.slice(0, shift));
  return { q, options, answer: (baseOptions.length - shift) % baseOptions.length };
}

for (const [subjectKey, banks] of Object.entries(chapterQuestionRows)) {
  subjectCatalog[subjectKey].verifiedQuestionBank ||= {};
  for (const [chapterId, rows] of Object.entries(banks)) {
    if (!subjectCatalog[subjectKey].verifiedQuestionBank[chapterId]) {
      subjectCatalog[subjectKey].verifiedQuestionBank[chapterId] = rows.map(makeChapterQuestion);
    }
  }
}
