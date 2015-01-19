"use strict";angular.module("fiFifortuneDesk0",["ngAnimate","ngCookies","ui.router","mm.foundation"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(i,a,e){i.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("zodiac",{url:"/zodiac/:sign",templateUrl:"app/zodiac/zodiac.html",controller:"ZodiacCtrl"}),a.otherwise("/"),e.html5Mode(!0)}]),angular.module("fiFifortuneDesk0").controller("SidenavbarCtrl",["$scope","zodiacmakerService",function(i,a){var e=a.getZodiacs();i.zodiacs=e}]),angular.module("fiFifortuneDesk0").controller("NavbarCtrl",["$scope","$location",function(i,a){i.date=new Date,i.domain=a.host()}]),angular.module("fiFifortuneDesk0").controller("ZodiacCtrl",["$scope","$rootScope","zodiacinfoService","$location","zodiacmakerService","jsonpService",function(i,a,e,n,t,s){i.loadOK=!1;var o=n.path().split("/")[2];console.log(o);var l=t.getZodiacs();angular.forEach(l,function(a){if(a.name===o){i.zodiac=a;var e="http://"+n.host()+":80/zodiacinfo?extpath=zodiac/"+a.name;console.log(e),s.getJSON(e).then(function(a){i.extinfo=a,console.log(a),i.loadOK=!0})}})}]),angular.module("fiFifortuneDesk0").service("zodiacmakerService",function(){this.getZodiacs=function(){return[{name:"Kauris",image:"capricorn",link:"horoskooppi-kauris-2212-191",defzodiac:"Kauriit ovat sitkeitä ja kestäviä. Kauriit ovat vakavia ja kurinalaisia, ja he haluavat elämänsä olevan järjestelmällistä ja hyvin suunniteltua. Kauriilla pitää olla konkreettinen päämäärä, jotta hän tietää, mihin on menossa ja miksi. Kauris on kärsivällinen, varovainen ja erittäin käytännöllinen."},{name:"Vesimies",image:"aquarius",link:"horoskooppi-vesimies-201-192",defzodiac:"Vesimiehet ovat eläinratamme suuria oivaltajia, jotka pystyvät näkemään tulevaisuuden verhon lävitse. Tämä ainutlaatuinen lahjakkuus tekee vesimiehistä outoja ja usein yksinäisiä ihmisiä, joiden näkemykset ymmärretään lähes poikkeuksetta vain omien etujen ajamiseksi, vaikka vesimies aina ajattelee enemmän muita kuin itseään. Into tutkia ja keksiä uutta ovat vesimiehen hallitsevimmat piirteet. Selkeänäköisyys, omaleimaisuus, ennakkoluulottomuus ja arvaamattomuus ovat tyypillisiä vesimiehen ominaisuuksia."},{name:"Kalat",image:"pisces",link:"horoskooppi-kalat-202-203",defzodiac:"Kalaihmiset ovat vuodenaikansa mukaisesti hyvin herkkiä ympärillään tapahtuville mielialan muutoksille. He vaistoavat tulevia asioita, vaikka eivät pysty todistamaan aavistuksiaan todeksi. Kalat elävät omassa herkässä maailmassaan. Heidän kauttaan elämässä tapahtuu jatkuvaa heräämistä ja alitajuista kehittymistä."},{name:"Oinas",image:"aries",link:"horoskooppi-oinas-213-194",defzodiac:"Oinas on yleensä itsevarma, herkästi innostuva, yritteliäs, aloitekykyinen, impulsiivinen ja energinen. Kärsimättömyys kuuluu merkin suurimpiin heikkouksiin. Kaiken pitäisi tapahtua oinaan mielestä heti. Jos asiat eivät menekään oinaan mielen mukaan, hän ärsyyntyy herkästi. Oinas voi sortua myös aggressiivisuuteen. Pitkäjänteisyyttä vaativat tehtävät tuottavat monesti tämän piirteen takia oinaalle suuria vaikeuksia."},{name:"Härkä",image:"taurus",link:"horoskooppi-harka-204-205",defzodiac:"Härkä on itsepäisyyteen saakka sitkeä, perusteellinen, asiallinen, harkitseva ja kärsivällinen. Hän osaa kuitenkin myös nautiskella elämän pienistä iloista."},{name:"Kaksoset",image:"gemini",link:"horoskooppi-kaksoset-215-206",defzodiac:"Vilkkaus, uteliaisuus, innostuneisuus, puheliaisuus ja nopea ajattelu ovat kaksosille tyypillisiä piirteitä. Kaksonen on koko ajan hyvin tietoinen kaikesta ympärillään tapahtuvasta. Hän ilmaisee nopeaälyisenä itseään helposti sekä suullisesti että kirjallisesti. Kaksonen on levoton ja liikkuva, mutta sopeutuu juuri siksi vaivatta uusiin olosuhteisiin."},{name:"Rapu",image:"cancer",link:"horoskooppi-rapu-216-227",defzodiac:"Ravulla on suojeleva, äidillinen maaemon luonne. Aikansa ilmiöitä seuraten ravut osaavat luoda ympärilleen turvallisen ja hellän ilmapiirin niin halutessaan. Ravun tyypillisiä ominaisuuksia ovat suojeluvaisto, sopeutuvuus, intuitio, hyvä muisti, huomaavaisuus ja myötätunto."},{name:"Leijona",image:"leo",link:"horoskooppi-leijona-237-228",defzodiac:"Leijona on antelias, luova, johtamiskykyinen, elinvoimainen, arvokas ja viisas. Leijona on ihminen, joka luo itse oman arvomaailmansa ja on avoimesti ylpeä itsestään."},{name:"Neitsyt",image:"virgo",link:"horoskooppi-neitsyt-238-229",defzodiac:"Neitsyt huomaa heti, kun jokin asia ei ole kohdallaan tai oikeassa paikassa. Hän huolehtii muita merkkejä paremmin myös itsestään, ulkonäöstään ja kunnostaan. Neitsyen tyypillisiä ominaisuuksia ovatkin arvostelukyky, äärimmäinen tarkkuus, älykkyys, nopea käsityskyky ja hyvä terveys."},{name:"Vaaka",image:"libra",link:"horoskooppi-vaaka-239-2310",defzodiac:"Tasapainoilu, kontaktikyky, diplomaattisuus, elämänmyönteisyys ja kyky nauttia elämästä ovat vaakaihmiselle ominaisia piirteitä. Mietteliäs ja herkkä vaaka etsii tasapainoa ja harmoniaa kaikkialta. Hän kaipaa huomiota enemmän kuin muut merkit, ja joskus hänen on vaikea olla yksin. Hyvät ihmissuhteet ovatkin avain vaa’an onneen ja tyytyväisyyteen. Niiden puute voi saada vaa’an masentumaan."},{name:"Skorpioni",image:"scorpio",link:"horoskooppi-skorpioni-2410-2211",defzodiac:"Skorpionit ovat hyvin kiinnostuneita elämän alkemiallisista salaisuuksista ja tutkivat innokkaina elämää suurempia mysteerejä."},{name:"Jousimies",image:"sagittarius",link:"horoskooppi-jousimies-2311-2112",defzodiac:"Jousimiehet ovat eläinradan suuria optimisteja, jotka ovat valmiita tekemään paljon töitä tulevaisuudessa häämöttävien mahdollisuuksien ja menestyksen eteen. Jokaisella jousimiehellä on oma vahva filosofiansa ja vankkumaton luottamus omiin ideoihinsa ja haaveisiinsa."}]}}),angular.module("fiFifortuneDesk0").service("zodiacinfoService",["$http",function(i){this.getJSONP=function(a){return i.jsonp(a).success(function(i){return i})}}]),angular.module("fiFifortuneDesk0").service("jsonpService",["$http",function(i){this.getJSON=function(a){return i.get(a).then(function(i){return i.data})},this.getJSONP=function(a){return i.jsonp(a).success(function(i){return i})}}]),angular.module("fiFifortuneDesk0").controller("MainCtrl",["$scope","$location","zodiacmakerService","jsonpService",function(i,a,e,n){var t=e.getZodiacs(),s=Math.floor(Math.random()*t.length);i.zodiac=t[s];var o=n.getJSON("http://"+a.host()+":80/fortunetellers");console.log(o)}]),angular.module("fiFifortuneDesk0").filter("check_if_text",function(){return function(i){return angular.isString(i)===!0?i:void 0}}),angular.module("fiFifortuneDesk0").run(["$templateCache",function(i){i.put("app/main/main.html",'<div class="row"><div class="small-2 columns"><div ng-include="\'components/sidenavbar/sidenavbar.html\'"></div></div><div class="small-10 columns"><div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><div class="row"><div class="large-12 large-text-center columns"><div class="panel"><img class="right" ng-src="assets/images/{{zodiac.image}}.png" alt="{{zodiac.name}}"><div class="caption"><h3>{{zodiac.name}}</h3><p>{{zodiac.defzodiac}}</p></div></div></div></div></div></div></div>'),i.put("app/zodiac/zodiac.html",'<div class="row"><div class="small-2 columns"><div ng-include="\'components/sidenavbar/sidenavbar.html\'"></div></div><div class="small-10 columns"><div class="container"><div ng-include="\'components/navbar/navbar.html\'"></div><img class="right" ng-src="assets/images/{{zodiac.image}}.png" alt="{{zodiac.name}}"><div class="fontSize170"><h3>{{zodiac.name}}</h3><div ng-if="!loadOK"><img class="bigspinner" ng-src="assets/images/spiffygif.gif" alt="{{zodiac.name}}">...Odotta...</div><div ng-repeat="info in extinfo.query.results.p"><p class="fontSize">{{info | check_if_text}}</p></div></div></div></div></div>'),i.put("components/navbar/navbar.html",'<nav class="top-bar" data-topbar="" role="navigation" ng-controller="NavbarCtrl"><ul class="title-area"><li class="domain">{{domain}}</li></ul><section class="top-bar-section"><ul class="right"><li class="active"><a ui-sref="home">Home</a></li></ul><ul class="left"><li><a ui-sref="home">Nykyinen päivämäärä: {{ date | date:\'dd-MM-yyyy\' }}</a></li></ul></section></nav>'),i.put("components/sidenavbar/sidenavbar.html",'<div ng-controller="SidenavbarCtrl"><ul class="side-nav" ng-repeat="zodiac in zodiacs"><li><a ui-sref="zodiac({sign:zodiac.name})" ng-click="selectZodiac(zodiac)"><img ng-src="assets/images/{{zodiac.image}}.png">{{zodiac.name}}</a></li></ul></div>')}]);