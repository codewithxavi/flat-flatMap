[1, 2, 3, 4, 5, 6].filter((n) => n % 2 !== 0).map((n) => n * 2);

[1, 2, 3, 4, 5, 6]
  .map((n) => (n % 2 === 0 ? false : n * 2))
  .filter((n) => n !== false);

[1, 2, 3, 4, 5, 6].flatMap((n) => (n % 2 === 0 ? [] : n * 2));

[1, 2, 3, [4, 5, [6, 7]]].flat(Infinity);

[1, 2, 3, 4, 5, 6].flatMap((n) => n * 2);
