"use client";
import React, { useEffect, useRef } from 'react';

function BlobCursor() {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const blobWrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const wrapper = blobWrapperRef.current;
        const root = rootRef.current;
        if (!wrapper || !root) return;

        let frameId: number | null = null;
        let pointerX = window.innerWidth / 2;
        let pointerY = window.innerHeight / 2;
        let isInside = false;

        const updatePosition = () => {
            wrapper.style.left = `${pointerX}px`;
            wrapper.style.top = `${pointerY}px`;
            frameId = null;
        };

        const handlePointerMove = (event: PointerEvent) => {
            const rect = root.getBoundingClientRect();
            const withinBounds =
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom &&
                event.clientX >= rect.left &&
                event.clientX <= rect.right;

            if (withinBounds !== isInside) {
                isInside = withinBounds;
                wrapper.style.opacity = isInside ? "1" : "0";
            }

            if (!withinBounds) return;

            pointerX = event.clientX - rect.left;
            pointerY = event.clientY - rect.top;

            if (frameId == null) {
                frameId = requestAnimationFrame(updatePosition);
            }
        };

        window.addEventListener("pointermove", handlePointerMove, { passive: true });

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            if (frameId != null) cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div ref={rootRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-black">
            <div id="gradient-color"></div>

            <div className="absolute inset-0 bg-black mix-blend-multiply">

                <div
                    ref={blobWrapperRef}
                    className="absolute opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{
                        transform: 'translate(-50%, -50%)',
                        left: '50%',
                        top: '50%',
                    }}
                >
                    <div
                        className="rounded-full bg-white"
                        style={{
                            width: '34vmax',
                            aspectRatio: '1',
                            animation: 'rotate 20s infinite linear'
                        }}
                    ></div>
                </div>

            </div>

            <div className="absolute inset-0 backdrop-blur-[8vmax]"></div>
        </div>
    );
}

export default BlobCursor;