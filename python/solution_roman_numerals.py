def to_roman(num):
    # We mapped out the roman numerals that are possible
    numeralMap = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'V': 5,
        'IV': 4,
        'I': 1,
    }
    # Initialized our answer so we can append to it
    output = ''
    # Loop over the map
    for k in numeralMap:
        # If the value at the current index is less than or equal to the number given
        while num >= numeralMap[k]:
            # Add the key to the output (our roman numeral)
            # Subtract the value from the given number by the value from the current index
            output += k
            num -= numeralMap[k]
    # We looped through the entire map and converted, so return the output
    return output