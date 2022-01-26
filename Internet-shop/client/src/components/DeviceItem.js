import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import star from "../assets/star.svg"
import { DEVICE_ROUTE } from '../utilc/consts'

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/'+device.id)}>
            <Card style={{width:"150px", cursor:"pointer",}} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 d-flex justify-content-between align-items-center mt-1">
                    <div>Samsung</div>
                    <div className="d-flex align-items-center">
                        <dev>{device.rating}</dev>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem
