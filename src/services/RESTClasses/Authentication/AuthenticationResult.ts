// import {Injectable} from '@angular/core';
import {UUID} from 'angular2-uuid'

// @Injectable()
export class AuthenticationResult {
  private _CustomerServerIPAddr:string;
  private _PasswordRaw:string;
  private _SessionID:UUID;
  private _ErrorMessage:string;
  private _ForceChangePassword:boolean;
  private _CustomerDatabase:string;

  // constructor() {
  // }

  constructor(CustomerServerIPAddr:string, PasswordRaw:string, SessionID:UUID, ErrorMessage:string, ForceChangePassword:boolean, CustomerDatabase:string) {
    this._CustomerServerIPAddr = CustomerServerIPAddr;
    this._PasswordRaw = PasswordRaw;
    this._SessionID = SessionID;
    this._ErrorMessage = ErrorMessage;
    this._ForceChangePassword = ForceChangePassword;
    this._CustomerDatabase = CustomerDatabase;
  }


  get CustomerServerIPAddr():string{
      return this._CustomerServerIPAddr;
      }

  set CustomerServerIPAddr(value:string){
      this._CustomerServerIPAddr=value;
      }

  get PasswordRaw():string{
      return this._PasswordRaw;
      }

  set PasswordRaw(value:string){
      this._PasswordRaw=value;
      }

  get SessionID():UUID{
      return this._SessionID;
      }

  set SessionID(value:UUID){
      this._SessionID=value;
      }

  get ErrorMessage():string{
      return this._ErrorMessage;
      }

  set ErrorMessage(value:string){
      this._ErrorMessage=value;
      }

  get ForceChangePassword():boolean{
      return this._ForceChangePassword;
      }

  set ForceChangePassword(value:boolean){
      this._ForceChangePassword=value;
      }

  get CustomerDatabase():string{
      return this._CustomerDatabase;
      }

  set CustomerDatabase(value:string){
      this._CustomerDatabase=value;
      }
}
