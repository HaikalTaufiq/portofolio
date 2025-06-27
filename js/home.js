const roles = [
  'Software Engineer',
  'Multimedia Engineer',
  'Mobile Developer',
  'Website Developer'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const rolesContainer = document.getElementById('roles');

function typeRole() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }
  rolesContainer.innerHTML = currentRole.substring(0, charIndex) + '<span class="cursor">|</span>';

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeRole, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 300);
  } else {
    setTimeout(typeRole, isDeleting ? 50 : 100);
  }
}

document.addEventListener('DOMContentLoaded', typeRole);