// import random
// import math
// def random_color():
//     return [random.randint(0, 255) for _ in range(3)]
// # "Zoals de vogel vliegt"
// def euclidean_distance(a, b):
//     return math.sqrt(sum([(x - y)**2 for x, y in zip(a, b)]))
// # Zoals je moet rijden in Manhattan (over een raster)
// def manhattan_distance(a, b):
//     return sum([abs(x-y) for x, y in zip(a, b)])
// colors = (random_color(), random_color())
// print(euclidean_distance(*colors))
// print(manhattan_distance(*colors))

const getColorComponentIntensity = () => Math.floor(Math.random() * 255);

const getColor = () => [
    getColorComponentIntensity(),
    getColorComponentIntensity(),
    getColorComponentIntensity(),
];
// This is not the inverse, this _is_ another color
const getInverseOfColor = rgbArray =>
    rgbArray.map(colorValue => 255 - colorValue);

const colorsAreSimilar = (color1, color2) => {
    // A color is similar if all three color components are close together
    // (we could use reduce, but this is easier to read)
    const rIsSimilar = Math.abs(color1[0] - color2[0]) < colorCloseness;
    const gIsSimilar = Math.abs(color1[1] - color2[1]) < colorCloseness;
    const bIsSimilar = Math.abs(color1[2] - color2[2]) < colorCloseness;
    return rIsSimilar && gIsSimilar && bIsSimilar;
};

const containsSimilarColor = (arr, color) =>
    arr.find(c => colorsAreSimilar(c, color)) !== undefined;

const toHex = rgb =>
    rgb.map(value => value.toString(16).padStart(2, "0")).join("");

// Recursive
const generateNDifferentColors = (number, colors = []) => {
    if (number === 0) return colors;
    const newColor = getColor();
    if (containsSimilarColor(colors, newColor))
        return generateNDifferentColors(number, colors);
    colors.push(newColor);
    return generateNDifferentColors(number - 1, colors);
};