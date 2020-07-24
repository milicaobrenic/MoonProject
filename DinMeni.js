var poslednjiPrikazanPodmeni;

function inicijalizacija() {
    var podmeniji = document.querySelectorAll(".podmeni");

    for (var i = 0; i < podmeniji.length; i++) {
        podmeniji[i].onmouseout=hideSelf;
    }

    var meniP = document.querySelectorAll(".menip");

    for(var i = 0; i < meniP.length; i++) {
        meniP[i].onmouseover=displaySubmenu;
    }

    window.onclick = hideLastShown;

function displaySubmenu() {
    hideLastShown();
    var podmeni = this.querySelector(".podmeni");
    if (podmeni) {
        podmeni.style.display = "inline";
        poslednjiPrikazanPodmeni = podmeni;
    }
}

function hideSelf() {
    this.style.display = "none";
}

function hideLastShown() {
    if (poslednjiPrikazanPodmeni) {
        poslednjiPrikazanPodmeni.style.display = "none";
    }
}
}