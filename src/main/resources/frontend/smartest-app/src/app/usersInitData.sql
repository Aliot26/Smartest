TRUNCATE table users cascade;
ALTER SEQUENCE users_user_id_seq RESTART WITH 1;
INSERT into users(username)
VALUES
(101), (102), (103), (104), (105), (106), (107), (108), (109), (110), (111), (112), (113), (114), (115), (116), (117), (118), (119);
