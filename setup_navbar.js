let roomOrder = [];

let urlPath = window.location.pathname.split('/')

let currentRoom = urlPath[urlPath.length - 2];

fetch('../order.json')
    .then(response => response.json())
    .then(data => {
        rooms = data;

        leftButtons = document.getElementsByClassName('left_button');
        rightButtons = document.getElementsByClassName('right_button');
        
        let i = 0;
        for (i = 0; i < rooms.length; i++) {
            if (rooms[i] == currentRoom) {
                break;
            }
        }
        
        if (i > 0) {
            for (let j = 0; j < leftButtons.length; j++) {
                leftButtons[j].textContent = '<- ' + rooms[i-1];
                leftButtons[j].setAttribute('href', '../' + rooms[i-1] + '/');
            }
        }
        if (i < rooms.length - 1) {
            for (let j = 0; j < rightButtons.length; j++) {
                rightButtons[j].textContent = rooms[i+1] + ' ->';
                rightButtons[j].setAttribute('href', '../' + rooms[i+1] + '/');
            }
        }
    });