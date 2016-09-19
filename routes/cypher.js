/**
 * Created by sergio on 15/09/16.
 */
var express = require('express');
var router = express.Router();
var CryptoJS = require("crypto-js");

var clientsecret = 'clientsecret';
var serversecret = 'serversecret';

/* GET users listing. */
router.post('/', function(req, res) {
  var encrypted = req.body.data;
  console.log(encrypted);
  var decrypted = CryptoJS.AES.decrypt(encrypted, clientsecret);
  console.log(decrypted.toString(CryptoJS.enc.Utf8));

  var encrypted = CryptoJS.AES.encrypt(decrypted.toString(CryptoJS.enc.Utf8), serversecret);
  res.send({data:encrypted.toString()});
});

module.exports = router;
