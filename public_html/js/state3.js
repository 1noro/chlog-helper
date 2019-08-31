function to_state4() {
    document.getElementById('back3_btn').style.display = "none";

    document.getElementById('ct_added_cont').style.display = "none";
    document.getElementById('ct_changed_cont').style.display = "none";
    document.getElementById('ct_deprecated_cont').style.display = "none";
    document.getElementById('ct_removed_cont').style.display = "none";
    document.getElementById('ct_fixed_cont').style.display = "none";
    document.getElementById('ct_security_cont').style.display = "none";

    document.getElementById('list_added_cont').style.display = "none";
    document.getElementById('list_changed_cont').style.display = "none";
    document.getElementById('list_deprecated_cont').style.display = "none";
    document.getElementById('list_removed_cont').style.display = "none";
    document.getElementById('list_fixed_cont').style.display = "none";
    document.getElementById('list_security_cont').style.display = "none";

    document.getElementById('generate_btn').style.display = "none";

    document.getElementById('back4_btn').style.display = "block";
    document.getElementById('result_cont').style.display = "block";
    document.getElementById('copy_btn').style.display = "block";
}

// comprimirlo haciendo reversible el to_state3().
function back3_btn() {
    document.getElementById('back3_btn').style.display = "none";

    document.getElementById('ct_added_cont').style.display = "none";
    document.getElementById('ct_changed_cont').style.display = "none";
    document.getElementById('ct_deprecated_cont').style.display = "none";
    document.getElementById('ct_removed_cont').style.display = "none";
    document.getElementById('ct_fixed_cont').style.display = "none";
    document.getElementById('ct_security_cont').style.display = "none";

    document.getElementById('list_added_cont').style.display = "none";
    document.getElementById('list_changed_cont').style.display = "none";
    document.getElementById('list_deprecated_cont').style.display = "none";
    document.getElementById('list_removed_cont').style.display = "none";
    document.getElementById('list_fixed_cont').style.display = "none";
    document.getElementById('list_security_cont').style.display = "none";

    document.getElementById('generate_btn').style.display = "none";

    document.getElementById('version_phase_input').style.display = "block";
    document.getElementById('version_input').style.display = "block";
    document.getElementById('author_input').style.display = "block";
    document.getElementById('author_mail_input').style.display = "block";
    document.getElementById('begin_btn').style.display = "block";
}

function generate_btn() {
    to_state4();
}

function display_list(n_id) {
    if (prev_list) {
        if (prev_list == n_id) {
            document.getElementById(prev_list).style.display = "none";
            prev_list = false;
        } else {
            document.getElementById(prev_list).style.display = "none";
            document.getElementById(n_id).style.display = "block";
            prev_list = n_id;
        }
    } else {
        document.getElementById(n_id).style.display = "block";
        prev_list = n_id;
    }
}
