create database workforcepro;
use workforcepro;

CREATE TABLE `workforcepro`.`designation` (
  `id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);

CREATE TABLE `workforcepro`.`role` (
  `id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);

CREATE TABLE `workforcepro`.`user` (
  `id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `designationId` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `addressLine1` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  `zipCode` VARCHAR(45) NULL,
  `roleId` VARCHAR(45) NOT NULL,
  `managerId` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `id_idx` (`designationId` ASC) VISIBLE,
  INDEX `roleId_idx` (`roleId` ASC) VISIBLE,
  CONSTRAINT `designationId`
    FOREIGN KEY (`designationId`)
    REFERENCES `workforcepro`.`designation` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `roleId`
    FOREIGN KEY (`roleId`)
    REFERENCES `workforcepro`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
