 
create database adventour;
use adventour; 


CREATE TABLE member (
  m_id varchar(20) NOT NULL,
  m_pw varchar(20) NOT NULL,
  m_lastname varchar(20) NOT NULL,
  m_firstname varchar(20) NOT NULL,
  m_nickname varchar(10) ,
  m_postcode varchar(50) NOT NULL,
  m_addr1 varchar(50) NOT NULL,
  m_addr2 varchar(50) NOT NULL,
  m_pnum1  varchar(11) NOT NULL,
  m_pnum2 varchar(11),
  m_email varchar(100) NOT NULL,
  m_birth_y varchar(4),
  m_birth_m varchar(2),
  m_birth_d varchar(2),
  m_gender varchar(1),
  m_agree varchar(1),
 PRIMARY KEY(m_id)
);