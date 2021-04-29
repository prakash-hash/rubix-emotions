import React, { useState } from 'react'
import './Experiment.css'
import Emobox from '../../components/Emobox/Emobox'
import Colorbox from '../../components/Colorbox/Colorbox'
import Title from '../../components/Title/Title'
import { Link } from 'react-router-dom'


const Experiment = ({ grid_Data, updateGridData, data, updatedData }) => {
    const [color, setColor] = useState('#FFFFFFF');
    const [stimulusC, setStimulusC] = useState(1);
    const [finish, setFinish] = useState(true);
    const [status, setStatus] = useState(true);
    const [hCounter, setHcounter] = useState(0);
    const [vCounter, setVcounter] = useState(0);
    const [gridData, setGridData] = useState(grid_Data)
    const [emotion, setEmotion] = useState('')
    let researchData = data;
    const onPress = (emotion_, color) => {
        if (status) {
            setColor(color);
            setEmotion(emotion_);
            // console.log(emotion_);
        }
    };
    const updateData = (intensity) => {
        let data = gridData;
        let hcounter = hCounter;
        let vcounter = vCounter;
        if (!['#5F5FFF', '#FD8A01', '#FFFFFF'].includes(color)) {
            for (let i = 0; i < intensity; i++) {
                data = data.map((item) => [hcounter * 3 + 1, hcounter * 3 + 2, hcounter * 3 + 3].includes(item.id) ? { ...item, color: color }
                    : { ...item, color: item.color });
                hcounter = hcounter > 1 ? 0 : hcounter + 1;
            }

        }
        else {
            for (let i = 0; i < intensity; i++) {
                data = data.map((item) => [3 - vcounter, 6 - vcounter, 9 - vcounter].includes(item.id) ? { ...item, color: color }
                    : { ...item, color: item.color });
                vcounter = vcounter > 1 ? 0 : vcounter + 1;

            }
        }
        if (emotion === "Anger/Annoyance") {
            researchData.raw_data.push(["Anger_Annoyance", intensity]);
            researchData.stimulusCount["Anger_Annoyance"] = researchData.stimulusCount["Anger_Annoyance"] + intensity;
        }
        else {
            researchData.raw_data.push([emotion, intensity]);
            researchData.stimulusCount[emotion] = researchData.stimulusCount[emotion] + intensity;
        }
        setGridData(data);
        setHcounter(hcounter);
        setVcounter(vcounter);
    }
    const onPressIntensity = (intensity) => {
        if (status) {
            // console.log(color, intensity);
            updateData(intensity);
            setStatus(false)
        }
    };

    return (
        <div className="screen-experiment">
            <Title name={data.user_info.firstname} />
            <div className="text-1">
                How are you feeling?
            </div>
            <div className="card-experiment">
                <div className="left-block">
                    <div className="text-stimulus">
                        Stimulus {stimulusC} :
                    </div>
                    <div className="text-choose">
                        Choose Emotional State :
                    </div>
                    <div className="emo-grid">
                        <div className="row">
                            <Emobox emotion='Disgust' color='#08B282' onPress={onPress} />
                            <Emobox emotion='Anger/Annoyance' color='#F7572B' onPress={onPress} />
                            <Emobox emotion='Fear' color='#FEC803' onPress={onPress} />
                        </div>
                        <div className="row 2">
                            <Emobox emotion='Sadness' color='#5F5FFF' onPress={onPress} />
                            <Emobox emotion='Neutral' color='#FFFFFF' onPress={onPress} />
                            <Emobox emotion='Happiness' color='#FD8A01' onPress={onPress} />
                        </div>
                    </div>
                    <div className="text-choose">
                        Choose Emotional Intensity :
                    </div>
                    <div className="emo-grid">
                        <div className="row" style={{ marginBottom: '60px' }}>
                            <Emobox emotion='Low' color='#FFFFFF' intensity={1} onPress={onPressIntensity} />
                            <Emobox emotion='Moderate' color='#FFFFFF' intensity={2} onPress={onPressIntensity} />
                            <Emobox emotion='High' color='#FFFFFF' intensity={3} onPress={onPressIntensity} />
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
                    <div className="expButtons">
                        <button className="next-stimulus"
                            onClick={() => {
                                if (finish) {
                                    setStatus(true);
                                    setStimulusC(stimulusC + 1)
                                };
                            }}>Next Stimulus {`>`}</button>
                        <Link to='/result'
                            style={{ display: "flex" }}
                            onClick={() => {
                                updateGridData(gridData);
                                updatedData(researchData);
                                // console.log("finished");
                                // console.log(researchData);
                                setFinish(false);
                            }}>
                            <button className="finish-button">
                                ✅
                    </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiment
