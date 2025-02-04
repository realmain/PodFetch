import {useState} from "react"
import {useTranslation} from "react-i18next"
import {ConfirmModal} from "../components/ConfirmModal"
import {Heading1} from "../components/Heading1"
import {SettingsData} from "../components/SettingsData"
import {SettingsNaming} from "../components/SettingsNaming"
import {SettingsOPMLExport} from "../components/SettingsOPMLExport"
import {SettingsPodcastDelete} from "../components/SettingsPodcastDelete"
import {Modal} from "../components/Modal";
import {InfoModal} from "../components/InfoModal";

export const SettingsPage = () => {
    const {t} = useTranslation()
    const [selectedSection, setSelectedSection] = useState<string>('retention')

    return (
        <div>
            <ConfirmModal />

            <Heading1 className="mb-10">{t('settings')}</Heading1>

            {/* Tabs */}
            <div className={`
                scrollbox-x mb-10 py-2
                w-[calc(100vw-2rem)] ${/* viewport - padding */ ''}
                xs:w-[calc(100vw-4rem)] ${/* viewport - padding */ ''}
                md:w-[calc(100vw-18rem-4rem)] ${/* viewport - sidebar - padding */ ''}
            `}>
                <ul className="flex gap-2 border-b border-stone-200 min-w-fit text-stone-500">
                    <li className={`cursor-pointer inline-block px-2 py-4 ${selectedSection === 'retention' && 'border-b-2 border-mustard-600 text-mustard-600'}`} onClick={()=>setSelectedSection('retention')}>
                        {t('data-retention')}
                    </li>
                    <li className={`cursor-pointer inline-block px-2 py-4 ${selectedSection === 'opml' && 'border-b-2 border-mustard-600 text-mustard-600'}`} onClick={()=>setSelectedSection('opml')}>
                        {t('opml-export')}
                    </li>
                    <li className={`cursor-pointer inline-block px-2 py-4 ${selectedSection === 'naming' && 'border-b-2 border-mustard-600 text-mustard-600'}`} onClick={()=>setSelectedSection('naming')}>
                        {t('podcast-naming')}
                    </li>
                    <li className={`cursor-pointer inline-block px-2 py-4 ${selectedSection === 'podcasts' && 'border-b-2 border-mustard-600 text-mustard-600'}`} onClick={()=>setSelectedSection('podcasts')}>
                        {t('manage-podcasts')}
                    </li>
                </ul>
            </div>

            <div className="max-w-screen-md">
                {selectedSection === 'retention' && (
                    <SettingsData />
                )}

                {selectedSection === 'opml' && (
                    <SettingsOPMLExport />
                )}

                {selectedSection === 'naming' && (
                    <SettingsNaming />
                )}

                {selectedSection === 'podcasts' && (
                    <SettingsPodcastDelete />
                )}
            </div>
            <InfoModal/>
        </div>
    )
}
