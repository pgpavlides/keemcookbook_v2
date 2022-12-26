import React from "react";
import FoodRecipe from "./FoodRecipe";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const RecipePage4 = (props) => {

 
  const [inputValue, setInputValue] = useState(100); 

  const data = [  

    {
      key:"1",
      in:23,
      name:"Χοιρινό:",
      end:"κιλά" 
    },
    {
      key:"2",
      in:25,
      name:"Σέλινο:",
      end:"κιλά" 
    },
    {
      key:"3",
      in:3,
      name:"Λάδι:",
      end:"κιλά" 
    },
    {
      key:"4",
      in:2.5,
      name:"Κρεμμύδια:",
      end:"κιλά" 
    },
    {
      key:"5",
      in:30,
      name:"Αυγά:",
      end:"τεμάχια" 
    },
    {
      key:"6",
      in:3,
      name:"Χυμός Λεμόνι:",
      end:"φιάλες" 
    },
    {
      key:"7",
      in:"",
      name:"Αλάτι",
      end:"" 
    },
    {
      key:"8",
      in:"",
      name:"Πιπέρι",
      end:"" 
    },
    {
      key:"9",
      in:"",
      name:"",
      end:"" 
    },
    {
      key:"10",
      in:"",
      name:"",
      end:"" 
    },
    
  ]

const foodname = "ΧΟΙΡΙΝΟ ΜΕ ΣΕΛΙΝΟ ΑΥΓΟΛΕΜΟΝΟ"
const img = "https://caruso.gr/wp-content/uploads/2020/10/Xoirino-prasoselino_201012_0305.jpg"
const description = "Κόβετε το χοιρινό σε μερίδες, το πλένετε και το στραγγίζετε. Βάζετε στην κατσαρόλα σας το λάδι. Αφού κάψει ελαφρά, ρίχνετε το κρέας και τα ψιλοκομμένα κρεμμύδια και τα αχνίζετε. Προσθέτετε νερό και το αφήνετε να βράσει ρίχνοντασ αλάτι και πιπέρι. Καθαρίζετε τα σέλινα αφαιρώντας τις ρίζες, τα κόβετε και τα πλένετε καλά. Βάζετε νερό σε μια κατσαρόλα και αφού κάψει, ρίχνετε τα σέλινα και τα ζεματάτε για 4-5 λεπτά. Τα στραγγίζετε και κατόπιν τα ρίχνετε στο χοιρινό που εν τω μεταξύ έχει βράσει. Εάν η ποσότητα του κρέατος είναι μεγάλη, αφαιρείτε το κρέας και ρίχνετε τα σέλινα και τα ζεματάτε για 4-5 λεπτά."
const extrainfo = "Όταν περασουμε τα κρεμμύδια ελαφρώς από το καυτό λάδι, πρέπει να τα βάλουμε σε ένα σουρωτήρι να στραγγίσουν από τα λάδια. Το φαγητό πρέπει να βγεί με λίγα υγρά. Στιφάδο μπρούμε να φτιάξουμε και με κοτόπουλο ή λαγό ή κουνέλι."
  
 
  return (
    <div>
      <FoodRecipe
        setInputValue={setInputValue}  
        inputValue={inputValue}
        name={foodname}
        img={img}
        data={data}
        description={description}
        extrainfo={extrainfo}
      />
    </div>
  );
};

export default RecipePage4;
