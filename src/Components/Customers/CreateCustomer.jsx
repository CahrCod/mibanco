import { useState } from "react"

const initialCustomerDataForm =
{
    accountNumber: "",
    firstName : "",
    lastName : "",
    balance: ""
}

export const CreateCustomer = ({handlerAdd}) =>
{

    const [form, setForm] = useState(initialCustomerDataForm)

    const {accountNumber, firstName, lastName, balance} = form;

    return <form onSubmit={ event =>
        {
            event.preventDefault();
            if(!accountNumber || !firstName || !lastName || !balance )
            {
                alert("Complete los datos del formulario");
                return                
            }
            handlerAdd(form);
            console.log(form);
            setForm(initialCustomerDataForm);
        }}>
        <div>
            <h3 className="mb-4">Agregar cliente</h3>
            <div>
                <input placeholder="Cuenta" 
                    className="form-control my-3 w-75"
                    name="accountNumber"
                    value={accountNumber}
                    onChange={ (event) => 
                        setForm({...form, accountNumber: event.target.value})}/>
            </div>
            <div>
                <input placeholder="Nombre" 
                className="form-control my-3 w-75"
                name="firstName"
                value={firstName}
                onChange={ (event) => 
                    setForm({...form, firstName: event.target.value})}/>
            </div>
            <div>
                <input placeholder="Apellido" 
                className="form-control my-3 w-75"
                name="lastName"
                value={lastName}
                onChange={ (event) => 
                    setForm({...form, lastName: event.target.value})}/>
            </div>
            <div>
                <input placeholder="Saldo" 
                className="form-control my-3 w-75"
                name="balance"
                value={balance}
                onChange={ (event) => 
                    setForm({...form, balance: event.target.value})}/>
            </div>
            <div>
                <button className="btn btn-primary" type="submit">
                    Agregar Cliente
                </button>
            </div>
        </div>
    </form>
}