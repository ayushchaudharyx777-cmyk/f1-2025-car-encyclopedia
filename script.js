const TEAMS2025 = [
  {
    id:'mclaren25',short:'McLaren',name:'McLaren Formula 1 Team',pos:1,color:'#FF8000',chassis:'MCL39',
    tagline:'Back-to-back champions. Lando Norris wins his first World Drivers Championship. The MCL39 — the fastest car of the ground effect era.',
    drivers:[{num:4,name:'Lando Norris',country:'United Kingdom 🇬🇧',role:'2025 World Champion 🏆'},{num:81,name:'Oscar Piastri',country:'Australia 🇦🇺',role:'Championship Contender'}],
    engine:{name:'Mercedes M14E Performance',config:'1.6L V6 Turbo Hybrid + ERS',power:'~1050 hp combined',mgu:'MGU-K 120kW · MGU-H ✓',fuel:'Gulf Custom E10',note:'Customer Mercedes PU — packaged tighter than any rival. McLaren extend deal through 2030. MGU-H at 125,000 RPM. Zero failures all season. Secret weapon: lower CoG through superior PU packaging.'},
    perf:{topspeed:'374',downforce:'920',weight:'798',g:'5.5',fuel:'110kg'},
    specs:[
      {icon:'⚙️',title:'Engine',main:'Mercedes M14E Customer',detail:'Tighter packaging than any Mercedes customer. Zero failures all season.',bar:95},
      {icon:'💨',title:'Aerodynamics',main:'Low-Rake Efficiency',detail:'Lowest rake on grid. Best power-to-drag ratio. +13 km/h per DRS activation.',bar:96},
      {icon:'🛞',title:'Suspension',main:'Push-rod Rear',detail:'Lowers CoG. Cleaner rear aero exit flow. Signature McLaren 2024-25 choice.',bar:87},
      {icon:'🔥',title:'ERS',main:'Full Hybrid Deploy',detail:'4 MJ per lap. 160hp electric burst per corner exit via MGU-K.',bar:93},
      {icon:'⛽',title:'Fuel',main:'Gulf E10 Blend',detail:'New 2025 Gulf partnership. 100% sustainable E10.',bar:85},
      {icon:'🪶',title:'Chassis',main:'798 kg minimum',detail:'Aerospace carbon fibre from Woking manufacturing division.',bar:90},
    ],
    aero:[
      {icon:'🏎️',name:'Front Wing',desc:'Narrow-span — maximises underfloor airflow over outwash.',tag:'passive'},
      {icon:'💨',name:'DRS System',desc:'+13 km/h per activation. Best DRS gain on grid from low-rake setup.',tag:'active'},
      {icon:'🌀',name:'Underfloor Tunnels',desc:'Three channels. Floor flexing within limits adds downforce at speed.',tag:'unique'},
      {icon:'🔽',name:'Diffuser',desc:'Narrow-waist 3-channel. Works with beam wing for rear stability.',tag:'passive'},
      {icon:'📐',name:'Rear Wing',desc:'Low drag chord. Superior straight-line at most circuits.',tag:'passive'},
      {icon:'🔄',name:'Brake-by-Wire',desc:'Electronic rear BBW. Prevents lockup under MGU-K harvesting.',tag:'active'},
    ],
  },
  {
    id:'redbull25',short:'Red Bull',name:'Oracle Red Bull Racing',pos:2,color:'#3671C6',chassis:'RB21',
    tagline:'Four-time champion Verstappen. Honda RBPT most powerful engine yet. High-rake ground effect philosophy continues.',
    drivers:[{num:1,name:'Max Verstappen',country:'Netherlands 🇳🇱',role:'4x World Champion'},{num:22,name:'Yuki Tsunoda',country:'Japan 🇯🇵',role:'Promoted from Racing Bulls'}],
    engine:{name:'Honda RBPT RBPTH002',config:'1.6L V6 Turbo Hybrid + ERS',power:'~1050 hp combined',mgu:'MGU-K 120kW · MGU-H ✓',fuel:'ExxonMobil E10',note:'Most powerful on 2025 grid. Honda split-turbo — hot side rear, cold side at airbox. Final Red Bull-Honda season before Ford 2026. MGU-H in parallel with MGU-K.'},
    perf:{topspeed:'372',downforce:'960',weight:'798',g:'5.6',fuel:'110kg'},
    specs:[
      {icon:'⚙️',title:'Engine',main:'Honda RBPT RBPTH002',detail:'Most powerful PU on grid. Split-turbo lower CoG packaging.',bar:98},
      {icon:'💨',title:'Aerodynamics',main:'High-Rake Philosophy',detail:'Highest rake on grid. Aggressive floor angle for maximum suction.',bar:94},
      {icon:'🛞',title:'Suspension',main:'Pull-rod F&R',detail:'Signature setup since 2019. Both axles pull-rod for minimum CoG.',bar:92},
      {icon:'🔥',title:'ERS',main:'Honda Full Deploy',detail:'4 MJ per lap. MGU-H unlimited. Most reliable ERS on grid.',bar:97},
      {icon:'⛽',title:'Fuel',main:'ExxonMobil E10',detail:'Custom low-carbon E10 for RBPTH002 combustion.',bar:88},
      {icon:'🪶',title:'Chassis',main:'798 kg minimum',detail:'Titanium fasteners. Ballast used strategically for CoG.',bar:87},
    ],
    aero:[
      {icon:'🏎️',name:'Front Wing',desc:'5-element cascade. Strong outwash. Adjusted every qualifying lap.',tag:'passive'},
      {icon:'💨',name:'DRS System',desc:'Large gain from high-rake. Detection zone timing set for Verstappen.',tag:'active'},
      {icon:'🌀',name:'Floor Concept',desc:'Maximum rake angle. Massive low-pressure underfloor zone.',tag:'unique'},
      {icon:'🔽',name:'Diffuser',desc:'Wide-exit with kick-line. Beam wing manages exit flow.',tag:'passive'},
      {icon:'📐',name:'Rear Wing',desc:'High-downforce most circuits. Cornering over straight speed.',tag:'passive'},
      {icon:'🔄',name:'Active Suspension',desc:'Hydraulic front-rear interconnected dampers. Controls pitch.',tag:'active'},
    ],
  },
  {
    id:'ferrari25',short:'Ferrari',name:'Scuderia Ferrari HP',pos:3,color:'#E8002D',chassis:'SF-25',
    tagline:'Hamilton joins Leclerc — legendary lineup. Yet 2025 difficult: no wins, 4th in constructors. Ferrari\'s first winless season since 2020.',
    drivers:[{num:16,name:'Charles Leclerc',country:'Monaco 🇲🇨',role:'Ferrari since 2019'},{num:44,name:'Lewis Hamilton',country:'United Kingdom 🇬🇧',role:'7x WDC · First Ferrari season'}],
    engine:{name:'Ferrari 066/12',config:'1.6L V6 Turbo Hybrid + ERS',power:'~1065 hp combined',mgu:'MGU-K 120kW · MGU-H ✓',fuel:'Shell V-Power E10',note:'Strongest combustion output on grid. Split-turbo MGU-H in engine vee. Hamilton\'s first season without a podium. Ferrari 4th in WCC. ERS reliability improved 2025.'},
    perf:{topspeed:'368',downforce:'985',weight:'798',g:'5.6',fuel:'110kg'},
    specs:[
      {icon:'⚙️',title:'Engine',main:'Ferrari 066/12',detail:'Strongest combustion output. MGU-H buried in vee for packaging.',bar:99},
      {icon:'💨',title:'Aerodynamics',main:'Extreme Downforce',detail:'Highest downforce at slow-speed tracks. 985N at 200km/h.',bar:95},
      {icon:'🛞',title:'Suspension',main:'Pull-rod Front',detail:'Switched 2024 retained 2025. Improves underfloor at cost of mech grip.',bar:86},
      {icon:'🔥',title:'ERS',main:'Ferrari ERS Gen3',detail:'Faster charge/discharge. 4 MJ per lap. Improved reliability.',bar:92},
      {icon:'⛽',title:'Fuel',main:'Shell V-Power E10',detail:'Decades of Shell partnership. Italian summer optimised blend.',bar:90},
      {icon:'🪶',title:'Chassis',main:'798 kg minimum',detail:'Carbon-titanium hybrid. Lightest suspension arms.',bar:88},
    ],
    aero:[
      {icon:'🏎️',name:'Front Wing',desc:'Maximum cascade. Heavy outwash protects floor inlet.',tag:'passive'},
      {icon:'💨',name:'DRS System',desc:'Widest opening rear wing on grid. Fastest DRS linkage.',tag:'active'},
      {icon:'🌀',name:'Vortex Generators',desc:'Largest VG array on floor edge. Seals ground effect at yaw.',tag:'passive'},
      {icon:'🔽',name:'Diffuser',desc:'Proprietary kick-line geometry. Max rear downforce slow corners.',tag:'unique'},
      {icon:'📐',name:'Monkey Seat',desc:'Large winglet above diffuser. Ferrari run largest version on grid.',tag:'passive'},
      {icon:'🔄',name:'Brake Bias',desc:'Finest adjustment resolution. Hamilton\'s specific requirement.',tag:'active'},
    ],
  },
  {
    id:'mercedes25',short:'Mercedes',name:'Mercedes-AMG Petronas F1',pos:4,color:'#27F4D2',chassis:'W16',
    tagline:'Post-Hamilton era. Russell + rookie Antonelli. W16 won two races — significant recovery. Preparing 2026 power unit simultaneously.',
    drivers:[{num:63,name:'George Russell',country:'United Kingdom 🇬🇧',role:'Mercedes Team Leader'},{num:12,name:'Kimi Antonelli',country:'Italy 🇮🇹',role:'Rookie — Promoted at 18'}],
    engine:{name:'Mercedes M14E (Works)',config:'1.6L V6 Turbo Hybrid + ERS',power:'~1050 hp combined',mgu:'MGU-K 120kW · MGU-H ✓',fuel:'Petronas Primax E10',note:'Works spec with priority calibration. Zero MGU-K failures since 2021. Russell won 2 races. Antonelli podiums in Canada, Brazil, Las Vegas. Developing M16E for 2026 simultaneously.'},
    perf:{topspeed:'370',downforce:'950',weight:'798',g:'5.4',fuel:'110kg'},
    specs:[
      {icon:'⚙️',title:'Engine',main:'Mercedes M14E Works',detail:'Works calibration. Zero failures since 2021. Dual 2025/2026 programme.',bar:96},
      {icon:'💨',title:'Aerodynamics',main:'Balanced Concept',detail:'Between Red Bull high-DF and McLaren low-drag. Circuit-versatile.',bar:90},
      {icon:'🛞',title:'Suspension',main:'Pull-rod Front',detail:'Retained from W15. Better balance vs 2023 zero-pod era.',bar:86},
      {icon:'🔥',title:'ERS',main:'Works Mercedes ERS',detail:'Most reliable ERS. Zero failures. MGU-H at 125,000 RPM.',bar:98},
      {icon:'⛽',title:'Fuel',main:'Petronas Primax E10',detail:'Malaysian research centre blend for M14E combustion.',bar:92},
      {icon:'🪶',title:'Chassis',main:'798 kg minimum',detail:'Aerospace composites. Integrated load paths in carbon tub.',bar:86},
    ],
    aero:[
      {icon:'🏎️',name:'Front Wing',desc:'Multi-plane cascade. Strong outwash. Zero-pod learnings retained.',tag:'passive'},
      {icon:'💨',name:'DRS System',desc:'Double DRS influence — rear wing shape affects front loading.',tag:'active'},
      {icon:'🌀',name:'Sidepod Legacy',desc:'Minimal volume. Deep undercut inherited from 2022-24 era.',tag:'unique'},
      {icon:'🔽',name:'Diffuser',desc:'Stepped kick-line. Rear stability focus — Russell\'s preference.',tag:'passive'},
      {icon:'📐',name:'T-Wing',desc:'Small winglet between beam and rear wing. Downforce with low drag.',tag:'passive'},
      {icon:'⚡',name:'Predictive ERS',desc:'AI-assisted deployment. Pre-analyses circuit sections per lap.',tag:'active'},
    ],
  },
  {
    id:'aston25',short:'Aston Martin',name:'Aston Martin Aramco F1',pos:5,color:'#358C75',chassis:'AMR25',
    tagline:'Adrian Newey signed for 2026. AMR25 transitional — dev halted early. Alonso\'s 22nd F1 season. Eyes firmly on 2026.',
    drivers:[{num:14,name:'Fernando Alonso',country:'Spain 🇪🇸',role:'2x Champion · 22nd Season'},{num:18,name:'Lance Stroll',country:'Canada 🇨🇦',role:'Aston Martin since 2019'}],
    engine:{name:'Honda RBPT RBPTH002',config:'1.6L V6 Turbo Hybrid + ERS',power:'~1050 hp combined',mgu:'MGU-K 120kW · MGU-H ✓',fuel:'Aramco E10',note:'Same engine as Red Bull. AMR25 chassis could not match aero peers. Newey\'s AMR26 is the real goal. Alonso\'s ERS management rated best on entire 2025 grid by rival engineers.'},
    perf:{topspeed:'367',downforce:'940',weight:'798',g:'5.2',fuel:'110kg'},
    specs:[
      {icon:'⚙️',title:'Engine',main:'Honda RBPT (=RB)',detail:'Identical to Red Bull. Most powerful PU in a different chassis.',bar:95},
      {icon:'💨',title:'Aerodynamics',main:'High Downforce Focus',detail:'Compensates for chassis deficiencies. Slower straight but corners OK.',bar:80},
      {icon:'🛞',title:'Suspension',main:'Push-rod Front',detail:'Alonso\'s balance requirements shaped all geometry choices.',bar:77},
      {icon:'🔥',title:'ERS',main:'Honda ERS',detail:'Honda reliability. Alonso\'s legendary ERS management maximises it.',bar:92},
      {icon:'⛽',title:'Fuel',main:'Aramco E10',detail:'Title sponsor fuel. Saudi Aramco research centres blend.',bar:87},
      {icon:'🪶',title:'Chassis',main:'798 kg minimum',detail:'Weight issues from 2024 addressed. Min weight earlier in season.',bar:80},
    ],
    aero:[
      {icon:'🏎️',name:'Front Wing',desc:'Conservative. Understeer-neutral — stable entry, rotate mid-corner.',tag:'passive'},
      {icon:'💨',name:'DRS System',desc:'Alonso extracts every millisecond from DRS detection zones.',tag:'active'},
      {icon:'🌀',name:'Sidepod Concept',desc:'Red Bull-influenced undercut from 2022-23 DNA.',tag:'passive'},
      {icon:'🔽',name:'Diffuser',desc:'Strong rear end. Consistent grip over peak downforce numbers.',tag:'passive'},
      {icon:'📐',name:'Rear Wing Options',desc:'Multiple specs per race. Alonso personally selects final wing.',tag:'passive'},
      {icon:'⚡',name:'Alonso ERS Mastery',desc:'Rated best ERS management on entire 2025 grid by rivals.',tag:'active'},
    ],
  },
  {
    id:'williams25',short:'Williams',name:'Williams Racing',pos:6,color:'#64C4FF',chassis:'FW47',
    tagline:'Sainz joins Albon. First podium since 2017 in Azerbaijan. Vowles\' rebuild bearing fruit. Best WCC since 2016.',
    drivers:[{num:23,name:'Alexander Albon',country:'Thailand 🇹🇭',role:'Williams since 2022'},{num:55,name:'Carlos Sainz Jr.',country:'Spain 🇪🇸',role:'Williams since 2025'}],
    engine:{name:'Mercedes M14E Customer',config:'1.6L V6 Turbo Hybrid + ERS',power:'~1050 hp combined',mgu:'MGU-K 120kW · MGU-H ✓',fuel:'Petrobras E10',note:'Mercedes customer. Vowles\' Mercedes background = deep supplier relationship. Sainz brings Ferrari engineering insight. Azerbaijan podium landmark. FW47 biggest aero step in modern Williams era.'},
    perf:{topspeed:'369',downforce:'928',weight:'798',g:'5.2',fuel:'110kg'},
    specs:[
      {icon:'⚙️',title:'Engine',main:'Mercedes M14E Customer',detail:'Best customer-team PU relationship on grid. Vowles insider knowledge.',bar:90},
      {icon:'💨',title:'Aerodynamics',main:'Improving Concept',detail:'Biggest aero step in modern Williams era. Sainz Ferrari insight key.',bar:82},
      {icon:'🛞',title:'Suspension',main:'Albon-tuned',detail:'Both drivers very different — two setups run simultaneously.',bar:80},
      {icon:'🔥',title:'ERS',main:'Mercedes Customer ERS',detail:'Mercedes reliability. Sainz Ferrari ERS knowledge lifted strategy.',bar:88},
      {icon:'⛽',title:'Fuel',main:'Petrobras E10',detail:'Long-term Brazilian partnership. Custom E10 blend.',bar:82},
      {icon:'🪶',title:'Chassis',main:'798 kg minimum',detail:'Vowles overhauled manufacturing. First early min-weight hit.',bar:80},
    ],
    aero:[
      {icon:'🏎️',name:'Front Wing',desc:'Moderate outwash. Albon\'s stable front-end requirement.',tag:'passive'},
      {icon:'💨',name:'DRS System',desc:'Sainz racecraft exploits detection timing better than rivals.',tag:'active'},
      {icon:'🌀',name:'Floor Development',desc:'Biggest step forward. Sainz identified Ferrari-derived tunnel fixes.',tag:'unique'},
      {icon:'🔽',name:'Diffuser',desc:'Conservative concept. Exit geometry upgraded mid-season.',tag:'passive'},
      {icon:'📐',name:'Rear Wing Trio',desc:'3 specs available — aggressive, medium, low-drag every race.',tag:'passive'},
      {icon:'⚡',name:'Data Science',desc:'Vowles expanded data team. Top midfield strategy simulation.',tag:'unique'},
    ],
  },
  {
    id:'haas25',short:'Haas',name:'MoneyGram Haas F1 Team',pos:7,color:'#B0B0B0',chassis:'VF-25',
    tagline:'Ocon joins Bearman. Ferrari customer engine compensates for budget limits. Bearman impresses in sophomore year.',
    drivers:[{num:31,name:'Esteban Ocon',country:'France 🇫🇷',role:'Haas since 2025'},{num:87,name:'Oliver Bearman',country:'United Kingdom 🇬🇧',role:'Sophomore — Ferrari junior'}],
    engine:{name:'Ferrari 066/12 Customer',config:'1.6L V6 Turbo Hybrid + ERS',power:'~1065 hp combined',mgu:'MGU-K 120kW · MGU-H ✓',fuel:'Haas Custom E10',note:'Same raw PU as works Ferrari. Toyota windtunnel partnership from late 2024. Bearman Ferrari Academy. Ocon Alpine technical background. Cost cap limits chassis but Ferrari engine compensates.'},
    perf:{topspeed:'368',downforce:'920',weight:'798',g:'5.1',fuel:'110kg'},
    specs:[
      {icon:'⚙️',title:'Engine',main:'Ferrari 066/12 Customer',detail:'Strongest customer PU. Engine compensates for budget chassis.',bar:90},
      {icon:'💨',title:'Aerodynamics',main:'Ferrari-influenced',detail:'Closest design overlap with Ferrari supply chain.',bar:78},
      {icon:'🛞',title:'Suspension',main:'Ferrari-adjacent',detail:'Geometry closely tracks Ferrari — benefit of deepest customer tie.',bar:78},
      {icon:'🔥',title:'ERS',main:'Ferrari Customer ERS',detail:'Dual knowledge: Ocon Alpine + Bearman Ferrari Academy.',bar:85},
      {icon:'⛽',title:'Fuel',main:'Custom E10',detail:'Toyota partnership assists fuel chemistry development.',bar:80},
      {icon:'🪶',title:'Chassis',main:'798 kg minimum',detail:'Toyota composite knowledge helps weight targets.',bar:74},
    ],
    aero:[
      {icon:'🏎️',name:'Front Wing',desc:'Conservative — reduces setup complexity for small team.',tag:'passive'},
      {icon:'💨',name:'DRS + Ferrari Power',desc:'Ferrari engine + DRS = best midfield top speed.',tag:'active'},
      {icon:'🌀',name:'Toyota Windtunnel',desc:'Additional tunnel time — valuable small-budget resource.',tag:'unique'},
      {icon:'🔽',name:'Diffuser',desc:'High-DF following Ferrari philosophy. Strongest aero area.',tag:'passive'},
      {icon:'📐',name:'Rear Wing',desc:'High-DF most circuits. Stability over top speed.',tag:'passive'},
      {icon:'🧪',name:'B-Spec',desc:'Mid-season major upgrade traditional for Haas. Significant step.',tag:'unique'},
    ],
  },
  {
    id:'racingbulls25',short:'Racing Bulls',name:'Visa CashApp RB Racing Bulls',pos:8,color:'#6692FF',chassis:'VCARB02',
    tagline:'Red Bull talent pipeline. Lawson demoted, Tsunoda promoted. Hadjar shines at Zandvoort. The champion factory.',
    drivers:[{num:30,name:'Liam Lawson',country:'New Zealand 🇳🇿',role:'Demoted from Red Bull'},{num:22,name:'Isack Hadjar',country:'France 🇫🇷',role:'Podium at Zandvoort'}],
    engine:{name:'Honda RBPT RBPTH002',config:'1.6L V6 Turbo Hybrid + ERS',power:'~1050 hp combined',mgu:'MGU-K 120kW · MGU-H ✓',fuel:'ExxonMobil E10',note:'Full parity Honda RBPT with Red Bull. Independent chassis per FIA regs. Hadjar Zandvoort podium highlight. Promotion to Red Bull 2026 earned. Tsunoda moved up after Lawson underperformed.'},
    perf:{topspeed:'371',downforce:'935',weight:'798',g:'5.3',fuel:'110kg'},
    specs:[
      {icon:'⚙️',title:'Engine',main:'Honda RBPT (=RB)',detail:'Full parity. Shared maintenance protocols.',bar:93},
      {icon:'💨',title:'Aerodynamics',main:'Red Bull DNA',detail:'High-rake philosophy. Independent parts, shared concept.',bar:83},
      {icon:'🛞',title:'Suspension',main:'VCARB Custom',detail:'FIA-independent. Informed by Red Bull internal knowledge.',bar:80},
      {icon:'🔥',title:'ERS',main:'Honda ERS Parity',detail:'Identical to Red Bull. Shared protocols.',bar:91},
      {icon:'⛽',title:'Fuel',main:'ExxonMobil E10',detail:'Same blend as Red Bull. Honda RBPT optimised.',bar:85},
      {icon:'🪶',title:'Chassis',main:'798 kg minimum',detail:'Own manufacturing process. Independent from Red Bull.',bar:82},
    ],
    aero:[
      {icon:'🏎️',name:'Front Wing',desc:'RB-influenced philosophy. High outwash concept.',tag:'passive'},
      {icon:'💨',name:'DRS System',desc:'Hadjar excels at detection timing — exceptional racecraft.',tag:'active'},
      {icon:'🌀',name:'Floor Design',desc:'Mirrors Red Bull concept via knowledge sharing.',tag:'passive'},
      {icon:'🔽',name:'Diffuser',desc:'3-channel high-rake consistent. Rear DF focus.',tag:'passive'},
      {icon:'📐',name:'Rear Wing',desc:'Multiple specs. Hadjar/Lawson different preferences.',tag:'passive'},
      {icon:'🔄',name:'Talent Pipeline',desc:'Setup designed to teach F1 fundamentals for Red Bull promotion.',tag:'unique'},
    ],
  },
  {
    id:'alpine25',short:'Alpine',name:'BWT Alpine F1 Team',pos:9,color:'#0090FF',chassis:'A525',
    tagline:'Worst season in team history. Last WCC. Renault final year — weakest PU. Doohan replaced by Colapinto. Gasly only points scorer.',
    drivers:[{num:10,name:'Pierre Gasly',country:'France 🇫🇷',role:'Only points scorer 2025'},{num:43,name:'Franco Colapinto',country:'Argentina 🇦🇷',role:'Replaced Doohan from Imola'}],
    engine:{name:'Renault E-Tech RE25',config:'1.6L V6 Turbo Hybrid + ERS',power:'~990 hp combined',mgu:'MGU-K 120kW · MGU-H ✓',fuel:'TotalEnergies E10',note:'Final Renault F1 engine. ~60-70hp deficit vs leaders. MGU-H least efficient unit. Alpine switching to Mercedes 2026. Gasly extracted remarkable results from difficult machinery.'},
    perf:{topspeed:'361',downforce:'918',weight:'798',g:'5.0',fuel:'110kg'},
    specs:[
      {icon:'⚙️',title:'Engine',main:'Renault RE25 (Final)',detail:'Weakest on grid. ~60hp deficit. Renault exits F1 after 2025.',bar:62},
      {icon:'💨',title:'Aerodynamics',main:'Balanced Platform',detail:'Aerodynamically decent — engine deficit the core problem.',bar:76},
      {icon:'🛞',title:'Suspension',main:'Alpine Custom',detail:'French philosophy. Tyre warm-up focus in cold conditions.',bar:74},
      {icon:'🔥',title:'ERS',main:'Renault ERS (Weakest)',detail:'Weakest MGU-H efficiency on grid. Key performance gap.',bar:60},
      {icon:'⛽',title:'Fuel',main:'TotalEnergies E10',detail:'Partnership ends 2025. Won\'t continue beyond Renault exit.',bar:75},
      {icon:'🪶',title:'Chassis',main:'798 kg minimum',detail:'Min weight achieved. Engine deficit negates chassis advantage.',bar:78},
    ],
    aero:[
      {icon:'🏎️',name:'Front Wing',desc:'Medium-DF. Maximise front grip to offset rear power deficit.',tag:'passive'},
      {icon:'💨',name:'DRS System',desc:'DRS gain limited by weak Renault. Cannot exploit like Honda/Merc.',tag:'active'},
      {icon:'🌀',name:'Airbus CFD',desc:'Airbus supercomputers for CFD beyond Alpine\'s own resources.',tag:'unique'},
      {icon:'🔽',name:'Diffuser',desc:'Standard Venturi. Consistency over peak performance.',tag:'passive'},
      {icon:'📐',name:'Rear Wing',desc:'High-DF to offset straight deficit with cornering grip.',tag:'passive'},
      {icon:'🔄',name:'Gasly Setup',desc:'Aggressive front, stable rear. Only Gasly could extract points.',tag:'active'},
    ],
  },
  {
    id:'sauber25',short:'Sauber',name:'Stake F1 Team Kick Sauber',pos:10,color:'#00CC00',chassis:'C45',
    tagline:'Final Sauber season before becoming Audi. Hulkenberg + Bortoleto. Transition year — all eyes on 2026 Audi launch.',
    drivers:[{num:27,name:'Nico Hulkenberg',country:'Germany 🇩🇪',role:'Audi Bridge Driver'},{num:5,name:'Gabriel Bortoleto',country:'Brazil 🇧🇷',role:'F2 Champion 2024 · Rookie'}],
    engine:{name:'Ferrari 066/12 Customer',config:'1.6L V6 Turbo Hybrid + ERS',power:'~1065 hp combined',mgu:'MGU-K 120kW · MGU-H ✓',fuel:'Stake Custom E10',note:'Customer Ferrari same as Haas. C45 transitional — resources shifted to Audi 2026. Bortoleto thrown into difficult situation. Hulkenberg\'s role: gather F1 operational knowledge. Team formally Audi from Jan 1, 2026.'},
    perf:{topspeed:'366',downforce:'912',weight:'798',g:'4.9',fuel:'110kg'},
    specs:[
      {icon:'⚙️',title:'Engine',main:'Ferrari 066/12 Customer',detail:'Strong PU in transitional chassis. Dev resources to Audi.',bar:87},
      {icon:'💨',title:'Aerodynamics',main:'Transitional Package',detail:'Dev halted early. Hulkenberg feedback shapes 2026 Audi learnings.',bar:70},
      {icon:'🛞',title:'Suspension',main:'Conservative Design',detail:'Reliability and data gathering over performance.',bar:72},
      {icon:'🔥',title:'ERS',main:'Ferrari Customer ERS',detail:'Bortoleto steep ERS learning curve from F2 to F1.',bar:83},
      {icon:'⛽',title:'Fuel',main:'Stake Custom E10',detail:'Partnership ends 2025. Audi brings own fuel partner 2026.',bar:76},
      {icon:'🪶',title:'Chassis',main:'798 kg minimum',detail:'2024 weight issues addressed in C45.',bar:74},
    ],
    aero:[
      {icon:'🏎️',name:'Front Wing',desc:'Conservative — focus on 2026 not C45 optimisation.',tag:'passive'},
      {icon:'💨',name:'DRS System',desc:'Hulkenberg experience compensates for car limitations.',tag:'active'},
      {icon:'🌀',name:'Audi Windtunnel',desc:'Ingolstadt tunnel operational. Parallel 2026 dev running.',tag:'unique'},
      {icon:'🔽',name:'Diffuser',desc:'Conservative 3-channel. Data gathering for 2026 design.',tag:'passive'},
      {icon:'📐',name:'Rear Wing',desc:'Medium DF one spec per race. Simplified for resource saving.',tag:'passive'},
      {icon:'🏭',name:'Hinwil Factory',desc:'50+ years F1 knowledge transfers to Audi brand.',tag:'unique'},
    ],
  },
];

/* ─── NAV BUILD ─── */
const nav = document.getElementById('teamNav');
const teamsDiv = document.getElementById('teams');

TEAMS2025.forEach((team) => {
  const btn = document.createElement('button');
  btn.className='nav-btn';
  btn.style.setProperty('--tc',team.color);
  btn.textContent=`${team.pos}. ${team.short}`;
  btn.dataset.id=team.id;
  btn.onclick=()=>document.getElementById(team.id).scrollIntoView({behavior:'smooth',block:'start'});
  nav.appendChild(btn);

  const sec=document.createElement('section');
  sec.className='team-section reveal';
  sec.id=team.id;
  sec.style.setProperty('--tc',team.color);

  sec.innerHTML=`
    <div class="team-header">
      <div>
        <div class="pos-ghost">${String(team.pos).padStart(2,'0')}</div>
        <div class="team-eye" style="color:${team.color}">${team.short.toUpperCase()} · ${team.chassis} · 2025 F1</div>
        <div class="team-name">${team.name}</div>
        <div class="team-tag">${team.tagline}</div>
      </div>
      <div class="team-badge">
        <div class="tb-v" style="color:${team.color}">#${team.pos}</div>
        <div class="tb-l">2025 WCC</div>
      </div>
    </div>

    <!-- TELEMETRY BAR -->
    <div class="telemetry-bar" id="tele_${team.id}">
      <div class="tele-item"><div class="tele-lbl">Speed</div><div class="tele-val" id="spd_${team.id}">0</div></div>
      <div class="tele-item"><div class="tele-lbl">RPM</div><div class="tele-val" id="rpm_${team.id}">0</div></div>
      <div class="tele-item"><div class="tele-lbl">Gear</div><div class="tele-val" id="gear_${team.id}">1</div></div>
      <div class="tele-item"><div class="tele-lbl">ERS %</div><div class="tele-val" id="ers_${team.id}">100</div></div>
      <div class="tele-item"><div class="tele-lbl">Brake Temp</div><div class="tele-val" id="brk_${team.id}">420</div></div>
      <div class="tele-item"><div class="tele-lbl">Tyre °C</div><div class="tele-val" id="tyr_${team.id}">88</div></div>
    </div>

    <!-- CAR STAGE -->
    <div class="car-stage" id="stage_${team.id}">
      <div class="car-glow" id="glow_${team.id}" style="background:radial-gradient(ellipse at 50% 90%,${team.color}18,transparent 70%)"></div>

      <!-- PIT OVERLAY -->
      <div class="pit-overlay" id="pitover_${team.id}">
        <div class="pit-timer" id="pittimer_${team.id}" style="color:${team.color}">2.3</div>
        <div class="pit-label">PIT STOP</div>
        <div class="pit-stage" id="pitstage_${team.id}" style="color:${team.color}">CAR IN</div>
        <div class="pit-substage" id="pitsub_${team.id}">Box Box Box</div>
      </div>

      <!-- CONTROLS -->
      <div class="car-controls">
        <button class="ctrl-btn" id="btn_spin_${team.id}" onclick="toggleSpin('${team.id}')" title="Toggle wheel spin">🔄 Wheels</button>
        <button class="ctrl-btn" id="btn_brake_${team.id}" onmousedown="startBrake('${team.id}')" onmouseup="stopBrake('${team.id}')" ontouchstart="startBrake('${team.id}')" ontouchend="stopBrake('${team.id}')" title="Hold for brake glow">🔥 Brake</button>
        <button class="ctrl-btn" id="btn_rain_${team.id}" onclick="toggleRain('${team.id}')" title="Rain mode">🌧️ Rain</button>
        <button class="ctrl-btn" id="btn_night_${team.id}" onclick="toggleNight('${team.id}')" title="Night mode">🌙 Night</button>
        <button class="ctrl-btn" id="btn_drs_${team.id}" onclick="toggleDRS('${team.id}')" title="DRS open">💨 DRS</button>
        <button class="ctrl-btn" id="btn_pit_${team.id}" onclick="triggerPit('${team.id}')" title="Pit stop sim">🔧 PIT</button>
      </div>

      <!-- CAR SVG -->
      <div class="car-3d-wrap"><div class="car-3d" id="car3d_${team.id}">${buildCar(team)}</div></div>
      <div class="car-hint">Hover to pause · Hold Brake for glow · Rain/Night/DRS/PIT controls above</div>
    </div>

    <!-- PERF -->
    <div class="perf-row">
      <div class="perf-item"><div class="pl">Top Speed</div><div class="pv">${team.perf.topspeed}<span class="pu"> km/h</span></div></div>
      <div class="perf-item"><div class="pl">Downforce</div><div class="pv">${team.perf.downforce}<span class="pu"> N</span></div></div>
      <div class="perf-item"><div class="pl">Min Weight</div><div class="pv">${team.perf.weight}<span class="pu"> kg</span></div></div>
      <div class="perf-item"><div class="pl">Max G</div><div class="pv">${team.perf.g}<span class="pu"> G</span></div></div>
      <div class="perf-item"><div class="pl">Fuel Load</div><div class="pv" style="font-size:14px">${team.perf.fuel}</div></div>
    </div>

    <!-- TYRES -->
    <div class="tyre-row">
      <div class="tyre-card"><div class="tyre-dot t-soft">S</div><div class="tyre-info"><div class="ti-name">Pirelli Soft C4/C5</div><div class="ti-desc">Fastest · 8-15 lap window</div></div></div>
      <div class="tyre-card"><div class="tyre-dot t-med">M</div><div class="tyre-info"><div class="ti-name">Pirelli Medium C3</div><div class="ti-desc">Primary race tyre · 18-28 laps</div></div></div>
      <div class="tyre-card"><div class="tyre-dot t-hard">H</div><div class="tyre-info"><div class="ti-name">Pirelli Hard C2</div><div class="ti-desc">Long stint · 30-40+ laps</div></div></div>
    </div>

    <!-- DRIVERS -->
    <div class="drivers-row">
      ${team.drivers.map(d=>`
        <div class="driver-card">
          <div class="dnum" style="color:${team.color}33">${d.num}</div>
          <div>
            <div class="dn">${d.name}</div>
            <div class="dc">${d.country}</div>
            <div class="dr" style="color:${team.color}">${d.role}</div>
          </div>
        </div>`).join('')}
    </div>

    <!-- SPECS -->
    <div class="specs-grid">
      ${team.specs.map(s=>`
        <div class="spec-card">
          <div class="si">${s.icon}</div>
          <div class="st">${s.title}</div>
          <div class="sm">${s.main}</div>
          <div class="sd">${s.detail}</div>
          <div class="bar-wrap">
            <div class="bar-lbl"><span>2025 Rating</span><span>${s.bar}/100</span></div>
            <div class="bar-track"><div class="bar-fill" style="width:0%" data-w="${s.bar}%"></div></div>
          </div>
        </div>`).join('')}
    </div>

    <!-- AERO -->
    <div class="aero-section">
      <div class="aero-title">Aerodynamic &amp; Active Systems</div>
      <div class="aero-grid">
        ${team.aero.map(a=>`
          <div class="aero-item">
            <div class="ai-icon">${a.icon}</div>
            <div class="ai-name">${a.name}</div>
            <div class="ai-desc">${a.desc}</div>
            <span class="atag t-${a.tag}">${a.tag.toUpperCase()}</span>
          </div>`).join('')}
      </div>
    </div>

    <!-- PU CARD -->
    <div class="pu-card">
      <div style="font-size:10px;text-transform:uppercase;letter-spacing:2px;color:var(--muted);margin-bottom:.8rem;font-weight:700">Power Unit — ${team.engine.name}</div>
      <div class="pu-grid">
        <div><div class="pu-lbl">Config</div><div class="pu-val">${team.engine.config}</div></div>
        <div><div class="pu-lbl">Combined Power</div><div class="pu-val" style="color:${team.color}">${team.engine.power}</div></div>
        <div><div class="pu-lbl">MGU Units</div><div class="pu-val">${team.engine.mgu}</div></div>
        <div><div class="pu-lbl">Fuel</div><div class="pu-val">${team.engine.fuel}</div></div>
      </div>
      <div class="pu-note">${team.engine.note}</div>
    </div>
  `;
  teamsDiv.appendChild(sec);
});

/* ─── CAR SVG BUILDER ─── */
function buildCar(team){
  const c=team.color;
  const uid=team.id;
  return `<svg class="car-svg" id="svg_${uid}" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="brakeGlow_${uid}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
      <feColorMatrix in="blur" type="matrix" values="3 0 0 0 0  0 0.3 0 0 0  0 0 0 0 0  0 0 0 2 0" result="colored"/>
      <feMerge><feMergeNode in="colored"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="nightGlow_${uid}">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <radialGradient id="bodyGrad_${uid}" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="${c}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${c}" stop-opacity="0.08"/>
    </radialGradient>
    <radialGradient id="cockpitGrad_${uid}" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#6ab4ff" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#2060aa" stop-opacity="0.05"/>
    </radialGradient>
    <linearGradient id="noseGrad_${uid}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${c}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${c}" stop-opacity="0.55"/>
    </linearGradient>
    <linearGradient id="wingGrad_${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${c}"/>
      <stop offset="100%" stop-color="${c}" stop-opacity="0.5"/>
    </linearGradient>
  </defs>

  <!-- GROUND SHADOW -->
  <ellipse cx="380" cy="232" rx="310" ry="12" fill="rgba(0,0,0,.6)"/>

  <!-- FLOOR + UNDERFLOOR CHANNELS -->
  <rect x="135" y="148" width="480" height="13" rx="3" fill="#0a0a16" stroke="${c}22" stroke-width="1"/>
  <line x1="200" y1="148" x2="200" y2="161" stroke="${c}15" stroke-width="1"/>
  <line x1="380" y1="148" x2="380" y2="161" stroke="${c}15" stroke-width="1"/>
  <line x1="560" y1="148" x2="560" y2="161" stroke="${c}15" stroke-width="1"/>
  <!-- Ground effect tunnel visualisation -->
  <path d="M185,161 Q250,168 380,165 Q510,162 575,161" fill="none" stroke="${c}25" stroke-width="1.5" stroke-dasharray="4,5"/>
  <text x="380" y="175" font-size="7" fill="${c}33" text-anchor="middle" font-family="monospace">VENTURI TUNNELS · GROUND EFFECT</text>

  <!-- DIFFUSER (enhanced) -->
  <polygon points="522,161 618,188 618,161" fill="${c}70" stroke="${c}" stroke-width="1.5"/>
  <line x1="540" y1="161" x2="600" y2="180" stroke="${c}40" stroke-width="1"/>
  <line x1="557" y1="161" x2="610" y2="181" stroke="${c}30" stroke-width="1"/>
  <text x="570" y="182" font-size="7" fill="rgba(255,255,255,.4)" text-anchor="middle" font-family="monospace">DIFFUSER</text>

  <!-- REAR WING ENDPLATES (detailed) -->
  <rect x="540" y="58" width="10" height="70" rx="2" fill="${c}cc" stroke="${c}"/>
  <rect x="628" y="58" width="10" height="70" rx="2" fill="${c}cc" stroke="${c}"/>
  <!-- Endplate louvres -->
  <line x1="540" y1="72" x2="550" y2="72" stroke="${c}44" stroke-width="1"/>
  <line x1="540" y1="80" x2="550" y2="80" stroke="${c}44" stroke-width="1"/>
  <line x1="540" y1="88" x2="550" y2="88" stroke="${c}44" stroke-width="1"/>
  <line x1="628" y1="72" x2="638" y2="72" stroke="${c}44" stroke-width="1"/>
  <line x1="628" y1="80" x2="638" y2="80" stroke="${c}44" stroke-width="1"/>
  <line x1="628" y1="88" x2="638" y2="88" stroke="${c}44" stroke-width="1"/>

  <!-- REAR WING (main + DRS flap) -->
  <rect x="540" y="60" width="98" height="18" rx="3" fill="${c}" stroke="${c}"/>
  <rect x="543" y="82" width="92" height="11" rx="2" fill="${c}bb" id="drsflap_${uid}"/>
  <text x="589" y="91" font-size="7.5" fill="rgba(255,255,255,.9)" text-anchor="middle" font-family="monospace" font-weight="800">DRS</text>
  <text x="589" y="57" font-size="7" fill="rgba(255,255,255,.35)" text-anchor="middle" font-family="monospace">REAR WING</text>

  <!-- BEAM WING -->
  <rect x="550" y="128" width="78" height="8" rx="2" fill="${c}66"/>
  <!-- Monkey seat -->
  <rect x="568" y="120" width="42" height="5" rx="2" fill="${c}44"/>

  <!-- ENGINE COVER (textured) -->
  <rect x="314" y="70" width="70" height="60" rx="8" fill="url(#bodyGrad_${uid})" stroke="${c}44" stroke-width="1"/>
  <line x1="314" y1="90" x2="384" y2="90" stroke="${c}18" stroke-width="1"/>
  <line x1="314" y1="105" x2="384" y2="105" stroke="${c}18" stroke-width="1"/>

  <!-- AIRBOX (detailed) -->
  <rect x="334" y="52" width="30" height="24" rx="6" fill="${c}aa"/>
  <rect x="337" y="56" width="24" height="16" rx="4" fill="${c}66"/>
  <rect x="340" y="59" width="18" height="10" rx="3" fill="rgba(0,0,0,.4)"/>
  <text x="349" y="48" font-size="7" fill="${c}" text-anchor="middle" font-family="monospace">AIRBOX</text>

  <!-- MGU-H label inside engine -->
  <text x="349" y="108" font-size="6" fill="${c}55" text-anchor="middle" font-family="monospace">MGU-H</text>
  <text x="349" y="116" font-size="5.5" fill="${c}33" text-anchor="middle" font-family="monospace">1.6L V6 HYBRID</text>

  <!-- SIDEPODS (detailed with undercut) -->
  <!-- Left sidepod -->
  <path d="M248,108 Q272,92 326,100 L326,155 L248,157 Z" fill="${c}18" stroke="${c}44" stroke-width="1"/>
  <path d="M252,110 Q270,98 310,102 L310,135 Z" fill="${c}10"/>
  <!-- Right sidepod -->
  <path d="M372,100 Q432,92 476,108 L476,157 L372,155 Z" fill="${c}18" stroke="${c}44" stroke-width="1"/>
  <path d="M390,102 Q430,98 472,110 L472,135 Z" fill="${c}10"/>

  <!-- SIDEPOD INLETS (detailed) -->
  <ellipse cx="258" cy="118" rx="16" ry="22" fill="${c}55" stroke="${c}" stroke-width="2"/>
  <ellipse cx="260" cy="118" rx="10" ry="16" fill="rgba(0,0,0,.6)"/>
  <ellipse cx="258" cy="118" rx="6" ry="10" fill="${c}22"/>
  <ellipse cx="472" cy="118" rx="16" ry="22" fill="${c}55" stroke="${c}" stroke-width="2"/>
  <ellipse cx="470" cy="118" rx="10" ry="16" fill="rgba(0,0,0,.6)"/>
  <ellipse cx="472" cy="118" rx="6" ry="10" fill="${c}22"/>

  <!-- MAIN BODY -->
  <path d="M140,114 Q168,88 250,96 L474,96 Q540,88 595,112 L607,148 L130,148 Z" fill="url(#bodyGrad_${uid})" stroke="${c}55" stroke-width="1.5"/>

  <!-- COCKPIT (detailed) -->
  <path d="M292,88 Q322,58 368,58 Q416,58 432,88 Z" fill="${c}44" stroke="${c}" stroke-width="2"/>
  <path d="M304,88 Q328,65 368,65 Q408,65 416,88 Z" fill="url(#cockpitGrad_${uid})" stroke="rgba(100,180,255,.4)" stroke-width="1"/>
  <!-- Helmet hint -->
  <ellipse cx="368" cy="78" rx="18" ry="14" fill="${c}22" stroke="${c}44" stroke-width="1"/>

  <!-- HALO (3D-ish) -->
  <path d="M308,82 Q368,54 428,82" fill="none" stroke="${c}88" stroke-width="7" stroke-linecap="round"/>
  <path d="M308,82 Q368,54 428,82" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
  <!-- Halo centre pillar -->
  <rect x="362" y="52" width="14" height="30" rx="4" fill="${c}"/>
  <rect x="365" y="55" width="8" height="24" rx="3" fill="${c}cc"/>

  <!-- CHASSIS NAME -->
  <text x="368" y="120" font-size="10" fill="${c}" text-anchor="middle" font-family="'Segoe UI',sans-serif" font-weight="900" letter-spacing="2">${team.chassis}</text>

  <!-- NOSE CONE (detailed) -->
  <path d="M140,114 Q105,122 66,127 Q98,136 140,148" fill="url(#noseGrad_${uid})" stroke="${c}88" stroke-width="1.5"/>
  <line x1="100" y1="119" x2="100" y2="143" stroke="${c}22" stroke-width="1"/>
  <line x1="118" y1="115" x2="118" y2="147" stroke="${c}22" stroke-width="1"/>

  <!-- FRONT WING ENDPLATES (detailed) -->
  <rect x="52" y="112" width="9" height="38" rx="2" fill="${c}cc"/>
  <rect x="156" y="112" width="9" height="38" rx="2" fill="${c}cc"/>
  <!-- Endplate louvres -->
  <line x1="52" y1="122" x2="61" y2="122" stroke="${c}44" stroke-width="1"/>
  <line x1="52" y1="130" x2="61" y2="130" stroke="${c}44" stroke-width="1"/>

  <!-- FRONT WING (multi-element) -->
  <rect x="52" y="132" width="113" height="13" rx="3" fill="${c}" stroke="${c}"/>
  <rect x="55" y="120" width="107" height="12" rx="2" fill="url(#wingGrad_${uid})"/>
  <rect x="60" y="110" width="97" height="11" rx="2" fill="${c}99"/>
  <rect x="68" y="102" width="81" height="9" rx="2" fill="${c}66"/>
  <text x="110" y="99" font-size="7" fill="rgba(255,255,255,.35)" text-anchor="middle" font-family="monospace">FRONT WING</text>

  <!-- FRONT SUSPENSION (A-arms) -->
  <line x1="95" y1="161" x2="170" y2="178" stroke="${c}88" stroke-width="2.5"/>
  <line x1="95" y1="161" x2="166" y2="163" stroke="${c}66" stroke-width="2"/>
  <line x1="110" y1="161" x2="172" y2="170" stroke="${c}44" stroke-width="1.5"/>

  <!-- REAR SUSPENSION (A-arms) -->
  <line x1="570" y1="161" x2="645" y2="178" stroke="${c}88" stroke-width="2.5"/>
  <line x1="570" y1="161" x2="648" y2="163" stroke="${c}66" stroke-width="2"/>
  <line x1="556" y1="161" x2="638" y2="170" stroke="${c}44" stroke-width="1.5"/>

  <!-- BRAKE DUCTS (front) -->
  <path d="M155,150 Q162,154 168,152 Q165,158 155,156 Z" fill="${c}44" stroke="${c}22"/>
  <!-- Brake disc (front) - with glow capability -->
  <circle cx="165" cy="178" r="4" fill="${c}33" stroke="${c}66" class="brake-disc" id="brakedisc_f_${uid}" opacity="0.8"/>

  <!-- FRONT WHEEL (detailed) -->
  <circle cx="168" cy="178" r="32" fill="#141420" stroke="${c}66" stroke-width="2.5"/>
  <circle cx="168" cy="178" r="24" fill="#0d0d1a" stroke="${c}44"/>
  <!-- Tyre wall detail -->
  <circle cx="168" cy="178" r="30" fill="none" stroke="${c}22" stroke-width="1" stroke-dasharray="3,6"/>
  <!-- Wheel spokes -->
  <g id="fwheel_${uid}" class="wheel-spin" style="transform-origin:168px 178px;animation-duration:0.5s;animation-play-state:paused">
    <line x1="168" y1="160" x2="168" y2="196" stroke="${c}88" stroke-width="2.5"/>
    <line x1="150" y1="178" x2="186" y2="178" stroke="${c}88" stroke-width="2.5"/>
    <line x1="155" y1="165" x2="181" y2="191" stroke="${c}66" stroke-width="2"/>
    <line x1="181" y1="165" x2="155" y2="191" stroke="${c}66" stroke-width="2"/>
  </g>
  <circle cx="168" cy="178" r="11" fill="${c}55" stroke="${c}" stroke-width="2"/>
  <circle cx="168" cy="178" r="6" fill="${c}88" stroke="${c}cc" stroke-width="1"/>
  <text x="168" y="196" font-size="5.5" fill="${c}88" text-anchor="middle" font-family="monospace">PIRELLI</text>

  <!-- REAR BRAKE DISC -->
  <circle cx="582" cy="178" r="5" fill="${c}33" stroke="${c}66" class="brake-disc" id="brakedisc_r_${uid}" opacity="0.8"/>

  <!-- REAR WHEEL (bigger, detailed) -->
  <circle cx="582" cy="178" r="36" fill="#141420" stroke="${c}66" stroke-width="2.5"/>
  <circle cx="582" cy="178" r="28" fill="#0d0d1a" stroke="${c}44"/>
  <circle cx="582" cy="178" r="34" fill="none" stroke="${c}22" stroke-width="1" stroke-dasharray="3,6"/>
  <!-- Wheel spokes -->
  <g id="rwheel_${uid}" class="wheel-spin" style="transform-origin:582px 178px;animation-duration:0.45s;animation-play-state:paused">
    <line x1="582" y1="156" x2="582" y2="200" stroke="${c}88" stroke-width="3"/>
    <line x1="560" y1="178" x2="604" y2="178" stroke="${c}88" stroke-width="3"/>
    <line x1="564" y1="162" x2="600" y2="194" stroke="${c}66" stroke-width="2.5"/>
    <line x1="600" y1="162" x2="564" y2="194" stroke="${c}66" stroke-width="2.5"/>
    <line x1="566" y1="174" x2="598" y2="182" stroke="${c}44" stroke-width="1.5"/>
    <line x1="566" y1="182" x2="598" y2="174" stroke="${c}44" stroke-width="1.5"/>
  </g>
  <circle cx="582" cy="178" r="13" fill="${c}55" stroke="${c}" stroke-width="2"/>
  <circle cx="582" cy="178" r="7" fill="${c}88" stroke="${c}cc" stroke-width="1"/>
  <text x="582" y="198" font-size="5.5" fill="${c}88" text-anchor="middle" font-family="monospace">PIRELLI</text>

  <!-- AERO FLOW LINES -->
  <path d="M52,110 Q165,100 250,97 Q368,94 474,97 Q578,100 628,115" fill="none" stroke="${c}12" stroke-width="1.5" stroke-dasharray="5,6"/>
  <path d="M52,130 Q140,124 200,122 Q368,118 536,122 Q594,124 628,132" fill="none" stroke="${c}08" stroke-width="1" stroke-dasharray="3,7"/>

  <!-- ERS LABEL -->
  <text x="368" y="210" font-size="6.5" fill="${c}44" text-anchor="middle" font-family="monospace">ICE · TC · MGU-H · MGU-K · ES · CE — 1.6L V6 TURBO HYBRID</text>

  <!-- RAIN LAYER (hidden by default) -->
  <g id="rainlayer_${uid}" opacity="0" style="pointer-events:none">
    ${Array.from({length:35},(_,i)=>`
      <line x1="${50+i*20}" y1="${-10+Math.random()*50}" x2="${40+i*20}" y2="${30+Math.random()*30}"
        stroke="rgba(150,200,255,0.55)" stroke-width="1.2"
        class="rain-drop" style="animation-duration:${0.4+Math.random()*0.4}s;animation-delay:${Math.random()*0.5}s"/>`).join('')}
    <!-- Spray from wheels -->
    ${Array.from({length:12},(_,i)=>`
      <circle cx="${140+i*6}" cy="${170+Math.random()*15}" r="${Math.random()*2+0.5}"
        fill="rgba(150,200,255,0.35)" class="rain-drop"
        style="animation-duration:${0.3+Math.random()*0.3}s;animation-delay:${Math.random()*0.2}s"/>`).join('')}
    ${Array.from({length:12},(_,i)=>`
      <circle cx="${555+i*6}" cy="${172+Math.random()*15}" r="${Math.random()*2.5+0.5}"
        fill="rgba(150,200,255,0.35)" class="rain-drop"
        style="animation-duration:${0.3+Math.random()*0.3}s;animation-delay:${Math.random()*0.2}s"/>`).join('')}
    <!-- Wet tyre label -->
    <text x="168" y="198" font-size="5.5" fill="rgba(150,200,255,.8)" text-anchor="middle" font-family="monospace">WET</text>
    <text x="582" y="200" font-size="5.5" fill="rgba(150,200,255,.8)" text-anchor="middle" font-family="monospace">WET</text>
  </g>

  <!-- NIGHT MODE LIGHTS (headlights area, hidden) -->
  <g id="nightlights_${uid}" opacity="0">
    <!-- Front running light strip -->
    <rect x="56" y="128" width="113" height="2" rx="1" fill="${c}" opacity="0" id="frontlight_${uid}"/>
    <!-- Rear light strips -->
    <rect x="618" y="115" width="6" height="20" rx="1" fill="#ff1111" id="rearlight_${uid}" opacity="0"/>
    <!-- Track illumination halo -->
    <ellipse cx="380" cy="235" rx="280" ry="8" fill="rgba(255,255,180,.04)" id="tracklight_${uid}"/>
  </g>

  <!-- SPARKS (brake) -->
  <g id="sparks_${uid}" opacity="0">
    ${Array.from({length:8},(_,i)=>`
      <circle cx="${550+i*8}" cy="${165+Math.sin(i)*8}" r="${1+Math.random()}"
        fill="${i%2===0?'#ffaa00':'#ff6600'}" class="spark"
        style="animation-delay:${i*0.05}s"/>`).join('')}
  </g>
</svg>`;
}

/* ─── STATE ─── */
const state={};
TEAMS2025.forEach(t=>{
  state[t.id]={
    spinning:false,
    rain:false,
    night:false,
    drsOpen:false,
    braking:false,
    teleInterval:null,
    speed:0,rpm:0,gear:1,ers:100,brkTemp:420,tyrTemp:88
  };
});

/* ─── WHEEL SPIN ─── */
function toggleSpin(id){
  const s=state[id];
  s.spinning=!s.spinning;
  const fw=document.getElementById(`fwheel_${id}`);
  const rw=document.getElementById(`rwheel_${id}`);
  const btn=document.getElementById(`btn_spin_${id}`);
  const play=s.spinning?'running':'paused';
  if(fw){fw.style.animationPlayState=play;}
  if(rw){rw.style.animationPlayState=play;}
  btn.classList.toggle('on',s.spinning);
  if(s.spinning) startTelemetry(id);
  else stopTelemetry(id);
}

/* ─── BRAKE GLOW ─── */
function startBrake(id){
  const s=state[id];
  s.braking=true;
  const f=document.getElementById(`brakedisc_f_${id}`);
  const r=document.getElementById(`brakedisc_r_${id}`);
  const sparks=document.getElementById(`sparks_${id}`);
  const btn=document.getElementById(`btn_brake_${id}`);
  if(f){f.setAttribute('filter',`url(#brakeGlow_${id})`);f.setAttribute('fill','#ff3300');f.setAttribute('opacity','1');}
  if(r){r.setAttribute('filter',`url(#brakeGlow_${id})`);r.setAttribute('fill','#ff3300');r.setAttribute('opacity','1');}
  if(sparks)sparks.style.opacity='1';
  btn.classList.add('on');
  // Wheel slow-down
  const fw=document.getElementById(`fwheel_${id}`);
  const rw=document.getElementById(`rwheel_${id}`);
  if(fw)fw.style.animationDuration='1.8s';
  if(rw)rw.style.animationDuration='1.6s';
}
function stopBrake(id){
  const s=state[id];
  s.braking=false;
  const f=document.getElementById(`brakedisc_f_${id}`);
  const r=document.getElementById(`brakedisc_r_${id}`);
  const sparks=document.getElementById(`sparks_${id}`);
  const btn=document.getElementById(`btn_brake_${id}`);
  if(f){f.removeAttribute('filter');f.setAttribute('fill',TEAMS2025.find(t=>t.id===id).color+'33');f.setAttribute('opacity','0.8');}
  if(r){r.removeAttribute('filter');r.setAttribute('fill',TEAMS2025.find(t=>t.id===id).color+'33');r.setAttribute('opacity','0.8');}
  if(sparks)sparks.style.opacity='0';
  btn.classList.remove('on');
  // Restore wheel speed
  const fw=document.getElementById(`fwheel_${id}`);
  const rw=document.getElementById(`rwheel_${id}`);
  if(fw)fw.style.animationDuration='0.5s';
  if(rw)rw.style.animationDuration='0.45s';
}

/* ─── RAIN MODE ─── */
function toggleRain(id){
  const s=state[id];
  s.rain=!s.rain;
  const rainLayer=document.getElementById(`rainlayer_${id}`);
  const stage=document.getElementById(`stage_${id}`);
  const glow=document.getElementById(`glow_${id}`);
  const btn=document.getElementById(`btn_rain_${id}`);
  if(rainLayer)rainLayer.style.opacity=s.rain?'1':'0';
  if(stage){stage.style.transition='background .6s';
    stage.style.background=s.rain?'#05060d':'';}
  if(glow&&s.rain)glow.style.background='radial-gradient(ellipse at 50% 90%,rgba(100,180,255,.1),transparent 70%)';
  else if(glow){const c=TEAMS2025.find(t=>t.id===id).color;glow.style.background=`radial-gradient(ellipse at 50% 90%,${c}18,transparent 70%)`;}
  btn.classList.toggle('on',s.rain);
  // Tyres turn blue-ish in rain
  const fw=document.getElementById(`fwheel_${id}`);
  const rw=document.getElementById(`rwheel_${id}`);
  if(fw&&s.rain){fw.querySelectorAll('line').forEach(l=>l.setAttribute('stroke','rgba(100,180,255,.7)'));}
  else if(fw){const c=TEAMS2025.find(t=>t.id===id).color;fw.querySelectorAll('line').forEach(l=>l.setAttribute('stroke',c+'88'));}
  if(rw&&s.rain){rw.querySelectorAll('line').forEach(l=>l.setAttribute('stroke','rgba(100,180,255,.7)'));}
  else if(rw){const c=TEAMS2025.find(t=>t.id===id).color;rw.querySelectorAll('line').forEach(l=>l.setAttribute('stroke',c+'88'));}
}

/* ─── NIGHT MODE ─── */
function toggleNight(id){
  const s=state[id];
  s.night=!s.night;
  const stage=document.getElementById(`stage_${id}`);
  const glow=document.getElementById(`glow_${id}`);
  const fl=document.getElementById(`frontlight_${id}`);
  const rl=document.getElementById(`rearlight_${id}`);
  const nl=document.getElementById(`nightlights_${id}`);
  const btn=document.getElementById(`btn_night_${id}`);
  const c=TEAMS2025.find(t=>t.id===id).color;
  if(s.night){
    if(stage){stage.style.background='#020208';stage.style.transition='background .6s';}
    if(glow)glow.style.background=`radial-gradient(ellipse at 50% 85%,${c}35,transparent 60%)`;
    if(fl){fl.setAttribute('opacity','0.9');fl.setAttribute('filter',`url(#nightGlow_${id})`);}
    if(rl){rl.setAttribute('opacity','0.95');}
    if(nl)nl.style.opacity='1';
  } else {
    if(stage){stage.style.background='';stage.style.transition='background .6s';}
    if(glow)glow.style.background=`radial-gradient(ellipse at 50% 90%,${c}18,transparent 70%)`;
    if(fl){fl.setAttribute('opacity','0');fl.removeAttribute('filter');}
    if(rl)rl.setAttribute('opacity','0');
    if(nl)nl.style.opacity='0';
  }
  btn.classList.toggle('on',s.night);
}

/* ─── DRS ─── */
function toggleDRS(id){
  const s=state[id];
  s.drsOpen=!s.drsOpen;
  const flap=document.getElementById(`drsflap_${id}`);
  const btn=document.getElementById(`btn_drs_${id}`);
  const c=TEAMS2025.find(t=>t.id===id).color;
  if(flap){
    flap.style.transition='all .4s';
    if(s.drsOpen){
      flap.setAttribute('transform','translate(0,8) rotate(-8,589,87)');
      flap.setAttribute('fill',c+'55');
      flap.style.filter=`drop-shadow(0 0 4px ${c})`;
    } else {
      flap.setAttribute('transform','');
      flap.setAttribute('fill',c+'bb');
      flap.style.filter='';
    }
  }
  btn.classList.toggle('on',s.drsOpen);
}

/* ─── PIT STOP SIMULATION ─── */
const pitStages=[
  {label:'CAR IN',sub:'Box Box Box',dur:600},
  {label:'FRONT JACK',sub:'Lifting front of car',dur:400},
  {label:'TYRES OFF',sub:'4 mechanics — simultaneous',dur:500},
  {label:'TYRES ON',sub:'New set being fitted',dur:600},
  {label:'LOLLIPOP',sub:'Waiting for gap...',dur:400},
  {label:'CAR DOWN',sub:'Jacks releasing',dur:300},
  {label:'GO GO GO',sub:'Release!',dur:400},
];

function triggerPit(id){
  const overlay=document.getElementById(`pitover_${id}`);
  const timerEl=document.getElementById(`pittimer_${id}`);
  const stageEl=document.getElementById(`pitstage_${id}`);
  const subEl=document.getElementById(`pitsub_${id}`);
  const btn=document.getElementById(`btn_pit_${id}`);
  if(!overlay)return;
  overlay.classList.add('active');
  btn.classList.add('on');

  // Stop wheels during pit
  const fw=document.getElementById(`fwheel_${id}`);
  const rw=document.getElementById(`rwheel_${id}`);
  const prevSpin=state[id].spinning;
  if(fw)fw.style.animationPlayState='paused';
  if(rw)rw.style.animationPlayState='paused';

  let total=0;
  const totalTime=pitStages.reduce((a,s)=>a+s.dur,0)/1000;
  let elapsed=0;
  const interval=setInterval(()=>{
    elapsed+=0.1;
    timerEl.textContent=Math.max(0,(totalTime-elapsed)).toFixed(1);
  },100);

  let stageIdx=0;
  function runStage(){
    if(stageIdx>=pitStages.length){
      clearInterval(interval);
      overlay.classList.remove('active');
      btn.classList.remove('on');
      timerEl.textContent='2.3';
      if(prevSpin){
        if(fw)fw.style.animationPlayState='running';
        if(rw)rw.style.animationPlayState='running';
      }
      return;
    }
    const st=pitStages[stageIdx];
    stageEl.textContent=st.label;
    subEl.textContent=st.sub;
    stageIdx++;
    setTimeout(runStage,st.dur);
  }
  runStage();
}

/* ─── LIVE TELEMETRY ─── */
function startTelemetry(id){
  if(state[id].teleInterval)return;
  const team=TEAMS2025.find(t=>t.id===id);
  let phase=0;
  state[id].teleInterval=setInterval(()=>{
    phase+=0.05;
    // Simulate lap phase: accel → top speed → braking → corner
    const lapPhase=(Math.sin(phase)+1)/2; // 0-1
    const spd=Math.round(80+lapPhase*(parseInt(team.perf.topspeed)-80)+Math.random()*8-4);
    const rpm=Math.round(7000+lapPhase*4500+Math.random()*200-100);
    const gear=Math.min(8,Math.max(1,Math.round(1+lapPhase*7)));
    const ers=Math.round(20+((1-lapPhase)*80)+Math.random()*5);
    const brk=Math.round(200+((1-lapPhase)*600)+Math.random()*30);
    const tyr=Math.round(75+lapPhase*35+Math.random()*5);

    const spdEl=document.getElementById(`spd_${id}`);
    const rpmEl=document.getElementById(`rpm_${id}`);
    const gearEl=document.getElementById(`gear_${id}`);
    const ersEl=document.getElementById(`ers_${id}`);
    const brkEl=document.getElementById(`brk_${id}`);
    const tyrEl=document.getElementById(`tyr_${id}`);
    if(spdEl)spdEl.textContent=spd;
    if(rpmEl)rpmEl.textContent=(rpm/1000).toFixed(1)+'k';
    if(gearEl)gearEl.textContent=gear;
    if(ersEl){ersEl.textContent=ers;ersEl.className=`tele-val${ers<30?' hot':''}`;}
    if(brkEl){brkEl.textContent=brk;brkEl.className=`tele-val${brk>600?' hot':''}`;}
    if(tyrEl){tyrEl.textContent=tyr;tyrEl.className=`tele-val${tyr>100?' hot':''}`;}

    // Adjust wheel speed based on speed
    const fw=document.getElementById(`fwheel_${id}`);
    const rw=document.getElementById(`rwheel_${id}`);
    if(!state[id].braking){
      const dur=Math.max(0.08,0.5-(lapPhase*0.42));
      if(fw)fw.style.animationDuration=dur+'s';
      if(rw)rw.style.animationDuration=(dur*0.9)+'s';
    }
  },120);
}
function stopTelemetry(id){
  if(state[id].teleInterval){
    clearInterval(state[id].teleInterval);
    state[id].teleInterval=null;
  }
  // Reset telemetry display
  ['spd','rpm','gear','ers','brk','tyr'].forEach(k=>{
    const el=document.getElementById(`${k}_${id}`);
    if(el){el.textContent={spd:'0',rpm:'0',gear:'1',ers:'100',brk:'420',tyr:'88'}[k];el.className='tele-val';}
  });
}

/* ─── SCROLL REVEAL + BAR ANIMATION ─── */
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      e.target.querySelectorAll('.bar-fill').forEach(b=>{
        setTimeout(()=>{b.style.width=b.dataset.w;},250);
      });
    }
  });
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

/* ─── ACTIVE NAV HIGHLIGHT ─── */
const navObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      const ab=document.querySelector(`.nav-btn[data-id="${e.target.id}"]`);
      if(ab){ab.classList.add('active');ab.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});}
    }
  });
},{threshold:0.2});
document.querySelectorAll('.team-section').forEach(s=>navObs.observe(s));
