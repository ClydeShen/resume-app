import {UUID} from 'angular2-uuid'

export class Session {

  public static Port:number = 449;
  public static LastZambionServerUsed:string = "secure114.zambion.com"
  public static SessionID:string = "";
  public static CustomerServerIPAddr:string = "secure114.zambion.com";
  public static CustomerName:string = "Zambion";
  public static CustomerDatabase:string = "";
  public static CustomerSwitches:string = "";
  public static CustomerBaseRosterWeek1:Date = new Date();
  public static CustomerRosterMatchingThreshold:number = 120;
  public static SignInUserUniqueID:UUID;
  public static IsChangingCustomer:boolean = false;
  public static AccessSwitches:string = "";
  public static HasStaffKiosk:boolean = false;
  public static HasManagementKiosk:boolean = false;

  public static Password:string = "";
  public static Username:string = "";
  public static DomainName:string = "";

  public static _strFullNameOrig:string = "";
  public static _strUserNameOrig:string = "";

  public static LastSignedIn:string = "Jan 01, 2016 00:00";

  public static DateFormat:string = "dd/MM/yyyy";
  public static DateTimeFormat:string = "dd/MM/yyyy HH:mm:ss";
  public static KioskEmployeeUniqueIDs:string = "";

  public static ViewingStartClone0:Date = new Date();
  public static ViewingEndClone0:Date = new Date();
  public static PayFrequencyClone0:string = "Weekly";
  public static ViewingPeriodClone0:number = 7;
  public static CustomerStartDOWClone0:number = 1;

  public static EmployeeUniqueIDClone0:UUID = new UUID();
  public static EmployeeNameClone0:string = "";
  public static EmployeeReferenceNoClone0:string = "";
  public static EmployeeEmailAddressClone0:string = "";
  public static EmployeesShowInactivesClone0 = false;

  public static ManagerNameClone0:string = "";
  public static ManagerUniqueIDClone0:UUID = new UUID();
  public static ManagerSwitchesClone0:string = "";
  public static ManagerTimeZoneClone0:string = "";

  // public static ManagerItemsSource = [spManagerCombo]()
  // public static ColumnHeaders = [TimesheetColumn]()
}

export class NavigationDetails {
  public static UserRole:string = "AEU";
  public static CustomerStartDOWDefault:number = 1;
  public static FullName:string = "Dwayne Johnson";

}
