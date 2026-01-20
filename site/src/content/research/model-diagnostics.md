---
title: "Model Diagnostics & Evaluation"
description: "Leading community frameworks for process-oriented climate model evaluation"
cover: ./diagnostics-card.jpg
order: 5
keyPublications:
  - title: "Systematic and objective evaluation of Earth System Models: PCMDI Metrics Package (PMP) Version 3"
    authors: "Lee, J., Gleckler, P. J., Ahn, M., Ordonez, A., Ullrich, P. A., Sperber, K. R., Taylor, K. E., Planton, Y. Y., Guilyardi, E., Durack, P., Bonfils, C., Zelinka, M. D., Chao, L., Dong, B., Doutriaux, C., Zhang, C., Vo, T., Boutte, J., Wehner, M. F., Pendergrass, A. G., Kim, D., Xue, Z., Wittenberg, A. T., *Krasting, J.*"
    journal: "Geoscientific Model Development"
    year: 2024
    doi: "10.5194/gmd-17-3919-2024"
    significance: "Provides the community-standard open-source framework for systematic ESM evaluation across CMIP phases, enabling modeling groups to assess performance changes during development cycles in the context of multi-model ensemble error distributions."
  - title: "Process-oriented diagnostics: principles, practice, community development, and common standards"
    authors: "Neelin, J. D., *Krasting, J. P.*, Radhakrishnan, A., Liptak, J., Jackson, T., Ming, Y., Dong, W., Gettelman, A., Coleman, D. R., Maloney, E. D., Wing, A. A., Kuo, Y., Ahmed, F., Ullrich, P., Bitz, C. M., Neale, R. B., Ordonez, A., Maroon, E. A."
    journal: "Bulletin of the American Meteorological Society"
    year: 2023
    doi: "10.1175/BAMS-D-21-0268.1"
    significance: "Establishes foundational principles and best practices for process-oriented diagnostics that evaluate specific physical mechanisms rather than aggregate outcomes, creating the methodological framework now adopted by modeling centers globally."
  - title: "Taking climate model evaluation to the next level"
    authors: "Eyring, V., Cox, P. M., Flato, G. M., Gleckler, P. J., Abramowitz, G., Caldwell, P., Collins, W. D., Gier, B. K., Hall, A. D., Hoffman, F. M., Hurtt, G. C., Jahn, A., Jones, C. D., Klein, S. A., *Krasting, J. P.*, et al."
    journal: "Nature Climate Change"
    year: 2019
    doi: "10.1038/s41558-018-0355-y"
    significance: "Articulates the community vision for advancing climate model evaluation beyond traditional metrics toward process-based assessment, emergent constraints, and machine learning approaches—a roadmap that has shaped international diagnostics efforts."
  - title: "Future changes in Northern Hemisphere snowfall"
    authors: "*Krasting, J. P.*, Broccoli, A. J., Dixon, K. W., Lanzante, J. R."
    journal: "Journal of Climate"
    year: 2013
    doi: "10.1175/JCLI-D-12-00832.1"
    significance: "Demonstrates that the −10°C isotherm delineates where snowfall increases versus decreases under warming, with seasonal redistributions occurring even where annual totals are unchanged—establishing temperature thresholds as diagnostic indicators of regional snow response."
    firstAuthor: true
---

## Overview

Climate models are complex systems with millions of lines of code representing thousands of physical, chemical, and biological processes. Traditional evaluation approaches compare model output to observations using aggregate statistics—global mean temperature, seasonal precipitation patterns, ocean heat content. While informative, these metrics cannot reveal why models behave as they do or identify which process representations need improvement. A model might produce realistic global temperatures for the wrong reasons—compensating errors in cloud feedbacks and ocean heat uptake, for example. To build confidence in projections and systematically improve models, the community needs process-oriented diagnostics that evaluate specific mechanisms: how convection responds to warming, how ocean mixing affects heat uptake, whether carbon cycle feedbacks operate correctly.

Dr. Krasting co-founded and co-leads NOAA's Model Diagnostics Task Force, which has pioneered development and application of process-oriented diagnostics (PODs) for climate model evaluation. Launched in 2018 with initial NOAA MAPP funding, this initiative has grown into a collaborative framework spanning NOAA laboratories, university partners, and international modeling centers. The Task Force develops computational tools that evaluate specific mechanisms rather than aggregate outcomes, enabling modelers to identify why their simulations behave as they do and where targeted improvements are needed. With over 50 diagnostics covering atmospheric dynamics, ocean processes, land-atmosphere coupling, and biogeochemistry, the framework has become a community standard used by modeling centers worldwide.

## Leadership & Impact

Dr. Krasting's leadership of this initiative earned him NOAA/OAR Employee of the Year in 2021, recognizing "outstanding work in developing diagnostic frameworks and fostering new research collaborations on sea level." As Co-Principal Investigator, he has secured $4.7 million across three consecutive NOAA Climate Program Office grants (2018-2021, 2021-2024, 2025-2027), building sustainable infrastructure for community model evaluation. His 2023 *Bulletin of the American Meteorological Society* paper "Process-oriented diagnostics: principles, practice, community development, and common standards" established guidelines now adopted by modeling centers globally, laying out principles for diagnostic design, software development practices, and community engagement. This work has fostered collaborations across institutions and created a framework that will serve the climate modeling community for decades.

## Current Work

The current NOAA MAPP grant (2025-2027, $2.2M total, $1.0M institutional) extends the framework to evaluate models "across scales"—from global climate models to regional and high-resolution simulations. New diagnostics address multi-scale phenomena like atmospheric rivers, mesoscale ocean eddies, and land-atmosphere coupling. Dr. Krasting is implementing diagnostics as standard output in GFDL's OM5 and CM5 models, ensuring process evaluation becomes routine rather than ad hoc. The framework is expanding internationally, with collaborations enabling application to CMIP7 models from centers worldwide. With growing community adoption, ongoing funding through 2027, and integration into production modeling workflows, the Model Diagnostics Task Force represents a lasting contribution to climate science infrastructure.
