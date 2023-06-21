import buglama from './images/buglama.jpg'
import dovga from './images/dovga.jpg'
import dusbere from './images/dusbere.jpg'
import etqutabi from './images/etqutabi.jpg'
import kartofqizartmasi from './images/kartofqizartmasi.jpg'
import kelemdolmasi from './images/kelemdolmasi.jpg'
import kotlet from './images/kotlet.jpg'
import kuku from './images/kuku.jpg'
import lobyasorbasi from './images/lobyasorbasi.jpg'
import merci from './images/merci.jpg'
import pencer from './images/pencer.jpg'
import plov from './images/plov.jpg'
import pure from './images/pure.jpg'
import qrecka from './images/qrecka.jpg'
import qutab from './images/qutab.jpg'
import souz from './images/souz.jpg'
import soyutma from './images/soyutma.jpg'
import sup from './images/sup.jpg'
import ucbacidolmasi from './images/ucbacidolmasi.jpg'
import xingal from './images/xingal.jpg'
import yarpaqdolmasi from './images/yarpaqdolmasi.jpg'
import bugaduzen from './images/bugaduzen.jpg'
import surhulu from './images/surhulu.jpg'
import zint from './images/zint.jpg'
import qatmaca from './images/qatmaca.jpg'
import lobya from './images/lobya.jpg'

const yemekler = [
  {
    type: "suluYemekler",
    items: [
      {
        name: "Şorba",
        img: sup,
        videoLink : 'https://www.youtube.com/watch?v=UcY5cpptlA8',
        recipe: [
          "1 stəkan qırmızı merci",
          "1 ədəd soğan, doğranmış",
          "1 ədəd havuç, rendələnmiş",
          "1 ədəd kartof, doğranmış",
          "2 xörək qaşığı sıvı yağ",
          "1 xörək qaşığı un",
          "1 xörək qaşığı pomidor salçası",
          "Duz, istiot, pul biber (istəyə bağlı)",
          "İsti su"
        ],
        steps: [
          "Mercini yuyun və bir qazana qoyun. Üzərini örtəcək qədər isti su əlavə edin və qaynamağa buraxın. Sonra sərin ocaqda merci yumşayana qədər pişirin.",
          "Başqa bir qazanədə sıvı yağı isitəsin. Doğranmış soğanı əlavə edin və qəhvə kökü renginə qədər qavurun.",
          "Rendələnmiş havucu və doğranmış kartofu əlavə edin. Bir neçə dəqiqə qarışdıraraq qavurun.",
          "Unu əlavə edin və sərin ocaqda yüngül qavurun.",
          "Pomidor salçasını əlavə edin və qarışdırın.",
          "Pişmiş mercini və duzu, istiotu, pul biberi əlavə edin.",
          "Üzərini örtəcək qədər isti su əlavə edin və qaynamağa buraxın. Sonra sərin ocaqda şorbanı pişirin."
        ]
      },
      {
        name: "Lobya şorbası",
        img: lobyasorbasi,
        videoLink : 'https://youtu.be/wr4HlUFg5uc',
        recipe: [
          "2 stəkan quru qırmızı lobya",
          "2 ədəd kök",
          "2 ədəd baş soğan",
          "1 yemək qaşığı tomat pastası",
          "1/2 stəkan isti su",
          "1/2 stəkan zeytun yağı",
          "Duz zövqə görə"
        ],
        steps: [
          "Quru lobya artlanır, yaxşıca yuyulur, axşamdan isladılır, növbəti gün islanmış lobya qaynadılır.",
          "Zeytun yağında soğan qovrulur.",
          "Qovrulmuş soğana uzunsov doğranılmış kök əlavə edilir və kök bişənə qədər qovrulur.",
          "Bu qarışığın üzərinə tomat pastası, isti su, duz əlavə edilir və orta alovda suyu çəkilənədək qaynadılır.",
          "İlıq və ya soyuq halda süfrəyə verilir."
        ]
      },
      {
        name: "Mərci",
        img: merci,
        videoLink : 'https://youtu.be/PYWE6CLQtgw',
        recipe: [
          "1 fincan mərci",
          "1 soğan",
          "1 diş sarımsaq",
          "1 xörək qaşığı un",
          "1,5 xörək qaşığı kərə yağı",
          "Duz",
          "Sarıkök",
          "4,5 fincan isti su"
        ],
        steps: [
          [
            "Hər şeydən əvvəl soğan və sarımsağımızı yeməli olaraq doğrayırıq.",
            "Kərə yağımızı götürüb bişəcəyimiz qazanda əridirik.",
            "Doğranmış soğan və sarımsağımızı əridilmiş kərə yağına əlavə edirik və 2 dəqiqə qızardırıq.",
            "Unumuzu əlavə edib qovururuq. Yuyulmuş mərciməklərimizi əlavə edirik.",
            "Duz və sarıkökü əlavə edin. 1-2 dəfə qarışdırdıqdan sonra isti suyumuzu əlavə edirik.",
            "Əvvəlcə normal istidə bir neçə dəqiqə qaynatırıq. Sonra mərcimək bişənə qədər yavaş atəşdə təxminən 15-20 dəqiqə qaynatırıq."
          ]
        ]
      },
      {
        name: "Souz",
        img: souz,
        videoLink : 'https://youtu.be/lxCzBLZV1Tk',
        recipe: [
          "Sümüksüz mal əti-0,5 kq",
          "Kartof-4 ədəd",
          "Baş soğan-2 eded",
          "Kərə yağı-50 qr.",
          "Sarıkök",
          "Duz",
          "İstiot",
          "Dəfnə yarpağı",
          "Keşniş və ya cəfəri"
        ],
        steps: [
          "Əti tikələrə bölüb suda bişiririk.",
          "Dəfnə yarpağını da yaddan çıxarmırıq. Gaynayanda kəfini yiğırıq.",
          "Soğonı kəsib kərə yağında qızardırıq və bişmiş əti yanına əlavə edirik.",
          "Biraz qizarandan sonra üstünə 2-3 çömçə bulyondan tökürük.",
          "Sarıkök, duz, istiot əlavə edirik.",
          "Üstünə dörd yerə bölünmüş kartofları düzürük.",
          "Vam odda bişiririk.",
          "Bişəndə üstünə xirda kəsilmiş göyərti əlavə edirik."
        ]

      },
      {
        name: "Dovğa",
        img: dovga,
        videoLink : 'https://youtu.be/xA6sV_xez8E',
        recipe: [
          "3 litr qatıq",
          "600-700 qr su",
          "1/2 stəkan yumru düyü",
          "3 ədəd yumurta (hər litr üçün 1 ədəd hesablanır)",
          "1 dəstə nanə (orta ölçüdə)",
          "1 dəstə keşniş (orta ölçüdə)",
          "2 dəstə dağ keşnişi (orta ölçüdə)",
          "1 dəstə ispanaq (orta ölçüdə)",
          "1 dəstə şüyüd (orta ölçüdə)"
        ],
        steps: [
          "Əvvəlcə göyərtiləri təmizləyib, yuyuruq. Suyu çəkildikdən sonra onları xırda-xırda doğrayırıq.",
          "Qatığı qazana tökürük. Qatıq qatı olduğuna görə ona su əlavə etmək lazımdır. Əgər sizin qatığınız çox duru olarsa, az miqdarda su əlavə edə bilərsiniz. Biz 3 litr qatıq üçün 600-700 qram su əlavə etdik. Su əlavə etdikdən sonra qatığı yaxşıca qarışdırın.",
          "Düyünü təmizləyib, yuyun. Suyunu süzdükdən sonra ora 3 ədəd yumurtanı əlavə edib qarışdırın. Bu qarışımı qatığa əlavə edib qaz sobasının üzərinə qoyun. Düyü bişənə qədər qarışdırın. Qarışdırmağı dayandırmayın. Əks halda qatığınız çürüyə bilər.",
          "Düyünün bişib bişmədiyini yoxlayın. Düyü bişdiysə artıq göylərimizi əlavə edə bilərik. Qarışdıra-qarışdıra göyləri əlavə edin. Göylərimiz bişənə kimi qarışdırmağa davam edirik.",
          "Dovğanı duzlamağa tələsməyin. İsti-isti duzlasanız dovğa çürüyə bilər. Dovğanı soyuduqdan sonra duzlamaq lazımdır."
        ]
      }
    ]
  },
  {
    type: "etliYemekler",
    items: [
      {
        name: "Ət qutabı",
        img: etqutabi,
        videoLink : "https://youtu.be/TAIh7wNZ5oo",
        recipe: [
          "400 qr quzu və ya dana əti",
          "2 baş soğan",
          "20 qr lavaşana və ya 40 qr nar",
          "440 qr buğda unu",
          "100 qr yağ",
          "sumaq",
          "darçın",
          "duz",
          "istiot"
        ],
        steps: [
          "Ələnmiş una su və duz qatılıb bərk xəmir yoğrulur, sonra 1 mm qalınlığında yayılır.",
          "Boşqab ölçüsündə dairələr kəsilir.",
          "Yumşaq quzu və ya dana əti maşından soğanla birlikdə çəkildikdən sonra içinə lavaşana və ya nar əlavə edilib qarışdırılır.",
          "Xəmirdən kəsilmiş dairələrin bir tərəfinə çəkilmiş ət qoyulub o, biri tərəfi üstünə qatlanır, aypara şəkilinə salınır, kənarları bükülür və qızdırılmış tavada yağda qızardılır.",
          "Süfrəyə verilən zaman qutabın üstünə sumaq səpilir."
        ]

      },
      {
        name: "Buğlama",
        img: buglama,
        videoLink : 'https://youtu.be/bu1PXZn_7sE',
        recipe: [
          "Qoyun əti",
          "Quyruq",
          "Soğan",
          "Pomidor",
          "Bibər",
          "Cəfəri",
          "Duz",
          "istiot",
          "1 st su"
        ],
        steps: [
          "Doğranmış əti qazana yığın.",
          "Üzərinə doğranmış quyruğu, soğanı, pomidoru, bibəri və cəfəri düzərək qat qat yerləşdirin.",
          "Duz və istiotu vuraraq tərkibə əlavə edin.",
          "Sonda 1 st su ilə birlikdə qazanın qapağını kıp bağlayın.",
          "Ocağı yandırın və yemək bişənə qədər qazanda qoyun."
        ]

      },
      {
        name: "Soyutma",
        img: soyutma,
        videoLink : "https://youtu.be/pWdeIyNBY3c",
        recipe: [
          "koyun_eti 2 kq",
          "kök 1 ədəd",
          "sogan 1 ədəd",
          "ceferi_reyhan 2 dəstə",
          "duz istiot",
          "qara_istiot istiot"
        ],
        steps: [
          "Qoyun əti, soğan və kökün üzərini tam örtənədək su tökürük.",
          "Ət tam hazır olana qədər qısıq atəşdə bişiririk. ",
          "Arada köpüklərini alırıq ki, bulyon təmiz alınsın. Süzürük və ətin üzərinə tökürük (bulyon bir qədər az olmalıdır).",
          "Nar dənələrini üzərinə səpirik.Soyutmanın yanına çoxlu təzə göyərti veririk.",
          " Bu resepti kartofla, həmçinin pomidor və ya xama sousu ilə də tamamlamaq olar."
        ]

      },
      {
        name: "Üçbacı dolması",
        img: ucbacidolmasi,
        videoLink : "https://youtu.be/Js-m9uQbqyU",
        recipe: [
          "Qiymə",
          "kərə yağı istənilən miqdarda",
          "şüyüd 0.5 dəstə",
          "keşniş 0.5 dəstə",
          "reyhan 0.5 dəstə",
          "duz istiot",
          "pomidorun_ici 2 ədəd",
          "bibər istənilən miqdarda",
          "istənilən sayda Bibər , Pomidor , Badımcan "
        ],
        steps: [
          "3 bacı dolmasının içliyini hazırlamaq üçün qiymə biraz qovrulur.",
          "İçərisinə doğranmış şüyüd, keşniş, reyhan əlavə edilir. Kərə yağı və duz vurulur. ",
          "Pomidorların içərisi çıxardılır və iç hissəsi də qiyməyə əlavə edilir və bişirilir.",
          "Dolma bişiriləcək bibərlərin içərisi təmizlənir. Baş hissəsi qapaq kimi kəsilir.",
          "Pomidorların baş hissəsi qapaq kimi səsilir, iç hissəsi təmizlənir.",
          "Bibərlərin baş hissəsi kəsilir. İçliyi təmizlənir.",
          "Bişən göyərtili qiymə bibərin, pomidorun və bibərin içərisinə doldurulur. Bibər və pomidorun “qapaq” hissəsi bağlanır.",
          "Bir qaba səliqə ilə düzülür. Qab aluminium folqa ilə örtülür.",
          "İsti halda süfrəyə verilir."
        ]
      },
      {
        name: "Yarpaq dolması",
        img: yarpaqdolmasi,
        videoLink : 'https://youtu.be/ky8p91IntXg',
        recipe: ["100 qram qoyun əti,", "30 qram düyü,", "20 qram baş soğan,", "Keşniş,", "Şüyüd,", "Nanə,", "40 qram üzüm yarqağı,", "20 qram qatıq,", "10 qram ərinmiş şağ,", "duz,", "istiot,", "darçın,", "Noxud ləpəsi (istəyə görə bəzi hallarda)"],
        steps: ["Yarpaq dolması hazarlımaq üçün əvvəlcə qoyun ətindən qiymə hazırlanır.", "Qoyun əti ətçəkən maşından keçirilərkən, onunla birlikdə baş soğan da maşından keçirilir.", "Soğanlı qiymə əldə edilmiş olur.", "Soğanlı qiymə hazırlandıqdan sonra bunlara göyərtilər: keşniş, süyüd, nanə vurulur.", "Daha sonra keşniş, şüyüd, nanə vurulan soğanlı qiyməyə istiot və duz da əlavə edilir və qiymə qarışdırılır.", "Dolmanın içi hazır olduqdan sonra təzə və ya duza konservləşdirilmiş üzüm yarpaqları suda pörtlədilir və dolma bişirməyə hazır hala gətirilir.", "Pörtlədilmiş üzüm yarpaqları səliqə ilə açılır.", "Qiymə yaxşıca qarışdırılır və hər yarpağa təqribən 25 qram olacaq şəkildə (dolmanın ölçüsü və yarpağın ölçüsünə görə bu miqdar dəyişir) qoyulur.", "Yarpaq Dolmaları bükülür.", "Bükülən dolmalar səliqə ilə qazana düzülür.", "Bəzi hallarda yarpaq dolması sapa muncuq şəklində düzülür və bu halda qazana düzülür.", "Dolmalar qazana düzüldükdən sonra üzərinə biraz su əlavə edilir və vam odda bişirilməyə başlayır.", "Dolma bişərkən üzərinə tərsinə çevrilmiş bir qab qoyulur və qapağı örtülür.", "Dolmanın bişmə müddəti təqribən bir saatdır.", "Dolma süfrəyə verilərkən yanında ayrıca qatıq verilir.", "Bu zaman sarımsaqlı qatıqdan da istifadə etmək mümkündür."]
      },
      {
        name: "Kələm dolması",
        img: kelemdolmasi,
        videoLink : 'https://youtu.be/BZblzWSeWHc',
        recipe : ["Qoyun əti: 162 qram,", "Düyü: 20 qram,", "Noxud: 10 qram,", "Baş soğan: 15 qram,", "Dolmalıq kələm: 220 ram,", "Şabalıd: 50 ram,", "Keşniş: 15 qram,", "Pomidor: 50 qram,", "Üzüm sirkəsi:10 q, və ya limon duzu: 2 q,", "Toz şəkər: 5 qram , və ya doşab – 15 qram,", "Darçın: 0,1 qram,", "Duz (lazım olduğu qədər)"],
        steps : ["Kələm dolması hazırlamaq üçün əvvəlcə qiymə hazırlanır. Qiymə hazırlanarkən ətçəkən maşından soğan da keçirilir və yaxud da soğan çox kiçik – kiçik halda doğranılır.", "Qiymə hazırlamamışdan əvvəl soyuq suda noxud ləpəsi isladılır. Noxud ləpəsinin əvvəlcədən isladılmasının səbəbi yumşalması üçündür.", "Şabalıdlar təmizlənir və kiçik – kiçik ölçüdə doğranılır.", "Daha sonra soğanlı hazır qiyməyə düyü, əvvəlcədən isladılmış noxud ləpəsi, kiçik ölçüdə doğrnamış şabalıd, doğranmış pomidor, kiçik- kiçik doğranmış göyərti, lazımi qədər istiot və duz əlavə edilir.", "Bütün bu qarışıqlar və qiymə yaxşıca qarışdırılır.", "Dolmanın içi hazır olduqdan sonra sıra gəldi kələmin hazırlanmasına.", "Su geniş bir qazanda qaynadılır.", "Bu qaynar suda kələm pörtlədilir. Pörtlədilmiş kələmin yarpaqları bir – birindən ayrılır. Kələmin qalın zoğları varsa, onlar kəsilir.", "Hər dolma üçün üç ədəd kələm yarpağı götürülür.", "Hazırlanan qiymə qarışığı kiçik parçalar halında pörtlədilmiş kələm yarpaqlarının içərisinə qoyulur. Qiymə kələm yarpaqlarına bükülür.", "Bükülmüş dolmalar səliqə ilə qazana düzülür.", "Bəzən alt hissədə olan dolmaların yanmaması üçün qazanın dibinə pörtlədilmiş kələm yarpaqları düzülür.", "Dolmalar bükülüb qazana yığıldıqdan sonra üzərinə yavaş – yavaş qaynar su və ya ət bulyonu tökülür.", "Ağırlıq üçün Kələm dolması üzərinə kiçik bir tabaq tərs çevrilərək qoyulur.", "Dolma vam odda bişirilir.", "Kələm dolması bişənə yaxın (bişməyə təqribən 20 dəqiqə qalmış) üzərinə şəkər və sirkə əlavə edilir.", "Dolma süfrəyə verilərkən üzərinə bişirildiyi sous və biraz da darçın tozu səpilir."]

      }
    ]
  },
  {
    type: "xemirXorekleri",
    items: [
      {
        name: "Düşbərə",
        img: dusbere,
        videoLink : 'https://youtu.be/w62dTSYNBbA',
        recipe : ["Toyuq bulyonu - 1,5 l.", "Göyərti - 1 dəstə", "Duz, istiot, ədviyyə - zövqə görə", "Çəkilmiş qoyun əti - 150-200 qr.", "Duz, istiot - zövqə görə", "Doğranmış keşniş - 1 qaşıq", "Toyuq yumurtası - 1 ədəd", "Su - 5 y.q", "Duz - ½ ç.q.", "Un - 1 st."],
        steps : ["Çəkilmiş ətə ədviyyələri və bir qaşıq doğranmış keşnişi əlavə edirik.", "Su, un, duz və yumurtadan xəmir yoğururuq. Onu iki hissəyə bölürük hər ikisini incə bir şəkildə açırıq,", "2-3 sm kvadratlar kəsirik. 100 kvadrat alınmalıdır. Kvadratların ortasına biraz ət qoyuruq, üçbucaq bağlayırıq, büküb, küncləri birləşdiririk.", , "Düşbərəni qaynayan bulyona atıb, 5 dəqiqə bişiririk. Doğranmış göyərti, istiot və biraz duz qatırıq."]
      },
      {
        name: "Zint(Xingili)",
        img: zint,
        videoLink : 'https://youtu.be/lRQmhmgqA-o',
        recipe : ["1 st. un", "3,5 st. su", "200 qr qurudulmuş ət", "100 qr xırda lobya", "5-6 ədəd zoğal", "Alça turşusu", "Duz, istiot"],
        steps : ["Unun üzərinə ½ st. su və duz əlavə edilib çox bərk olmayan xəmir yoğrulur.", "Xəmir hissələrə bölünüb uzunsov şəkildə yayılır.", "Kiçik hissələrə bölünüb hər bir hissə şəhadət barmağı ilə eşilir.", "Bir-birinə yapışmaması üçün unlanmış siniyə yığılır.", "Lobya əvvəlcədən duzlu suda bişirilib süzülür.", "Ət xırda doğranır, üzərinə 3 st. su əlavə edilib qaynadılır.", "Bulyona xəmir parçaları tökülüb qaynadılır.", "Xəmir bişənə yaxın yeməyə zoğal və bişmiş lobya əlavə olunur.", "Duz, istiot səpilib 3-4 dəqiqə sonra odun üzərindən götürülür.", "Hazır xingili süfrəyə alça turşusu ilə verilir."]
      },
      {
        name: "Xingal",
        img: xingal, 
        videoLink : 'https://youtu.be/aQsKqmqA_LA',
        recipe : ["108 q qoyun əti,", "40 q buğda unu,", "10 q yumurta,", "25 q noxud,", "25 q ərinmiş yağ,", "25 q baş soğan,", "10 q sirkə,", "20 q keşniş və şüyüd,", "10 q nanə qurusu, duz, istiot."],
        steps : ["Hər paya qoyun ətinin kürək yaxud bel hissəsindən 2 tikə kəsilib bişirilir, sümüklərdən ayrılır. Bulyon metəl ələkdən keçirilir.", "Soyuq suda noxut 3-4 saat ərzində isladılır.", "Ayrı bir qabda yarım yarımhazır hala gələnə qədər bişirilir, sonra bulyona qatılaraq hamısı birlikdə bişirilir.", "Un, su, yumurtadan duz qatılaraq bərk əriştə xəmiri yoğrulur, 1 mm qalınlıqda yayılır. Yayma 2-3 sm ölçüdə dörtkünc formada doğranır.", "Sonra qaynar bulyona salınır. Bişdikdən sonra içinə doğranıb yağda qızardılmış soğan, çərtilmiş keşniş, şüyüd qatılır və hamısı birlikdə hazır vəziyyətə çatdırılır.", "Xörəyin üstünə nanə qurusu sərpilir və ayrıca olaraq yanına sirkə qoyulur."]

      },
      {
        name: "Qutab",
        img: qutab,
        videoLink : "https://youtu.be/Xj61gH5wMC0",
        recipe : ["500qr un", "1 xörək qaşığı bitki yağı", "1 silə çay qaşığı duz", "2qram maya.", "1,20qram kartof", "1 baş soğan", "1 dəstəşüyüd", "1 dəstə cəfəri", "2 xörək qaşığı ərinmiş kərə yağı", "duz", "qara istiot", "sarıkök", "pul bibər zövqə görə"],
        steps : ['Hazırlanma qaydasına videoda baxa bilərsiniz']

      },
      {
        name: "Buğadüzən",
        img: bugaduzen, 
        videoLink : 'https://youtu.be/fGsKi2TsJlo',
        recipe : ["quru ət" , "xəmir" , "duz"],
        steps : ["Əvvəlcə quru ət  tikələrə bölünərək, qazanda bişirilir. Paralel olaraq isə xəngəlin xəmiri yoğurulur.", "Xəmir yoğurulduqdan sonra 15-20 dəqiqə gözlənilir, daha sonra hazır xəmir kündələrə ayrılır.", "Kündələr oxlovla nazik yayıldıqdan sonra kvadrat şəklində doğranılır."]
      },
      {
        name: "Sürhülü",
        img: surhulu,
        videoLink : 'https://youtu.be/5fDR3GqVTqw',
        recipe : ["un", "su", "duz", "1 kq quzu əti (və ya qaxac edilmiş quzu əti)", "3 st. su", "duz", "istiot və ya sarımsaq", "palçıq turşusu"],
        steps : ["Əvvəlcə un, su və duzdan çox bərk olmayan xəmir yoğurun.", "Xəmir 5-10 dəqiqə mayalandıqdan sonra, uzununa şəridlər kəsin.", "Bu şəridləri barmaqlarınızın ucu ilə yumrulayın.", "Sonra xırda kvadrat formada kəsin.", "Ayırdığınız xırda hissələri bir-bir şəhadət barmağınızı basmaqla çəkin.", "Çəkilmiş xəmiri əlinizlə bir qədər dartıb uzadın ki, qalın olmasın.", "Yapışmaması üçün unlayıb ayrı-ayrı yığın.", "Qazanda su qaynadıb, duz əlavə edin.", "Çəkdiyiniz sürhüllüləri qaynayan suya əlavə edirik.", "Sürhüllülər bişəndən sonra sudan çıxarıb qablara yığın.", "Xəmir mayalanan müddətdə başqa bir qazana quru ət qoyub 3 st. su əlavə edin.", "Tam bişdikdən sonra ocaqdan götürün. Hazır şorbadan bolluca sürhüllülərin üzərinə gəzdirin, üstündən ət qoyun.", "Süfrəyə turşu və sarımsaqla verə bilərsiniz."]
      },
      {
        name: "Qatmaca",
        img: qatmaca,
        videoLink : 'https://youtu.be/rDfvM5nj5Lo',
        recipe : ["4-5 st un", "1 yumurta", "1 ç.q duz", "Aparanadək  ilıq su", "Zövqə görə sarıkök əlavə edə bilərsiniz.", "4-5 x.q un", "10 dəstə göyərti  (keşniş, şüyüd, ispanaq, göy soğan, nanə,", "sarımsaq, cəfəri, turşəng, kəvər, cincilim və s)", "Zövqə görə duz", "Qatıq"],
        steps : ["Unu bir qaba ələyib duzu səpib ortasına yumurtanı sındırırıq və suyu əlavə edib qaşıqla qarışdırırıq.", "Sonra əlimiz ilə normal xəmir yoğururuq.", "Xəmiri balaca hissələrə bölüb kündəliyirik. Üstünə salafan örtürük qurumasın.", "İçliyi hazırlayırıq. Göyərtiləri təmizləyib yuduqdan sonra xırda doğrayırıq. Doğranmış göyərtiyə duz səpib yaxşı qarışdırırıq (ya da göyərtini yuxanın üstünə töküb duzu səpirik)", "Kündənin birini götürüb un səpib nazik yuxa yayırıq.", "Yuxanın yarı hissəsinə içlikdən qoyub yayırıq.", "Yuxanı iki qatlayırıq və yanlarını bərkidirik.", "Qazın ya da odun üstündə qızmış sacın üzərinə qoyub hər iki tərəfini qızardırıq.", "Zövqə görə üstünə sumaq səpib yanında qatıq verə bilərsiniz."]
      }
    ]
  },
  {
    type: "quruYemekler",
    items: [
      {
        name: "Lobya",
        img: lobya,
        videoLink : null,
        recipe : ["doğranmış göy lobya" , "soğan" , "yumurta" , "su , duz" ],
        steps : ['Lobya doğranılır' , "suda bişirilir" , "üzərinə yağ , soğan , yumurta əlavə edilir"]
      },
      {
        name: "Qreçka",
        img: qrecka,
        videoLink : "https://youtu.be/-ZUiEIkOQ0c",
        recipe : ['Qreçka'],
        steps : ["500qr un", "1 xörək qaşığı bitki yağı", "1 silə çay qaşığı duz", "2qram maya.", "1,20qram kartof", "1 baş soğan", "1 dəstəşüyüd", "1 dəstə cəfəri", "2 xörək qaşığı ərinmiş kərə yağı", "duz", "qara istiot", "sarıkök", "pul bibər zövqə görə"]

      },
      {
        name: "Pencər",
        img: pencer,
        videoLink : 'https://youtu.be/JjTfluQHVoc',
        recipe : ["200 qr ispanaq,", "3 baş soğan,", "100 qr keşniş,", "100 qr şüyüd,", "100 qr göy soğan,", "2 yumurta,", "160 qr ərinmiş yağ,", "1 stəkan qatıq,", "2 diş sarımsaq."],
        steps : ["Göyərti təmizlənib yuyulur və doğranılır.", "Baş soğan doğranılıb, yağda qızardılır, üzərinə doğranmış ispanaq əlavə edilir və 0,5 stəkan su tökülür.", "İspanaq yarıçiy olanda qalan göyərtilər tökülüb qarışdırılır və suyu çəkiləndən sonra çalınmış yumurta vurulub bir də qarışdırılır.", "Yumurta bişəndən sonra oddan götürülür. Sarımsaq duzla əzilib qatığa qarışdırılır.", "Hazır sarımsaqlı qatıq xörəyin yanında süfrəyə verilir."]

      },
      {
        name: "Kükü",
        img: kuku,
        videoLink : 'https://youtu.be/PJAMKTgSu90',
        recipe : ["Təzə keşniş - 2 dəstə", "Şüyüd - 1 dəstə", "Nanə - 1/2 dəstə", "Yaşıl soğan - bir neçə budaq", "Təzə ispanaq - 50 q", "Yumurta - 5 ədəd", "Zeytun yağı -4 y.q.", "Duz - 1/2 ç.q.", "Üyüdülmüş qara istiot - zövqə görə","Qatlq - 1/2 stəkan", "Sarımsaq - 1 diş"],
        steps : ["Bütün göyərtiləri təmiz yuyub, xırda-xırda doğrayırıq.", "Böyük kasada yumurtanı çırpırıq, göyərtini əlavə edib, yaxşıca qarışdırırıq.", "Duz və istiot əlavə edirik. Qarışımı tavaya töküb orta ocaqda səkkiz dəqiqə ərzində bişiririk.", "Yavaşca çevirin ki, kükünün digər tərəfi də qızarsın. Qatıqlı sousla süfrəyə verin - sarımsağı əzin və qatıqla qarışdırın.", "İspanaqda yüksək miqdarda zülal və selüloz var. O bağırsağın işini və ona bağlı olaraq arıqlamanı dəstəkləyir, peristaltikanı normallaşdırır, yüngül tonus və antiinflammatuar təsir göstərir.", "Eyni zamanda ispanaq gözəlliyimizin qayğısına qalır: dişlər, dırnaqlar, saç və dəri. İspanaqdakı dəmir sellülit yaranmasının qarşısını alır."]

      },
      {
        name: "Toyuqlu döşəmə plov",
        img: plov,
        videoLink : 'https://youtu.be/zBsndUBOuJU',
        recipe : ["1 kq uzun düyü", "250 qr əridilmiş kərə yağı", "1 ədəd toyuq", "duz, istiot", "sarıkök, zəfəran", "3 xörək qaşığı qarğıdalı yağı", "1 baş soğan"],
        steps : ["Toyuq təmizlənib, yuyulduqdan sonra, duz, istiot, sarıkök, doğranmış soğan, qarğıdalı yağı ilə basdırma edilir.", "Düyü yuyulub bir neçə saat ilıq duzlu suda saxlanılır. Sonra qaynar duzlu suda bişirilir. Tam bişməmiş, ocaqdan götürülüb, süzülür.", "Qazanın dibinə qazmaq əvəzi toyuq tikələri düzülür. Üzərinə süzülmüş düyü əlavə edilir. Sarıkök, dəmlənmiş zəfəran, əridilmiş yağ da gəzdirilir.", "Zəif odda 1,5 saat dəmləndikdən sonra toyuqlu döşəmə plov hazırdır. Qazanın qapağını götürüb, üzərinə sini qoyulur və çevrilir.", "Bu zaman qazanın dibinə çökmüş yağ da plovün üzərinə tökülür və daha da ləzzətli olur."]

      },
      {
        name: "Püre",
        img: pure,
        videoLink : 'https://youtu.be/ZyzCo1rNS88',
        recipe : ["6-7 ədəd orta ölçülü kartof,", "2 ədəd baş soğan,", "1 x.q əridilmiş kərəyağı,", "balaca dəstə şüyüd, duz, istiot"],
        steps : ["Kartofun qabığını soyub yuduqdan sonra iki bölürük. Qazana yığıb üstünə su əlavə edirik.Qoyuruq ocağa tam bişiririk.Suyu tamam çəkiləcək.", "Bişdikdə kartof əzənlə əzirik.", "Soğanın qabığını soyub yuduqdan sonra xırda doğrayırıq.", "Tavaya töküb üstünə az duz və yağı əlavə edib qızılı rəngdə olanadək ocağın üstündə qovururuq.", "Hazır olduqda əzilmiş kartofun üstünə əlavə edib qarışdırırıq.", "Şüyüdü təmizləyib yuyub xırda doğrayıb kartof əzməsinin üstünə əlavə edirik. Zövqə görə duz və istiotunu da əlavə edib qarışdırırıq.", "Bu kartof əzməsini içlik kimi hər növ xəmir işlərində istifadə edə bilərsiniz."]

      },
      {
        name: "Kartof qızartması",
        img: kartofqizartmasi,
        videoLink : 'https://youtu.be/QUf7tGUhwlA',
        recipe : ["Istənilən miqdarda kartof" , "2 baş soğan" , "3-4 x.q bitki yağı"],
        steps : ["Soğanın qabığını soyub yuduqdan sonra doğrayırıq.", "Kartofun qabığını soyub yuyub uzunsov doğrayırıq.", "Hər ikisinə doğranmış soğan, bitki yağı, turşu, duz və istiot töküb yaxşı qarışdırırıq.", "Qarışığı soba torbasına hər ikisindən qoyaraq doldururuq.", "Yeməyi qaba yığıb zövqə uyğun bəzəyib, süfrəyə veririk."]
      },
      {
        name: "Kotlet",
        img: kotlet,
        videoLink : 'https://youtu.be/GAq7T3xx2Sw',
        recipe : ["Toyuğun döş əti 350qr.", "Quyruq 50qr.", "Soğan 1 ədəd.", "Qabaq 400qr.", "Şüyüd 1/2 dəstə.", "Çörək ovuntusu 1 xörək qaşığı.", "Un 1 xörək qaşığı.", "Duz 1/2 çay qaşığı.", "Qara istiot 1/3 çay qaşığı.", "Pul bibər 1/2 çay qaşığı.", "Sarımsaq tozu 1/2 çay qaşığı", "Karri ədviyyatı 1/3 çay qaşığı.", "Keşniş toxumu 1 çay qaşığı."],
        steps : ["Hazırlanma qaydasına videoda baxa bilərsiniz"]
      }
    ]
  }
];
 
export default { yemekler } 