
function to_state3() {
    document.getElementById('version_phase_input').style.display = "none";
    document.getElementById('version_input').style.display = "none";
    document.getElementById('author_input').style.display = "none";
    document.getElementById('author_mail_input').style.display = "none";
    document.getElementById('begin_btn').style.display = "none";

    document.getElementById('back3_btn').style.display = "block";

    document.getElementById('ct_added_cont').style.display = "block";
    document.getElementById('ct_changed_cont').style.display = "block";
    document.getElementById('ct_deprecated_cont').style.display = "block";
    document.getElementById('ct_removed_cont').style.display = "block";
    document.getElementById('ct_fixed_cont').style.display = "block";
    document.getElementById('ct_security_cont').style.display = "block";

    document.getElementById('generate_btn').style.display = "block";
}

function begin_btn() {
    to_state3();
}
