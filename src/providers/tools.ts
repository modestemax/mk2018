export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export async function presentLoading({message, duration = 0}) {
  let loadingController: any = document.querySelector('ion-loading-controller');
  if (!loadingController) {
    loadingController = document.createElement('ion-loading-controller')
    document.body.appendChild(loadingController)
  }
  await loadingController.componentOnReady();

  const loading = await
    loadingController.create({message, translucent: true, duration});
  loading.present();
  return loading;
}
