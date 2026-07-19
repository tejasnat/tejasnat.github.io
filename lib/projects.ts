export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: "Design & CFD" | "Thermal & Multiphysics" | "ML & Data" | "Research & Mobility";
  date: string;
  summary: string;
  brief: string;
  tools: string[];
  focus: string[];
  visual: "turbine" | "airfoil" | "thermal" | "mobility" | "auv" | "material" | "roof" | "rod";
  challenge: string;
  approach: string[];
  findings: string[];
  reflection: string;
  facts: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "tesla-turbine",
    number: "01",
    title: "Design and Analysis of a Tesla Turbine",
    shortTitle: "Tesla Turbine",
    category: "Design & CFD",
    date: "Jan — Apr 2026",
    summary: "A 12-disk bladeless turbine assembly developed in SolidWorks and reviewed through turbomachinery calculations and CFD-informed design reasoning.",
    brief: "The project moved from the elegant principle of viscous momentum transfer to the less elegant—but more important—questions of casing flow, sealing, alignment and manufacturability.",
    tools: ["SolidWorks", "CFD", "Turbomachinery", "Mechanical assembly"],
    focus: ["Fluid momentum transfer", "Disk spacing", "Sealing", "Assembly tolerance"],
    visual: "turbine",
    challenge: "Translate the Tesla turbine principle into a credible mechanical assembly while preserving a controlled path for the working fluid through the disk pack.",
    approach: [
      "Built a 12-disk rotor assembly with shaft, collars, bearing support, casing, tangential inlet and outlet arrangement.",
      "Connected CAD decisions to pressure drop, viscous shear, torque and mass-flow reasoning rather than treating geometry as a purely visual exercise.",
      "Reviewed the assembly and flow path for bypass, choking, leakage, bearing-seat sensitivity and practical access for manufacture and assembly.",
    ],
    findings: [
      "The casing allowed opportunities for flow to bypass the useful inter-disk region.",
      "A theoretically functional rotor can still underperform when sealing, inlet delivery and alignment are weak.",
      "Disk spacing, inlet velocity and fluid viscosity must be studied together because they change both torque potential and losses.",
    ],
    reflection: "The strongest outcome was not a perfect turbine. It was learning that a working principle becomes an engineering system only when flow control, tolerances, bearings, sealing and manufacturability are designed together.",
    facts: [
      { label: "Rotor", value: "12 disks" },
      { label: "Baseline spacing", value: "2 mm" },
      { label: "Core study", value: "Flow → shear → torque" },
    ],
  },
  {
    slug: "aerodynamic-ml-model",
    number: "02",
    title: "Machine Learning Model for Aerodynamics",
    shortTitle: "Aerodynamic ML",
    category: "ML & Data",
    date: "Academic project",
    summary: "A Random Forest surrogate model for non-linear lift and drag behaviour and classification of airfoil stall boundaries.",
    brief: "A data-driven attempt to reduce repeated high-cost simulation across every design point—while keeping sight of the physical limits of the dataset.",
    tools: ["Python", "Random Forest", "Data preprocessing", "Error analysis"],
    focus: ["Lift and drag", "Stall classification", "Surrogate modelling", "Physical consistency"],
    visual: "airfoil",
    challenge: "Estimate non-linear aerodynamic behaviour and identify the onset of stall without performing a fresh CFD analysis for every operating point.",
    approach: [
      "Prepared aerodynamic datasets through cleaning, feature selection and threshold-based definition of stall behaviour.",
      "Trained a Random Forest model to predict lift and drag trends and classify stall boundaries.",
      "Used error analysis to examine where the surrogate was credible and where limited coverage or inconsistent data weakened prediction quality.",
    ],
    findings: [
      "The model captured useful non-linear trends and offered a fast screening layer for design-space exploration.",
      "Accuracy depended strongly on whether the training data represented the relevant operating range.",
      "A low numerical error alone does not guarantee a physically meaningful aerodynamic prediction.",
    ],
    reflection: "Machine learning is most valuable here as a physics-aware accelerator, not a replacement for aerodynamic understanding or carefully chosen validation cases.",
    facts: [
      { label: "Model", value: "Random Forest" },
      { label: "Outputs", value: "Lift · drag · stall" },
      { label: "Role", value: "Fast surrogate" },
    ],
  },
  {
    slug: "joule-heating-multiphysics",
    number: "03",
    title: "Electro-Thermal Multiphysics Analysis",
    shortTitle: "Joule Heating",
    category: "Thermal & Multiphysics",
    date: "Jan — Apr 2026",
    summary: "A coupled electric-current and thermal analysis of a steel plate with a central hole under voltage loading.",
    brief: "A multiphysics model that became most instructive when the first temperature response looked wrong—and the assumptions had to be interrogated.",
    tools: ["ANSYS", "Multiphysics", "Electric current", "Heat transfer"],
    focus: ["Current density", "Joule heating", "Boundary conditions", "Heat loss"],
    visual: "thermal",
    challenge: "Model how applied voltage produces non-uniform current density and temperature rise around a geometric discontinuity, without allowing unrealistic thermal accumulation.",
    approach: [
      "Created a steel-plate geometry with a central hole and coupled the electric and thermal physics.",
      "Studied voltage, resistance, load duration, heat generation and boundary-condition sensitivity.",
      "Revisited heat-loss and loading assumptions after the initial model produced unrealistic thermal spikes.",
    ],
    findings: [
      "The hole disturbed the current path and intensified local electro-thermal behaviour.",
      "Temperature rise was governed as much by thermal boundary conditions and load duration as by voltage.",
      "An apparently converged solution can remain physically invalid when heat rejection is under-defined.",
    ],
    reflection: "The project sharpened a crucial simulation habit: question the physics before trusting the contour plot.",
    facts: [
      { label: "Physics", value: "Electric + thermal" },
      { label: "Material", value: "Steel plate" },
      { label: "Key check", value: "Physical validity" },
    ],
  },
  {
    slug: "public-transport-electrification",
    number: "04",
    title: "The Road to Electrifying India’s Public Transport",
    shortTitle: "EV Public Transport",
    category: "Research & Mobility",
    date: "Feb 2024 — Feb 2025",
    summary: "A systems-level review of the technology, economics, policy and infrastructure shaping electric public transport in India.",
    brief: "Engineering feasibility is only one layer of adoption. This research connected batteries and charging to cost, policy, fleet operations and implementation capacity.",
    tools: ["Energy systems", "EV systems", "Policy analysis", "Research synthesis"],
    focus: ["Electric buses", "Charging", "Economics", "Public policy"],
    visual: "mobility",
    challenge: "Understand why technically viable electric buses do not scale automatically, especially in a public-transport system shaped by cost pressure, infrastructure gaps and policy execution.",
    approach: [
      "Reviewed technological, economic, policy and infrastructure barriers across Indian and international contexts.",
      "Connected battery and charging choices with total-cost feasibility, route operation, grid readiness and public-transport dependency.",
      "Synthesised the findings into a conference presentation and formal manuscript.",
    ],
    findings: [
      "Fleet electrification is a coordinated infrastructure transition, not simply a vehicle substitution.",
      "Charging strategy, battery sizing and duty cycle must be evaluated as one operating system.",
      "Incentives can trigger adoption, but implementation capacity determines whether deployment remains durable.",
    ],
    reflection: "The research expanded my view of engineering: a solution succeeds at scale only when the technology, economics, policy and operations support one another.",
    facts: [
      { label: "Scope", value: "Technology → policy" },
      { label: "Output", value: "Conference paper" },
      { label: "Status", value: "Under review" },
    ],
  },
  {
    slug: "autonomous-underwater-vehicle",
    number: "05",
    title: "Autonomous Underwater Vehicle",
    shortTitle: "AUV Mechanical Design",
    category: "Design & CFD",
    date: "Feb 2024 — Feb 2025",
    summary: "Mechanical design and CAD work for compact AUV structural components and integrated subsystem layouts.",
    brief: "A team design problem in which every component competed for limited space and every mechanical decision affected another subsystem.",
    tools: ["CAD", "Mechanical design", "Packaging", "Team integration"],
    focus: ["Subsystem layout", "Mounting", "Assembly access", "Manufacturability"],
    visual: "auv",
    challenge: "Package structural and subsystem elements inside a constrained underwater platform while preserving strength, access, mounting integrity and team-level integration.",
    approach: [
      "Developed CAD layouts and structural-component concepts for the university AUV team.",
      "Worked around tight internal volume, mounting requirements, wiring paths and access for assembly.",
      "Coordinated mechanical decisions with the placement and needs of other subsystems.",
    ],
    findings: [
      "Packaging is an engineering constraint, not a final arrangement task.",
      "A component that fits geometrically may still fail the test of installation, fastening or maintenance access.",
      "Team design requires interfaces and constraints to be communicated as carefully as dimensions.",
    ],
    reflection: "The AUV made system integration tangible: strength, compactness, manufacture, access and cross-team dependencies all have to survive the same design decision.",
    facts: [
      { label: "Role", value: "Mechanical team" },
      { label: "Medium", value: "Underwater" },
      { label: "Constraint", value: "Compact packaging" },
    ],
  },
  {
    slug: "bismuth-oxide-tribology",
    number: "06",
    title: "Tribological Study of Bismuth Oxide Nanoparticles",
    shortTitle: "Bi₂O₃ Tribology",
    category: "Research & Mobility",
    date: "Jan 2026 — Present",
    summary: "An ongoing study of Bi₂O₃ nanoparticles as lubricant additives for reducing friction and wear in mechanical contacts.",
    brief: "A materials-focused investigation into how microscopic particle behaviour can influence lubrication stability and macroscopic component life.",
    tools: ["Literature review", "Material analysis", "Tribology", "Nanoparticles"],
    focus: ["Friction", "Wear", "Particle morphology", "Lubricant stability"],
    visual: "material",
    challenge: "Assess whether bismuth oxide nanoparticles can form a useful lubricant additive and determine which particle and synthesis characteristics are likely to govern performance.",
    approach: [
      "Reviewed the friction- and wear-reduction mechanisms reported for nanoparticle lubricant additives.",
      "Studied how particle size, morphology, synthesis route and material behaviour affect tribological response.",
      "Connected microscopic mechanisms such as film formation and surface interaction to component-level reliability.",
    ],
    findings: [
      "Additive performance depends on dispersion stability as well as the intrinsic material properties.",
      "Particle size and morphology influence whether an additive protects a contact or contributes to abrasion.",
      "The most useful formulation must balance friction reduction, wear protection and long-term oil stability.",
    ],
    reflection: "The study is building a bridge between material selection at the nanoscale and the mechanical outcomes engineers care about: friction, wear and service life.",
    facts: [
      { label: "Material", value: "Bi₂O₃" },
      { label: "Application", value: "Lubricant additive" },
      { label: "Status", value: "Ongoing" },
    ],
  },
  {
    slug: "roof-heat-transfer",
    number: "07",
    title: "Study of Heat Transfer Through a Roof",
    shortTitle: "Roof Heat Transfer",
    category: "Thermal & Multiphysics",
    date: "Aug — Nov 2025",
    summary: "A MATLAB and ANSYS study combining conduction, convection and radiation to compare roof materials and surface conditions.",
    brief: "A building-scale heat-transfer problem used to examine how material and boundary choices shape indoor thermal performance.",
    tools: ["MATLAB", "ANSYS", "Heat transfer", "Thermal modelling"],
    focus: ["Conduction", "Convection", "Radiation", "Material selection"],
    visual: "roof",
    challenge: "Represent the coupled heat-transfer modes acting on a roof and compare how material, finish and surrounding conditions change the resulting temperature field.",
    approach: [
      "Modelled conduction through roof layers, convection with ambient air and an AC discharge region, and radiation from the exposed surface.",
      "Compared material and surface-condition scenarios using MATLAB and ANSYS.",
      "Interpreted the temperature distributions through boundary conditions and material properties rather than treating them as isolated outputs.",
    ],
    findings: [
      "Surface properties altered absorbed and rejected thermal energy, not just the internal conductivity.",
      "Convection assumptions strongly influenced the predicted temperature distribution near the conditioned region.",
      "Roof performance must be read as a combined material–surface–boundary-condition problem.",
    ],
    reflection: "The study showed how classical heat-transfer modes become practical design variables when the goal is thermal comfort and reduced cooling demand.",
    facts: [
      { label: "Modes", value: "3 coupled modes" },
      { label: "Tools", value: "MATLAB + ANSYS" },
      { label: "Application", value: "Building thermal" },
    ],
  },
  {
    slug: "transient-heat-conduction",
    number: "08",
    title: "Transient Heat Conduction in a Copper Rod",
    shortTitle: "1D Heat Conduction",
    category: "Thermal & Multiphysics",
    date: "Feb — May 2025",
    summary: "A finite-difference MATLAB model validated against analytical trends for unsteady one-dimensional conduction.",
    brief: "A numerical methods project centred on the relationship between discretisation, stability, boundary conditions and physical credibility.",
    tools: ["MATLAB", "Finite difference method", "Analytical validation", "Numerical stability"],
    focus: ["Transient conduction", "Time step", "Mesh size", "Validation"],
    visual: "rod",
    challenge: "Compute the transient temperature response of a copper rod while maintaining numerical stability and demonstrating agreement with expected analytical behaviour.",
    approach: [
      "Discretised the rod spatially and advanced the temperature solution through time using a finite-difference formulation.",
      "Varied time-step, mesh spacing and boundary assumptions to study sensitivity and stability.",
      "Compared numerical trends with analytical behaviour as a validation check.",
    ],
    findings: [
      "Time and space resolution jointly controlled accuracy and stability.",
      "Boundary assumptions changed the physical response as strongly as the numerical scheme.",
      "Agreement with analytical trends helped separate plausible solutions from numerical artefacts.",
    ],
    reflection: "The project established a workflow I now carry into simulation work: formulate, discretise, test sensitivity, and validate before interpreting.",
    facts: [
      { label: "Method", value: "Finite difference" },
      { label: "Material", value: "Copper" },
      { label: "Check", value: "Analytical trend" },
    ],
  },
];

export const categories = ["All", "Design & CFD", "Thermal & Multiphysics", "ML & Data", "Research & Mobility"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
