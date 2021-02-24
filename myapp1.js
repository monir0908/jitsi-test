var apiObj = null;

function StartMeeting(){
    const domain = 'live-class.joogle.xyz';
    const options = {
        roomName: '101',
        width: 700,
        height: 700,
        parentNode: document.querySelector('#jitsi-meet-conf-container')
    };
    apiObj = new JitsiMeetExternalAPI(domain, options);
}