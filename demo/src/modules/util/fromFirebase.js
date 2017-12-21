export const fromFirebase = data => {
  return Object.keys(data).reduce((acc, key, idx) => {
    acc.push({ ...data[key], key });
    return acc;
  }, []);
};

export default fromFirebase;
