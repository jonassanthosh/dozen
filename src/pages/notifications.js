import React, { useEffect, useState } from 'react'

function Notifications() {
    const [enabled, setEnabled] = useState(false);
    const [breakNotify, setBreakNotify] = useState(false)
    const [waterNotify, setWaterNotify] = useState(false)
    useEffect(() => {
        if (Notification.permission == 'granted') {
            setEnabled(true)
        } else if(enabled) {
            Notification.requestPermission()
        } else {
            console.log(Notification.permission)
        }
    }, [enabled])
    return (
        <>
        <div className='m-2 p-5 flex'>
            <p className='mr-3'>Enable Notification</p>
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={enabled}
                    readOnly
                />
                <div
                    onClick={() => {
                        setEnabled(!enabled);
                    }}
                    className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                    {enabled ? 'ON' : 'OFF'}
                </span>
            </label>
            </div>
            <div className='m-2 p-5 flex'>
                <p className='mr-3'>Break Notification</p>
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={breakNotify}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setBreakNotify(!breakNotify);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    ></div>
                    <span className="ml-2 text-sm font-medium text-gray-900">
                        {breakNotify ? 'ON' : 'OFF'}
                    </span>
                </label>
            </div>
            <div className='m-2 p-5 flex'>
                <p className='mr-3'>Water Intake Notification</p>
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={waterNotify}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setWaterNotify(!waterNotify);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    ></div>
                    <span className="ml-2 text-sm font-medium text-gray-900">
                        {waterNotify ? 'ON' : 'OFF'}
                    </span>
                </label>
            </div>
        </>
    )
}

export default Notifications