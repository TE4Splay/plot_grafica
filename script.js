// Función para actualizar la gráfica
function updateGraph() {
    let exponent = parseFloat(document.getElementById('exponent').value);
    let xValues = [];
    let yValues = [];

    for (let x = -10; x <= 10; x += 1) {
        xValues.push(x);
        yValues.push(Math.pow(x, exponent));
    }

    let trace = {
        x: xValues,
        y: yValues,
        type: 'scatter'
    };

    let layout = {
        xaxis: {
            title: 'X'
        },
        yaxis: {
            title: `Y`
        }
    };

    Plotly.newPlot('graph', [trace], layout);
}

// Inicializar la gráfica cuando lo manda index
updateGraph();
