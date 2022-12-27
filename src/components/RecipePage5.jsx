import React from "react";
import FoodRecipe from "./FoodRecipe";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const RecipePage5 = (props) => {

 
  const [inputValue, setInputValue] = useState(100); 

  const data = [  

    {
      key:"1",
      in:23,
      name:"Χοιρινό (χωρίς κόκκαλο):",
      end:"κιλά" 
    },
    {
      key:"2",
      in:2.5,
      name:"Κρεμμύδια:",
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
      in:4,
      name:"Σκόρδα:",
      end:"κεφάλια" 
    },    
    {
      key:"5",
      in:1,
      name:"Κρασί:",
      end:"λίτρο" 
    },
    {
      key:"6",
      in:"",
      name:"Αλάτι",
      end:"" 
    },
    {
      key:"7",
      in:"",
      name:"Πιπέρι",
      end:"" 
    },
    {
      key:"8",
      in:"",
      name:"Μουστάρδα",
      end:"" 
    },
    {
      key:"9",
      in:"",
      name:"Ρίγανη",
      end:"" 
    },
    {
      key:"10",
      in:"",
      name:"Φύλλο Δάφνης",
      end:"" 
    },
    {
      key:"11",
      foodname:"ΧΟΙΡΙΝΟ ΤΗΓΑΝΙΑ",
    },
    {
      key:"12",
      img:"https://www.sintayes.gr/wp-content/uploads/2018/03/Capture8-584x350.jpg",
    },
    {
      key:"13",
      description:"Κόβετε το χοιρινό σε κυβάκια, το πλένετε και το στραγγίζετε. Βάζετε σε ένα σκεύος λάδι να κάψει και σωτάρετε το χοιρινό. Αφού θωρακιστεί, ψιλοκόβετε τα κρεμμύδια και τα σκόρδα και τα τσιγαρίζετε. Σβήνουυμε με κρασί και όταν εξατμιστεί, προσθέτετε την μουστάρδα αραιωμένη με λίγο νερό. Τέλος ρίχνετε αλάτι, πιπέρι, ρίγανη, φύλλο δάφνης και το αφήνετε να βράσει για λίγο. Το ψήνετε σε προθερμασμένο φούρνο στους 200 βαθμούς πάνω κάτω μέχρι να πιεί όλα τα υγρά και να ροδίσει.",
    },
    {
      key:"14",
      extrainfo:"Αν θέλετε στο τέλος προσθέτε λίγο χυμό λεμόνι.",
    },
    {
      key:"15",
      extrainfo:"Αν θέλετε προσθέτετε και πιπεριές ψιλοκομμένες όταν το βάλουμε στο φούρνο.",
    },
    {
      key:"16",
      extrainfo:"Η τηγανιά σερβίρεται με πατάτες τηγανητές ή ρύζι λευκό",
    },
        
  ]

  return (
    <div>
      <FoodRecipe
        setInputValue={setInputValue}  
        inputValue={inputValue}              
        data={data}       
      />
    </div>
  );
};

export default RecipePage5;
