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
  dappData = [];
  newData = {
    key: 'Enter a fieldname',
    value: 'Enter the data\'s value',
    password: false
  };
  isDataEncrypted: boolean;
  constructor(public keyMan: KeyManagerService) { }

  ngOnInit() {
    this.isDataEncrypted = false;
    this.isViewingMyData = true;


    this.dappData = [];
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
        const dataToSave = this.newData;
        this.keyMan.myData.push(dataToSave);
        console.log(this.keyMan.myData);
        this.newData = {
          key: 'Enter a fieldname',
          value: 'Enter the data\'s value',
          password: false
        };
        this.tempPass = null;
      } else {
        const dataToSave = this.newData;
        this.keyMan.myData.push(dataToSave);
      }
    } else {
      // Store Dapp data
      return;
    }
  }

  decrypt(e, index) {
    try {
      const bytes = CryptoJS.AES.decrypt(this.keyMan.myData[index].value, e.target.value);
      if (bytes.toString()) {
        console.log(JSON.parse(bytes.toString(CryptoJS.enc.Utf8)));
        this.keyMan.myData[index].decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      // return data;
    } catch (e) {
      console.log(e);
    }
  }

  reEncrypt(index) {
    this.keyMan.myData[index].decrypted = null;
  }

}
