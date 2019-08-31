
// comprimirlo haciendo reversible el to_state3().
function back4_btn() {
    document.getElementById('back4_btn').style.display = "none";
    document.getElementById('result_cont').style.display = "none";
    document.getElementById('copy_btn').style.display = "none";

    document.getElementById('back3_btn').style.display = "block";

    document.getElementById('ct_added_cont').style.display = "block";
    document.getElementById('ct_changed_cont').style.display = "block";
    document.getElementById('ct_deprecated_cont').style.display = "block";
    document.getElementById('ct_removed_cont').style.display = "block";
    document.getElementById('ct_fixed_cont').style.display = "block";
    document.getElementById('ct_security_cont').style.display = "block";

    document.getElementById('generate_btn').style.display = "block";
}
