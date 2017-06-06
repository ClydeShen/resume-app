import {Device} from '../platform/browser/device/device'
import {Session, NavigationDetails} from './Session'


export class Common {

  static _strOriginalHostAddress:string = "";

  public static DeviceDetector() {
    let device:Device = new Device();
    return {deviceName: device.DeviceName(), deviceID: device.DeviceID()}
  }

  public static  BuildServiceUri():string {
    let strHostAddress:string;
    let strHostPort:string = ":" + Session.Port;

    // if (System.Diagnostics.Debugger.IsAttached)
    // {
    //   //return "https://secure194.zambion.com:449";
    //   return "http://localhost:49697";
    // }


    if (Session.CustomerServerIPAddr.length > 0) {
      if (Session.CustomerServerIPAddr == "localhost")
        strHostAddress = this._strOriginalHostAddress;
      else if (NavigationDetails.UserRole == "RSU" && Session.Port != 443) {
        strHostAddress = "https://" + Session.CustomerServerIPAddr.trim();
        strHostAddress += ":443";
      }
      else {
        if (Session.Port != 443 && Session.CustomerServerIPAddr.toLowerCase().indexOf("localhost") == -1)
          strHostPort = ":8081";

        strHostAddress = "https://" + Session.CustomerServerIPAddr.trim() + strHostPort;
      }
    }
    else {

      let strHostSchema:string = "https";

      strHostAddress = Session.LastZambionServerUsed;
      if (strHostAddress == null)
        strHostAddress = "";

      if (Session.Port != 443 && strHostAddress.length > 0 && strHostAddress.toLowerCase().indexOf("localhost") == -1) {
        strHostPort = ":8081";
        strHostSchema = "https";
      }

      if (strHostAddress.length == 0 || strHostAddress.toLowerCase() == "localhost")
        strHostAddress = strHostSchema + "://secure117.zambion.com" + strHostPort;
      else
        strHostAddress = strHostSchema + "://" + strHostAddress + strHostPort;

      this._strOriginalHostAddress = strHostAddress;
    }

    return strHostAddress;
  }


}

export class DATE {
  private static _Date:any = require('Datejs/build/date-en-NZ.js');

  public static format(date:Date, patten:string) {
    return date.toString(patten);
  }

}

