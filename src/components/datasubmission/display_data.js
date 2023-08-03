import React, { useContext, useState } from 'react';

import Button from '@mui/material/Button';
import { multiStepContext } from '../stepContext';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function DisplayData() {
    const { activeStep, previousStep, submitData, userData, message } = useContext(multiStepContext);

    return (

        <div>

<h5 className="text-center text-danger">{message}</h5>

            <form>
                <div className='post_wrapper'>

                    <h2>FinalData Display</h2>
                    <div className='Container-fluid'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <dl>


                                    <dt>Name</dt>
                                    <dd>{userData.name}</dd>
                                    
                                    <dt>RollNumber</dt>
                                    <dd>{userData.rollnumber}</dd>
                                    <dt>Class</dt>

                                    <dd>{userData.class}</dd>
                                    <dt>English</dt>

                                    <dd>{userData.english}</dd>
                                    <dt>Hindhi</dt>

                                    <dd>{userData.hindi}</dd>
                                    <dt>Teligu</dt>

                                    <dd>{userData.telugu}</dd>
                                    <dt>Maths</dt>

                                    <dd>{userData.maths}</dd>
                                    <dt>Science</dt>

                                    <dd>{userData.science}</dd>
                                    <dt>Social</dt>

                                    <dd>{userData.social}</dd>
                                    <dt>Es</dt>

                                    <dd>{userData.es}</dd>

                                    <dt>ICT</dt>

                                    <dd>{userData.ict}</dd>
                                </dl>
                            </div>
                            <div className='col-lg-3'>
                                <dl>

                                    <dt>Robotics</dt>

                                    <dd>{userData.robotics}</dd>
                                    <dt>GK</dt>

                                    <dd>{userData.gk}</dd>

                                    <dt>Ve</dt>

                                    <dd>{userData.ve}</dd>
                                    <dt>Skills</dt>

                                    <dd>{userData.skills}</dd>
                                    <dt>IITM</dt>

                                    <dd>{userData.iitm}</dd>
                                    <dt>IITP</dt>

                                    <dd>{userData.iitp}</dd>
                                    <dt>IITC</dt>

                                    <dd>{userData.iitc}</dd>
                                    <dt>IITR</dt>

                                    <dd>{userData.iitr}</dd>
                                    <dt>NEETB</dt>

                                    <dd>{userData.neetb}</dd>
                                    <dt>NEETZ</dt>

                                    <dd>{userData.neetz}</dd>

                                </dl>
                            </div>


                            <div className='col-lg-3'>
                                <dl>
                                    <dt>AM</dt>

                                    <dd>{userData.am}</dd>
                                    <dt>Happy</dt>

                                    <dd>{userData.happy}</dd>
                                    <dt>DM</dt>

                                    <dd>{userData.dm}</dd>
                                    <dt>Obedience</dt>

                                    <dd>{userData.obedience}</dd>
                                    <dt>Under</dt>

                                    <dd>{userData.under}</dd>
                                    <dt>Brave</dt>

                                    <dd>{userData.brave}</dd>
                                    <dt>PS</dt>

                                    <dd>{userData.ps}</dd>
                                    <dt>Technical</dt>

                                    <dd>{userData.technical}</dd>
                                    <dt>ART</dt>

                                    <dd>{userData.art}</dd>
                                    <dt>Communication</dt>

                                    <dd>{userData.communication}</dd>

                                </dl>
                            </div>
                            <div className='col-lg-3'>
                                <dl>
                                    <dt>Sports</dt>

                                    <dd>{userData.sports}</dd>
                                    <dt>Dance</dt>

                                    <dd>{userData.dance}</dd>
                                    <dt>Music</dt>

                                    <dd>{userData.music}</dd>
                                    <dt>Karate</dt>

                                    <dd>{userData.karate}</dd>
                                    <dt>Others1</dt>

                                    <dd>{userData.others1}</dd>
                                    <dt>Others2</dt>

                                    <dd>{userData.others2}</dd>
                                    <dt>Height</dt>

                                    <dd>{userData.height}</dd>
                                    <dt>Weight</dt>

                                    <dd>{userData.weight}</dd>
                                    <dt>BMI</dt>

                                    <dd>{userData.bmi}</dd>
                                    <dt>Achive</dt>

                                    <dd>{userData.achive}</dd>

                                </dl>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <Link  to="/"><Button  variant="contained"  color="secondary">Back</Button></Link> */}

                        {/* <Button className='nextbtn' variant="contained" onClick={() => nextStep()} color="primary">Next</Button><br /> */}
                        <Button className='prevbtn' variant="contained" onClick={() => previousStep()} color="secondary">Previous</Button>
                        <Button className='nextbtn' variant="contained" onClick={submitData} color="primary">submit</Button>

                    </div>
                </div>
            </form>
        </div>
    );
}

export default DisplayData;
