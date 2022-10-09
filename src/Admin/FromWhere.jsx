import React from "react";
import Chart from 'react-apexcharts';
import { Card } from "antd";

const FromWhere = () => {
    const toWhere = {

        series: [20, 12, 11, 9, 48],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Phillidelphia', 'Canterlot', 'Las Pegasus', 'Vanhoover', 'all others'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + ' %'
                    }
                }
            },
        },


    };

    return (


        <div id="chart" style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '64vh', paddingTop: '50px' }}>
            <Card
                title="From where passangers arrive (average data of year 1097)"
                bordered={true}
                style={{
                    width: 550,
                    textAlign: 'center'
                }}
            >
                <Chart options={toWhere.options} series={toWhere.series} type="pie" width={500} />
            </Card>

        </div>
    )
}

export default FromWhere;