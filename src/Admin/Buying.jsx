import React from "react";
import Chart from 'react-apexcharts';
import { Card } from "antd";

const Buying = () => {

    const buying = {

        series: [{
            name: 'Adults (16+)',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 120, 97]
        }, {
            name: 'Yearlings (6-16)',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 46, 78, 67]
        }, {
            name: 'Colts (6-)',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 32, 34, 45]
        }],
        options: {
            chart: {
                type: 'bar',
                width: 500,
                height: 500
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
                title: {
                    text: 'bits'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + " 000"
                    }
                }
            },
            chart: {
                background: '#fff'
            }
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '80vh', paddingTop: '50px' }}>
            <Card
                title="Ratio of passagers' ages (data of year 1097)"
                bordered={true}
                style={{
                    width: 1050,
                    textAlign: 'center'
                }}
            >
                <Chart options={buying.options} series={buying.series} type="bar" height={500} width={1000} />
            </Card>

        </div>

    )
}

export default Buying;