'use strict';

angular.module('fiFifortuneDesk0')
.service('zodiacmakerService', function () {
	
	
	this.getZodiacs = function() {
		
	
	    return [
	                   {
	                    'name': 'Kauris',
	                    'image': 'capricorn',
	                    'link': 'horoskooppi-kauris-2212-191',
	                    'defzodiac': 'Kauriit ovat sitkeitä ja kestäviä. Kauriit ovat vakavia ja kurinalaisia, ja he haluavat elämänsä olevan järjestelmällistä ja hyvin suunniteltua. Kauriilla pitää olla konkreettinen päämäärä, jotta hän tietää, mihin on menossa ja miksi. Kauris on kärsivällinen, varovainen ja erittäin käytännöllinen.'
	                   },	                   
	                     {
		                       'name': 'Vesimies',
		                       'image': 'aquarius',
		                       'link': 'horoskooppi-vesimies-201-192',
		                       'defzodiac': 'Vesimiehet ovat eläinratamme suuria oivaltajia, jotka pystyvät näkemään tulevaisuuden verhon lävitse. Tämä ainutlaatuinen lahjakkuus tekee vesimiehistä outoja ja usein yksinäisiä ihmisiä, joiden näkemykset ymmärretään lähes poikkeuksetta vain omien etujen ajamiseksi, vaikka vesimies aina ajattelee enemmän muita kuin itseään. Into tutkia ja keksiä uutta ovat vesimiehen hallitsevimmat piirteet. Selkeänäköisyys, omaleimaisuus, ennakkoluulottomuus ja arvaamattomuus ovat tyypillisiä vesimiehen ominaisuuksia.'
		                     },
		                     {
			                       'name': 'Kalat',
			                       'image': 'pisces',
			                       'link': 'horoskooppi-kalat-202-203',
			                       'defzodiac': 'Kalaihmiset ovat vuodenaikansa mukaisesti hyvin herkkiä ympärillään tapahtuville mielialan muutoksille. He vaistoavat tulevia asioita, vaikka eivät pysty todistamaan aavistuksiaan todeksi. Kalat elävät omassa herkässä maailmassaan. Heidän kauttaan elämässä tapahtuu jatkuvaa heräämistä ja alitajuista kehittymistä.'
			                     },
			                     {
				                       'name': 'Oinas',
				                       'image': 'aries',
				                       'link': 'horoskooppi-oinas-213-194',
				                       'defzodiac': 'Oinas on yleensä itsevarma, herkästi innostuva, yritteliäs, aloitekykyinen, impulsiivinen ja energinen. Kärsimättömyys kuuluu merkin suurimpiin heikkouksiin. Kaiken pitäisi tapahtua oinaan mielestä heti. Jos asiat eivät menekään oinaan mielen mukaan, hän ärsyyntyy herkästi. Oinas voi sortua myös aggressiivisuuteen. Pitkäjänteisyyttä vaativat tehtävät tuottavat monesti tämän piirteen takia oinaalle suuria vaikeuksia.'
				                     },
				                     {
					                       'name': 'Härkä',
					                       'image': 'taurus',
					                       'link': 'horoskooppi-harka-204-205',
					                       'defzodiac': 'Härkä on itsepäisyyteen saakka sitkeä, perusteellinen, asiallinen, harkitseva ja kärsivällinen. Hän osaa kuitenkin myös nautiskella elämän pienistä iloista.'
					                     },
					                     {
						                       'name': 'Kaksoset',
						                       'image': 'gemini',
						                       'link': 'horoskooppi-kaksoset-215-206',
						                       'defzodiac': 'Vilkkaus, uteliaisuus, innostuneisuus, puheliaisuus ja nopea ajattelu ovat kaksosille tyypillisiä piirteitä. Kaksonen on koko ajan hyvin tietoinen kaikesta ympärillään tapahtuvasta. Hän ilmaisee nopeaälyisenä itseään helposti sekä suullisesti että kirjallisesti. Kaksonen on levoton ja liikkuva, mutta sopeutuu juuri siksi vaivatta uusiin olosuhteisiin.'
						                     },
						                     {
							                       'name': 'Rapu',
							                       'image': 'cancer',
							                       'link': 'horoskooppi-rapu-216-227',
							                       'defzodiac': 'Ravulla on suojeleva, äidillinen maaemon luonne. Aikansa ilmiöitä seuraten ravut osaavat luoda ympärilleen turvallisen ja hellän ilmapiirin niin halutessaan. Ravun tyypillisiä ominaisuuksia ovat suojeluvaisto, sopeutuvuus, intuitio, hyvä muisti, huomaavaisuus ja myötätunto.'
							                     },
							                     {
								                       'name': 'Leijona',
								                       'image': 'leo',
								                       'link': 'horoskooppi-leijona-237-228',
								                       'defzodiac': 'Leijona on antelias, luova, johtamiskykyinen, elinvoimainen, arvokas ja viisas. Leijona on ihminen, joka luo itse oman arvomaailmansa ja on avoimesti ylpeä itsestään.'
								                     },
								                     {
									                       'name': 'Neitsyt',
									                       'image': 'virgo',
									                       'link': 'horoskooppi-neitsyt-238-229',
									                       'defzodiac': 'Neitsyt huomaa heti, kun jokin asia ei ole kohdallaan tai oikeassa paikassa. Hän huolehtii muita merkkejä paremmin myös itsestään, ulkonäöstään ja kunnostaan. Neitsyen tyypillisiä ominaisuuksia ovatkin arvostelukyky, äärimmäinen tarkkuus, älykkyys, nopea käsityskyky ja hyvä terveys.'
									                     },
									                     {
										                       'name': 'Vaaka',
										                       'image': 'libra',
										                       'link': 'horoskooppi-vaaka-239-2310',
										                       'defzodiac': 'Tasapainoilu, kontaktikyky, diplomaattisuus, elämänmyönteisyys ja kyky nauttia elämästä ovat vaakaihmiselle ominaisia piirteitä. Mietteliäs ja herkkä vaaka etsii tasapainoa ja harmoniaa kaikkialta. Hän kaipaa huomiota enemmän kuin muut merkit, ja joskus hänen on vaikea olla yksin. Hyvät ihmissuhteet ovatkin avain vaa’an onneen ja tyytyväisyyteen. Niiden puute voi saada vaa’an masentumaan.'
										                     },
										                     {
											                       'name': 'Skorpioni',
											                       'image': 'scorpio',
											                       'link': 'horoskooppi-skorpioni-2410-2211',
											                       'defzodiac': 'Skorpionit ovat hyvin kiinnostuneita elämän alkemiallisista salaisuuksista ja tutkivat innokkaina elämää suurempia mysteerejä.'
											                     },
											                     {
												                       'name': 'Jousimies',
												                       'image': 'sagittarius',
												                       'link': 'horoskooppi-jousimies-2311-2112',
												                       'defzodiac': 'Jousimiehet ovat eläinradan suuria optimisteja, jotka ovat valmiita tekemään paljon töitä tulevaisuudessa häämöttävien mahdollisuuksien ja menestyksen eteen. Jokaisella jousimiehellä on oma vahva filosofiansa ja vankkumaton luottamus omiin ideoihinsa ja haaveisiinsa.'
												                     }
	                     	                     
	                   ];
	};

	  
	  
	  
  });