export const handleWordOnScreen = (data) => {
    const lowercasedData = data.toLowerCase();
    // Split the lowercased string into words
    const words = lowercasedData.split(' ');
    // Capitalize the first letter of each word and truncate longer words
    const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    // Join the capitalized words to form the final string
    const modifiedWord = capitalizedWords.join(' ').slice(0, 4) + (capitalizedWords.join(' ').length > 4 ? '...' : '');
    return modifiedWord;

}