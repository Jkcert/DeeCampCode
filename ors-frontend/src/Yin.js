import Jia from './Jia';
import React from 'react';
import EditableTable from './Csv2Table';
import logo from './logo.svg';
import './Yin.css';
import { Tabs, notification, Button } from 'antd';
import API from './utils/api.js';
import Headers from './utils/headers.js';


const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

class Yin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeKey: '1',
        };
    };

    handleClick = () => {
        // localStorage.setItem("predict", EditableTable.dataSource);
        // console.log(EditableTable.dataSource);
        this.setState({ activeKey: '2' });
        notification.open({
            message: '提交成功！',
            description:
                '患者信息已经成功上传，正在生成调度表。',
        });

        let setting_json = JSON.parse(localStorage.getItem("setting"));
        let predict_array = JSON.parse(localStorage.getItem("predict"));
        // let arr1 = localStorage.getItem("setting");
        // let arr2 = localStorage.getItem("predict");
        delete setting_json.file;//删除json中的key:value

        console.log(setting_json);
        console.log(predict_array);
        console.log(Array.isArray(setting_json));
        console.log(Array.isArray(predict_array));

        predict_array.push(setting_json);//给predict_array后添加setting_json,返回的是数组的长度
        console.log(predict_array);

        fetch(API + '/schedule', Headers(predict_array)).then(res => {
            if (res.status === 200) {
                return res.json();
            }
        }).then(function (json) {

            console.log(json);
            localStorage.setItem("output", JSON.stringify(json
            ));
        });
    };

    change = (key) => {
        this.setState({ activeKey: key });
    }

    render() {
        return (
            <div style={{ "background-color": '#202743'}}>
                <div className='frontDIV'>
                    <img src={logo} className='Yinlogo' />
                </div>
                <Tabs activeKey={this.state.activeKey} onChange={this.change} tabBarStyle={{color:'white'}}>
                    <TabPane tab="患者总览" key="1">
                        <div id={"editableTable"} className='predictOutput'>
                            <EditableTable pagination={{ pageSize: 10 }} scroll={{ y: 240 }} />
                        </div>
                        <div>
                            <Button onClick={this.handleClick} type="primary" style={{ marginBottom: 16 }} className="submit"> 提交 </Button>
                        </div>
                    </TabPane>
                    <TabPane tab="手术室调度排班表" key="2">
                        <Jia />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Yin;
