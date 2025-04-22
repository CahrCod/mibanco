import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { CustomersTable } from './Components/Customers/CustomersTable'
import { CreateCustomer } from './Components/Customers/CreateCustomer'
import { CreateTransferMoney } from './Components/Transactions/CreateTransferMoney'
import { GetTransferMoney } from './Components/Transactions/GetTransferMoney'
import { TransfersTable } from './Components/Transactions/TransfersTable'

import { getAllCustomers, createCustomer , getCustomerById } from './Services/CustomerService'
import { createTransferMoney, getTransactionsForAccount } from './Services/TransactionService'


export const Mibanco = () => 
{

    const [customers, setCustomers] = useState([]);
    const [transfers, setTransfers] = useState([]);

    const getCustomers = async () =>
    {
        const result = await getAllCustomers();
        setCustomers(result.data);
    }
    
    useEffect(() => { getCustomers();},[]);

/*     const CustomerById = async () =>
    {
        const result = await getCustomerById();
        setCustomers(result.data);
    } */


    const handlerAddCustomer = async (customer) => 
    {
        const response = await createCustomer(customer);
        setCustomers([...customers,{...response.data}]);
    }

    const handlerAddTransferMoney = async (transferMoney) => 
    {
        const response = await createTransferMoney(transferMoney);
        //setTransfers([...transfers,{...response.data}]);
    }

    const handlerGetTransferMoney = async (accountNumber) =>
    {
        const response = await getTransactionsForAccount(accountNumber)
        setTransfers(response.data);
    }

    return <div className='container my-4'>
        <div className="row p-4 border rounded shadow-sm">
            <div className="col">                
                <CreateCustomer handlerAdd={handlerAddCustomer} />
            </div>
            <div className="col">
                <CustomersTable customers = {customers}/>
            </div>
        </div>
        <div className="row p-4 my-4 border rounded shadow-sm">
            <div className="col"> 
                <CreateTransferMoney handlerAdd={handlerAddTransferMoney} />
            </div>
            <div className="col">  
                <GetTransferMoney handlerAdd={handlerGetTransferMoney}/>
                <TransfersTable transfers = {transfers}/>
            </div>  
        </div>
    </div>
}

// Crregir fecha transferencia porque esa va automatica