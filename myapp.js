var apiObj = null;

function StartMeeting()
{
    const domain = 'live-class.joogle.xyz';
    const options = {
        roomName: '101',
        width: '100%',
        height: '100%',
        parentNode: document.querySelector('#jitsi-meet-conf-container'),
        userInfo: {
            displayName: 'Monir'
        },
        configOverwrite:{

        },
        interfaceConfigOverwrite: {
            DISPLAY_WELCOME_PAGE_CONTENT: false,
            TOOLBAR_BUTTONS: [
                'microphone', 'camera'
            ],
        },
        onload: function () {
            alert('loaded');
        }
    };

    apiObj = new JitsiMeetExternalAPI(domain, options);

    apiObj.addEventListeners({
        readyToClose: function () {
            alert('going to close');
            $("#jitsi-meet-conf-container").empty();
        }
    });

    apiObj.executeCommand('subject', '');
}

function HangupCall(){
    apiObj.executeCommand('hangup');
}