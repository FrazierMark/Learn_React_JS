import React, { useEffect } from 'react'
import "./Orders.css"
import { db } from './firebase';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();

    useEffect(() => {
        db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
            })))
        ))

    }, []);

    return (
        <div className="orders">
            <h1>Your Orders</h1>
        </div>
    )
}

export default Orders
