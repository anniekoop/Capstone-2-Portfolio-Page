document.addEventListener('DOMContentLoaded', function() {
    adsHover();
    ssnHover();
    phoebeHover();
    bridgeHover();
})

function adsHover() {
    const adsLink = document.getElementById('ads-link');
    const adsImg = document.getElementById('ads-img');
    const adsArrow = document.getElementById('arrow-ads');
    adsArrow.style.opacity = '0';

    adsLink.addEventListener('mouseover', function() {
        adsImg.style.transform = 'scale(1.2)';
        adsImg.style.opacity = '0.8'
        adsArrow.style.opacity = '1';
    })

    adsLink.addEventListener('mouseout', function() {
        adsImg.style.transform = 'scale(1)';
        adsImg.style.opacity = '1';
        adsArrow.style.opacity = '0';
    })
}

function ssnHover() {
    const ssnLink = document.getElementById('ssn-link');
    const ssnImg = document.getElementById('ssn-img');
    const ssnArrow = document.getElementById('arrow-ssn');
    ssnArrow.style.opacity = '0';

    ssnLink.addEventListener('mouseover', function() {
        ssnImg.style.transform = 'scale(1.2)';
        ssnImg.style.opacity = '0.8';
        ssnArrow.style.opacity = '1';
    })

    ssnLink.addEventListener('mouseout', function() {
        ssnImg.style.transform = 'scale(1)';
        ssnImg.style.opacity = '1';
        ssnArrow.style.opacity = '0';
    })
}

function phoebeHover() {
    const phoebeLink = document.getElementById('phoebe-link');
    const phoebeImg = document.getElementById('phoebe-img');
    const phoebeArrow = document.getElementById('phoebe-arrow');
    phoebeArrow.style.opacity = '0';

    phoebeLink.addEventListener('mouseover', function() {
        phoebeImg.style.transform = 'scale(1.2)';
        phoebeImg.style.opacity = '0.8';
        phoebeArrow.style.opacity = '1';
    })

    phoebeLink.addEventListener('mouseout', function() {
        phoebeImg.style.transform = 'scale(1)';
        phoebeImg.style.opacity = '1';
        phoebeArrow.style.opacity = '0';
    })
}

function bridgeHover() {
    const bridgeLink = document.getElementById('bridge-link');
    const bridgeImg = document.getElementById('bridge-img');
    const bridgeArrow = document.getElementById('bridge-arrow');
    bridgeArrow.style.opacity = '0';

    bridgeLink.addEventListener('mouseover', function() {
        bridgeImg.style.transform = 'scale(1.2)';
        bridgeImg.style.opacity = '0.8';
        bridgeArrow.style.opacity = '1';
    })

    bridgeLink.addEventListener('mouseout', function() {
        bridgeImg.style.transform = 'scale(1)';
        bridgeImg.style.opacity = '1';
        bridgeArrow.style.opacity = '0';
    })
}

const resumeBtn = document.getElementById('resume-btn');
resumeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://anniekoop.github.io/resume/', '_blank');
})