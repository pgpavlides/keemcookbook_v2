import Card from "./Card";
import "./Recipes.css";

export default function Recipes() {
  const data = [
    {
      index: 0,
      foodname: "ΧΟΙΡΙΝΟ ΜΕ ΠΑΤΑΤΕΣ ΦΟΥΡΝΟΥ",
      linkref: "/recipespage",
      img: "https://www.giorgostsoulis.com/media/k2/items/cache/68b62085e41e8f225811766f8d5eb2bb_L.jpg",
    },
    {
      index: 1,
      foodname: "ΚΡΕΑΣ ΚΟΚΚΙΝΙΣΤΟ",
      linkref: "/recipespage2",
      img: "https://paxxi.gr/wp-content/uploads/2020/01/moshari-kokkinisto.jpg",
    },
    {
      index: 2,
      foodname: "ΚΡΕΑΣ ΒΟΔΙΝΟ ΣΤΙΦΑΔΟ",
      linkref: "/recipespage3",
      img: "https://www.tastycooking.gr/wp-content/uploads/2016/11/mosxari-stifado-syntagi.jpg",
    },
    {
      index: 3,
      foodname: "ΧΟΙΡΙΝΟ ΜΕ ΣΕΛΙΝΟ ΑΥΓΟΛΕΜΟΝΟ",
      linkref: "/recipespage4",
      img: "https://caruso.gr/wp-content/uploads/2020/10/Xoirino-prasoselino_201012_0305.jpg",
    },
    {
      index: 4,
      foodname: "ΧΟΙΡΙΝΟ ΜΕ ΣΕΛΙΝΟ ΑΥΓΟΛΕΜΟΝΟ",
      linkref: "/recipespage5",
      img: "https://caruso.gr/wp-content/uploads/2020/10/Xoirino-prasoselino_201012_0305.jpg",
    },
    {
      index: 5,
      foodname: "ΧΟΙΡΙΝΟ ΤΗΓΑΝΙΑ",
      linkref: "/recipespage6",
      img: "https://www.sintayes.gr/wp-content/uploads/2018/03/Capture8-584x350.jpg",
    },
    {
      index: 6,
      foodname: "ΜΟΣΧΑΡΙ ΤΑΣ ΚΕΜΠΑΠ",
      linkref: "/recipespage7",
      img: "https://www.sintayes.gr/wp-content/uploads/2014/09/3242.jpg",
    },
    {
      index: 7,
      foodname: "ΚΟΤΟΠΟΥΛΟ ΚΟΚΚΙΝΙΣΤΟ",
      linkref: "/recipespage8",
      img: "https://www.sintayes.gr/wp-content/uploads/2014/04/Chicken-Bouillabaisse1-638x350.jpg",
    },
    {
      index: 8,
      foodname: "ΚΟΤΟΠΟΥΛΟ ΚΟΚΚΙΝΙΣΤΟ",
      linkref: "/recipespage9",
      img: "https://www.sintayes.gr/wp-content/uploads/2014/04/Chicken-Bouillabaisse1-638x350.jpg",
    },
    {
      index: 9,
      foodname: "ΚΟΤΟΠΟΥΛΟ ΠΑΝΕ",
      linkref: "/recipespage10",
      img: "https://www.mamapeinao.gr/wp-content/uploads/kotopoulo-pane-tyri.jpg",
    },
    {
      index: 10,
      foodname: "ΚΟΤΟΠΟΥΛΟ ΜΕ ΜΠΑΜΙΕΣ",
      linkref: "/recipespage11",
      img: "https://www.sintayes.gr/wp-content/uploads/2017/09/kotopoulo-me-bamies-499x350.jpg",
    },
    {
      index: 11,
      foodname: "ΚΟΤΟΠΟΥΛΟ ΜΕ ΡΥΖΙ (ΑΤΖΕΜ) ΠΙΛΑΦΙ",
      linkref: "/recipespage12",
      img: "https://i2.wp.com/xrysoskoufaki.gr/wp-content/uploads/2021/06/kotopouloRiziFourno1.jpg?fit=2048%2C1536&ssl=1",
    },
    {
      index: 12,
      foodname: "ΚΟΤΟΠΟΥΛΟ ΓΙΟΥΒΕΤΣΙ ΜΕ ΚΡΙΘΑΡΑΚΙ",
      linkref: "/recipespage13",
      img: "https://i.ytimg.com/vi/3i3KYzbPECE/maxresdefault.jpg",
    },
    {
      index: 13,
      foodname: "ΚΟΤΟΠΟΥΛΟ ΛΕΜΟΝΑΤΟ ΜΕ ΠΑΤΑΤΕΣ ΦΟΥΡΝΟΥ",
      linkref: "/recipespage14",
      img: "https://www.mononews.gr/wp-content/uploads/2018/03/lemonato.jpg",
    },
    {
      index: 14,
      foodname: "ΚΟΤΟΠΟΥΛΟ ΣΟΥΠΑ ΡΥΖΙ ΑΥΓΟΛΕΜΟΝΟ",
      linkref: "/recipespage15",
      img: "https://www.sintayes.gr/wp-content/uploads/2014/11/mama.jpg",
    },
    {
      index: 15,
      foodname: "ΚΟΤΟΠΟΥΛΟ ΣΤΙΦΑΔΟ",
      linkref: "/recipespage16",
      img: "https://s.parapolitika.gr/images/760x480/files/migration/images/2018-09/rsa8p6hfopiuo4moldqg.jpg",
    },
    {
      index: 16,
      foodname: "ΚΕΦΤΕΔΕΣ ΤΗΓΑΝΙΤΟΙ",
      linkref: "/recipespage17",
      img: "https://cdn.enimerotiko.gr/media/2020/05/afratoi-tiganitoi-keftedes.jpg",
    },
    {
      index: 17,
      foodname: "ΓΙΟΥΒΑΡΛΑΚΙΑ  ΑΥΓΟΛΕΜΟΝΟ",
      linkref: "/recipespage18",
      img: "https://stavros-varthalitis.gr/wp-content/uploads/2022/01/%CE%93%CE%B9%CE%BF%CF%85%CE%B2%CE%B1%CF%81%CE%BB%CE%AC%CE%BA%CE%B9%CE%B1-%CE%B1%CF%85%CE%B3%CE%BF%CE%BB%CE%AD%CE%BC%CE%BF%CE%BD%CE%BF.jpg",
    },
    {
      index: 18,
      foodname: "ΜΠΙΦΤΕΚΙΑ ΦΟΥΡΝΟΥ",
      linkref: "/recipespage18",
      img: "https://www.giorgostsoulis.com/media/k2/items/cache/bc53d507c26770e8f294fcbf92ef0864_L.jpg",
    },
    {
      index: 19,
      foodname: "ΣΟΥΤΖΟΥΚΑΚΙΑ ΜΕ ΣΑΛΤΣΑ ΣΜΥΡΝΕΪΚΑ",
      linkref: "/recipespage19",
      img: "https://www.akros.gr/blog/wp-content/uploads/2018/01/bigstock-Italian-meatballs-in-tomato-an-12014702.jpg",
    },
    {
      index: 20,
      foodname: "ΧΤΑΠΟΔΙ ή ΣΟΥΠΙΕΣ ΜΕ ΜΑΚΑΡΟΝΑΚΙ ΚΟΦΤΟ",
      linkref: "/recipespage20",
      img: "https://www.syntages.me/uploads/syntages_large/4_1461935078.jpg",
    },
    {
      index: 21,
      foodname: "ΧΤΑΠΟΔΙ ή ΣΟΥΠΙΕΣ ΜΕ ΣΠΑΝΑΚΙ ΚΑΤΣΑΡΟΛΑΣ",
      linkref: "/recipespage21",
      img: "https://www.giorgostsoulis.com/media/k2/items/cache/8da476f72f06a276b1f930cdb28c21f1_XL.jpg",
    },
    {
      index: 22,
      foodname: "ΚΑΛΑΜΑΡΑΚΙΑ ΤΗΓΑΝΙΤΑ",
      linkref: "/recipespage22",
      img: "https://www.gourmed.gr/sites/default/files/kalamarakia-tiganita-1.jpg",
    },
    {
      index: 23,
      foodname: "ΚΑΛΑΜΑΡΑΚΙΑ ΚΟΚΚΙΝΙΣΤΑ",
      linkref: "/recipespage23",
      img: "https://pasmageirevontas.gr/wp-content/uploads/2017/03/kalamarakia.jpg",
    },
    {
      index: 24,
      foodname: "ΧΤΑΠΟΔΑΚΙ ΚΟΚΚΙΝΙΣΤΟ",
      linkref: "/recipespage24",
      img: "https://www.iliapress.gr/images/TROPOS_NA_ZEIS_11/xtapodi_kokinisto.jpg",
    },
    {
      index: 25,
      foodname: "ΒΑΚΑΛΑΟΣ ΑΛΑ ΣΠΕΤΣΙΩΤΑ",
      linkref: "/recipespage25",
      img: "https://newpost.gr/wp-content/uploads/2022/10/396050.jpg",
    },
    {
      index: 26,
      foodname: "ΒΑΚΑΛΑΟΣ ΤΗΓΑΝΙΤΟΣ",
      linkref: "/recipespage26",
      img: "https://www.mamapeinao.gr/wp-content/uploads/1489999262110.jpg",
    },
    {
      index: 27,
      foodname: "ΣΚΟΡΔΑΛΙΑ",
      linkref: "/recipespage27",
      img: "https://gr.hellomagazine.com/wp-content/uploads/2022/03/skordalia.jpg",
    },
    {
      index: 28,
      foodname: "ΦΑΣΟΛΙΑ ΓΙΓΑΝΤΕΣ ή ΜΙΚΡΑ ΣΤΟ ΦΟΥΡΝΟ (ΠΛΑΚΙ)",
      linkref: "/recipespage28",
      img: "https://www.giorgostsoulis.com/media/k2/items/cache/a9ccd7cd1c4267a50c67ac0bd7180172_L.jpg",
    },
    {
      index: 29,
      foodname: "ΦΑΣΟΛΙΑ ΣΟΥΠΑ",
      linkref: "/recipespage29",
      img: "http://www.radicio.com/wp-content/uploads/2012/10/fasolada.jpg",
    },
    {
      index: 30,
      foodname: "ΦΑΣΟΛΙΑ ΣΑΛΑΤΑ ή ΠΙΑΖ",
      linkref: "/recipespage30",
      img: "https://www.cretangastronomy.gr/wp-content/uploads/2019/03/DSC_1551_Fotor.jpg",
    },
    {
      index: 31,
      foodname: "ΦΑΚΕΣ ΣΟΥΠΑ",
      linkref: "/recipespage31",
      img: "https://cookos.gr/wp-content/uploads/2019/07/%CF%86%CE%B1%CE%BA%CE%AD%CF%82-1300x1300.jpg",
    },
    {
      index: 32,
      foodname: "ΜΠΡΙΑΜ ΦΟΥΡΝΟΥ",
      linkref: "/recipespage32",
      img: "https://caruso.gr/wp-content/uploads/2014/04/Briam_180124_0258.jpg",
    },
    {
      index: 33,
      foodname: "ΝΤΟΜΑΤΕΣ & ΠΙΠΕΡΙΕΣ ΛΑΔΕΡΕΣ ΓΕΜΙΣΤΕΣ",
      linkref: "/recipespage33",
      img: "https://caruso.gr/wp-content/uploads/2014/09/gemistes-ntomates-piperies_20140830_1038.jpg",
    },
    {
      index: 34,
      foodname: "ΜΟΥΣΑΚΑΣ ΜΕ ΠΑΤΑΤΕΣ - ΜΕΛΙΤΖΑΝΕΣ",
      linkref: "/recipespage34",
      img: "https://www.icookgreek.com/wp-content/uploads/2021/10/moussakas.jpg",
    },
    {
      index: 35,
      foodname: "ΠΑΣΤΙΤΣΙΟ",
      linkref: "/recipespage35",
      img: "https://www.mamapeinao.gr/wp-content/uploads/pastitsio-500x500.jpg",
    },
    {
      index: 36,
      foodname: "ΛΑΧΑΝΟΡΥΖΟ",
      linkref: "/recipespage36",
      img: "https://www.giorgostsoulis.com/media/k2/items/cache/5d9106cd3b26b3ecac196958778c9f70_L.jpg",
    },
    {
      index: 37,
      foodname: "ΡΥΖΙ ΠΙΛΑΦΙ ΦΟΥΡΝΟΥ",
      linkref: "/recipespage37",
      img: "https://i.ytimg.com/vi/YpdhdUKppAM/sddefault.jpg",
    },
    {
      index: 38,
      foodname: "ΣΠΑΝΑΚΟΡΥΖΟ",
      linkref: "/recipespage38",
      img: "https://caruso.gr/wp-content/uploads/2019/03/190311_Spanakoryzo_0103.jpg",
    },
    {
      index: 39,
      foodname: "ΜΕΛΙΤΖΑΝΕΣ ΙΜΑΜ ΜΠΑΪΛΝΤΙ",
      linkref: "/recipespage39",
      img: "https://caruso.gr/wp-content/uploads/2015/07/Imam-bayldi_082517_0186.jpg",
    },
    {
      index: 40,
      foodname: "ΜΕΛΙΤΖΑΝΕΣ ΠΑΠΟΥΤΣΑΚΙΑ",
      linkref: "/recipespage40",
      img: "https://1.bp.blogspot.com/-qiGjO-Mkikk/YNGhSzRjcvI/AAAAAAAAaZo/3djUuZv4iaQ7h3PNhQdnrVla052PxGKWgCLcBGAsYHQ/w680/melitzanes_papoytsakia.jpg",
    },
    {
      index: 41,
      foodname: "ΦΑΣΟΛΑΚΙΑ ΜΕ ΠΑΤΑΤΕΣ ΓΙΑΧΝΙ",
      linkref: "/recipespage41",
      img: "https://misshealthyliving.gr/wp-content/uploads/2019/07/fasolakia-kokkinista-04-1024x684.jpg",
    },
    {
      index: 42,
      foodname: "ΑΡΑΚΑΣ ΜΕ ΠΑΤΑΤΕΣ ΓΙΑΧΝΙ",
      linkref: "/recipespage42",
      img: "https://www.argiro.gr/wp-content/uploads/2021/12/arakas-laderos-kokkinistos-800x451.jpg?v=1648029643",
    },
    {
      index: 43,
      foodname: "ΠΑΤΑΤΕΣ ΦΟΥΡΝΟΥ ΡΙΓΑΝΑΤΕΣ",
      linkref: "/recipespage43",
      img: "https://www.greekcookingbykaterina.com/greekcooking/img/recipes/recipes/59/gallery/image-patates-fournou-1.jpg",
    },
    {
      index: 44,
      foodname: "ΠΑΤΑΤΕΣ ΠΟΥΡΕ KNORR",
      linkref: "/recipespage44",
      img: "https://www.argiro.gr/wp-content/uploads/2018/10/poures-patatas-mustika.jpg",
    },
    {
      index: 45,
      foodname: "ΠΑΤΑΤΕΣ ΠΟΥΡΕ",
      linkref: "/recipespage45",
      img: "https://www.giorgostsoulis.com/media/k2/items/cache/d8ecaf477e032972e780acc36e808256_L.jpg",
    },
    {
      index: 46,
      foodname: "ΠΑΤΑΤAΤΟΣΑΛΑΤΑ",
      linkref: "/recipespage46",
      img: "http://www.foodmaniacs.gr/wp-content/uploads/2016/11/patatosalata.jpg",
    },
    {
      index: 47,
      foodname: "ΜΑΚΑΡΟΝΙΑ ΚΑΡΜΠΟΝΑΡΑ",
      linkref: "/recipespage47",
      img: "http://www.radicio.com/wp-content/uploads/2012/10/spageti-karmponara.jpg",
    },
    {
      index: 48,
      foodname: "ΜΑΚΑΡΟΝΙΑ ΜΕ ΣΑΛΤΣΑ ΝΑΠΟΛΙΤΑΙΝ",
      linkref: "/recipespage48",
      img: "https://www.xrysessyntages.gr/wp-content/uploads/2018/08/591cb0616eafafe8a6554e1f9a704d6a-pasta-sauce-recipes-pasta-sauces-768x599.jpg",
    },
    {
      index: 49,
      foodname: "ΜΑΚΑΡΟΝΙΑ ΜΕ ΚΙΜΑ",
      linkref: "/recipespage49",
      img: "https://www.mamapeinao.gr/wp-content/uploads/makaronia-me-kima.jpg",
    },
    {
      index: 50,
      foodname: "ΜΑΚΑΡΟΝΙΑ ΟΓΚΡΑΝΤΕΝ",
      linkref: "/recipespage50",
      img: "https://www.argiro.gr/wp-content/uploads/2016/05/Taliateles-ograden-me-zambon-turi.jpg",
    },
    {
      index: 51,
      foodname: "ΟΜΕΛΕΤΑ (ΦΟΥΡΝΟΥ)",
      linkref: "/recipespage51",
      img: "https://static.mama365.gr/media/pics/pics1200/35010-omeleta_590.jpg",
    },
    {
      index: 52,
      foodname: "ΠΙΤΣΑ",
      linkref: "/recipespage52",
      img: "https://www.argiro.gr/wp-content/uploads/2016/05/pitsa-peperoni.jpg",
    },
    {
      index: 53,
      foodname: "ΚΟΤΟΠΙΤΑ",
      linkref: "/recipespage53",
      img: "https://akispetretzikis.com/photos/122372/kotopita%20-%20ep31%20-%2026-10-21%20-%20site.jpg",
    },
    {
      index: 54,
      foodname: "ΣΠΑΝΑΚΟΤΥΡΟΠΙΤΑ",
      linkref: "/recipespage54",
      img: "https://petros-syrigos.com/wp-content/uploads/2021/03/spanakotyropita-1.jpg",
    },
    {
      index: 56,
      foodname: "ΤΥΡΟΠΙΤΑ",
      linkref: "/recipespage55",
      img: "https://www.argiro.gr/wp-content/uploads/2022/01/tiropita.jpg?v=1650466480",
    },
    {
      index: 57,
      foodname: "ΡΥΖΟΓΑΛΟ",
      linkref: "/recipespage56",
      img: "https://www.dailycious.gr/wp-content/uploads/2014/08/%CE%A1%CF%85%CE%B6%CF%8C%CE%B3%CE%B1%CE%BB%CE%BF-750x500.jpg",
    },
    {
      index: 58,
      foodname: "ΚΡΕΜΑ ΠΙΑΤΟΥ",
      linkref: "/recipespage57",
      img: "https://www.argiro.gr/wp-content/uploads/2020/08/spitiki-krema-vanilia-se-piato.jpg",
    },
    {
      index: 59,
      foodname: "ΓΑΛΑΚΤΟΜΠΟΥΡΕΚΟ",
      linkref: "/recipespage58",
      img: "https://www.syntages.me/uploads/syntages_large/271_1517340543.jpg",
    },
    {
      index: 60,
      foodname: "ΚΡΕΜΑ ΚΑΡΑΜΕΛΕ",
      linkref: "/recipespage59",
      img: "https://www.syntages.me/uploads/syntages_large/252_1511608076.jpg",
    },
    {
      index: 61,
      foodname: "ΚΕΙΚ",
      linkref: "/recipespage60",
      img: "https://www.supersyntages.gr/sites/default/files/eykolo-keik-1200x660.jpg",
    },
    {
      index: 62,
      foodname: "ΡΑΒΑΝΙ",
      linkref: "/recipespage61",
      img: "https://www.sintayes.gr/wp-content/uploads/2014/04/2011-07-18-140002siropiasta-620x350.jpg",
    },
    {
      index: 63,
      foodname: "ΣΙΡΟΠΙ",
      linkref: "/recipespage62",
      img: "https://www.kopiaste.info/wp-content/uploads/2007/10/Sugar-syrup-ready-image.jpg",
    },
    {
      index: 64,
      foodname: "ΧΑΛΒΑΣ ΣΙΜΙΓΔΑΛΕΝΙΟΣ",
      linkref: "/recipespage63",
      img: "https://www.melissa.gr/app/uploads/2019/02/Xalvas_Simigdalenios.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-2 xl:grid-cols-6">
        {data.map((item) => (
          <Card
            key={item.index}
            foodname={item.foodname}
            linkref={item.linkref}
            img={item.img}
          />
        ))}
      </div>
    </>
  );
}
