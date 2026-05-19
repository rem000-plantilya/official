"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

// ... (Keep your metadata and other static structures outside or in a layout if needed)

export function AudioShowcase() {
    const SAMPLE_TRACKS = [
        { id: 1, title: "Himig Para Sa'yo", genre: "Tagalog / Worship", duration: "2:10", url: "https://mdkqj3x3d9.ufs.sh/f/9DwSdwiPLCQkyrKYa65BrmFP1HIQ4cfO2To3aenE5AWbwkDC" },
        { id: 2, title: "Himig Para Sa'yo(Instrumental)", genre: "Minus One / Instrumental", duration: "2:10", url: "https://mdkqj3x3d9.ufs.sh/f/9DwSdwiPLCQkpn8WXpDEhGA2Ccv5Y01FoVSU4rfdst8LMIeT" },
        { id: 3, title: "Kabataan Ika'y Isang Liwanag", genre: "Worship / Soft", duration: "4:42", url: "https://mdkqj3x3d9.ufs.sh/f/9DwSdwiPLCQkVu4pz0dd4UpgHFXWe08YcTxu2krSIs7yQZDf" },
        { id: 4, title: "Be Good and Kind Like Jesus", genre: "English / Upbeat", duration: "2:30", url: "https://mdkqj3x3d9.ufs.sh/f/9DwSdwiPLCQkJVuHWwm89EeGC8hy7d1iurVWPlZFgKSfAIvt" },
        { id: 5, title: "Kahit Magkaiba Tayo", genre: "Love Song / Pop", duration: "4:00", url: "https://mdkqj3x3d9.ufs.sh/f/9DwSdwiPLCQkb3VnQ3SDnWxrPwzqs7Ou2ZVMKdgtlmIovGf3" },
    ];

    const [currentTrack, setCurrentTrack] = useState(SAMPLE_TRACKS[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize Audio instance on client-side mount
    useEffect(() => {
        audioRef.current = new Audio(currentTrack.url);

        // Clean up on unmount
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    // Sync state changes with the HTML5 audio element
    useEffect(() => {
        if (!audioRef.current) return;

        // If the audio source changed, update it
        if (audioRef.current.src !== currentTrack.url) {
            audioRef.current.pause();
            audioRef.current.src = currentTrack.url;
            // If it was already playing, keep playing the new track
            if (isPlaying) {
                audioRef.current.play().catch(err => console.log("Playback interrupted:", err));
            }
        } else {
            // Toggle play/pause state on same track
            if (isPlaying) {
                audioRef.current.play().catch(err => console.log("Playback interrupted:", err));
            } else {
                audioRef.current.pause();
            }
        }
    }, [currentTrack, isPlaying]);



    const handleTrackSelect = (track: typeof SAMPLE_TRACKS[0]) => {
        if (currentTrack.id === track.id) {
            // Toggle play/pause if clicking the same track
            setIsPlaying(!isPlaying);
        } else {
            // Pick new track and play instantly
            setCurrentTrack(track);
            setIsPlaying(true);
        }
    };

    return (
        <section id="showcase" className="py-24 px-4 bg-gradient-to-t from-base-200 to-base-300">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-xs uppercase tracking-widest text-accent font-bold mb-2">Sonic Samples</h2>
                    <p className="text-3xl md:text-4xl font-black">Listen to the Monad Standard</p>
                    <p className="text-sm text-base-content/50 mt-2">Every track is generated using exclusive AI pipelines and polished by experts.</p>
                </div>

                {/* Audio Engine Container */}
                <div className="bg-base-100 rounded-3xl p-6 md:p-8 shadow-2xl border border-base-200">

                    {/* Main Hero Control Card */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-base-200 rounded-2xl mb-6">
                        <div className="w-24 h-24 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                            <Volume2 className={`w-10 h-10 text-white ${isPlaying ? 'animate-bounce' : ''}`} />
                        </div>
                        <div className="text-center sm:text-left flex-1">
                            <span className="badge badge-xs badge-accent font-bold uppercase tracking-wider mb-1">
                                {isPlaying ? "Now Playing" : "Selected"}
                            </span>
                            <h4 className="text-2xl font-black tracking-tight">{currentTrack.title}</h4>
                            <p className="text-sm text-base-content/60">{currentTrack.genre} • {currentTrack.duration}</p>
                        </div>
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="btn btn-circle btn-primary btn-lg shadow-md"
                            aria-label={isPlaying ? "Pause music" : "Play music"}
                        >
                            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                        </button>
                    </div>

                    {/* Interactive Tracklist Grid */}
                    <div className="divide-y divide-base-200/50">
                        {SAMPLE_TRACKS.map((track) => {
                            const isSelectedAndPlaying = currentTrack.id === track.id && isPlaying;

                            return (
                                <div
                                    key={track.id}
                                    className={`flex items-center justify-between py-4 px-2 hover:bg-base-200/40 rounded-xl transition-colors group ${currentTrack.id === track.id ? "bg-base-200/20" : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-mono opacity-40 w-4">{track.id}</span>
                                        <div>
                                            <p className={`font-bold transition-colors ${isSelectedAndPlaying ? 'text-primary' : 'group-hover:text-primary'}`}>
                                                {track.title}
                                            </p>
                                            <p className="text-xs opacity-50">{track.genre}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-mono opacity-60 hidden sm:block">{track.duration}</span>
                                        <button
                                            onClick={() => handleTrackSelect(track)}
                                            className={`btn btn-sm btn-circle ${isSelectedAndPlaying ? "btn-primary" : "btn-ghost text-base-content/60 hover:text-primary"
                                                }`}
                                            aria-label={`Play ${track.title}`}
                                        >
                                            {isSelectedAndPlaying ? (
                                                <Pause className="w-4 h-4" />
                                            ) : (
                                                <Play className="w-4 h-4 fill-current" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}