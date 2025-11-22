import React from 'react';
import Icon from '../assets/Icon.svg?react';
import { LogOut, User } from 'lucide-react';


function Header({ onLogout, user }) {
    return (
        <header className="border-b border-zinc-800 bg-zinc-950">
            <div className="mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
                <div className="flex items-center gap-3">
                    {/* Logo Icon */}
                    <div className="h-8 w-8 rounded flex items-center justify-center shadow-inner">
                        <Icon className="h-10 w-10 text-indigo-500" />
                    </div>


                    {/* Title */}
                    <div>
                        <h1 className="text-2xl font-bold text-zinc-100 tracking-tight uppercase">
                            BooK_It <span className="text-zinc-600">BRUH!</span>
                        </h1>
                    </div>
                </div>

                {/* Status Indicators & Auth */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-zinc-500">
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                            <span>SYSTEM_ACTIVE</span>
                        </div>
                    </div>

                    {user && (
                        <div className="flex items-center gap-3 pl-4 border-l border-zinc-800">
                            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
                                <User className="w-3.5 h-3.5 text-indigo-500" />
                                <span className="text-xs font-medium text-zinc-400">
                                    {user.displayName || user.email}
                                </span>
                            </div>

                            <button
                                onClick={onLogout}
                                className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                                title="Sign Out"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;