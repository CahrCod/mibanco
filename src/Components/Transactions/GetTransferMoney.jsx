import { useState } from "react"

const initialAccountNumber = { accountNumber: "" };

export const GetTransferMoney = ({handlerAdd}) =>
{
        const [form, setForm] = useState(initialAccountNumber) 

        return <form onSubmit={ event =>
            {
                event.preventDefault();
                if(!form.accountNumber)
                {
                    alert("Ingrese el número de cuenta");
                    return                
                }
                handlerAdd(form.accountNumber);
                console.log(form);
                setForm(initialAccountNumber);
            }}>
            <div className="row">
                <h3 className="mb-4">Consulta de transferencias</h3>                
                <div className="col">                    
                    <input placeholder="Número de cuenta" 
                        className="form-control my-3"
                        name="accountNumber"
                        value={form.accountNumber}
                        onChange={ (event) => 
                            setForm({...form, accountNumber: event.target.value})}/>
                </div>
                <div className="col">
                    <button className="btn btn-primary my-3" type="submit">
                        Consultar
                    </button>
                </div>
            </div>
        </form>
} 