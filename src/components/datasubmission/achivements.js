import React, { useContext, useState } from 'react';
// import TextField from '@mui/material/TextField';
import { TextField } from '@mui/material';

import Button from '@mui/material/Button';
import { multiStepContext } from '../stepContext';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Achivements1() {
    const { submitData, previousStep, nextStep, userData, setUserData} = useContext(multiStepContext);
    const [message, processMessage] = useState("Please Enter The Below Details");

    return (

        <div>
            <h5 className="text-center text-danger">{message}</h5>

            <form>
                <div className='post_wrapper1'>
                    <h2>Achievements Development</h2>
                    <div className='acadamicwrapper1'>

                        <div className='inpuboxs'>

                            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: 450 }, }} noValidate autoComplete="off">
                                <div>
                                    <TextField label="Achievements" multiline rows={4}
                                        value={userData['achive']} onChange={(e) => setUserData({ ...userData, "achive": e.target.value })}
                                        margin="normal" type="text" varient="oulined" color="secondary" />
                                </div>
                            </Box>
                        </div>


                    </div>
                    <div>
                        <Button className='prevbtn' variant="contained" onClick={() => previousStep()} color="secondary">Previous</Button>
                        {/* <Button className='nextbtn' variant="contained" onClick={submitData} color="primary">submit</Button> */}
                        <Button className='nextbtn' variant="contained" onClick={() => nextStep()} color="primary">Finish</Button><br />


                    </div>
                </div>
            </form>
        </div>
    );
}

export default Achivements1;
