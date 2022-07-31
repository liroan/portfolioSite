import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, {FC} from "react";

interface AnimateProps {
    animateClasses: string,
    children: React.ReactNode
}

const Animate:FC<AnimateProps> = ({ animateClasses, children }) => {
    return (
        <TrackVisibility>
            {
                ({ isVisible }) => (
                    <div className={isVisible ? animateClasses : ""}>
                        { children }
                    </div>
                )
            }
        </TrackVisibility>
    )
}

export default Animate;