#!/usr/bin/env python3
"""
Convert publication IDs from numbered format (pub-001) to semantic format (lastname-year-keyword)
"""

import json
import re
from pathlib import Path
from typing import Dict, List

def get_first_author_lastname(authors: List[str]) -> str:
    """Extract last name from first author."""
    first_author = authors[0]
    # Handle formats like "Last, F." or "First Last"
    if ',' in first_author:
        return first_author.split(',')[0].strip().lower()
    else:
        # Take last word as last name
        return first_author.split()[-1].strip('.').lower()

def generate_keyword(title: str) -> str:
    """Generate a keyword from the title."""
    # Remove common words and take first meaningful words
    title_lower = title.lower()

    # Remove leading articles and common phrases
    title_lower = re.sub(r'^(the|a|an)\s+', '', title_lower)

    # Extract key words (skip common words)
    skip_words = {'the', 'a', 'an', 'and', 'or', 'of', 'in', 'on', 'for', 'to', 'from', 'with', 'by', 'at', 'as'}
    words = []
    for word in title_lower.split():
        # Clean word
        word = re.sub(r'[^\w]', '', word)
        if word and word not in skip_words and len(word) > 2:
            words.append(word)
        if len(words) >= 3:  # Use up to 3 keywords
            break

    return '-'.join(words) if words else 'paper'

def generate_new_id(data: Dict) -> str:
    """Generate semantic ID from publication data."""
    lastname = get_first_author_lastname(data['authors'])
    year = data['year']
    keyword = generate_keyword(data['title'])

    return f"{lastname}-{year}-{keyword}"

def convert_publications(pub_dir: Path):
    """Convert all publications to new ID format."""

    mapping = {}

    # Get all JSON files
    json_files = sorted(pub_dir.glob('*.json'))

    print(f"Found {len(json_files)} publications to convert\n")

    for json_file in json_files:
        # Read the file
        with open(json_file, 'r') as f:
            data = json.load(f)

        old_id = data['id']
        new_id = generate_new_id(data)

        # Handle potential duplicates
        new_file = pub_dir / f"{new_id}.json"
        counter = 2
        while new_file.exists() and new_file != json_file:
            new_id_temp = f"{new_id}-{counter}"
            new_file = pub_dir / f"{new_id_temp}.json"
            counter += 1
            if counter > 2:
                new_id = new_id_temp

        # Update the ID in the data
        data['id'] = new_id

        # Write to new file
        with open(new_file, 'w') as f:
            json.dump(data, f, indent=2)
            f.write('\n')  # Add trailing newline

        # Delete old file if different
        if new_file != json_file:
            json_file.unlink()

        mapping[old_id] = new_id
        print(f"{old_id:12} -> {new_id}")

    print(f"\n✓ Converted {len(mapping)} publications")

    # Save mapping for reference
    with open(pub_dir / '_id_mapping.json', 'w') as f:
        json.dump(mapping, f, indent=2)

    print(f"✓ Saved ID mapping to _id_mapping.json")

if __name__ == '__main__':
    pub_dir = Path('/home/krasting/services/johnkrasting-site/site/src/content/publications')
    convert_publications(pub_dir)
