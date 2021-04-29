import Title from '../../components/Title/Title'
import Colorbox from '../../components/Colorbox/Colorbox'
import Emobox from '../../components/Emobox/Emobox'
import './Result.css'
import { Bar } from 'react-chartjs-2'
import { Link } from 'react-router-dom'
import firebase from '../../firebase'

const Result = ({ gridData, Data, resetData,resetgridData}) => {

    const labels = [
        Data.stimulusCount['Sadness'],
        Data.stimulusCount['Neutral'],
        Data.stimulusCount['Happiness'],
        Data.stimulusCount['Disgust'],
        Data.stimulusCount['Anger_Annoyance'],
        Data.stimulusCount['Fear']
    ]
    const chartData = {
        labels: labels.map((item) => (item * 100 / labels.reduce((a, b) => a + b)).toFixed(2) + ' %'),
        datasets: [
            {
                label: '# of Values',
                data: labels,
                backgroundColor: [
                    'rgba(95, 95, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(253, 138, 1, 1)',
                    'rgba(8, 178, 130, 1)',
                    'rgba(247, 87, 43, 1)',
                    'rgba(254, 200, 3, 1)'

                ],
                borderColor: [
                    'rgba(95, 95, 255, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(253, 138, 1, 1)',
                    'rgba(8, 178, 130, 1)',
                    'rgba(247, 87, 43, 1)',
                    'rgba(254, 200, 3, 1)'
                ],
                borderWidth: 1,
                barPercentage: 1,
                categoryPercentage: 0.5,

            },
        ],

    }

    const options = {
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 20
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 20
                    }
                }
            },

        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20
                    }
                }
            }
        }
    }
    const resetedData = {
        user_info:{
          firstname:'',
          lastname:'',
          age:0,
          email:''
        },
        raw_data: [],
        stimulusCount: {
          'Disgust': 0,
          'Anger_Annoyance': 0,
          'Fear': 0,
          'Sadness': 0,
          'Neutral': 0,
          'Happiness': 0
        }
      };

    const resetedgridData = [
        { id: 1, color: '#FFFFFF' },
        { id: 2, color: '#FFFFFF' },
        { id: 3, color: '#FFFFFF' },
        { id: 4, color: '#FFFFFF' },
        { id: 5, color: '#FFFFFF' },
        { id: 6, color: '#FFFFFF' },
        { id: 7, color: '#FFFFFF' },
        { id: 8, color: '#FFFFFF' },
        { id: 9, color: '#FFFFFF' }
      ];  
    const pushData = () => {
        const dataRef = firebase.database().ref('Participant-info');
        dataRef.push(Data);
    }
    return (
        <div className="screen-result">

            <Title name={Data.user_info.firstname} />
            <div className="card-result">
                <div className="left-block">
                    <div className="chart">
                        <Bar data={chartData} options={options} />
                    </div>
                    <div className="emo-grid-result">
                        <div className="row-result">
                            <Emobox emotion='Disgust' color='#08B282' direction={'row'} onPress={() => null} />
                            <Emobox emotion='Anger/Annoyance' color='#F7572B' direction={'row'} onPress={() => null} />
                            <Emobox emotion='Fear' color='#FEC803' direction={'row'} onPress={() => null} />
                        </div>
                        <div className="row-result">
                            <Emobox emotion='Sadness' color='#5F5FFF' direction={'row'} onPress={() => null} />
                            <Emobox emotion='Neutral' color='#FFFFFF' direction={'row'} onPress={() => null} />
                            <Emobox emotion='Happiness' color='#FD8A01' direction={'row'} onPress={() => null} />
                        </div>
                    </div>
                </div>
                <div className="right-block">
                    <div className="color-grid">
                        {
                            gridData.map(element => {
                                return (<Colorbox color={element.color} id={element.id} key={element.id} />)
                            })
                        }
                    </div>
                    <Link to='/' onClick={() => {
                        pushData();
                        resetData(resetedData);
                        resetgridData(resetedgridData);
                    }}
                    style={{display:'flex', width:'75%', justifyContent:'center'}}>
                        <button className="end-exp">
                            End Experiment {`>`}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Result
