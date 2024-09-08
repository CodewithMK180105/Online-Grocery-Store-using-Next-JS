import apple from '../_utils/assets/apple.png';
import banana from '../_utils/assets/banana.png';
import brinjal from '../_utils/assets/brinjal.png';
import brown_rice from '../_utils/assets/brown-rice.png';
import bun_pav from '../_utils/assets/bun-pav.png';
import carrot from '../_utils/assets/carrot.png';
import choco_milk from '../_utils/assets/chocolate-milk.png';
import corn from '../_utils/assets/corn.png';
import cream_bun from '../_utils/assets/cream-bun.png';
import lichi from '../_utils/assets/lichi.png';
import milk from '../_utils/assets/milk.png';
import oats from '../_utils/assets/oats.png';
import orange_milk from '../_utils/assets/orange-mik.png';
import pastree from '../_utils/assets/pastree.png';
import slice_pastree from '../_utils/assets/slice-pastree.png';
import strawberry from '../_utils/assets/strawberry.png';
import tomato from '../_utils/assets/tomato.png';
import wheat from '../_utils/assets/wheat.png';
import white_gourd from '../_utils/assets/white-gourd.png';
import egg from '../_utils/assets/Eggs.png';
import capcicum from '../_utils/assets/capcicum.png';
import jam from '../_utils/assets/Jam.png';
import pine_apple from '../_utils/assets/Pine-apple.png';
import cauliflower from '../_utils/assets/cauliflower.png';
import almond from '../_utils/assets/almond.png';
import peanut_butter from '../_utils/assets/peanut-butter.png';
import honey from '../_utils/assets/honey.png';
import olive_oil from '../_utils/assets/olive-oil.png';
import green_tea from '../_utils/assets/green-tea.png';
import yogurt from '../_utils/assets/yogurt.png';
import salmon from '../_utils/assets/salmon.png';
import chicken_breast from '../_utils/assets/chicken-breast.png';
import mango from '../_utils/assets/mango.png';
import papaya from '../_utils/assets/Papaya.png';
import spinach from '../_utils/assets/spinach.png';
import broccoli from '../_utils/assets/broccoli.png';

const productItems = [
  {
    id: 1,
    name: 'Apple',
    description: 'Fresh red apples, juicy and sweet.',
    mrp: 150,
    sellingPrice: 120,
    image: apple,
    item_quantity: "1 kg",
    category: 'Fruits'
  },
  {
    id: 2,
    name: 'Carrot',
    description: 'Crunchy carrots, rich in vitamins.',
    mrp: 50,
    sellingPrice: 45,
    image: carrot,
    item_quantity: '500gm',
    category: 'Vegetables'
  },
  {
    id: 3,
    name: 'Bun Pav',
    description: 'Soft bun pav, great for snacks.',
    mrp: 30,
    sellingPrice: 25,
    image: bun_pav,
    item_quantity: '6pc',
    category: 'Bakery_Products'
  },
  {
    id: 4,
    name: 'Milk',
    description: 'Fresh milk, perfect for all uses.',
    mrp: 25,
    sellingPrice: 22,
    image: milk,
    item_quantity: "500ml",
    category: 'Milk_Juice'
  },
  {
    id: 5,
    name: 'Brown Rice',
    description: 'Organic brown rice, healthy and nutritious.',
    mrp: 100,
    sellingPrice: 90,
    image: brown_rice,
    item_quantity: '500gm',
    category: 'Grains'
  },
  {
    id: 6,
    name: 'Chocolate Shake',
    description: 'Delicious chocolate-flavored milk shake.',
    mrp: 50,
    sellingPrice: 45,
    image: choco_milk,
    item_quantity: '250ml',
    category: 'Milk_Juice'
  },
  {
    id: 7,
    name: 'Egg',
    description: 'Farm-fresh eggs, ideal for cooking.',
    mrp: 60,
    sellingPrice: 55,
    image: egg,
    item_quantity: "12 pc",
    category: 'Chicken_and_Egg'
  },
  {
    id: 8,
    name: 'Cream Bun',
    description: 'Sweet cream-filled buns, soft and tasty.',
    mrp: 60,
    sellingPrice: 50,
    image: cream_bun,
    item_quantity: '6pc',
    category: 'Bakery_Products'
  },
  {
    id: 9,
    name: 'Lichi',
    description: 'Juicy litchis, a refreshing tropical fruit.',
    mrp: 120,
    sellingPrice: 100,
    image: lichi,
    item_quantity: "1 dozen",
    category: 'Fruits'
  },
  {
    id: 10,
    name: 'Banana',
    description: 'Ripe bananas, perfect for snacking.',
    mrp: 60,
    sellingPrice: 50,
    image: banana,
    item_quantity: "1 dozen",
    category: 'Fruits'
  },
  {
    id: 11,
    name: 'Brinjal',
    description: 'Purple brinjals, ideal for cooking.',
    mrp: 40,
    sellingPrice: 30,
    image: brinjal,
    item_quantity: '1 kg',
    category: 'Vegetables'
  },
  {
    id: 12,
    name: 'Oats',
    description: 'Healthy oats, ideal for breakfast.',
    mrp: 80,
    sellingPrice: 70,
    image: oats,
    item_quantity: "250gm",
    category: 'Grains'
  },
  {
    id: 13,
    name: 'Orange Juice',
    description: 'Refreshing orange juice, rich in vitamin C.',
    mrp: 40,
    sellingPrice: 35,
    image: orange_milk,
    item_quantity: "500ml",
    category: 'Milk_Juice'
  },
  {
    id: 14,
    name: 'Pastree',
    description: 'Delicious pastree, perfect for desserts.',
    mrp: 30,
    sellingPrice: 25,
    image: pastree,
    item_quantity: "1pc",
    category: 'Bakery_Products'
  },
  {
    id: 15,
    name: 'Slice Pastree',
    description: 'Tasty slice of pastree, sweet and creamy.',
    mrp: 20,
    sellingPrice: 15,
    image: slice_pastree,
    item_quantity: "1pc",
    category: 'Bakery_Products'
  },
  {
    id: 16,
    name: 'Strawberry',
    description: 'Fresh strawberries, juicy and sweet.',
    mrp: 150,
    sellingPrice: 130,
    image: strawberry,
    item_quantity: "250gm",
    category: 'Fruits'
  },
  {
    id: 17,
    name: 'Tomato',
    description: 'Ripe tomatoes, perfect for salads and cooking.',
    mrp: 40,
    sellingPrice: 30,
    image: tomato,
    item_quantity: "1kg",
    category: 'Vegetables'
  },
  {
    id: 18,
    name: 'Wheat',
    description: 'Whole wheat grains, nutritious and healthy.',
    mrp: 30,
    sellingPrice: 25,
    image: wheat,
    item_quantity: "500gm",
    category: 'Grains'
  },
  {
    id: 19,
    name: 'Capsicum',
    description: 'Fresh and crunchy capsicum for cooking.',
    mrp: 80,
    sellingPrice: 70,
    image: capcicum,
    item_quantity: "1 kg",
    category: 'Vegetables'
  },
  {
    id: 20,
    name: 'Corn',
    description: 'Fresh corn kernels, perfect for salads.',
    mrp: 40,
    sellingPrice: 35,
    image: corn,
    item_quantity: '250gm',
    category: 'Grains'
  },
  {
    id: 21,
    name: 'Cauliflower',
    description: 'Fresh cauliflower, great for soups.',
    mrp: 50,
    sellingPrice: 45,
    image: cauliflower,
    item_quantity: "1 pc",
    category: 'Vegetables'
  },
  {
    id: 22,
    name: 'Pineapple Jam',
    description: 'Sweet pineapple jam for spreading.',
    mrp: 120,
    sellingPrice: 100,
    image: jam,
    item_quantity: "250gm",
    category: 'Bakery_Products'
  },
  {
    id: 23,
    name: 'Pineapple',
    description: 'Juicy pineapple, perfect for snacks.',
    mrp: 90,
    sellingPrice: 80,
    image: pine_apple,
    item_quantity: "1",
    category: 'Fruits'
  },
  {
    id: 24,
    name: 'White Gourd',
    description: 'Fresh white gourd for soups.',
    mrp: 25,
    sellingPrice: 20,
    image: white_gourd,
    item_quantity: "1",
    category: 'Vegetables'
  },
  {
    id: 25,
    name: 'Almonds',
    description: 'Raw almonds, rich in nutrients.',
    mrp: 500,
    sellingPrice: 450,
    image: almond,
    item_quantity: '250gm',
    category: 'Bakery_Products'
  },
  {
    id: 26,
    name: 'Peanut Butter',
    description: 'Creamy peanut butter, perfect for spreads.',
    mrp: 200,
    sellingPrice: 180,
    image: peanut_butter,
    item_quantity: '500gm',
    category: 'Bakery_Products'
  },
  {
    id: 27,
    name: 'Honey',
    description: 'Pure honey, naturally sweet.',
    mrp: 150,
    sellingPrice: 130,
    image: honey,
    item_quantity: '250gm',
    category: 'Bakery_Products'
  },
  {
    id: 28,
    name: 'Olive Oil',
    description: 'Extra virgin olive oil, great for cooking.',
    mrp: 400,
    sellingPrice: 350,
    image: olive_oil,
    item_quantity: '500ml',
    category: 'Grains'
  },
  {
    id: 29,
    name: 'Green Tea',
    description: 'Healthy green tea, rich in antioxidants.',
    mrp: 120,
    sellingPrice: 100,
    image: green_tea,
    item_quantity: '100gm',
    category: 'Milk_Juice'
  },
  {
    id: 30,
    name: 'Yogurt',
    description: 'Creamy yogurt, perfect for snacks.',
    mrp: 60,
    sellingPrice: 50,
    image: yogurt,
    item_quantity: '250gm',
    category: 'Milk_Juice'
  },
  {
    id: 31,
    name: 'Salmon',
    description: 'Fresh salmon fillets, rich in omega-3.',
    mrp: 800,
    sellingPrice: 750,
    image: salmon,
    item_quantity: '500gm',
    category: 'Chicken_and_Egg'
  },
  {
    id: 32,
    name: 'Chicken Breast',
    description: 'Lean chicken breast, great for grilling.',
    mrp: 300,
    sellingPrice: 280,
    image: chicken_breast,
    item_quantity: '500gm',
    category: 'Chicken_and_Egg'
  },
  {
    id: 33,
    name: 'Mango',
    description: 'Sweet and juicy mangoes, perfect for desserts.',
    mrp: 150,
    sellingPrice: 130,
    image: mango,
    item_quantity: '1kg',
    category: 'Fruits'
  },
  {
    id: 34,
    name: 'Papaya',
    description: 'Fresh papaya, rich in vitamins and antioxidants.',
    mrp: 60,
    sellingPrice: 50,
    image: papaya,
    item_quantity: '1 pc',
    category: 'Fruits'
  },
  {
    id: 35,
    name: 'Spinach',
    description: 'Fresh spinach, rich in iron and nutrients.',
    mrp: 40,
    sellingPrice: 35,
    image: spinach,
    item_quantity: '500gm',
    category: 'Vegetables'
  },
  {
    id: 36,
    name: 'Broccoli',
    description: 'Fresh broccoli, ideal for steaming and salads.',
    mrp: 70,
    sellingPrice: 60,
    image: broccoli,
    item_quantity: '1 pc',
    category: 'Vegetables'
  },
  // Add more vegetables like Peas, Ginger, Garlic, etc.
  
  
];

export default productItems;
