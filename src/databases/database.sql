CREATE TABLE language(
    id INT(4) NOT NULL,
    name_lenguage VARCHAR(255) NOT NULL,
    programers INT(10) NOT NULL,

    CONSTRAINT pk_id_lenguage PRIMARY KEY (id)
);

DESCRIBE language;

ALTER TABLE language MODIFY id INT(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;