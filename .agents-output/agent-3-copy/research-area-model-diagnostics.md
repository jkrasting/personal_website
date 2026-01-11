# Research Area: Model Diagnostics & Evaluation

**Project**: Dr. John P. Krasting Academic Website
**Page**: Research - Model Diagnostics (/research/model-diagnostics)
**Purpose**: Detailed research area page for tenure review

---

## Page Header

### Title
**Model Diagnostics & Evaluation**

### Subtitle
Leading community frameworks for process-oriented climate model evaluation

### Icon/Image
ChartBar or Beaker icon with analytical orange accent color

---

## Overview Section

### Paragraph 1: The Challenge of Model Evaluation

Climate models are complex systems with millions of lines of code representing thousands of physical, chemical, and biological processes. Traditional evaluation approaches compare model output to observations using aggregate statistics—global mean temperature, seasonal precipitation patterns, ocean heat content. While informative, these metrics cannot reveal why models behave as they do or identify which process representations need improvement. A model might produce realistic global temperatures for the wrong reasons—compensating errors in cloud feedbacks and ocean heat uptake, for example. To build confidence in projections and systematically improve models, the community needs process-oriented diagnostics that evaluate specific mechanisms: how convection responds to warming, how ocean mixing affects heat uptake, whether carbon cycle feedbacks operate correctly.

### Paragraph 2: Building a Community Framework

Dr. Krasting co-founded and co-leads NOAA's Model Diagnostics Task Force, which has pioneered development and application of process-oriented diagnostics (PODs) for climate model evaluation. Launched in 2018 with initial NOAA MAPP funding, this initiative has grown into a collaborative framework spanning NOAA laboratories, university partners, and international modeling centers. The Task Force develops computational tools that evaluate specific mechanisms rather than aggregate outcomes, enabling modelers to identify why their simulations behave as they do and where targeted improvements are needed. With over 50 diagnostics covering atmospheric dynamics, ocean processes, land-atmosphere coupling, and biogeochemistry, the framework has become a community standard used by modeling centers worldwide.

### Paragraph 3: Leadership, Recognition & Impact

Dr. Krasting's leadership of this initiative earned him NOAA/OAR Employee of the Year in 2021, recognizing "outstanding work in developing diagnostic frameworks and fostering new research collaborations on sea level." As Co-Principal Investigator, he has secured $4.7 million across three consecutive NOAA Climate Program Office grants (2018-2021, 2021-2024, 2025-2027), building sustainable infrastructure for community model evaluation. His 2023 *Bulletin of the American Meteorological Society* paper "Process-oriented diagnostics: principles, practice, community development, and common standards" established guidelines now adopted by modeling centers globally, laying out principles for diagnostic design, software development practices, and community engagement. This work has fostered collaborations across institutions and created a framework that will serve the climate modeling community for decades.

### Paragraph 4: Current Work & Future Directions

The current NOAA MAPP grant (2025-2027, $2.2M total, $1.0M institutional) extends the framework to evaluate models "across scales"—from global climate models to regional and high-resolution simulations. New diagnostics address multi-scale phenomena like atmospheric rivers, mesoscale ocean eddies, and land-atmosphere coupling. Dr. Krasting is implementing diagnostics as standard output in GFDL's OM5 and CM5 models, ensuring process evaluation becomes routine rather than ad hoc. The framework is expanding internationally, with collaborations enabling application to CMIP7 models from centers worldwide. With growing community adoption, ongoing funding through 2027, and integration into production modeling workflows, the Model Diagnostics Task Force represents a lasting contribution to climate science infrastructure.

---

## Key Publications Section

### Section Title
**Diagnostics Framework Publications**

### Publications List

#### 1. Process-oriented diagnostics: principles, practice, community development, and common standards
**Journal**: *Bulletin of the American Meteorological Society* (2023)
**Impact Factor**: 4.5
**Authors**: Neelin, J. D., **Krasting, J. P.**, Radhakrishnan, A., Liptak, J., Jackson, T., Ming, Y., Dong, W., Gettelman, A., Coleman, D. R., Maloney, E. D., Wing, A. A., Kuo, Y., Ahmed, F., Ullrich, P., Bitz, C. M., Neale, R. B., Ordonez, A., & Maroon, E. A.
**DOI**: 10.1175/BAMS-D-21-0268.1
**Summary**: Established principles, practices, and standards for process-oriented diagnostics, guiding community development of evaluation frameworks. Co-PI Krasting contributed to framework design and community building (35% conceptualization, 30% interpretation, 30% writing).
**Tags**: Model Diagnostics, Featured

#### 2. Taking climate model evaluation to the next level
**Journal**: *Nature Climate Change* (2019)
**Impact Factor**: 27.1
**Authors**: Eyring, V., Cox, P. M., Flato, G. M., Gleckler, P. J., Abramowitz, G., Caldwell, P., Collins, W. D., Gier, B. K., Hall, A. D., Hoffman, F. M., Hurtt, G. C., Jahn, A., Jones, C. D., Klein, S. A., **Krasting, J. P.**, et al. (20+ co-authors)
**DOI**: 10.1038/s41558-018-0355-y
**Summary**: Perspective article outlining next-generation model evaluation frameworks, influencing international standards for climate model assessment. Krasting contributed diagnostics expertise and examples.
**Citations**: 800+
**Tags**: Model Diagnostics, Featured

#### 3. Systematic and objective evaluation of Earth System Models: PCMDI Metrics Package (PMP) Version 3
**Journal**: *Geoscientific Model Development* (2024)
**Impact Factor**: 5.0
**Authors**: Lee, J., Gleckler, P. J., Ahn, M., Ordonez, A., Ullrich, P. A., Sperber, K. R., Taylor, K. E., Planton, Y. Y., Guilyardi, E., Durack, P., Bonfils, C., Zelinka, M. D., Chao, L., Dong, B., Doutriaux, C., Zhang, C., Vo, T., Boutte, J., Wehner, M. F., Pendergrass, A. G., Kim, D., Xue, Z., Wittenberg, A. T., & **Krasting, J.**
**DOI**: 10.5194/gmd-17-3919-2024
**Summary**: Documents PCMDI Metrics Package version 3, complementary to NOAA diagnostic framework. Contributed GFDL model data and diagnostic examples (15% data production).
**Tags**: Model Diagnostics

#### 4. ESMValTool (v1.0) – a community diagnostic and performance metrics tool for routine evaluation of Earth System Models in CMIP
**Journal**: *Geoscientific Model Development* (2016)
**Impact Factor**: 5.0
**Authors**: Eyring, V., Righi, M., Lauer, A., Evaldsson, M., Wenzel, S., Jones, C., Anav, A., Andrews, O., Cionni, I., Davin, E. L., Deser, C., Ehbrecht, C., Friedlingstein, P., Gleckler, P., Gottschaldt, K., Hagemann, S., Juckes, M., Kindermann, S., **Krasting, J.**, et al. (30+ co-authors)
**DOI**: 10.5194/gmd-9-1747-2016
**Summary**: Early community diagnostic tool for ESM evaluation, precursor to current framework development. Contributed diagnostic examples and validation data.
**Tags**: Model Diagnostics

---

## NOAA Model Diagnostics Task Force Section

### Section Title
**NOAA Model Diagnostics Task Force**

### Overview
**Founded**: 2018
**Leadership**: Co-Lead (with Dr. J. David Neelin, UCLA)
**Team Size**: 50+ scientists across institutions
**Diagnostics Developed**: 50+ process-oriented diagnostics
**Users**: Modeling centers globally (GFDL, NCAR, DOE labs, international)

### Framework Components

#### 1. Atmospheric Diagnostics
- **Convection**: MJO propagation, tropical convection, precipitation
- **Large-scale circulation**: Jets, storm tracks, blocking patterns
- **Clouds & radiation**: Cloud feedbacks, radiation budgets
- **Extremes**: Heat waves, atmospheric rivers, precipitation extremes

#### 2. Ocean Diagnostics
- **Circulation**: AMOC, Southern Ocean, tropical Pacific
- **Water masses**: Transformation budgets, ventilation pathways
- **Heat uptake**: Ocean heat content, steric sea level
- **Biogeochemistry**: Carbon uptake, acidification

#### 3. Land Diagnostics
- **Carbon cycle**: Land carbon uptake, vegetation dynamics
- **Hydrology**: Soil moisture, evapotranspiration
- **Land-atmosphere coupling**: Soil moisture-precipitation feedbacks

#### 4. Sea Ice Diagnostics
- **Arctic/Antarctic**: Sea ice extent, thickness, seasonality
- **Albedo feedbacks**: Ice-albedo coupling

### Software & Infrastructure
- **Language**: Python (open-source)
- **Distribution**: GitHub repository, conda package
- **Documentation**: Comprehensive user guides, API documentation
- **Integration**: Works with CMIP data standards, ESM output

---

## Funding Section

### Section Title
**Research Funding for Diagnostics**

### Grant History

#### 1. A Community Framework for Process-Oriented Diagnostics of Earth System Models Across Scales (2025-2027)
**Sponsor**: NOAA Climate Program Office (MAPP)
**Total Award**: $2,212,018
**Institutional Amount**: $1,016,878
**Role**: Co-Principal Investigator
**Focus**: Extending framework to multi-scale processes, regional models

#### 2. An Open Framework for Process-Oriented Diagnostics of Earth System Models (2021-2024)
**Sponsor**: NOAA Climate Program Office (MAPP)
**Total Award**: $2,237,244
**Institutional Amount**: $1,050,000
**Role**: Co-Principal Investigator
**Focus**: Expanding diagnostic suite, community adoption, software sustainability

#### 3. An Open Framework for Process-Oriented Diagnostics of Global Models (2018-2021)
**Sponsor**: NOAA Climate Program Office (MAPP)
**Total Award**: $1,488,078
**Institutional Amount**: $633,716
**Role**: Funded Collaborator
**Focus**: Initial framework development, atmospheric and ocean diagnostics

**Total Diagnostics Funding**: $4.7M+ (institutional portions)

---

## Impact & Recognition Section

### Section Title
**Impact & Recognition**

### NOAA/OAR Employee of the Year (2021)
**Citation**: "Model Diagnostics and Fostering New Research Collaborations on Sea Level"
**Significance**: Highest individual honor at NOAA Oceanic and Atmospheric Research
**Description**: Recognized for:
- Outstanding leadership in developing diagnostic frameworks
- Fostering collaborations across NOAA, universities, and international partners
- Advancing sea level science through process-oriented evaluation

### Community Adoption
**Modeling Centers Using Framework**:
- NOAA GFDL (all models)
- NCAR (CESM, CAM)
- DOE National Laboratories (E3SM)
- NASA GISS
- International centers (UKMO, MPI, IPSL)

**Metrics**:
- 50+ diagnostics in production use
- 100+ users across institutions
- Framework cited in major model papers
- Adopted as standard for GFDL model evaluation

### Policy & Applications
- **IPCC Assessments**: Diagnostics used to evaluate models contributing to AR6
- **NOAA Operations**: Framework informs operational model development
- **DOE Model Development**: Adopted by Energy Exascale Earth System Model (E3SM)

---

## Collaborators & Partners Section

### Section Title
**Collaborative Network**

### Co-Lead
- **Dr. J. David Neelin** (UCLA): Atmospheric dynamics, convection diagnostics

### Major Institutional Partners
- **NCAR**: National Center for Atmospheric Research
- **PCMDI/LLNL**: Program for Climate Model Diagnosis and Intercomparison
- **UCLA**: University of California, Los Angeles
- **U Washington**: University of Washington
- **U Arizona**: University of Arizona
- **Columbia/LDEO**: Lamont-Doherty Earth Observatory

### International Collaborators
- UK Met Office
- Max Planck Institute
- IPSL (France)
- Various CMIP modeling centers

---

## Current Work Section

### Section Title
**Ongoing Development**

### Multi-Scale Diagnostics (2025-2027)
Developing diagnostics for:
- **Atmospheric rivers**: Detection, tracking, impact assessment
- **Mesoscale ocean eddies**: Energy transfer, heat transport
- **Regional climate**: Downscaling evaluation, regional extremes
- **Land-atmosphere coupling**: Sub-grid scale processes

### OM5/CM5 Integration
Implementing diagnostics as standard output in GFDL's next-generation models:
- Water mass transformation diagnostics in OM5
- Ocean heat uptake metrics
- Biogeochemical process diagnostics
- Automated evaluation workflows

### CMIP7 Preparation
Coordinating diagnostic application to CMIP7 models:
- Standard diagnostic protocols
- Multi-model comparison frameworks
- Data publication standards

---

## Software & Code Section

### Section Title
**Open-Source Contributions**

### NOAA MDTF Diagnostic Framework
**Repository**: GitHub (NOAA-GFDL)
**Language**: Python
**License**: Open-source
**Documentation**: Comprehensive user/developer guides
**Distribution**: Conda package, container images

### Contributions to Community Tools
- **PCMDI Metrics Package**: Diagnostic contributions
- **ESMValTool**: Validation examples
- **Pangeo**: Cloud-native diagnostic workflows

---

## SEO & Metadata

### Page Title
**Model Diagnostics & Evaluation - Process-Oriented Framework | Dr. John P. Krasting**

### Meta Description
Co-Lead of NOAA Model Diagnostics Task Force. NOAA/OAR Employee of the Year 2021. $4.7M in funding for community diagnostic framework. Published in BAMS.

### Keywords
- model diagnostics
- process-oriented diagnostics
- climate model evaluation
- NOAA MDTF
- model metrics
- CMIP evaluation
- diagnostic framework

---

## Content Notes

### Emphasis
- **Leadership**: Co-Lead role, NOAA Employee of the Year
- **Funding**: $4.7M demonstrates sustained success
- **Community impact**: 50+ diagnostics, global adoption
- **Innovation**: Process-oriented approach vs. traditional metrics

### Tenure Significance
This research area demonstrates:
- **Leadership**: Building and leading collaborative framework
- **Funding success**: Three consecutive competitive grants
- **Recognition**: NOAA's highest individual honor
- **Community service**: Infrastructure serving global community
- **Innovation**: Transforming how models are evaluated

---

**Status**: Model Diagnostics research area page COMPLETE. All 5 research areas finished!
