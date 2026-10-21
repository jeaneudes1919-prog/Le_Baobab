const u=i=>`https://images.unsplash.com/photo-${i}?auto=format&fit=crop&w=1000&q=80`;
export const HERO=u("1414235077428-338989a2e8c0");
export const GALERIE=["1517248135467-4c7edcad34c4","1559339352-11d035aa65de","1555939594-58d7cb561ad1","1544025162-d76694265947","1551024506-0bccd828d307","1467003909585-2f8a72700288"].map(u);
export const CATS=["Entrées","Plats","Desserts","Boissons"];
const D=(id,nom,cat,prix,desc,tags,img)=>({id,nom,cat,prix,desc,tags,img:u(img)});
export const PLATS=[
D(1,"Velouté de patate douce","Entrées",6500,"Crème de patate douce, lait de coco, éclats de noix de cajou grillées.",["végétarien"],"1476224203421-9ac39bcb3327"),
D(2,"Salade de mangue et crevettes","Entrées",8500,"Crevettes marinées au citron vert, mangue, avocat, piment doux.",["épicé"],"1512621776951-a57141f2eefd"),
D(3,"Accras de morue","Entrées",7000,"Beignets croustillants, sauce pimentée maison.",["épicé"],"1540189549336-e6e99c3679fe"),
D(4,"Carpaccio de capitaine","Entrées",9500,"Poisson cru mariné, huile de baobab, baies roses.",["signature"],"1482049016688-2d3e1b311543"),
D(5,"Capitaine braisé du Baobab","Plats",18500,"Filet braisé, sauce tomate fumée, attiéké crémeux et banane plantain.",["signature","épicé"],"1467003909585-2f8a72700288"),
D(6,"Filet de bœuf, jus au gingembre","Plats",22000,"Bœuf tendre, purée de igname, légumes de saison.",["signature"],"1544025162-d76694265947"),
D(7,"Poulet bicyclette rôti","Plats",15500,"Poulet fermier mariné aux épices, riz parfumé.",[],"1555939594-58d7cb561ad1"),
D(8,"Risotto de fonio aux champignons","Plats",14000,"Fonio crémeux, champignons sautés, parmesan.",["végétarien"],"1473093295043-cdd812d0e601"),
D(9,"Moambe d'agneau","Plats",19500,"Agneau mijoté sauce noix de palme, riz blanc.",["épicé"],"1504674900247-0877df9cc836"),
D(10,"Curry de légumes au lait de coco","Plats",12500,"Légumes croquants, curry doux, riz basmati.",["végétarien"],"1432139555190-58524dae6a55"),
D(11,"Fondant chocolat-piment","Desserts",7500,"Cœur coulant, glace vanille, une pointe de piment.",["signature","végétarien"],"1551024506-0bccd828d307"),
D(12,"Panna cotta à la mangue","Desserts",6500,"Crème vanillée, coulis de mangue fraîche.",["végétarien"],"1488477181946-6428a0291777"),
D(13,"Tarte à l'ananas rôti","Desserts",6800,"Pâte sablée, ananas caramélisé, chantilly coco.",["végétarien"],"1565958011703-44f9829ba187"),
D(14,"Beignets de banane","Desserts",5500,"Servis chauds, sauce caramel beurre salé.",["végétarien"],"1551024506-0bccd828d307"),
D(15,"Jus de bissap","Boissons",3000,"Hibiscus frais, menthe et gingembre.",["végétarien"],"1544025162-d76694265947"),
D(16,"Jus de baobab","Boissons",3500,"Pulpe de fruit de baobab, miel local.",["végétarien"],"1544025162-d76694265947"),
D(17,"Cocktail Cotonou Sunset","Boissons",6500,"Rhum, ananas, citron vert, sirop de gingembre.",["signature"],"1544025162-d76694265947"),
D(18,"Café du Bénin","Boissons",2500,"Café torréfié localement, servi avec un petit biscuit.",["végétarien"],"1544025162-d76694265947")];
export const AVIS=[["Aïcha K.","Une soirée parfaite : le capitaine braisé est une merveille et le service est irréprochable."],["Marc D.","Cadre élégant, cuisine inventive. Le fondant chocolat-piment est à ne pas manquer."],["Sandrine A.","Nous y avons fêté un anniversaire. Accueil chaleureux et plats superbes."]];
