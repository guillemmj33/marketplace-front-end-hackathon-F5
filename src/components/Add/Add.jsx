import React from 'react';
class Add extends React.Component {
    state = {  }
    render() { 
        return (
            <section className="mx-auto" >
            <h4 className="text-center">Añadir Producto</h4>
            <div className="p-3 mb-2 bg-light text-dark mx-auto" >
                <form className="d-flex flex-column mx-auto" >
                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">UserName</label>
                        <input type="Username" className="form-control" id="username"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputDescription" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPrice" className="form-label">Price</label>
                        <input type="text" className="form-control" id="price"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPicture" className="form-label">Picture</label>
                        <input type="picture" className="form-control" id="picture"></input>
                        <small id="hepId" class=""></small>
                    </div>
                    <button type="submit" className="btn btn-cancel mx-auto">Send</button>
                </form>
            </div>
        </section> 
        )
    }
}
 
export default Add;