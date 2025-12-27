<script>
// Generalized check function
function checkValue(value,min,max,lowMsg,highMsg, lowFact, highFact, lowDrug, highDrug, microLow, microHigh, clinicalLow, clinicalHigh){
    if(value<min) return {status:'low',msg:lowMsg + " | Why: " + lowFact + " | Drug: " + lowDrug + " | Micro: " + microLow + " | Clinical: " + clinicalLow};
    else if(value>max) return {status:'high',msg:highMsg + " | Why: " + highFact + " | Drug: " + highDrug + " | Micro: " + microHigh + " | Clinical: " + clinicalHigh};
    else return {status:'normal',msg:'Normal'};
}

function diagnose(){
    // Vitals
    const vitals = [
        {id:'hr',min:60,max:100,lowMsg:'Bradycardia',highMsg:'Tachycardia',lowFact:'Parasympathetic tone',highFact:'Sympathetic, fever',lowDrug:'Beta-blockers',highDrug:'Atropine',microLow:'Viral',microHigh:'Bacterial',clinicalLow:'Dizziness',clinicalHigh:'Palpitations'},
        {id:'bps',min:90,max:120,lowMsg:'Low BP',highMsg:'Hypertension',lowFact:'Low volume/dehydration',highFact:'High resistance',lowDrug:'Diuretics',highDrug:'Corticosteroids',microLow:'Sepsis',microHigh:'CKD',clinicalLow:'Fainting',clinicalHigh:'Headache'},
        {id:'bpd',min:60,max:80,lowMsg:'Low Diastolic BP',highMsg:'High Diastolic BP',lowFact:'Reduced resistance',highFact:'Increased resistance',lowDrug:'Diuretics',highDrug:'NSAIDs',microLow:'Sepsis',microHigh:'Inflammatory',clinicalLow:'Dizziness',clinicalHigh:'Vascular risk'},
        {id:'temp',min:36.5,max:37.5,lowMsg:'Hypothermia',highMsg:'Fever',lowFact:'Metabolic depression',highFact:'Pyrogen, infection',lowDrug:'Sedatives',highDrug:'Clozapine',microLow:'Viral',microHigh:'Bacterial',clinicalLow:'Shivering',clinicalHigh:'Sweating'},
        {id:'spo2',min:95,max:100,lowMsg:'Hypoxemia',highMsg:'Normal/rare',lowFact:'Lung disease',highFact:'Normal',lowDrug:'Opioids',highDrug:'Supplemental O₂',microLow:'Pneumonia',microHigh:'-',clinicalLow:'Cyanosis',clinicalHigh:'Normal'}
    ];

    vitals.forEach(v=>{
        let val = parseFloat(document.getElementById(v.id).value);
        let res = checkValue(val,v.min,v.max,v.lowMsg,v.highMsg,v.lowFact,v.highFact,v.lowDrug,v.highDrug,v.microLow,v.microHigh,v.clinicalLow,v.clinicalHigh);
        document.getElementById(v.id+'Result').innerText=res.msg;
        document.getElementById(v.id+'Result').className='resultBox '+res.status;
    });

    // Hematology
    const hematology = [
        {id:'hb',min:12,max:16,lowMsg:'Anemia',highMsg:'Polycythemia',lowFact:'Blood loss/RBC production',highFact:'High altitude/Chronic hypoxia',lowDrug:'Paracetamol/Chemo',highDrug:'EPO/Androgens',microLow:'Malaria/Viral',microHigh:'Rare bacterial',clinicalLow:'Pallor/Fatigue',clinicalHigh:'Headache/Thrombosis'},
        {id:'wbc',min:4000,max:11000,lowMsg:'Leukopenia',highMsg:'Leukocytosis',lowFact:'Bone marrow suppression',highFact:'Infection/Leukemia',lowDrug:'Chemo/Clozapine',highDrug:'Corticosteroids/G-CSF',microLow:'Viral',microHigh:'Bacterial',clinicalLow:'Infection risk',clinicalHigh:'Fever/Sepsis'},
        {id:'plt',min:150000,max:450000,lowMsg:'Thrombocytopenia',highMsg:'Thrombocytosis',lowFact:'Bone marrow suppression',highFact:'Reactive response',lowDrug:'Heparin/Chemo',highDrug:'EPO/Corticosteroids',microLow:'Dengue',microHigh:'Bacterial',clinicalLow:'Bleeding',clinicalHigh:'Thrombosis'},
        {id:'hct',min:36,max:46,lowMsg:'Low HCT',highMsg:'High HCT',lowFact:'Decreased RBC volume',highFact:'Increased RBC volume',lowDrug:'Iron deficiency/Blood loss',highDrug:'EPO therapy',microLow:'Malaria',microHigh:'Dehydration',clinicalLow:'Fatigue/Pallor',clinicalHigh:'Headache/Clot risk'},
        {id:'mcv',min:80,max:100,lowMsg:'Microcytic',highMsg:'Macrocytic',lowFact:'Iron deficiency',highFact:'B12/Folate deficiency',lowDrug:'Iron chelators',highDrug:'Methotrexate/Alcohol',microLow:'Chronic infection',microHigh:'Viral',clinicalLow:'Small RBCs',clinicalHigh:'Large RBCs'},
        {id:'mch',min:27,max:33,lowMsg:'Low MCH',highMsg:'High MCH',lowFact:'Iron deficiency',highFact:'B12/Folate deficiency',lowDrug:'Iron chelators',highDrug:'Methotrexate/Hydroxyurea',microLow:'Chronic infection',microHigh:'Viral',clinicalLow:'Pale RBCs',clinicalHigh:'Hyperchromic RBCs'},
        {id:'mchc',min:32,max:36,lowMsg:'Low MCHC',highMsg:'High MCHC',lowFact:'Iron deficiency',highFact:'Spherocytosis',lowDrug:'Iron chelators',highDrug:'-',microLow:'Chronic infection',microHigh:'Rare bacterial',clinicalLow:'Weak RBCs',clinicalHigh:'Hemolysis risk'}
    ];

    hematology.forEach(h=>{
        let val = parseFloat(document.getElementById(h.id).value);
        let res = checkValue(val,h.min,h.max,h.lowMsg,h.highMsg,h.lowFact,h.highFact,h.lowDrug,h.highDrug,h.microLow,h.microHigh,h.clinicalLow,h.clinicalHigh);
        document.getElementById(h.id+'Result').innerText=res.msg;
        document.getElementById(h.id+'Result').className='resultBox '+res.status;
    });

    // Biochemistry (FBS, electrolytes)
    const biochem = [
        {id:'fbs',min:70,max:100,lowMsg:'Hypoglycemia',highMsg:'Hyperglycemia',lowFact:'Excess insulin',highFact:'Insulin deficiency',lowDrug:'Insulin/Sulfonylureas',highDrug:'Corticosteroids',microLow:'-',microHigh:'-',clinicalLow:'Sweating/Confusion',clinicalHigh:'Polyuria/Polydipsia'},
        {id:'na',min:135,max:145,lowMsg:'Hyponatremia',highMsg:'Hypernatremia',lowFact:'Water excess',highFact:'Dehydration',lowDrug:'Diuretics',highDrug:'Na supplements',microLow:'-',microHigh:'-',clinicalLow:'Nausea/Confusion',clinicalHigh:'Thirst/Seizures'},
        {id:'k',min:3.5,max:5,lowMsg:'Hypokalemia',highMsg:'Hyperkalemia',lowFact:'Diuretics',highFact:'ACE inhibitors',lowDrug:'Furosemide',highDrug:'Spironolactone',microLow:'-',microHigh:'-',clinicalLow:'Weakness',clinicalHigh:'Arrhythmia'},
        {id:'ca',min:8.5,max:10.5,lowMsg:'Hypocalcemia',highMsg:'Hypercalcemia',lowFact:'Vitamin D deficiency',highFact:'Hyperparathyroidism',lowDrug:'Chelators',highDrug:'Thiazides',microLow:'-',microHigh:'-',clinicalLow:'Tetany',clinicalHigh:'Muscle weakness'},
        {id:'mg',min:1.7,max:2.2,lowMsg:'Hypomagnesemia',highMsg:'Hypermagnesemia',lowFact:'Alcoholism',highFact:'Excess Mg',lowDrug:'Diuretics',highDrug:'Mg supplements',microLow:'-',microHigh:'-',clinicalLow:'Muscle cramps',clinicalHigh:'Lethargy')}
    ];

    biochem.forEach(b=>{
        let val = parseFloat(document.getElementById(b.id).value);
        let res = checkValue(val,b.min,b.max,b.lowMsg,b.highMsg,b.lowFact,b.highFact,b.lowDrug,b.highDrug,b.microLow,b.microHigh,b.clinicalLow,b.clinicalHigh);
        document.getElementById(b.id+'Result').innerText=res.msg;
        document.getElementById(b.id+'Result').className='resultBox '+res.status;
    });

    // Repeat for Renal, Liver, Thyroid, Coagulation, Obstetrics
    // For brevity, you can create arrays similar to above and iterate
}
</script>
