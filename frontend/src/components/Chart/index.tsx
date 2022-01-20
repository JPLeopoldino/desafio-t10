import React from 'react';
import { Pie } from '@ant-design/plots';
import * as SC from './styles';

import { IUserProps } from '../../hooks/user';

interface ChartProps {
  data?: IUserProps[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
    return (
        <SC.Container>
            {
              data ? (
              <Pie
                data={
                  data.map(i => {
                    return({
                      value: i.participation,
                      type: `${i.firstName} ${i.lastName}`
                    })
                  })
                }
                appendPadding={10}
                autoFit={false}
                angleField='value'
                colorField='type'
                radius={1}
                innerRadius={0.5}
                legend={{
                  position: 'right',
                  marker: {
                    symbol: "square",
                  },
                }}
                label={false}
                interactions={[
                  {
                    type: 'legend-active',
                  },
                  {
                    type: 'element-active',
                  },
                  {
                    type: 'legend-highlight',
                  }
                ]}
                statistic={{
                  title: false,
                  content: false
                }}
              />
              ) : null
            }
        </SC.Container>
    );
}

export default Chart;
