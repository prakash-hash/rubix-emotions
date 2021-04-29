import {Link} from "react-router-dom";
import gird from '../../img/grid.png'
import './Home.css'

const Home = () => {
    return (
            <div className="screen-home">
                <div className="card-home">

                    <div className="right-left-block">
                        <div className="left-block-home">
                            <div className="heading">
                                <div className="rubix-emotion-text">
                                    <div className="rubix-emotion">
                                        <div className="rubix">RUBIX&nbsp;</div>
                                        <div className="emotions">EMOTIONS</div>
                                    </div>
                                    <div className="text-intro">
                                        A creative amalgamation of UX, Psychology and Neuroscience.
                            </div>
                                </div>

                            </div>
                            <div className="grid-img">
                                <img src={gird} className="img-grid" alt="" />
                            </div>
                        </div>
                        <div className="right-block-home">
                            <div className="rubix-experiment">THE RUBIX EXPERIMENT</div>
                            <p className="phase-2">(PHASE 2)</p>
                            <p className="text-intro">An attempt at complex emotional data collection and visualisation using a Rubik's Cube and it's matrix assembly</p>
                            <p className="text-intro">A self devised experiment aimed towards generating visual interpretation of psychological and emotional data</p>
                            <Link to='/signup'><div className="start-button">
                                <div className="start-block">
                                    <div className="button-img">
                                        <img src="https://cdn.animaapp.com/projects/606461ab10c4a1ed9cbe05dd/releases/606461c2925af94e34d26246/img/path-53@1x.png" className="img-button" alt="" />
                                    </div>
                                </div>
                                <p className="start-text">Press to Start
                                </p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Home
