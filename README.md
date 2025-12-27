<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>🧠 AK10 MediBrain - 1st Year MBBS</title>
<style>
body {font-family:"Segoe UI",Arial,sans-serif;background:#e0f7fa;margin:0;padding:0;}
header {background:#00695c;color:white;padding:25px;text-align:center;box-shadow:0 4px 10px rgba(0,0,0,0.1);}
header h1{margin:0;font-size:2em;}
header p{margin:5px;font-size:16px;}
.container {max-width:1200px;margin:30px auto;padding:20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px;}
.card {background:white;border-radius:12px;padding:20px;box-shadow:0 8px 25px rgba(0,0,0,0.1);transition:transform 0.3s,box-shadow 0.3s;position:relative;}
.card:hover {transform:translateY(-5px);box-shadow:0 12px 30px rgba(0,0,0,0.2);}
.card h3 {margin-top:0;font-size:1.2em;}
.card p {margin:5px 0;font-size:1em;}
.card .icon {position:absolute;top:15px;right:15px;font-size:1.8em;}
.resultBox {margin-top:10px;padding:12px;border-radius:8px;font-weight:bold;line-height:1.3;}
.normal {background:#2ecc71;color:white;}
.low {background:#f1c40f;color:white;}
.high {background:#e74c3c;color:white;}
input[type="number"] {width:100%;padding:10px;border-radius:6px;border:1px solid #ccc;font-size:16px;margin-top:5px;}
button {grid-column:1/-1;padding:18px;background:#6c5ce7;color:white;border:none;border-radius:10px;font-size:18px;cursor:pointer;margin-top:20px;}
button:hover {background:#4834d4;}
</style>
</head>
<body></body>

<header>
<h1>🧠 AK10! MediBrain</h1>
<p>Interactive Clinical Learning Tool for 1st-Year MBBS 🩺</p>
</header>

<div class="container">

<!-- Heart Rate -->
<div class="card">
<div class="icon">💓</div>
<h3>Heart Rate (bpm)</h3>
<input type="number" id="hr" placeholder="60-100">
<div id="hrResult" class="resultBox"></div>
</div>

<!-- BP Systolic -->
<div class="card">
<div class="icon">🩸</div>
<h3>BP Systolic (mmHg)</h3>
<input type="number" id="bps" placeholder="90-120">
<div id="bpsResult" class="resultBox"></div>
</div>

<!-- BP Diastolic -->
<div class="card">
<div class="icon">🩸</div>
<h3>BP Diastolic (mmHg)</h3>
<input type="number" id="bpd" placeholder="60-80">
<div id="bpdResult" class="resultBox"></div>
</div>

<!-- Temperature -->
<div class="card">
<div class="icon">🌡️</div>
<h3>Temperature (°C)</h3>
<input type="number" id="temp" step="0.1" placeholder="36.5-37.5">
<div id="tempResult" class="resultBox"></div>
</div>

<!-- SpO2 -->
<div class="card">
<div class="icon">🫁</div>
<h3>SpO₂ (%)</h3>
<input type="number" id="spo2" placeholder="95-100">
<div id="spo2Result" class="resultBox"></div>
</div>

<!-- Hemoglobin -->
<div class="card">
<div class="icon">🧬</div>
<h3>Hemoglobin (g/dL)</h3>
<input type="number" id="hb" placeholder="12-16">
<div id="hbResult" class="resultBox"></div>
</div>

<!-- WBC -->
<div class="card">
<div class="icon">⚡</div>
<h3>WBC Count (/µL)</h3>
<input type="number" id="wbc" placeholder="4000-11000">
<div id="wbcResult" class="resultBox"></div>
</div>

<!-- Platelets -->
<div class="card">
<div class="icon">🧪</div>
<h3>Platelets (/µL)</h3>
<input type="number" id="plt" placeholder="150000-450000">
<div id="pltResult" class="resultBox"></div>
</div>

<!-- Hematocrit -->
<div class="card">
<div class="icon">🧬</div>
<h3>Hematocrit (%)</h3>
<input type="number" id="hct" placeholder="36-46">
<div id="hctResult" class="resultBox"></div>
</div>

<!-- MCV -->
<div class="card">
<div class="icon">🧬</div>
<h3>MCV (fL)</h3>
<input type="number" id="mcv" placeholder="80-100">
<div id="mcvResult" class="resultBox"></div>
</div>

<!-- MCH -->
<div class="card">
<div class="icon">🧬</div>
<h3>MCH (pg)</h3>
<input type="number" id="mch" placeholder="27-33">
<div id="mchResult" class="resultBox"></div>
</div>

<!-- MCHC -->
<div class="card">
<div class="icon">🧬</div>
<h3>MCHC (g/dL)</h3>
<input type="number" id="mchc" placeholder="32-36">
<div id="mchcResult" class="resultBox"></div>
</div>

<!-- Fasting Blood Sugar -->
<div class="card">
<div class="icon">🍬</div>
<h3>Fasting Blood Sugar (mg/dL)</h3>
<input type="number" id="fbs" placeholder="70-100">
<div id="fbsResult" class="resultBox"></div>
</div>

<!-- Fetal Heart Rate -->
<div class="card">
<div class="icon">👶</div>
<h3>Fetal Heart Rate (bpm)</h3>
<input type="number" id="fhr" placeholder="110-160">
<div id="fhrResult" class="resultBox"></div>
</div>

<button onclick="diagnose()">🧠 Diagnose</button>

</div>

<script>
// Fully Integrated Diagnostic Function
function checkValue(value,min,max,lowMsg,highMsg, lowFact, highFact, lowDrug, highDrug, microLow, microHigh, clinicalLow, clinicalHigh){
    if(value<min) return {status:'low',msg:lowMsg + " | Why: " + lowFact + " | Drug: " + lowDrug + " | Microbiology: " + microLow + " | Clinical: " + clinicalLow};
    else if(value>max) return {status:'high',msg:highMsg + " | Why: " + highFact + " | Drug: " + highDrug + " | Microbiology: " + microHigh + " | Clinical: " + clinicalHigh};
    else return {status:'normal',msg:'Normal'};
}

function diagnose(){
    // Heart Rate
    let hr = parseFloat(document.getElementById('hr').value);
    let hrCheck = checkValue(hr,60,100,
        'Bradycardia → slow HR','Tachycardia → fast HR',
        'Increased parasympathetic tone or athletic heart','Increased sympathetic activity, fever, hypovolemia',
        'Beta-blockers, Digoxin','Atropine, Epinephrine, Beta-agonists',
        'Viral infections','Bacterial infections',
        'Dizziness, fatigue','Palpitations, hypotension');
    document.getElementById('hrResult').innerText=hrCheck.msg;
    document.getElementById('hrResult').className='resultBox '+hrCheck.status;

    // BP Systolic
    let bps = parseFloat(document.getElementById('bps').value);
    let bpsCheck = checkValue(bps,90,120,
        'Low BP → dizziness','High BP → hypertension risk',
        'Reduced cardiac output, dehydration, adrenal insufficiency','Increased peripheral resistance, hypervolemia',
        'Diuretics, Vasodilators','Corticosteroids, NSAIDs',
        'Sepsis, dehydration','CKD, endocrine disorders',
        'Dizziness, fainting','Headache, risk of stroke');
    document.getElementById('bpsResult').innerText=bpsCheck.msg;
    document.getElementById('bpsResult').className='resultBox '+bpsCheck.status;

    // BP Diastolic
    let bpd = parseFloat(document.getElementById('bpd').value);
    let bpdCheck = checkValue(bpd,60,80,
        'Low BP → dizziness','High BP → hypertension risk',
        'Reduced peripheral resistance','Increased vascular resistance',
        'Diuretics','Corticosteroids, NSAIDs',
        'Sepsis','Inflammatory conditions',
        'Dizziness, fainting','Headache, vascular risk');
    document.getElementById('bpdResult').innerText=bpdCheck.msg;
    document.getElementById('bpdResult').className='resultBox '+bpdCheck.status;

    // Temperature
    let temp = parseFloat(document.getElementById('temp').value);
    let tempCheck = checkValue(temp,36.5,37.5,
        'Hypothermia → low temp','Fever/Hyperthermia → infection',
        'Reduced metabolic activity, CNS depression','Pyrogen-induced hypothalamic setpoint elevation',
        'Sedatives, opioids','Clozapine, masked by antibiotics',
        'Viral infections','Bacterial infections',
        'Shivering, lethargy','Fever, sweating, dehydration');
    document.getElementById('tempResult').innerText=tempCheck.msg;
    document.getElementById('tempResult').className='resultBox '+tempCheck.status;

    // SpO2
    let spo2 = parseFloat(document.getElementById('spo2').value);
    let spo2Check = checkValue(spo2,95,100,
        'Hypoxemia → low oxygen','Normal or rare high',
        'Hypoventilation, lung disease','Usually normal',
        'Opioids, sedatives','Supplemental oxygen',
        'Pneumonia, ARDS','None',
        'Cyanosis, fatigue','Usually normal');
    document.getElementById('spo2Result').innerText=spo2Check.msg;
    document.getElementById('spo2Result').className='resultBox '+spo2Check.status;

    // Hemoglobin
    let hb = parseFloat(document.getElementById('hb').value);
    let hbCheck = checkValue(hb,12,16,
        'Anemia → low hemoglobin','Polycythemia → high hemoglobin',
        'Reduced RBC production, blood loss','Chronic hypoxia, high altitude',
        'Chemotherapy, Paracetamol overdose','Erythropoietin, Androgens',
        'Viral infections, malaria','Rare bacterial polycythemia',
        'Fatigue, pallor, weakness','Hyperviscosity, headache, thrombosis');
    document.getElementById('hbResult').innerText=hbCheck.msg;
    document.getElementById('hbResult').className='resultBox '+hbCheck.status;

    // WBC
    let wbc = parseFloat(document.getElementById('wbc').value);
    let wbcCheck = checkValue(wbc,4000,11000,
        'Leukopenia → low WBC','Leukocytosis → high WBC',
        'Bone marrow suppression, viral infection','Infection, inflammation, leukemia',
        'Chemotherapy, Clozapine','Corticosteroids, G-CSF',
        'Viral infections','Bacterial infections',
        'Increased infection risk','Fever, pus formation, sepsis risk');
    document.getElementById('wbcResult').innerText=wbcCheck.msg;
    document.getElementById('wbcResult').className='resultBox '+wbcCheck.status;

    // Platelets
    let plt = parseFloat(document.getElementById('plt').value);
    let pltCheck = checkValue(plt,150000,450000,
        'Thrombocytopenia → low platelets','Thrombocytosis → high platelets',
        'Bone marrow suppression, immune destruction','Reactive response to bleeding/inflammation',
        'Heparin, Chemotherapy','Erythropoietin, Corticosteroids',
        'Viral infections, Dengue','Bacterial sepsis, inflammation',
        'Bleeding tendency, petechiae','Risk of thrombosis, clot formation');
    document.getElementById('pltResult').innerText=pltCheck.msg;
    document.getElementById('pltResult').className='resultBox '+pltCheck.status;

    // Hematocrit
    let hct = parseFloat(document.getElementById('hct').value);
    let hctCheck = checkValue(hct,36,46,
        'Low HCT → anemia','High HCT → polycythemia',
        'Decreased RBC volume','Increased RBC volume',
        'Iron deficiency, blood loss','High altitude, EPO therapy',
        'Malaria, chronic infections','Rare infections, dehydration',
        'Fatigue, pallor','Headache, dizziness, clot risk');
    document.getElementById('hctResult').innerText=hctCheck.msg;
    document.getElementById('hctResult').className='resultBox '+hctCheck.status;

    // MCV
    let mcv = parseFloat(document.getElementById('mcv').value);
    let mcvCheck = checkValue(mcv,80,100,
        'Microcytic → low MCV','Macrocytic → high MCV',
        'Iron deficiency anemia','Vitamin B12/Folate deficiency',
        'Iron chelators','Methotrexate, Alcohol',
        'Chronic infections','Rare viral effects',
        'Small RBCs, pallor','Large RBCs, megaloblastic features');
    document.getElementById('mcvResult').innerText=mcvCheck.msg;
    document.getElementById('mcvResult').className='resultBox '+mcvCheck.status;

    // MCH
    let mch = parseFloat(document.getElementById('mch').value);
    let mchCheck = checkValue(mch,27,33,
        'Low MCH → hypochromic','High MCH → hyperchromic',
        'Iron deficiency','Vitamin B12/Folate deficiency',
        'Iron chelators','Methotrexate, Hydroxyurea',
        'Chronic infections','Rare viral effects',
        'Pale RBCs','Dark RBCs, megaloblastic');
    document.getElementById('mchResult').innerText=mchCheck.msg;
    document.getElementById('mchResult').className='resultBox '+mchCheck.status;

    // MCHC
    let mchc = parseFloat(document.getElementById('mchc').value);
    let mchcCheck = checkValue(mchc,32,36,
        'Low MCHC → hypochromia','High MCHC → spherocytosis',
        'Iron deficiency','Hereditary spherocytosis',
        'Iron chelators','None common',
        'Chronic infection','Rare bacterial conditions',
        'Pale RBCs, weakness','Spherocytes, hemolysis risk');
    document.getElementById('mchcResult').innerText=mchcCheck.msg;
    document.getElementById('mchcResult').className='resultBox '+mchcCheck.status;

    // FBS
    let fbs = parseFloat(document.getElementById('fbs').value);
    let fbsCheck = checkValue(fbs,70,100,
        'Hypoglycemia → dizziness','Hyperglycemia → diabetes risk',
        'Excess insulin, adrenal insufficiency','Insulin deficiency/resistance',
        'Insulin, Sulfonylureas','Corticosteroids, Thiazides',
        'N/A','N/A',
        'Sweating, confusion','Polyuria, polydipsia, fatigue');
    document.getElementById('fbsResult').innerText=fbsCheck.msg;
    document.getElementById('fbsResult').className='resultBox '+fbsCheck.status;

    // Fetal Heart Rate
    let fhr = parseFloat(document.getElementById('fhr').value);
    let fhrCheck = checkValue(fhr,110,160,
        'Fetal bradycardia → distress','Fetal tachycardia → maternal fever or distress',
        'Fetal hypoxia, cord compression','Maternal fever, fetal hypoxia',
        'Beta-blockers (maternal)','Beta-agonists (tocolytics)',
        'N/A','Maternal infection',
        'Risk of fetal compromise','Possible fetal distress');
    document.getElementById('fhrResult').innerText=fhrCheck.msg;
    document.getElementById('fhrResult').className='resultBox '+fhrCheck.status;
}
</script>

