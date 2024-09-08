import apple from "../_utils/assets/apple.png";
import banana from "../_utils/assets/banana.png";
import brinjal from "../_utils/assets/brinjal.png";
import brown_rice from "../_utils/assets/brown-rice.png";
import bun_pav from "../_utils/assets/bun-pav.png";
import carrot from "../_utils/assets/carrot.png";
import choco_milk from "../_utils/assets/chocolate-milk.png";
import corn from "../_utils/assets/corn.png";
import cream_bun from "../_utils/assets/cream-bun.png";
import lichi from "../_utils/assets/lichi.png";
import milk from "../_utils/assets/milk.png";
import oats from "../_utils/assets/oats.png";
import orange_milk from "../_utils/assets/orange-mik.png";
import pastree from "../_utils/assets/pastree.png";
import slice_pastree from "../_utils/assets/slice-pastree.png";
import strawberry from "../_utils/assets/strawberry.png";
import tomato from "../_utils/assets/tomato.png";
import wheat from "../_utils/assets/wheat.png";
import white_gourd from "../_utils/assets/white-gourd.png";
import egg from "../_utils/assets/Eggs.png";
import capcicum from "../_utils/assets/capcicum.png";
import jam from "../_utils/assets/Jam.png";
import pine_apple from "../_utils/assets/Pine-apple.png";
import cauliflower from "../_utils/assets/cauliflower.png";
import almond from "../_utils/assets/almond.png";
import peanut_butter from "../_utils/assets/peanut-butter.png";
import honey from "../_utils/assets/honey.png";
import olive_oil from "../_utils/assets/olive-oil.png";
import green_tea from "../_utils/assets/green-tea.png";
import yogurt from "../_utils/assets/yogurt.png";
import salmon from "../_utils/assets/salmon.png";
import chicken_breast from "../_utils/assets/chicken-breast.png";
import mango from "../_utils/assets/mango.png";
import papaya from "../_utils/assets/Papaya.png";
import spinach from "../_utils/assets/spinach.png";
import broccoli from "../_utils/assets/broccoli.png";

import radish from "../_utils/assets/raddish.png";
import ginger from "../_utils/assets/ginger.png";
import garlic from "../_utils/assets/garlic.png";
import mushroom from "../_utils/assets/mushroom.png";
import sweet_corn from "../_utils/assets/sweet_corn.png";
import cucumber from "../_utils/assets/cucumber.png";
import potato from "../_utils/assets/potato.png";
import onion from "../_utils/assets/onion.png";
import okra from "../_utils/assets/lady_finger.png";
import green_beans from "../_utils/assets/beans.png";
import pumpkin from "../_utils/assets/pumpkin.png";
import zucchini from "../_utils/assets/zucchini.png";

import grapes from "../_utils/assets/grapes.png";
import raspberry from "../_utils/assets/rasp_berry.png";
import dragon_fruit from "../_utils/assets/dragon_fruit.png";
import kiwi from "../_utils/assets/kiwi.png";
import pomegranate from "../_utils/assets/pomegranate.png";
import plum from "../_utils/assets/plum.png";
import guava from "../_utils/assets/guava.png";
import peach from "../_utils/assets/peach.png";
import apricot from "../_utils/assets/apricot.png";
import blackberry from "../_utils/assets/black_berry.png";
import cantaloupe from "../_utils/assets/Cantaloupe.png";
import oranges from "../_utils/assets/oranges.png";
import chiku from "../_utils/assets/chiku.png";

import mango_lassi from "../_utils/assets/mango_lassi.png";
import sweet_lassi from "../_utils/assets/lassi.png";
import chaas from "../_utils/assets/chaas.png";
import paneer from "../_utils/assets/paneer.png";
import butter from "../_utils/assets/butter.png";
import chocolate_milk_2 from "../_utils/assets/chocolate-milk_2.png";
import falooda from "../_utils/assets/falooda.png";
import badam_milk from "../_utils/assets/badam_milk.png";
import vanilla_ice_cream from "../_utils/assets/vanilla_ice_cream.png";
import chocolate_ice_cream from "../_utils/assets/chocolate_ice_cream.png";
import fruit_salad from "../_utils/assets/fruit_salad.png";
import strawberry_ice_cream from "../_utils/assets/strawberry_ice_cream.png";
import fruit_yogurt from "../_utils/assets/fruit_yogurt.png";
import vanilla_milk_shake from "../_utils/assets/vanilla_milk_shake.png";
import chia_seed_pudding from "../_utils/assets/chia_seed_pudding.png";


const productItems = [
  {
    id: 1,
    name: "Apple",
    description: "Fresh red apples, juicy and sweet.",
    mrp: 150,
    sellingPrice: 120,
    image: apple,
    item_quantity: "1 kg",
    category: "Fruits",
  },
  {
    id: 2,
    name: "Carrot",
    description: "Crunchy carrots, rich in vitamins.",
    mrp: 50,
    sellingPrice: 45,
    image: carrot,
    item_quantity: "500gm",
    category: "Vegetables",
  },
  {
    id: 3,
    name: "Bun Pav",
    description: "Soft bun pav, great for snacks.",
    mrp: 30,
    sellingPrice: 25,
    image: bun_pav,
    item_quantity: "6pc",
    category: "Bakery_Products",
  },
  {
    id: 4,
    name: "Milk",
    description: "Fresh milk, perfect for all uses.",
    mrp: 25,
    sellingPrice: 22,
    image: milk,
    item_quantity: "500ml",
    category: "Milk_Juice",
  },
  {
    id: 5,
    name: "Brown Rice",
    description: "Organic brown rice, healthy and nutritious.",
    mrp: 100,
    sellingPrice: 90,
    image: brown_rice,
    item_quantity: "500gm",
    category: "Grains",
  },
  {
    id: 6,
    name: "Chocolate Shake",
    description: "Delicious chocolate-flavored milk shake.",
    mrp: 50,
    sellingPrice: 45,
    image: choco_milk,
    item_quantity: "250ml",
    category: "Milk_Juice",
  },
  {
    id: 7,
    name: "Egg",
    description: "Farm-fresh eggs, ideal for cooking.",
    mrp: 60,
    sellingPrice: 55,
    image: egg,
    item_quantity: "12 pc",
    category: "Chicken_and_Egg",
  },
  {
    id: 8,
    name: "Cream Bun",
    description: "Sweet cream-filled buns, soft and tasty.",
    mrp: 60,
    sellingPrice: 50,
    image: cream_bun,
    item_quantity: "6pc",
    category: "Bakery_Products",
  },
  {
    id: 9,
    name: "Lichi",
    description: "Juicy litchis, a refreshing tropical fruit.",
    mrp: 120,
    sellingPrice: 100,
    image: lichi,
    item_quantity: "1 dozen",
    category: "Fruits",
  },
  {
    id: 10,
    name: "Banana",
    description: "Ripe bananas, perfect for snacking.",
    mrp: 60,
    sellingPrice: 50,
    image: banana,
    item_quantity: "1 dozen",
    category: "Fruits",
  },
  {
    id: 11,
    name: "Brinjal",
    description: "Purple brinjals, ideal for cooking.",
    mrp: 40,
    sellingPrice: 30,
    image: brinjal,
    item_quantity: "1 kg",
    category: "Vegetables",
  },
  {
    id: 12,
    name: "Oats",
    description: "Healthy oats, ideal for breakfast.",
    mrp: 80,
    sellingPrice: 70,
    image: oats,
    item_quantity: "250gm",
    category: "Grains",
  },
  {
    id: 13,
    name: "Orange Juice",
    description: "Refreshing orange juice, rich in vitamin C.",
    mrp: 40,
    sellingPrice: 35,
    image: orange_milk,
    item_quantity: "500ml",
    category: "Milk_Juice",
  },
  {
    id: 14,
    name: "Pastree",
    description: "Delicious pastree, perfect for desserts.",
    mrp: 30,
    sellingPrice: 25,
    image: pastree,
    item_quantity: "1pc",
    category: "Bakery_Products",
  },
  {
    id: 15,
    name: "Slice Pastree",
    description: "Tasty slice of pastree, sweet and creamy.",
    mrp: 20,
    sellingPrice: 15,
    image: slice_pastree,
    item_quantity: "1pc",
    category: "Bakery_Products",
  },
  {
    id: 16,
    name: "Strawberry",
    description: "Fresh strawberries, juicy and sweet.",
    mrp: 150,
    sellingPrice: 130,
    image: strawberry,
    item_quantity: "250gm",
    category: "Fruits",
  },
  {
    id: 17,
    name: "Tomato",
    description: "Ripe tomatoes, perfect for salads and cooking.",
    mrp: 40,
    sellingPrice: 30,
    image: tomato,
    item_quantity: "1kg",
    category: "Vegetables",
  },
  {
    id: 18,
    name: "Wheat",
    description: "Whole wheat grains, nutritious and healthy.",
    mrp: 30,
    sellingPrice: 25,
    image: wheat,
    item_quantity: "500gm",
    category: "Grains",
  },
  {
    id: 19,
    name: "Capsicum",
    description: "Fresh and crunchy capsicum for cooking.",
    mrp: 80,
    sellingPrice: 70,
    image: capcicum,
    item_quantity: "1 kg",
    category: "Vegetables",
  },
  {
    id: 20,
    name: "Corn",
    description: "Fresh corn kernels, perfect for salads.",
    mrp: 40,
    sellingPrice: 35,
    image: corn,
    item_quantity: "250gm",
    category: "Grains",
  },
  {
    id: 21,
    name: "Cauliflower",
    description: "Fresh cauliflower, great for soups.",
    mrp: 50,
    sellingPrice: 45,
    image: cauliflower,
    item_quantity: "1 pc",
    category: "Vegetables",
  },
  {
    id: 22,
    name: "Pineapple Jam",
    description: "Sweet pineapple jam for spreading.",
    mrp: 120,
    sellingPrice: 100,
    image: jam,
    item_quantity: "250gm",
    category: "Bakery_Products",
  },
  {
    id: 23,
    name: "Pineapple",
    description: "Juicy pineapple, perfect for snacks.",
    mrp: 90,
    sellingPrice: 80,
    image: pine_apple,
    item_quantity: "1",
    category: "Fruits",
  },
  {
    id: 24,
    name: "White Gourd",
    description: "Fresh white gourd for soups.",
    mrp: 25,
    sellingPrice: 20,
    image: white_gourd,
    item_quantity: "1",
    category: "Vegetables",
  },
  {
    id: 25,
    name: "Almonds",
    description: "Raw almonds, rich in nutrients.",
    mrp: 500,
    sellingPrice: 450,
    image: almond,
    item_quantity: "250gm",
    category: "Bakery_Products",
  },
  {
    id: 26,
    name: "Peanut Butter",
    description: "Creamy peanut butter, perfect for spreads.",
    mrp: 200,
    sellingPrice: 180,
    image: peanut_butter,
    item_quantity: "500gm",
    category: "Bakery_Products",
  },
  {
    id: 27,
    name: "Honey",
    description: "Pure honey, naturally sweet.",
    mrp: 150,
    sellingPrice: 130,
    image: honey,
    item_quantity: "250gm",
    category: "Bakery_Products",
  },
  {
    id: 28,
    name: "Olive Oil",
    description: "Extra virgin olive oil, great for cooking.",
    mrp: 400,
    sellingPrice: 350,
    image: olive_oil,
    item_quantity: "500ml",
    category: "Grains",
  },
  {
    id: 29,
    name: "Green Tea",
    description: "Healthy green tea, rich in antioxidants.",
    mrp: 120,
    sellingPrice: 100,
    image: green_tea,
    item_quantity: "100gm",
    category: "Milk_Juice",
  },
  {
    id: 30,
    name: "Yogurt",
    description: "Creamy yogurt, perfect for snacks.",
    mrp: 60,
    sellingPrice: 50,
    image: yogurt,
    item_quantity: "250gm",
    category: "Milk_Juice",
  },
  {
    id: 31,
    name: "Salmon",
    description: "Fresh salmon fillets, rich in omega-3.",
    mrp: 800,
    sellingPrice: 750,
    image: salmon,
    item_quantity: "500gm",
    category: "Chicken_and_Egg",
  },
  {
    id: 32,
    name: "Chicken Breast",
    description: "Lean chicken breast, great for grilling.",
    mrp: 300,
    sellingPrice: 280,
    image: chicken_breast,
    item_quantity: "500gm",
    category: "Chicken_and_Egg",
  },
  {
    id: 33,
    name: "Mango",
    description: "Sweet and juicy mangoes, perfect for desserts.",
    mrp: 150,
    sellingPrice: 130,
    image: mango,
    item_quantity: "1kg",
    category: "Fruits",
  },
  {
    id: 34,
    name: "Papaya",
    description: "Fresh papaya, rich in vitamins and antioxidants.",
    mrp: 60,
    sellingPrice: 50,
    image: papaya,
    item_quantity: "1 pc",
    category: "Fruits",
  },
  {
    id: 35,
    name: "Spinach",
    description: "Fresh spinach, rich in iron and nutrients.",
    mrp: 40,
    sellingPrice: 35,
    image: spinach,
    item_quantity: "500gm",
    category: "Vegetables",
  },
  {
    id: 36,
    name: "Broccoli",
    description: "Fresh broccoli, ideal for steaming and salads.",
    mrp: 70,
    sellingPrice: 60,
    image: broccoli,
    item_quantity: "1 pc",
    category: "Vegetables",
  },
  {
    id: 37,
    name: "Onion",
    description: "Fresh onions, great for cooking.",
    mrp: 30,
    sellingPrice: 25,
    image: onion,
    item_quantity: "1 kg",
    category: "Vegetables",
  },
  {
    id: 38,
    name: "Potato",
    description: "Fresh potatoes, versatile for cooking.",
    mrp: 40,
    sellingPrice: 35,
    image: potato,
    item_quantity: "1 kg",
    category: "Vegetables",
  },
  {
    id: 39,
    name: "Garlic",
    description: "Fresh garlic, adds flavor to dishes.",
    mrp: 50,
    sellingPrice: 45,
    image: garlic,
    item_quantity: "250gm",
    category: "Vegetables",
  },
  {
    id: 40,
    name: "Ginger",
    description: "Fresh ginger root, perfect for cooking.",
    mrp: 80,
    sellingPrice: 70,
    image: ginger,
    item_quantity: "250gm",
    category: "Vegetables",
  },
  {
    id: 41,
    name: "Cucumber",
    description: "Fresh cucumbers, great for salads.",
    mrp: 30,
    sellingPrice: 25,
    image: cucumber,
    item_quantity: "500gm",
    category: "Vegetables",
  },
  {
    id: 42,
    name: "Zucchini",
    description: "Fresh zucchini, great for grilling.",
    mrp: 60,
    sellingPrice: 55,
    image: zucchini,
    item_quantity: "500gm",
    category: "Vegetables",
  },
  {
    id: 43,
    name: "Radish",
    description: "Crispy radishes, perfect for salads and garnishing.",
    mrp: 25,
    sellingPrice: 20,
    image: radish,
    item_quantity: "500gm",
    category: "Vegetables",
  },
  {
    id: 44,
    name: "Pumpkin",
    description: "Fresh pumpkins, great for soups and pies.",
    mrp: 70,
    sellingPrice: 60,
    image: pumpkin,
    item_quantity: "1 pc",
    category: "Vegetables",
  },
  {
    id: 45,
    name: "Sweet Corn",
    description: "Fresh sweet corn, ideal for boiling.",
    mrp: 40,
    sellingPrice: 35,
    image: sweet_corn,
    item_quantity: "2 pcs",
    category: "Vegetables",
  },
  {
    id: 46,
    name: "Green Beans",
    description: "Fresh green beans, perfect for cooking.",
    mrp: 50,
    sellingPrice: 45,
    image: green_beans,
    item_quantity: "500gm",
    category: "Vegetables",
  },
  {
    id: 47,
    name: "Lady Finger",
    description: "Fresh okra, ideal for curries.",
    mrp: 40,
    sellingPrice: 35,
    image: okra,
    item_quantity: "500gm",
    category: "Vegetables",
  },
  {
    id: 48,
    name: "Mushroom",
    description: "Fresh mushrooms, great for stir-fry.",
    mrp: 60,
    sellingPrice: 50,
    image: mushroom,
    item_quantity: "250gm",
    category: "Vegetables",
  },
  {
    id: 49,
    name: "Guava",
    description: "Fresh guava, rich in vitamin C.",
    mrp: 80,
    sellingPrice: 70,
    image: guava,
    item_quantity: "1 kg",
    category: "Fruits",
  },
  {
    id: 50,
    name: "Pomegranate",
    description: "Sweet and juicy pomegranates.",
    mrp: 120,
    sellingPrice: 110,
    image: pomegranate,
    item_quantity: "1 pc",
    category: "Fruits",
  },
  {
    id: 51,
    name: "Kiwi",
    description: "Tart and sweet kiwis, great for desserts.",
    mrp: 90,
    sellingPrice: 80,
    image: kiwi,
    item_quantity: "500gm",
    category: "Fruits",
  },
  {
    id: 52,
    name: "Peach",
    description: "Juicy peaches, perfect for snacking.",
    mrp: 70,
    sellingPrice: 60,
    image: peach,
    item_quantity: "1 kg",
    category: "Fruits",
  },
  {
    id: 53,
    name: "Plum",
    description: "Sweet plums, great for desserts.",
    mrp: 90,
    sellingPrice: 80,
    image: plum,
    item_quantity: "500gm",
    category: "Fruits",
  },
  {
    id: 54,
    name: "Apricot",
    description: "Sweet and juicy apricots.",
    mrp: 100,
    sellingPrice: 90,
    image: apricot,
    item_quantity: "500gm",
    category: "Fruits",
  },
  {
    id: 55,
    name: "Raspberry",
    description: "Fresh raspberries, great for desserts.",
    mrp: 150,
    sellingPrice: 140,
    image: raspberry,
    item_quantity: "250gm",
    category: "Fruits",
  },
  {
    id: 56,
    name: "Blackberry",
    description: "Sweet blackberries, ideal for jams.",
    mrp: 140,
    sellingPrice: 130,
    image: blackberry,
    item_quantity: "250gm",
    category: "Fruits",
  },
  {
    id: 57,
    name: "Grapes",
    description: "Fresh and juicy grapes, great for snacking.",
    mrp: 90,
    sellingPrice: 80,
    image: grapes,
    item_quantity: "500gm",
    category: "Fruits",
  },
  {
    id: 58,
    name: "Dragon Fruit",
    description: "Unique dragon fruit, refreshing and tasty.",
    mrp: 200,
    sellingPrice: 180,
    image: dragon_fruit,
    item_quantity: "1 pc",
    category: "Fruits",
  },
  {
    id: 59,
    name: "Cantaloupe",
    description: "Sweet cantaloupe, great for summer.",
    mrp: 110,
    sellingPrice: 100,
    image: cantaloupe,
    item_quantity: "1 pc",
    category: "Fruits",
  },
  {
    id: 60,
    name: "Orange",
    description: "Juicy oranges, ideal for snacking.",
    mrp: 80,
    sellingPrice: 70,
    image: oranges,
    item_quantity: "1 kg",
    category: "Fruits",
  },
  {
    id: 61,
    name: "Chiku",
    description: "Sweet chiku, perfect for health.",
    mrp: 60,
    sellingPrice: 50,
    image: chiku,
    item_quantity: "1 dozen",
    category: "Fruits",
  },
  {
    id: 62,
    name: "Mango Lassi",
    description: "Creamy mango lassi made with yogurt and mangoes.",
    mrp: 65,
    sellingPrice: 55,
    image: mango_lassi,
    item_quantity: "250ml",
    category: "Milk_Juice"
  },
  {
    id: 63,
    name: "Paneer",
    description: "Fresh and soft paneer, ideal for cooking.",
    mrp: 200,
    sellingPrice: 180,
    image: paneer,
    item_quantity: "250gm",
    category: "Milk_Juice"
  },
  {
    id: 64,
    name: "Butter",
    description: "Traditional butter, best with bread.",
    mrp: 40,
    sellingPrice: 35,
    image: butter,
    item_quantity: "500ml",
    category: "Milk_Juice"
  },
  {
    id: 65,
    name: "Chaas",
    description: "Spiced yogurt drink, perfect for cooling down.",
    mrp: 45,
    sellingPrice: 40,
    image: chaas,
    item_quantity: "500ml",
    category: "Milk_Juice"
  },
  {
    id: 66,
    name: "Sweet Lassi",
    description: "Sweet and creamy lassi made with yogurt and a touch of cardamom.",
    mrp: 55,
    sellingPrice: 50,
    image: sweet_lassi,
    item_quantity: "250ml",
    category: "Milk_Juice"
  },
  {
    id: 67,
    name: "Falooda",
    description: "Delicious and refreshing falooda with layers of vermicelli, basil seeds, and rose syrup, topped with a scoop of ice cream.",
    mrp: 90,
    sellingPrice: 80,
    image: falooda,
    item_quantity: "500ml",
    category: "Milk_Juice"
  },  
  {
    id: 68,
    name: "Badam Milk",
    description: "Rich and creamy almond milk with a hint of saffron.",
    mrp: 70,
    sellingPrice: 60,
    image: badam_milk,
    item_quantity: "250ml",
    category: "Milk_Juice"
  },
  {
    id: 69,
    name: "Chocolate Milk",
    description: "Delicious chocolate-flavored milk, perfect for kids.",
    mrp: 50,
    sellingPrice: 45,
    image: chocolate_milk_2,
    item_quantity: "500ml",
    category: "Milk_Juice"
  },
  {
    id: 70,
    name: "Vanilla Ice Cream",
    description: "Classic vanilla ice cream, creamy and smooth with a rich vanilla flavor.",
    mrp: 80,
    sellingPrice: 70,
    image: vanilla_ice_cream,
    item_quantity: "500ml",
    category: "Milk_Juice"
  },
  {
    id: 71,
    name: "Chocolate Ice Cream",
    description: "Rich and creamy chocolate ice cream with a deep cocoa flavor.",
    mrp: 90,
    sellingPrice: 80,
    image: chocolate_ice_cream,
    item_quantity: "500ml",
    category: "Milk_Juice"
  },
  {
    id: 72,
    name: "Fruit Yogurt",
    description: "Yogurt with mixed fruit flavors.",
    mrp: 55,
    sellingPrice: 50,
    image: fruit_yogurt,
    item_quantity: "200gm",
    category: "Milk_Juice"
  },
  {
    id: 73,
    name: "Vanilla Milkshake",
    description: "Creamy vanilla milkshake, a classic favorite.",
    mrp: 65,
    sellingPrice: 55,
    image: vanilla_milk_shake,
    item_quantity: "250ml",
    category: "Milk_Juice"
  },
  {
    id: 74,
    name: "Strawberry Ice Cream",
    description: "Fresh and fruity strawberry ice cream with a natural berry taste.",
    mrp: 85,
    sellingPrice: 75,
    image: strawberry_ice_cream,
    item_quantity: "500ml",
    category: "Milk_Juice"
  },
  {
    id: 75,
    name: "Fruit Salad",
    description: "A refreshing mix of seasonal fruits, tossed in a light honey and lemon dressing.",
    mrp: 100,
    sellingPrice: 90,
    image: fruit_salad,
    item_quantity: "500gm",
    category: "Milk_Juice"
  },
  {
    id: 76,
    name: "Chia Seed Pudding",
    description: "Creamy chia seed pudding made with milk and topped with fruits.",
    mrp: 70,
    sellingPrice: 60,
    image: chia_seed_pudding,
    item_quantity: "200gm",
    category: "Milk_Juice"
  }
];

export default productItems;
