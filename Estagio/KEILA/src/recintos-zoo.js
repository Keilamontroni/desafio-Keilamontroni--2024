class RecintosZoo {
    constructor() {
        this.animaisHabilitados = {
            "LEAO": { tamanho: 3, biomas: ["savana"] },
            "LEOPARDO": { tamanho: 2, biomas: ["savana"] },
            "CROCODILO": { tamanho: 3, biomas: ["rio"] },
            "MACACO": { tamanho: 1, biomas: ["savana", "floresta"] },
            "GAZELA": { tamanho: 2, biomas: ["savana"] },
            "HIPOPOTAMO": { tamanho: 4, biomas: ["savana", "rio"] }
        };

        this.recintos = [
            { numero: 1, bioma: "savana", tamanhoTotal: 10, animais: { "MACACO": 3 } },
            { numero: 2, bioma: "floresta", tamanhoTotal: 5, animais: {} },
            { numero: 3, bioma: "savana e rio", tamanhoTotal: 7, animais: { "GAZELA": 1 } },
            { numero: 4, bioma: "rio", tamanhoTotal: 8, animais: {} },
            { numero: 5, bioma: "savana", tamanhoTotal: 9, animais: { "LEAO": 1 } }
        ];
    }

    analisaRecintos(animal, quantidade) {
        if (!this.animaisHabilitados[animal]) {
            return { erro: "Animal inválido" };
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida" };
        }

        const recintosViaveis = [];

        this.recintos.forEach(recinto => {
            if (this.animaisHabilitados[animal].biomas.includes(recinto.bioma)) {
                const espacoOcupado = Object.entries(recinto.animais).reduce((acc, [esp, qtd]) => {
                    return acc + this.animaisHabilitados[esp].tamanho * qtd;
                }, 0);

                const espacoNecessario = this.animaisHabilitados[animal].tamanho * quantidade;
                const espacoExtra = Object.keys(recinto.animais).length > 0 && !recinto.animais[animal] ? 1 : 0;

                if (espacoOcupado + espacoNecessario + espacoExtra <= recinto.tamanhoTotal) {
                    if (["LEAO", "LEOPARDO", "CROCODILO"].includes(animal) && Object.keys(recinto.animais).some(esp => esp !== animal)) {
                        return;
                    }
                    if (animal === "HIPOPOTAMO" && (!recinto.bioma.includes("savana") || !recinto.bioma.includes("rio"))) {
                        return;
                    }
                    if (animal === "MACACO" && Object.keys(recinto.animais).length === 0 && quantidade === 1) {
                        return;
                    }

                    const espacoLivre = recinto.tamanhoTotal - (espacoOcupado + espacoNecessario + espacoExtra);
                    recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanhoTotal})`);
                }
            }
        });

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável" };
        }

        return { recintosViaveis: recintosViaveis.sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0])) };
    }
}

module.exports = { RecintosZoo };
