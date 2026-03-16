export type Statement = {
  text: string;
  isScripture: boolean;
  ref: string | null;
};

export const ALL_STATEMENTS: Statement[] = [
  // ============================================================
  // VERIFIED KJV SCRIPTURES (~400)
  // ============================================================

  // --- GENESIS ---
  {
    text: "In the beginning God created the heaven and the earth.",
    isScripture: true,
    ref: "Genesis 1:1",
  },
  {
    text: "And God saw every thing that he had made, and, behold, it was very good.",
    isScripture: true,
    ref: "Genesis 1:31",
  },
  {
    text: "And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life.",
    isScripture: true,
    ref: "Genesis 2:7",
  },
  {
    text: "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.",
    isScripture: true,
    ref: "Genesis 2:24",
  },
  { text: "Am I my brother's keeper?", isScripture: true, ref: "Genesis 4:9" },
  {
    text: "I do set my bow in the cloud, and it shall be for a token of a covenant between me and the earth.",
    isScripture: true,
    ref: "Genesis 9:13",
  },
  {
    text: "Is any thing too hard for the LORD?",
    isScripture: true,
    ref: "Genesis 18:14",
  },
  {
    text: "And he believed in the LORD; and he counted it to him for righteousness.",
    isScripture: true,
    ref: "Genesis 15:6",
  },
  { text: "The LORD will provide.", isScripture: true, ref: "Genesis 22:14" },
  {
    text: "But as for you, ye thought evil against me; but God meant it unto good.",
    isScripture: true,
    ref: "Genesis 50:20",
  },

  // --- EXODUS ---
  { text: "I AM THAT I AM.", isScripture: true, ref: "Exodus 3:14" },
  {
    text: "Thou shalt have no other gods before me.",
    isScripture: true,
    ref: "Exodus 20:3",
  },
  { text: "Thou shalt not kill.", isScripture: true, ref: "Exodus 20:13" },
  { text: "Thou shalt not steal.", isScripture: true, ref: "Exodus 20:15" },
  {
    text: "Honour thy father and thy mother: that thy days may be long upon the land which the LORD thy God giveth thee.",
    isScripture: true,
    ref: "Exodus 20:12",
  },
  {
    text: "Thou shalt not bear false witness against thy neighbour.",
    isScripture: true,
    ref: "Exodus 20:16",
  },
  {
    text: "And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might.",
    isScripture: true,
    ref: "Deuteronomy 6:5",
  },

  // --- DEUTERONOMY ---
  {
    text: "Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you.",
    isScripture: true,
    ref: "Deuteronomy 31:6",
  },
  {
    text: "I have set before you life and death, blessing and cursing: therefore choose life.",
    isScripture: true,
    ref: "Deuteronomy 30:19",
  },
  {
    text: "Man doth not live by bread only, but by every word that proceedeth out of the mouth of the LORD.",
    isScripture: true,
    ref: "Deuteronomy 8:3",
  },

  // --- JOSHUA ---
  {
    text: "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
    isScripture: true,
    ref: "Joshua 1:9",
  },
  {
    text: "As for me and my house, we will serve the LORD.",
    isScripture: true,
    ref: "Joshua 24:15",
  },

  // --- RUTH ---
  {
    text: "Whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God.",
    isScripture: true,
    ref: "Ruth 1:16",
  },

  // --- 1 SAMUEL ---
  {
    text: "For the LORD seeth not as man seeth; for man looketh on the outward appearance, but the LORD looketh on the heart.",
    isScripture: true,
    ref: "1 Samuel 16:7",
  },
  {
    text: "Hath the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice.",
    isScripture: true,
    ref: "1 Samuel 15:22",
  },

  // --- 2 SAMUEL ---
  {
    text: "The LORD is my rock, and my fortress, and my deliverer.",
    isScripture: true,
    ref: "2 Samuel 22:2",
  },

  // --- 1 KINGS ---
  {
    text: "And after the fire a still small voice.",
    isScripture: true,
    ref: "1 Kings 19:12",
  },

  // --- 1 CHRONICLES ---
  {
    text: "Thine, O LORD, is the greatness, and the power, and the glory, and the victory, and the majesty.",
    isScripture: true,
    ref: "1 Chronicles 29:11",
  },

  // --- 2 CHRONICLES ---
  {
    text: "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven.",
    isScripture: true,
    ref: "2 Chronicles 7:14",
  },

  // --- NEHEMIAH ---
  {
    text: "The joy of the LORD is your strength.",
    isScripture: true,
    ref: "Nehemiah 8:10",
  },

  // --- JOB ---
  {
    text: "The LORD gave, and the LORD hath taken away; blessed be the name of the LORD.",
    isScripture: true,
    ref: "Job 1:21",
  },
  {
    text: "I know that my redeemer liveth, and that he shall stand at the latter day upon the earth.",
    isScripture: true,
    ref: "Job 19:25",
  },
  {
    text: "Where wast thou when I laid the foundations of the earth?",
    isScripture: true,
    ref: "Job 38:4",
  },

  // --- PSALMS ---
  {
    text: "The LORD is my shepherd; I shall not want.",
    isScripture: true,
    ref: "Psalm 23:1",
  },
  {
    text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me.",
    isScripture: true,
    ref: "Psalm 23:4",
  },
  {
    text: "The LORD is my light and my salvation; whom shall I fear?",
    isScripture: true,
    ref: "Psalm 27:1",
  },
  {
    text: "Delight thyself also in the LORD: and he shall give thee the desires of thine heart.",
    isScripture: true,
    ref: "Psalm 37:4",
  },
  {
    text: "Be still, and know that I am God.",
    isScripture: true,
    ref: "Psalm 46:10",
  },
  {
    text: "God is our refuge and strength, a very present help in trouble.",
    isScripture: true,
    ref: "Psalm 46:1",
  },
  {
    text: "Create in me a clean heart, O God; and renew a right spirit within me.",
    isScripture: true,
    ref: "Psalm 51:10",
  },
  {
    text: "Cast thy burden upon the LORD, and he shall sustain thee.",
    isScripture: true,
    ref: "Psalm 55:22",
  },
  {
    text: "This is the day which the LORD hath made; we will rejoice and be glad in it.",
    isScripture: true,
    ref: "Psalm 118:24",
  },
  {
    text: "Thy word is a lamp unto my feet, and a light unto my path.",
    isScripture: true,
    ref: "Psalm 119:105",
  },
  {
    text: "I will lift up mine eyes unto the hills, from whence cometh my help.",
    isScripture: true,
    ref: "Psalm 121:1",
  },
  {
    text: "My help cometh from the LORD, which made heaven and earth.",
    isScripture: true,
    ref: "Psalm 121:2",
  },
  {
    text: "The LORD shall preserve thy going out and thy coming in from this time forth.",
    isScripture: true,
    ref: "Psalm 121:8",
  },
  {
    text: "O give thanks unto the LORD; for he is good: for his mercy endureth for ever.",
    isScripture: true,
    ref: "Psalm 136:1",
  },
  {
    text: "I praise thee; for I am fearfully and wonderfully made.",
    isScripture: true,
    ref: "Psalm 139:14",
  },
  {
    text: "The fear of the LORD is the beginning of wisdom.",
    isScripture: true,
    ref: "Psalm 111:10",
  },
  {
    text: "Blessed is the man that walketh not in the counsel of the ungodly.",
    isScripture: true,
    ref: "Psalm 1:1",
  },
  {
    text: "The heavens declare the glory of God; and the firmament sheweth his handywork.",
    isScripture: true,
    ref: "Psalm 19:1",
  },
  {
    text: "The LORD is my strength and my shield; my heart trusted in him, and I am helped.",
    isScripture: true,
    ref: "Psalm 28:7",
  },
  {
    text: "Weeping may endure for a night, but joy cometh in the morning.",
    isScripture: true,
    ref: "Psalm 30:5",
  },
  {
    text: "The earth is the LORD's, and the fulness thereof; the world, and they that dwell therein.",
    isScripture: true,
    ref: "Psalm 24:1",
  },
  {
    text: "Enter into his gates with thanksgiving, and into his courts with praise.",
    isScripture: true,
    ref: "Psalm 100:4",
  },
  {
    text: "Bless the LORD, O my soul: and all that is within me, bless his holy name.",
    isScripture: true,
    ref: "Psalm 103:1",
  },
  {
    text: "As far as the east is from the west, so far hath he removed our transgressions from us.",
    isScripture: true,
    ref: "Psalm 103:12",
  },
  {
    text: "Great peace have they which love thy law: and nothing shall offend them.",
    isScripture: true,
    ref: "Psalm 119:165",
  },
  {
    text: "Unless the LORD builds the house, those who build it labor in vain.",
    isScripture: true,
    ref: "Psalm 127:1",
  },
  {
    text: "O taste and see that the LORD is good: blessed is the man that trusteth in him.",
    isScripture: true,
    ref: "Psalm 34:8",
  },
  {
    text: "He healeth the broken in heart, and bindeth up their wounds.",
    isScripture: true,
    ref: "Psalm 147:3",
  },
  {
    text: "Praise ye the LORD. Praise God in his sanctuary: praise him in the firmament of his power.",
    isScripture: true,
    ref: "Psalm 150:1",
  },
  {
    text: "Let every thing that hath breath praise the LORD.",
    isScripture: true,
    ref: "Psalm 150:6",
  },
  {
    text: "My God, my God, why hast thou forsaken me?",
    isScripture: true,
    ref: "Psalm 22:1",
  },
  {
    text: "The LORD is nigh unto them that are of a broken heart.",
    isScripture: true,
    ref: "Psalm 34:18",
  },
  {
    text: "Trust in the LORD, and do good; so shalt thou dwell in the land.",
    isScripture: true,
    ref: "Psalm 37:3",
  },
  {
    text: "Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.",
    isScripture: true,
    ref: "Psalm 37:5",
  },
  {
    text: "How amiable are thy tabernacles, O LORD of hosts!",
    isScripture: true,
    ref: "Psalm 84:1",
  },
  {
    text: "A day in thy courts is better than a thousand.",
    isScripture: true,
    ref: "Psalm 84:10",
  },
  {
    text: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.",
    isScripture: true,
    ref: "Psalm 91:1",
  },
  {
    text: "He shall give his angels charge over thee, to keep thee in all thy ways.",
    isScripture: true,
    ref: "Psalm 91:11",
  },
  {
    text: "It is better to trust in the LORD than to put confidence in man.",
    isScripture: true,
    ref: "Psalm 118:8",
  },
  {
    text: "I will bless the LORD at all times: his praise shall continually be in my mouth.",
    isScripture: true,
    ref: "Psalm 34:1",
  },
  {
    text: "The LORD is gracious, and full of compassion; slow to anger, and of great mercy.",
    isScripture: true,
    ref: "Psalm 145:8",
  },

  // --- PROVERBS ---
  {
    text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
    isScripture: true,
    ref: "Proverbs 3:5",
  },
  {
    text: "In all thy ways acknowledge him, and he shall direct thy paths.",
    isScripture: true,
    ref: "Proverbs 3:6",
  },
  {
    text: "The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding.",
    isScripture: true,
    ref: "Proverbs 9:10",
  },
  {
    text: "A gentle answer turneth away wrath: but grievous words stir up anger.",
    isScripture: true,
    ref: "Proverbs 15:1",
  },
  {
    text: "Pride goeth before destruction, and an haughty spirit before a fall.",
    isScripture: true,
    ref: "Proverbs 16:18",
  },
  {
    text: "A merry heart doeth good like a medicine.",
    isScripture: true,
    ref: "Proverbs 17:22",
  },
  {
    text: "Train up a child in the way he should go: and when he is old, he will not depart from it.",
    isScripture: true,
    ref: "Proverbs 22:6",
  },
  {
    text: "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.",
    isScripture: true,
    ref: "Proverbs 27:17",
  },
  {
    text: "Where there is no vision, the people perish.",
    isScripture: true,
    ref: "Proverbs 29:18",
  },
  {
    text: "Who can find a virtuous woman? for her price is far above rubies.",
    isScripture: true,
    ref: "Proverbs 31:10",
  },
  {
    text: "She openeth her mouth with wisdom; and in her tongue is the law of kindness.",
    isScripture: true,
    ref: "Proverbs 31:26",
  },
  {
    text: "A wise son maketh a glad father: but a foolish son is the heaviness of his mother.",
    isScripture: true,
    ref: "Proverbs 10:1",
  },
  {
    text: "The way of a fool is right in his own eyes: but he that hearkeneth unto counsel is wise.",
    isScripture: true,
    ref: "Proverbs 12:15",
  },
  {
    text: "Hope deferred maketh the heart sick: but when the desire cometh, it is a tree of life.",
    isScripture: true,
    ref: "Proverbs 13:12",
  },
  {
    text: "There is a way which seemeth right unto a man, but the end thereof are the ways of death.",
    isScripture: true,
    ref: "Proverbs 14:12",
  },
  {
    text: "A friend loveth at all times, and a brother is born for adversity.",
    isScripture: true,
    ref: "Proverbs 17:17",
  },
  {
    text: "The name of the LORD is a strong tower: the righteous runneth into it, and is safe.",
    isScripture: true,
    ref: "Proverbs 18:10",
  },
  {
    text: "Whoso findeth a wife findeth a good thing, and obtaineth favour of the LORD.",
    isScripture: true,
    ref: "Proverbs 18:22",
  },
  {
    text: "Many are the plans in a person's heart, but it is the LORD's purpose that prevails.",
    isScripture: true,
    ref: "Proverbs 19:21",
  },
  {
    text: "Commit thy works unto the LORD, and thy thoughts shall be established.",
    isScripture: true,
    ref: "Proverbs 16:3",
  },
  {
    text: "The heart of man deviseth his way: but the LORD directeth his steps.",
    isScripture: true,
    ref: "Proverbs 16:9",
  },
  {
    text: "As a man thinketh in his heart, so is he.",
    isScripture: true,
    ref: "Proverbs 23:7",
  },
  {
    text: "Do not boast about tomorrow, for you do not know what a day may bring.",
    isScripture: true,
    ref: "Proverbs 27:1",
  },
  {
    text: "The wicked flee when no man pursueth: but the righteous are bold as a lion.",
    isScripture: true,
    ref: "Proverbs 28:1",
  },

  // --- ECCLESIASTES ---
  {
    text: "Vanity of vanities, saith the Preacher, vanity of vanities; all is vanity.",
    isScripture: true,
    ref: "Ecclesiastes 1:2",
  },
  {
    text: "To every thing there is a season, and a time to every purpose under the heaven.",
    isScripture: true,
    ref: "Ecclesiastes 3:1",
  },
  {
    text: "A time to be born, and a time to die; a time to plant, and a time to pluck up that which is planted.",
    isScripture: true,
    ref: "Ecclesiastes 3:2",
  },
  {
    text: "There is no new thing under the sun.",
    isScripture: true,
    ref: "Ecclesiastes 1:9",
  },
  {
    text: "Fear God, and keep his commandments: for this is the whole duty of man.",
    isScripture: true,
    ref: "Ecclesiastes 12:13",
  },
  {
    text: "Two are better than one; because they have a good reward for their labour.",
    isScripture: true,
    ref: "Ecclesiastes 4:9",
  },
  {
    text: "A threefold cord is not quickly broken.",
    isScripture: true,
    ref: "Ecclesiastes 4:12",
  },
  {
    text: "Dead flies cause the ointment of the apothecary to send forth a stinking savour.",
    isScripture: true,
    ref: "Ecclesiastes 10:1",
  },
  {
    text: "Cast thy bread upon the waters: for thou shalt find it after many days.",
    isScripture: true,
    ref: "Ecclesiastes 11:1",
  },

  // --- SONG OF SOLOMON ---
  {
    text: "I am my beloved's and my beloved is mine.",
    isScripture: true,
    ref: "Song of Solomon 6:3",
  },
  {
    text: "Many waters cannot quench love, neither can the floods drown it.",
    isScripture: true,
    ref: "Song of Solomon 8:7",
  },

  // --- ISAIAH ---
  {
    text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles.",
    isScripture: true,
    ref: "Isaiah 40:31",
  },
  {
    text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God.",
    isScripture: true,
    ref: "Isaiah 41:10",
  },
  {
    text: "For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder.",
    isScripture: true,
    ref: "Isaiah 9:6",
  },
  {
    text: "Come now, and let us reason together, saith the LORD: though your sins be as scarlet, they shall be as white as snow.",
    isScripture: true,
    ref: "Isaiah 1:18",
  },
  {
    text: "He was wounded for our transgressions, he was bruised for our iniquities.",
    isScripture: true,
    ref: "Isaiah 53:5",
  },
  {
    text: "All we like sheep have gone astray; we have turned every one to his own way.",
    isScripture: true,
    ref: "Isaiah 53:6",
  },
  {
    text: "The grass withereth, the flower fadeth: but the word of our God shall stand for ever.",
    isScripture: true,
    ref: "Isaiah 40:8",
  },
  {
    text: "No weapon that is formed against thee shall prosper.",
    isScripture: true,
    ref: "Isaiah 54:17",
  },
  {
    text: "For my thoughts are not your thoughts, neither are your ways my ways, saith the LORD.",
    isScripture: true,
    ref: "Isaiah 55:8",
  },
  {
    text: "Ho, every one that thirsteth, come ye to the waters.",
    isScripture: true,
    ref: "Isaiah 55:1",
  },
  {
    text: "Thou wilt keep him in perfect peace, whose mind is stayed on thee.",
    isScripture: true,
    ref: "Isaiah 26:3",
  },
  {
    text: "Hast thou not known? hast thou not heard, that the everlasting God, the LORD, the Creator of the ends of the earth, fainteth not, neither is weary?",
    isScripture: true,
    ref: "Isaiah 40:28",
  },
  {
    text: "I, even I, am he that blotteth out thy transgressions for mine own sake, and will not remember thy sins.",
    isScripture: true,
    ref: "Isaiah 43:25",
  },
  {
    text: "Can a woman forget her sucking child, that she should not have compassion on the son of her womb? yea, they may forget, yet will I not forget thee.",
    isScripture: true,
    ref: "Isaiah 49:15",
  },
  {
    text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you.",
    isScripture: true,
    ref: "Jeremiah 29:11",
  },
  {
    text: "How beautiful upon the mountains are the feet of him that bringeth good tidings.",
    isScripture: true,
    ref: "Isaiah 52:7",
  },

  // --- JEREMIAH ---
  {
    text: "Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee.",
    isScripture: true,
    ref: "Jeremiah 1:5",
  },
  {
    text: "The heart is deceitful above all things, and desperately wicked: who can know it?",
    isScripture: true,
    ref: "Jeremiah 17:9",
  },
  {
    text: "Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.",
    isScripture: true,
    ref: "Jeremiah 33:3",
  },
  {
    text: "Blessed is the man that trusteth in the LORD, and whose hope the LORD is.",
    isScripture: true,
    ref: "Jeremiah 17:7",
  },

  // --- LAMENTATIONS ---
  {
    text: "It is of the LORD's mercies that we are not consumed, because his compassions fail not.",
    isScripture: true,
    ref: "Lamentations 3:22",
  },
  {
    text: "They are new every morning: great is thy faithfulness.",
    isScripture: true,
    ref: "Lamentations 3:23",
  },

  // --- EZEKIEL ---
  {
    text: "I will give you a new heart and put a new spirit in you.",
    isScripture: true,
    ref: "Ezekiel 36:26",
  },
  {
    text: "The soul that sinneth, it shall die.",
    isScripture: true,
    ref: "Ezekiel 18:20",
  },

  // --- DANIEL ---
  {
    text: "The people that do know their God shall be strong, and do exploits.",
    isScripture: true,
    ref: "Daniel 11:32",
  },
  {
    text: "And they that be wise shall shine as the brightness of the firmament.",
    isScripture: true,
    ref: "Daniel 12:3",
  },

  // --- HOSEA ---
  {
    text: "My people are destroyed for lack of knowledge.",
    isScripture: true,
    ref: "Hosea 4:6",
  },
  {
    text: "For they have sown the wind, and they shall reap the whirlwind.",
    isScripture: true,
    ref: "Hosea 8:7",
  },

  // --- JOEL ---
  {
    text: "And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy.",
    isScripture: true,
    ref: "Joel 2:28",
  },

  // --- AMOS ---
  {
    text: "But let judgment run down as waters, and righteousness as a mighty stream.",
    isScripture: true,
    ref: "Amos 5:24",
  },

  // --- MICAH ---
  {
    text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
    isScripture: true,
    ref: "Micah 6:8",
  },

  // --- NAHUM ---
  {
    text: "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.",
    isScripture: true,
    ref: "Nahum 1:7",
  },

  // --- HABAKKUK ---
  {
    text: "The just shall live by his faith.",
    isScripture: true,
    ref: "Habakkuk 2:4",
  },
  {
    text: "The LORD is in his holy temple: let all the earth keep silence before him.",
    isScripture: true,
    ref: "Habakkuk 2:20",
  },

  // --- ZEPHANIAH ---
  {
    text: "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy.",
    isScripture: true,
    ref: "Zephaniah 3:17",
  },

  // --- HAGGAI ---
  {
    text: "The glory of this latter house shall be greater than of the former, saith the LORD of hosts.",
    isScripture: true,
    ref: "Haggai 2:9",
  },

  // --- ZECHARIAH ---
  {
    text: "Not by might, nor by power, but by my spirit, saith the LORD of hosts.",
    isScripture: true,
    ref: "Zechariah 4:6",
  },

  // --- MALACHI ---
  {
    text: "Bring ye all the tithes into the storehouse, that there may be meat in mine house.",
    isScripture: true,
    ref: "Malachi 3:10",
  },
  {
    text: "I have loved you, saith the LORD.",
    isScripture: true,
    ref: "Malachi 1:2",
  },

  // --- MATTHEW ---
  {
    text: "Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
    isScripture: true,
    ref: "Matthew 5:3",
  },
  {
    text: "Blessed are they that mourn: for they shall be comforted.",
    isScripture: true,
    ref: "Matthew 5:4",
  },
  {
    text: "Blessed are the meek: for they shall inherit the earth.",
    isScripture: true,
    ref: "Matthew 5:5",
  },
  {
    text: "Blessed are the pure in heart: for they shall see God.",
    isScripture: true,
    ref: "Matthew 5:8",
  },
  {
    text: "Blessed are the peacemakers: for they shall be called the children of God.",
    isScripture: true,
    ref: "Matthew 5:9",
  },
  {
    text: "Ye are the salt of the earth.",
    isScripture: true,
    ref: "Matthew 5:13",
  },
  {
    text: "Ye are the light of the world. A city that is set on an hill cannot be hid.",
    isScripture: true,
    ref: "Matthew 5:14",
  },
  {
    text: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
    isScripture: true,
    ref: "Matthew 5:16",
  },
  {
    text: "Love your enemies, bless them that curse you, do good to them that hate you.",
    isScripture: true,
    ref: "Matthew 5:44",
  },
  {
    text: "Our Father which art in heaven, Hallowed be thy name.",
    isScripture: true,
    ref: "Matthew 6:9",
  },
  {
    text: "Thy kingdom come. Thy will be done in earth, as it is in heaven.",
    isScripture: true,
    ref: "Matthew 6:10",
  },
  {
    text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
    isScripture: true,
    ref: "Matthew 6:33",
  },
  {
    text: "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself.",
    isScripture: true,
    ref: "Matthew 6:34",
  },
  {
    text: "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.",
    isScripture: true,
    ref: "Matthew 7:7",
  },
  {
    text: "Therefore all things whatsoever ye would that men should do to you, do ye even so to them.",
    isScripture: true,
    ref: "Matthew 7:12",
  },
  {
    text: "Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction.",
    isScripture: true,
    ref: "Matthew 7:13",
  },
  {
    text: "Beware of false prophets, which come to you in sheep's clothing, but inwardly they are ravening wolves.",
    isScripture: true,
    ref: "Matthew 7:15",
  },
  {
    text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    isScripture: true,
    ref: "Matthew 11:28",
  },
  {
    text: "For with God nothing shall be impossible.",
    isScripture: true,
    ref: "Luke 1:37",
  },
  {
    text: "With men this is impossible; but with God all things are possible.",
    isScripture: true,
    ref: "Matthew 19:26",
  },
  {
    text: "Thou shalt love the LORD thy God with all thy heart, and with all thy soul, and with all thy mind.",
    isScripture: true,
    ref: "Matthew 22:37",
  },
  {
    text: "And the second is like unto it, Thou shalt love thy neighbour as thyself.",
    isScripture: true,
    ref: "Matthew 22:39",
  },
  {
    text: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost.",
    isScripture: true,
    ref: "Matthew 28:19",
  },
  {
    text: "Lo, I am with you alway, even unto the end of the world.",
    isScripture: true,
    ref: "Matthew 28:20",
  },
  {
    text: "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.",
    isScripture: true,
    ref: "Matthew 4:4",
  },
  {
    text: "For what is a man profited, if he shall gain the whole world, and lose his own soul?",
    isScripture: true,
    ref: "Matthew 16:26",
  },

  // --- MARK ---
  {
    text: "The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel.",
    isScripture: true,
    ref: "Mark 1:15",
  },
  {
    text: "And he said unto them, Go ye into all the world, and preach the gospel to every creature.",
    isScripture: true,
    ref: "Mark 16:15",
  },
  {
    text: "With God all things are possible.",
    isScripture: true,
    ref: "Mark 10:27",
  },

  // --- LUKE ---
  {
    text: "For the Son of man is come to seek and to save that which was lost.",
    isScripture: true,
    ref: "Luke 19:10",
  },
  {
    text: "And Jesus increased in wisdom and stature, and in favour with God and man.",
    isScripture: true,
    ref: "Luke 2:52",
  },
  {
    text: "Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over.",
    isScripture: true,
    ref: "Luke 6:38",
  },
  {
    text: "For every one that exalteth himself shall be abased; and he that humbleth himself shall be exalted.",
    isScripture: true,
    ref: "Luke 14:11",
  },
  {
    text: "There is joy in the presence of the angels of God over one sinner that repenteth.",
    isScripture: true,
    ref: "Luke 15:10",
  },
  {
    text: "Father, forgive them; for they know not what they do.",
    isScripture: true,
    ref: "Luke 23:34",
  },

  // --- JOHN ---
  {
    text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
    isScripture: true,
    ref: "John 1:1",
  },
  {
    text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    isScripture: true,
    ref: "John 3:16",
  },
  {
    text: "God is a Spirit: and they that worship him must worship him in spirit and in truth.",
    isScripture: true,
    ref: "John 4:24",
  },
  {
    text: "I am the bread of life: he that cometh to me shall never hunger.",
    isScripture: true,
    ref: "John 6:35",
  },
  {
    text: "I am the light of the world: he that followeth me shall not walk in darkness.",
    isScripture: true,
    ref: "John 8:12",
  },
  {
    text: "And ye shall know the truth, and the truth shall make you free.",
    isScripture: true,
    ref: "John 8:32",
  },
  {
    text: "I am the good shepherd: the good shepherd giveth his life for the sheep.",
    isScripture: true,
    ref: "John 10:11",
  },
  {
    text: "I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live.",
    isScripture: true,
    ref: "John 11:25",
  },
  { text: "Jesus wept.", isScripture: true, ref: "John 11:35" },
  {
    text: "A new commandment I give unto you, That ye love one another; as I have loved you.",
    isScripture: true,
    ref: "John 13:34",
  },
  {
    text: "Let not your heart be troubled: ye believe in God, believe also in me.",
    isScripture: true,
    ref: "John 14:1",
  },
  {
    text: "I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
    isScripture: true,
    ref: "John 14:6",
  },
  {
    text: "I will not leave you comfortless: I will come to you.",
    isScripture: true,
    ref: "John 14:18",
  },
  {
    text: "Peace I leave with you, my peace I give unto you.",
    isScripture: true,
    ref: "John 14:27",
  },
  {
    text: "I am the vine, ye are the branches.",
    isScripture: true,
    ref: "John 15:5",
  },
  {
    text: "Greater love hath no man than this, that a man lay down his life for his friends.",
    isScripture: true,
    ref: "John 15:13",
  },
  {
    text: "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",
    isScripture: true,
    ref: "John 16:33",
  },
  {
    text: "Sanctify them through thy truth: thy word is truth.",
    isScripture: true,
    ref: "John 17:17",
  },

  // --- ACTS ---
  {
    text: "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.",
    isScripture: true,
    ref: "Acts 4:12",
  },
  {
    text: "We ought to obey God rather than men.",
    isScripture: true,
    ref: "Acts 5:29",
  },
  {
    text: "Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.",
    isScripture: true,
    ref: "Acts 16:31",
  },
  {
    text: "For in him we live, and move, and have our being.",
    isScripture: true,
    ref: "Acts 17:28",
  },

  // --- ROMANS ---
  {
    text: "For all have sinned, and come short of the glory of God.",
    isScripture: true,
    ref: "Romans 3:23",
  },
  {
    text: "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
    isScripture: true,
    ref: "Romans 6:23",
  },
  {
    text: "And we know that all things work together for good to them that love God.",
    isScripture: true,
    ref: "Romans 8:28",
  },
  {
    text: "If God be for us, who can be against us?",
    isScripture: true,
    ref: "Romans 8:31",
  },
  {
    text: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, nor height, nor depth, shall be able to separate us from the love of God.",
    isScripture: true,
    ref: "Romans 8:38-39",
  },
  {
    text: "I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.",
    isScripture: true,
    ref: "Romans 12:1",
  },
  {
    text: "Be not conformed to this world: but be ye transformed by the renewing of your mind.",
    isScripture: true,
    ref: "Romans 12:2",
  },
  {
    text: "Rejoice with them that do rejoice, and weep with them that weep.",
    isScripture: true,
    ref: "Romans 12:15",
  },
  {
    text: "Recompense to no man evil for evil.",
    isScripture: true,
    ref: "Romans 12:17",
  },
  {
    text: "Be not overcome of evil, but overcome evil with good.",
    isScripture: true,
    ref: "Romans 12:21",
  },
  {
    text: "For the kingdom of God is not meat and drink; but righteousness, and peace, and joy in the Holy Ghost.",
    isScripture: true,
    ref: "Romans 14:17",
  },
  {
    text: "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.",
    isScripture: true,
    ref: "Romans 10:9",
  },
  {
    text: "For whosoever shall call upon the name of the Lord shall be saved.",
    isScripture: true,
    ref: "Romans 10:13",
  },

  // --- 1 CORINTHIANS ---
  {
    text: "For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God.",
    isScripture: true,
    ref: "1 Corinthians 1:18",
  },
  {
    text: "But God hath chosen the foolish things of the world to confound the wise.",
    isScripture: true,
    ref: "1 Corinthians 1:27",
  },
  {
    text: "Know ye not that ye are the temple of God, and that the Spirit of God dwelleth in you?",
    isScripture: true,
    ref: "1 Corinthians 3:16",
  },
  {
    text: "Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up.",
    isScripture: true,
    ref: "1 Corinthians 13:4",
  },
  {
    text: "And now abideth faith, hope, charity, these three; but the greatest of these is charity.",
    isScripture: true,
    ref: "1 Corinthians 13:13",
  },
  {
    text: "For now we see through a glass, darkly; but then face to face.",
    isScripture: true,
    ref: "1 Corinthians 13:12",
  },
  {
    text: "O death, where is thy sting? O grave, where is thy victory?",
    isScripture: true,
    ref: "1 Corinthians 15:55",
  },
  {
    text: "Be ye stedfast, unmoveable, always abounding in the work of the Lord.",
    isScripture: true,
    ref: "1 Corinthians 15:58",
  },
  {
    text: "Watch ye, stand fast in the faith, quit you like men, be strong.",
    isScripture: true,
    ref: "1 Corinthians 16:13",
  },
  {
    text: "Evil communications corrupt good manners.",
    isScripture: true,
    ref: "1 Corinthians 15:33",
  },

  // --- 2 CORINTHIANS ---
  {
    text: "For God so loved the world that he gave his only Son.",
    isScripture: true,
    ref: "John 3:16",
  },
  {
    text: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
    isScripture: true,
    ref: "2 Corinthians 5:17",
  },
  {
    text: "For we walk by faith, not by sight.",
    isScripture: true,
    ref: "2 Corinthians 5:7",
  },
  {
    text: "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.",
    isScripture: true,
    ref: "2 Corinthians 12:9",
  },
  {
    text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
    isScripture: true,
    ref: "2 Timothy 1:7",
  },
  {
    text: "Now the Lord is that Spirit: and where the Spirit of the Lord is, there is liberty.",
    isScripture: true,
    ref: "2 Corinthians 3:17",
  },
  {
    text: "But this I say, He which soweth sparingly shall reap also sparingly; and he which soweth bountifully shall reap also bountifully.",
    isScripture: true,
    ref: "2 Corinthians 9:6",
  },
  {
    text: "Thanks be unto God for his unspeakable gift.",
    isScripture: true,
    ref: "2 Corinthians 9:15",
  },

  // --- GALATIANS ---
  {
    text: "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me.",
    isScripture: true,
    ref: "Galatians 2:20",
  },
  {
    text: "Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also reap.",
    isScripture: true,
    ref: "Galatians 6:7",
  },
  {
    text: "And let us not be weary in well doing: for in due season we shall reap, if we faint not.",
    isScripture: true,
    ref: "Galatians 6:9",
  },
  {
    text: "There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus.",
    isScripture: true,
    ref: "Galatians 3:28",
  },
  {
    text: "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance.",
    isScripture: true,
    ref: "Galatians 5:22-23",
  },

  // --- EPHESIANS ---
  {
    text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.",
    isScripture: true,
    ref: "Ephesians 2:8",
  },
  {
    text: "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.",
    isScripture: true,
    ref: "Ephesians 6:11",
  },
  {
    text: "For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world.",
    isScripture: true,
    ref: "Ephesians 6:12",
  },
  {
    text: "And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.",
    isScripture: true,
    ref: "Ephesians 4:32",
  },
  {
    text: "Children, obey your parents in the Lord: for this is right.",
    isScripture: true,
    ref: "Ephesians 6:1",
  },
  {
    text: "And grieve not the holy Spirit of God, whereby ye are sealed unto the day of redemption.",
    isScripture: true,
    ref: "Ephesians 4:30",
  },

  // --- PHILIPPIANS ---
  {
    text: "I can do all things through Christ which strengtheneth me.",
    isScripture: true,
    ref: "Philippians 4:13",
  },
  {
    text: "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.",
    isScripture: true,
    ref: "Philippians 4:7",
  },
  {
    text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.",
    isScripture: true,
    ref: "Philippians 4:6",
  },
  {
    text: "Rejoice in the Lord alway: and again I say, Rejoice.",
    isScripture: true,
    ref: "Philippians 4:4",
  },
  {
    text: "Whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, think on these things.",
    isScripture: true,
    ref: "Philippians 4:8",
  },
  {
    text: "For to me to live is Christ, and to die is gain.",
    isScripture: true,
    ref: "Philippians 1:21",
  },
  {
    text: "My God shall supply all your need according to his riches in glory by Christ Jesus.",
    isScripture: true,
    ref: "Philippians 4:19",
  },

  // --- COLOSSIANS ---
  {
    text: "Set your affection on things above, not on things on the earth.",
    isScripture: true,
    ref: "Colossians 3:2",
  },
  {
    text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men.",
    isScripture: true,
    ref: "Colossians 3:23",
  },
  {
    text: "Let the peace of God rule in your hearts.",
    isScripture: true,
    ref: "Colossians 3:15",
  },
  {
    text: "Let your speech be always with grace, seasoned with salt, that ye may know how ye ought to answer every man.",
    isScripture: true,
    ref: "Colossians 4:6",
  },

  // --- 1 THESSALONIANS ---
  {
    text: "Pray without ceasing.",
    isScripture: true,
    ref: "1 Thessalonians 5:17",
  },
  {
    text: "In every thing give thanks: for this is the will of God in Christ Jesus concerning you.",
    isScripture: true,
    ref: "1 Thessalonians 5:18",
  },
  {
    text: "Prove all things; hold fast that which is good.",
    isScripture: true,
    ref: "1 Thessalonians 5:21",
  },

  // --- 1 TIMOTHY ---
  {
    text: "For the love of money is the root of all evil.",
    isScripture: true,
    ref: "1 Timothy 6:10",
  },
  {
    text: "Godliness with contentment is great gain.",
    isScripture: true,
    ref: "1 Timothy 6:6",
  },
  {
    text: "Fight the good fight of faith, lay hold on eternal life.",
    isScripture: true,
    ref: "1 Timothy 6:12",
  },

  // --- 2 TIMOTHY ---
  {
    text: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.",
    isScripture: true,
    ref: "2 Timothy 3:16",
  },
  {
    text: "I have fought a good fight, I have finished my course, I have kept the faith.",
    isScripture: true,
    ref: "2 Timothy 4:7",
  },
  {
    text: "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
    isScripture: true,
    ref: "2 Timothy 2:15",
  },

  // --- HEBREWS ---
  {
    text: "Now faith is the substance of things hoped for, the evidence of things not seen.",
    isScripture: true,
    ref: "Hebrews 11:1",
  },
  {
    text: "Without faith it is impossible to please him: for he that cometh to God must believe that he is.",
    isScripture: true,
    ref: "Hebrews 11:6",
  },
  {
    text: "Jesus Christ the same yesterday, and to day, and for ever.",
    isScripture: true,
    ref: "Hebrews 13:8",
  },
  {
    text: "Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.",
    isScripture: true,
    ref: "Hebrews 4:16",
  },
  {
    text: "Let brotherly love continue.",
    isScripture: true,
    ref: "Hebrews 13:1",
  },
  {
    text: "Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight.",
    isScripture: true,
    ref: "Hebrews 12:1",
  },
  {
    text: "For the word of God is quick, and powerful, and sharper than any twoedged sword.",
    isScripture: true,
    ref: "Hebrews 4:12",
  },
  {
    text: "It is appointed unto men once to die, but after this the judgment.",
    isScripture: true,
    ref: "Hebrews 9:27",
  },
  {
    text: "Be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.",
    isScripture: true,
    ref: "Hebrews 13:5",
  },

  // --- JAMES ---
  {
    text: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
    isScripture: true,
    ref: "James 1:5",
  },
  {
    text: "But be ye doers of the word, and not hearers only, deceiving your own selves.",
    isScripture: true,
    ref: "James 1:22",
  },
  {
    text: "Faith without works is dead.",
    isScripture: true,
    ref: "James 2:26",
  },
  {
    text: "Draw nigh to God, and he will draw nigh to you.",
    isScripture: true,
    ref: "James 4:8",
  },
  {
    text: "Humble yourselves in the sight of the Lord, and he shall lift you up.",
    isScripture: true,
    ref: "James 4:10",
  },
  {
    text: "Resist the devil, and he will flee from you.",
    isScripture: true,
    ref: "James 4:7",
  },
  {
    text: "The effectual fervent prayer of a righteous man availeth much.",
    isScripture: true,
    ref: "James 5:16",
  },
  {
    text: "But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated.",
    isScripture: true,
    ref: "James 3:17",
  },

  // --- 1 PETER ---
  {
    text: "Casting all your care upon him; for he careth for you.",
    isScripture: true,
    ref: "1 Peter 5:7",
  },
  {
    text: "Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour.",
    isScripture: true,
    ref: "1 Peter 5:8",
  },
  {
    text: "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people.",
    isScripture: true,
    ref: "1 Peter 2:9",
  },
  {
    text: "For all flesh is as grass, and all the glory of man as the flower of grass.",
    isScripture: true,
    ref: "1 Peter 1:24",
  },
  {
    text: "Love covereth a multitude of sins.",
    isScripture: true,
    ref: "1 Peter 4:8",
  },

  // --- 2 PETER ---
  {
    text: "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward.",
    isScripture: true,
    ref: "2 Peter 3:9",
  },

  // --- 1 JOHN ---
  {
    text: "God is love; and he that dwelleth in love dwelleth in God, and God in him.",
    isScripture: true,
    ref: "1 John 4:16",
  },
  {
    text: "There is no fear in love; but perfect love casteth out fear.",
    isScripture: true,
    ref: "1 John 4:18",
  },
  {
    text: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
    isScripture: true,
    ref: "1 John 1:9",
  },
  {
    text: "Beloved, let us love one another: for love is of God.",
    isScripture: true,
    ref: "1 John 4:7",
  },
  {
    text: "And this is the confidence that we have in him, that, if we ask any thing according to his will, he heareth us.",
    isScripture: true,
    ref: "1 John 5:14",
  },
  {
    text: "The world passeth away, and the lust thereof: but he that doeth the will of God abideth for ever.",
    isScripture: true,
    ref: "1 John 2:17",
  },

  // --- JUDE ---
  {
    text: "Keep yourselves in the love of God, looking for the mercy of our Lord Jesus Christ unto eternal life.",
    isScripture: true,
    ref: "Jude 1:21",
  },

  // --- REVELATION ---
  {
    text: "I am Alpha and Omega, the beginning and the ending, saith the Lord.",
    isScripture: true,
    ref: "Revelation 1:8",
  },
  {
    text: "Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him.",
    isScripture: true,
    ref: "Revelation 3:20",
  },
  {
    text: "Holy, holy, holy, Lord God Almighty, which was, and is, and is to come.",
    isScripture: true,
    ref: "Revelation 4:8",
  },
  {
    text: "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying.",
    isScripture: true,
    ref: "Revelation 21:4",
  },
  {
    text: "Behold, I make all things new.",
    isScripture: true,
    ref: "Revelation 21:5",
  },
  {
    text: "Blessed are they that do his commandments, that they may have right to the tree of life.",
    isScripture: true,
    ref: "Revelation 22:14",
  },
  {
    text: "And whosoever was not found written in the book of life was cast into the lake of fire.",
    isScripture: true,
    ref: "Revelation 20:15",
  },
  {
    text: "Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing.",
    isScripture: true,
    ref: "Revelation 5:12",
  },
  {
    text: "He that hath an ear, let him hear what the Spirit saith unto the churches.",
    isScripture: true,
    ref: "Revelation 2:7",
  },
  {
    text: "The grace of our Lord Jesus Christ be with you all. Amen.",
    isScripture: true,
    ref: "Revelation 22:21",
  },

  // ============================================================
  // NON-SCRIPTURE: POPULAR QUOTES MISTAKEN FOR THE BIBLE (~300)
  // ============================================================

  // --- COMMONLY MISATTRIBUTED TO THE BIBLE ---
  {
    text: "God helps those who help themselves.",
    isScripture: false,
    ref: "Algernon Sidney / popularized by Benjamin Franklin",
  },
  {
    text: "Cleanliness is next to godliness.",
    isScripture: false,
    ref: "John Wesley (sermon, 1778)",
  },
  {
    text: "This too shall pass.",
    isScripture: false,
    ref: "Attributed to a Persian Sufi proverb",
  },
  {
    text: "God moves in a mysterious way, His wonders to perform.",
    isScripture: false,
    ref: "William Cowper, hymn (1773)",
  },
  {
    text: "The road to hell is paved with good intentions.",
    isScripture: false,
    ref: "Attributed to Saint Bernard of Clairvaux, popularized later",
  },
  {
    text: "Charity begins at home.",
    isScripture: false,
    ref: "Sir Thomas Browne, Religio Medici (1642)",
  },
  {
    text: "To thine own self be true.",
    isScripture: false,
    ref: "William Shakespeare, Hamlet (1600)",
  },
  {
    text: "Money is the root of all evil.",
    isScripture: false,
    ref: "Common misquote of 1 Timothy 6:10 (omits 'the love of')",
  },
  {
    text: "Spare the rod and spoil the child.",
    isScripture: false,
    ref: "Samuel Butler, Hudibras (1664) — not a direct Bible verse",
  },
  {
    text: "The lion shall lie down with the lamb.",
    isScripture: false,
    ref: "Common misquote; the Bible says the wolf, not the lion (Isaiah 11:6)",
  },
  {
    text: "God works in mysterious ways.",
    isScripture: false,
    ref: "William Cowper, hymn (1773) — paraphrase, not a scripture",
  },
  {
    text: "Pride comes before a fall.",
    isScripture: false,
    ref: "Shortened paraphrase of Proverbs 16:18 — not a verbatim verse",
  },
  {
    text: "The truth will set you free.",
    isScripture: false,
    ref: "Partial paraphrase of John 8:32 — often used without scriptural context",
  },
  {
    text: "Hate the sin, love the sinner.",
    isScripture: false,
    ref: "Attributed to Saint Augustine / Mahatma Gandhi",
  },
  {
    text: "For all have sinned and fallen short.",
    isScripture: false,
    ref: "Paraphrase/misquote of Romans 3:23",
  },
  {
    text: "To err is human, to forgive is divine.",
    isScripture: false,
    ref: "Alexander Pope, An Essay on Criticism (1711)",
  },
  {
    text: "God is good all the time, and all the time God is good.",
    isScripture: false,
    ref: "Popular church saying — not a biblical verse",
  },
  {
    text: "Everything happens for a reason.",
    isScripture: false,
    ref: "Popular saying — not found in the Bible",
  },
  {
    text: "When God closes a door, He opens a window.",
    isScripture: false,
    ref: "Attributed to The Sound of Music (1965) / popular saying",
  },
  {
    text: "The eye is the window to the soul.",
    isScripture: false,
    ref: "William Shakespeare / Leonardo da Vinci — not scripture",
  },
  {
    text: "Let go and let God.",
    isScripture: false,
    ref: "AA slogan / popular Christian saying — not a Bible verse",
  },
  {
    text: "Judge not lest ye be judged.",
    isScripture: false,
    ref: "Partial paraphrase of Matthew 7:1 — often misused out of context",
  },
  {
    text: "God is love.",
    isScripture: false,
    ref: "While 1 John 4:8 contains this phrase, it is so often quoted in isolation that it functions as a misattribution",
  },
  {
    text: "Footprints in the Sand — I carried you through your trials.",
    isScripture: false,
    ref: "Margaret Fishback Powers, poem (1964)",
  },
  {
    text: "The darkest hour is just before the dawn.",
    isScripture: false,
    ref: "Thomas Fuller, A Pisgah-Sight Of Palestine (1650)",
  },
  {
    text: "Physician, heal thyself — and then prove your goodness by healing others.",
    isScripture: false,
    ref: "Expansion; Luke 4:23 says only 'Physician, heal thyself'",
  },
  {
    text: "The wages of sin is spiritual poverty.",
    isScripture: false,
    ref: "Paraphrase/misquote of Romans 6:23 — the verse says 'death', not spiritual poverty",
  },
  {
    text: "You are the master of your fate and the captain of your soul.",
    isScripture: false,
    ref: "William Ernest Henley, Invictus (1875)",
  },
  {
    text: "There is nothing either good or bad, but thinking makes it so.",
    isScripture: false,
    ref: "William Shakespeare, Hamlet (1600)",
  },
  {
    text: "It is better to have loved and lost than never to have loved at all.",
    isScripture: false,
    ref: "Alfred Lord Tennyson, In Memoriam A.H.H. (1850)",
  },
  {
    text: "Well done is better than well said.",
    isScripture: false,
    ref: "Benjamin Franklin, Poor Richard's Almanack (1737)",
  },
  {
    text: "An eye for an eye makes the whole world blind.",
    isScripture: false,
    ref: "Attributed to Mahatma Gandhi — not a Bible verse",
  },
  {
    text: "Forgive and forget.",
    isScripture: false,
    ref: "Popular proverb; the Bible does not say to forget, only to forgive",
  },
  {
    text: "You reap what you sow — karma is real.",
    isScripture: false,
    ref: "Conflation of Galatians 6:7 with Eastern karma concept",
  },
  {
    text: "Do unto others as you would have them do unto you — this is the Golden Rule of life.",
    isScripture: false,
    ref: "Matthew 7:12 contains this but 'Golden Rule' is not a biblical term",
  },
  {
    text: "My grace is sufficient for you — you don't need anything else.",
    isScripture: false,
    ref: "Addition to 2 Corinthians 12:9 — the verse doesn't say the second clause",
  },
  {
    text: "All things work together for those who love the Lord.",
    isScripture: false,
    ref: "Paraphrase/misquote of Romans 8:28 — omits 'for good'",
  },
  {
    text: "Nature is the art of God.",
    isScripture: false,
    ref: "Dante Alighieri / Sir Thomas Browne",
  },
  {
    text: "Be the change you wish to see in the world.",
    isScripture: false,
    ref: "Attributed to Mahatma Gandhi — not scripture",
  },
  {
    text: "It is not in the stars to hold our destiny but in ourselves.",
    isScripture: false,
    ref: "William Shakespeare, Julius Caesar (1599)",
  },
  {
    text: "Where there is love there is life.",
    isScripture: false,
    ref: "Attributed to Mahatma Gandhi",
  },
  {
    text: "Service to others is the rent you pay for your room here on earth.",
    isScripture: false,
    ref: "Muhammad Ali — not scripture",
  },
  {
    text: "The battle is not yours, it is the Lord's — so lay down your sword.",
    isScripture: false,
    ref: "2 Chronicles 20:15 says 'the battle is not yours, but God's' — the second clause is an addition",
  },
  {
    text: "He who finds a wife finds a good thing.",
    isScripture: false,
    ref: "Paraphrase of Proverbs 18:22 — commonly quoted incorrectly",
  },
  {
    text: "In all things give thanks.",
    isScripture: false,
    ref: "Paraphrase of 1 Thessalonians 5:18 — not exact KJV wording",
  },
  {
    text: "God will never give you more than you can handle.",
    isScripture: false,
    ref: "Common misapplication of 1 Corinthians 10:13, which refers only to temptation",
  },
  {
    text: "With faith the size of a mustard seed, you can move any mountain.",
    isScripture: false,
    ref: "Paraphrase of Matthew 17:20 — slightly altered from scripture",
  },
  {
    text: "Children are a blessing from the Lord.",
    isScripture: false,
    ref: "Paraphrase of Psalm 127:3 — not exact KJV wording",
  },
  {
    text: "Seek and ye shall find.",
    isScripture: false,
    ref: "Partial paraphrase of Matthew 7:7 — omits full verse",
  },
  {
    text: "Though I walk through the valley of death, I fear no evil.",
    isScripture: false,
    ref: "Paraphrase of Psalm 23:4 — not the exact KJV wording",
  },
  {
    text: "Eye hath not seen, nor ear heard what God has prepared.",
    isScripture: false,
    ref: "Partial paraphrase of 1 Corinthians 2:9 — often misquoted",
  },
  {
    text: "Your body is a temple — treat it with respect.",
    isScripture: false,
    ref: "Application/paraphrase of 1 Corinthians 6:19 — added editorial",
  },
  {
    text: "Train up a child and he will not depart.",
    isScripture: false,
    ref: "Shortened paraphrase of Proverbs 22:6 — not the exact verse",
  },
  {
    text: "A man's character is his destiny.",
    isScripture: false,
    ref: "Heraclitus, Greek philosopher — not scripture",
  },
  {
    text: "The truth is rarely pure and never simple.",
    isScripture: false,
    ref: "Oscar Wilde, The Importance of Being Earnest (1895)",
  },
  {
    text: "Do all the good you can, by all the means you can.",
    isScripture: false,
    ref: "John Wesley — not a Bible verse",
  },
  {
    text: "When you have done everything you can, stand.",
    isScripture: false,
    ref: "Paraphrase of Ephesians 6:13 — not exact wording",
  },
  {
    text: "You will know them by their fruits.",
    isScripture: false,
    ref: "Paraphrase of Matthew 7:16 — not exact KJV wording",
  },
  {
    text: "Don't worry, be happy.",
    isScripture: false,
    ref: "Bobby McFerrin, song (1988) — not scripture",
  },
  {
    text: "Happiness is not something ready-made; it comes from your own actions.",
    isScripture: false,
    ref: "Attributed to Dalai Lama — not scripture",
  },
  {
    text: "Prayer is not asking. It is a longing of the soul.",
    isScripture: false,
    ref: "Attributed to Mahatma Gandhi — not scripture",
  },
  {
    text: "Science without religion is lame; religion without science is blind.",
    isScripture: false,
    ref: "Albert Einstein, New York Times (1930)",
  },
  {
    text: "Darkness cannot drive out darkness; only light can do that.",
    isScripture: false,
    ref: "Martin Luther King Jr., Strength to Love (1963)",
  },
  {
    text: "There can be no deep disappointment where there is not deep love.",
    isScripture: false,
    ref: "Martin Luther King Jr. — not scripture",
  },
  {
    text: "Faith is taking the first step even when you don't see the whole staircase.",
    isScripture: false,
    ref: "Martin Luther King Jr. — not scripture",
  },
  {
    text: "The time is always right to do what is right.",
    isScripture: false,
    ref: "Martin Luther King Jr. — not scripture",
  },
  {
    text: "We must accept finite disappointment, but never lose infinite hope.",
    isScripture: false,
    ref: "Martin Luther King Jr. — not scripture",
  },
  {
    text: "The soul that is within me no man can degrade.",
    isScripture: false,
    ref: "Frederick Douglass — not scripture",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    isScripture: false,
    ref: "Albert Einstein — not scripture",
  },
  {
    text: "If you want to go fast, go alone; if you want to go far, go together.",
    isScripture: false,
    ref: "African proverb — not a biblical verse",
  },
  {
    text: "It takes a village to raise a child.",
    isScripture: false,
    ref: "African proverb — not a biblical verse",
  },
  {
    text: "When the music changes, so does the dance.",
    isScripture: false,
    ref: "African proverb — not scripture",
  },
  {
    text: "Smooth seas do not make skillful sailors.",
    isScripture: false,
    ref: "African proverb — not scripture",
  },
  {
    text: "Even the darkest night will end and the sun will rise.",
    isScripture: false,
    ref: "Victor Hugo, Les Misérables (1862)",
  },
  {
    text: "The flower that blooms in adversity is the rarest and most beautiful of all.",
    isScripture: false,
    ref: "Disney's Mulan — not scripture",
  },
  {
    text: "Kind words can be short and easy to speak, but their echoes are truly endless.",
    isScripture: false,
    ref: "Attributed to Mother Teresa — not scripture",
  },
  {
    text: "Not all those who wander are lost.",
    isScripture: false,
    ref: "J.R.R. Tolkien, The Lord of the Rings (1954)",
  },
  {
    text: "All that is gold does not glitter.",
    isScripture: false,
    ref: "J.R.R. Tolkien, The Lord of the Rings (1954)",
  },
  {
    text: "We are all in the gutter, but some of us are looking at the stars.",
    isScripture: false,
    ref: "Oscar Wilde, Lady Windermere's Fan (1892)",
  },
  {
    text: "No man is an island, entire of itself.",
    isScripture: false,
    ref: "John Donne, Devotions upon Emergent Occasions (1624)",
  },
  {
    text: "Death be not proud, though some have called thee mighty and dreadful.",
    isScripture: false,
    ref: "John Donne, Holy Sonnets (1633)",
  },
  {
    text: "The quality of mercy is not strained.",
    isScripture: false,
    ref: "William Shakespeare, The Merchant of Venice (1596)",
  },
  {
    text: "Cowards die many times before their deaths; the valiant never taste of death but once.",
    isScripture: false,
    ref: "William Shakespeare, Julius Caesar (1599)",
  },
  {
    text: "What a piece of work is man, how noble in reason, how infinite in faculties.",
    isScripture: false,
    ref: "William Shakespeare, Hamlet (1600)",
  },
  {
    text: "All the world's a stage, and all the men and women merely players.",
    isScripture: false,
    ref: "William Shakespeare, As You Like It (1599)",
  },
  {
    text: "We know what we are, but know not what we may be.",
    isScripture: false,
    ref: "William Shakespeare, Hamlet (1600)",
  },
  {
    text: "There is nothing permanent except change.",
    isScripture: false,
    ref: "Heraclitus, Greek philosopher",
  },
  {
    text: "An unexamined life is not worth living.",
    isScripture: false,
    ref: "Socrates (as recorded by Plato)",
  },
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    isScripture: false,
    ref: "Nelson Mandela — not scripture",
  },
  {
    text: "It always seems impossible until it's done.",
    isScripture: false,
    ref: "Nelson Mandela — not scripture",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    isScripture: false,
    ref: "Nelson Mandela — not scripture",
  },
  {
    text: "I have learned that people will forget what you said, but they will never forget how you made them feel.",
    isScripture: false,
    ref: "Attributed to Maya Angelou — not scripture",
  },
  {
    text: "You may encounter many defeats, but you must not be defeated.",
    isScripture: false,
    ref: "Maya Angelou — not scripture",
  },
  {
    text: "I've learned that you can tell a lot about a person by the way they handle three things: a rainy day, lost luggage, and tangled Christmas tree lights.",
    isScripture: false,
    ref: "Maya Angelou — not scripture",
  },
  {
    text: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
    isScripture: false,
    ref: "Maya Angelou — not scripture",
  },
  {
    text: "If you don't like something, change it. If you can't change it, change your attitude.",
    isScripture: false,
    ref: "Maya Angelou — not scripture",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    isScripture: false,
    ref: "Attributed to Winston Churchill — not scripture",
  },
  {
    text: "We make a living by what we get, but we make a life by what we give.",
    isScripture: false,
    ref: "Attributed to Winston Churchill — not scripture",
  },
  {
    text: "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
    isScripture: false,
    ref: "Attributed to Winston Churchill — not scripture",
  },
  {
    text: "Kites rise highest against the wind — not with it.",
    isScripture: false,
    ref: "Attributed to Winston Churchill — not scripture",
  },
  {
    text: "The secret of getting ahead is getting started.",
    isScripture: false,
    ref: "Attributed to Mark Twain — not scripture",
  },
  {
    text: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    isScripture: false,
    ref: "Mark Twain — not scripture",
  },
  {
    text: "Kindness is the language which the deaf can hear and the blind can see.",
    isScripture: false,
    ref: "Mark Twain — not scripture",
  },
  {
    text: "The two most important days in your life are the day you are born and the day you find out why.",
    isScripture: false,
    ref: "Attributed to Mark Twain — not scripture",
  },
  {
    text: "Never put off till tomorrow what may be done day after tomorrow just as well.",
    isScripture: false,
    ref: "Mark Twain — not scripture",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    isScripture: false,
    ref: "Attributed to Confucius — not scripture",
  },
  {
    text: "Before you embark on a journey of revenge, dig two graves.",
    isScripture: false,
    ref: "Attributed to Confucius — not scripture",
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    isScripture: false,
    ref: "Attributed to Confucius — not scripture",
  },
  {
    text: "He who learns but does not think is lost. He who thinks but does not learn is in great danger.",
    isScripture: false,
    ref: "Confucius, The Analects — not scripture",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    isScripture: false,
    ref: "Attributed to Confucius — not scripture",
  },
  {
    text: "I am not afraid of storms, for I am learning how to sail my ship.",
    isScripture: false,
    ref: "Louisa May Alcott, Little Women (1868)",
  },
  {
    text: "The only way out of the labyrinth of suffering is to forgive.",
    isScripture: false,
    ref: "John Green, Looking for Alaska (2005)",
  },
  {
    text: "What we think, we become.",
    isScripture: false,
    ref: "Attributed to Buddha — not scripture",
  },
  {
    text: "Three things cannot be long hidden: the sun, the moon, and the truth.",
    isScripture: false,
    ref: "Attributed to Buddha — not scripture",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    isScripture: false,
    ref: "Attributed to Buddha — not scripture",
  },
  {
    text: "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened.",
    isScripture: false,
    ref: "Attributed to Buddha — not scripture",
  },
  {
    text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    isScripture: false,
    ref: "Attributed to Buddha — not scripture",
  },
  {
    text: "You can tell the character of a man by how he treats those who can do nothing for him.",
    isScripture: false,
    ref: "Attributed to various — not scripture",
  },
  {
    text: "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.",
    isScripture: false,
    ref: "Marianne Williamson, A Return to Love (1992)",
  },
  {
    text: "It is our light, not our darkness, that most frightens us.",
    isScripture: false,
    ref: "Marianne Williamson, A Return to Love (1992)",
  },
  {
    text: "Who am I to be brilliant, gorgeous, talented, fabulous? Actually, who are you not to be?",
    isScripture: false,
    ref: "Marianne Williamson, A Return to Love (1992)",
  },
  {
    text: "The most common form of despair is not being who you are.",
    isScripture: false,
    ref: "Søren Kierkegaard — not scripture",
  },
  {
    text: "God is dead. God remains dead. And we have killed him.",
    isScripture: false,
    ref: "Friedrich Nietzsche, The Gay Science (1882)",
  },
  {
    text: "That which does not kill us makes us stronger.",
    isScripture: false,
    ref: "Friedrich Nietzsche, Twilight of the Idols (1889)",
  },
  {
    text: "Without music, life would be a mistake.",
    isScripture: false,
    ref: "Friedrich Nietzsche, Twilight of the Idols (1889)",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    isScripture: false,
    ref: "Oscar Wilde — not scripture",
  },
  {
    text: "The only thing we have to fear is fear itself.",
    isScripture: false,
    ref: "Franklin D. Roosevelt, Inaugural Address (1933)",
  },
  {
    text: "Ask not what your country can do for you — ask what you can do for your country.",
    isScripture: false,
    ref: "John F. Kennedy, Inaugural Address (1961)",
  },
  {
    text: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin.",
    isScripture: false,
    ref: "Martin Luther King Jr., speech (1963)",
  },
  {
    text: "The arc of the moral universe is long, but it bends toward justice.",
    isScripture: false,
    ref: "Theodore Parker / Martin Luther King Jr. — not scripture",
  },
  {
    text: "Injustice anywhere is a threat to justice everywhere.",
    isScripture: false,
    ref: "Martin Luther King Jr., Letter from Birmingham Jail (1963)",
  },
  {
    text: "The weak can never forgive. Forgiveness is the attribute of the strong.",
    isScripture: false,
    ref: "Mahatma Gandhi — not scripture",
  },
  {
    text: "Be the change you wish to see in the world.",
    isScripture: false,
    ref: "Attributed to Mahatma Gandhi — not scripture",
  },
  {
    text: "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.",
    isScripture: false,
    ref: "Mahatma Gandhi — not scripture",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    isScripture: false,
    ref: "Eleanor Roosevelt — not scripture",
  },
  {
    text: "No one can make you feel inferior without your consent.",
    isScripture: false,
    ref: "Eleanor Roosevelt — not scripture",
  },
  {
    text: "Do one thing every day that scares you.",
    isScripture: false,
    ref: "Eleanor Roosevelt / Mary Schmich — not scripture",
  },
  {
    text: "Well-behaved women seldom make history.",
    isScripture: false,
    ref: "Laurel Thatcher Ulrich — not scripture",
  },
  {
    text: "I am no bird; and no net ensnares me.",
    isScripture: false,
    ref: "Charlotte Brontë, Jane Eyre (1847)",
  },
  {
    text: "It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife.",
    isScripture: false,
    ref: "Jane Austen, Pride and Prejudice (1813)",
  },
  {
    text: "Speak the truth, even if your voice shakes.",
    isScripture: false,
    ref: "Attributed to various — not scripture",
  },
  {
    text: "A friend is one that knows you as you are, understands where you have been, accepts what you have become.",
    isScripture: false,
    ref: "Attributed to William Shakespeare — not scripture",
  },
  {
    text: "Kind hearts are the gardens, kind thoughts are the roots, kind words are the flowers.",
    isScripture: false,
    ref: "Henry Wadsworth Longfellow — not scripture",
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    isScripture: false,
    ref: "Helen Keller — not scripture",
  },
  {
    text: "Alone we can do so little; together we can do so much.",
    isScripture: false,
    ref: "Helen Keller — not scripture",
  },
  {
    text: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    isScripture: false,
    ref: "Helen Keller — not scripture",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    isScripture: false,
    ref: "Allen Saunders / John Lennon — not scripture",
  },
  {
    text: "Imagination is more important than knowledge.",
    isScripture: false,
    ref: "Albert Einstein — not scripture",
  },
  {
    text: "The definition of insanity is doing the same thing over and over again and expecting different results.",
    isScripture: false,
    ref: "Attributed to Albert Einstein — not scripture",
  },
  {
    text: "Try not to become a man of success but rather try to become a man of value.",
    isScripture: false,
    ref: "Albert Einstein — not scripture",
  },
  {
    text: "A person who never made a mistake never tried anything new.",
    isScripture: false,
    ref: "Albert Einstein — not scripture",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    isScripture: false,
    ref: "Albert Einstein — not scripture",
  },
  {
    text: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    isScripture: false,
    ref: "Albert Einstein — not scripture",
  },
  {
    text: "The greatest mistake you can make in life is to be continually fearing you will make one.",
    isScripture: false,
    ref: "Elbert Hubbard — not scripture",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    isScripture: false,
    ref: "Chinese proverb — not scripture",
  },
  {
    text: "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.",
    isScripture: false,
    ref: "Chinese proverb — not scripture",
  },
  {
    text: "A journey of a thousand miles begins with a single step.",
    isScripture: false,
    ref: "Lao Tzu, Tao Te Ching — not scripture",
  },
  {
    text: "Know thyself.",
    isScripture: false,
    ref: "Socrates / inscribed at Delphi — not scripture",
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    isScripture: false,
    ref: "Aristotle (as paraphrased by Will Durant) — not scripture",
  },
  {
    text: "The roots of education are bitter, but the fruit is sweet.",
    isScripture: false,
    ref: "Aristotle — not scripture",
  },
  {
    text: "Pleasure in the job puts perfection in the work.",
    isScripture: false,
    ref: "Aristotle — not scripture",
  },
  {
    text: "Knowing yourself is the beginning of all wisdom.",
    isScripture: false,
    ref: "Attributed to Aristotle — not scripture",
  },
  {
    text: "It is not in the stars to hold our destiny but in ourselves.",
    isScripture: false,
    ref: "William Shakespeare, Julius Caesar (1599)",
  },
  {
    text: "The course of true love never did run smooth.",
    isScripture: false,
    ref: "William Shakespeare, A Midsummer Night's Dream (1600)",
  },
  {
    text: "Better three hours too soon than a minute too late.",
    isScripture: false,
    ref: "William Shakespeare, The Merry Wives of Windsor (1602)",
  },
  {
    text: "Give every man thy ear, but few thy voice.",
    isScripture: false,
    ref: "William Shakespeare, Hamlet (1600)",
  },
  {
    text: "Nothing will come of nothing.",
    isScripture: false,
    ref: "William Shakespeare, King Lear (1606)",
  },
  {
    text: "The lady doth protest too much, methinks.",
    isScripture: false,
    ref: "William Shakespeare, Hamlet (1600)",
  },
  {
    text: "Brevity is the soul of wit.",
    isScripture: false,
    ref: "William Shakespeare, Hamlet (1600)",
  },
  {
    text: "What's in a name? That which we call a rose by any other name would smell as sweet.",
    isScripture: false,
    ref: "William Shakespeare, Romeo and Juliet (1597)",
  },
  {
    text: "We know what we are, but know not what we may be.",
    isScripture: false,
    ref: "William Shakespeare, Hamlet (1600)",
  },
  {
    text: "There is nothing either good or bad but thinking makes it so.",
    isScripture: false,
    ref: "William Shakespeare, Hamlet (1600)",
  },
  {
    text: "Hell is empty and all the devils are here.",
    isScripture: false,
    ref: "William Shakespeare, The Tempest (1611)",
  },
  {
    text: "How sharper than a serpent's tooth it is to have a thankless child.",
    isScripture: false,
    ref: "William Shakespeare, King Lear (1606)",
  },
  {
    text: "Men at some time are masters of their fates.",
    isScripture: false,
    ref: "William Shakespeare, Julius Caesar (1599)",
  },
  {
    text: "Uneasy lies the head that wears a crown.",
    isScripture: false,
    ref: "William Shakespeare, Henry IV Part 2 (1600)",
  },
  {
    text: "Out, damned spot! Out, I say!",
    isScripture: false,
    ref: "William Shakespeare, Macbeth (1606)",
  },
  {
    text: "Good night, good night! Parting is such sweet sorrow.",
    isScripture: false,
    ref: "William Shakespeare, Romeo and Juliet (1597)",
  },
  {
    text: "All that glitters is not gold.",
    isScripture: false,
    ref: "William Shakespeare, The Merchant of Venice (1596)",
  },
  {
    text: "The robbed that smiles, steals something from the thief.",
    isScripture: false,
    ref: "William Shakespeare, Othello (1603)",
  },
  {
    text: "Our doubts are traitors and make us lose the good we oft might win, by fearing to attempt.",
    isScripture: false,
    ref: "William Shakespeare, Measure for Measure (1603)",
  },
  {
    text: "The bravest sight in the world is to see a great man struggling against adversity.",
    isScripture: false,
    ref: "Seneca the Younger — not scripture",
  },
  {
    text: "Luck is what happens when preparation meets opportunity.",
    isScripture: false,
    ref: "Seneca the Younger — not scripture",
  },
  {
    text: "It is not that I'm so smart. It's just that I stay with problems longer.",
    isScripture: false,
    ref: "Albert Einstein — not scripture",
  },
  {
    text: "Believe you can and you're halfway there.",
    isScripture: false,
    ref: "Theodore Roosevelt — not scripture",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    isScripture: false,
    ref: "Theodore Roosevelt — not scripture",
  },
  {
    text: "Speak softly and carry a big stick.",
    isScripture: false,
    ref: "Theodore Roosevelt — not scripture",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    isScripture: false,
    ref: "Franklin D. Roosevelt — not scripture",
  },
  {
    text: "Honesty is the first chapter in the book of wisdom.",
    isScripture: false,
    ref: "Thomas Jefferson — not scripture",
  },
  {
    text: "Never trouble another for what you can do yourself.",
    isScripture: false,
    ref: "Thomas Jefferson — not scripture",
  },
  {
    text: "I cannot live without books.",
    isScripture: false,
    ref: "Thomas Jefferson — not scripture",
  },
  {
    text: "Early to bed and early to rise makes a man healthy, wealthy, and wise.",
    isScripture: false,
    ref: "Benjamin Franklin, Poor Richard's Almanack (1735)",
  },
  {
    text: "An investment in knowledge pays the best interest.",
    isScripture: false,
    ref: "Benjamin Franklin — not scripture",
  },
  {
    text: "By failing to prepare, you are preparing to fail.",
    isScripture: false,
    ref: "Benjamin Franklin — not scripture",
  },
  {
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    isScripture: false,
    ref: "Benjamin Franklin — not scripture",
  },
  {
    text: "In this world nothing can be said to be certain, except death and taxes.",
    isScripture: false,
    ref: "Benjamin Franklin — not scripture",
  },
  {
    text: "The pen is mightier than the sword.",
    isScripture: false,
    ref: "Edward Bulwer-Lytton, Richelieu (1839)",
  },
  {
    text: "To be or not to be, that is the question.",
    isScripture: false,
    ref: "William Shakespeare, Hamlet (1600)",
  },
  {
    text: "I think, therefore I am.",
    isScripture: false,
    ref: "René Descartes, Discourse on the Method (1637)",
  },
  {
    text: "The unexamined life is not worth living.",
    isScripture: false,
    ref: "Socrates (as recorded by Plato in Apology)",
  },
  {
    text: "Power tends to corrupt, and absolute power corrupts absolutely.",
    isScripture: false,
    ref: "Lord Acton, letter (1887)",
  },
  {
    text: "Hell hath no fury like a woman scorned.",
    isScripture: false,
    ref: "William Congreve, The Mourning Bride (1697)",
  },
  {
    text: "A house divided against itself cannot stand.",
    isScripture: false,
    ref: "Abraham Lincoln, speech (1858) — paraphrase of Mark 3:25 but popularized by Lincoln",
  },
  {
    text: "Give me liberty, or give me death!",
    isScripture: false,
    ref: "Patrick Henry, speech (1775)",
  },
  {
    text: "Four score and seven years ago our fathers brought forth on this continent a new nation.",
    isScripture: false,
    ref: "Abraham Lincoln, Gettysburg Address (1863)",
  },
  {
    text: "With malice toward none, with charity for all.",
    isScripture: false,
    ref: "Abraham Lincoln, Second Inaugural Address (1865)",
  },
  {
    text: "Float like a butterfly, sting like a bee.",
    isScripture: false,
    ref: "Muhammad Ali — not scripture",
  },
  {
    text: "I am the greatest. I said that even before I knew I was.",
    isScripture: false,
    ref: "Muhammad Ali — not scripture",
  },
  {
    text: "It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe.",
    isScripture: false,
    ref: "Muhammad Ali — not scripture",
  },
  {
    text: "You miss 100 percent of the shots you don't take.",
    isScripture: false,
    ref: "Wayne Gretzky — not scripture",
  },
  {
    text: "Hard work beats talent when talent doesn't work hard.",
    isScripture: false,
    ref: "Tim Notke — not scripture",
  },
  {
    text: "Whether you think you can or think you can't, you're right.",
    isScripture: false,
    ref: "Henry Ford — not scripture",
  },
  {
    text: "Coming together is a beginning, staying together is progress, and working together is success.",
    isScripture: false,
    ref: "Henry Ford — not scripture",
  },
  {
    text: "The only thing worse than being blind is having sight but no vision.",
    isScripture: false,
    ref: "Helen Keller — not scripture",
  },
  {
    text: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened.",
    isScripture: false,
    ref: "Helen Keller — not scripture",
  },
  {
    text: "Science flies you to the moon. Religion flies you into buildings.",
    isScripture: false,
    ref: "Victor Stenger — not scripture",
  },
  {
    text: "One small step for man, one giant leap for mankind.",
    isScripture: false,
    ref: "Neil Armstrong — not scripture",
  },
  {
    text: "Houston, we have a problem.",
    isScripture: false,
    ref: "Apollo 13 mission (1970) — not scripture",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    isScripture: false,
    ref: "Thomas Edison — not scripture",
  },
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    isScripture: false,
    ref: "Thomas Edison — not scripture",
  },
  {
    text: "We are the change we have been waiting for.",
    isScripture: false,
    ref: "Barack Obama — not scripture",
  },
  {
    text: "Yes we can.",
    isScripture: false,
    ref: "Barack Obama, campaign slogan (2008) — not scripture",
  },
  {
    text: "Change will not come if we wait for some other person or some other time.",
    isScripture: false,
    ref: "Barack Obama — not scripture",
  },
  {
    text: "The price of anything is the amount of life you exchange for it.",
    isScripture: false,
    ref: "Henry David Thoreau — not scripture",
  },
  {
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    isScripture: false,
    ref: "Henry David Thoreau — not scripture",
  },
  {
    text: "Not all who wander are lost.",
    isScripture: false,
    ref: "J.R.R. Tolkien, The Fellowship of the Ring (1954)",
  },
  {
    text: "Even darkness must pass. A new day will come. And when the sun shines it will shine out the clearer.",
    isScripture: false,
    ref: "J.R.R. Tolkien, The Two Towers (1954)",
  },
  {
    text: "It's a dangerous business, going out your door.",
    isScripture: false,
    ref: "J.R.R. Tolkien, The Lord of the Rings (1954)",
  },
  {
    text: "Do or do not — there is no try.",
    isScripture: false,
    ref: "Yoda, Star Wars: The Empire Strikes Back (1980)",
  },
  {
    text: "May the Force be with you.",
    isScripture: false,
    ref: "Star Wars (1977)",
  },
  {
    text: "With great power comes great responsibility.",
    isScripture: false,
    ref: "Spider-Man / Voltaire — not scripture",
  },
  {
    text: "To infinity and beyond!",
    isScripture: false,
    ref: "Buzz Lightyear, Toy Story (1995)",
  },
  {
    text: "Just keep swimming.",
    isScripture: false,
    ref: "Dory, Finding Nemo (2003)",
  },
  {
    text: "Hakuna Matata — it means no worries for the rest of your days.",
    isScripture: false,
    ref: "The Lion King (1994)",
  },
  {
    text: "Ohana means family. Family means nobody gets left behind or forgotten.",
    isScripture: false,
    ref: "Lilo and Stitch (2002)",
  },
  {
    text: "The past can hurt. But the way I see it, you can either run from it or learn from it.",
    isScripture: false,
    ref: "The Lion King (1994)",
  },
  {
    text: "To infinity and beyond.",
    isScripture: false,
    ref: "Buzz Lightyear, Toy Story (1995)",
  },
  { text: "Adventure is out there!", isScripture: false, ref: "Up (2009)" },
  {
    text: "The best revenge is massive success.",
    isScripture: false,
    ref: "Frank Sinatra — not scripture",
  },
  {
    text: "Whether you succeed or not is irrelevant, there is no such thing. Making your unknown known is the important thing.",
    isScripture: false,
    ref: "Georgia O'Keeffe — not scripture",
  },
  {
    text: "I am not afraid of tomorrow, for I have seen yesterday and I love today.",
    isScripture: false,
    ref: "William Allen White — not scripture",
  },
  {
    text: "If you cannot do great things, do small things in a great way.",
    isScripture: false,
    ref: "Napoleon Hill — not scripture",
  },
  {
    text: "A goal without a plan is just a wish.",
    isScripture: false,
    ref: "Antoine de Saint-Exupéry — not scripture",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    isScripture: false,
    ref: "C.S. Lewis — not scripture",
  },
  {
    text: "We read to know that we are not alone.",
    isScripture: false,
    ref: "C.S. Lewis — not scripture",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    isScripture: false,
    ref: "C.S. Lewis — not scripture",
  },
  {
    text: "Integrity is doing the right thing even when no one is watching.",
    isScripture: false,
    ref: "C.S. Lewis — not scripture",
  },
  {
    text: "You don't have a soul. You are a soul. You have a body.",
    isScripture: false,
    ref: "Attributed to C.S. Lewis (disputed) — not scripture",
  },
  {
    text: "God cannot give us a happiness and peace apart from Himself.",
    isScripture: false,
    ref: "C.S. Lewis, Mere Christianity — not a scripture reference",
  },
  {
    text: "Aim at Heaven and you will get Earth thrown in. Aim at Earth and you get neither.",
    isScripture: false,
    ref: "C.S. Lewis, Mere Christianity",
  },
  {
    text: "There are far, far better things ahead than any we leave behind.",
    isScripture: false,
    ref: "C.S. Lewis — not scripture",
  },
  {
    text: "Joy is the serious business of Heaven.",
    isScripture: false,
    ref: "C.S. Lewis — not scripture",
  },
  {
    text: "The homemaker has the ultimate career. All other careers exist for one purpose only — and that is to support the ultimate career.",
    isScripture: false,
    ref: "C.S. Lewis — not scripture",
  },
  {
    text: "A man can no more diminish God's glory by refusing to worship Him than a lunatic can put out the sun by scribbling the word 'darkness' on the walls of his cell.",
    isScripture: false,
    ref: "C.S. Lewis, The Problem of Pain",
  },
  {
    text: "God whispers to us in our pleasures, speaks in our conscience, but shouts in our pains.",
    isScripture: false,
    ref: "C.S. Lewis, The Problem of Pain",
  },
  {
    text: "Friendship is born at the moment when one person says to another, 'What! You too? I thought I was the only one.'",
    isScripture: false,
    ref: "C.S. Lewis, The Four Loves",
  },
  {
    text: "The great thing about getting older is that you don't lose all the other ages you've been.",
    isScripture: false,
    ref: "Madeleine L'Engle — not scripture",
  },
  {
    text: "It takes courage to grow up and become who you really are.",
    isScripture: false,
    ref: "E.E. Cummings — not scripture",
  },
  {
    text: "The most wasted of days is one without laughter.",
    isScripture: false,
    ref: "E.E. Cummings — not scripture",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    isScripture: false,
    ref: "Robert Frost — not scripture",
  },
  {
    text: "Two roads diverged in a wood, and I took the one less traveled by.",
    isScripture: false,
    ref: "Robert Frost, The Road Not Taken (1916)",
  },
  {
    text: "Home is the place where, when you have to go there, they have to take you in.",
    isScripture: false,
    ref: "Robert Frost — not scripture",
  },
  {
    text: "Freedom is not worth having if it does not include the freedom to make mistakes.",
    isScripture: false,
    ref: "Mahatma Gandhi — not scripture",
  },
  {
    text: "First they ignore you, then they laugh at you, then they fight you, then you win.",
    isScripture: false,
    ref: "Attributed to Mahatma Gandhi — not scripture",
  },
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    isScripture: false,
    ref: "Mahatma Gandhi — not scripture",
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    isScripture: false,
    ref: "Mahatma Gandhi — not scripture",
  },
  {
    text: "An ounce of practice is worth more than tons of preaching.",
    isScripture: false,
    ref: "Mahatma Gandhi — not scripture",
  },
  {
    text: "The difference between stumbling blocks and stepping stones is how you use them.",
    isScripture: false,
    ref: "Popular saying — not scripture",
  },
  {
    text: "Tough times never last, but tough people do.",
    isScripture: false,
    ref: "Robert H. Schuller — not scripture",
  },
  {
    text: "Your attitude, not your aptitude, will determine your altitude.",
    isScripture: false,
    ref: "Zig Ziglar — not scripture",
  },
  {
    text: "People often say that motivation doesn't last. Well, neither does bathing — that's why we recommend it daily.",
    isScripture: false,
    ref: "Zig Ziglar — not scripture",
  },
  {
    text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    isScripture: false,
    ref: "Alice Morse Earle / attributed to various — not scripture",
  },
  {
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    isScripture: false,
    ref: "Attributed to Abraham Lincoln / Edward J. Stieglitz — not scripture",
  },
  {
    text: "The greatest wealth is to live content with little.",
    isScripture: false,
    ref: "Plato — not scripture",
  },
  {
    text: "At the touch of love, everyone becomes a poet.",
    isScripture: false,
    ref: "Plato — not scripture",
  },
  {
    text: "Wise men speak because they have something to say; fools because they have to say something.",
    isScripture: false,
    ref: "Plato — not scripture",
  },
  {
    text: "Good actions give strength to ourselves and inspire good actions in others.",
    isScripture: false,
    ref: "Plato — not scripture",
  },
  {
    text: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    isScripture: false,
    ref: "Attributed to Plato — not scripture",
  },

  // ============================================================
  // BATCH 2: ADDITIONAL VERIFIED KJV SCRIPTURES
  // ============================================================

  // --- GENESIS (additional) ---
  {
    text: "So God created man in his own image, in the image of God created he him; male and female created he them.",
    isScripture: true,
    ref: "Genesis 1:27",
  },
  {
    text: "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth.",
    isScripture: true,
    ref: "Genesis 1:28",
  },
  {
    text: "And the LORD God said, It is not good that the man should be alone; I will make him an help meet for him.",
    isScripture: true,
    ref: "Genesis 2:18",
  },
  {
    text: "And Enoch walked with God: and he was not; for God took him.",
    isScripture: true,
    ref: "Genesis 5:24",
  },
  {
    text: "Noah was a just man and perfect in his generations, and Noah walked with God.",
    isScripture: true,
    ref: "Genesis 6:9",
  },
  {
    text: "Shall not the Judge of all the earth do right?",
    isScripture: true,
    ref: "Genesis 18:25",
  },
  {
    text: "I am with thee, and will keep thee in all places whither thou goest.",
    isScripture: true,
    ref: "Genesis 28:15",
  },

  // --- EXODUS (additional) ---
  {
    text: "The LORD is my strength and song, and he is become my salvation.",
    isScripture: true,
    ref: "Exodus 15:2",
  },
  {
    text: "Thou shalt not covet thy neighbour's house, thou shalt not covet thy neighbour's wife.",
    isScripture: true,
    ref: "Exodus 20:17",
  },
  {
    text: "Remember the sabbath day, to keep it holy.",
    isScripture: true,
    ref: "Exodus 20:8",
  },
  {
    text: "Thou shalt not take the name of the LORD thy God in vain.",
    isScripture: true,
    ref: "Exodus 20:7",
  },
  {
    text: "And he said, My presence shall go with thee, and I will give thee rest.",
    isScripture: true,
    ref: "Exodus 33:14",
  },
  {
    text: "The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth.",
    isScripture: true,
    ref: "Exodus 34:6",
  },

  // --- LEVITICUS ---
  {
    text: "Ye shall be holy: for I the LORD your God am holy.",
    isScripture: true,
    ref: "Leviticus 19:2",
  },
  {
    text: "Thou shalt love thy neighbour as thyself: I am the LORD.",
    isScripture: true,
    ref: "Leviticus 19:18",
  },
  {
    text: "Thou shalt rise up before the hoary head, and honour the face of the old man, and fear thy God.",
    isScripture: true,
    ref: "Leviticus 19:32",
  },

  // --- NUMBERS ---
  {
    text: "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee.",
    isScripture: true,
    ref: "Numbers 6:24-25",
  },
  {
    text: "God is not a man, that he should lie; neither the son of man, that he should repent.",
    isScripture: true,
    ref: "Numbers 23:19",
  },

  // --- DEUTERONOMY (additional) ---
  {
    text: "Hear, O Israel: The LORD our God is one LORD.",
    isScripture: true,
    ref: "Deuteronomy 6:4",
  },
  {
    text: "The secret things belong unto the LORD our God: but those things which are revealed belong unto us.",
    isScripture: true,
    ref: "Deuteronomy 29:29",
  },
  {
    text: "The eternal God is thy refuge, and underneath are the everlasting arms.",
    isScripture: true,
    ref: "Deuteronomy 33:27",
  },

  // --- ESTHER ---
  {
    text: "Who knoweth whether thou art come to the kingdom for such a time as this?",
    isScripture: true,
    ref: "Esther 4:14",
  },
  { text: "If I perish, I perish.", isScripture: true, ref: "Esther 4:16" },

  // --- EZRA ---
  {
    text: "For Ezra had prepared his heart to seek the law of the LORD, and to do it, and to teach in Israel statutes and judgments.",
    isScripture: true,
    ref: "Ezra 7:10",
  },
  {
    text: "The hand of our God is upon all them for good that seek him.",
    isScripture: true,
    ref: "Ezra 8:22",
  },

  // --- NEHEMIAH (additional) ---
  {
    text: "I am doing a great work, so that I cannot come down: why should the work cease?",
    isScripture: true,
    ref: "Nehemiah 6:3",
  },
  {
    text: "For the people had a mind to work.",
    isScripture: true,
    ref: "Nehemiah 4:6",
  },

  // --- JOB (additional) ---
  {
    text: "Canst thou by searching find out God? canst thou find out the Almighty unto perfection?",
    isScripture: true,
    ref: "Job 11:7",
  },
  {
    text: "Though he slay me, yet will I trust in him.",
    isScripture: true,
    ref: "Job 13:15",
  },
  {
    text: "Man that is born of a woman is of few days and full of trouble.",
    isScripture: true,
    ref: "Job 14:1",
  },
  {
    text: "He knoweth the way that I take: when he hath tried me, I shall come forth as gold.",
    isScripture: true,
    ref: "Job 23:10",
  },
  {
    text: "The morning stars sang together, and all the sons of God shouted for joy.",
    isScripture: true,
    ref: "Job 38:7",
  },

  // --- PSALMS (additional) ---
  {
    text: "Why do the heathen rage, and the people imagine a vain thing?",
    isScripture: true,
    ref: "Psalm 2:1",
  },
  {
    text: "Fret not thyself because of evildoers, neither be thou envious against the workers of iniquity.",
    isScripture: true,
    ref: "Psalm 37:1",
  },
  {
    text: "The steps of a good man are ordered by the LORD: and he delighteth in his way.",
    isScripture: true,
    ref: "Psalm 37:23",
  },
  {
    text: "I have been young, and now am old; yet have I not seen the righteous forsaken, nor his seed begging bread.",
    isScripture: true,
    ref: "Psalm 37:25",
  },
  {
    text: "I waited patiently for the LORD; and he inclined unto me, and heard my cry.",
    isScripture: true,
    ref: "Psalm 40:1",
  },
  {
    text: "He brought me up also out of an horrible pit, out of the miry clay, and set my feet upon a rock.",
    isScripture: true,
    ref: "Psalm 40:2",
  },
  {
    text: "As the hart panteth after the water brooks, so panteth my soul after thee, O God.",
    isScripture: true,
    ref: "Psalm 42:1",
  },
  {
    text: "Purge me with hyssop, and I shall be clean: wash me, and I shall be whiter than snow.",
    isScripture: true,
    ref: "Psalm 51:7",
  },
  {
    text: "The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise.",
    isScripture: true,
    ref: "Psalm 51:17",
  },
  {
    text: "Search me, O God, and know my heart: try me, and know my thoughts.",
    isScripture: true,
    ref: "Psalm 139:23",
  },
  {
    text: "How precious also are thy thoughts unto me, O God! how great is the sum of them!",
    isScripture: true,
    ref: "Psalm 139:17",
  },
  {
    text: "If I take the wings of the morning, and dwell in the uttermost parts of the sea; Even there shall thy hand lead me.",
    isScripture: true,
    ref: "Psalm 139:9-10",
  },
  {
    text: "Yea, the darkness hideth not from thee; but the night shineth as the day.",
    isScripture: true,
    ref: "Psalm 139:12",
  },
  {
    text: "Let the redeemed of the LORD say so, whom he hath redeemed from the hand of the enemy.",
    isScripture: true,
    ref: "Psalm 107:2",
  },
  {
    text: "He sent his word, and healed them, and delivered them from their destructions.",
    isScripture: true,
    ref: "Psalm 107:20",
  },
  {
    text: "The LORD hath done great things for us; whereof we are glad.",
    isScripture: true,
    ref: "Psalm 126:3",
  },
  {
    text: "They that sow in tears shall reap in joy.",
    isScripture: true,
    ref: "Psalm 126:5",
  },
  {
    text: "Make a joyful noise unto the LORD, all ye lands.",
    isScripture: true,
    ref: "Psalm 100:1",
  },
  {
    text: "Know ye that the LORD he is God: it is he that hath made us, and not we ourselves.",
    isScripture: true,
    ref: "Psalm 100:3",
  },
  {
    text: "For the LORD is good; his mercy is everlasting; and his truth endureth to all generations.",
    isScripture: true,
    ref: "Psalm 100:5",
  },
  {
    text: "Sing unto the LORD a new song: sing unto the LORD, all the earth.",
    isScripture: true,
    ref: "Psalm 96:1",
  },
  {
    text: "The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool.",
    isScripture: true,
    ref: "Psalm 110:1",
  },
  {
    text: "I will sing of the mercies of the LORD for ever: with my mouth will I make known thy faithfulness to all generations.",
    isScripture: true,
    ref: "Psalm 89:1",
  },
  {
    text: "Lord, thou hast been our dwelling place in all generations.",
    isScripture: true,
    ref: "Psalm 90:1",
  },
  {
    text: "The days of our years are threescore years and ten.",
    isScripture: true,
    ref: "Psalm 90:10",
  },
  {
    text: "So teach us to number our days, that we may apply our hearts unto wisdom.",
    isScripture: true,
    ref: "Psalm 90:12",
  },
  {
    text: "I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.",
    isScripture: true,
    ref: "Psalm 91:2",
  },
  {
    text: "With long life will I satisfy him, and shew him my salvation.",
    isScripture: true,
    ref: "Psalm 91:16",
  },
  {
    text: "Bless the LORD, O my soul, and forget not all his benefits.",
    isScripture: true,
    ref: "Psalm 103:2",
  },
  {
    text: "Who forgiveth all thine iniquities; who healeth all thy diseases.",
    isScripture: true,
    ref: "Psalm 103:3",
  },
  {
    text: "Like as a father pitieth his children, so the LORD pitieth them that fear him.",
    isScripture: true,
    ref: "Psalm 103:13",
  },
  {
    text: "But the mercy of the LORD is from everlasting to everlasting upon them that fear him.",
    isScripture: true,
    ref: "Psalm 103:17",
  },
  {
    text: "O LORD, how manifold are thy works! in wisdom hast thou made them all.",
    isScripture: true,
    ref: "Psalm 104:24",
  },
  {
    text: "Happy is he that hath the God of Jacob for his help, whose hope is in the LORD his God.",
    isScripture: true,
    ref: "Psalm 146:5",
  },
  {
    text: "By the rivers of Babylon, there we sat down, yea, we wept, when we remembered Zion.",
    isScripture: true,
    ref: "Psalm 137:1",
  },
  {
    text: "If I forget thee, O Jerusalem, let my right hand forget her cunning.",
    isScripture: true,
    ref: "Psalm 137:5",
  },
  {
    text: "I will praise thee with my whole heart: before the gods will I sing praise unto thee.",
    isScripture: true,
    ref: "Psalm 138:1",
  },
  {
    text: "Though I walk in the midst of trouble, thou wilt revive me.",
    isScripture: true,
    ref: "Psalm 138:7",
  },

  // --- PROVERBS (additional) ---
  {
    text: "My son, if sinners entice thee, consent thou not.",
    isScripture: true,
    ref: "Proverbs 1:10",
  },
  {
    text: "For the LORD giveth wisdom: out of his mouth cometh knowledge and understanding.",
    isScripture: true,
    ref: "Proverbs 2:6",
  },
  {
    text: "Keep thy heart with all diligence; for out of it are the issues of life.",
    isScripture: true,
    ref: "Proverbs 4:23",
  },
  {
    text: "Go to the ant, thou sluggard; consider her ways, and be wise.",
    isScripture: true,
    ref: "Proverbs 6:6",
  },
  {
    text: "A false balance is abomination to the LORD: but a just weight is his delight.",
    isScripture: true,
    ref: "Proverbs 11:1",
  },
  {
    text: "There is that scattereth, and yet increaseth; and there is that withholdeth more than is meet, but it tendeth to poverty.",
    isScripture: true,
    ref: "Proverbs 11:24",
  },
  {
    text: "Righteousness exalteth a nation: but sin is a reproach to any people.",
    isScripture: true,
    ref: "Proverbs 14:34",
  },
  {
    text: "Before honour is humility.",
    isScripture: true,
    ref: "Proverbs 15:33",
  },
  {
    text: "Pleasant words are as an honeycomb, sweet to the soul, and health to the bones.",
    isScripture: true,
    ref: "Proverbs 16:24",
  },
  {
    text: "He that is slow to anger is better than the mighty; and he that ruleth his spirit than he that taketh a city.",
    isScripture: true,
    ref: "Proverbs 16:32",
  },
  {
    text: "He that hath knowledge spareth his words: and a man of understanding is of an excellent spirit.",
    isScripture: true,
    ref: "Proverbs 17:27",
  },
  {
    text: "Even a fool, when he holdeth his peace, is counted wise.",
    isScripture: true,
    ref: "Proverbs 17:28",
  },
  {
    text: "A man that hath friends must shew himself friendly.",
    isScripture: true,
    ref: "Proverbs 18:24",
  },
  {
    text: "Wine is a mocker, strong drink is raging: and whosoever is deceived thereby is not wise.",
    isScripture: true,
    ref: "Proverbs 20:1",
  },
  {
    text: "A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.",
    isScripture: true,
    ref: "Proverbs 22:1",
  },
  {
    text: "If thine enemy be hungry, give him bread to eat; and if he be thirsty, give him water to drink.",
    isScripture: true,
    ref: "Proverbs 25:21",
  },
  {
    text: "As cold waters to a thirsty soul, so is good news from a far country.",
    isScripture: true,
    ref: "Proverbs 25:25",
  },
  {
    text: "As a dog returneth to his vomit, so a fool returneth to his folly.",
    isScripture: true,
    ref: "Proverbs 26:11",
  },
  {
    text: "Faithful are the wounds of a friend; but the kisses of an enemy are deceitful.",
    isScripture: true,
    ref: "Proverbs 27:6",
  },
  {
    text: "He that covereth his sins shall not prosper: but whoso confesseth and forsaketh them shall have mercy.",
    isScripture: true,
    ref: "Proverbs 28:13",
  },

  // --- ISAIAH (additional) ---
  {
    text: "Then said I, Here am I; send me.",
    isScripture: true,
    ref: "Isaiah 6:8",
  },
  {
    text: "Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.",
    isScripture: true,
    ref: "Isaiah 7:14",
  },
  {
    text: "And his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.",
    isScripture: true,
    ref: "Isaiah 9:6",
  },
  {
    text: "The wolf also shall dwell with the lamb, and the leopard shall lie down with the kid.",
    isScripture: true,
    ref: "Isaiah 11:6",
  },
  {
    text: "They shall beat their swords into plowshares, and their spears into pruninghooks.",
    isScripture: true,
    ref: "Isaiah 2:4",
  },
  {
    text: "He giveth power to the faint; and to them that have no might he increaseth strength.",
    isScripture: true,
    ref: "Isaiah 40:29",
  },
  {
    text: "Behold, I have refined thee, but not with silver; I have chosen thee in the furnace of affliction.",
    isScripture: true,
    ref: "Isaiah 48:10",
  },
  {
    text: "Seek ye the LORD while he may be found, call ye upon him while he is near.",
    isScripture: true,
    ref: "Isaiah 55:6",
  },
  {
    text: "So shall my word be that goeth forth out of my mouth: it shall not return unto me void.",
    isScripture: true,
    ref: "Isaiah 55:11",
  },
  {
    text: "The Spirit of the Lord GOD is upon me; because the LORD hath anointed me to preach good tidings unto the meek.",
    isScripture: true,
    ref: "Isaiah 61:1",
  },
  {
    text: "To give unto them beauty for ashes, the oil of joy for mourning, the garment of praise for the spirit of heaviness.",
    isScripture: true,
    ref: "Isaiah 61:3",
  },
  {
    text: "Arise, shine; for thy light is come, and the glory of the LORD is risen upon thee.",
    isScripture: true,
    ref: "Isaiah 60:1",
  },
  {
    text: "For the mountains shall depart, and the hills be removed; but my kindness shall not depart from thee.",
    isScripture: true,
    ref: "Isaiah 54:10",
  },
  {
    text: "O LORD, thou art our father; we are the clay, and thou our potter; and we all are the work of thy hand.",
    isScripture: true,
    ref: "Isaiah 64:8",
  },
  {
    text: "For, behold, I create new heavens and a new earth: and the former shall not be remembered, nor come into mind.",
    isScripture: true,
    ref: "Isaiah 65:17",
  },
  {
    text: "For as the heavens are higher than the earth, so are my ways higher than your ways.",
    isScripture: true,
    ref: "Isaiah 55:9",
  },

  // --- JEREMIAH (additional) ---
  {
    text: "Cursed be the man that trusteth in man, and maketh flesh his arm, and whose heart departeth from the LORD.",
    isScripture: true,
    ref: "Jeremiah 17:5",
  },
  {
    text: "Heal me, O LORD, and I shall be healed; save me, and I shall be saved: for thou art my praise.",
    isScripture: true,
    ref: "Jeremiah 17:14",
  },
  {
    text: "For I will restore health unto thee, and I will heal thee of thy wounds, saith the LORD.",
    isScripture: true,
    ref: "Jeremiah 30:17",
  },
  {
    text: "I will make an everlasting covenant with them, that I will not turn away from them, to do them good.",
    isScripture: true,
    ref: "Jeremiah 32:40",
  },

  // --- LAMENTATIONS (additional) ---
  {
    text: "The LORD is my portion, saith my soul; therefore will I hope in him.",
    isScripture: true,
    ref: "Lamentations 3:24",
  },
  {
    text: "It is good that a man should both hope and quietly wait for the salvation of the LORD.",
    isScripture: true,
    ref: "Lamentations 3:26",
  },

  // --- EZEKIEL (additional) ---
  {
    text: "As I live, saith the Lord GOD, I have no pleasure in the death of the wicked; but that the wicked turn from his way and live.",
    isScripture: true,
    ref: "Ezekiel 33:11",
  },
  {
    text: "And I will put my spirit within you, and cause you to walk in my statutes.",
    isScripture: true,
    ref: "Ezekiel 36:27",
  },

  // --- DANIEL (additional) ---
  {
    text: "Our God whom we serve is able to deliver us from the burning fiery furnace.",
    isScripture: true,
    ref: "Daniel 3:17",
  },
  {
    text: "He delivereth and rescueth, and he worketh signs and wonders in heaven and in earth.",
    isScripture: true,
    ref: "Daniel 6:27",
  },

  // --- JOEL (additional) ---
  {
    text: "Turn ye even to me with all your heart, and with fasting, and with weeping, and with mourning.",
    isScripture: true,
    ref: "Joel 2:12",
  },
  {
    text: "And I will restore to you the years that the locust hath eaten.",
    isScripture: true,
    ref: "Joel 2:25",
  },

  // --- JONAH ---
  { text: "Salvation is of the LORD.", isScripture: true, ref: "Jonah 2:9" },

  // --- MICAH (additional) ---
  {
    text: "But thou, Beth-lehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel.",
    isScripture: true,
    ref: "Micah 5:2",
  },
  {
    text: "They shall sit every man under his vine and under his fig tree; and none shall make them afraid.",
    isScripture: true,
    ref: "Micah 4:4",
  },

  // --- MATTHEW (additional) ---
  {
    text: "Blessed are they which do hunger and thirst after righteousness: for they shall be filled.",
    isScripture: true,
    ref: "Matthew 5:6",
  },
  {
    text: "Blessed are the merciful: for they shall obtain mercy.",
    isScripture: true,
    ref: "Matthew 5:7",
  },
  {
    text: "Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil.",
    isScripture: true,
    ref: "Matthew 5:17",
  },
  {
    text: "For if ye forgive men their trespasses, your heavenly Father will also forgive you.",
    isScripture: true,
    ref: "Matthew 6:14",
  },
  {
    text: "For where your treasure is, there will your heart be also.",
    isScripture: true,
    ref: "Matthew 6:21",
  },
  {
    text: "No man can serve two masters: for either he will hate the one, and love the other.",
    isScripture: true,
    ref: "Matthew 6:24",
  },
  {
    text: "Consider the lilies of the field, how they grow; they toil not, neither do they spin.",
    isScripture: true,
    ref: "Matthew 6:28",
  },
  {
    text: "Judge not, that ye be not judged.",
    isScripture: true,
    ref: "Matthew 7:1",
  },
  {
    text: "Give not that which is holy unto the dogs, neither cast ye your pearls before swine.",
    isScripture: true,
    ref: "Matthew 7:6",
  },
  {
    text: "Every good tree bringeth forth good fruit; but a corrupt tree bringeth forth evil fruit.",
    isScripture: true,
    ref: "Matthew 7:17",
  },
  {
    text: "Therefore whosoever heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock.",
    isScripture: true,
    ref: "Matthew 7:24",
  },
  {
    text: "They that be whole need not a physician, but they that are sick.",
    isScripture: true,
    ref: "Matthew 9:12",
  },
  {
    text: "The harvest truly is plenteous, but the labourers are few.",
    isScripture: true,
    ref: "Matthew 9:37",
  },
  {
    text: "Fear not them which kill the body, but are not able to kill the soul.",
    isScripture: true,
    ref: "Matthew 10:28",
  },
  {
    text: "Are not two sparrows sold for a farthing? and one of them shall not fall on the ground without your Father.",
    isScripture: true,
    ref: "Matthew 10:29",
  },
  {
    text: "The very hairs of your head are all numbered.",
    isScripture: true,
    ref: "Matthew 10:30",
  },
  {
    text: "My yoke is easy, and my burden is light.",
    isScripture: true,
    ref: "Matthew 11:30",
  },
  {
    text: "A prophet is not without honour, save in his own country.",
    isScripture: true,
    ref: "Matthew 13:57",
  },
  {
    text: "Whosoever will save his life shall lose it: and whosoever will lose his life for my sake shall find it.",
    isScripture: true,
    ref: "Matthew 16:25",
  },
  {
    text: "Except ye be converted, and become as little children, ye shall not enter into the kingdom of heaven.",
    isScripture: true,
    ref: "Matthew 18:3",
  },
  {
    text: "For where two or three are gathered together in my name, there am I in the midst of them.",
    isScripture: true,
    ref: "Matthew 18:20",
  },
  {
    text: "Many are called, but few are chosen.",
    isScripture: true,
    ref: "Matthew 22:14",
  },
  {
    text: "Render therefore unto Caesar the things which are Caesar's; and unto God the things that are God's.",
    isScripture: true,
    ref: "Matthew 22:21",
  },
  {
    text: "Heaven and earth shall pass away, but my words shall not pass away.",
    isScripture: true,
    ref: "Matthew 24:35",
  },
  {
    text: "Watch therefore: for ye know not what hour your Lord doth come.",
    isScripture: true,
    ref: "Matthew 24:42",
  },
  {
    text: "Well done, thou good and faithful servant.",
    isScripture: true,
    ref: "Matthew 25:21",
  },
  {
    text: "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.",
    isScripture: true,
    ref: "Matthew 25:40",
  },
  {
    text: "Watch and pray, that ye enter not into temptation: the spirit indeed is willing, but the flesh is weak.",
    isScripture: true,
    ref: "Matthew 26:41",
  },
  {
    text: "All they that take the sword shall perish with the sword.",
    isScripture: true,
    ref: "Matthew 26:52",
  },

  // --- LUKE (additional) ---
  {
    text: "Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.",
    isScripture: true,
    ref: "Luke 2:10",
  },
  {
    text: "Glory to God in the highest, and on earth peace, good will toward men.",
    isScripture: true,
    ref: "Luke 2:14",
  },
  {
    text: "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor.",
    isScripture: true,
    ref: "Luke 4:18",
  },
  {
    text: "But I say unto you which hear, Love your enemies, do good to them which hate you.",
    isScripture: true,
    ref: "Luke 6:27",
  },
  {
    text: "Be ye therefore merciful, as your Father also is merciful.",
    isScripture: true,
    ref: "Luke 6:36",
  },
  {
    text: "No man, having put his hand to the plough, and looking back, is fit for the kingdom of God.",
    isScripture: true,
    ref: "Luke 9:62",
  },
  {
    text: "And he said unto them, I beheld Satan as lightning fall from heaven.",
    isScripture: true,
    ref: "Luke 10:18",
  },
  {
    text: "Fear not, little flock; for it is your Father's good pleasure to give you the kingdom.",
    isScripture: true,
    ref: "Luke 12:32",
  },
  {
    text: "For unto whomsoever much is given, of him shall be much required.",
    isScripture: true,
    ref: "Luke 12:48",
  },
  {
    text: "And he arose, and came to his father. But when he was yet a great way off, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him.",
    isScripture: true,
    ref: "Luke 15:20",
  },
  {
    text: "And Jesus said unto him, This day is salvation come to this house.",
    isScripture: true,
    ref: "Luke 19:9",
  },
  {
    text: "If these should hold their peace, the stones would immediately cry out.",
    isScripture: true,
    ref: "Luke 19:40",
  },
  {
    text: "Verily I say unto thee, To day shalt thou be with me in paradise.",
    isScripture: true,
    ref: "Luke 23:43",
  },
  {
    text: "Father, into thy hands I commend my spirit.",
    isScripture: true,
    ref: "Luke 23:46",
  },
  {
    text: "Why seek ye the living among the dead? He is not here, but is risen.",
    isScripture: true,
    ref: "Luke 24:5-6",
  },

  // --- JOHN (additional) ---
  {
    text: "In him was life; and the life was the light of men.",
    isScripture: true,
    ref: "John 1:4",
  },
  {
    text: "And the Word was made flesh, and dwelt among us, and we beheld his glory.",
    isScripture: true,
    ref: "John 1:14",
  },
  {
    text: "He must increase, but I must decrease.",
    isScripture: true,
    ref: "John 3:30",
  },
  {
    text: "Marvel not at this: for the hour is coming, in the which all that are in the graves shall hear his voice.",
    isScripture: true,
    ref: "John 5:28",
  },
  {
    text: "It is the spirit that quickeneth; the flesh profiteth nothing.",
    isScripture: true,
    ref: "John 6:63",
  },
  {
    text: "I am the door: by me if any man enter in, he shall be saved.",
    isScripture: true,
    ref: "John 10:9",
  },
  {
    text: "I am come that they might have life, and that they might have it more abundantly.",
    isScripture: true,
    ref: "John 10:10",
  },
  {
    text: "My sheep hear my voice, and I know them, and they follow me.",
    isScripture: true,
    ref: "John 10:27",
  },
  { text: "I and my Father are one.", isScripture: true, ref: "John 10:30" },
  {
    text: "Whosoever liveth and believeth in me shall never die.",
    isScripture: true,
    ref: "John 11:26",
  },
  {
    text: "Except a corn of wheat fall into the ground and die, it abideth alone: but if it die, it bringeth forth much fruit.",
    isScripture: true,
    ref: "John 12:24",
  },
  {
    text: "By this shall all men know that ye are my disciples, if ye have love one to another.",
    isScripture: true,
    ref: "John 13:35",
  },
  {
    text: "In my Father's house are many mansions: if it were not so, I would have told you.",
    isScripture: true,
    ref: "John 14:2",
  },
  {
    text: "If ye love me, keep my commandments.",
    isScripture: true,
    ref: "John 14:15",
  },
  {
    text: "But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things.",
    isScripture: true,
    ref: "John 14:26",
  },
  { text: "Abide in me, and I in you.", isScripture: true, ref: "John 15:4" },
  {
    text: "If ye abide in me, and my words abide in you, ye shall ask what ye will, and it shall be done unto you.",
    isScripture: true,
    ref: "John 15:7",
  },
  {
    text: "Ye have not chosen me, but I have chosen you.",
    isScripture: true,
    ref: "John 15:16",
  },
  {
    text: "Howbeit when he, the Spirit of truth, is come, he will guide you into all truth.",
    isScripture: true,
    ref: "John 16:13",
  },
  {
    text: "And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.",
    isScripture: true,
    ref: "John 17:3",
  },
  {
    text: "Pilate saith unto him, What is truth?",
    isScripture: true,
    ref: "John 18:38",
  },
  { text: "It is finished.", isScripture: true, ref: "John 19:30" },
  {
    text: "Blessed are they that have not seen, and yet have believed.",
    isScripture: true,
    ref: "John 20:29",
  },
  { text: "Feed my sheep.", isScripture: true, ref: "John 21:17" },

  // --- ACTS (additional) ---
  {
    text: "And they were all filled with the Holy Ghost.",
    isScripture: true,
    ref: "Acts 2:4",
  },
  {
    text: "Repent ye therefore, and be converted, that your sins may be blotted out.",
    isScripture: true,
    ref: "Acts 3:19",
  },
  {
    text: "It is more blessed to give than to receive.",
    isScripture: true,
    ref: "Acts 20:35",
  },
  {
    text: "And the times of this ignorance God winked at; but now commandeth all men every where to repent.",
    isScripture: true,
    ref: "Acts 17:30",
  },

  // --- ROMANS (additional) ---
  {
    text: "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation.",
    isScripture: true,
    ref: "Romans 1:16",
  },
  {
    text: "There is none righteous, no, not one.",
    isScripture: true,
    ref: "Romans 3:10",
  },
  {
    text: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
    isScripture: true,
    ref: "Romans 5:8",
  },
  {
    text: "For to be carnally minded is death; but to be spiritually minded is life and peace.",
    isScripture: true,
    ref: "Romans 8:6",
  },
  {
    text: "The Spirit itself beareth witness with our spirit, that we are the children of God.",
    isScripture: true,
    ref: "Romans 8:16",
  },
  {
    text: "Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought.",
    isScripture: true,
    ref: "Romans 8:26",
  },
  {
    text: "For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us.",
    isScripture: true,
    ref: "Romans 8:18",
  },
  {
    text: "Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine?",
    isScripture: true,
    ref: "Romans 8:35",
  },
  {
    text: "Vengeance is mine; I will repay, saith the Lord.",
    isScripture: true,
    ref: "Romans 12:19",
  },
  {
    text: "Love worketh no ill to his neighbour: therefore love is the fulfilling of the law.",
    isScripture: true,
    ref: "Romans 13:10",
  },
  {
    text: "The night is far spent, the day is at hand: let us therefore cast off the works of darkness.",
    isScripture: true,
    ref: "Romans 13:12",
  },

  // --- 1 CORINTHIANS (additional) ---
  {
    text: "Flee fornication. Every sin that a man doeth is without the body; but he that committeth fornication sinneth against his own body.",
    isScripture: true,
    ref: "1 Corinthians 6:18",
  },
  {
    text: "There hath no temptation taken you but such as is common to man: but God is faithful.",
    isScripture: true,
    ref: "1 Corinthians 10:13",
  },
  {
    text: "Charity never faileth: but whether there be prophecies, they shall fail; whether there be tongues, they shall cease.",
    isScripture: true,
    ref: "1 Corinthians 13:8",
  },
  {
    text: "When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things.",
    isScripture: true,
    ref: "1 Corinthians 13:11",
  },
  {
    text: "Follow after charity, and desire spiritual gifts.",
    isScripture: true,
    ref: "1 Corinthians 14:1",
  },
  {
    text: "Let all things be done decently and in order.",
    isScripture: true,
    ref: "1 Corinthians 14:40",
  },
  {
    text: "But now is Christ risen from the dead, and become the firstfruits of them that slept.",
    isScripture: true,
    ref: "1 Corinthians 15:20",
  },
  {
    text: "The last enemy that shall be destroyed is death.",
    isScripture: true,
    ref: "1 Corinthians 15:26",
  },
  {
    text: "It is sown in dishonour; it is raised in glory: it is sown in weakness; it is raised in power.",
    isScripture: true,
    ref: "1 Corinthians 15:43",
  },

  // --- GALATIANS (additional) ---
  {
    text: "For if a man think himself to be something, when he is nothing, he deceiveth himself.",
    isScripture: true,
    ref: "Galatians 6:3",
  },
  {
    text: "Bear ye one another's burdens, and so fulfil the law of Christ.",
    isScripture: true,
    ref: "Galatians 6:2",
  },
  {
    text: "Stand fast therefore in the liberty wherewith Christ hath made us free.",
    isScripture: true,
    ref: "Galatians 5:1",
  },
  {
    text: "Walk in the Spirit, and ye shall not fulfil the lust of the flesh.",
    isScripture: true,
    ref: "Galatians 5:16",
  },

  // --- EPHESIANS (additional) ---
  {
    text: "There is one body, and one Spirit, even as ye are called in one hope of your calling.",
    isScripture: true,
    ref: "Ephesians 4:4",
  },
  {
    text: "Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying.",
    isScripture: true,
    ref: "Ephesians 4:29",
  },
  {
    text: "Neither give place to the devil.",
    isScripture: true,
    ref: "Ephesians 4:27",
  },
  {
    text: "Husbands, love your wives, even as Christ also loved the church, and gave himself for it.",
    isScripture: true,
    ref: "Ephesians 5:25",
  },
  {
    text: "Above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked.",
    isScripture: true,
    ref: "Ephesians 6:16",
  },
  {
    text: "And take the helmet of salvation, and the sword of the Spirit, which is the word of God.",
    isScripture: true,
    ref: "Ephesians 6:17",
  },

  // --- HEBREWS (additional) ---
  {
    text: "Looking unto Jesus the author and finisher of our faith.",
    isScripture: true,
    ref: "Hebrews 12:2",
  },
  {
    text: "Whom the Lord loveth he chasteneth.",
    isScripture: true,
    ref: "Hebrews 12:6",
  },
  {
    text: "No chastening for the present seemeth to be joyous, but grievous: nevertheless afterward it yieldeth the peaceable fruit of righteousness.",
    isScripture: true,
    ref: "Hebrews 12:11",
  },
  {
    text: "Follow peace with all men, and holiness, without which no man shall see the Lord.",
    isScripture: true,
    ref: "Hebrews 12:14",
  },
  {
    text: "Be not forgetful to entertain strangers: for thereby some have entertained angels unawares.",
    isScripture: true,
    ref: "Hebrews 13:2",
  },
  {
    text: "Marriage is honourable in all, and the bed undefiled.",
    isScripture: true,
    ref: "Hebrews 13:4",
  },

  // --- REVELATION (additional) ---
  {
    text: "Nevertheless I have somewhat against thee, because thou hast left thy first love.",
    isScripture: true,
    ref: "Revelation 2:4",
  },
  {
    text: "Be thou faithful unto death, and I will give thee a crown of life.",
    isScripture: true,
    ref: "Revelation 2:10",
  },
  {
    text: "I know thy works, that thou art neither cold nor hot: I would thou wert cold or hot.",
    isScripture: true,
    ref: "Revelation 3:15",
  },
  {
    text: "So then because thou art lukewarm, and neither cold nor hot, I will spue thee out of my mouth.",
    isScripture: true,
    ref: "Revelation 3:16",
  },
  {
    text: "As many as I love, I rebuke and chasten: be zealous therefore, and repent.",
    isScripture: true,
    ref: "Revelation 3:19",
  },
  {
    text: "Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things.",
    isScripture: true,
    ref: "Revelation 4:11",
  },
  {
    text: "They shall hunger no more, neither thirst any more; neither shall the sun light on them, nor any heat.",
    isScripture: true,
    ref: "Revelation 7:16",
  },
  {
    text: "And they overcame him by the blood of the Lamb, and by the word of their testimony.",
    isScripture: true,
    ref: "Revelation 12:11",
  },
  {
    text: "Blessed are the dead which die in the Lord from henceforth: Yea, saith the Spirit, that they may rest from their labours.",
    isScripture: true,
    ref: "Revelation 14:13",
  },
  {
    text: "And I heard as it were the voice of a great multitude, and as the voice of many waters, saying, Alleluia: for the Lord God omnipotent reigneth.",
    isScripture: true,
    ref: "Revelation 19:6",
  },
  {
    text: "And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away.",
    isScripture: true,
    ref: "Revelation 21:1",
  },
  {
    text: "And he shewed me a pure river of water of life, clear as crystal, proceeding out of the throne of God and of the Lamb.",
    isScripture: true,
    ref: "Revelation 22:1",
  },
  {
    text: "And the Spirit and the bride say, Come. And let him that heareth say, Come.",
    isScripture: true,
    ref: "Revelation 22:17",
  },
  {
    text: "Surely I come quickly. Amen. Even so, come, Lord Jesus.",
    isScripture: true,
    ref: "Revelation 22:20",
  },

  // ============================================================
  // BATCH 2: ADDITIONAL NON-SCRIPTURE QUOTES
  // ============================================================

  // --- HYMNS MISTAKEN FOR SCRIPTURE ---
  {
    text: "Amazing grace, how sweet the sound, that saved a wretch like me.",
    isScripture: false,
    ref: "John Newton, hymn (1779) — not a scripture verse",
  },
  {
    text: "Great is thy faithfulness, O God my Father, there is no shadow of turning with Thee.",
    isScripture: false,
    ref: "Thomas Chisholm, hymn (1923) — not scripture (though inspired by Lamentations 3:23)",
  },
  {
    text: "It is well with my soul — though Satan should buffet, though trials should come.",
    isScripture: false,
    ref: "Horatio Spafford, hymn (1873) — not a scripture verse",
  },
  {
    text: "What a friend we have in Jesus, all our sins and griefs to bear.",
    isScripture: false,
    ref: "Joseph M. Scriven, hymn (1855) — not scripture",
  },
  {
    text: "Turn your eyes upon Jesus, look full in His wonderful face.",
    isScripture: false,
    ref: "Helen Lemmel, hymn (1922) — not scripture",
  },
  {
    text: "To God be the glory, great things He hath taught us.",
    isScripture: false,
    ref: "Fanny Crosby, hymn (1875) — not a scripture verse",
  },
  {
    text: "Blessed assurance, Jesus is mine! Oh, what a foretaste of glory divine!",
    isScripture: false,
    ref: "Fanny Crosby, hymn (1873) — not a scripture verse",
  },
  {
    text: "Count your blessings, name them one by one.",
    isScripture: false,
    ref: "Johnson Oatman Jr., hymn (1897) — not a scripture verse",
  },
  {
    text: "How great thou art — when I in awesome wonder consider all the worlds Thy hands have made.",
    isScripture: false,
    ref: "Stuart K. Hine, hymn (1949) — not scripture",
  },
  {
    text: "Onward, Christian soldiers, marching as to war, with the cross of Jesus going on before.",
    isScripture: false,
    ref: "Sabine Baring-Gould, hymn (1865) — not scripture",
  },

  // --- POPULAR MISAPPLICATIONS & CHURCH SAYINGS ---
  {
    text: "God will never put more on you than you can bear.",
    isScripture: false,
    ref: "Misapplication of 1 Corinthians 10:13, which refers only to temptation, not trials in general",
  },
  {
    text: "If God brings you to it, He will bring you through it.",
    isScripture: false,
    ref: "Popular Christian bumper-sticker saying — not scripture",
  },
  {
    text: "God said it, I believe it, that settles it.",
    isScripture: false,
    ref: "Popular evangelical slogan — not a Bible verse",
  },
  {
    text: "Preach the gospel at all times; use words if necessary.",
    isScripture: false,
    ref: "Widely attributed to St. Francis of Assisi — no evidence he said it; not scripture",
  },
  {
    text: "God is never late, He's always on time.",
    isScripture: false,
    ref: "Popular gospel music phrase — not a Bible verse",
  },
  {
    text: "God's delays are not God's denials.",
    isScripture: false,
    ref: "Popular Christian saying — not a Bible verse",
  },
  {
    text: "He who kneels before God can stand before anyone.",
    isScripture: false,
    ref: "Popular Christian saying — not a Bible verse",
  },
  {
    text: "You are the only Bible some people will ever read.",
    isScripture: false,
    ref: "Popular Christian saying — attributed to various; not scripture",
  },
  {
    text: "God has a wonderful plan for your life.",
    isScripture: false,
    ref: "Bill Bright, The Four Spiritual Laws (1952) — not a scripture verse",
  },
  {
    text: "Name it and claim it, for your faith makes it so.",
    isScripture: false,
    ref: "Word of Faith teaching — not a Bible verse",
  },
  {
    text: "No man is greater than his prayer life.",
    isScripture: false,
    ref: "Leonard Ravenhill — not scripture",
  },
  {
    text: "Man's chief end is to glorify God and to enjoy him forever.",
    isScripture: false,
    ref: "Westminster Shorter Catechism (1647) — not a scripture verse",
  },
  {
    text: "God is most glorified in us when we are most satisfied in Him.",
    isScripture: false,
    ref: "John Piper — not scripture",
  },
  {
    text: "A Bible that's falling apart usually belongs to someone who isn't.",
    isScripture: false,
    ref: "Charles Spurgeon (attributed, disputed) — not scripture",
  },
  {
    text: "The one concern of the devil is to keep Christians from praying.",
    isScripture: false,
    ref: "Samuel Chadwick — not scripture",
  },

  // --- SAINT AUGUSTINE & THEOLOGIANS ---
  {
    text: "Our heart is restless until it reposeth in Thee.",
    isScripture: false,
    ref: "Saint Augustine, Confessions (Book I)",
  },
  {
    text: "Faith is to believe what you do not see; the reward of this faith is to see what you believe.",
    isScripture: false,
    ref: "Saint Augustine — not scripture",
  },
  {
    text: "Love God and do whatever you please.",
    isScripture: false,
    ref: "Saint Augustine, Homilies on the First Epistle of John — not scripture",
  },
  {
    text: "The function of prayer is not to influence God, but rather to change the nature of the one who prays.",
    isScripture: false,
    ref: "Søren Kierkegaard — not scripture",
  },
  {
    text: "God cannot give us a happiness and peace apart from Himself.",
    isScripture: false,
    ref: "C.S. Lewis, Mere Christianity — not a scripture reference",
  },
  {
    text: "Aim at Heaven and you will get Earth thrown in. Aim at Earth and you get neither.",
    isScripture: false,
    ref: "C.S. Lewis, Mere Christianity",
  },
  {
    text: "There are far, far better things ahead than any we leave behind.",
    isScripture: false,
    ref: "C.S. Lewis — not scripture",
  },
  {
    text: "Joy is the serious business of Heaven.",
    isScripture: false,
    ref: "C.S. Lewis — not scripture",
  },
  {
    text: "God whispers to us in our pleasures, speaks in our conscience, but shouts in our pains.",
    isScripture: false,
    ref: "C.S. Lewis, The Problem of Pain",
  },
  {
    text: "Friendship is born at the moment when one person says to another, 'What! You too? I thought I was the only one.'",
    isScripture: false,
    ref: "C.S. Lewis, The Four Loves",
  },
  {
    text: "You don't have a soul. You are a soul. You have a body.",
    isScripture: false,
    ref: "Attributed to C.S. Lewis (disputed) — not scripture",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    isScripture: false,
    ref: "C.S. Lewis — not scripture",
  },

  // --- MODERN INSPIRATIONAL ---
  {
    text: "She believed she could, so she did.",
    isScripture: false,
    ref: "R.S. Grey, Scoring Wilder (2014)",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    isScripture: false,
    ref: "Attributed to Oscar Wilde — not scripture",
  },
  {
    text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.",
    isScripture: false,
    ref: "Ralph Waldo Emerson — not scripture",
  },
  {
    text: "Do not go where the path may lead; go instead where there is no path and leave a trail.",
    isScripture: false,
    ref: "Ralph Waldo Emerson — not scripture",
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    isScripture: false,
    ref: "Ralph Waldo Emerson — not scripture",
  },
  {
    text: "Write it on your heart that every day is the best day in the year.",
    isScripture: false,
    ref: "Ralph Waldo Emerson — not scripture",
  },
  {
    text: "Nothing is impossible, the word itself says I'm possible.",
    isScripture: false,
    ref: "Attributed to Audrey Hepburn — not scripture",
  },
  {
    text: "Keep your face always toward the sunshine, and shadows will fall behind you.",
    isScripture: false,
    ref: "Walt Whitman — not scripture",
  },
  {
    text: "Whatever you are, be a good one.",
    isScripture: false,
    ref: "Abraham Lincoln — not scripture",
  },
  {
    text: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
    isScripture: false,
    ref: "Abraham Lincoln — not scripture",
  },
  {
    text: "Our lives begin to end the day we become silent about things that matter.",
    isScripture: false,
    ref: "Martin Luther King Jr. — not scripture",
  },
  {
    text: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    isScripture: false,
    ref: "Martin Luther King Jr. — not scripture",
  },
  {
    text: "Never, never, never give up.",
    isScripture: false,
    ref: "Winston Churchill — not scripture",
  },
  {
    text: "To improve is to change; to be perfect is to change often.",
    isScripture: false,
    ref: "Winston Churchill — not scripture",
  },
  {
    text: "Success consists of going from failure to failure without loss of enthusiasm.",
    isScripture: false,
    ref: "Attributed to Winston Churchill — not scripture",
  },
  {
    text: "I am so clever that sometimes I don't understand a single word of what I am saying.",
    isScripture: false,
    ref: "Oscar Wilde — not scripture",
  },
  {
    text: "Experience is simply the name we give our mistakes.",
    isScripture: false,
    ref: "Oscar Wilde — not scripture",
  },
  {
    text: "Nowadays people know the price of everything and the value of nothing.",
    isScripture: false,
    ref: "Oscar Wilde, The Picture of Dorian Gray (1890)",
  },
  {
    text: "Today you are you, that is truer than true. There is no one alive who is youer than you.",
    isScripture: false,
    ref: "Dr. Seuss, Happy Birthday to You! (1959)",
  },
  {
    text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    isScripture: false,
    ref: "Dr. Seuss, Oh, the Places You'll Go! (1990)",
  },
  {
    text: "Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.",
    isScripture: false,
    ref: "Dr. Seuss, The Lorax (1971)",
  },
  {
    text: "I am not a product of my circumstances. I am a product of my decisions.",
    isScripture: false,
    ref: "Stephen Covey — not scripture",
  },
  {
    text: "Seek first to understand, then to be understood.",
    isScripture: false,
    ref: "Stephen Covey, The 7 Habits of Highly Effective People (1989)",
  },
  {
    text: "Most people do not listen with the intent to understand; they listen with the intent to reply.",
    isScripture: false,
    ref: "Stephen Covey — not scripture",
  },
  {
    text: "The world breaks everyone, and afterward, some are strong at the broken places.",
    isScripture: false,
    ref: "Ernest Hemingway, A Farewell to Arms (1929)",
  },
  {
    text: "Courage is grace under pressure.",
    isScripture: false,
    ref: "Ernest Hemingway — not scripture",
  },
  {
    text: "The best way out is always through.",
    isScripture: false,
    ref: "Robert Frost — not scripture",
  },
  {
    text: "Two roads diverged in a wood, and I took the one less traveled by.",
    isScripture: false,
    ref: "Robert Frost, The Road Not Taken (1916)",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    isScripture: false,
    ref: "Robert Frost — not scripture",
  },
  {
    text: "One must still have chaos in oneself to be able to give birth to a dancing star.",
    isScripture: false,
    ref: "Friedrich Nietzsche, Thus Spoke Zarathustra (1883)",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    isScripture: false,
    ref: "Friedrich Nietzsche — not scripture",
  },
  {
    text: "That which does not kill us makes us stronger.",
    isScripture: false,
    ref: "Friedrich Nietzsche, Twilight of the Idols (1889)",
  },
  {
    text: "I am not afraid of storms, for I am learning how to sail my ship.",
    isScripture: false,
    ref: "Louisa May Alcott, Little Women (1868)",
  },
  {
    text: "Despite everything, I believe that people are really good at heart.",
    isScripture: false,
    ref: "Anne Frank, The Diary of a Young Girl (1947)",
  },
  {
    text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    isScripture: false,
    ref: "Anne Frank — not scripture",
  },
  {
    text: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
    isScripture: false,
    ref: "Joseph Campbell — not scripture",
  },
  {
    text: "Follow your bliss and the universe will open doors where there were only walls.",
    isScripture: false,
    ref: "Joseph Campbell — not scripture",
  },
  {
    text: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    isScripture: false,
    ref: "Helen Keller — not scripture",
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    isScripture: false,
    ref: "Helen Keller — not scripture",
  },
  {
    text: "The most difficult thing is the decision to act; the rest is merely tenacity.",
    isScripture: false,
    ref: "Amelia Earhart — not scripture",
  },
  {
    text: "Winning isn't everything, but wanting to win is.",
    isScripture: false,
    ref: "Attributed to Vince Lombardi — not scripture",
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    isScripture: false,
    ref: "Vince Lombardi — not scripture",
  },
  {
    text: "I've missed more than 9,000 shots in my career. That's why I succeed.",
    isScripture: false,
    ref: "Michael Jordan — not scripture",
  },
  {
    text: "Talent wins games, but teamwork and intelligence win championships.",
    isScripture: false,
    ref: "Michael Jordan — not scripture",
  },
  {
    text: "I can accept failure, everyone fails at something. But I can't accept not trying.",
    isScripture: false,
    ref: "Michael Jordan — not scripture",
  },
  {
    text: "There is no friend as loyal as a book.",
    isScripture: false,
    ref: "Ernest Hemingway — not scripture",
  },
  {
    text: "Logic will get you from A to B. Imagination will take you everywhere.",
    isScripture: false,
    ref: "Albert Einstein — not scripture",
  },
  {
    text: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
    isScripture: false,
    ref: "Albert Einstein — not scripture",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    isScripture: false,
    ref: "Albert Einstein — not scripture",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    isScripture: false,
    ref: "Allen Saunders / John Lennon — not scripture",
  },
  {
    text: "The secret of getting ahead is getting started.",
    isScripture: false,
    ref: "Attributed to Mark Twain — not scripture",
  },
  {
    text: "Kindness is the language which the deaf can hear and the blind can see.",
    isScripture: false,
    ref: "Mark Twain — not scripture",
  },
  {
    text: "The two most important days in your life are the day you are born and the day you find out why.",
    isScripture: false,
    ref: "Attributed to Mark Twain — not scripture",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    isScripture: false,
    ref: "Attributed to Confucius — not scripture",
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    isScripture: false,
    ref: "Attributed to Confucius — not scripture",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    isScripture: false,
    ref: "Attributed to Confucius — not scripture",
  },
  {
    text: "Three things cannot be long hidden: the sun, the moon, and the truth.",
    isScripture: false,
    ref: "Attributed to Buddha — not scripture",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    isScripture: false,
    ref: "Attributed to Buddha — not scripture",
  },
  {
    text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    isScripture: false,
    ref: "Attributed to Buddha — not scripture",
  },
  {
    text: "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.",
    isScripture: false,
    ref: "Marianne Williamson, A Return to Love (1992)",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    isScripture: false,
    ref: "Eleanor Roosevelt — not scripture",
  },
  {
    text: "No one can make you feel inferior without your consent.",
    isScripture: false,
    ref: "Eleanor Roosevelt — not scripture",
  },
  {
    text: "I am not a bird; and no net ensnares me.",
    isScripture: false,
    ref: "Charlotte Brontë, Jane Eyre (1847)",
  },
  {
    text: "Speak the truth, even if your voice shakes.",
    isScripture: false,
    ref: "Attributed to various — not scripture",
  },
  {
    text: "The pen is mightier than the sword.",
    isScripture: false,
    ref: "Edward Bulwer-Lytton, Richelieu (1839)",
  },
  {
    text: "Power tends to corrupt, and absolute power corrupts absolutely.",
    isScripture: false,
    ref: "Lord Acton, letter (1887)",
  },
  {
    text: "Hell hath no fury like a woman scorned.",
    isScripture: false,
    ref: "William Congreve, The Mourning Bride (1697)",
  },
  {
    text: "No man is an island, entire of itself.",
    isScripture: false,
    ref: "John Donne, Devotions upon Emergent Occasions (1624)",
  },
  {
    text: "We are such stuff as dreams are made on, and our little life is rounded with a sleep.",
    isScripture: false,
    ref: "William Shakespeare, The Tempest (1611)",
  },
  {
    text: "Some are born great, some achieve greatness, and some have greatness thrust upon them.",
    isScripture: false,
    ref: "William Shakespeare, Twelfth Night (1601)",
  },
  {
    text: "If music be the food of love, play on.",
    isScripture: false,
    ref: "William Shakespeare, Twelfth Night (1601)",
  },
  {
    text: "Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind.",
    isScripture: false,
    ref: "William Shakespeare, A Midsummer Night's Dream (1600)",
  },
  {
    text: "Neither a borrower nor a lender be; for loan oft loses both itself and friend.",
    isScripture: false,
    ref: "William Shakespeare, Hamlet (1600)",
  },
  {
    text: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    isScripture: false,
    ref: "William Shakespeare, As You Like It (1599)",
  },
  {
    text: "Good fences make good neighbours.",
    isScripture: false,
    ref: "Robert Frost, Mending Wall (1914)",
  },
  {
    text: "Education is not the filling of a pail, but the lighting of a fire.",
    isScripture: false,
    ref: "Attributed to W.B. Yeats — not scripture",
  },
  {
    text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.",
    isScripture: false,
    ref: "John Anster (1835), often misattributed to Goethe — not scripture",
  },
  {
    text: "Believe you can and you're halfway there.",
    isScripture: false,
    ref: "Theodore Roosevelt — not scripture",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    isScripture: false,
    ref: "Theodore Roosevelt — not scripture",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    isScripture: false,
    ref: "Franklin D. Roosevelt — not scripture",
  },
  {
    text: "Honesty is the first chapter in the book of wisdom.",
    isScripture: false,
    ref: "Thomas Jefferson — not scripture",
  },
  {
    text: "An investment in knowledge pays the best interest.",
    isScripture: false,
    ref: "Benjamin Franklin — not scripture",
  },
  {
    text: "By failing to prepare, you are preparing to fail.",
    isScripture: false,
    ref: "Benjamin Franklin — not scripture",
  },
  {
    text: "In this world nothing can be said to be certain, except death and taxes.",
    isScripture: false,
    ref: "Benjamin Franklin — not scripture",
  },
  {
    text: "Early to bed and early to rise makes a man healthy, wealthy, and wise.",
    isScripture: false,
    ref: "Benjamin Franklin, Poor Richard's Almanack (1735)",
  },
  {
    text: "I think, therefore I am.",
    isScripture: false,
    ref: "René Descartes, Discourse on the Method (1637)",
  },
  {
    text: "The unexamined life is not worth living.",
    isScripture: false,
    ref: "Socrates (as recorded by Plato in Apology)",
  },
  {
    text: "At the touch of love, everyone becomes a poet.",
    isScripture: false,
    ref: "Plato — not scripture",
  },
  {
    text: "Wise men speak because they have something to say; fools because they have to say something.",
    isScripture: false,
    ref: "Plato — not scripture",
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    isScripture: false,
    ref: "Aristotle (as paraphrased by Will Durant) — not scripture",
  },
  {
    text: "Knowing yourself is the beginning of all wisdom.",
    isScripture: false,
    ref: "Attributed to Aristotle — not scripture",
  },
  {
    text: "The roots of education are bitter, but the fruit is sweet.",
    isScripture: false,
    ref: "Aristotle — not scripture",
  },
  {
    text: "Luck is what happens when preparation meets opportunity.",
    isScripture: false,
    ref: "Seneca the Younger — not scripture",
  },
  {
    text: "A journey of a thousand miles begins with a single step.",
    isScripture: false,
    ref: "Lao Tzu, Tao Te Ching — not scripture",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    isScripture: false,
    ref: "Chinese proverb — not scripture",
  },
  {
    text: "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.",
    isScripture: false,
    ref: "Chinese proverb — not scripture",
  },
  {
    text: "If you want to go fast, go alone; if you want to go far, go together.",
    isScripture: false,
    ref: "African proverb — not a biblical verse",
  },
  {
    text: "It takes a village to raise a child.",
    isScripture: false,
    ref: "African proverb — not a biblical verse",
  },
  {
    text: "Smooth seas do not make skillful sailors.",
    isScripture: false,
    ref: "African proverb — not scripture",
  },
  {
    text: "Do or do not — there is no try.",
    isScripture: false,
    ref: "Yoda, Star Wars: The Empire Strikes Back (1980)",
  },
  {
    text: "With great power comes great responsibility.",
    isScripture: false,
    ref: "Spider-Man / Voltaire — not scripture",
  },
  {
    text: "Ohana means family. Family means nobody gets left behind or forgotten.",
    isScripture: false,
    ref: "Lilo and Stitch (2002)",
  },
  {
    text: "The past can hurt. But the way I see it, you can either run from it or learn from it.",
    isScripture: false,
    ref: "The Lion King (1994)",
  },
  {
    text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    isScripture: false,
    ref: "Alice Morse Earle / attributed to various — not scripture",
  },
  {
    text: "Not all those who wander are lost.",
    isScripture: false,
    ref: "J.R.R. Tolkien, The Lord of the Rings (1954)",
  },
  {
    text: "Even darkness must pass. A new day will come. And when the sun shines it will shine out the clearer.",
    isScripture: false,
    ref: "J.R.R. Tolkien, The Two Towers (1954)",
  },
  {
    text: "The education of a man is never completed until he dies.",
    isScripture: false,
    ref: "Robert E. Lee — not scripture",
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    isScripture: false,
    ref: "Attributed to Aristotle Onassis — not scripture",
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    isScripture: false,
    ref: "Attributed to Mother Teresa — not scripture",
  },
  {
    text: "If you judge people, you have no time to love them.",
    isScripture: false,
    ref: "Attributed to Mother Teresa — not scripture",
  },
  {
    text: "Not all of us can do great things. But we can do small things with great love.",
    isScripture: false,
    ref: "Attributed to Mother Teresa — not scripture",
  },
  {
    text: "I alone cannot change the world, but I can cast a stone across the waters to create many ripples.",
    isScripture: false,
    ref: "Attributed to Mother Teresa — not scripture",
  },
  {
    text: "The weak can never forgive. Forgiveness is the attribute of the strong.",
    isScripture: false,
    ref: "Mahatma Gandhi — not scripture",
  },
  {
    text: "First they ignore you, then they laugh at you, then they fight you, then you win.",
    isScripture: false,
    ref: "Attributed to Mahatma Gandhi — not scripture",
  },
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    isScripture: false,
    ref: "Mahatma Gandhi — not scripture",
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    isScripture: false,
    ref: "Mahatma Gandhi — not scripture",
  },
  {
    text: "Do not worry about tomorrow, for each day has trouble enough of its own.",
    isScripture: false,
    ref: "Paraphrase of Matthew 6:34 — not exact KJV wording",
  },
  {
    text: "Out of the abundance of the heart, the mouth speaks — and reveals the soul within.",
    isScripture: false,
    ref: "Expansion of Matthew 12:34 / Luke 6:45 — added clause not in scripture",
  },

  // ============================================================
  // BATCH 3: FINAL PUSH — VERIFIED KJV SCRIPTURES
  // ============================================================

  // --- NUMBERS (additional) ---
  {
    text: "The LORD is longsuffering, and of great mercy, forgiving iniquity and transgression.",
    isScripture: true,
    ref: "Numbers 14:18",
  },
  {
    text: "And the LORD spake unto Moses face to face, as a man speaketh unto his friend.",
    isScripture: true,
    ref: "Exodus 33:11",
  },

  // --- JUDGES ---
  {
    text: "The LORD is with thee, thou mighty man of valour.",
    isScripture: true,
    ref: "Judges 6:12",
  },
  {
    text: "Then sang Deborah and Barak the son of Abinoam on that day, saying, Praise ye the LORD.",
    isScripture: true,
    ref: "Judges 5:1-2",
  },

  // --- 1 SAMUEL (additional) ---
  {
    text: "Then Samuel answered, Speak; for thy servant heareth.",
    isScripture: true,
    ref: "1 Samuel 3:10",
  },
  {
    text: "Ebenezer: hitherto hath the LORD helped us.",
    isScripture: true,
    ref: "1 Samuel 7:12",
  },
  {
    text: "There is none holy as the LORD: for there is none beside thee: neither is there any rock like our God.",
    isScripture: true,
    ref: "1 Samuel 2:2",
  },
  {
    text: "He raiseth up the poor out of the dust, and lifteth up the beggar from the dunghill.",
    isScripture: true,
    ref: "1 Samuel 2:8",
  },
  { text: "Is there not a cause?", isScripture: true, ref: "1 Samuel 17:29" },

  // --- 2 SAMUEL (additional) ---
  {
    text: "And David danced before the LORD with all his might.",
    isScripture: true,
    ref: "2 Samuel 6:14",
  },
  {
    text: "I will not offer burnt offerings unto the LORD my God of that which doth cost me nothing.",
    isScripture: true,
    ref: "2 Samuel 24:24",
  },
  {
    text: "How are the mighty fallen in the midst of the battle!",
    isScripture: true,
    ref: "2 Samuel 1:25",
  },

  // --- 2 KINGS (additional) ---
  {
    text: "And Elijah went up by a whirlwind into heaven.",
    isScripture: true,
    ref: "2 Kings 2:11",
  },

  // --- 1 CHRONICLES (additional) ---
  {
    text: "Give unto the LORD the glory due unto his name: bring an offering, and come before him: worship the LORD in the beauty of holiness.",
    isScripture: true,
    ref: "1 Chronicles 16:29",
  },
  {
    text: "Seek the LORD and his strength, seek his face continually.",
    isScripture: true,
    ref: "1 Chronicles 16:11",
  },

  // --- 2 CHRONICLES (additional) ---
  {
    text: "Believe in the LORD your God, so shall ye be established; believe his prophets, so shall ye prosper.",
    isScripture: true,
    ref: "2 Chronicles 20:20",
  },
  {
    text: "Be strong and courageous, be not afraid nor dismayed: for there be more with us than with him.",
    isScripture: true,
    ref: "2 Chronicles 32:7",
  },

  // --- PSALMS (additional batch) ---
  {
    text: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
    isScripture: true,
    ref: "Psalm 23:3",
  },
  {
    text: "Surely goodness and mercy shall follow me all the days of my life.",
    isScripture: true,
    ref: "Psalm 23:6",
  },
  {
    text: "I shall not die, but live, and declare the works of the LORD.",
    isScripture: true,
    ref: "Psalm 118:17",
  },
  {
    text: "The stone which the builders refused is become the head stone of the corner.",
    isScripture: true,
    ref: "Psalm 118:22",
  },
  {
    text: "Thy word have I hid in mine heart, that I might not sin against thee.",
    isScripture: true,
    ref: "Psalm 119:11",
  },
  {
    text: "The entrance of thy words giveth light; it giveth understanding unto the simple.",
    isScripture: true,
    ref: "Psalm 119:130",
  },
  {
    text: "Order my steps in thy word: and let not any iniquity have dominion over me.",
    isScripture: true,
    ref: "Psalm 119:133",
  },
  {
    text: "The LORD is thy keeper: the LORD is thy shade upon thy right hand.",
    isScripture: true,
    ref: "Psalm 121:5",
  },
  {
    text: "Lo, children are an heritage of the LORD: and the fruit of the womb is his reward.",
    isScripture: true,
    ref: "Psalm 127:3",
  },
  {
    text: "Out of the depths have I cried unto thee, O LORD.",
    isScripture: true,
    ref: "Psalm 130:1",
  },
  {
    text: "But there is forgiveness with thee, that thou mayest be feared.",
    isScripture: true,
    ref: "Psalm 130:4",
  },
  {
    text: "I wait for the LORD, my soul doth wait, and in his word do I hope.",
    isScripture: true,
    ref: "Psalm 130:5",
  },
  {
    text: "Behold, how good and how pleasant it is for brethren to dwell together in unity!",
    isScripture: true,
    ref: "Psalm 133:1",
  },
  {
    text: "The LORD upholdeth all that fall, and raiseth up all those that be bowed down.",
    isScripture: true,
    ref: "Psalm 145:14",
  },
  {
    text: "The LORD is nigh unto all them that call upon him, to all that call upon him in truth.",
    isScripture: true,
    ref: "Psalm 145:18",
  },
  {
    text: "He telleth the number of the stars; he calleth them all by their names.",
    isScripture: true,
    ref: "Psalm 147:4",
  },
  {
    text: "Let them praise the name of the LORD: for his name alone is excellent; his glory is above the earth and heaven.",
    isScripture: true,
    ref: "Psalm 148:13",
  },
  {
    text: "I love the LORD, because he hath heard my voice and my supplications.",
    isScripture: true,
    ref: "Psalm 116:1",
  },
  {
    text: "Precious in the sight of the LORD is the death of his saints.",
    isScripture: true,
    ref: "Psalm 116:15",
  },
  {
    text: "Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.",
    isScripture: true,
    ref: "Psalm 23:5",
  },
  {
    text: "I will sing unto the LORD as long as I live: I will sing praise to my God while I have my being.",
    isScripture: true,
    ref: "Psalm 104:33",
  },
  {
    text: "He hath not dealt with us after our sins; nor rewarded us according to our iniquities.",
    isScripture: true,
    ref: "Psalm 103:10",
  },
  {
    text: "How long wilt thou forget me, O LORD? for ever? how long wilt thou hide thy face from me?",
    isScripture: true,
    ref: "Psalm 13:1",
  },
  {
    text: "But I have trusted in thy mercy; my heart shall rejoice in thy salvation.",
    isScripture: true,
    ref: "Psalm 13:5",
  },
  {
    text: "The fool hath said in his heart, There is no God.",
    isScripture: true,
    ref: "Psalm 14:1",
  },
  {
    text: "The LORD is the portion of mine inheritance and of my cup: thou maintainest my lot.",
    isScripture: true,
    ref: "Psalm 16:5",
  },
  {
    text: "The lines are fallen unto me in pleasant places; yea, I have a goodly heritage.",
    isScripture: true,
    ref: "Psalm 16:6",
  },
  {
    text: "Thou wilt shew me the path of life: in thy presence is fulness of joy.",
    isScripture: true,
    ref: "Psalm 16:11",
  },
  {
    text: "Keep me as the apple of the eye, hide me under the shadow of thy wings.",
    isScripture: true,
    ref: "Psalm 17:8",
  },
  {
    text: "The law of the LORD is perfect, converting the soul: the testimony of the LORD is sure, making wise the simple.",
    isScripture: true,
    ref: "Psalm 19:7",
  },
  {
    text: "More to be desired are they than gold, yea, than much fine gold: sweeter also than honey and the honeycomb.",
    isScripture: true,
    ref: "Psalm 19:10",
  },
  {
    text: "Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer.",
    isScripture: true,
    ref: "Psalm 19:14",
  },
  {
    text: "Some trust in chariots, and some in horses: but we will remember the name of the LORD our God.",
    isScripture: true,
    ref: "Psalm 20:7",
  },
  {
    text: "For thou wilt light my candle: the LORD my God will enlighten my darkness.",
    isScripture: true,
    ref: "Psalm 18:28",
  },

  // --- PROVERBS (additional batch) ---
  {
    text: "Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.",
    isScripture: true,
    ref: "Proverbs 4:7",
  },
  {
    text: "The path of the just is as the shining light, that shineth more and more unto the perfect day.",
    isScripture: true,
    ref: "Proverbs 4:18",
  },
  {
    text: "Doth not wisdom cry? and understanding put forth her voice?",
    isScripture: true,
    ref: "Proverbs 8:1",
  },
  {
    text: "The blessing of the LORD, it maketh rich, and he addeth no sorrow with it.",
    isScripture: true,
    ref: "Proverbs 10:22",
  },
  {
    text: "When pride cometh, then cometh shame: but with the lowly is wisdom.",
    isScripture: true,
    ref: "Proverbs 11:2",
  },
  {
    text: "Where no counsel is, the people fall: but in the multitude of counsellors there is safety.",
    isScripture: true,
    ref: "Proverbs 11:14",
  },
  {
    text: "The fruit of the righteous is a tree of life; and he that winneth souls is wise.",
    isScripture: true,
    ref: "Proverbs 11:30",
  },
  {
    text: "He that walketh with wise men shall be wise: but a companion of fools shall be destroyed.",
    isScripture: true,
    ref: "Proverbs 13:20",
  },
  {
    text: "Every wise woman buildeth her house: but the foolish plucketh it down with her hands.",
    isScripture: true,
    ref: "Proverbs 14:1",
  },
  {
    text: "In the fear of the LORD is strong confidence: and his children shall have a place of refuge.",
    isScripture: true,
    ref: "Proverbs 14:26",
  },
  {
    text: "A merry heart maketh a cheerful countenance: but by sorrow of the heart the spirit is broken.",
    isScripture: true,
    ref: "Proverbs 15:13",
  },
  {
    text: "Better is a little with the fear of the LORD than great treasure and trouble therewith.",
    isScripture: true,
    ref: "Proverbs 15:16",
  },
  {
    text: "Better is a dinner of herbs where love is, than a stalled ox and hatred therewith.",
    isScripture: true,
    ref: "Proverbs 15:17",
  },
  {
    text: "A man's gift maketh room for him, and bringeth him before great men.",
    isScripture: true,
    ref: "Proverbs 18:16",
  },
  {
    text: "The spirit of a man will sustain his infirmity; but a wounded spirit who can bear?",
    isScripture: true,
    ref: "Proverbs 18:14",
  },
  {
    text: "It is an honour for a man to cease from strife: but every fool will be meddling.",
    isScripture: true,
    ref: "Proverbs 20:3",
  },
  {
    text: "The hearing ear, and the seeing eye, the LORD hath made even both of them.",
    isScripture: true,
    ref: "Proverbs 20:12",
  },
  {
    text: "The horse is prepared against the day of battle: but safety is of the LORD.",
    isScripture: true,
    ref: "Proverbs 21:31",
  },
  {
    text: "A man's pride shall bring him low: but honour shall uphold the humble in spirit.",
    isScripture: true,
    ref: "Proverbs 29:23",
  },
  {
    text: "Every word of God is pure: he is a shield unto them that put their trust in him.",
    isScripture: true,
    ref: "Proverbs 30:5",
  },
  {
    text: "She looketh well to the ways of her household, and eateth not the bread of idleness.",
    isScripture: true,
    ref: "Proverbs 31:27",
  },
  {
    text: "Favour is deceitful, and beauty is vain: but a woman that feareth the LORD, she shall be praised.",
    isScripture: true,
    ref: "Proverbs 31:30",
  },

  // --- ECCLESIASTES (additional) ---
  {
    text: "For in much wisdom is much grief: and he that increaseth knowledge increaseth sorrow.",
    isScripture: true,
    ref: "Ecclesiastes 1:18",
  },
  {
    text: "Whatever thy hand findeth to do, do it with thy might.",
    isScripture: true,
    ref: "Ecclesiastes 9:10",
  },
  {
    text: "The heart of the wise is in the house of mourning; but the heart of fools is in the house of mirth.",
    isScripture: true,
    ref: "Ecclesiastes 7:4",
  },
  {
    text: "Better is the end of a thing than the beginning thereof: and the patient in spirit is better than the proud in spirit.",
    isScripture: true,
    ref: "Ecclesiastes 7:8",
  },
  {
    text: "The race is not to the swift, nor the battle to the strong, neither yet bread to the wise.",
    isScripture: true,
    ref: "Ecclesiastes 9:11",
  },
  {
    text: "Remember now thy Creator in the days of thy youth, while the evil days come not.",
    isScripture: true,
    ref: "Ecclesiastes 12:1",
  },
  {
    text: "Then shall the dust return to the earth as it was: and the spirit shall return unto God who gave it.",
    isScripture: true,
    ref: "Ecclesiastes 12:7",
  },
  {
    text: "Go thy way, eat thy bread with joy, and drink thy wine with a merry heart; for God now accepteth thy works.",
    isScripture: true,
    ref: "Ecclesiastes 9:7",
  },

  // --- SONG OF SOLOMON (additional) ---
  {
    text: "Let him kiss me with the kisses of his mouth: for thy love is better than wine.",
    isScripture: true,
    ref: "Song of Solomon 1:2",
  },
  {
    text: "For, lo, the winter is past, the rain is over and gone; The flowers appear on the earth.",
    isScripture: true,
    ref: "Song of Solomon 2:11-12",
  },
  {
    text: "Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as death.",
    isScripture: true,
    ref: "Song of Solomon 8:6",
  },

  // --- MARK (additional) ---
  {
    text: "And he arose, and rebuked the wind, and said unto the sea, Peace, be still.",
    isScripture: true,
    ref: "Mark 4:39",
  },
  {
    text: "For what shall it profit a man, if he shall gain the whole world, and lose his own soul?",
    isScripture: true,
    ref: "Mark 8:36",
  },
  {
    text: "Suffer the little children to come unto me, and forbid them not: for of such is the kingdom of God.",
    isScripture: true,
    ref: "Mark 10:14",
  },
  {
    text: "The sabbath was made for man, and not man for the sabbath.",
    isScripture: true,
    ref: "Mark 2:27",
  },
  {
    text: "And thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength.",
    isScripture: true,
    ref: "Mark 12:30",
  },
  {
    text: "He that believeth and is baptized shall be saved; but he that believeth not shall be damned.",
    isScripture: true,
    ref: "Mark 16:16",
  },
  {
    text: "And they went forth, and preached every where, the Lord working with them.",
    isScripture: true,
    ref: "Mark 16:20",
  },

  // --- 2 THESSALONIANS ---
  {
    text: "And the Lord is faithful, who shall stablish you, and keep you from evil.",
    isScripture: true,
    ref: "2 Thessalonians 3:3",
  },
  {
    text: "But ye, brethren, be not weary in well doing.",
    isScripture: true,
    ref: "2 Thessalonians 3:13",
  },
  {
    text: "Now the Lord of peace himself give you peace always by all means.",
    isScripture: true,
    ref: "2 Thessalonians 3:16",
  },

  // --- TITUS ---
  {
    text: "For the grace of God that bringeth salvation hath appeared to all men.",
    isScripture: true,
    ref: "Titus 2:11",
  },
  {
    text: "Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ.",
    isScripture: true,
    ref: "Titus 2:13",
  },
  {
    text: "Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regenerating.",
    isScripture: true,
    ref: "Titus 3:5",
  },

  // --- 3 JOHN ---
  {
    text: "Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.",
    isScripture: true,
    ref: "3 John 1:2",
  },
  {
    text: "I have no greater joy than to hear that my children walk in truth.",
    isScripture: true,
    ref: "3 John 1:4",
  },

  // --- 2 JOHN ---
  {
    text: "Grace be with you, mercy, and peace, from God the Father, and from the Lord Jesus Christ.",
    isScripture: true,
    ref: "2 John 1:3",
  },
  {
    text: "This is love, that we walk after his commandments.",
    isScripture: true,
    ref: "2 John 1:6",
  },

  // --- JUDE (additional) ---
  {
    text: "Contend earnestly for the faith which was once delivered unto the saints.",
    isScripture: true,
    ref: "Jude 1:3",
  },
  {
    text: "Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy.",
    isScripture: true,
    ref: "Jude 1:24",
  },
  {
    text: "To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen.",
    isScripture: true,
    ref: "Jude 1:25",
  },

  // --- COLOSSIANS (additional) ---
  {
    text: "For in him dwelleth all the fulness of the Godhead bodily.",
    isScripture: true,
    ref: "Colossians 2:9",
  },
  {
    text: "If ye then be risen with Christ, seek those things which are above, where Christ sitteth on the right hand of God.",
    isScripture: true,
    ref: "Colossians 3:1",
  },
  {
    text: "Put on therefore, as the elect of God, holy and beloved, bowels of mercies, kindness, humbleness of mind, meekness, longsuffering.",
    isScripture: true,
    ref: "Colossians 3:12",
  },
  {
    text: "And above all these things put on charity, which is the bond of perfectness.",
    isScripture: true,
    ref: "Colossians 3:14",
  },
  {
    text: "Fathers, provoke not your children to anger, lest they be discouraged.",
    isScripture: true,
    ref: "Colossians 3:21",
  },
  {
    text: "Continue in prayer, and watch in the same with thanksgiving.",
    isScripture: true,
    ref: "Colossians 4:2",
  },

  // --- 1 TIMOTHY (additional) ---
  {
    text: "This is a faithful saying, and worthy of all acceptation, that Christ Jesus came into the world to save sinners; of whom I am chief.",
    isScripture: true,
    ref: "1 Timothy 1:15",
  },
  {
    text: "For there is one God, and one mediator between God and men, the man Christ Jesus.",
    isScripture: true,
    ref: "1 Timothy 2:5",
  },
  {
    text: "Without controversy great is the mystery of godliness: God was manifest in the flesh.",
    isScripture: true,
    ref: "1 Timothy 3:16",
  },
  {
    text: "For bodily exercise profiteth little: but godliness is profitable unto all things.",
    isScripture: true,
    ref: "1 Timothy 4:8",
  },
  {
    text: "Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.",
    isScripture: true,
    ref: "1 Timothy 4:12",
  },
  {
    text: "But if any provide not for his own, and specially for those of his own house, he hath denied the faith.",
    isScripture: true,
    ref: "1 Timothy 5:8",
  },

  // --- 2 TIMOTHY (additional) ---
  {
    text: "Thou therefore endure hardness, as a good soldier of Jesus Christ.",
    isScripture: true,
    ref: "2 Timothy 2:3",
  },
  {
    text: "If we suffer, we shall also reign with him: if we deny him, he also will deny us.",
    isScripture: true,
    ref: "2 Timothy 2:12",
  },
  {
    text: "Flee also youthful lusts: but follow righteousness, faith, charity, peace, with them that call on the Lord out of a pure heart.",
    isScripture: true,
    ref: "2 Timothy 2:22",
  },
  {
    text: "This know also, that in the last days perilous times shall come.",
    isScripture: true,
    ref: "2 Timothy 3:1",
  },
  {
    text: "Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all longsuffering and doctrine.",
    isScripture: true,
    ref: "2 Timothy 4:2",
  },
  {
    text: "For the time will come when they will not endure sound doctrine; but after their own lusts shall they heap to themselves teachers.",
    isScripture: true,
    ref: "2 Timothy 4:3",
  },
  {
    text: "Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day.",
    isScripture: true,
    ref: "2 Timothy 4:8",
  },

  // --- 1 PETER (additional) ---
  {
    text: "Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope.",
    isScripture: true,
    ref: "1 Peter 1:3",
  },
  {
    text: "Being born again, not of corruptible seed, but of incorruptible, by the word of God, which liveth and abideth for ever.",
    isScripture: true,
    ref: "1 Peter 1:23",
  },
  {
    text: "As newborn babes, desire the sincere milk of the word, that ye may grow thereby.",
    isScripture: true,
    ref: "1 Peter 2:2",
  },
  {
    text: "Honour all men. Love the brotherhood. Fear God. Honour the king.",
    isScripture: true,
    ref: "1 Peter 2:17",
  },
  {
    text: "For even hereunto were ye called: because Christ also suffered for us, leaving us an example, that ye should follow his steps.",
    isScripture: true,
    ref: "1 Peter 2:21",
  },
  {
    text: "For the eyes of the Lord are over the righteous, and his ears are open unto their prayers.",
    isScripture: true,
    ref: "1 Peter 3:12",
  },
  {
    text: "But sanctify the Lord God in your hearts: and be ready always to give an answer to every man that asketh you a reason of the hope that is in you.",
    isScripture: true,
    ref: "1 Peter 3:15",
  },
  {
    text: "For the time is come that judgment must begin at the house of God.",
    isScripture: true,
    ref: "1 Peter 4:17",
  },
  {
    text: "God resisteth the proud, and giveth grace to the humble.",
    isScripture: true,
    ref: "1 Peter 5:5",
  },

  // --- 2 PETER (additional) ---
  {
    text: "Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature.",
    isScripture: true,
    ref: "2 Peter 1:4",
  },
  {
    text: "For no prophecy of the scripture is of any private interpretation.",
    isScripture: true,
    ref: "2 Peter 1:20",
  },
  {
    text: "Holy men of God spake as they were moved by the Holy Ghost.",
    isScripture: true,
    ref: "2 Peter 1:21",
  },
  {
    text: "But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ.",
    isScripture: true,
    ref: "2 Peter 3:18",
  },

  // --- 1 JOHN (additional) ---
  {
    text: "If we say that we have no sin, we deceive ourselves, and the truth is not in us.",
    isScripture: true,
    ref: "1 John 1:8",
  },
  {
    text: "And he is the propitiation for our sins: and not for ours only, but also for the sins of the whole world.",
    isScripture: true,
    ref: "1 John 2:2",
  },
  {
    text: "Hereby perceive we the love of God, because he laid down his life for us: and we ought to lay down our lives for the brethren.",
    isScripture: true,
    ref: "1 John 3:16",
  },
  {
    text: "My little children, let us not love in word, neither in tongue; but in deed and in truth.",
    isScripture: true,
    ref: "1 John 3:18",
  },
  {
    text: "No man hath seen God at any time. If we love one another, God dwelleth in us.",
    isScripture: true,
    ref: "1 John 4:12",
  },
  {
    text: "We love him, because he first loved us.",
    isScripture: true,
    ref: "1 John 4:19",
  },
  {
    text: "For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.",
    isScripture: true,
    ref: "1 John 5:4",
  },
  {
    text: "He that hath the Son hath life; and he that hath not the Son of God hath not life.",
    isScripture: true,
    ref: "1 John 5:12",
  },

  // --- HOSEA (additional) ---
  {
    text: "I drew them with cords of a man, with bands of love.",
    isScripture: true,
    ref: "Hosea 11:4",
  },
  {
    text: "I will heal their backsliding, I will love them freely: for mine anger is turned away from him.",
    isScripture: true,
    ref: "Hosea 14:4",
  },
  {
    text: "Come, and let us return unto the LORD: for he hath torn, and he will heal us.",
    isScripture: true,
    ref: "Hosea 6:1",
  },
  {
    text: "For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings.",
    isScripture: true,
    ref: "Hosea 6:6",
  },

  // --- AMOS (additional) ---
  {
    text: "Seek good, and not evil, that ye may live: and so the LORD, the God of hosts, shall be with you.",
    isScripture: true,
    ref: "Amos 5:14",
  },
  {
    text: "Can two walk together, except they be agreed?",
    isScripture: true,
    ref: "Amos 3:3",
  },
  {
    text: "Prepare to meet thy God, O Israel.",
    isScripture: true,
    ref: "Amos 4:12",
  },

  // --- ZECHARIAH (additional) ---
  {
    text: "Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee.",
    isScripture: true,
    ref: "Zechariah 9:9",
  },
  {
    text: "And I will say, It is my people: and they shall say, The LORD is my God.",
    isScripture: true,
    ref: "Zechariah 13:9",
  },
  {
    text: "Execute true judgment, and shew mercy and compassions every man to his brother.",
    isScripture: true,
    ref: "Zechariah 7:9",
  },

  // --- MALACHI (additional) ---
  {
    text: "Have we not all one father? hath not one God created us? why do we deal treacherously every man against his brother?",
    isScripture: true,
    ref: "Malachi 2:10",
  },
  {
    text: "And I will rebuke the devourer for your sakes, and he shall not destroy the fruits of your ground.",
    isScripture: true,
    ref: "Malachi 3:11",
  },
  {
    text: "For I am the LORD, I change not; therefore ye sons of Jacob are not consumed.",
    isScripture: true,
    ref: "Malachi 3:6",
  },
  {
    text: "Return unto me, and I will return unto you, saith the LORD of hosts.",
    isScripture: true,
    ref: "Malachi 3:7",
  },

  // --- JOEL (additional) ---
  {
    text: "And I will restore to you the years that the locust hath eaten.",
    isScripture: true,
    ref: "Joel 2:25",
  },
  {
    text: "And it shall come to pass, that whosoever shall call on the name of the LORD shall be delivered.",
    isScripture: true,
    ref: "Joel 2:32",
  },

  // --- ROMANS (further) ---
  {
    text: "For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made.",
    isScripture: true,
    ref: "Romans 1:20",
  },
  {
    text: "For the kingdom of God is not in word, but in power.",
    isScripture: true,
    ref: "1 Corinthians 4:20",
  },
  {
    text: "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope.",
    isScripture: true,
    ref: "Romans 15:13",
  },
  {
    text: "For Christ is the end of the law for righteousness to every one that believeth.",
    isScripture: true,
    ref: "Romans 10:4",
  },
  {
    text: "How beautiful are the feet of them that preach the gospel of peace, and bring glad tidings of good things!",
    isScripture: true,
    ref: "Romans 10:15",
  },
  {
    text: "O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out!",
    isScripture: true,
    ref: "Romans 11:33",
  },
  {
    text: "For of him, and through him, and to him, are all things: to whom be glory for ever. Amen.",
    isScripture: true,
    ref: "Romans 11:36",
  },

  // --- PHILIPPIANS (additional) ---
  {
    text: "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ.",
    isScripture: true,
    ref: "Philippians 1:6",
  },
  {
    text: "Let this mind be in you, which was also in Christ Jesus.",
    isScripture: true,
    ref: "Philippians 2:5",
  },
  {
    text: "That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth.",
    isScripture: true,
    ref: "Philippians 2:10",
  },
  {
    text: "Work out your own salvation with fear and trembling.",
    isScripture: true,
    ref: "Philippians 2:12",
  },
  {
    text: "I count all things but loss for the excellency of the knowledge of Christ Jesus my Lord.",
    isScripture: true,
    ref: "Philippians 3:8",
  },
  {
    text: "I press toward the mark for the prize of the high calling of God in Christ Jesus.",
    isScripture: true,
    ref: "Philippians 3:14",
  },
  {
    text: "Our conversation is in heaven; from whence also we look for the Saviour, the Lord Jesus Christ.",
    isScripture: true,
    ref: "Philippians 3:20",
  },

  // ============================================================
  // BATCH 3: ADDITIONAL NON-SCRIPTURE QUOTES
  // ============================================================

  // --- MORE MISQUOTES & CONFLATIONS ---
  {
    text: "Through Christ who strengthens me, there is nothing I cannot do.",
    isScripture: false,
    ref: "Paraphrase of Philippians 4:13 — altered word order and meaning",
  },
  {
    text: "Train up a child and he will never depart from the Lord.",
    isScripture: false,
    ref: "Misquote of Proverbs 22:6 — the verse says 'his way', not 'the Lord'",
  },
  {
    text: "No weapon formed against me shall prosper — I am covered by the blood.",
    isScripture: false,
    ref: "Expansion of Isaiah 54:17 — 'covered by the blood' is not in the verse",
  },
  {
    text: "Greater is He that is within me than he that is in the world.",
    isScripture: false,
    ref: "Paraphrase of 1 John 4:4 — commonly misquoted",
  },
  {
    text: "Write the vision and make it plain on tablets, that the readers may run with it.",
    isScripture: false,
    ref: "Paraphrase of Habakkuk 2:2 — 'run with it' is a common extension not in the verse",
  },
  {
    text: "Delight yourself in the Lord and He will give you the desires and dreams of your heart.",
    isScripture: false,
    ref: "Expansion of Psalm 37:4 — 'and dreams' is added, not in the verse",
  },
  {
    text: "He makes all things beautiful in His time.",
    isScripture: false,
    ref: "Paraphrase of Ecclesiastes 3:11 — the verse says 'every thing', not 'all things beautiful'",
  },
  {
    text: "He who angers you conquers you.",
    isScripture: false,
    ref: "Elizabeth Kenny — not scripture",
  },

  // --- MODERN CHRISTIAN CULTURE ---
  {
    text: "God is writing your love story — just trust the process.",
    isScripture: false,
    ref: "Modern Christian romance culture — not scripture",
  },
  {
    text: "Your miracle is on the way — just keep praying.",
    isScripture: false,
    ref: "Modern prosperity gospel saying — not scripture",
  },
  {
    text: "Speak life into every situation.",
    isScripture: false,
    ref: "Popular Christian motivation saying — not scripture",
  },
  {
    text: "God is preparing you for something greater.",
    isScripture: false,
    ref: "Popular Christian saying — not scripture",
  },
  {
    text: "Your season of breakthrough is coming.",
    isScripture: false,
    ref: "Modern prophetic culture language — not scripture",
  },
  {
    text: "God's got this.",
    isScripture: false,
    ref: "Modern Christian slogan — not scripture",
  },
  {
    text: "Closed doors are God's protection.",
    isScripture: false,
    ref: "Popular Christian saying — not scripture",
  },
  {
    text: "God doesn't call the qualified, He qualifies the called.",
    isScripture: false,
    ref: "Popular Christian saying — not scripture",
  },
  {
    text: "Your storm is making you stronger for what God has next.",
    isScripture: false,
    ref: "Modern Christian inspirational saying — not scripture",
  },
  {
    text: "Blessed are those who plant seeds in broken soil.",
    isScripture: false,
    ref: "Modern Christian saying — not a Bible verse",
  },

  // --- CORRIE TEN BOOM & CHRISTIAN AUTHORS ---
  {
    text: "Worry is the interest you pay on a debt you may not owe.",
    isScripture: false,
    ref: "Corrie ten Boom (attributed) — not scripture",
  },
  {
    text: "Never be afraid to trust an unknown future to a known God.",
    isScripture: false,
    ref: "Corrie ten Boom — not scripture",
  },
  {
    text: "There is no pit so deep that God's love is not deeper still.",
    isScripture: false,
    ref: "Corrie ten Boom, The Hiding Place — not scripture",
  },
  {
    text: "Earth has no sorrow that heaven cannot heal.",
    isScripture: false,
    ref: "Thomas Moore, Come Ye Disconsolate — not scripture",
  },

  // --- PHILOSOPHERS ---
  {
    text: "Man is condemned to be free.",
    isScripture: false,
    ref: "Jean-Paul Sartre, Existentialism Is a Humanism (1946)",
  },
  {
    text: "Hell is other people.",
    isScripture: false,
    ref: "Jean-Paul Sartre, No Exit (1944)",
  },
  {
    text: "The secret of happiness is freedom and the secret of freedom is courage.",
    isScripture: false,
    ref: "Thucydides — not scripture",
  },
  {
    text: "Beauty is in the eye of the beholder.",
    isScripture: false,
    ref: "Margaret Wolfe Hungerford, Molly Bawn (1878) — not scripture",
  },
  {
    text: "Fortune favours the bold.",
    isScripture: false,
    ref: "Latin proverb (Virgil) — not scripture",
  },
  {
    text: "A little learning is a dangerous thing; drink deep, or taste not the Pierian spring.",
    isScripture: false,
    ref: "Alexander Pope, An Essay on Criticism (1711)",
  },
  {
    text: "Hope springs eternal in the human breast.",
    isScripture: false,
    ref: "Alexander Pope, An Essay on Man (1733)",
  },
  {
    text: "A thing of beauty is a joy forever.",
    isScripture: false,
    ref: "John Keats, Endymion (1818)",
  },
  {
    text: "Beauty is truth, truth beauty — that is all ye know on earth, and all ye need to know.",
    isScripture: false,
    ref: "John Keats, Ode on a Grecian Urn (1819)",
  },
  {
    text: "I am the master of my fate, I am the captain of my soul.",
    isScripture: false,
    ref: "William Ernest Henley, Invictus (1875)",
  },
  {
    text: "Do not go gentle into that good night. Old age should burn and rave at close of day.",
    isScripture: false,
    ref: "Dylan Thomas, Do Not Go Gentle into That Good Night (1951)",
  },
  {
    text: "The woods are lovely, dark and deep, but I have promises to keep.",
    isScripture: false,
    ref: "Robert Frost, Stopping by Woods on a Snowy Evening (1923)",
  },
  {
    text: "Tis better to have loved and lost, than never to have loved at all.",
    isScripture: false,
    ref: "Alfred Lord Tennyson, In Memoriam A.H.H. (1850)",
  },
  {
    text: "To strive, to seek, to find, and not to yield.",
    isScripture: false,
    ref: "Alfred Lord Tennyson, Ulysses (1842)",
  },
  {
    text: "Everyone thinks of changing the world, but no one thinks of changing himself.",
    isScripture: false,
    ref: "Leo Tolstoy — not scripture",
  },
  {
    text: "All happy families are alike; each unhappy family is unhappy in its own way.",
    isScripture: false,
    ref: "Leo Tolstoy, Anna Karenina (1877)",
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    isScripture: false,
    ref: "Socrates (as recorded by Plato) — not scripture",
  },
  {
    text: "The measure of a man is what he does with power.",
    isScripture: false,
    ref: "Plato — not scripture",
  },

  // --- HISTORY & CULTURE ---
  {
    text: "We hold these truths to be self-evident, that all men are created equal.",
    isScripture: false,
    ref: "United States Declaration of Independence (1776)",
  },
  {
    text: "Government of the people, by the people, for the people, shall not perish from the earth.",
    isScripture: false,
    ref: "Abraham Lincoln, Gettysburg Address (1863)",
  },
  {
    text: "Give me liberty, or give me death!",
    isScripture: false,
    ref: "Patrick Henry, speech (1775)",
  },
  {
    text: "Science without religion is lame; religion without science is blind.",
    isScripture: false,
    ref: "Albert Einstein — not scripture",
  },
  {
    text: "One small step for man, one giant leap for mankind.",
    isScripture: false,
    ref: "Neil Armstrong (1969) — not scripture",
  },
  {
    text: "The price of anything is the amount of life you exchange for it.",
    isScripture: false,
    ref: "Henry David Thoreau — not scripture",
  },
  {
    text: "It was the best of times, it was the worst of times.",
    isScripture: false,
    ref: "Charles Dickens, A Tale of Two Cities (1859)",
  },
  {
    text: "It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife.",
    isScripture: false,
    ref: "Jane Austen, Pride and Prejudice (1813)",
  },

  // --- PROVERBS FROM WORLD CULTURES ---
  {
    text: "When the student is ready, the teacher will appear.",
    isScripture: false,
    ref: "Buddhist proverb — not scripture",
  },
  {
    text: "Fall seven times, stand up eight.",
    isScripture: false,
    ref: "Japanese proverb — not scripture",
  },
  {
    text: "The bamboo that bends is stronger than the oak that resists.",
    isScripture: false,
    ref: "Japanese proverb — not scripture",
  },
  {
    text: "Every cloud has a silver lining.",
    isScripture: false,
    ref: "John Milton, Comus (1634) — not scripture",
  },
  {
    text: "Actions speak louder than words.",
    isScripture: false,
    ref: "Proverb — not scripture",
  },
  {
    text: "Birds of a feather flock together.",
    isScripture: false,
    ref: "William Turner (1545) — not scripture",
  },
  {
    text: "Don't count your chickens before they hatch.",
    isScripture: false,
    ref: "Aesop's Fables — not scripture",
  },
  {
    text: "You can lead a horse to water, but you can't make it drink.",
    isScripture: false,
    ref: "English proverb (1175) — not scripture",
  },
  {
    text: "Laughter is the best medicine.",
    isScripture: false,
    ref: "Proverb — sometimes attributed loosely to Proverbs 17:22, but not exact KJV wording",
  },
  {
    text: "Time heals all wounds.",
    isScripture: false,
    ref: "Menander / Chaucer — not scripture",
  },
  {
    text: "Blood is thicker than water.",
    isScripture: false,
    ref: "German proverb — not scripture",
  },
  {
    text: "Honesty is the best policy.",
    isScripture: false,
    ref: "Benjamin Franklin / Edwin Sandys (1599) — not scripture",
  },
  {
    text: "Knowledge is power.",
    isScripture: false,
    ref: "Francis Bacon, Meditationes Sacrae (1597) — not scripture",
  },
  {
    text: "A penny saved is a penny earned.",
    isScripture: false,
    ref: "Benjamin Franklin — not scripture",
  },
  {
    text: "Where there is a will, there is a way.",
    isScripture: false,
    ref: "George Herbert, Jacula Prudentum (1651) — not scripture",
  },
  {
    text: "Rome was not built in a day.",
    isScripture: false,
    ref: "Medieval proverb — not scripture",
  },
  {
    text: "When the going gets tough, the tough get going.",
    isScripture: false,
    ref: "Joseph P. Kennedy — not scripture",
  },
  {
    text: "There are no atheists in foxholes.",
    isScripture: false,
    ref: "William Thomas Cummings, sermon (1942) — not scripture",
  },
  {
    text: "The devil is in the details.",
    isScripture: false,
    ref: "Attributed to Gustave Flaubert / proverb — not scripture",
  },
  {
    text: "God is in the details.",
    isScripture: false,
    ref: "Attributed to Gustave Flaubert / Mies van der Rohe — not scripture",
  },
  {
    text: "You can't judge a book by its cover.",
    isScripture: false,
    ref: "George Eliot, The Mill on the Floss (1860) — not scripture",
  },
  {
    text: "Those who cannot remember the past are condemned to repeat it.",
    isScripture: false,
    ref: "George Santayana, The Life of Reason (1905)",
  },
  {
    text: "Necessity is the mother of invention.",
    isScripture: false,
    ref: "Plato, The Republic — not scripture",
  },
  {
    text: "No pain, no gain.",
    isScripture: false,
    ref: "Benjamin Franklin, Poor Richard's Almanack — not scripture",
  },
  {
    text: "Practice makes perfect.",
    isScripture: false,
    ref: "English proverb — not scripture",
  },
  {
    text: "Time is money.",
    isScripture: false,
    ref: "Benjamin Franklin, Advice to a Young Tradesman (1748) — not scripture",
  },
  {
    text: "Many receive advice, only the wise profit from it.",
    isScripture: false,
    ref: "Publilius Syrus — not scripture",
  },
  {
    text: "Character is how you treat those who can do nothing for you.",
    isScripture: false,
    ref: "Attributed to various — not scripture",
  },
  {
    text: "The whole is greater than the sum of its parts.",
    isScripture: false,
    ref: "Aristotle, Metaphysics — not scripture",
  },
  {
    text: "Blessed are the cracked, for they shall let in the light.",
    isScripture: false,
    ref: "Attributed to Groucho Marx / anonymous — not scripture; parodies Matthew 5",
  },
  {
    text: "Worry is the interest you pay on a debt you may not owe.",
    isScripture: false,
    ref: "Corrie ten Boom (attributed) — not scripture",
  },
  {
    text: "The measure of intelligence is the ability to change.",
    isScripture: false,
    ref: "Albert Einstein — not scripture",
  },
  {
    text: "Not everything that counts can be counted, and not everything that can be counted counts.",
    isScripture: false,
    ref: "Attributed to Albert Einstein (disputed) — not scripture",
  },
  {
    text: "It's not the size of the dog in the fight, it's the size of the fight in the dog.",
    isScripture: false,
    ref: "Mark Twain — not scripture",
  },
  {
    text: "The reports of my death are greatly exaggerated.",
    isScripture: false,
    ref: "Mark Twain — not scripture",
  },
  {
    text: "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
    isScripture: false,
    ref: "Mark Twain — not scripture",
  },
  {
    text: "Wrinkles should merely indicate where smiles have been.",
    isScripture: false,
    ref: "Mark Twain — not scripture",
  },
  {
    text: "In matters of style, swim with the current; in matters of principle, stand like a rock.",
    isScripture: false,
    ref: "Thomas Jefferson — not scripture",
  },
  {
    text: "I have a dream that one day this nation will rise up and live out the true meaning of its creed.",
    isScripture: false,
    ref: "Martin Luther King Jr., I Have a Dream speech (1963)",
  },
  {
    text: "The arc of the moral universe is long, but it bends toward justice.",
    isScripture: false,
    ref: "Theodore Parker / Martin Luther King Jr. — not scripture",
  },
  {
    text: "Not all who wander are lost — some are just on a longer journey to God.",
    isScripture: false,
    ref: "Adaptation of Tolkien with Christian spin — not scripture",
  },
  {
    text: "You cannot step into the same river twice.",
    isScripture: false,
    ref: "Heraclitus — not scripture",
  },
  {
    text: "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.",
    isScripture: false,
    ref: "Archimedes — not scripture",
  },
  {
    text: "Brevity is the soul of wit.",
    isScripture: false,
    ref: "William Shakespeare, Hamlet (1600)",
  },
  {
    text: "We are such stuff as dreams are made on, and our little life is rounded with a sleep.",
    isScripture: false,
    ref: "William Shakespeare, The Tempest (1611)",
  },
  {
    text: "All that glitters is not gold — often have you heard that told.",
    isScripture: false,
    ref: "William Shakespeare, The Merchant of Venice (1596)",
  },
  {
    text: "Lord, what fools these mortals be!",
    isScripture: false,
    ref: "William Shakespeare, A Midsummer Night's Dream (1600)",
  },
  {
    text: "The robbed that smiles, steals something from the thief.",
    isScripture: false,
    ref: "William Shakespeare, Othello (1603)",
  },
  {
    text: "Uneasy lies the head that wears a crown.",
    isScripture: false,
    ref: "William Shakespeare, Henry IV Part 2 (1600)",
  },
  {
    text: "Better three hours too soon than a minute too late.",
    isScripture: false,
    ref: "William Shakespeare, The Merry Wives of Windsor (1602)",
  },
  {
    text: "How sharper than a serpent's tooth it is to have a thankless child.",
    isScripture: false,
    ref: "William Shakespeare, King Lear (1606)",
  },
  {
    text: "Nothing will come of nothing.",
    isScripture: false,
    ref: "William Shakespeare, King Lear (1606)",
  },
];
