var qrcode; // Declare QRCode object outside the function

function generateQRCode() {
    var serialNumber = document.getElementById("serialNumber").value;
    var productName = document.getElementById("productName").value;
    var source = document.getElementById("source").value;
    var destination = document.getElementById("destination").value;
    var remarks = document.getElementById("remarks").value;

    var data = `Serial Number: ${serialNumber}\nProduct Name: ${productName}\nSource: ${source}\nDestination: ${destination}`;

    if (serialNumber !== '' && productName !== '' && destination !== '') {
        document.querySelector('.h2').innerHTML = 'Generated QR Code';

        // Create QRCode object if not already created
        if (!qrcode) {
            qrcode = new QRCode(document.getElementById('qrcode'), {
                width: 128,
                height: 128,
            });
        }

        // Update QRCode content
        qrcode.clear();
        qrcode.makeCode(data);

        document.getElementById('submitbutton').disabled = false;
        document.getElementById('submitbutton').classList.remove('abutton');
        document.getElementById('submitbutton').classList = 'block2';
    }
}

if (document.getElementById('submitbutton').disabled === true) {
    document.getElementById('submitbutton').classList = 'abutton';
}
