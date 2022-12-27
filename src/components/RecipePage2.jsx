import React from "react";
import FoodRecipe from "./FoodRecipe";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const RecipePage2 = (props) => {
  const [inputValue, setInputValue] = useState(100);

  const data = [
    {
      key: "1",
      in: 20,
      name: "Βοδινό:",
      end: "κιλά",
    },
    {
      key: "2",
      in: 400,
      name: "Αλεύρι",
      end: "γραμ.",
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
      in: 2.5,
      name: "Κρεμμύδια:",
      end: "κιλά",
    },
    {
      key: "7",
      in: 1,
      name: "Τοματοπολτός:",
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
      name: "",
      end: "",
    },
    {
      key: "10",
      in: "",
      name: "",
      end: "",
    },
    {
      key: "11",
      foodname: "ΚΡΕΑΣ ΚΟΚΚΙΝΙΣΤΟ",
    },
    {
      key: "12",
      img: "https://paxxi.gr/wp-content/uploads/2020/01/moshari-kokkinisto.jpg",
    },
    {
      key: "13",
      description:
        "Κόβετε το κρέας σε μερίδες. Το πλένετε και το βάζετε σε τρυπητό να στραγγίσει. Κατόπιν κόβετε ψιλό κρεμμύδι και το τσιγαρίζετε με λάδι.Ρίχνετε και το κρέας να τσιγαρισθεί και μόλις πάρει χρώμα το πασπαλίζετε με το αλεύρι, ρίχνετε τον τοματοπολτό αραιωμένο με νερό να σκεπαστεί το κρέας,προσθέτετε ανάλογο αλάτι, πιπέρι, κανέλα ξυλάκι και το αφήνετε να βράσει ανακατεύοντας κάπου, κάπου. Εάν χρειασθεί προσθέτετε ζεστό νερό.Το κοκκινιστό κρέας σερβίρεται με μακαρόνια βουτύρου, ρύζι πιλάφι, πατάτες πουρέ, πατάτες τηγανιτές",
    },
    {
      key: "14",
      extrainfo: "Το κοκκινιστό κρέας πρέπει να βγεί με λίγα νερά.",
    },
    {
      key: "15",
      extrainfo:
        "Το κρέας, εάν θέλουμε, προτου το μαγειρέψουμε, μπορούμε να το βάλουμε σε κατσαρόλα με το νερό να πάρει μια βράση όταν πάρει την πρώτη βράση το ξαφρίζουμε και μετά το μαγειρεύουμε χρησιμοποιώντας τα υγρά του στο φαγητό αντί για νερό",
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

export default RecipePage2;
