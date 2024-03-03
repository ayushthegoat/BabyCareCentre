import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const MedicineList = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
       
        fetch('http://localhost:8080/api/medicine/getAllMedicines')
            .then(response => response.json())
            .then(data => setMedicines(data.data))
            .catch(error => console.error('Error fetching medicines:', error));
    }, []);

    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
            <h2 style={{ marginBottom: '20px' }}>Medicine List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Medicine ID</th>
                        <th>Medicine Name</th>
                        <th>Medicine Price</th>
                    </tr>
                </thead>
                <tbody>
                    {medicines.map(medicine => (
                        <tr key={medicine.medicineId}>
                            <td>{medicine.medicineId}</td>
                            <td>{medicine.medicineName}</td>
                            <td>{medicine.medicinePrice}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default MedicineList;
