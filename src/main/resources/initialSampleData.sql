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

TRUNCATE table user_role cascade;
ALTER SEQUENCE user_role_role_id_seq RESTART WITH 1;
INSERT into user_role(role)
VALUES ('USER'),
       ('ADMIN');

TRUNCATE table users cascade;
ALTER SEQUENCE users_user_id_seq RESTART WITH 1;
insert into users (username, first_name, last_name, role_id)
values ('nmcure0', 'Nathaniel', 'McUre', 1),
       ('rchieze1', 'Randene', 'Chieze', 1),
       ('gmcarthur2', 'Granny', 'McArthur', 1),
       ('sbentham3', 'Sarene', 'Bentham3', 1),
       ('tkirkbride4', 'Tailor', 'Kirkbride', 1),
       ('npuckey5', 'Norri', 'Puckey', 1),
       ('dsomner6', 'Demetrius', 'Somner', 1),
       ('lboldry7', 'Loralyn', 'Boldry', 1),
       ('lbage8', 'Lavinie', 'Bage', 1),
       ('cdionisio9', 'Celestyn', 'Dionisio', 1),
       ('rthiesea', 'Ranice', 'Thiese', 1),
       ('rmilellab', 'Romonda', 'Milella', 1),
       ('hhigginbottamc', 'Hymie', 'Higginbottam', 1),
       ('ofranked', 'Orion', 'Franke', 1),
       ('dengele', 'Dorine', 'Engel', 1),
       ('csimesf', 'Coralyn', 'Simes', 1),
       ('wcaldicotg', 'Wood', 'Caldicot', 1),
       ('emichielih', 'Ezri', 'Michieli', 1),
       ('cweddeburni', 'Connie', 'Weddeburn', 1),
       ('cguinnanej', 'Cash', 'Guinnane', 1),
       ('admin', 'admin', 'admin', 2);
