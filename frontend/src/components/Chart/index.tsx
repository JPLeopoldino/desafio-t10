import React from 'react';
// import { RadialChart } from 'react-vis';
import { PieSeries, Legend, Chart as CustomChart } from '@devexpress/dx-react-chart-bootstrap4';
import { Animation } from "@devexpress/dx-react-chart";
import { IUserProps } from '../../hooks/user';
import * as SC from './styles';

interface ChartProps {
    data: IUserProps[];
}

export default function Chart ({
    data
}: ChartProps) {

    const labelComponent = (props: any) => {
        const item = data.find(item => `${item.firstName} ${item.lastName}` === props.text);
        
        return <Legend.Label {...props} text={`${props.text} ${item?.participation}%`} />;
    };

    return (
        <SC.Container>
            {/* <RadialChart
                data={data.map(i => {return({angle: i.angle, color: i.color})})}
                // data={[
                //     {angle: 486.5, color: randomColor()},
                //     {angle: 501.5, color: randomColor()},
                //     {angle: 139.3, color: randomColor()},
                //     {angle: 162, color: randomColor()},
                //     {angle: 263.7, color: randomColor()},
                //   ]}
                colorType="literal"
                labelsAboveChildren={true}
                // animation={{damping: 20, stiffness: 300}}
                radius={140}
                // innerRadius={100}
                showLabels={true}
                width={300}
                height={300}
            /> */}
            <CustomChart
                data={data.map(i => {return({angle: i.angle, label: `${i.firstName} ${i.lastName}`})})}
            >
                <PieSeries
                    valueField="angle"
                    argumentField="label"
                    innerRadius={0.6}
                />
                <Legend labelComponent={labelComponent}/>
                <Animation/>
            </CustomChart>
        </SC.Container>
    );
}
