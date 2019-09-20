TRUNCATE table apartments cascade;
ALTER SEQUENCE apartments_ap_id_seq RESTART WITH 1;
INSERT into apartments(number)
VALUES (101),
       (102),
       (103),
       (104),
       (105),
       (106),
       (107),
       (108),
       (109),
       (110),
       (111),
       (112),
       (113),
       (114),
       (115),
       (116),
       (117),
       (118),
       (119);

TRUNCATE table users cascade;
ALTER SEQUENCE users_user_id_seq RESTART WITH 1;
insert into users (username, first_name, last_name)
values ('nmcure0', 'Nathaniel', 'McUre'),
       ('rchieze1', 'Randene', 'Chieze'),
       ('gmcarthur2', 'Granny', 'McArthur'),
       ('sbentham3', 'Sarene', 'Bentham3'),
       ('tkirkbride4', 'Tailor', 'Kirkbride'),
       ('npuckey5', 'Norri', 'Puckey'),
       ('dsomner6', 'Demetrius', 'Somner'),
       ('lboldry7', 'Loralyn', 'Boldry'),
       ('lbage8', 'Lavinie', 'Bage'),
       ('cdionisio9', 'Celestyn', 'Dionisio'),
       ('rthiesea', 'Ranice', 'Thiese'),
       ('rmilellab', 'Romonda', 'Milella'),
       ('hhigginbottamc', 'Hymie', 'Higginbottam'),
       ('ofranked', 'Orion', 'Franke'),
       ('dengele', 'Dorine', 'Engel'),
       ('csimesf', 'Coralyn', 'Simes'),
       ('wcaldicotg', 'Wood', 'Caldicot'),
       ('emichielih', 'Ezri', 'Michieli'),
       ('cweddeburni', 'Connie', 'Weddeburn'),
       ('cguinnanej', 'Cash', 'Guinnane');
