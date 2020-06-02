import React from 'react'
import { Drawer, Button, Radio, Space } from 'antd';

class MiniBasket extends React.Component {
    constructor() {
        super();

        this.state = {
            
        }

        this.funcs = this.funcs.bind.this;
    }

    funcs() {
        alert('asdasdasdasdasdasdasdasdas')
    }
    render() {
        return (
            <Drawer
                title="Your Basket"
                placement={'right'}
                closable={true}
                mask={false}
                maskClosable={true}
                visible={this.props.visible}
                onClose={this.funcs}
                key={'rightDrawer'}
            >
                {this.props.visible == true ? 'VIS' : 'NOT'}
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        )
    }
}

export default MiniBasket