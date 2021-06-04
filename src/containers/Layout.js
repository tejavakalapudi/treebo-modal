import React, {Fragment, useContext, useRef} from 'react';
import {Button} from '../components';
import { Store } from '../store/Store';
import { openModal } from '../actions';

const AppLayout = () => {
    const { dispatch } = useContext(Store);
    let count = useRef(0);

    const triggerSingleModal = () => openModal(dispatch);

    const triggerModalNoBG = () => {
        openModal(dispatch,{ hideOverlay: true });
    };

    const triggerNoClickOverlay = () => {
        openModal(dispatch, {
            disableOverlayClick: true
        });
    };

    const triggerModalStack = () => {

        openModal(dispatch,{ title: `Sample Modal no ${count.current}`});

        const timer = setInterval(() => {
            count.current++;

            openModal(dispatch,{
                title: `Sample Modal no ${count.current}`,
                height: 300 + (count.current * 50),
                width: 300 + (count.current * 50)
            });

            if(count.current === 2){
                count.current = 0;
                clearInterval(timer);
            }
        }, 1000);
    }

    return (
        <Fragment>
            <div style={{fontSize: '45px', fontWeight: '700', margin: '30px'}}>Modal Stack</div>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '70%'}}>
                <Button onClick={triggerSingleModal} text="Open Single Modal"/>
                <Button onClick={triggerModalNoBG} text="No Overlay"/>
                <Button onClick={triggerNoClickOverlay} text="Disable Overlay Clicks"/>
                <Button onClick={triggerModalStack} text="Trigger LIFO Stack"/>
            </div>
        </Fragment>
    );
}

export default AppLayout;