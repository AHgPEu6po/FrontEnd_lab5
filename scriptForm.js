document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('error');
    });

    const fullName = document.getElementById("fullName");
    const fullNameRegex = /^[А-ЯЇІЄҐа-яїієґ]+\s[А-ЯЇІЄҐ]\.[А-ЯЇІЄҐ]\.$/;
    if (!fullNameRegex.test(fullName.value)) {
        fullName.classList.add('error');
        isValid = false;
    }

    const idCard = document.getElementById("idCard");
    const idCardRegex = /^[А-ЯЇІЄҐ]{2}\s№\d{6}$/;
    if (!idCardRegex.test(idCard.value)) {
        idCard.classList.add('error');
        isValid = false;
    }

    const dob = document.getElementById("dob");
    const dobRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!dobRegex.test(dob.value)) {
        dob.classList.add('error');
        isValid = false;
    }

    const address = document.getElementById("address");
    const addressRegex = /^м\.\s[А-ЯЇІЄҐа-яїієґ]+$/;
    if (!addressRegex.test(address.value)) {
        address.classList.add('error');
        isValid = false;
    }

    const email = document.getElementById("email");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        alert(`
        ПІБ: ${fullName.value}
        ID-карта: ${idCard.value}
        Дата народження: ${dob.value}
        Адреса: ${address.value}
        Email: ${email.value}
        `);
    }
});


