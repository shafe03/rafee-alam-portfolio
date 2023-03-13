let skill_icon_base = document.querySelectorAll(".base");
let skill_icon_green = document.querySelectorAll(".green");
let skill = document.querySelectorAll(".skill");

skill_icon_base.addEventListener("mouseover", responeMouseOver);

function responeMouseOver() {
  let skill_icon_base = skill_icon_base;
  let skill_icon_green = skill_icon_green;
  const skill = skill;
  skill.classlist.remove("skill_icon_base");
}
