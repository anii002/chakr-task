/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function Graph() {
    const chartRef = useRef(null);
    let myChart = null;

    useEffect(() => {
        const myChartRef = chartRef.current.getContext('2d');
        const gradient = myChartRef.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(37, 205, 37, 0.40)');
        gradient.addColorStop(0.9959, 'rgba(37, 205, 37, 0.00)');
        myChart = new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [
                    {
                        data: [0, 25000, 50000, 45000, 75000, 90000, 100000, 95000],
                        fill: true,
                        backgroundColor: gradient,
                        borderColor: 'rgba(0, 191, 255, 1)',
                        borderWidth: 0.5,
                        borderDash: [5, 3],
                        pointRadius: 0
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            callback: function (value, index, values) {
                                return value >= 1000 ? (value / 1000) + 'k' : value;
                            }
                        }
                    }
                }
            }
        });

        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
}

export default Graph;
