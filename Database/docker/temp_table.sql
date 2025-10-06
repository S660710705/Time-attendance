CREATE TABLE `product` (
  `id` INT NOT NULL,
  `firstname` VARCHAR(256) NOT NULL,
  `lastname` VARCHAR(256) NOT NULL,
  `gmail` VARCHAR(256) NOT NULL,
  `password` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `product` (`id`, `firstname`, `lastname`, `gmail`, `password`) 
VALUES (11111, 'pp', 'nammilk', 'wa@gmail.com', '25328');

INSERT INTO `product` (`id`, `firstname`, `lastname`, `gmail`, `password`) 
VALUES (22222, 'sda', 'namsadmilk', 'nam@gmail.com', '11011');