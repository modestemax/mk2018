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
  await loading.present();
  return loading;
}


export async function presentAlert({header = 'Alert', subHeader='', message='', buttons = ['OK']}={}) {
  let alertController: any = document.querySelector('ion-alert-controller');
  if (!alertController) {
    alertController = document.createElement('ion-alert-controller')
    document.body.appendChild(alertController)
  }
  await alertController.componentOnReady();

  const alert = await alertController.create({header, subHeader, message, buttons});
  await alert.present();
  return alert;
}
