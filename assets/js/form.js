document.addEventListener("DOMContentLoaded", function () {
    function sendEmail(formId, templateId) {
        const form = document.getElementById(formId);
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_1a4iw8p", templateId, form, "xRYmkU_4Ct1duYCBt")
                .then(() => {
                    window.location.href = "thankyou.html";
                })
                .catch((error) => {
                    console.error("EmailJS Error:", error);
                    alert("Something went wrong. Please try again.");
                });
        });
    }
    emailjs.init("xRYmkU_4Ct1duYCBt");
    sendEmail("contactUs", "template_1f7seqq");
    sendEmail("demos", "template_46hwo0c");
});
