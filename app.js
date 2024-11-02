function generateIdCard() {
    // Fetching the values from form fields
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const university = document.getElementById('university').value;
    const instagram = document.getElementById('instagram').value;
    const twitter = document.getElementById('twitter').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const profilePhoto = document.getElementById('profilePhoto').files[0];

    // Displaying the values in the ID card
    document.getElementById('cardName').textContent = name;
    document.getElementById('cardAddress').textContent = address;
    document.getElementById('cardUniversity').textContent = university;

    // Setting profile photo
    if (profilePhoto) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profileImg').src = e.target.result;
        }
        reader.readAsDataURL(profilePhoto);
    }

    // Set hrefs for social links, only if the input is filled
    document.getElementById('instagramLink').href = instagram ? instagram : '#';
    document.getElementById('twitterLink').href = twitter ? twitter : '#';
    document.getElementById('linkedinLink').href = linkedin ? linkedin : '#';
    document.getElementById('githubLink').href = github ? github : '#';

    // Generating the QR code with formatted details
    const qrData = `Name: ${name}%0AAddress: ${address}%0AUniversity: ${university}%0AInstagram: ${instagram}%0ATwitter: ${twitter}%0ALinkedIn: ${linkedin}%0AGitHub: ${github}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;

    document.getElementById('qrCode').innerHTML = `<img src="${qrUrl}" alt="QR Code">`;

    // Display the ID card
    document.getElementById('idCard').style.display = 'block';
}
