import React from "react";
import FoodRecipe from "./FoodRecipe";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const RecipePage = (props) => {
  const [inputValue, setInputValue] = useState(100);

  const data = [
    {
      key: "1",
      in: 23,
      name: "Χοιρινό:",
      end: "κιλά",
    },
    {
      key: "2",
      in: 25,
      name: "Πατάτες:",
      end: "κιλά",
    },
    {
      key: "3",
      in: 2,
      name: "Λάδι:",
      end: "κιλά",
    },
    {
      key: "4",
      in: "",
      name: "Αλάτι",
      end: "",
    },
    {
      key: "5",
      in: "",
      name: "Πιπέρι",
      end: "",
    },
    {
      key: "6",
      in: "",
      name: "Χυμός Λεμόνι: 4-5 φιάλες",
      end: "",
    },
    {
      key: "7",
      in: "",
      name: "EXTRA: Κάρυ Σκόνι",
      end: "",
    },
    {
      key: "8",
      in: "",
      name: "EXTRA: Μουστάρδα Σκόνη/Πάστα",
      end: "",
    },
    {
      key: "9",
      in: "",
      name: "EXTRA: Μουστάρδα Σκόνη/Πάστα",
      end: "",
    },
    {
      key: "10",
      in: "",
      name: "EXTRA: Ντομάτα",
      end: "",
    },
    {
      key: "11",
      foodname: "ΧΟΙΡΙΝΟ ΜΕ ΠΑΤΑΤΕΣ ΦΟΥΡΝΟΥ",
    },
    {
      key: "12",
      img: "https://www.giorgostsoulis.com/media/k2/items/cache/68b62085e41e8f225811766f8d5eb2bb_L.jpg",
    },
    {
      key: "13",
      description:
        "Κόβετε το χοιρινό σε μερίδες Το πλένετε και το στραγγίζετε. Καθαρίζετε τις πατάτες τις πλένετε και τις κόβετε μακρόστενες κυδωνάτες. Βάζετε σε λαμαρίνες το χοιρινό και τις πατάτες, τους ρίχνετε το λάδι, αλάτι, πιπέρι, ρίγανη, χυμό λεμόνι και με καθαρά χέρια τις ανακατεύετε. Από μια γωνία της λαμαρίνας ρίχνετε λίγο νερό, 1/4 στο ύψος της λαμαρίνας και βάζετε τις λαμαρίνες στο φούρνο να ψυθούν σε θερμοκρασία 200 βαθμούς. Το κρέας το γυρίζουμε και από τις 2 πλευρές για να πάρει χρώμα και να ψηθεί",
    },
    {
      key: "14",
      extrainfo:
        "Το χοιρινό ψητό με πατάτες φούρνου πρέπει, οταν ψηθεί, να είναι με πολύ λίγα υργά.",
    },
    {
      key: "15",
      extrainfo:
        "Μπορούμε να ψήσουμε χωριστά το κρέας απο τις πατάτες και τα υγρά από το ψημένο κρέας να τα χρησημοποιήσουμε στις πατάτες και συμπληρώνουμε εάν χρειάζεται λίγο νερό. Εάν δεν έχουμε υγρά απο το ψημένο κρέας, χρησιμοποιούμε στις πατάτες κύβους ζωμού από χοιρινό",
    },
  ];

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

export default RecipePage;
