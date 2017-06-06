export class Device {
  private browserData = navigator;
  private ua = navigator.userAgent;

  constructor() {
  }

  public DeviceID() {
    let bar = '|';

    let userAgent = this.ua;
    let screenPrint = this.getScreentPrint();
    let pluginList = this.getPlugins();
    let localStorage = this.isLocalStorage();
    let sessionStorage = this.isSessionStorage();
    let timeZone = this.getTimeZone();
    let language = this.getLanguage();
    let systemLanguage = this.getSystemLanguage();
    let cookies = this.isCookie();
    let canvasPrint = this.getCanvasPrint();

    let key = userAgent + bar + screenPrint + bar + pluginList + bar + localStorage + bar + sessionStorage + bar + timeZone + bar + language + bar + systemLanguage + bar + cookies + bar + canvasPrint;
    let seed = 256;

    return this.murmurhash3_32_gc(key, seed);

  }

  public DeviceName():string {
    let browser:string;
    if (this.ua.indexOf("Chrome") > -1) {
      browser = "Google Chrome";
    } else if (this.ua.indexOf("Safari") > -1) {
      browser = "Apple Safari";
    } else if (this.ua.indexOf("Opera") > -1) {
      browser = "Opera";
    } else if (this.ua.indexOf("Firefox") > -1) {
      browser = "Mozilla Firefox";
    } else if (this.ua.indexOf("MSIE") > -1 || this.ua.indexOf("msie") > -1 || this.ua.indexOf(".NET") > -1 ) {
      browser = "Microsoft Internet Explorer";
    }
    return browser;
  }

  public getScreentPrint() {
    return "Current Resolution: " + this.getCurrentResolution() + ", Available Resolution: " + this.getAvailableResolution() + ", Color Depth: " + this.getColorDepth() + ", Device XDPI: " + this.getDeviceXDPI() + ", Device YDPI: " + this.getDeviceYDPI();
  }

  public getCurrentResolution() {
    return screen.width + "x" + screen.height;
  }

  public getAvailableResolution() {
    return screen.availWidth + "x" + screen.availHeight;
  }

  public getColorDepth() {
    return screen.colorDepth;
  }

  public getDeviceXDPI() {
    return screen.deviceXDPI;
  }

  public getDeviceYDPI() {
    return screen.deviceYDPI;
  }

  // Get Plugins.  Return a string containing a list of installed plugins.
  public getPlugins() {
    var pluginsList = "";

    for (var i = 0; i < navigator.plugins.length; i++) {
      if (i == navigator.plugins.length - 1) {
        pluginsList += navigator.plugins[i].name;
      } else {
        pluginsList += navigator.plugins[i].name + ", ";
      }
    }
    return pluginsList;
  }

//
  // STORAGE METHODS
  //

  // Is Local Storage.  Check if local storage is enabled.
  public isLocalStorage() {
    try {
      return !!localStorage;
    } catch (e) {
      return true; // SecurityError when referencing it means it exists
    }
  }


  // Is Session Storage.  Check if session storage is enabled.
  public isSessionStorage() {
    try {
      return !!sessionStorage;
    } catch (e) {
      return true; // SecurityError when referencing it means it exists
    }
  }

  // Is Cookie.  Check if cookies are enabled.
  public isCookie() {
    return navigator.cookieEnabled;
  }

  // Get Time Zone.  Return a string containing the time zone.
  public getTimeZone() {
    var rightNow = new Date();
    return String(String(rightNow).split("(")[1]).split(")")[0];
  }

  //
  // LANGUAGE METHODS
  //

  // Get Language.  Return a string containing the user language.
  public getLanguage() {
    return navigator.language;
  }

  // Get System Language.  Return a string containing the system language.
  public getSystemLanguage() {
    return navigator.systemLanguage;
  }

  // Get Canvas Print.  Return a string containing the canvas URI data.
  public getCanvasPrint() {

    // create a canvas element
    var canvas = document.createElement('canvas');

    // define a context var that will be used for browsers with canvas support
    var ctx;

    // try/catch for older browsers that don't support the canvas element
    try {

      // attempt to give ctx a 2d canvas context value
      ctx = canvas.getContext('2d');

    } catch (e) {

      // return empty string if canvas element not supported
      return "";
    }

    // https://www.browserleaks.com/canvas#how-does-it-work
    // Text with lowercase/uppercase/punctuation symbols
    var txt = 'ClientJS,org <canvas> 1.0';
    ctx.textBaseline = "top";
    // The most common type
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    // Some tricks for color mixing to increase the difference in rendering
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    return canvas.toDataURL();
  }

  /**
   * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
   *
   * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
   * @see http://github.com/garycourt/murmurhash-js
   * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
   * @see http://sites.google.com/site/murmurhash/
   *
   * @param {string} key ASCII only
   * @param {number} seed Positive integer only
   * @return {number} 32-bit positive integer hash
   */
  private murmurhash3_32_gc(key, seed) {
    var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;

    remainder = key.length & 3; // key.length % 4
    bytes = key.length - remainder;
    h1 = seed;
    c1 = 0xcc9e2d51;
    c2 = 0x1b873593;
    i = 0;

    while (i < bytes) {
      k1 =
        ((key.charCodeAt(i) & 0xff)) |
        ((key.charCodeAt(++i) & 0xff) << 8) |
        ((key.charCodeAt(++i) & 0xff) << 16) |
        ((key.charCodeAt(++i) & 0xff) << 24);
      ++i;

      k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
      k1 = (k1 << 15) | (k1 >>> 17);
      k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

      h1 ^= k1;
      h1 = (h1 << 13) | (h1 >>> 19);
      h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
      h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
    }

    k1 = 0;

    switch (remainder) {
      case 3:
        k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
      case 2:
        k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
      case 1:
        k1 ^= (key.charCodeAt(i) & 0xff);

        k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
        h1 ^= k1;
    }

    h1 ^= key.length;

    h1 ^= h1 >>> 16;
    h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
    h1 ^= h1 >>> 13;
    h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
    h1 ^= h1 >>> 16;

    return h1 >>> 0;
  }
}
