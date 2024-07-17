import React, { useState } from 'react'
import Headroom from 'react-headroom'
import Search from '../ui/Search'


import { useWindowSize } from 'react-use';
import { useTheme } from '../contexts/themeContext';
import { useSidebar } from '../contexts/sidebarContext';
import { useNavigate } from 'react-router-dom';

const AppBar = () => {
    const navigate = useNavigate();
    const [searchModalOpen, setSearchModalOpen] = useState(false);
    const [notificationsPanelOpen, setNotificationsPanelOpen] = useState(false);
    const [messagesPanelOpen, setMessagesPanelOpen] = useState(false);
    const { width } = useWindowSize();
    const { theme, toggleTheme } = useTheme();
    const { setOpen } = useSidebar();

    return (
        <>
            <Headroom style={{ zIndex: 999 }}>
                <div className="flex items-center justify-between">
                    {
                        width < 1920 &&
                        <button className="icon text-2xl leading-none"
                            aria-label="Open sidebar"
                            onClick={() => setOpen(true)}>
                            <i className="icon-bars-solid" />
                        </button>
                    }
                    {
                        width >= 768 &&
                        <Search wrapperClass="flex-1 max-w-[1054px] ml-5 mr-auto 4xl:ml-0" />
                    }
                    <div className="flex items-center gap-5 md:ml-5 xl:gap-[26px]">
                        {
                            width < 768 &&
                            <button className="text-[20px] leading-none text-gray dark:text-gray-red xl:text-2xl"
                                    aria-label="Open search"
                                    onClick={() => setSearchModalOpen(true)}>
                                <i className="icon-magnifying-glass-solid"/>
                            </button>
                        }
                        <button className="text-2xl leading-none text-gray dark:text-gray-red"
                            aria-label="Change theme"
                            onClick={toggleTheme}
                        >
                            <i className={`icon-${theme === 'light' ? 'sun-bright' : 'moon'}-regular`} />
                        </button>
                        <div className="relative h-fit mt-1.5 xl:self-end xl:mt-0 xl:mr-1.5">
                            <button className="text-lg leading-none text-gray dark:text-gray-red xl:text-[20px]"
                                onClick={() => setNotificationsPanelOpen(true)}
                                aria-label="Notifications">
                                <i className="icon-bell-solid" />
                            </button>
                            <span className="absolute w-3 h-3 rounded-full bg-red -top-1.5 -right-1.5 border-[2px] border-body
                                  xl:w-6 xl:h-6 xl:-top-5 xl:-right-4 xl:flex xl:items-center xl:justify-center">
                                <span className="hidden text-xs font-bold text-white dark:text-[#00193B] xl:block">
                                    7
                                </span>
                            </span>
                        </div>
                        <div className="relative h-fit mt-1.5 xl:self-end xl:mt-0 xl:mr-1.5">
                            <button className="text-lg leading-none text-gray dark:text-gray-red xl:text-[20px]"
                                onClick={() => setMessagesPanelOpen(true)}
                                aria-label="Messages">
                                <i className="icon-message-solid" />
                            </button>
                            <span className="absolute w-3 h-3 rounded-full bg-green -top-1.5 -right-1.5 border-[2px] border-body
                                  xl:w-6 xl:h-6 xl:-top-5 xl:-right-4 xl:flex xl:items-center xl:justify-center">
                                <span className="hidden text-xs font-bold text-white dark:text-[#00193B] xl:block">
                                    2
                                </span>
                            </span>
                        </div>
                        <div className="relative">
                            <button className="h-8 w-8 rounded-full bg-accent text-widget text-sm flex items-center
                                    justify-center relative xl:w-11 xl:h-11 xl:text-lg"
                                // onClick={() => navigate('/general-settings')}
                                aria-label="Account menu">
                                <i className="icon-user-solid" />
                            </button>
                            <span className="badge-online" />
                        </div>
                    </div>
                </div>
            </Headroom>
        </>
    )
}

export default AppBar