const express=require("express");
const app=express();
const mysql=require("mysql");
const bodyParser=require("body-parser");
const cors=require("cors");

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0000',
    database:'woowoo'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//Client Page
var cid=999;
var cname="";
var cemail="";
var caddress="";

app.post('/Client/searchClient',(req,res)=>{
  cid=req.body.clientId;
  cname=req.body.cname;
  cemail=req.body.cemail;
  caddress=req.body.caddress;
  const cidSelect='SELECT * FROM client';
  db.query(cidSelect,[cid],(error, results) => {
        if (error) {
          return console.error(error.message);
        }
        return res.send(results);
      });
});

app.get('/Client/getClient',(req,res)=>{
  if(cid==""){
    console.log(cid);
    const cidSelect='SELECT * FROM client';
    db.query(cidSelect,[cid],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }else if(cid!=undefined && cid!=""){
    console.log(cid);
    const cidSelect='SELECT * FROM client WHERE clientId=?';
    db.query(cidSelect,[cid],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(cname!=undefined){
    console.log(cname);
    const cnameSelect=`SELECT * FROM client WHERE cname=?`;
    db.query(cnameSelect,[cname],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(cemail!=undefined){
    console.log("email");
    const cemailSelect='SELECT * FROM client WHERE cemail=?';
    db.query(cemailSelect,[cemail],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(caddress!=undefined){
    console.log("address");
    const caddressSelect='SELECT * FROM client WHERE caddress=?';
    db.query(caddressSelect,[caddress],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
});

//Healer Page
var hid=999;
var hname="";
var hemail="";
var haddress="";
app.post('/Healer/searchHealer',(req,res)=>{
  hid=req.body.healerId;
  hname=req.body.hname;
  hemail=req.body.hemail;
  haddress=req.body.haddress;
  const hidSelect='SELECT * FROM healer';
  db.query(hidSelect,[hid],(error, results) => {
        if (error) {
          return console.error(error.message);
        }
        return res.send(results);
      });
});

app.get('/Healer/getHealer',(req,res)=>{
  if(hid==""){
    const hidSelect='SELECT * FROM healer';
    db.query(hidSelect,[hid],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }else if(hid!=undefined && hid!=""){
    const hidSelect='SELECT * FROM healer WHERE healerId=?';
    db.query(hidSelect,[hid],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(hname!=undefined){
    console.log(hname);
    const hnameSelect=`SELECT * FROM healer WHERE hname=?`;
    db.query(hnameSelect,[hname],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(hemail!=undefined){
    console.log("email");
    const hemailSelect='SELECT * FROM healer WHERE hemail=?';
    db.query(hemailSelect,[hemail],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(haddress!=undefined){
    console.log("address");
    const haddressSelect='SELECT * FROM healer WHERE address=?';
    db.query(haddressSelect,[haddress],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
});

//Appointment Page
var acid=999;
var hid=999;
var adate="";
var alocation="";
var service="";
app.post('/Appointment/searchAppointment',(req,res)=>{
  acid=req.body.clientId;
  hid=req.body.healerId;
  adate=req.body.adate;
  alocation=req.body.alocation;
  service=req.body.service;
  const appSelect='SELECT * FROM appointment';
  db.query(appSelect,(error, results) => {
        if (error) {
          return console.error(error.message);
        }
        return res.send(results);
      });
});

app.get('/Appointment/getAppointment',(req,res)=>{
  if(acid==""){
    const acidSelect='SELECT * FROM appointment';
    db.query(acidSelect,[acid],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }else if(acid!=undefined && acid!=""){
    const acidSelect='SELECT * FROM appointment WHERE clientId=?';
    db.query(acidSelect,[acid],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(hid!=undefined){
    const hidSelect=`SELECT * FROM appointment WHERE healerid=?`;
    db.query(hidSelect,[hid],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(adate!=undefined){
    const adateSelect='SELECT * FROM appointment WHERE adate=?';
    db.query(adateSelect,[adate],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(alocation!=undefined){
    const alocationSelect='SELECT * FROM appointment WHERE location=?';
    db.query(alocationSelect,[alocation],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(service!=undefined){
    const serviceSelect='SELECT * FROM appointment WHERE service=?';
    db.query(serviceSelect,[service],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
});

//Transaction Page
var tcid=999;
var thid=999;
var tdate="";
var tamount="";
app.post('/Transaction/searchTransaction',(req,res)=>{
  tcid=req.body.clientId;
  thid=req.body.healerId;
  tdate=req.body.tdate;
  tamount=req.body.amount;
  const tranSelect='SELECT * FROM appointment';
  db.query(tranSelect,(error, results) => {
        if (error) {
          return console.error(error.message);
        }
        return res.send(results);
      });
});

app.get('/Transaction/getTransaction',(req,res)=>{
  if(tcid==""){
    const tcidSelect='SELECT * FROM transaction';
    db.query(tcidSelect,[tcid],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }else if(tcid!=undefined && tcid!=""){
    const tcidSelect='SELECT * FROM transaction WHERE clientId=?';
    db.query(tcidSelect,[tcid],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(thid!=undefined){
    const thidSelect=`SELECT * FROM transaction WHERE healerid=?`;
    db.query(thidSelect,[thid],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(tdate!=undefined){
    const tdateSelect='SELECT * FROM transaction WHERE tdate=?';
    db.query(tdateSelect,[tdate],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(tamount!=undefined){
    const tamountSelect='SELECT * FROM transaction WHERE amount>?';
    db.query(tamountSelect,[alocation],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
});

//Service Page
var serviceId=999;
var sname=999;
var fee="";
var description="";
app.post('/Service/searchService',(req,res)=>{
  serviceId=req.body.serviceId;
  sname=req.body.sname;
  fee=req.body.fee;
  description=req.body.description;
  const tranSelect='SELECT * FROM service';
  db.query(tranSelect,(error, results) => {
        if (error) {
          return console.error(error.message);
        }
        return res.send(results);
      });
});

app.get('/Service/getService',(req,res)=>{
  if(serviceId==""){
    const sidSelect='SELECT * FROM service';
    db.query(sidSelect,[serviceId],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }else if(serviceId!=undefined&&serviceId!=""){
    const sidSelect='SELECT * FROM service WHERE serviceId=?';
    db.query(sidSelect,[serviceId],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(sname!=undefined){
    const snameSelect=`SELECT * FROM service WHERE sname=?`;
    db.query(snameSelect,[sname],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(fee!=undefined){
    const sfeeSelect='SELECT * FROM service WHERE fee>?';
    db.query(sfeeSelect,[fee],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(description!=undefined){
    const sdesSelect='SELECT * FROM service WHERE description=?';
    db.query(sdesSelect,[description],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
});

//Review Page
var reviewId=999;
var rcid=999;
var rhid=999;
var rating=999;
app.post('/Review/searchReview',(req,res)=>{
  reviewId=req.body.reviewId;
  rcid=req.body.clientId;
  rhid=req.body.healerId;
  rating=req.body.rating;
  const reviewSelect='SELECT * FROM review';
  db.query(reviewSelect,(error, results) => {
        if (error) {
          return console.error(error.message);
        }
        return res.send(results);
      });
});

app.get('/Review/getReview',(req,res)=>{
  if(reviewId==""){
    const ridSelect='SELECT * FROM review';
    db.query(ridSelect,[reviewId],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }else if(reviewId!=undefined && reviewId!=""){
    const ridSelect='SELECT * FROM review WHERE reviewId=?';
    db.query(ridSelect,[reviewId],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(rcid!=undefined){
    const rcidSelect=`SELECT * FROM review WHERE clientId=?`;
    db.query(rcidSelect,[rcid],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(rhid!=undefined){
    const rhidSelect='SELECT * FROM review WHERE healerid=?';
    db.query(rhidSelect,[rhid],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
  if(rating!=undefined){
    const ratingSelect='SELECT * FROM review WHERE rating>?';
    db.query(ratingSelect,[rating],(error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.send(results);
    });
  }
});


app.listen(3001,()=>{
    console.log("Run on 3001");
});