document.getElementById('preview-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const about = document.getElementById('about').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    document.getElementById('resume-name').innerText = name;
    document.getElementById('resume-email').innerText = email;
    document.getElementById('resume-phone').innerText = phone;
    document.getElementById('resume-about').innerText = about;
    document.getElementById('resume-education').innerText = education;
    document.getElementById('resume-experience').innerText = experience;
    document.getElementById('resume-skills').innerText = skills;

    document.getElementById('resume-preview').style.display = 'block';
});

document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const doc = new jsPDF();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const about = document.getElementById('about').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Phone: ${phone}`, 10, 30);
    doc.text(`About Me: ${about}`, 10, 40);
    doc.text(`Education: ${education}`, 10, 50);
    doc.text(`Work Experience: ${experience}`, 10, 60);
    doc.text(`Skills: ${skills}`, 10, 70);

    doc.save(`${name}_Resume.pdf`);
});
