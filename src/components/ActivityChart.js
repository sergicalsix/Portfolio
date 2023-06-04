import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ActivityChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const labels = ['3月', '4月', '5月']; // x軸のラベル
    const data = {
      labels: labels,
      datasets: [
        {
            label: 'Qiita投稿数',
            data: [10, 20, 30], // データ配列1
            backgroundColor: 'rgba(85,197,0,0.5)', // データ配列1の棒の背景色
        },
        {
            label: 'Zenn投稿数',
            data: [15, 25, 35], // データ配列2
            backgroundColor: 'rgba(62,168,255,0.5)', // データ配列2の棒の背景色
        },
        // {
        //     label: '読書',
        //     data: [15, 25, 35], // データ配列2
        //     backgroundColor: 'rgba(33,33,33,0.5)', // データ配列2の棒の背景色
        //   },
      ],
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          x: { stacked: true }, // x軸の値を積み上げる
          y: { stacked: true }, // y軸の値を積み上げる
        },
      },
    });
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default ActivityChart;
