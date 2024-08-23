school_names = {
    "NLCS": "North London Collegiate School",
    "BHA": "Branksome Hall Asia",
    "KIS": "Korea International School",
    "SJA": "St. Johnsbury Academy"
}

school_abbreviation = input().strip()

print(school_names.get(school_abbreviation, "Unknown School"))
