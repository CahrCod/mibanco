import PropTypes from "prop-types"

export const TransfersTable = ({transfers}) =>
{
    return <div>
                <h2 className="mb-4 my-4">Listado de transferencias</h2>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>No</th>               
                            <th>Cuenta origen</th>
                            <th>Cuenta destino</th>
                            <th>Cantidad</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transfers.map((transfer, index) => 
                            {
                                return (                            
                                    <tr key={index}>
                                    <td>{transfer.id}</td>              
                                    <td>{transfer.senderAccountNumber}</td>
                                    <td>{transfer.receiverAccountNumber}</td>
                                    <td>{transfer.amount}</td>
                                    <td>{transfer.timestamp}</td>                   
                                </tr>
                                )
                            })
                        }
        
                    </tbody>
                </table>
            </div>
    
}

TransfersTable.propTypes = 
{
    transfers: PropTypes.array.isRequired
}
