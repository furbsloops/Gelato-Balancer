// src/lib/targets.ts

export type TargetRange = {
    fat: [number, number];
    msnf: [number, number];
    pod: [number, number];
    stabilizer: [number, number];
    solids: [number, number];
  };
  
  export const Targets: Record<string, TargetRange> = {
    "Non-Fat": {
      fat: [0, 0.005],
      msnf: [0.12, 0.14],
      pod: [0.18, 0.22],
      stabilizer: [0.009, 0.011],
      solids: [0.28, 0.32],
    },
    "Low Fat": {
      fat: [0.02, 0.05],
      msnf: [0.12, 0.14],
      pod: [0.18, 0.21],
      stabilizer: [0.007, 0.009],
      solids: [0.28, 0.32],
    },
    "Light": {
      fat: [0.05, 0.07],
      msnf: [0.11, 0.12],
      pod: [0.18, 0.2],
      stabilizer: [0.004, 0.006],
      solids: [0.3, 0.35],
    },
    "Reduced Fat": {
      fat: [0, 0.1],
      msnf: [0.09, 0.1],
      pod: [0.14, 0.17],
      stabilizer: [0.002, 0.004],
      solids: [0.36, 0.38],
    },
    "Standard": {
      fat: [0.10, 0.12],
      msnf: [0.09, 0.1],
      pod: [0.14, 0.17],
      stabilizer: [0.002, 0.004],
      solids: [0.36, 0.38],
    },
    "Premium": {
      fat: [0.12, 0.14],
      msnf: [0.08, 0.1],
      pod: [0.13, 0.16],
      stabilizer: [0.002, 0.004],
      solids: [0.38, 0.4],
    },
    "Super-Premium": {
      fat: [0.14, 0.18],
      msnf: [0.05, 0.08],
      pod: [0.14, 0.17],
      stabilizer: [0.0, 0.002],
      solids: [0.4, 0.42],
    },
    "Gelato": {
      fat: [0.04, 0.08],
      msnf: [0.09, 0.12],
      pod: [0.15, 0.24],
      stabilizer: [0.004, 0.005],
      solids: [0.32, 0.42],
    },
    "Frozen Yogurt: Non-Fat": {
      fat: [0, 0.005],
      msnf: [0.09, 0.14],
      pod: [0.15, 0.17],
      stabilizer: [0.005, 0.007],
      solids: [0.28, 0.32],
    },
    "Frozen Yogurt: Regular": {
      fat: [0.03, 0.06],
      msnf: [0.09, 0.13],
      pod: [0.15, 0.17],
      stabilizer: [0.004, 0.005],
      solids: [0.3, 0.36],
    },
    "Sorbet": {
      fat: [0.0, 0.01],
      msnf: [0.0, 0.0],
      pod: [0.22, 0.28],
      stabilizer: [0.004, 0.005],
      solids: [0.28, 0.34],
    },
    "Sherbet": {
      fat: [0.01, 0.02],
      msnf: [0.01, 0.03],
      pod: [0.22, 0.28],
      stabilizer: [0.004, 0.005],
      solids: [0.28, 0.34],
    },
  };