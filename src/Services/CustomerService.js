import axios from "axios";

const baseUrl = 'http://localhost:8080/api/customers';

export const getAllCustomers = async () => 
{
    try
    {
        const result = await axios.get(baseUrl);
        console.log(result);
        return  result;
    }
    catch (error)
    {
        console.log(error);
    }

    return null;
}


export const getCustomerById = async (id) => 
{
    try
    {
        const result = await axios.get(`${baseUrl}/${id}`);
        console.log(result);
        return  result;
    }
    catch (error)
    {
        console.log(error);
    }

    return null;    
        
}

export const createCustomer = async (
    {accountNumber, firstName, lastName, balance }) => 
{
    try
    {
        return await axios.post(baseUrl, {
            accountNumber,
            firstName, 
            lastName, 
            balance            
        });
    }
    catch (error)
    {
        console.log(error);
    }

    return undefined;            
} 

