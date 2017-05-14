import { Component,ChangeDetectorRef } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  beaconData: any;

  constructor(private change:ChangeDetectorRef,private platform:Platform) {

  }
  startScanningForBeacons(){
    this.platform.ready().then(()=>{
      evothings.eddystone.startScan((data) =>{
        this.beaconData = data;
        console.log(this.beaconData);
        setTimeout(() => {
          this.change.detectChanges();
        },1000);
      }, error => console.error(error));
    })
  }


}

