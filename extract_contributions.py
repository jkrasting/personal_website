#!/usr/bin/env python3
"""
Extract contribution information from CV LaTeX source and update publication JSON files
"""

import json
import re
from pathlib import Path
from typing import Dict, Optional

def parse_contribution_line(line: str) -> Optional[Dict]:
    """Extract contribution information from a LaTeX publication entry."""
    # Match the \ifdetails line with contribution text
    match = re.search(r'\\ifdetails.*?\\small\{\\textit\{(.*?)\}\}', line, re.DOTALL)
    if not match:
        return None

    text = match.group(1)

    # Extract contribution percentages (C=X% / D=Y% / A=Z% / I=W% / W=V%)
    contributions = {}
    c_match = re.search(r'C=(\d+)%', text)
    d_match = re.search(r'D=(\d+)%', text)
    a_match = re.search(r'A=(\d+)%', text)
    i_match = re.search(r'I=(\d+)%', text)
    w_match = re.search(r'W=(\d+)%', text)

    if c_match:
        contributions['conceptualization'] = int(c_match.group(1))
    if d_match:
        contributions['dataProduction'] = int(d_match.group(1))
    if a_match:
        contributions['analysis'] = int(a_match.group(1))
    if i_match:
        contributions['interpretation'] = int(i_match.group(1))
    if w_match:
        contributions['writing'] = int(w_match.group(1))

    # Extract the descriptive statement (everything before the percentage notation)
    # Remove the percentage part in parentheses
    statement = re.sub(r'\s*\([CDIAWcdaiw\s=/\d%]+\)\s*$', '', text).strip()

    return {
        'statement': statement,
        'contributions': contributions
    }

def extract_all_contributions(latex_file: Path) -> Dict[str, Dict]:
    """Extract contribution data for all publications from LaTeX file."""
    with open(latex_file, 'r') as f:
        content = f.read()

    # Split into individual publication entries
    entries = re.split(r'\\bibitem\{pub(\d+)\}', content)[1:]  # Skip first empty element

    contributions_data = {}

    for i in range(0, len(entries), 2):
        pub_num = entries[i]
        pub_content = entries[i+1]

        # Extract year and first author for matching
        year_match = re.search(r', (\d{4}):', pub_content)
        # Match author, handling LaTeX formatting like \textbf{Krasting}
        author_match = re.search(r'^([^,]+),', pub_content)

        contrib = parse_contribution_line(pub_content)
        if contrib and year_match and author_match:
            year = year_match.group(1)
            author = author_match.group(1).strip()
            # Clean author formatting - remove all LaTeX commands
            author = re.sub(r'\\textbf\{([^}]+)\}', r'\1', author)  # Remove \textbf{}
            author = re.sub(r'\{[^}]*\$[^}]*\}', '', author)  # Remove {$^\dagger$} etc
            author = re.sub(r'\s+', ' ', author).strip()  # Normalize whitespace

            contributions_data[f'latex-pub{pub_num}'] = {
                'year': year,
                'first_author': author,
                'contribution': contrib
            }

    return contributions_data

def update_publication_json(pub_file: Path, contribution_data: Dict):
    """Update a publication JSON file with contribution information."""
    with open(pub_file, 'r') as f:
        data = json.load(f)

    # Add contribution statement and percentages
    if contribution_data:
        data['contributionStatement'] = contribution_data['statement']
        if contribution_data['contributions']:
            data['contributions'] = contribution_data['contributions']

    with open(pub_file, 'w') as f:
        json.dump(data, f, indent=2)
        f.write('\n')

def match_publication(json_data: Dict, latex_contributions: Dict) -> Optional[Dict]:
    """Match a JSON publication to its LaTeX contribution data by year and author."""
    json_year = str(json_data['year'])
    json_author = json_data['authors'][0].split(',')[0].strip()

    for latex_id, latex_data in latex_contributions.items():
        if latex_data['year'] == json_year:
            latex_author = latex_data['first_author'].split(',')[0].strip()
            # Check if authors match (accounting for formatting differences)
            if latex_author.lower() in json_author.lower() or json_author.lower() in latex_author.lower():
                return latex_data['contribution']

    return None

def main():
    latex_file = Path('documents/cv/my_publications.tex')
    pub_dir = Path('site/src/content/publications')

    print("Extracting contribution data from CV LaTeX source...")
    contributions = extract_all_contributions(latex_file)
    print(f"Found contribution data for {len(contributions)} publications\n")

    # Update each publication file by matching content
    updated_count = 0
    for pub_file in pub_dir.glob('*.json'):
        if pub_file.name == '_id_mapping.json':
            continue

        with open(pub_file, 'r') as f:
            data = json.load(f)

        contrib = match_publication(data, contributions)
        if contrib:
            update_publication_json(pub_file, contrib)
            print(f"Updated {pub_file.stem}")
            updated_count += 1
        else:
            print(f"No match found for {pub_file.stem}")

    print(f"\n✓ Updated {updated_count} publication files with contribution data")

if __name__ == '__main__':
    main()
