//Next.js configuration - renders component on the client side/browser, apply to components with interactivity
"use client";
import { TypeAnimation } from "react-type-animation";
import styles from './TypingAnimation.module.css';

//Interface for TypingAnimation component props, specifies the allowed values for the 'page' prop (allowed values = site page names)
interface ITypingAnimation {
    page: 'Home' | 'About' | 'Portfolio' | 'Contact';
}

//Typing Animation Component - Functional component that renders the typing animation based on the provided props. (props: ITypingAnimation), TypeScript, props must conform to the structure defined by the 'ITypingAnimation' interface
export default function TypingAnimation({page}: ITypingAnimation){
    console.log(page)
     // Sequence configuration array changes based on Page being viewed. (string | number)[], TypeScript, array elements must be a string or number
    let sequenceConfig: (string | number)[] = [];

    //Configures TypingAnimation based on the page being viewed (recieves page name via props)
    switch(page){
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