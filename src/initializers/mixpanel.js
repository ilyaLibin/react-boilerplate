export default function initMixpanel() {
  const userData = localStorage.getObject('user_data');

  if (userData) {
    window.mixpanel.identify(userData.user_id);
    window.mixpanel.people.set({
      '$email': userData.email,
      '$name': userData.name,
      '$last_login': new Date(),
    });
  }
}
