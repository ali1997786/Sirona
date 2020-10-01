import React, { useState } from 'react';
import Course from "./Orders";
import { Table } from 'reactstrap';


const Delivery=()=>{
    

    return (
              <Table className="text-center bg- primary">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Phone No</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
               
              </Table>
           
          
         
    )
        };

    
   

export default Delivery;