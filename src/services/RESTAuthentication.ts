import {
  HTTP_PROVIDERS,
  Http,
  Headers,
  JSON_BINDINGS,
  Jsonp,
  BaseRequestOptions,
  RequestOptions,
  Response
} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';
import 'rxjs'
import {AuthenticationResult} from './RESTClasses/Authentication/AuthenticationResult'
import {Common, DATE} from './../Classes/Common'
import {Session} from "../Classes/Session";
import {error} from "util";

@Injectable()
export class RESTAuthentication {
  private _strCustomerServerIPAddr:string = "";
  private authenticationResult:AuthenticationResult;
  people:Array<Object>;
  // private http: Http;
  // private authHttp:AuthHttp = new AuthHttp(new AuthConfig({
  //   globalHeaders: [{
  //     'Content-Type': 'application/json',
  //     noJwtError: true,
  //     noTokenScheme: true
  //   }]
  // }), Http);

  constructor(public authHttp:AuthHttp, public http:Http, public jsonp:Jsonp) {

  }

  public Authenticate(userName:string, password:string, showErrorsAsMessageBoxes:boolean, customerDatabase:string, serverIPAddr:string) {
    let strDeviceID:number;
    let strDeviceName:string;

    strDeviceID = Common.DeviceDetector().deviceID;
    strDeviceName = Common.DeviceDetector().deviceName;


    let formatter:string = "yyyy-MM-dd HH:mm:ss";
    let stringDate = DATE.format(new Date(), formatter);

    let baseURI = Common.BuildServiceUri();

    let URL = "strUserName=" + userName
      + "&strPassword=" + password
      + "&dtLocal=" + stringDate
      + "&bIsImpersonating=false"
      + "&strTargetServerUri=" + serverIPAddr
      + "&strDefaultCustomerDatabase=" + customerDatabase
      + "&strVersion=Angular2 1.0.0.0"
      + "&strOriginatingPlatform=Angular2"
      + "&strDeviceID=" + strDeviceID


    let fullURI = encodeURI(baseURI + "/api/Authentication/AuthenticationQuery?" + URL)

    console.log(fullURI);
    // https://secure117.zambion.com:8081/api/Authentication/AuthenticationQuery?strUserName=testuser@abc&strPassword=1234&dtLocal=2016-05-26 09:43:48&bIsImpersonating=false&strTargetServerUri=secure117.zambion.com&strDefaultCustomerDatabase=&strVersion=Android 1.0.0.0&strOriginatingPlatform=Android&strDeviceID=c79a93340c142478
    // https://secure114.zambion.com:8081/api/Authentication/AuthenticationQuery?strUserName=testuser@abc&strPassword=1234&dtLocal=2016-05-26%2010:06:40&bIsImpersonating=false&strTargetServerUri=secure117.zambion.com&strDefaultCustomerDatabase=&strVersion=1.0.0.0&strOriginatingPlatform=Angular2&strDeviceID=2332288648

    // console.log(URL);
    let ddddd:any;
    let testData:any;
    // let req:RequestOptions = new RequestOptions();
    // req.method = 'GET';

    // req.body = "strUserName=" + userName
    //   + "&strPassword=" + password
    //   + "&dtLocal=" + stringDate
    //   + "&bIsImpersonating=false"
    //   + "&strTargetServerUri=" + serverIPAddr
    //   + "&strDefaultCustomerDatabase=" + customerDatabase
    //   + "&strVersion=Angular2 1.0.0.0"
    //   + "&strOriginatingPlatform=Angular2"
    //   + "&strDeviceID=" + strDeviceID


    // testData = this.jsonp.request(baseURI, req)
    //   .map(res => res.json())
    //   .subscribe(
    //     data => ddddd = data
    //   )
    let header = new Headers()
    header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Credentials', 'true');
    header.append('Access-Control-Allow-Origin', 'http://localhost:3000');

    testData = this.authHttp.get(fullURI,{headers: header})
      // .map(res => res)
      // .do(data => console.log(data))
      // // .subscribe(function (res) {
      // //   console.log(res);
      // // })
      // .catch(this.handleError)
      .subscribe(function (res) {
        console.log(res);
      });

    // .subscribe(res => {
    //   data => Promise.resolve(res);
    //   // console.log(res.json());
    //   // this.people = res.json();
    //   // this.AuthenticationResult = res.json();
    // })


    // testData = this.authHttp.get(encodeURI(baseURI+ "/api/Authentication/AuthenticationQuery?" + URL)).map(res => res.json()).subscribe(
    //   AuthenticationResult=> console.log(this.AuthenticationResult = AuthenticationResult),
    //   error => console.log(error),
    //   ()=> console.log('Request Complete')
    // )
    // this.authHttp.get(baseURI + URL).map(res => res.json()).subscribe(
    //   data => this.AuthenticationResult = data,
    //   () => console.log('Request Complete')
    // );
    // console.log(testData);
    // console.log(this.AuthenticationResult);
    return {strDeviceID: strDeviceID, strDeviceName: strDeviceName}

  }

  private handleError(error:Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.log(error);
    return Observable.throw(error || 'Server side error');
  }

  private JSONP_CALLBACK(data) {
    console.log(data);
  }

  // mycallback = function (data) {
  //   console.log(data);
  // };
}
