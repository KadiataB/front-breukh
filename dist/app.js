"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const fournisseur = document.getElementById("fournisseur");
    const transaction = document.getElementById("transaction1");
    fournisseur.addEventListener("change", () => {
        const selectedValue = fournisseur.value;
        switch (selectedValue) {
            case "OM":
                transaction.style.backgroundColor = "orange";
                break;
            case "WV":
                transaction.style.backgroundColor = "#007fff";
                break;
            case "WR":
                transaction.style.backgroundColor = "green";
                break;
            case "CB":
                transaction.style.backgroundColor = "red";
                break;
            default:
                transaction.style.backgroundColor = "transparent";
                break;
        }
    });
});
let input1 = document.getElementById("input1");
let input2 = document.getElementById("nom");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let btn = document.getElementById("btn");
input1.addEventListener("input", () => {
    fetch('http://127.0.0.1:8000/breukh-coding/clients')
        .then(response => response.json())
        .then(clients => {
        for (const client of clients) {
            if (input1.value === client.numero) {
                input2.value = `${client.prenom} ${client.nom}`;
            }
        }
        fetch('http://127.0.0.1:8000/breukh-coding/comptes')
            .then(response => response.json())
            .then(comptes => {
            for (const compte of comptes) {
                if (input1.value === compte.numero) {
                    for (const client of clients) {
                        if (client.id === compte.client_id) {
                            input2.value = `${client.prenom} ${client.nom}`;
                        }
                    }
                }
            }
        });
    });
});
input4.addEventListener("input", () => {
    fetch('http://127.0.0.1:8000/breukh-coding/clients')
        .then(response => response.json())
        .then(clients => {
        for (const client of clients) {
            if (input4.value === client.numero) {
                input5.value = `${client.prenom} ${client.nom}`;
            }
        }
        fetch('http://127.0.0.1:8000/breukh-coding/comptes')
            .then(response => response.json())
            .then(comptes => {
            for (const compte of comptes) {
                if (input4.value === compte.numero) {
                    for (const client of clients) {
                        if (client.id === compte.client_id) {
                            input5.value = `${client.prenom} ${client.nom}`;
                        }
                    }
                }
            }
        });
    });
});
const selectTransaction = document.getElementById("transaction");
const info = document.querySelector(".fas");
info.addEventListener('click', () => {
});
document.addEventListener("DOMContentLoaded", () => {
    const destinataireSection = document.getElementById("destinataire");
    const input4 = document.getElementById("input4");
    const input5 = document.getElementById("input5");
    const label1 = document.getElementById("label1");
    const label2 = document.getElementById("label2");
    const lineSeparator = document.querySelector(".line-separator1");
    const selectTransaction = document.getElementById("transaction");
    destinataireSection.style.display = "none";
    input4.style.display = "none";
    input5.style.display = "none";
    label1.style.display = "none";
    label2.style.display = "none";
    lineSeparator.style.display = "none";
    selectTransaction.addEventListener("change", () => {
        if (selectTransaction.value === "transfert") {
            destinataireSection.style.display = "block";
            input4.style.display = "block";
            input5.style.display = "block";
            label1.style.display = "block";
            label2.style.display = "block";
            lineSeparator.style.display = "block";
        }
        else {
            destinataireSection.style.display = "none";
            input4.style.display = "none";
            input5.style.display = "none";
            label1.style.display = "none";
            label2.style.display = "none";
            lineSeparator.style.display = "none";
        }
    });
    selectTransaction.addEventListener("change", () => {
        if (selectTransaction.value !== "transfert") {
            input4.value = "";
            input5.value = "";
        }
    });
});
const circle1 = document.querySelector(".info-icon");
circle1.style.display = "none";
document.addEventListener("DOMContentLoaded", () => {
    const transactionModal = new bootstrap.Modal(document.getElementById("transactionModal"));
    const modalType = document.getElementById("modalType");
    const modalMontant = document.getElementById("modalMontant");
    const modalDate = document.getElementById("modalDate");
    const transactionsData = [
        {
            type: "Depot",
            montant: 500,
            date: "2023-07-30",
        },
        {
            type: "depot",
            montant: 300,
            date: "2023-07-29",
        },
    ];
    function transactionDetails(type, montant, date) {
        modalType.textContent = type;
        modalMontant.textContent = montant.toString();
        modalDate.textContent = date;
        transactionModal.show();
    }
    info.addEventListener("click", () => {
        const index = 0;
        transactionDetails(transactionsData[index].type, transactionsData[index].montant, transactionsData[index].date);
    });
    input1.addEventListener("input", () => {
        circle1.style.display = "block";
    });
});
