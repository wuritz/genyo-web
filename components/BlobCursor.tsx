"use client";
import React, { useEffect } from 'react';

function BlobCursor() {
    useEffect(() => {
        const blob = document.getElementById("blob");
        if (blob == null) return;

        let frameId: number | null = null;
        let pointerX = 0;
        let pointerY = 0;

        const updatePosition = () => {
            // An offset to match the css 34vmax
            const offset = (window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth) * 0.34;

            blob.style.left = `${pointerX - offset}px`;
            blob.style.top = `${pointerY - offset}px`;
            frameId = null;
        };

        const handlePointerMove = (event: PointerEvent) => {
            pointerX = event.clientX;
            pointerY = event.clientY;

            // Coalesce multiple pointermove events into a single
            // style write per animation frame.
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
        <div>
            <div id={"gradient-color"}></div>
            <div id={"blob"}></div>
            <div id={"blur"}></div>
        </div>
    );
}

export default BlobCursor;