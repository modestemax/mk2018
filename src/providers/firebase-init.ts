// async function isEmpty(collection: any) {
//   const news = await collection.limit(1).get();
//   return news.size == 0;
//
// }

export const initialData = {};

export async function pushDefaultData(firestore) {
  // const batch = firestore.batch();
  await Promise.all(Object.entries(collectionsConfig()).map(async ([collection_name/*, json_url*/]) => {
    const items = await loadDefaultDataByCollection(collection_name);
    // setImmediate(async () => {
    const collection = firestore.collection(collection_name);
    // if (await isEmpty(collection)) {
    const batch = firestore.batch();
    items.map(item => {
      const doc = collection.doc(item._id);
      batch.set(doc, item);
      return item;
    });
    return batch.commit();
    // }
    // });

  }))
  ;
}

export async function loadDefaultDataByCollection(collection_name) {

  const json_url = collectionsConfig()[collection_name];


  const rsp = await fetch(json_url);
  const items = await rsp.json();
  // initialData[collection_name] = items;

  return items;
  /*.then(function () { ... });*/
}

function collectionsConfig() {
  return {
    'cv_fr': '/assets/data/cv.fr.json',
    'cv_en': '/assets/data/cv.fr.json',
    'news': '/assets/data/actualites.json',
    'banks': '/assets/data/banks.json',
    'chantiers_fr': '/assets/data/chantiers.fr.json',
    'chantiers_en': '/assets/data/chantiers.fr.json',
    'engagements_fr': '/assets/data/engagements.fr.json',
    'engagements_en': '/assets/data/engagements.fr.json',
    'force-alternance_fr': '/assets/data/force-alternance.fr.json',
    'force-alternance_en': '/assets/data/force-alternance.fr.json',
    'galeries_fr': '/assets/data/galeries.fr.json',
    'galeries_en': '/assets/data/galeries.fr.json',
    'i18n': '/assets/data/i18n.json',
    'menu': '/assets/data/menu.json',
    'penalty_fr': '/assets/data/penalty.fr.json',
    'penalty_en': '/assets/data/penalty.fr.json',
    'tutorial_fr': '/assets/data/tutorial.fr.json',
    'tutorial_en': '/assets/data/tutorial.en.json',
    'contacts_fr': '/assets/data/contacts.fr.json',
    'contacts_en': '/assets/data/contacts.en.json',
    'elections_fr': '/assets/data/elections.fr.json',
    'elections_en': '/assets/data/elections.fr.json',
    'brigades_fr': '/assets/data/brigades.fr.json',
    'brigades_en': '/assets/data/brigades.fr.json'
  };
}

