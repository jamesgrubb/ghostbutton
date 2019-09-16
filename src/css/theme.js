const baseTheme = {
    colors: ["#e6f1d9","#141428","#415783"],
    weights: [300,800],
    borderWidth: 5,
    boxShadowDepth: 8,
    space: [0.8,1.6]
}

export const theme = {
    ...baseTheme,
    colors: {
        background: baseTheme.colors[0],
        text: baseTheme.colors[1],
        button: baseTheme.colors[2],
    },
    fontSizes: {
        text: 1.2,
    },
    light: baseTheme.weights[0],
    bold: baseTheme.weights[1],
    px: baseTheme.space[0],
    py: baseTheme.space[1]
}