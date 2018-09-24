async function isEmpty(collection: any) {
  const news = await collection.limit(1).get();
  return news.size == 0;

}

export async function loadDefaultData(firestore) {
  const batch = firestore.batch();
  await Promise.all(collectionsConfig().map(async ([collection_name, json_url]) => {
    const collection = firestore.collection(collection_name);
    if (await isEmpty(collection)) {
      const rsp = await fetch(json_url);
      const items = await rsp.json();
      return items.map(item => {
        const doc = collection.doc(item._id);
        batch.set(doc, item);
      });
    }
  }))
  ;
  return batch.commit();
  /*.then(function () { ... });*/
}

function collectionsConfig() {
  return [
    ['cv_fr', '/assets/data/cv.fr.json'],
    ['cv_en', '/assets/data/cv.fr.json'],
    ['news', '/assets/data/actualites.json'],
    ['banks', '/assets/data/banks.json'],
    ['chantiers_fr', '/assets/data/chantiers.fr.json'],
    ['chantiers_en', '/assets/data/chantiers.fr.json'],
    ['engagements_fr', '/assets/data/engagements.fr.json'],
    ['engagements_en', '/assets/data/engagements.fr.json'],
    ['force-alternance_fr', '/assets/data/force-alternance.fr.json'],
    ['force-alternance_en', '/assets/data/force-alternance.fr.json'],
    ['galeries_fr', '/assets/data/galeries.fr.json'],
    ['galeries_en', '/assets/data/galeries.fr.json'],
    ['i18n', '/assets/data/i18n.json'],
    ['menu', '/assets/data/menu.json'],
    ['penalty_fr', '/assets/data/penalty.fr.json'],
    ['penalty_en', '/assets/data/penalty.fr.json'],
    ['tutorial_fr', '/assets/data/tutorial.fr.json'],
    ['tutorial_en', '/assets/data/tutorial.fr.json'],
    ['contacts_fr', '/assets/data/contacts.fr.json'],
    ['contacts_en', '/assets/data/contacts.fr.json'],

  ];
}

