const contactForm = document.getElementById('contact-form');

const sendEmail = (e) => {
    e.preventDefault();

    // SERVICE ID: service_5urx91k - Taken from your screenshot
    // TEMPLATE ID: YOUR_TEMPLATE_ID - Needs to be replaced
    // PUBLIC KEY: YOUR_PUBLIC_KEY  - Needs to be replaced in index.html as well

    emailjs.sendForm('service_5urx91k', 'template_00mkocf', '#contact-form')
        .then(() => {
            alert('Message sent successfully ✅');
            contactForm.reset();
        }, (error) => {
            alert('Message failed to send ❌');
            console.log(error);
        });
}

contactForm.addEventListener('submit', sendEmail);
