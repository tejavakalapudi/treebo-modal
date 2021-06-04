import React, {Fragment, useContext, useEffect} from 'react';
import {Button} from '../components';
import { Store } from '../store/Store';
import { openModal } from '../actions';

const AppLayout = () => {
    const { dispatch } = useContext(Store);
    // let count = useRef(0);

    useEffect(() => {
        // const timer = setInterval(() => {
        //     count.current++;
        //     openModal({
        //         title: `Sample Modal no ${count.current}`,
        //         content: "Content goes here",
        //         height: 300 + (count.current * 50),
        //         width: 300 + (count.current * 50)
        //     }, dispatch);

        //     if(count.current === 3){
        //         clearInterval(timer);
        //     }
        // }, 3000);
    }, []);

    return (
        <Fragment>
            <div>Modal Stack</div>
            <Button onClick={() => {openModal(dispatch)}}/>
        </Fragment>
    );
}

export default AppLayout;