-- How to create a table with JSON data inputs
    -- drop table surfers;
    -- create table surfers (id serial primary key, item json);

    -- insert into surfers (item) values ('{"id": 1, "name": "Gus"}');

    -- select item->'name' from surfers;
DROP TABLE IF EXISTS surfers;

CREATE TABLE surfers (
    id SERIAL PRIMARY KEY, 
    firstname TEXT, 
    thumbnailUrl TEXT, 
    description TEXT,
    images TEXT[]
);

INSERT INTO surfers (firstname, thumbnailUrl, description, images) 
VALUES (
    'Rob Machado',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/RobLife.jpg',
    'One word is often used to describe freesurfer Rob Machado: Style. While the Aussie-born, California-bred surfer has won many of surfing’s most prestigious contests, he’s always preferred surfing on his own terms. With long hair and a laid-back style both in and out of the water, Machado’s effortless approach to waves has been emulated by kids and adults all over the world. Currently he"s building uniquely shaped boards and surfing in exotic destinations for movies and fun, he also gives to the next generation of surfers and supports sustainability efforts through his Rob Machado Foundation.',
    '{ 
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Rob_Machado/machado4.jpg, 
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Rob_Machado/Rob_Lifestyle_Warehouse.jpg  }'
);

INSERT INTO surfers (firstname, thumbnailUrl, description, images) 
VALUES (
    'Reef McIntosh',
    'http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/ReefMac_Thumb.jpg',
    'With a coveted job managing the Quiksilver house in front of the famous Pipeline all winter long, Reef, who’s spent years riding the famous wave, is one of the regulars you can expect to always see at Pipeline charging. An accomplished surfer who didn’t get his first sponsor until the age of 26 when many surfers are already three-fourths through with their careers, Reef has only improved with age. He’s been one of the 28 invitees to the Eddie since 2009, won the Best Barrel category at the Surfer Poll awards in 2012, and is known to always have a giant smile on his face.',
    '{ 
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Reef_McIntosh/mcintosh2.jpg,
        http://s3.amazonaws.com/dragon.com/kitgui/ddb3cff780fb457b92e4de035aad43e7/files/Surf_Team/Surf_Global_Team/Reef_McIntosh/ReefMac_Life.jpg    
    }'
);

