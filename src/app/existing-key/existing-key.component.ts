import { Component, OnInit } from '@angular/core';
import {KeyManagerService} from '../key-manager.service';
import * as shajs from 'sha.js';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-existing-key',
  templateUrl: './existing-key.component.html',
  styleUrls: ['./existing-key.component.scss']
})
export class ExistingKeyComponent implements OnInit {
  isViewingMyData: boolean;
  myImage: string;
  tempPass: string;
  myData = [];
  dappData = [];
  newData = {
    key: 'Enter a fieldname',
    value: "Enter the data's value",
    password: false
  };
  isDataEncrypted: boolean;
  constructor(public keyMan: KeyManagerService) { }

  ngOnInit() {
    this.isDataEncrypted = false;
    this.isViewingMyData = true;
    this.myData = [];

    this.dappData = [{
      key: 'First Name',
      value: 'John',
      password: false
    }, {
      key: 'Last Name',
      value: 'Doe',
      password: false
    }];
  }

  viewMyData() {
    this.isViewingMyData = true;
  }

  viewDappData() {
    this.isViewingMyData = false;
  }

  toggleCheckbox() {
    this.isDataEncrypted = !this.isDataEncrypted;
  }

  storeData() {
    // Store on personal data
    if (this.isViewingMyData) {
      if (this.isDataEncrypted) {
        console.log(this.newData);
        this.newData.password = true;
        this.newData.value = CryptoJS.AES.encrypt(JSON.stringify(this.newData.value), this.tempPass).toString();
        let dataToSave = this.newData;
        this.myData.push(dataToSave);
        console.log(this.myData);
        this.newData = {
          key: 'Enter a fieldname',
          value: "Enter the data's value",
          password: false
        };
        this.tempPass = null;
      } else {
        let dataToSave = this.newData;
        this.myData.push(dataToSave);
      }
    } else {
      // Store Dapp data
      return;
    }
  }

  decrypt(e, index) {
    try {
      const bytes = CryptoJS.AES.decrypt(this.myData[index].value, e.target.value);
      if (bytes.toString()) {
        console.log(JSON.parse(bytes.toString(CryptoJS.enc.Utf8)));
        this.myData[index].decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      // return data;
    } catch (e) {
      console.log(e);
    }
  }

  reEncrypt(index) {
    this.myData[index].decrypted = null;
  }

}
