// AUTHOR : TSAFACK SYLVIA STELA
const getFoods = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const foodList = data.map((user) => {
      return {
        id: user.id,
        name: `Plat ${user.name}`,

        category: user.id % 2 === 0 ? "legume" : "fruit",
        price: parseFloat((user.id * 7.5).toFixed(2)),
      };
    });

    const vegetaList = foodList.filter((food) => food.category === "legume");

    vegetaList.sort((a, b) => a.price - b.price);

    console.log(`Nombre de plats végétariens trouvés : ${vegetaList.length}`);

    if (vegetaList.length === 0) {
      console.log("⚠️ Aucun plat végétarien trouvé.");
    } else {
      console.table(vegetaList);
    }
  } catch (error) {
    console.error("Erreur :", error);
  }
};

getFoods();
/* RÉPONSES AUX QUESTIONS  :

  1. Pourquoi utilise-t-on .map() avant .filter() ?
     On utilise .map() d'abord pour "préparer" nos objets. L'API nous donne des 'users', 
     mais nous avons besoin de 'plats' avec des prix et des catégories. 
     Une fois que chaque objet possède sa propriété .category (créée dans le map), 
     on peut enfin utiliser .filter() pour trier sur cette catégorie précise.

  2. Quelle est la différence entre filter() et map() ?
     - .map() : Sert à TRANSFORMER. Il crée un nouveau tableau de la MÊME TAILLE, 
       mais modifie le contenu de chaque élément (ex: transformer un nom en majuscule).
     - .filter() : Sert à SÉLECTIONNER. Il crée un nouveau tableau souvent PLUS PETIT, 
       en ne gardant que les éléments qui respectent une condition (Vrai ou Faux).

  3. Pourquoi transformer les données alimentaires avant affichage ?
     - Pour l'Expérience Utilisateur: Un client veut voir un "NOM DE PLAT" et un "PRIX", 
       pas les données techniques brutes d'une base de données d'utilisateurs.
     - Pour la cohérence : Cela permet de nettoyer les données (ex: arrondir les prix 
       ou mettre les textes en majuscules) pour que l'affichage soit uniforme et pro.
*/
