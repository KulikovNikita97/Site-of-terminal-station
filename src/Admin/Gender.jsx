import React from "react";
import Chart from 'react-apexcharts';
import { Card } from "antd";

const Gender = () => {
    const gender = {

        series: [67, 33],
        options: {
            chart: {
                width: 500,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 500
                    },
                    legend: {
                        show: true
                    }
                }
            }],
            legend: {
                position: 'right',
                offsetY: 50,
                height: 230,
                customLegendItems: ['mares', 'stallions']
            },
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
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '64vh', paddingTop: '50px' }}>
            <div class="chart-wrap">
                <div id="chart">
                    <Card
                        title="Buying users gender ratio (average data of year 1097)"
                        bordered={true}
                        style={{
                            width: 550,
                            textAlign: 'center'
                        }}
                    >
                        <Chart options={gender.options} series={gender.series} type="donut" width={500} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Gender;