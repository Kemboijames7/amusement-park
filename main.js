// const buttonBtn = document.getElementById(btn)
// Function elementFromHtml = (html) {
//     const template = document.createElement("template"); //stores element
//     template.innerHTML = html.trim();
//     return template.content.firstElementChild;
// }
function createVisitor(name, age, ticketId) {
    return {
        name,
        age,
        ticketId,
        gtc: {
            signed: true,
            version: '2.1'
        }
        }
    };

    function revokeTicket(visitor) {
        visitor.ticketId = null;
        return visitor;
    }
    
    function ticketStatus(tickets, ticketId) {
        if (!(ticketId in tickets)) {
            return 'unknown ticket id';
        } else if (tickets[ticketId] === null) {
            return 'not sold';
        } else {
            return `sold to ${tickets[ticketId]}`;
        }
    }
    
    function simpleTicketStatus(tickets, ticketId) {
        return tickets[ticketId] ?? 'invalid ticket !!!';
    }

    function gtcVersion(visitor) {
        return visitor.gtc?.version;
    }

    // Example tracking object for ticket status
const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi'
};

// Event listeners for form submissions and button clicks
document.getElementById('visitor-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const ticketId = document.getElementById('ticketId').value;
    const visitor = createVisitor(name, age, ticketId);
    document.getElementById('visitor-info').innerText = JSON.stringify(visitor, null, 2);
   // Change the color of the text area
   changeTextAreaColor();
});

function changeTextAreaColor() {
    const textArea = document.getElementById('myTextArea');
    textArea.style.backgroundColor = 'lightblue'; // Change the background color
    textArea.style.color = 'darkblue'; // Change the text color
    // You can also change other properties, such as border color, font, etc.
    textArea.style.borderColor = 'blue';
}

document.getElementById('status-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const ticketId = document.getElementById('status-ticketId').value;
    const status = ticketStatus(tickets, ticketId);
    document.getElementById('status-info').innerText = status;
});

document.getElementById('revoke-button').addEventListener('click', function() {
    const visitor = JSON.parse(document.getElementById('visitor-info').innerText);
    const updatedVisitor = revokeTicket(visitor);
    document.getElementById('visitor-info').innerText = JSON.stringify(updatedVisitor, null, 2);
});

document.getElementById('gtc-button').addEventListener('click', function() {
    const visitor = JSON.parse(document.getElementById('visitor-info').innerText);
    const gtcVersionInfo = gtcVersion(visitor);
    document.getElementById('gtc-info').innerText = gtcVersionInfo;
});