(function(){
    var tabl = document.getElementById("tab-l");
    var tabr = document.getElementById("tab-r");
    var login_qrcode = document.getElementsByClassName("login-qrcode")[0];
    var login_box = document.getElementsByClassName("login-box")[0];
    var login_name = document.getElementById("login-name");
    var login_password = document.getElementById("login-password");
    var clear_name = document.getElementById("clear-name");
    var clear_password = document.getElementById("clear-password");
    /**
     * default config
     */
    tabl.style.color = "#e93853";
    tabl.style.fontWeight = "700";
    login_qrcode.style.display = "block";
    login_box.style.display = "none";
    clear_name.style.display = "none";
    clear_password.style.display = "none";


    tabl.onclick = function (element) {
        console.log("element", element);
        tabl.style.color = "#e93853";
        tabl.style.fontWeight = "700";
        tabr.style.color = "";
        tabr.style.fontWeight = "";
        login_qrcode.style.display = "block";
        login_box.style.display = "none";
    };
    tabr.onclick = function (element) {
        console.log("element", element);
        tabr.style.color = "#e93853";
        tabr.style.fontWeight = "700";
        tabl.style.color = "";
        tabl.style.fontWeight = "";
        login_qrcode.style.display = "none";
        login_box.style.display = "block";
    };
    login_name.oninput = function (element) {
        if (login_name.value.length > 0) {
            clear_name.style.display = "inline-block";
        } else {
            clear_name.style.display = "none";
        }
    };
    login_password.oninput = function () {
        if (login_password.value.length > 0) {
            clear_password.style.display = "inline-block";
        } else {
            clear_password.style.display = "none";
        }
    };
    clear_name.onclick = function () {
        login_name.value = "";
    };
    clear_password.onclick = function () {
        login_password.value = "";
    };
}());

