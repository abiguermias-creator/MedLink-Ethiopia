-- MedLink Ethiopia Database DDL
-- Database: MedLinkDB

-- Create Database
CREATE DATABASE MedLinkDB;
GO

USE MedLinkDB;
GO

-- Users Table
-- Stores authentication information

CREATE TABLE Users
(
    id INT IDENTITY(1,1) PRIMARY KEY,

    full_name VARCHAR(100) NOT NULL,

    email VARCHAR(100) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    role VARCHAR(20) NOT NULL,

    created_at DATETIME DEFAULT GETDATE()
);

GO



  --Patients Table

CREATE TABLE Patients
(
    patient_id INT IDENTITY(1,1) PRIMARY KEY,

    user_id INT NOT NULL,

    date_of_birth DATE,

    gender VARCHAR(20),

    phone VARCHAR(20),

    address VARCHAR(100),

    created_at DATETIME DEFAULT GETDATE(),


    CONSTRAINT FK_Patient_User
    FOREIGN KEY(user_id)
    REFERENCES Users(id)
);

GO



 --Doctors Table

CREATE TABLE Doctors
(
    doctor_id INT IDENTITY(1,1) PRIMARY KEY,

    user_id INT NOT NULL,

    specialization VARCHAR(100),

    phone VARCHAR(20),

    experience_years INT,

    created_at DATETIME DEFAULT GETDATE(),


    CONSTRAINT FK_Doctor_User
    FOREIGN KEY(user_id)
    REFERENCES Users(id)
);

GO



--Appointments Table


CREATE TABLE Appointments
(
    appointment_id INT IDENTITY(1,1) PRIMARY KEY,

    patient_id INT NOT NULL,

    doctor_id INT NOT NULL,

    appointment_date DATETIME NOT NULL,

    status VARCHAR(20) DEFAULT 'Pending',

    notes VARCHAR(255),

    created_at DATETIME DEFAULT GETDATE(),


    CONSTRAINT FK_Appointment_Patient
    FOREIGN KEY(patient_id)
    REFERENCES Patients(patient_id),


    CONSTRAINT FK_Appointment_Doctor
    FOREIGN KEY(doctor_id)
    REFERENCES Doctors(doctor_id)
);

GO