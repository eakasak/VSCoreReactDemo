import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Layout } from 'antd';
import { Row, Col } from 'antd';

const { Content, Sider } = Layout;
const { Header, Footer } = Layout;
export interface LayoutProps {
    children?: React.ReactNode;
}
// <Header className="header">     Header   </Header>
//  <Footer >   Footer     </Footer>
export class Main_Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>

            <Layout className="ant-layout" style={{ background: '#fff' }}>
            
                <Row  style={{ padding: 0, background: '#fff' }}>
                <Col span={24}>
             <Header style={{ padding: 10, background: '#fff' }} className="clearfix"> 
             <Row  style={{ padding: 0, background: '#fff' }}>
                <Col span={5}>
                
                 <a id="logo" href="/"><img alt="logo" src="https://www.scgchemicals.com/assets/2abb51ff/images/main/scg-logo.png"/>
                 <img alt="Ant Design" src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg"/></a>
           
             </Col>
             <Col span={19}> </Col>
            </Row>
              </Header>
            </Col >
                    <Col span={5}> 
                    <Sider  style={{ background: '#fff',width: '100%' }}>   <NavMenu /></Sider>
                    </Col>
                    <Col span={19}>
                  
                    <Content style={{ minWidth:1000}}> 
                       
                            {this.props.children}
                            
                            </Content>
                       
                     </Col>
                     <Col span={24}>
                     <Footer style={{ padding: 10, background: '#eee',textAlign: 'center' }}  >   Copyright ©2018 SCG Chemicals Co., Ltd. All Rights Reserved.     </Footer>
            </Col>
                </Row>
            </Layout>
        </div>;
    }
}
