import React from 'react';
import  '../Cart/ProductItem.scss'
import {Link} from 'react-router-dom'
class Listado extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      componentDidMount() {
        fetch("http://localhost/happydeco/")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },

            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render() {
        const { error, isLoaded, items } = this.state;
            if (error) {
            return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
            return <div>Loading...</div>;
            } else {
                return (
                  <div className="card">
                    <div className="card-header">
                      <Link className="btn btn-success" to={'/crear'}>Subir producto</Link>
                    </div>
                    <div className="card-body">
                    <article className="box grid-responsive">
                      {items.map((item=>
                      <div class="card-products" key={item.id}>
                        <img class="img-top" src={item.picture} alt=""/>
                        <div class="card-body">
                          <h5>{item.user}</h5>
                          <h5>{item.name}</h5>
                          <p class="card-text">{item.description}</p>
                          <h5>{item.price}</h5>
                          <Link className="btn btn-warning" to={'/editar'}>Editar</Link>
                          <button  class="btn btn-secondary">Añadir al Carrito</button>
                          <button class="btn btn-primary">Detalle</button>
                        </div>
                      </div>
                      ))}
                    </article>
                    </div>
                    {/* 
                  
                    
                    
                       <table className="table" >
                        <thead >
                            <tr>
                                <th>UserName</th>
                                <th>Name Product</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={item.id}>
                                <td>{item.user}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="">
                                        
                                        <button type="button" className="btn btn-danger">Dettales</button>
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                     */}
                    <div class="card-footer text-muted">
                      Footer
                    </div>
                  </div>
                  
                 )
            }
        }
     
    }
 
export default Listado;