import PropTypes from "prop-types"

export const CustomersTable = ({customers}) =>
{
    return <div>
                <h2 className="mb-4">Listado de clientes</h2> 
                <table className="table table-hover table-striped">            
                    <thead>
                        <tr>
                            <th>No</th>               
                            <th>Cuenta</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customer => 
                            {
                                return (                            
                                    <tr key={customer.id}>
                                    <td>{customer.id}</td>              
                                    <td>{customer.accountNumber}</td>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td>{customer.balance}</td>                   
                                </tr>
                                )
                            })
                        }
        
                    </tbody>
                </table>
            </div>
 
}

CustomersTable.propTypes = 
{
    customers: PropTypes.array.isRequired
}

