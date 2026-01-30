
// Product rendering
const products = [
{
  name:'Wild Raw Honey - 500g',
  ta:'காடு செறிந்த தேன் - 500கிராம்',
  price:'₹999',
  img:'images/wildhoney.jpg',
  descEn:`<strong>Description:</strong> Sourced directly from forest beehives, this honey is unprocessed and retains all natural enzymes and pollen.<br>
<strong>Ingredients:</strong> 100% Pure Forest Nectar.<br>
<strong>Health Benefits:</strong> Boosts immunity, treats cough and cold, rich in antioxidants, natural energy booster.`,
  descTa:`<strong>விளக்கம்:</strong> காடுகளில் உள்ள தேன்கூடுகளில் இருந்து நேரடியாக எடுக்கப்படும் சுத்தமான தேன்; எந்த விதமான சுத்திகரிப்புக்கும் உட்படுத்தப்படாதது.<br>
<strong>பொருட்கள்:</strong> 100% தூய காட்டு மலர் தேன்.<br>
<strong>நன்மைகள்:</strong> நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது, இருமல் மற்றும் சளியை குணப்படுத்துகிறது, இயற்கையான ஆற்றலை வழங்குகிறது.`,
  insta:'https://www.instagram.com/reel/DJeJ8F4ymt-/?igsh=MXgwMG1ja2xleGtvbg=='
},
{
  name:'Multi Floral Honey - 500g',
  ta:'பல மலர் தேன் - 500கிராம்',
  price:'₹449',
  img:'images/mfhoney.jpg',
  descEn:`<strong>Description:</strong> Collected by bees from a variety of seasonal wildflowers, offering a complex flavor profile and diverse nutrients.<br>
<strong>Ingredients:</strong> Nectar from various wildflowers.<br>
<strong>Health Benefits:</strong> Aids digestion, improves skin health, provides seasonal allergy relief.`,
  descTa:`<strong>விளக்கம்:</strong> பல்வேறு வகையான பருவகால காட்டுப்பூக்களில் இருந்து தேனீக்களால் சேகரிக்கப்படும் தேன்; இது தனித்துவமான சுவை கொண்டது.<br>
<strong>பொருட்கள்:</strong> பல்வேறு மலர்களின் தேன் துளிகள்.<br>
<strong>நன்மைகள்:</strong> செரிமானத்திற்கு உதவுகிறது, சரும ஆரோக்கியத்தை மேம்படுத்துகிறது, ஒவ்வாமையை குறைக்கிறது.`,
  insta:'https://www.instagram.com/reel/DKkAxWTyqzy/?igsh=NTQybHp0aGVscm0x'
},
{
  name:'A2 Ghee - 500ml',
  ta:'A2 நாட்டுமாட்டு நெய் - 500மி.லி',
  price:'₹799',
  img:'images/a2 ghee.jpg',
  descEn:`<strong>Description:</strong> Hand-churned using the traditional Bilona method from the milk of indigenous (Desi) cows.<br>
<strong>Ingredients:</strong> Pure A2 Cow Milk Fat.<br>
<strong>Health Benefits:</strong> Easy to digest, improves brain health, strengthens bones, promotes heart health.`,
  descTa:`<strong>விளக்கம்:</strong> நாட்டுப் பசுக்களின் பாலில் இருந்து பாரம்பரிய பிலோனா முறையில் தயாரிக்கப்படும் உயர்தர நெய்.<br>
<strong>பொருட்கள்:</strong> தூய A2 நாட்டுப் பசுவின் பால் கொழுப்பு.<br>
<strong>நன்மைகள்:</strong> எளிதில் செரிமானமாகும், மூளை வளர்ச்சியை மேம்படுத்தும், எலும்புகளை வலுவாக்கும்.`,
  insta:'https://www.instagram.com/reel/DLZ6MU1y49R/?igsh=MWhhdjIwZmRkdTU2Zg=='
},
{
  name:'A1 Ghee - 500ml',
  ta:'A1 நெய் - 500மி.லி',
  price:'₹449',
  img:'images/a1 ghee.jpg',
  descEn:`<strong>Description:</strong> Prepared from the milk of hybrid cow breeds, commonly used for everyday cooking and deep frying.<br>
<strong>Ingredients:</strong> Milk fat from hybrid cow breeds (HF/Jersey).<br>
<strong>Health Benefits:</strong> Source of fat-soluble vitamins, provides essential calories, enhances food flavor.`,
  descTa:`<strong>விளக்கம்:</strong> கலப்பின பசுக்களின் பாலில் இருந்து தயாரிக்கப்படும் நெய்; இது அன்றாட சமையலுக்கு பயன்படுத்தப்படுகிறது.<br>
<strong>பொருட்கள்:</strong> கலப்பின பசுவின் பால் கொழுப்பு.<br>
<strong>நன்மைகள்:</strong> வைட்டமின்கள் நிறைந்தது, உடலுக்குத் தேவையான கலோரிகளை வழங்குகிறது.`,
  insta:'https://www.instagram.com/reel/DMh7X8UyNr8/?igsh=aXdnOWp0NmNibGll'
},
{
  name:'Multi Millet Health Mix - 500g',
  ta:'பல சிறுதானிய சத்துமாவு - 500கிராம்',
  price:'₹349',
  img:'images/mmhx.jpg',
  descEn:`<strong>Description:</strong> A nutrient-dense blend of various millets and pulses, ideal as a breakfast meal for all ages.<br>
<strong>Ingredients:</strong> Ragi, Bajra, Jowar, Foxtail Millet, Little Millet, Roasted Gram, Cardamom.<br>
<strong>Health Benefits:</strong> High in fiber, controls blood sugar, weight management, rich in minerals.`,
  descTa:`<strong>விளக்கம்:</strong> பல்வேறு சிறுதானியங்கள் மற்றும் பருப்பு வகைகளின் கலவை; இது அனைத்து வயதினருக்கும் ஏற்ற காலை உணவு.<br>
<strong>பொருட்கள்:</strong> ராகி, கம்பு, சோளம், தினை, சாமை, பொட்டுகடலை, ஏலக்காய்.<br>
<strong>நன்மைகள்:</strong> நார்ச்சத்து அதிகம், சர்க்கரை அளவை கட்டுப்படுத்துகிறது, உடல் எடையை சீராக வைக்கிறது.`,
  insta:'https://www.instagram.com/reel/DTAqoSbkjKi/?igsh=YnhkeHplM3hpbXcw'
},
{
  name:'Sprouted Health Mix - 250g',
  ta:'முளைகட்டிய சத்துமாவு - 250கிராம்',
  price:'₹175',
  img:'images/shmix.jpg',
  descEn:`<strong>Description:</strong> Made from sprouted grains which enhances nutrient absorption and digestion.<br>
<strong>Ingredients:</strong> Sprouted Ragi, Sprouted Green Gram, Sprouted Wheat, Sprouted Bajra, Almonds, Cashews.<br>
<strong>Health Benefits:</strong> Maximum nutrient absorption, protein-rich, boosts growth in children, high iron content.`,
  descTa:`<strong>விளக்கம்:</strong> முளைகட்டிய தானியங்களால் தயாரிக்கப்பட்டது; இது ஊட்டச்சத்துக்களை உடல் எளிதில் உறிஞ்ச உதவுகிறது.<br>
<strong>பொருட்கள்:</strong> முளைகட்டிய ராகி, பச்சைப்பயறு, கோதுமை, கம்பு, பாதாம், முந்திரி.<br>
<strong>நன்மைகள்:</strong> புரதச்சத்து நிறைந்தது, குழந்தைகளின் வளர்ச்சிக்கு உதவுகிறது, ரத்த சோகையை தடுக்கிறது.`,
  insta:'https://www.instagram.com/reel/DNIetWISdHk/?igsh=dm1tbTF5bjhpbnJp'
},
{
  name:'Palm Sugar - 250g',
  ta:'பனங்கற்கண்டு - 250கிராம்',
  price:'₹175',
  img:'images/psugar.jpg',
  descEn:`<strong>Description:</strong> A natural sweetener extracted from the sap of palm trees, known for its cooling properties.<br>
<strong>Ingredients:</strong> Palm Tree Sap (Neera).<br>
<strong>Health Benefits:</strong> Cleanses respiratory tract, rich in iron, low glycemic index, treats sore throat.`,
  descTa:`<strong>விளக்கம்:</strong> பனை மரத்தின் பதநீரில் இருந்து எடுக்கப்படும் இயற்கை இனிப்பு; இது உடலுக்கு குளிர்ச்சியைத் தரும்.<br>
<strong>பொருட்கள்:</strong> பனை பதநீர்.<br>
<strong>நன்மைகள்:</strong> சுவாசப்பாதையை சுத்தப்படுத்துகிறது, இரும்புச்சத்து நிறைந்தது, தொண்டை புண்ணை குணமாக்கும்.`,
  insta:'https://www.instagram.com/reel/DM0LrgyS4yC/?igsh=dDIxMW4zdDhob3Bw'
},
{
  name:'Coconut Sugar - 250g',
  ta:'தேங்காய் சர்க்கரை - 250கிராம்',
  price:'₹150',
  img:'images/csugar.jpg',
  descEn:`<strong>Description:</strong> Produced from the sap of coconut palm blossoms, a healthy alternative to refined white sugar.<br>
<strong>Ingredients:</strong> Coconut Blossom Nectar.<br>
<strong>Health Benefits:</strong> Contains electrolytes, supports gut health, provides stable energy, rich in Zinc and Potassium.`,
  descTa:`<strong>விளக்கம்:</strong> தென்னை மர பூக்களின் சாற்றில் இருந்து தயாரிக்கப்படும் சர்க்கரை; இது வெள்ளை சர்க்கரைக்கு சிறந்த மாற்றாகும்.<br>
<strong>பொருட்கள்:</strong> தென்னை மலர் சாறு.<br>
<strong>நன்மைகள்:</strong> தாதுக்கள் நிறைந்தது, குடல் ஆரோக்கியத்தை மேம்படுத்துகிறது, உடனடி ஆற்றலைத் தருகிறது.`,
  insta:'https://www.instagram.com/reel/DM0LrgyS4yC/?igsh=dDIxMW4zdDhob3Bw'
},
{
  name:'Fennel Honey - 500g',
  ta:'சோம்பு தேன் - 500கிராம்',
  price:'₹599',
  img:'images/fennelhoney.jpg',
  descEn:`<strong>Description:</strong> Honey produced by bees that primarily forage on fennel flowers, carrying a distinct aromatic flavor.<br>
<strong>Ingredients:</strong> Fennel flower nectar.<br>
<strong>Health Benefits:</strong> Relieves bloating, improves digestion, freshens breath, reduces menstrual cramps.`,
  descTa:`<strong>விளக்கம்:</strong> சோம்பு மலர்களில் இருந்து தேனீக்களால் சேகரிக்கப்படும் தேன்; இது ஒரு தனித்துவமான நறுமணம் கொண்டது.<br>
<strong>பொருட்கள்:</strong> சோம்பு மலர் தேன்.<br>
<strong>நன்மைகள்:</strong> வயிற்று உப்பசத்தை குறைக்கிறது, செரிமானத்தை தூண்டுகிறது, மாதவிடாய் வலியை குறைக்கிறது.`,
  insta:'https://www.instagram.com/reel/DQMSv6NElYV/?igsh=MTdiazlxdnFwcjR1ag=='
},
{
  name:'Tulsi Honey - 500g',
  ta:'துளசி தேன் - 500கிராம்',
  price:'₹599',
  img:'images/tulsihoney.jpg',
  descEn:`<strong>Description:</strong> Honey infused with the essence of Holy Basil (Tulsi), widely used in Ayurvedic remedies.<br>
<strong>Ingredients:</strong> Tulsi flower nectar / Tulsi extract.<br>
<strong>Health Benefits:</strong> Relieves stress, treats respiratory issues, antibacterial properties, strengthens heart.`,
  descTa:`<strong>விளக்கம்:</strong> துளசி மலர்களின் சாறு நிறைந்த தேன்; இது ஆயுர்வேத மருத்துவத்தில் முக்கிய பங்கு வகிக்கிறது.<br>
<strong>பொருட்கள்:</strong> துளசி மலர் தேன்.<br>
<strong>நன்மைகள்:</strong> மன அழுத்தத்தை குறைக்கிறது, சுவாச கோளாறுகளை நீக்குகிறது, இதயத்தை பலப்படுத்துகிறது.`,
  insta:'https://www.instagram.com/reel/DQT7pYCDBYO/?igsh=MTV2dmdqMWdkc25tdQ=='
},
{
  name:'Kashmiri Aqua Honey - 500g',
  ta:'காஷ்மீர் அக்வா தேன் - 500கிராம்',
  price:'₹599',
  img:'images/kashmirihoney.jpg',
  descEn:`<strong>Description:</strong> A premium, light-colored honey collected from the pristine valleys of Kashmir, known for its purity and mild taste.<br>
<strong>Ingredients:</strong> Nectar from Himalayan wildflowers (Acacia/Sulai).<br>
<strong>Health Benefits:</strong> Blood purifier, improves skin glow, rich in enzymes, natural sleep aid.`,
  descTa:`<strong>விளக்கம்:</strong> காஷ்மீர் பள்ளத்தாக்குகளில் இருந்து சேகரிக்கப்படும் பிரீமியம் வகை தேன்; இது மிகவும் வெண்மையாகவும் சுவையாகவும் இருக்கும்.<br>
<strong>பொருட்கள்:</strong> இமயமலை மலர் தேன்.<br>
<strong>நன்மைகள்:</strong> ரத்தத்தை சுத்திகரிக்கிறது, சரும பொலிவை தருகிறது, தூக்கமின்மையை போக்க உதவுகிறது.`,
  insta:'https://www.instagram.com/reel/DQmC2IoEh_d/?igsh=MXdiOXByMmhkZmkyNg=='
},
{
  name:'Neem Honey - 500g',
  ta:'வேம்பு தேன் - 500கிராம்',
  price:'₹699',
  img:'images/neemhoney.jpg',
  descEn:`<strong>Description:</strong> A dark, medicinal honey collected from Neem flowers, valued for its high therapeutic properties.<br>
<strong>Ingredients:</strong> Neem flower nectar.<br>
<strong>Health Benefits:</strong> Natural antiseptic, treats skin allergies, supports liver health, helps in deworming.`,
  descTa:`<strong>விளக்கம்:</strong> வேப்பம் பூக்களில் இருந்து எடுக்கப்படும் மருத்துவ குணம் நிறைந்த தேன்; இது சற்று கசப்பு கலந்த சுவை கொண்டது.<br>
<strong>பொருட்கள்:</strong> வேப்பம் பூ தேன்.<br>
<strong>நன்மைகள்:</strong> சிறந்த கிருமிநாசினி, தோல் ஒவ்வாமையை நீக்குகிறது, கல்லீரல் ஆரோக்கியத்தை மேம்படுத்துகிறது.`,
  insta:'https://www.instagram.com/reel/DQbtC7ujApT/?igsh=b2x4cGNyamV2bWtv'
},
{
  name:'Moringa Honey - 500g',
  ta:'முருங்கை தேன் - 500கிராம்',
  price:'₹999',
  img:'images/mhoney.jpg',
  descEn:`<strong>Description:</strong> A premium medicinal honey collected from the nectar of moringa (drumstick) flowers, combining the power of moringa with raw honey.<br>
<strong>Ingredients:</strong> Raw moringa flower honey.<br>
<strong>Health Benefits:</strong> Increases immunity, treats anemia, boosts energy, improves skin health, supports bone strength.`,
  descTa:`<strong>விளக்கம்:</strong> முருங்கை பூக்களின் தேனிலிருந்து சேகரிக்கப்படும் இந்தத் தேன் மருத்துவ குணங்கள் நிறைந்தது; இது முருங்கை மரத்தின் சத்துக்களையும் தேனின் நன்மைகளையும் ஒருசேர வழங்குகிறது.<br>
<strong>பொருட்கள்:</strong> சுத்தமான முருங்கைத் தேன்.<br>
<strong>நன்மைகள்:</strong> நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது, இரத்த சோகையை குணப்படுத்துகிறது, உடனடி ஆற்றலைத் தருகிறது, சரும ஆரோக்கியத்தை மேம்படுத்துகிறது மற்றும் எலும்புகளை வலுவாக்குகிறது.`,
  insta:'https://www.instagram.com/reel/DOAh-7yAKCh/?igsh=OTVyM2hydXVtN2d3'
},
{
  name:'ABC Malt - 180g',
  ta:'ABC மால்ட் - 180கிராம்',
  price:'₹249',
  img:'images/abcmalt.jpg',
  descEn:`<strong>Description:</strong> A healthy powdered drink mix made from Apple, Beetroot, and Carrot, often called the “Miracle Drink.”<br>
<strong>Ingredients:</strong> Dried Apple, Beetroot, Carrot, Almonds, Country Sugar/Jaggery.<br>
<strong>Health Benefits:</strong> Increases hemoglobin, glows skin, detoxifies the body, improves eyesight.`,
  descTa:`<strong>விளக்கம்:</strong> ஆப்பிள், பீட்ரூட் மற்றும் கேரட் கொண்டு தயாரிக்கப்படும் ஒரு சத்தான பானம்; இது “அதிசய பானம்” என அழைக்கப்படுகிறது.<br>
<strong>பொருட்கள்:</strong> ஆப்பிள், பீட்ரூட், கேரட், பாதாம், நாட்டுச்சர்க்கரை.<br>
<strong>நன்மைகள்:</strong> ரத்த சிவப்பணுக்களை அதிகரிக்கிறது, உடலை நச்சு நீக்கம் செய்கிறது, கண் பார்வையை மேம்படுத்துகிறது.`,
  insta:'https://www.instagram.com/reel/DPBqp0LkryZ/?igsh=aW1pZXpqbzBxem0w'
}
];

const grid=document.getElementById('productGrid');
const modal=new bootstrap.Modal(document.getElementById('productModal'));
const modalTitle=document.getElementById('modalTitle');
const modalImage=document.getElementById('modalImage');
const modalPrice=document.getElementById('modalPrice');
const modalDesc=document.getElementById('modalDesc');
const instaBtn=document.getElementById('instaBtn');
let lang='en';
let currentProduct=null;

products.forEach(p=>{
const card = document.createElement('div');
card.className = 'product-card';
card.innerHTML = `
  <img class="product-img" src="${p.img}">
  <div class="mt-2">
    <div class="fw-bold">${p.name}</div>
    <div class="small text-muted">${p.ta}</div>
    <div class="price mt-1">${p.price}</div>
  </div>`;
card.onclick = () => openProduct(p);
grid.appendChild(card);

});

function openProduct(p){
  currentProduct=p;
  modalTitle.textContent=lang==='ta'?p.ta:p.name;
  modalImage.src=p.img;
  modalPrice.textContent=p.price;
  modalDesc.innerHTML=`<p>${lang==='ta'?p.descTa:p.descEn}</p>`;
  instaBtn.href=p.insta;
  instaBtn.style.display=p.insta?'inline-block':'none';
  modal.show();
  setTimeout(()=>modalDesc.classList.add('show'),50);
}

document.getElementById('langToggle').onclick=()=>{
  lang=lang==='en'?'ta':'en';
  document.getElementById('pageTitle').textContent=lang==='ta'?'எங்கள் பொருட்கள்':'Our Products';
};

document.getElementById('modalLangToggle').onclick = () => {
  lang = lang === 'en' ? 'ta' : 'en';
  if (currentProduct) {
    modalTitle.textContent = lang === 'ta' ? currentProduct.ta : currentProduct.name;
    modalDesc.innerHTML = `<p>${lang === 'ta' ? currentProduct.descTa : currentProduct.descEn}</p>`;
  }
};

// Video toggle
const videoWrap=document.querySelector('.video-wrap');
const video=videoWrap.querySelector('video');

function updateSoundText(){
  if(video.muted){
    videoWrap.style.setProperty('--sound-text','"🔇 sound off"');
    videoWrap.classList.remove('sound-on');
  }else{
    videoWrap.style.setProperty('--sound-text','"🔊 sound on"');
    videoWrap.classList.add('sound-on');
  }
}
videoWrap.addEventListener('click',()=>{
  video.muted=!video.muted;
  updateSoundText();
});
updateSoundText();