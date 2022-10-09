import React from "react";
import Chart from 'react-apexcharts';
import { Card } from "antd";

const Entering = () => {
    const entering = {

        series: [{
            name: 'Just entering',
            data: [76895, 85101, 101354, 112654, 119365, 130798, 140002, 149624, 156900, 162137, 169025, 173643]
        }, {
            name: 'Entering & buying',
            data: [4245, 5456, 7111, 8456, 9423, 10009, 11457, 12475, 13153, 14736, 15059, 16286]
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
                    text: 'visits (or + orders) count'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val
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
                title="Ratio of entering to buying users (data of year 1097)"
                bordered={true}
                style={{
                    width: 1050,
                    textAlign: 'center'
                }}
            >
                <Chart options={entering.options} series={entering.series} type="bar" height={500} width={1000} />
            </Card>
        </div>

    )
}

export default Entering;