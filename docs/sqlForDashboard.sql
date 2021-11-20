-- Insert some dummy data for testing

--healer data
INSERT INTO 'healer' ('healerId','hname','hemail','address','city','province') 
VALUES ('0','Alex Chen','alexchen@gmail.com','Unit 123 University Way','Kelowna','BC');
INSERT INTO 'healer' ('healerId','hname','hemail','address','city','province') 
VALUES ('1','Betty Tom','bettyT@hotmail.com','Unit 741 Queens Way','Vancouver','BC');
INSERT INTO 'healer' ('healerId','hname','hemail','address','city','province') 
VALUES ('2','Chloe Fire','chloeFIRE@gmail.com','5123 Elizabeth Street','Kelowna','BC');

--client data
INSERT INTO 'client' ('clientId','cname','cemail','password','enabled') 
VALUES ('0','David Parker','dp12345@gmail.com','123456','TRUE');
INSERT INTO 'client' ('clientId','cname','cemail','password','enabled') 
VALUES ('1','Eric Hunter','111eric2222@gmail.com','ericthebest','TRUE');
INSERT INTO 'client' ('clientId','cname','cemail','password','enabled') 
VALUES ('2','Felix Tar','ftar@gmail.com','7777777','FALSE');

--appointment data
INSERT INTO 'appointment' ('clientId','hearlerId','tdate','location','service')
VALUES ('2','1','2021-09-08','Kelowna','family constellations');
INSERT INTO 'appointment' ('clientId','hearlerId','tdate','location','service')
VALUES ('0','0','2021-10-12','Kelowna','somatic therapy');
INSERT INTO 'appointment' ('clientId','hearlerId','tdate','location','service')
VALUES ('1','1','2021-11-05','Vancouver','akashic records reading');


--Transaction data
INSERT INTO 'transaction' ('clientId','healerId','tdate','amount')
VALUES ('2','1','2021-09-08','140');
INSERT INTO 'transaction' ('clientId','healerId','tdate','amount')
VALUES ('0','0','2021-10-12','180');
INSERT INTO 'transaction' ('clientId','healerId','tdate','amount')
VALUES ('1','1','2021-11-05','200');

--Service data
INSERT INTO 'service' ('serviceId','sname','fee','description')
VALUES ('0','family constellations','100','Talk to patients about family issues.');
INSERT INTO 'service' ('serviceId','sname','fee','description')
VALUES ('1','somatic therapy','150','Somatic therapy can help people who suffer from stress, anxiety, depression, grief, addiction, problems with relationships, and sexual function.');
INSERT INTO 'service' ('serviceId','sname','fee','description')
VALUES ('2','akashic records reading','130','A person’s Akashic Records is opened and the person may ask questions, raise issues, release obstacles, and experience the transformation of healing balance within the energy of the Akashic Records.');

--Review data
INSERT INTO 'review' ('reviewId','clientId','healerId','serviceId','rdate','description','rating')
VALUES ('0','2','1','0','2021-09-08','Good','5');
INSERT INTO 'review' ('reviewId','clientId','healerId','serviceId','rdate','description','rating')
VALUES ('1','0','0','1','2021-10-08','Perfect','5');
INSERT INTO 'review' ('reviewId','clientId','healerId','serviceId','rdate','description','rating')
VALUES ('2','1','1','2','2021-11-08','Helpful','5');


--Select queries for dashboard
--Client Part
--select by clientId
SELECT clientId, cname, cemail, enabled
FROM client
WHERE clientId="$1"
--select by client name
SELECT clientId, cname, cemail, enabled
FROM client
WHERE cname="$Alex"
--select by client's email
SELECT clientId, cname, cemail, enabled
FROM client
WHERE cemail="$@hotmail.com"

--Healer Part
--select by healerId
SELECT healerId,hname,hemail,city,province
FROM healer
WHERE healerId="$1"
--select by email
SELECT healerId,hname,hemail,city,province
FROM healer
WHERE hemail="$@gmail.com"
--select by city
SELECT healerId,hname,hemail,city,province
FROM healer
WHERE city="Kelowna"



