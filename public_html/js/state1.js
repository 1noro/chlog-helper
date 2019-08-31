
function to_state2() {
    document.getElementById('new_btn').style.display = "none";
    document.getElementById('continue_btn').style.display = "none";

    document.getElementById('version_phase_input').style.display = "block";
    document.getElementById('version_input').style.display = "block";
    document.getElementById('author_input').style.display = "block";
    document.getElementById('author_mail_input').style.display = "block";
    document.getElementById('begin_btn').style.display = "block";
    document.getElementById('version_phase').focus();
}

function new_chlog_btn() {
    new_chlog = true;
    to_state2();
}
