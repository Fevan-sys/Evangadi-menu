  import React, { Component } from 'react'
  import SingleFood from './SingleFood'
 import menus from "../assets/data/"

class Foods extends Component {
  render() {
    return (
      <>

<div class="foods-container">

{
  menus.map(
    function(menu){
      return <SingleFood img={menu.img} title={menu.title} price={menu.price} desc={menu.desc} link ={menu.link} />
    }

  )
}


</div>





 
        {/* <SingleFood img="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
          price="$5.99"
          desc="Timatim Salata refers to a type of fresh Ethiopian tomato salad that’s also popular in Eritrea. It’s made with diced tomatoes, minced onions, and finely chopped peppers dressed with a mixture of berbere spices, olive oil, vinegar, and lemon juice."
        /> */}

        {/* <SingleFood img="https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280"
          title="TIBS (ጥብስ)"
          price="$22.99,"
          desc="Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is one of the most popular dishes among Ethiopians. It comes in a variety of forms, varying in type, size or shape of the cuts of meat used, and can range from hot to mild or contain little to no vegetables. A particularly recommended variation is shekla tibs, in which the strips of meat arrive at your table roasting atop a clay pot stoked with hot coals – dramatic and delicious."
        />
       */}
    

  {/* <SingleFood img="https://cdn.tasteatlas.com//images/dishes/d64fe1f3c3754340bfbc7e20510110ef.jpg?w=905&h=510"
    price="$20.99"
    title="GENFO (ገንፎ)"
    desc="Genfo is a simple Ethiopian porridge that is commonly consumed for breakfast, made by adding dry-roasted barley flour to boiling water and stirring the concoction with a wooden utensil until it develops a smooth, yet extremely thick consistency."
  /> */}


 {/* <SingleFood img=  "https://cdn.tasteatlas.com//images/dishes/5746f1c174664a01990eb04377c9228a.jpg?w=905&h=510"

 title="KINCHE (ቂንጬ)"
 price="$7.99"
 desc="Simple, nutritious, and inexpensive, kinche is an Ethiopian breakfast staple made with cracked wheat that is boiled in either water or milk. The best way to describe kinche would be as the Ethiopian equivalent of oatmeal. After it has been cooked, kinche is added to the pan with either clarified spiced butter known as niter qibe or with oil and fried onions, although kinche can also be consumed without any flavorings."
 />  */}



 {/* <SingleFood img= "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp"

 title="KITFO (ክትፎ)"
 price="$25.99"
 desc="Made from the leanest meat, kitfo is viewed as a big treat by ordinary Ethiopians, while its nutritional powers are also praised. Similar to French steak tartare, the meat is minced and warmed in a pan with a little butter, mitmita (a stronger version of berbere) and sometimes thyme. Kitfo is typically"
 /> */}


 {/* <SingleFood img= "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kik-alicha.jpg.webp"

     title="KIK ALICHA (ክክ አልጫ)"
     price="$12.99"
    desc="If you don’t have a high tolerance for spicy food, then you’re going to be thankful for kik alicha. It refers to an Ethiopian lentil stew made from split peas, niter kibbeh, and turmeric. Unlike many of the dishes in this Ethiopian food guide, it isn’t made with any berbere so it isn’t nearly as spicy as dishes like doro wat and siga wat.Kik alicha is a mildly flavored stew made with yellow split peas simmered with garlic, onions, ginger, turmeric, and niter kibbeh. It’s a popular type of vegetarian stew that’s often served as part of a combination platter. Like any wat, it’s best enjoyed with injera."
    /> */}


      {/* <SingleFood img= "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo-gored.jpg.webp"

     title="GORED GORED (ጎረድ ጎረድ)"
     price="$28.99"
     desc="If kitfo piqued your interest, then you may want to try gored gored as well. It’s a similar dish to kitfo except it’s made with cubes of raw beef – usually tenderloin or round steak – seasoned with niter kibbeh, mitmita, berbere, and awaze (chili mustard sauce). Like kitfo, it’s usually served with injera."
     />  */}



      {/* <SingleFood img= "https://cdn.tasteatlas.com//images/dishes/f99dcc3dfcc642348a40b19f51f32b74.jpg?w=905&h=510"

     title="FATIRA (ፈጢራ)"
     price="$18.99"
     desc="Fatira is a traditional Ethiopian flatbread that’s made with flour, water, and salt. It’s usually served as a breakfast dish and can be enjoyed plain or with various toppings such as honey, sugar, or jam. Fatira is often served with a side of tea or coffee and is a popular choice for those looking for a quick and easy meal."
     />  */}


 {/* <SingleFood img= "https://cdn.tasteatlas.com//images/dishes/685b5e5b70b441a7a4e7279a43a89333.jpg?w=905&h=510"

 title="KIXA FIR-FIR (ቂጣ ፍር ፍር)"
 price="$15.99"
 desc="Kixa fir-fir is a traditional Ethiopian dish made with shredded injera, which is a type of sourdough flatbread. The injera is typically mixed with a variety of spices and vegetables, such as onions, tomatoes, and peppers, to create a flavorful and hearty meal. Kixa fir-fir is often served as a breakfast dish or as a light lunch or dinner option."
 />  */}


       </>
       );
     }
   }
  
   export default Foods;
