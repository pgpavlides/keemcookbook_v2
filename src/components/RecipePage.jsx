import React from "react";
import FoodRecipe from "./FoodRecipe";
import { useState, useEffect } from "react";


const RecipePage = (data) => {



  
 
  return (
    <div>
      <FoodRecipe
        
        
        name="ΧΟΙΡΙΝΟ ΜΕ ΠΑΤΑΤΕΣ ΦΟΥΡΝΟΥ"
        img="https://www.giorgostsoulis.com/media/k2/items/cache/68b62085e41e8f225811766f8d5eb2bb_L.jpg"

        in1={23}
        in1name={" Χοιρινό: " } 
        in1end=" κιλά "

        in2={25}
        in2name=" Πατάτες:"
        in2end=" κιλά"

        in3={2}
        in3name=" Λάδι:"
        in3end=" κιλά"

        in4=""
        in4name=" Αλάτι"
        in4end=""

        in5=""
        in5name=" Πιπέρι"
        in5end=""

        in6=""
        in6name=" Χυμός Λεμόνι: 4-5 φιάλες"
        in6end=""

        in7=""
        in7name=" EXTRA: Κάρυ Σκόνι"
        in7end=""

        in8=""
        in8name=" EXTRA: Μουστάρδα Σκόνη/Πάστα"
        in8end=""

        in9=""
        in9name=" EXTRA: Ντομάτα"
        in9end=""

        in10=""
        in10name="EXTRA: Ακρίδες"
        in10end=""


        description="Κόβετε το χοιρινό σε μερίδες. Το πλένετε και το στραγγίζετε. Καθαρίζετε τις πατάτες τις πλένετε και τις κόβετε
          μακρόστενες κυδωνάτες. Βάζετε σε λαμαρίνες το χοιρινό και τις πατάτες, τους ρίχνετε το λάδι, αλάτι, πιπέρι, ρίγανη, χυμό λεμόνι
          και με καθαρά χέρια τις ανακατεύετε. Από μια γωνία της λαμαρίνας ρίχνετε λίγο νερό, 1/4 στο ύψος της λαμαρίνας και βάζετε
          τις λαμαρίνες στο φούρνο να ψυθούν σε θερμοκρασία 200 βαθμούς. Το κρέας το γυρίζουμε και από τις 2 πλευρές για να πάρει χρώμα και να
          ψηθεί"
        extrainfo="Το χοιρινό ψητό με πατάτες φούρνου πρέπει, οταν ψηθεί, να είναι με πολύ λίγα υργά. 
              Μπορούμε να ψήσουμε χωριστά το κρέας απο τις πατάτες και τα υγρά από το ψημένο κρέας να τα χρησημοποιήσουμε στις πατάτες και 
              συμπληρώνουμε εάν χρειάζεται λίγο νερό.
              Εάν δεν έχουμε υγρά απο το ψημένο κρέας, χρησιμοποιούμε στις πατάτες κύβους ζωμού από χοιρινό"
      />
    </div>
  );
};

export default RecipePage;
