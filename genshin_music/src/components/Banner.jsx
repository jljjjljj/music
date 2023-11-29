import React from 'react';
import { Carousel, Typography, Space } from '@douyinfe/semi-ui';

const Carousel1=() => {
    const { Title, Paragraph } = Typography;

    const style = {
        width: '100%',
        height: '300px',
    };

    const titleStyle = { 
        position: 'absolute', 
        top: '100px', 
        left: '100px',
        color: '#1C1F23'
    };

    const colorStyle = {
        color: '#d9e3f0'
    };

    const renderLogo = () => {
        return (
            <img src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/semi_logo.svg' alt='semi_logo' style={{ width: 87, height: 31 }} />   
        );
    };

    const imgList = [
        'https://img.zcool.cn/community/015c4062457ac80002c4212c17a2c1.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100',
        'https://img0.baidu.com/it/u=3661980334,4153538222&fm=253&fmt=auto&app=120&f=JPEG?w=1428&h=800',
        'https://p8.itc.cn/images01/20210416/9879348ce83c4aedb5c200123cea4465.jpeg',
    
    ];

    const textList = [
        ['Semi 设计管理系统', '从 Semi Design，到 Any Design', '快速定制你的设计系统，并应用在设计稿和代码中'],
        ['Semi 物料市场', '面向业务场景的定制化组件，支持线上预览和调试', '内容由 Semi Design 用户共建'],
        ['Semi Template', '高效的 Design2Code 设计稿转代码', '海量 Figma 设计模板一键转为真实前端代码'],
    ];

    return (
        <Carousel style={style} theme='light' indicatorType='columnar' indicatorPosition='left' showArrow={true} arrowType='hover'
        animation='fade'speed={1000}
        >
            {
                imgList.map((src, index) => {
                    return (
                        <div key={index} style={{ backgroundSize: 'cover', backgroundImage: `url(${src})` }}>
                            <Space vertical align='start' spacing='medium' style={titleStyle}>
                                {renderLogo()}
                                {/* <Title heading={2} style={colorStyle}>{textList[index][0]}</Title> */}
                                <Space vertical align='start'>
                                    {/* <Paragraph style={colorStyle}>{textList[index][1]}</Paragraph>
                                    <Paragraph style={colorStyle}>{textList[index][2]}</Paragraph> */}
                                </Space>
                            </Space>
                        </div>
                    );
                })
            }
        </Carousel>
    );
};
export default Carousel1;
