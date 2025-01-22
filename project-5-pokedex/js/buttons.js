function mainButton() {

    document.getElementById('btn1').style = `border-radius: 0 12px 12px 0; border-bottom: 1px solid ${typeBackgroundColor2}; border-top: 1px solid ${typeBackgroundColor2}; background: #0d191fff;`;
    document.getElementById('btn2').style = `border-radius: 12px 0 0 12px; border-bottom: 1px solid ${typeBackgroundColor2}; border-top: 1px solid ${typeBackgroundColor2}`;
    document.getElementById('btn3').style = `border-radius: 0; border-bottom: 1px solid ${typeBackgroundColor2}; border-top: 1px solid ${typeBackgroundColor2}`;
    document.getElementById('main').style = '';
    if (document.getElementById('evo_chain') != null) { document.getElementById('evo_chain').style = 'display: none' };
    document.getElementById('stats').style = 'display: none';
    stats = false;
}

function statsButton() {

    document.getElementById('btn1').style = `border-radius: 12px; border-bottom: 1px solid ${typeBackgroundColor2}; border-top: 1px solid ${typeBackgroundColor2}`;
    document.getElementById('btn2').style = `border-radius: 12px 12px 12px 12px; border-bottom: 1px solid ${typeBackgroundColor2}; border-top: 1px solid ${typeBackgroundColor2}; background: #0d191fff;`;
    document.getElementById('btn3').style = `border-radius: 12px 0 0 12px; border-bottom: 1px solid ${typeBackgroundColor2}; border-top: 1px solid ${typeBackgroundColor2}`;
    document.getElementById('main').style = 'display: none';
    document.getElementById('stats').style = '';
    document.getElementById('evo_chain').style = 'display: none';
    showProgressBars(currentIdPokmonToView);
}

function evoButton() {
    document.getElementById('btn1').style = `border-radius: 0; border-bottom: 1px solid ${typeBackgroundColor2}; border-top: 1px solid ${typeBackgroundColor2}`;
    document.getElementById('btn2').style = `border-radius: 0 12px 12px 0; border-bottom: 1px solid ${typeBackgroundColor2}; border-top: 1px solid ${typeBackgroundColor2}`;
    document.getElementById('btn3').style = `border-radius: 12px 0 0 12px; border-bottom: 1px solid ${typeBackgroundColor2}; border-top: 1px solid ${typeBackgroundColor2}; background: #0d191fff;`;
    document.getElementById('main').style = 'display: none';
    document.getElementById('evo_chain').style = '';
    document.getElementById('stats').style = 'display: none';
    stats = false;
}



