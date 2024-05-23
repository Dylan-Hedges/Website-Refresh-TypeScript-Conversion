//Next.js configuration - renders component on the client side/browser, apply to components with interactivity
"use client";
import { TypeAnimation } from "react-type-animation";
import styles from './TypingAnimation.module.css';

//Typing Animation Component
export default function TypingAnimation(props){
    let sequenceConfig = [];
    //Configures TypingAnimation based on the page being viewed (recieves page name via props)
    switch(props.page){
        case 'Home':
            sequenceConfig = ['Web Development',1000,'UI Development',1000,'Front-end Development',1000,'Email Development',1000,];
            break;
        case 'About':
            sequenceConfig = ['About',1000];
            break;
        case 'Portfolio':
            sequenceConfig = [' Portfolio',1000];
            break;
        case 'Contact':
            sequenceConfig = [' Contact',1000];
            break;
        default:
            break;
    }

    return(
        <div className={styles.typingAnimationContainer}>
            <TypeAnimation
                sequence={sequenceConfig}
                wrapper="span"
                speed={1}
                className={styles.typingAnimation}
                repeat={Infinity}
            />
        </div>
    )
}