# 🏆 Projeto Atleta - JavaScript Orientado a Objetos

## 📌 Descrição

Este projeto consiste na criação de uma aplicação em **JavaScript** utilizando **Programação Orientada a Objetos (POO)** para gerenciar informações de atletas.

A aplicação recebe dados do atleta e calcula automaticamente:

- ✅ Categoria
- ✅ IMC
- ✅ Média válida das notas
- ✅ Exibição completa dos dados

---

## 🚀 Funcionalidades

A classe `Atleta` possui os seguintes atributos:

- `nome`
- `idade`
- `peso`
- `altura`
- `notas`

E os seguintes métodos:

### 🔹 Métodos de Cálculo

- `calculaCategoria()`
- `calculaIMC()`
- `calculaMediaValida()`

### 🔹 Métodos de Obtenção

- `obtemNomeAtleta()`
- `obtemIdadeAtleta()`
- `obtemPesoAtleta()`
- `obtemNotasAtleta()`
- `obtemCategoria()`
- `obtemIMC()`
- `obtemMediaValida()`

### 🔹 Método de Exibição

- `exibirDados()`

---

## 🧮 Regras de Negócio

### 📌 1. Categoria por idade

| Idade | Categoria |
|--------|------------|
| 9 a 11 | Infantil |
| 12 a 13 | Juvenil |
| 14 a 15 | Intermediário |
| 16 a 30 | Adulto |
| Outros | Sem categoria |

---

### 📌 2. Cálculo do IMC
