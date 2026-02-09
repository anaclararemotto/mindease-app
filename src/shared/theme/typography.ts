export const typography = {
  headingxxl: { fontSize: 48, fontWeight: 700 as const},
  headingxl: { fontSize: 32, fontWeight: 700 as const},
  headinglg: { fontSize: 28, fontWeight: 700 as const},
  headingmd: { fontSize: 25, fontWeight: 700 as const},
  headingsm: { fontSize: 22, fontWeight: 600 as const},
  headingxs: { fontSize: 18, fontWeight: 600 as const},
  bodylg: { fontSize: 16, fontWeight: 400 as const},
  bodymd: { fontSize: 14, fontWeight: 400 as const},
  bodysm: { fontSize: 12, fontWeight: 400 as const},
  button: { fontSize: 16, fontWeight: 500 as const},
};

export type Typography = typeof typography;