// let skill_icon_base = document.querySelectorAll(".base");
// let skill_icon_green = document.querySelectorAll(".green");
// let skill = document.querySelectorAll(".skill");

// skill_icon_base.addEventListener("mouseover", responeMouseOver);

// function responeMouseOver() {
//   let skill_icon_base = skill_icon_base;
//   let skill_icon_green = skill_icon_green;
//   const skill = skill;
//   skill.classlist.remove("skill_icon_base");
// }

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_c9s4bkp";
  const templateID = "template_wxgzjqp";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("number").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully.");
    })
    .catch((err) => console.log(err));
}
