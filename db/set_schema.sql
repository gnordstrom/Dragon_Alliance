DROP TABLE IF EXISTS surfers;

CREATE TABLE surfers (
    id SERIAL PRIMARY KEY, 
    firstname TEXT, 
    thumbnailUrl TEXT, 
    description TEXT,
    level TEXT,
    images TEXT[]
);

INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Rob Machado',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/RobLife.jpg',
    'One word is often used to describe freesurfer Rob Machado: Style. While the Aussie-born, California-bred surfer has won many of surfing’s most prestigious contests, he’s always preferred surfing on his own terms. With long hair and a laid-back style both in and out of the water, Machado’s effortless approach to waves has been emulated by kids and adults all over the world. Currently he"s building uniquely shaped boards and surfing in exotic destinations for movies and fun, he also gives to the next generation of surfers and supports sustainability efforts through his Rob Machado Foundation.',
    'Global',
    '{ 
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Rob_Machado/machado4.jpg, 
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Rob_Machado/Rob_Lifestyle_Warehouse.jpg 
    }'
);

INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Reef McIntosh',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/ReefMac_Thumb.jpg',
    'With a coveted job managing the Quiksilver house in front of the famous Pipeline all winter long, Reef, who’s spent years riding the famous wave, is one of the regulars you can expect to always see at Pipeline charging. An accomplished surfer who didn’t get his first sponsor until the age of 26 when many surfers are already three-fourths through with their careers, Reef has only improved with age. He’s been one of the 28 invitees to the Eddie since 2009, won the Best Barrel category at the Surfer Poll awards in 2012, and is known to always have a giant smile on his face.',
    'Global',
    '{ 
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Reef_McIntosh/mcintosh2.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Reef_McIntosh/ReefMac_Life.jpg    
    }'
);

INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Shane Dorian',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Dorian_life2.jpg',
    'Big wave surfing legend. Father. Husband. Hunter. Stunt double. Inventor. There’s not a lot Shane Dorian hasn’t done. An eleven-year world tour competitor, Shane left the tour in 2003 to focus on big waves and soon after helped pilot some of the safety vests for big wave surfing. A favorite among other surfers, the soft-spoken 2016 Big Wave of the Year Winner still competes in the occasional contest but prefers to hunt waves (and food) on his own time in more wild destinations around the world.',
    'Global',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Shane_Dorian/dorian_lifestyle1.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Shane_Dorian/dorian_lifestyle2.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Shane_Dorian/dorian6.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Shane_Dorian/dorian4.jpg
    }'
);
INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Owen Wright',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Screen Shot 2013-04-23 at 4.35.17 PM.png',
    'Fearless charger in the water. Hilarious on land. Owen Wright is the first surfer to ever post two perfect heats in one single event. One of the tallest surfers on the WSL, from a family of rippers (his little sister is ranked number one on the women’s tour), he’s beaten the best surfers in the world, and has always been one to watch. While he’s currently taking the season off due to an injury at Pipeline last year, he’s got millions of fans rooting for him, and his fellow competitors cannot wait to see him back.',
    'Global',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Owen_Wright/Owen_Lifestyle_Signature.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Owen_Wright/wright3.jpg
    }'
);
INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Ace Buchan',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/ACE_life2.jpg',
    'Writer. Community advocate. Top ranked surfer. Ace Buchan began surfing at age four and was a two-timeAustralian Pro Junior Champion before graduating to the World Championship Tour where his backside attack and incredible tube riding ability won him multiple events in Tahiti and France. He’s humble by nature, but his community involvement and surfing have made him one of the most likeable surfers around. Besides being the author of the children’s book "Mackas Barrel into the Dreamtime," Ace also works with various non-profit organizations including the Inspire Foundation and Reach Out, which helps kids going through difficult times. He is currently ranked top ten on the WSL tour, with great things to come in and out of the water.',
    'Global',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Ace1.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Ace_Buchan/Ace_Lowers.jpg
    }'
);
INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Evan Geiselman',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/EvanG_Thumb.jpg',
    'Only 21 years old, Evan Geiselman has been recognized as one of the best young surfers in the world and is known for his smooth and explosive style. Nicknamed “Golden Boy” for his consistent ability in the surf, the fact he holds 15 NSSA title wins, and his good looks that have won him parts in music videos and more, the younger brother of surfer Eric Geiselman escaped a near-death accident at Pipeline last year. While the accident initially rattled him, it has only made him stronger, more grateful and focused to compete at the top level today.',
    'Global',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Evan_Geiselman/Evan_Life_E2.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Evan_Geiselman/EvanG_Air.jpg
    }'
);
INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Mick Fanning',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Mick Marquis  copy.jpg',
    'Three-time world surf champion, shark encounter survivor, and beer company part-owner, it’s no wonder Mick “White Lightning” Fanning is a fan favorite. The Aussie native is known for his powerful style and high speed, consistently finishing on or near the podium. While he’s a fierce competitor in the water, on land Mick’s embraced for his fun-loving attitude, hilarious antics and generous ability to give to others.',
    'Global',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Mick_Fanning/mick_regal.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Mick_Fanning/Mick_Barrel_DBah.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Mick_Fanning/fanning3.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Mick_Fanning/fanning6.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Mick_Fanning/fanning4.jpg
    }'
);
INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Alejo Muniz',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/alejo_head.jpg',
    'The Brazilian surfer, who was originally born in Argentina, is a major contender and a favorite in his home country. While he was off the championship tour in 2015, he’s come back stronger than ever, with a popular trainer and sports psychologist that is pushing him to another level. He took out title contenders Kelly Slater and Mick Fanning the year Gabe Medina won the first title for Brazil, and is always one to watch out for.',
    'Global',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Alejo2.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Alejo1.jpg
    }'
);

INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Taylor Clark',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/TClark_Thumb.jpg',
    'Goofyfooter with lots of flair, San Diego native "TC" lives to surf, staying in the water for hours at a time. The Surfing America U/18 Championship, Open Mens NSSA National Championship, and the US VQS Champ, Taylor is ready to hit the WQS and make his mark on the surfing world. ',
    'Professional',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Regional_Team/Taylor_Clark/TClark_LifestyleHI.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Regional_Team/Taylor_Clark/clark3.jpg
    }'
);

INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Ricky Whitlock',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Whitlock_life.jpg',
    'Ricky Whitlock has one of the best comeback stories in surfing. At 9 years old he started surfing and had a promising amateur career, followed by a leap into the pro leagues. Then, just as Ricky was making a name for himself, a nasty wipeout at Pipeline where he fell onto the reef on his back, nearly left him paralyzed. Althoughhe escaped paralysis by pure miracle, his L-1 and T-12 vertebrae were fractured and doctors said a full recovery would be impossible. Ricky, who always worked hard for everything he made, proved them wrong and was back in the ocean that next year, surfing 15 foot waves in Mexico seven months later and then some of the biggest waves at Jaws in Maui less than a year after his accident. He credits a consistent training regime to getting him back so fast. While he still spends most of his hours training for the next big wave session, he is now the co-owner of surfboard company, Avasin, helping build high-performance boards and testing them in challenging conditions.',
    'Professional',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Pro_Team/Ricky_Whitlock/Ricky_BS_slash.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Pro_Team/Ricky_Whitlock/Ricky_Air.jpg
    }'
);

INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Seth Moniz',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Seth_life_thumb.jpg',
    'Born into a pedigree of surfers and watermen (dad was a former world tour surfer, sister is a two-time longboard champ, and both brothers compete), Seth has been destined for surfing greatness since he was born. He won NSSA Nationals last year, but Seth has always yearned for a deeper connection with the ocean than just his through his surfboard. He fishes, dives, can boost some of the best airs on a board, and at 16 years old has already become the embodiment of a Hawaiian waterman, with years ahead to learn and do so much more.',
    'Professional',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Regional_Team/Seth_Moniz/Seth_Barrel.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Regional_Team/Seth_Moniz/Seth_Barrel.jpg
    }'
);

INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Tommy Bursian',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/TommyThumb2.jpg',
    'Surf in Puerto Rico and you’ll likely come along Tommy Bursian’s name. With natural talent (he entered his first contest at age ten and won the Puerto Rico Menehunue title the next year), Bursian competed as a kid, becoming one of only two Puerto Rican surfers to win a WSL event. With back to back titles in 2013 and 2014 at the Puerto Rico Corona Triple Crown of Surfing in the Open division, he still competes mostly locally, but spends most of his time mentoring and coaching young surfers from his home state. ',
    'Professional',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Pro_Team/Tommy_Bursian/Tommy_Air.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Pro_Team/TommyB_shakeface.jpg
    }'
);

INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Andrew Gesler',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Gesler_thumb.jpg',
    'The man, the myth, the legend.',
    'Professional',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Pro_Team/Andrew_Gesler/Gesler_Shakeface.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Pro_Team/Andrew_Gesler/Gesler_Shakeface.jpg
    }'
);

INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Carlos "Chispa" Torres',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Chispa_Thumb.jpg',
    'When not hunting for barrels, winning contests or travelling all over the globe for his sponsors, 24-year-old “Chispa” Flores, is often fishing off the beautiful waters in the Caribbean. Passionate about the ocean, it is rare to find him on dry land, but if you do, it is an equally if not even better experience.',
    'Professional',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Regional_Team/Chispa_Torres/Chispa_FSAir.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Regional_Team/Chispa_Torres/Chispa_Lifestyle.jpg
    }'
);

INSERT INTO surfers (firstname, thumbnailUrl, description, level, images) 
VALUES (
    'Luke Hynd',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/LUKEHTHUMB',
    'At a 20 years-old years old, Luke Hynd has already travelled to some of the most exotic locations in the world, surfing remote breaks and getting inundated with culture lessons from faraway places. The goofyfoot, who has been said to be a blend of Mitch Coleborn and Craig Anderson, is a proficient skater and an excellent aerialist. Hungry to keep pushing himself and the sport, surfers and fans look forward to see what is next for this stylishly gifted surfer.',
    'Professional',
    '{
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Regional_Team/Luke_Hynd/LUKEHYND2.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Regional_Team/Luke_Hynd/LUKEHYND1.jpg
    }'
);
