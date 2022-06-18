import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    // synthetic event
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    // synthetic event
    const clickHandlerManagedInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }
    // synthetic event
    const clickHandlerUnmanagedInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }


    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }


    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
        console.log('Drop')
    }

    return (
        <div>
            <input type='text' value={value} onChange={changeHandler} placeholder='Управляемый'/>
            <button onClick={clickHandlerManagedInput}>Кнопка</button>
            <input type='text' ref={inputRef} placeholder='Неуправляемый'/>
            <button onClick={clickHandlerUnmanagedInput}>Кнопка</button>
            <div
                draggable
                onDrag={dragHandler}
                style={{width: 200, height: 200, background: 'green'}}
            >
            </div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? 'greenyellow' : 'darkblue', marginTop: 10}}
            >
            </div>
        </div>
    );
};

export default EventsExample;