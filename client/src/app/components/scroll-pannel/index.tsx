import * as React from 'react';

interface IScrollPanelProps {
    children: JSX.Element;
    rightBtn: JSX.Element;
    leftBtn: JSX.Element;
}

const TIME = 200;
const OFFSET = 40;

export function ScrollPanel(props: IScrollPanelProps) {
    const { children, leftBtn, rightBtn } = props;
    const [cntPos, setCntPos] = React.useState(0);

    let scrollContent: HTMLDivElement;
    let maxContent: HTMLDivElement;

    const downLeft = () => {
        this.timer = setInterval(() => {
            const maxScroll = scrollContent.clientWidth - maxContent.clientWidth;
            if (maxScroll > 0 && Math.abs(cntPos) <= maxScroll) {
                setCntPos(cntPos - OFFSET);
            }
        }, TIME);
    };

    const upLeft = () => {
        clearInterval(this.timer);
        this.timer = null;
    };

    const downRight = () => {
        this.timer = setInterval(() => {
            if (cntPos < 0) {
                setCntPos(cntPos + OFFSET);
            }
        }, TIME);
    };

    const upRight = () => {
        clearInterval(this.timer);
        this.timer = null;
    };

    const wheelContent = (e: WheelEvent) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            if (scrollContent && maxContent) {
                const maxScroll = scrollContent.clientWidth - maxContent.clientWidth;
                if (maxScroll > 0 && Math.abs(cntPos) <= maxScroll) {
                    setCntPos(cntPos - OFFSET);
                }
            }
        } else if (e.deltaY > 0) {
            if (cntPos < 0) {
                setCntPos(cntPos + OFFSET);
            }
        }
    };

    const setScrollContent = (ref: HTMLDivElement) => {
        if (ref) {
            scrollContent = ref;
            scrollContent.addEventListener('wheel', wheelContent);
        }
    }

    return (
        <div className="d-flex">
            <div className="justify-content-center align-items-center mx-2 my-auto"
                onMouseDown={() => downLeft()}
                onMouseUp={() => upLeft()}>
                {leftBtn}
            </div>
            <div className="d-flex position-relative" ref={ref => maxContent = ref}>
                <div className="d-flex align-items-center h-100 position-absolute"
                    ref={ref => setScrollContent(ref)}
                    style={{ left: `${cntPos}px` }}>
                    {children}
                </div>
            </div>
            <div className="justify-content-center align-items-center mx-2 my-auto"
                onMouseDown={() => downRight()}
                onMouseUp={() => upRight()}>
                {rightBtn}
            </div>
        </div>
    );
}
