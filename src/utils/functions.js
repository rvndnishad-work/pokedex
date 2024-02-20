export const formatPokemonData = (pokemon) => {
  const { id, name, sprites, types } = pokemon;
  const paddedId = String(id).padStart(3, '0');
  const formattedTypes = types.map(({ type }) => type.name.toUpperCase());
  const pokemonImg =
    sprites.other.dream_world.front_default ||
    sprites.other['official-artwork'].front_default;

  return {
    paddedId,
    imgSrc: pokemonImg,
    types: formattedTypes,
    name: removeHyphens(name),
  };
};

const removeHyphens = (string) => {
  return string.replace(/-/g, ' ');
};

export const getPokemonCardBackground = (type = [], colorCodes = {}) => {
  if (typeof type === 'string') {
    type = [type];
  }
  if (!Array.isArray(type)) {
    return 'Invalid type input';
  }
  if (typeof colorCodes !== 'object') {
    return 'Invalid colorCodes input';
  }
  let colors = [];
  for (let t of type) {
    if (colorCodes.hasOwnProperty(t)) {
      colors.push(colorCodes[t]);
    }
  }
  if (colors.length === 0) {
    return 'No matching colors found';
  }
  if (colors.length === 1) {
    return colors[0];
  }
  let gradient = 'linear-gradient(';
  if (colors.length === 2) {
    gradient += 'to bottom, ';
  } else {
    gradient += 'to bottom, ';
  }
  gradient += colors.join(', ');
  gradient += ')';
  return gradient;
};
