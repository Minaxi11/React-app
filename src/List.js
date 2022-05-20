import React from 'react'
import { Table } from 'react-bootstrap';

export default class List extends React.Component {


    constructor() {

        super();
        this.state = {

            list: [
                { name: 'abc', email: 'abc@gmail.com', age: 23 },
                { name: 'xyz', email: 'xyz@gmail.com', age: 25 },
                { name: 'pqr', email: 'pqr@gmail.com', age: 45 },
                { name: 'pqr', email: 'pqr@gmail.com', age: 45 }
            ]
        }



    }



    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.list.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            
            // <table border='1'>

            //     {
            //         this.state.list.map((item, index) =>
            //             <tr>
            //                 <td>{index + 1}</td>
            //                 <td>{item.email}</td>
            //                 <td>{item.age}</td>
            //             </tr>
            //         )}
            // </table>
        );
    }
}