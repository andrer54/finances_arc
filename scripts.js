const Modal = {
    open(){
        //abrir modal
        //adicionar a class active ao modal
        document.querySelector('.modal-overlay')
        .classList
        .add('active')

    },
    close(){
        //fechar modal
        //retirar a class active do modal
        document.querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
}


const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2022',
    },
    {
        id: 2,
        description: 'Salário',
        amount: 500000,
        date: '22/01/2022',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -50000,
        date: '23/01/2022',
    },
    
]

const Transaction = {
    incomes(){
        //somar as entradas
    },
    expenses (){
        //somar as saidas
    },
    total(){
        //entradas - saidas
    }
}

// Agora preciso substituir os dados do html pelos dados do js
const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransaction(transaction, index){
        
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        
        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction){



        const html = `
            <td class="description">${transaction.description}</td>
            <td class="income">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
       
        return html
    }
}

DOM.addTransaction(transactions[0])
DOM.addTransaction(transactions[1])
DOM.addTransaction(transactions[2])