// Citation metadata extracted from documents/cv/my_publications.tex
// Volume, issue, and pages for each publication keyed by DOI

export interface CitationMeta {
  volume: string;
  issue?: string;
  pages: string;
}

export const citationMetadata: Record<string, CitationMeta> = {
  // pub45 - Griffies et al. 2025
  "10.1029/2024MS004861": { volume: "17", pages: "e2024MS004861, 58 pp." },

  // pub44 - Turner et al. 2025
  "10.1175/JCLI-D-24-0642.1": { volume: "38", issue: "20", pages: "5615–5632" },

  // pub43 - Jeevanjee et al. 2025
  "10.1146/annurev-earth-040523-014302": { volume: "53", pages: "30 pp." },

  // pub42 - Long et al. 2025
  "10.1175/JCLI-D-24-0214.1": { volume: "38", issue: "6", pages: "27 pp." },

  // pub41 - Drake et al. 2025
  "10.1029/2024MS004383": { volume: "17", pages: "e2024MS004383, 36 pp." },

  // pub40 - Steinberg et al. 2024
  "10.1029/2024JC021425": { volume: "129", pages: "e2024JC021425, 19 pp." },

  // pub39 - Beadling et al. 2024
  "10.1029/2024GL110157": { volume: "51", issue: "22", pages: "e2024GL110157, 13 pp." },

  // pub38 - Krasting et al. 2024
  "10.1175/JCLI-D-23-0591.1": { volume: "37", issue: "24", pages: "6563–6583" },

  // pub37 - Lee et al. 2024
  "10.5194/gmd-17-3919-2024": { volume: "17", issue: "9", pages: "3919–3948" },

  // pub36 - Shevliakova et al. 2024
  "10.1029/2023MS003922": { volume: "16", pages: "e2023MS003922, 47 pp." },

  // pub35 - Neelin et al. 2023
  "10.1175/BAMS-D-21-0268.1": { volume: "104", issue: "8", pages: "E1452–E1468" },

  // pub34 - Tesdal et al. 2023
  "10.1029/2022JC019105": { volume: "128", issue: "3", pages: "e2022JC019105, 36 pp." },

  // pub33 - Dong et al. 2023
  "10.1175/JCLI-D-22-0529.1": { volume: "36", issue: "19", pages: "6967–6990" },

  // pub32 - Takano et al. 2023
  "10.3389/fmars.2023.1139917": { volume: "10", pages: "1139917, 21 pp." },

  // pub31 - Ayar et al. 2022
  "10.5194/esd-13-1097-2022": { volume: "13", issue: "3", pages: "31 pp." },

  // pub30 - Beadling et al. 2022
  "10.1029/2021JC017608": { volume: "127", pages: "e2021JC017608, 33 pp." },

  // pub29 - Lim et al. 2022
  "10.1029/2021GL096113": { volume: "49", pages: "e2021GL096113, 11 pp." },

  // pub28 - Krasting et al. 2022
  "10.1038/s43247-022-00419-4": { volume: "3", issue: "1", pages: "11 pp." },

  // pub27 - Stouffer et al. 2022
  "10.1175/JCLI-D-20-0690.1": { volume: "35", issue: "4", pages: "1327–1346" },

  // pub26 - Yu et al. 2021
  "10.1175/BAMS-D-20-0154.1": { volume: "102", issue: "1", pages: "S1–S8" },

  // pub25 - Arora et al. 2020
  "10.5194/bg-17-4173-2020": { volume: "17", issue: "16", pages: "4173–4222" },

  // pub24 - Winton et al. 2020
  "10.1029/2019MS001838": { volume: "12", pages: "e2019MS001838, 17 pp." },

  // pub23 - Dunne et al. 2020 (GRL)
  "10.1029/2020GL088852": { volume: "47", pages: "e2020GL088852, 10 pp." },

  // pub22 - Stock et al. 2020
  "10.1029/2019MS002043": { volume: "12", pages: "e2019MS002043, 62 pp." },

  // pub21 - Dunne et al. 2020 (BLINGv2)
  "10.1029/2019MS002008": { volume: "12", pages: "e2019MS002008, 19 pp." },

  // pub20 - Dunne et al. 2020 (ESM4.1)
  "10.1029/2019MS002015": { volume: "12", pages: "e2019MS002015, 56 pp." },

  // pub19 - Findell et al. 2019
  "10.1175/JCLI-D-19-0145.1": { volume: "32", issue: "22", pages: "7713–7726" },

  // pub18 - Held et al. 2019
  "10.1029/2019MS001829": { volume: "11", issue: "11", pages: "3691–3727" },

  // pub17 - Eyring et al. 2019
  "10.1038/s41558-018-0355-y": { volume: "9", issue: "2", pages: "9 pp." },

  // pub16 - Adcroft et al. 2019
  "10.1029/2019MS001726": { volume: "11", issue: "10", pages: "3167–3211" },

  // pub15 - Krasting et al. 2018
  "10.1175/JCLI-D-18-0035.1": { volume: "31", issue: "22", pages: "9313–9333" },

  // pub14 - Zhao et al. 2018 (AM4.0/LM4.0 Part 1)
  "10.1002/2017MS001208": { volume: "10", issue: "3", pages: "691–734" },

  // pub13 - Zhao et al. 2018 (AM4.0/LM4.0 Part 2)
  "10.1002/2017MS001209": { volume: "10", issue: "3", pages: "735–769" },

  // pub12 - Sentman et al. 2018
  "10.1029/2018PA003364": { volume: "33", issue: "7", pages: "840–859" },

  // pub11 - Naiman et al. 2017
  "10.1175/JCLI-D-16-0512.1": { volume: "30", issue: "11", pages: "4149–4163" },

  // pub10 - Findell et al. 2017
  "10.1038/s41467-017-01038-w": { volume: "8", pages: "989" },

  // pub9 - Krasting et al. 2016 (Nature Geoscience)
  "10.1038/ngeo2641": { volume: "9", issue: "3", pages: "210–214" },

  // pub8 - Eyring et al. 2016
  "10.5194/gmd-9-1747-2016": { volume: "9", issue: "5", pages: "1747–1802" },

  // pub7 - Ding et al. 2014
  "10.1002/2013JC009780": { volume: "119", issue: "8", pages: "5622–5637" },

  // pub6 - Krasting et al. 2014
  "10.1002/2013GL059141": { volume: "41", issue: "7", pages: "2520–2527" },

  // pub5 - Krasting et al. 2013
  "10.1175/JCLI-D-12-00832.1": { volume: "26", issue: "20", pages: "7813–7828" },

  // pub4 - Dunne et al. 2013 (ESM2 Part II)
  "10.1175/JCLI-D-12-00150.1": { volume: "26", issue: "7", pages: "2247–2267" },

  // pub3 - Shevliakova et al. 2013
  "10.1073/pnas.1314047110": { volume: "110", issue: "42", pages: "16730–16735" },

  // pub2 - Hallberg et al. 2013
  "10.1175/JCLI-D-12-00506.1": { volume: "26", issue: "9", pages: "2947–2956" },

  // pub1 - Dunne et al. 2012 (ESM2 Part I)
  "10.1175/JCLI-D-11-00560.1": { volume: "25", issue: "19", pages: "6646–6665" },
};

export function getCitationMetadata(doi: string): CitationMeta | undefined {
  return citationMetadata[doi];
}
