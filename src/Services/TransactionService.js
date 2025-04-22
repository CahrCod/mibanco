import axios from "axios";

const baseUrl = 'http://localhost:8080/api/transaction';

export const createTransferMoney = async ({
    senderAccountNumber, receiverAccountNumber, amount, timestamp }) =>
{
    try
    {
        return await axios.post(baseUrl, {
            senderAccountNumber,
            receiverAccountNumber, 
            amount, 
            timestamp            
        });
    }
    catch (error)
    {
        console.log(error);
    }

    return undefined;

}

export const getTransactionsForAccount = async (accountNumber) => 
{
    try
    {
        const response = await axios.get(`${baseUrl}/${accountNumber}`);
        console.log(response.data);
        return response
    }
    catch (error)
    {
        console.log(error);
    }

    return null;
}


