// Remplacons le var par le let car ces objets ne changent pas
// const student1 = {
//   name: "Marie",
//   age: 22,
//   city: "yaounde",
//   skills: ["HTML", "CSS"],
// };
// const student2 = {
//   name: "Paul",
//   age: 25,
//   city: "Douala",
//   skills: ["Python", "SQL"],
// };
// // Remplacons chaque dclaration de fonction par des fonctions flechées
// // avant
// function getCity(student) {
//   return student.city;
// }
// // Apres
// const getCity = (student) => {
//   return student.city;
// };
// // avant
// function buildProfle(student, Extrakills) {
//   var name = student.name;
//   var age = student.age;
//   var allskills = student.skills.concat(Extrakills);
//   return name + "( " + age + " ) de " + getCity(student);
// }
// // apres
// const buildProfle = (student, Extrakills) => {
//   const name = student.name;
//   const age = student.age;
//   const allskills = student.skills.concat(Extrakills);
//   return name + "( " + age + " ) de " + getCity(student);
// };
// // avant
// function mergeStudents(S1,S2){
//     return {name : S1.name + '&' + S2.name , city :'cameroun'};
// }
// apres
// const mergeStudents = (S1, S2) => {
//     return {name : S1.name + '&' + S2.name , city :'cameroun'};
// }
// // DESTRUCTURATION
// // avant

// const getCity = (student) => {
//   return student.city;
// };
// // j'ai utilisé une fonction flechée pour simplifier la syntaxe
// // apres
// const getCity = ({city}) =>city;

// // DESTRUCTURATION DANS buildProfile
// // avant
// const buildProfle = (student, Extrakills) => {
//   const name = student.name;
//   const age = student.age;
//   const allskills = student.skills.concat(Extrakills);
//  return name + '(' + age + ') de ' + getCity(student) + '| Comp : ' + allskills.join(',')
// };
// // apres
// // destructuration pour recuperer l'age et name ;
// // operateur spread pour fusioner les templates litterales pour construire la chaine
// const {name , age  } = student;
// // fusion des competences
// // avec l'operateur (...spread)
//  const allskills =[...student.skills,...Extrakills];
// // LITTERAL DE GABARIT
// // avant
// const buildProfle = (student, Extrakills) => {
//   const name = student.name;
//   const age = student.age;
//   const allskills = student.skills.concat(Extrakills);

// };
// // apres
// return `$name ` ($age ) de ${getCity(student)} | Comp : $ {allskills.join (',') }`;

// const fetchUserData = async () => {
//     console.log(" Requête lancée...");

//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//         if (!response.ok) {

//             throw new Error(`Utilisateur introuvable ! Statut : ${response.status}`);
//         }

//         const user = await response.json();

//         console.log(`Bonjour Name : ${user.name} `);

//     } catch (error) {

//        console.log(
//         "%c Erreur : " + error.message,
//         "color: red; font-weight: bold; font-size: 14px;"
//     );
//         console.error("Error fetching user data :", error);
//     }
//     console.log('requete terminée');

// };

// fetchUserData();

// const getFastData = async () => {
//     console.log(" Requête lancée...");

//     try {
//         const response = await Promise.all ([
//             fetch("https://jsonplaceholder.typicode.com/users/1"),
//             fetch("https://jsonplaceholder.typicode.com/posts/1"),
//         ]);

//         if (!response.ok) {

//             throw new Error(`Utilisateur introuvable ! Statut : ${response.status}`);
//         }

//            const user = await userResponse.json ();
//            const post = await postResponse.json ();
//         ;

//         console.log(`Les deux requetes sont terminées  `);
//         console.log(`Nom : ${user.name}`);
//           console.log(`Titre : ${post.title}`);

//     } catch (error) {

//        console.log(
//         "%c Erreur : " + error.message,
//         "color: red; font-weight: bold; font-size: 14px;"
//     );
//         console.error("Error fetching user data :", error);
//     }
//     console.log('requete terminée');

// };

// GetFastData();
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
