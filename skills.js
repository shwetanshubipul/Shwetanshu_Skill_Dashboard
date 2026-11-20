
/*
  D2M SKILLS CONFIGURATION
  ---------------------------------
  THIS IS THE MAIN FILE YOU EDIT.

  Add a skill:
  { id: "unique_id", name: "Skill name", priority: "Essential" }

  Remove a skill:
  Delete its entry.

  Add a domain:
  Copy one of the domain objects and change its ID/name.

  Priority options: Essential, High, Advanced, Optional
*/

window.D2M_CONFIG = {

  profile: {
    title: "D2M / Mask Data Preparation Engineer",
    subtitle: "Semiconductor Engineering | Technical Skills Portfolio",
    experience: "Technical Expert / Specialist"
  },

  domains: [

    {
      id: "layout",
      name: "Design Database & Layout Integration",
      description: "Layout databases, geometry and design integration",
      skills: [
        {id:"gds",name:"GDSII database handling",priority:"Essential"},
        {id:"oasis",name:"OASIS database handling",priority:"Essential"},
        {id:"hierarchy",name:"Hierarchical layout processing",priority:"Essential"},
        {id:"layer-map",name:"Layer mapping and layer-purpose mapping",priority:"Essential"},
        {id:"polygon",name:"Polygon manipulation",priority:"Essential"},
        {id:"geometry",name:"Geometry and Boolean operations",priority:"Essential"},
        {id:"flatten",name:"Cell flattening and hierarchy management",priority:"High"},
        {id:"merge",name:"Layout merging and clipping",priority:"High"},
        {id:"xor",name:"Layout comparison and XOR analysis",priority:"High"},
        {id:"coordinate",name:"Coordinate transformations and grid precision",priority:"High"},
        {id:"reticle",name:"Reticle frame and scribe lane integration",priority:"High"},
        {id:"seal-ring",name:"Seal ring, kerf and alignment mark integration",priority:"High"},
        {id:"rdl",name:"RDL and packaging layout integration",priority:"Optional"}
      ]
    },

    {
      id: "mdp",
      name: "Mask Data Preparation & Fracturing",
      description: "Core mask data processing and writer preparation",
      skills: [
        {id:"mdp-flow",name:"End-to-end MDP flow ownership",priority:"Essential"},
        {id:"conversion",name:"GDSII / OASIS data conversion",priority:"Essential"},
        {id:"jobdeck",name:"Mask job deck generation",priority:"Essential"},
        {id:"jobdeck-debug",name:"Job deck authoring and debugging",priority:"Essential"},
        {id:"fracture",name:"Data fracturing",priority:"Essential"},
        {id:"vsb",name:"Variable-shaped beam (VSB) concepts",priority:"Essential"},
        {id:"trapezoid",name:"Trapezoid and rectangle fracturing",priority:"High"},
        {id:"fracture-opt",name:"Fracture optimization",priority:"High"},
        {id:"shot-count",name:"Shot count optimization",priority:"High"},
        {id:"data-volume",name:"Data volume and file-size optimization",priority:"High"},
        {id:"fracture-check",name:"Fracture data verification",priority:"Essential"},
        {id:"mebes",name:"MEBES and writer-specific formats",priority:"High"},
        {id:"writer-format",name:"Mask writer data format knowledge",priority:"High"},
        {id:"multi-beam",name:"Multi-beam mask writing",priority:"Advanced"},
        {id:"curvilinear",name:"Curvilinear mask data preparation",priority:"Advanced"}
      ]
    },

    {
      id: "dfm",
      name: "DFM, DRC, MRC & Verification",
      description: "Manufacturability, design rules and data quality",
      skills: [
        {id:"drc",name:"Design Rule Checking (DRC)",priority:"Essential"},
        {id:"lvs",name:"Layout Versus Schematic (LVS)",priority:"High"},
        {id:"erc",name:"Electrical Rule Checking (ERC)",priority:"High"},
        {id:"mrc",name:"Mask Rule Checking (MRC)",priority:"Essential"},
        {id:"density",name:"Density analysis",priority:"Essential"},
        {id:"dummy-fill",name:"Dummy fill and metal fill",priority:"High"},
        {id:"min-width",name:"Minimum width and spacing verification",priority:"Essential"},
        {id:"notch",name:"Notch and sliver detection",priority:"High"},
        {id:"geometry-check",name:"Geometry validation",priority:"Essential"},
        {id:"hotspot",name:"Lithography hotspot detection",priority:"High"},
        {id:"dfm",name:"Design for Manufacturability (DFM)",priority:"Essential"},
        {id:"dft",name:"Design for Testability (DFT) awareness",priority:"High"},
        {id:"integrity",name:"Mask data integrity checks",priority:"Essential"},
        {id:"tapeout-check",name:"Final tape-out verification",priority:"Essential"},
        {id:"rule-deck",name:"Design rule deck understanding",priority:"High"}
      ]
    },

    {
      id: "opc",
      name: "OPC & Computational Lithography",
      description: "Lithography simulation and pattern correction",
      skills: [
        {id:"litho",name:"Optical lithography fundamentals",priority:"Essential"},
        {id:"ope",name:"Optical proximity effects",priority:"Essential"},
        {id:"rbopc",name:"Rule-based OPC",priority:"High"},
        {id:"mbopc",name:"Model-based OPC",priority:"Essential"},
        {id:"opc-deck",name:"OPC job deck development",priority:"High"},
        {id:"opc-recipe",name:"OPC recipe optimization",priority:"High"},
        {id:"opc-verification",name:"OPC verification",priority:"High"},
        {id:"sraf",name:"Sub-resolution assist features (SRAF)",priority:"High"},
        {id:"ret",name:"Resolution Enhancement Techniques (RET)",priority:"High"},
        {id:"process-window",name:"Process window analysis",priority:"High"},
        {id:"resist",name:"Resist modelling",priority:"Advanced"},
        {id:"simulation",name:"Lithography simulation",priority:"Advanced"},
        {id:"smo",name:"Source Mask Optimization (SMO)",priority:"Advanced"},
        {id:"ilt",name:"Inverse Lithography Technology (ILT)",priority:"Advanced"},
        {id:"wafer-correlation",name:"Simulation-to-wafer correlation",priority:"Advanced"}
      ]
    },

    {
      id: "mask-manufacturing",
      name: "Mask Manufacturing & Metrology",
      description: "Photomask manufacturing, inspection and quality",
      skills: [
        {id:"mask-flow",name:"Photomask manufacturing flow",priority:"Essential"},
        {id:"mask-writing",name:"Mask writing technologies",priority:"Essential"},
        {id:"inspection",name:"Mask inspection principles",priority:"High"},
        {id:"cd",name:"Critical dimension (CD) measurement",priority:"High"},
        {id:"cd-uniformity",name:"CD uniformity",priority:"High"},
        {id:"registration",name:"Mask registration and placement accuracy",priority:"High"},
        {id:"meef",name:"Mask Error Enhancement Factor (MEEF)",priority:"High"},
        {id:"mpc",name:"Mask Process Correction (MPC)",priority:"High"},
        {id:"defects",name:"Mask defect classification",priority:"High"},
        {id:"sem",name:"SEM-based inspection awareness",priority:"High"},
        {id:"variation",name:"Mask process variation",priority:"High"},
        {id:"spc",name:"Statistical Process Control (SPC)",priority:"High"},
        {id:"doe",name:"Design of Experiments (DOE)",priority:"High"},
        {id:"mask-shop",name:"Mask shop coordination",priority:"Essential"},
        {id:"reticle-qualification",name:"Reticle qualification",priority:"High"}
      ]
    },

    {
      id: "eda",
      name: "EDA Software & Platforms",
      description: "Engineering software and mask data platforms",
      skills: [
        {id:"cats",name:"Synopsys CATS / MDP",priority:"Essential"},
        {id:"calibre",name:"Siemens Calibre",priority:"Essential"},
        {id:"tachyon",name:"ASML / Brion Tachyon",priority:"High"},
        {id:"virtuoso",name:"Cadence Virtuoso",priority:"High"},
        {id:"ic-validator",name:"Synopsys IC Validator",priority:"High"},
        {id:"klayout",name:"KLayout",priority:"High"},
        {id:"nmopc",name:"Calibre nmOPC",priority:"High"},
        {id:"opcverify",name:"Calibre OPCverify",priority:"High"},
        {id:"nmsraf",name:"Calibre nmSRAF",priority:"High"},
        {id:"workbench",name:"Calibre WORKbench",priority:"High"},
        {id:"jdv",name:"Jobdeck View (JDV)",priority:"High"}
      ]
    },

    {
      id: "programming",
      name: "Programming & Automation",
      description: "Scripting, programming and workflow automation",
      skills: [
        {id:"python",name:"Python",priority:"Essential"},
        {id:"tcl",name:"Tcl / Tk",priority:"Essential"},
        {id:"perl",name:"Perl",priority:"High"},
        {id:"bash",name:"Bash / Shell scripting",priority:"Essential"},
        {id:"cpp",name:"C / C++",priority:"Advanced"},
        {id:"skill",name:"Cadence SKILL programming",priority:"High"},
        {id:"linux",name:"Linux / Unix",priority:"Essential"},
        {id:"regex",name:"Regular expressions",priority:"High"},
        {id:"file-parsing",name:"File parsing and data extraction",priority:"Essential"},
        {id:"log-analysis",name:"Log analysis and automation",priority:"Essential"},
        {id:"api",name:"API integration",priority:"High"},
        {id:"batch",name:"Batch processing",priority:"Essential"},
        {id:"git",name:"Git / Version control",priority:"High"},
        {id:"sql",name:"SQL / Database handling",priority:"Optional"},
        {id:"hpc",name:"HPC and compute cluster management",priority:"Advanced"},
        {id:"cicd",name:"CI/CD and automated testing",priority:"Advanced"}
      ]
    },

    {
      id: "operations",
      name: "Tape-out & Engineering Operations",
      description: "Technical ownership and production engineering",
      skills: [
        {id:"tapeout",name:"Full tape-out ownership",priority:"Essential"},
        {id:"release",name:"Mask data release management",priority:"Essential"},
        {id:"revision",name:"Revision and configuration control",priority:"Essential"},
        {id:"rca",name:"Root-cause analysis",priority:"Essential"},
        {id:"improvement",name:"Process improvement",priority:"Essential"},
        {id:"documentation",name:"Technical documentation",priority:"Essential"},
        {id:"collaboration",name:"Cross-functional collaboration",priority:"Essential"},
        {id:"foundry-interface",name:"Foundry and mask shop interface",priority:"Essential"},
        {id:"vendor",name:"EDA vendor coordination",priority:"High"},
        {id:"project",name:"Project and schedule management",priority:"High"},
        {id:"optimization",name:"Production flow optimization",priority:"High"},
        {id:"mentoring",name:"Technical mentoring",priority:"High"},
        {id:"best-method",name:"Best-known-method development",priority:"High"},
        {id:"quality",name:"Quality and change management",priority:"High"}
      ]
    },

    {
      id: "advanced",
      name: "Advanced Mask Technologies",
      description: "Next-generation mask and lithography technologies",
      skills: [
        {id:"euv",name:"Extreme Ultraviolet (EUV) lithography",priority:"Advanced"},
        {id:"euv-mask",name:"EUV mask architecture",priority:"Advanced"},
        {id:"curvilinear-advanced",name:"Curvilinear mask data",priority:"Advanced"},
        {id:"multibeam",name:"Multi-beam mask writing",priority:"Advanced"},
        {id:"inverse-litho",name:"Inverse Lithography Technology",priority:"Advanced"},
        {id:"multipattern",name:"Multi-patterning",priority:"Advanced"},
        {id:"stochastic",name:"Lithography stochastic effects",priority:"Advanced"},
        {id:"mask-3d",name:"3D mask effects",priority:"Advanced"}
      ]
    },

    {
      id: "infrastructure",
      name: "HPC, Data Infrastructure & Analytics",
      description: "Production infrastructure, analytics and computational efficiency",
      skills: [
        {id:"scheduler",name:"Job scheduling and production monitoring",priority:"High"},
        {id:"parallel",name:"Parallel processing concepts",priority:"Advanced"},
        {id:"storage",name:"Large-scale data storage management",priority:"High"},
        {id:"performance",name:"Runtime and performance optimization",priority:"High"},
        {id:"statistics",name:"Statistical data analysis",priority:"High"},
        {id:"yield",name:"Yield and process correlation",priority:"Advanced"},
        {id:"dashboard",name:"Engineering data dashboards",priority:"High"},
        {id:"database-admin",name:"Database administration fundamentals",priority:"Optional"}
      ]
    }

  ],

  tools: [
    "Synopsys CATS",
    "Siemens Calibre",
    "Cadence Virtuoso",
    "ASML / Brion Tachyon",
    "Synopsys Proteus",
    "Synopsys IC Validator",
    "KLayout",
    "Python",
    "Perl",
    "Tcl / Tk",
    "Bash / Shell",
    "Git"
  ],

  workflow: [
    {name:"Design Input",detail:"GDSII / OASIS, layer maps, technology files and specifications."},
    {name:"Layout Preparation",detail:"Hierarchy processing, layer operations and geometry manipulation."},
    {name:"Verification",detail:"DRC, MRC, density and data integrity verification."},
    {name:"OPC / RET",detail:"Lithography correction and resolution enhancement where required."},
    {name:"Fracturing & MDP",detail:"Writer-compatible geometry conversion, fracturing and job deck creation."},
    {name:"Mask Shop Handoff",detail:"Final validation, data package generation and controlled release."},
    {name:"Inspection & Feedback",detail:"Manufacturing feedback, inspection results and corrective actions."}
  ]

};
