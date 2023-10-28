import {createSignal} from "solid-js";

const MyComponent = () => {
    const [isDragging, setIsDragging] = createSignal(false);
    const [initialY, setInitialY] = createSignal(0);
    const [currentY, setCurrentY] = createSignal(0);

    const handleTouchStart = (event:any) => {
        setIsDragging(true);
        setInitialY(event.touches[0].clientY);
    };

    const handleTouchMove = (event:any) => {
        if (isDragging()) {
            const touchY = event.touches[0].clientY;
            const deltaY = touchY - initialY();
            setCurrentY((prevY) => prevY + deltaY);
            setInitialY(touchY);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleMouseDown = (event:any) => {
        setIsDragging(true);
        setInitialY(event.clientY);
    };

    const handleMouseMove = (event:any) => {
        if (isDragging()) {
            const mouseY = event.clientY;
            const deltaY = mouseY - initialY();
            setCurrentY((prevY) => prevY + deltaY);
            setInitialY(mouseY);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
       <div
          style={{ position: "absolute", top: `${currentY}px` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
       >
          Drag me vertically!
       </div>
    );
};

export default MyComponent;