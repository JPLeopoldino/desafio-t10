import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import colors from '../../styles/colors';

interface LoadingIndicatorProps {
    size?: number;
    color?: 'blue' | 'white';
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
    size = 64,
    color = 'white'
}) => {

    const antIcon = <LoadingOutlined style={{ fontSize: size, color: color === 'blue' ? colors.blue : colors.white }} spin />;

    return (
        <Spin indicator={antIcon} />
    );
};

export default LoadingIndicator;
