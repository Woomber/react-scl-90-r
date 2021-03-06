const puntosT = [
  [
    //Femenino adolescentes
    /*SOM*/ [0, 0.08, 0.25, 0.42, 0.75, 1.18, 1.58, 1.89, 2.08, 2.84, 3.34, 3.42],
    /*OBS*/ [0.1, 0.2, 0.5, 0.8, 1.2, 1.66, 2.1, 2.4, 2.6, 3.2, 3.3, 3.3],
    /*SI */ [0.11, 0.22, 0.44, 0.78, 1.11, 1.56, 2, 2.33, 2.44, 3.11, 3.57, 3.78],
    /*DEP*/ [0.08, 0.15, 0.38, 0.7, 1, 1.54, 1.92, 2.31, 2.46, 3.23, 3.65, 5.25],
    /*ANS*/ [0, 0.1, 0.3, 0.5, 0.9, 1.4, 1.9, 2.2, 2.4, 3.15, 4.02, 4.38],
    /*HOS*/ [0, 0.17, 0.29, 0.5, 0.83, 1.33, 2, 2.5, 2.81, 3.55, 4, 4],
    /*FOB*/ [0, 0, 0, 0.14, 0.29, 0.57, 1, 1.29, 1.57, 2.57, 2.89, 3.43],
    /*PAR*/ [0, 0, 0.17, 0.5, 0.83, 1.5, 2.05, 2.5, 2.67, 3.26, 3.35, 3.67],
    /*PSIC*/ [0, 0, 0.1, 0.2, 0.6, 0.9, 1.4, 1.6, 1.8, 2.5, 3.01, 3.2],
    /*ADD*/ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    /*IGS*/ [0.07, 0.19, 0.37, 0.56, 0.84, 1.17, 1.53, 1.71, 1.86, 2.33, 2.78, 3.12],
    /*TSP*/ [7, 13, 22, 32.13, 43, 52, 63, 69.7, 72.39, 80.62, 88.06, 89],
    /*IMSP*/ [1, 1.1, 1.3, 1.5, 1.76, 2.02, 2.4, 2.54, 2.66, 3.1, 3.36, 3.37],
  ],
  [
    //Femenino adultos
    /*SOM*/ [0, 0.17, 0.25, 0.42, 0.75, 1, 1.49, 1.83, 2, 2.36, 2.87, 3],
    /*OBS*/ [0, 0.2, 0.4, 0.7, 1, 1.4, 1.8, 2.1, 2.2, 2.9, 3.41, 3.5],
    /*SI */ [0, 0.11, 0.22, 0.44, 0.67, 1.11, 1.44, 1.67, 1.89, 2.6, 3, 3],
    /*DEP*/ [0.05, 0.23, 0.38, 0.62, 0.85, 1.23, 1.77, 2, 2.23, 2.8, 3.31, 3.69],
    /*ANS*/ [0, 0.2, 0.3, 0.6, 0.8, 1.2, 1.6, 1.8, 2.13, 2.5, 3.04, 3.1],
    /*HOS*/ [0, 0, 0.17, 0.33, 0.67, 1, 1.5, 1.67, 1.83, 2.56, 3.17, 3.33],
    /*FOB*/ [0, 0, 0, 0, 0.29, 0.57, 0.86, 1.14, 1.29, 2, 2.63, 3.14],
    /*PAR*/ [0, 0, 0.17, 0.33, 0.67, 1.17, 1.67, 2, 2.17, 3, 3.78, 4],
    /*PSIC*/ [0, 0, 0.1, 0.2, 0.4, 0.7, 1, 1.1, 1.3, 1.97, 2.57, 2.7],
    /*ADD*/ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    /*IGS*/ [0.15, 0.28, 0.37, 0.52, 0.73, 1.04, 1.36, 1.62, 1.74, 2.18, 2.46, 2.54],
    /*TSP*/ [9, 15, 21.12, 29, 37, 47, 57, 62, 66, 74, 77.71, 82],
    /*IMSP*/ [1.12, 1.25, 1.43, 1.59, 1.85, 2.12, 2.41, 2.53, 2.67, 2.99, 3.15, 3.27],
  ],
  [
    //Masculino adolescentes
    /*SOM*/ [0, 0, 0.02, 0.17, 0.33, 0.58, 0.92, 1.08, 1.31, 1.75, 2.23, 3.08],
    /*OBS*/ [0, 0.1, 0.3, 0.5, 0.9, 1.3, 1.8, 2.01, 2.2, 2.72, 3.48, 3.89],
    /*SI */ [0, 0.11, 0.22, 0.36, 0.67, 1, 1.33, 1.56, 1.67, 2.24, 2.84, 3],
    /*DEP*/ [0, 0, 0.15, 0.35, 0.54, 0.77, 1.23, 1.46, 1.62, 2.11, 2.83, 3],
    /*ANS*/ [0, 0, 0.1, 0.2, 0.4, 0.7, 1, 1.31, 1.43, 2.07, 2.89, 3.7],
    /*HOS*/ [0, 0, 0.17, 0.33, 0.67, 1.17, 1.67, 2.02, 2.33, 3.21, 3.62, 3.67],
    /*FOB*/ [0, 0, 0, 0, 0.14, 0.29, 0.57, 0.71, 0.86, 1.32, 3.37, 4],
    /*PAR*/ [0, 0, 0, 0.33, 0.67, 1, 1.5, 1.83, 2, 2.71, 3.49, 4.83],
    /*PSIC*/ [0, 0, 0, 0.1, 0.3, 0.5, 0.8, 1.01, 1.28, 1.92, 2.43, 2.5],
    /*ADD*/ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    /*IGS*/ [0.06, 0.12, 0.19, 0.33, 0.52, 0.71, 0.97, 1.1, 1.27, 1.6, 2.26, 2.39],
    /*TSP*/ [3.56, 8, 13, 20, 30, 39, 47, 52.1, 56, 71, 74.53, 76],
    /*IMSP*/ [0.9, 1, 1.17, 1.33, 1.54, 1.8, 2.14, 2.29, 2.47, 2.81, 3.72, 4],
  ],
  [
    //Masculino adultos
    /*SOM*/ [0, 0, 0.08, 0.25, 0.42, 0.75, 1.08, 1.25, 1.42, 1.75, 2.31, 2.5],
    /*OBS*/ [0, 0.2, 0.3, 0.5, 0.8, 1.3, 1.7, 1.9, 2.2, 2.6, 3.4, 2.6],
    /*SI */ [0, 0, 0.11, 0.33, 0.56, 0.89, 1.33, 1.56, 1.67, 2.38, 3, 3.22],
    /*DEP*/ [0, 0.08, 0.23, 0.38, 0.69, 1.02, 1.38, 1.62, 1.77, 2.42, 2.88, 3.15],
    /*ANS*/ [0, 0.1, 0.2, 0.4, 0.6, 0.9, 1.3, 1.6, 1.7, 2.28, 2.67, 2.7],
    /*HOS*/ [0, 0, 0.17, 0.33, 0.67, 1, 1.33, 1.67, 1.83, 2.57, 3.17, 3.83],
    /*FOB*/ [0, 0, 0, 0, 0.14, 0.29, 0.57, 0.86, 1, 1.43, 1.88, 2.71],
    /*PAR*/ [0, 0, 0.17, 0.33, 0.67, 1.17, 1.5, 1.83, 2.07, 2.67, 2.95, 3.17],
    /*PSIC*/ [0, 0, 0, 0.2, 0.3, 0.5, 0.9, 1.2, 1.4, 1.74, 2.17, 2.3],
    /*ADD*/ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    /*IGS*/ [0.11, 0.17, 0.29, 0.41, 0.61, 0.88, 1.1, 1.32, 1.49, 1.84, 2.17, 2.22],
    /*TSP*/ [5.6, 10, 16, 23.8, 32, 41.2, 52, 57, 61, 75, 79.72, 85],
    /*IMSP*/ [1.05, 1.22, 1.36, 1.56, 1.75, 2, 2.25, 2.4, 2.53, 2.91, 3.3, 3.65],
  ],
];

export default puntosT;
