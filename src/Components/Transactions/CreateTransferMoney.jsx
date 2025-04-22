import { useState } from "react"

const initialTransferMoney =
{
    senderAccountNumber : "",
    receiverAccountNumber : "",
    amount : ""
}

export const CreateTransferMoney = ({handlerAdd}) =>
{
    const [form, setForm] = useState(initialTransferMoney);
    const {senderAccountNumber, receiverAccountNumber,amount} = form;

    return <form onSubmit={ event =>
        {
            event.preventDefault();
            if(!senderAccountNumber || !receiverAccountNumber || !amount)
            {
                alert("Complete los datos del formulario");
                return                
            }

            const formWithTimestamp = {
                ...form,
                timestamp: new Date().toISOString() // Fecha actual en UTC
            };

            handlerAdd(formWithTimestamp);
            console.log(form);
            setForm(initialTransferMoney);
        }}>
        <div>
            <h3 className="mb-4">Transferir dinero</h3>
            <div>
                <input placeholder="Cuenta de origen" 
                    className="form-control my-3 w-75"
                    name="senderAccountNumber"
                    value={senderAccountNumber}
                    onChange={ (event) => 
                        setForm({...form, senderAccountNumber: event.target.value})}/>
            </div>
            <div>
                <input placeholder="Cuenta de destino" 
                className="form-control my-3 w-75"
                name="receiverAccountNumber"
                value={receiverAccountNumber}
                onChange={ (event) => 
                    setForm({...form, receiverAccountNumber: event.target.value})}/>
            </div>
            <div>
                <input placeholder="Cantidad" 
                className="form-control my-3 w-75"
                name="amount"
                value={amount}
                onChange={ (event) => 
                    setForm({...form, amount: event.target.value})}/>
            </div>     
            <div>
                <button className="btn btn-primary" type="submit">
                    Transferir dinero
                </button>
            </div>
        </div>
    </form>
}