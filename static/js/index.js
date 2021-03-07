var menuOpen = false
function menu() {
    if ( menuOpen == true ) {
        document.querySelector("#menus").style.right = "-180px"
        menuOpen = false
    }else{
        document.querySelector("#menus").style.right = "0px"
        menuOpen = true
    }
}