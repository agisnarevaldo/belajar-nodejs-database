CREATE TABLE sample (
    id VARCHAR(100) not NULL,
    name VARCHAR(100) not NULL,
    primary key(id)
) engine = InnoDB;
CREATE TABLE customers (
    id VARCHAR(100) not NULL,
    name VARCHAR(100) not NULL,
    email VARCHAR(100) not NULL,
    phone VARCHAR(100) not NULL,
    primary key(id),
    constraint email_unique UNIQUE (email),
    constraint phone_unique UNIQUE (phone)
) engine = InnoDB;