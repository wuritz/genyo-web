"use client";
import React, { useEffect, useRef } from 'react';

type Props = {
    size: number;
}

function BlobCursor({ size }: Props) {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const blobWrapperRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // cursor blob thing
    useEffect(() => {
        const wrapper = blobWrapperRef.current;
        const root = rootRef.current;
        if (!wrapper || !root) return;

        let frameId: number | null = null;
        let pointerX = window.innerWidth / 2;
        let pointerY = window.innerHeight / 2;
        let isInside = false;

        const updatePosition = () => {
            wrapper.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
            frameId = null;
        };

        const handlePointerMove = (event: PointerEvent) => {
            if (window.innerWidth < 768) return;

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
        updatePosition();

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            if (frameId != null) cancelAnimationFrame(frameId);
        };
    }, []);

    // night sky :3
    useEffect(() => {
        const canvas = canvasRef.current;
        const root = rootRef.current;
        if (!canvas || !root) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let frameId: number;
        let stars: { x: number; y: number; r: number; a: number; da: number; dx: number; dy: number }[] = [];

        const resizeAndInit = () => {
            canvas.width = root.clientWidth;
            canvas.height = root.clientHeight;

            stars = [];
            for (let i = 0; i < 150; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.5 + 0.5,
                    a: Math.random(),
                    da: (Math.random() - 0.5) * 0.02,
                    dx: (Math.random() - 0.5) * 0.2,
                    dy: (Math.random() - 0.5) * 0.2
                });
            }
        };

        const renderStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                star.a += star.da;
                if (star.a <= 0.1 || star.a >= 1) {
                    star.da = -star.da;
                }

                star.x += star.dx;
                star.y += star.dy;

                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.a})`;
                ctx.fill();
            });

            frameId = requestAnimationFrame(renderStars);
        };

        window.addEventListener('resize', resizeAndInit);
        resizeAndInit();
        renderStars();

        return () => {
            window.removeEventListener('resize', resizeAndInit);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div ref={rootRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-black">
            <div id="gradient-color" className={"hidden md:block"}></div>

            <div className="hidden md:block absolute inset-0 bg-black mix-blend-multiply">
                <div
                    ref={blobWrapperRef}
                    className="absolute opacity-0 transition-opacity duration-300 ease-in-out will-change-transform"
                    style={{ top: 0, left: 0 }}
                >
                    <div
                        className="rounded-full bg-white"
                        style={{
                            width: `${size}vmax`,
                            aspectRatio: '1',
                            animation: 'rotate 20s infinite linear'
                        }}
                    ></div>
                </div>
            </div>

            <div className="hidden md:block absolute inset-0 backdrop-blur-[8vmax]"></div>

            <canvas ref={canvasRef} className="absolute inset-0 opacity-60 z-10"></canvas>
        </div>
    );
}

export default BlobCursor;