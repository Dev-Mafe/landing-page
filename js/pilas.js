const valor = document.getElementById("valor");
const entrada = document.getElementById("m_entrada");
const saida = document.getElementById("m_saida");
const btn = document.getElementById("btn");

const taxas = {
      "BRL": {
        "USD": 0.18, "EUR": 0.16, "AOA": 150.00, "JPY": 28.00,"CNY": 0.95, "RUB": 17.00, "WON": 240.00, "BRL": 1
    },
    "USD": {
        "BRL": 5.50, "EUR": 0.90, "AOA": 825.00, "JPY": 155.00, "CNY": 7.20, "RUB": 93.00, "WON": 1320.00, "USD": 1
    },
    "EUR": {
        "BRL": 6.20, "USD": 1.10, "AOA": 920.00, "JPY": 170.00, "CNY": 7.80, "RUB": 103.00, "WON": 1440.00, "EUR": 1
    },
    "AOA": {
        "BRL": 0.0067, "USD": 0.0012, "EUR": 0.00108, "JPY": 0.18, "CNY": 0.009, "RUB": 0.11, "WON": 1.45, "AOA": 1
    },

    "JPY": {
        "BRL": 0.036, "USD": 0.0064, "EUR": 0.0059, "AOA": 5.5, "CNY": 0.046, "RUB": 0.60, "WON": 8.50, "JPY": 1
    },
    "CNY": {
        "BRL": 1.05, "USD": 0.14, "EUR": 0.13, "AOA": 115.00, "JPY": 21.50, "RUB": 13.00, "WON": 185.00, "CNY": 1
    },
    "RUB": {
        "BRL": 0.059,
        "USD": 0.011,
        "EUR": 0.0097,
        "AOA": 9.4,
        "JPY": 1.65,
        "CNY": 0.076,
        "WON": 14.1,
        "RUB": 1
    },
    "WON": {
        "BRL": 0.0042, "USD": 0.00076, "EUR": 0.00069, "AOA": 0.69, "JPY": 0.12, "CNY": 0.0054, "RUB": 0.071, "WON": 1
    }
}

function converter(de, para, valor){
    return valor * taxas[de][para];
}

btn.addEventListener("click", function(converter))